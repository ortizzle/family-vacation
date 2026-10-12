/* fv-drive.js — the Google Drive copy for every trip app in this repo.
 *
 * All the trip apps share one origin, so they share one localStorage. Rather than one Drive
 * switch per trip, any trip page backs up EVERY trip's data on this phone into one dated file:
 *   My Drive › Ortiz App Backups › Family Vacation › family-vacation-YYYY-MM-DD.json
 * Connect once on any trip page and past trips (journals, notes, postcards) are covered too.
 *
 * Needs ortiz-drive.js loaded first (the shared module — never edit it here).
 * Page usage:  FamilyDrive.start({ toast });  FamilyDrive.card(host, opts);  FamilyDrive.bar(host);
 */
(function () {
  'use strict';
  // Key prefix per trip app. Anything that isn't the family's own data stays out: the Claude
  // key, UI nav state and the weather cache.
  var TRIPS = [
    { id: 'alaska-2026', label: 'Alaska', re: /^ak26[-_]/ },
    { id: 'camping-2026', label: 'Camping', re: /^camp26-/ },
    { id: 'jerome-2026', label: 'Jerome', re: /^jerome-/ },
    { id: 'san-diego-2026', label: 'San Diego', re: /^sd26_/ },
    { id: 'canyon-light-2026', label: 'Canyon Light', re: /^pg26-/ },
    { id: 'asia-2027', label: 'Asia', re: /^aa27_/ }
  ];
  var SKIP = /^aa27_ui_|^ak26-weather$|key|token|secret|password|passcode/i;

  function collect() {
    var out = { app: 'family-vacation', trips: {} };
    var keys = [];
    for (var i = 0; i < localStorage.length; i++) keys.push(localStorage.key(i));
    keys.sort();
    keys.forEach(function (k) {
      if (!k || SKIP.test(k)) return;
      var trip = TRIPS.filter(function (t) { return t.re.test(k); })[0];
      if (!trip) return;
      var raw = localStorage.getItem(k), val;
      try { val = JSON.parse(raw); } catch (e) { val = raw; }
      (out.trips[trip.id] = out.trips[trip.id] || {})[k] = val;
    });
    return out;
  }

  var barHosts = [];
  function remount() {
    barHosts = barHosts.filter(function (h) { return document.body.contains(h.el); });
    barHosts.forEach(function (h) { OrtizDrive.mountBar(h.el, h.opts); });
  }

  window.FamilyDrive = {
    collect: collect,
    start: function (opts) {
      opts = opts || {};
      OrtizDrive.init({
        app: 'Family Vacation',
        prefix: 'family-vacation',
        getData: collect,
        toast: opts.toast,
        onChange: remount
      });
      // The trip pages write localStorage from dozens of places; a cheap fingerprint check
      // while the page is open catches them all without touching each one.
      setInterval(function () { if (document.visibilityState === 'visible') OrtizDrive.check(); }, 60000);
    },
    // A small titled card holding the Drive switch. opts: { className, title, text, block }.
    card: function (host, opts) {
      if (!host) return;
      opts = opts || {};
      host.textContent = '';
      if (!document.getElementById('fv-drive-style')) {
        var css = document.createElement('style');
        css.id = 'fv-drive-style';
        css.textContent = '.fv-drive-title{font-weight:700;margin:0 0 4px}.fv-drive-text{font-size:.85em;opacity:.8;line-height:1.45;margin:0 0 2px}';
        document.head.appendChild(css);
      }
      var wrap = document.createElement('div');
      wrap.className = 'fv-drive-card' + (opts.className ? ' ' + opts.className : '');
      if (opts.title !== false) {
        var h = document.createElement('div');
        h.className = 'fv-drive-title';
        h.textContent = opts.title || '☁ Backup';
        wrap.appendChild(h);
      }
      var p = document.createElement('div');
      p.className = 'fv-drive-text';
      p.textContent = opts.text || 'Everything you’ve saved in the trip apps on this phone — journals, notes, checklists, postcards, game scores — for every trip, in one dated file.';
      wrap.appendChild(p);
      wrap.appendChild(OrtizDrive.settingsBlock(opts.block || {}));
      host.appendChild(wrap);
    },
    bar: function (host, opts) {
      if (!host) return;
      if (!barHosts.some(function (h) { return h.el === host; })) barHosts.push({ el: host, opts: opts });
      OrtizDrive.mountBar(host, opts);
    }
  };
})();
