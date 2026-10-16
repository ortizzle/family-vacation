#!/usr/bin/env python3
"""make-map-geo.py — bake an offline base map for a trip app's Map tab.

Downloads Natural Earth layers (public domain) from GitHub, clips them to a bounding box,
projects them to SVG units, and writes `const MAP_GEO = {...};` ready to paste into an
app's <script> (Red Weekend's is ~20 KB). No tiles, no API keys, works offline forever.

Usage:
  python3 -I trip-map/make-map-geo.py --bbox -94.82 38.87 -94.40 39.34 --out /tmp/map-geo.js \
      [--text "KANSAS@-94.76,39.0" "MISSOURI@-94.52,39.02" "Missouri River@-94.60,39.135"] \
      [--cache /tmp/ne]

bbox is lon_west lat_south lon_east lat_north. Pad ~3 miles past the outermost stop.
Highway shields are placed automatically (one per route, near its middle); pass --shield
"435@-94.74,39.05" to add or pin extra ones.
"""
import argparse, json, math, os, urllib.request

LAYERS = ['ne_10m_roads', 'ne_10m_rivers_lake_centerlines', 'ne_10m_rivers_north_america',
          'ne_10m_admin_1_states_provinces_lines', 'ne_10m_urban_areas', 'ne_10m_lakes']
BASE = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/'


def fetch(name, cache):
    os.makedirs(cache, exist_ok=True)
    path = os.path.join(cache, name + '.geojson')
    if not os.path.exists(path):
        print('downloading', name, '…')
        urllib.request.urlretrieve(BASE + name + '.geojson', path)
    with open(path) as f:
        return json.load(f)['features']


def lines(g):
    if not g:
        return []
    t, c = g['type'], g['coordinates']
    if t == 'LineString':
        return [c]
    if t in ('MultiLineString', 'Polygon'):
        return c
    if t == 'MultiPolygon':
        return [r for p in c for r in p]
    return []


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--bbox', nargs=4, type=float, required=True, metavar=('W', 'S', 'E', 'N'))
    ap.add_argument('--out', required=True)
    ap.add_argument('--cache', default='/tmp/natural-earth')
    ap.add_argument('--text', nargs='*', default=[], help='"LABEL@lon,lat" region/river labels')
    ap.add_argument('--shield', nargs='*', default=[], help='"435@lon,lat" extra highway shields')
    ap.add_argument('--k', type=float, default=2000, help='SVG units per degree latitude')
    a = ap.parse_args()

    W, S, E, N = a.bbox
    K = a.k
    C = math.cos(math.radians((S + N) / 2))
    P = lambda lon, lat: ((lon - W) * C * K, (N - lat) * K)
    inb = lambda c, m=0.05: W - m <= c[0] <= E + m and S - m <= c[1] <= N + m

    def path(ls, close=False):
        out = []
        for l in ls:
            pts = [P(*c[:2]) for c in l]
            if len(pts) < 2:
                continue
            out.append('M' + ' L'.join(f'{x:.1f} {y:.1f}' for x, y in pts) + (' Z' if close else ''))
        return ' '.join(out)

    clip = lambda feats, m=0.05: [(ft['properties'], [l for l in lines(ft['geometry']) if any(inb(c, m) for c in l)]) for ft in feats]

    geo = {'w': round((E - W) * C * K), 'h': round((N - S) * K), 'lon0': W, 'lat1': N, 'k': K, 'c': C}
    geo['urban'] = path([l for _, ls in clip(fetch('ne_10m_urban_areas', a.cache)) for l in ls], True)
    geo['lakes'] = path([l for _, ls in clip(fetch('ne_10m_lakes', a.cache)) for l in ls], True)
    rivers = {}
    for name in ('ne_10m_rivers_lake_centerlines', 'ne_10m_rivers_north_america'):
        for p, ls in clip(fetch(name, a.cache)):
            if ls:
                rivers.setdefault(p.get('name') or 'river', []).extend(ls)
    geo['rivers'] = {k: path(v) for k, v in rivers.items()}
    geo['state'] = path([l for _, ls in clip(fetch('ne_10m_admin_1_states_provinces_lines', a.cache)) for l in ls])

    roads, verts = {}, {}
    for p, ls in clip(fetch('ne_10m_roads', a.cache), 0.1):
        if not ls:
            continue
        n = str(p.get('name') or '')
        lvl = p.get('level')   # Natural Earth: 'Interstate' | 'Federal' (US routes) | 'State'
        key = ({'Interstate': 'I-', 'Federal': 'US-'}.get(lvl, 'S-') + n) if n else 'X'
        roads.setdefault(key, []).extend(ls)
        if n:
            verts.setdefault(key, []).extend(c for l in ls for c in l if inb(c, -0.01))
    geo['roads'] = {k: {'d': path(v)} for k, v in roads.items()}

    shields = []
    for key, pts in verts.items():
        if len(pts) < 2 or key.startswith('S-'):
            continue
        mid = pts[len(pts) // 2]
        x, y = P(*mid[:2])
        shields.append({'t': key.split('-', 1)[1], 'x': round(x, 1), 'y': round(y, 1), 'us': key.startswith('US-')})
    for s in a.shield:
        t, ll = s.split('@')
        lon, lat = map(float, ll.split(','))
        x, y = P(lon, lat)
        shields.append({'t': t, 'x': round(x, 1), 'y': round(y, 1), 'us': False})
    geo['shields'] = shields
    geo['text'] = []
    for s in a.text:
        t, ll = s.split('@')
        lon, lat = map(float, ll.split(','))
        x, y = P(lon, lat)
        geo['text'].append({'t': t, 'x': round(x, 1), 'y': round(y, 1)})

    js = 'const MAP_GEO = ' + json.dumps(geo, separators=(',', ':')) + ';'
    with open(a.out, 'w') as f:
        f.write(js)
    print(f'wrote {a.out}: {len(js)/1024:.1f} KB · {geo["w"]}×{geo["h"]} units · roads {sorted(roads)}')
    print('Review the shield list — drop or move any that land in odd spots (edit "shields" in the output).')


if __name__ == '__main__':
    main()
