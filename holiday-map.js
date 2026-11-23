/* Holiday Hours map for kauaiconnect.com/holiday-hours/  (built by build_holiday_page.py)
   Adds a map above the lists. Pins follow the page: the selected holiday, side of the island, search and
   open/closed filter. Teal = open with special hours, red = closed. */
(function(){
  var COORDS = {"https://kauaiconnect.com/chocolat-hanalei/":[22.203167,-159.495978],"https://kauaiconnect.com/clinical-labs-of-hawaii/":[22.210974,-159.407817],"https://kauaiconnect.com/crystals-gems-gallery/":[22.203428,-159.495497],"https://kauaiconnect.com/florence-hanalei/":[22.204244,-159.493001],"https://kauaiconnect.com/hanalei-market/":[22.202708,-159.496779],"https://kauaiconnect.com/havaiki-oceanic-and-tribal-art/":[22.202525,-159.496096],"https://kauaiconnect.com/hawaiian-surfing-adventures/":[22.203423,-159.494911],"https://kauaiconnect.com/kilauea-paint-feed-store/":[22.206959,-159.410682],"https://kauaiconnect.com/payrollhr-hawaii/":[22.212541,-159.404641],"https://kauaiconnect.com/silver-cloud-eatery/":[22.210976,-159.416047],"https://kauaiconnect.com/the-hanalei-gourmet/":[22.202756,-159.495957],"https://kauaiconnect.com/wake-up-delicious-home-of-trucking-delicious/":[22.203337,-159.49549],"https://kauaiconnect.com/autozone-auto-parts/":[22.061516,-159.322132],"https://kauaiconnect.com/da-detailing-guy-llc/":[22.057028,-159.342215],"https://kauaiconnect.com/ganesha-body-piercing-and-jewelry/":[22.065518,-159.319621],"https://kauaiconnect.com/jcs-flowers/":[22.101481,-159.303933],"https://kauaiconnect.com/kauai-island-destination-weddings/":[22.058124,-159.371305],"https://kauaiconnect.com/longs-drugs-3/":[22.057934,-159.323755],"https://kauaiconnect.com/longs-drugs-pharmacy-3/":[22.057596,-159.32411],"https://kauaiconnect.com/ohana-sports-medicine-kapaa-physical-therapy/":[22.063605,-159.320207],"https://kauaiconnect.com/panda-express/":[22.063041,-159.320978],"https://kauaiconnect.com/ross-dress-for-less-2/":[22.06236,-159.320729],"https://kauaiconnect.com/safeway-2/":[22.06225,-159.321807],"https://kauaiconnect.com/safeway-pharmacy-2/":[22.062246,-159.321849],"https://kauaiconnect.com/starbucks-coffee-company-2/":[22.06284,-159.3215],"https://kauaiconnect.com/the-ups-store-2/":[22.062574,-159.320836],"https://kauaiconnect.com/verizon/":[22.063082,-159.320952],"https://kauaiconnect.com/wailua-drive-in/":[22.060085,-159.322652],"https://kauaiconnect.com/alii-kauai-air-tours-charters/":[21.981985,-159.344377],"https://kauaiconnect.com/aloha-images-gallery/":[21.978526,-159.368],"https://kauaiconnect.com/bank-of-hawaii-3/":[21.974915,-159.369429],"https://kauaiconnect.com/clinical-labs-of-hawaii-4/":[21.985698,-159.365857],"https://kauaiconnect.com/clinical-labs-of-hawaii-3/":[21.971687,-159.377272],"https://kauaiconnect.com/costco-gas-station/":[21.967434,-159.383134],"https://kauaiconnect.com/costco-pharmacy/":[21.967381,-159.38009],"https://kauaiconnect.com/costco-tire-center/":[21.967382,-159.380323],"https://kauaiconnect.com/costco-wholesale/":[21.967005,-159.37957],"https://kauaiconnect.com/d-m-hydraulic-sales-service/":[21.961461,-159.3948],"https://kauaiconnect.com/daddy-os-restaurant/":[21.972304,-159.366214],"https://kauaiconnect.com/deja-vu-surf-hawaii/":[21.970196,-159.379823],"https://kauaiconnect.com/fedex-ship-center/":[21.981186,-159.345286],"https://kauaiconnect.com/garden-island-eye-care/":[21.97265,-159.377263],"https://kauaiconnect.com/hanalima-bakery/":[21.966575,-159.395871],"https://kauaiconnect.com/hawaii-standard-time-brewing/":[21.971877,-159.365579],"https://kauaiconnect.com/island-helicopters-kauai/":[21.980816,-159.346753],"https://kauaiconnect.com/island-metals/":[21.995801,-159.356093],"https://kauaiconnect.com/kauai-bound-snorkel-and-golf-gear-rental/":[21.961088,-159.352676],"https://kauaiconnect.com/kauai-family-dentistry-dr-kaimana-goo-dr-summer-arnold/":[21.97058,-159.376959],"https://kauaiconnect.com/kauai-ferments/":[21.966506,-159.395818],"https://kauaiconnect.com/kauai-island-homes-llc/":[21.971868,-159.377054],"https://kauaiconnect.com/kauai-rentals-and-real-estate/":[21.971904,-159.364539],"https://kauaiconnect.com/kauai-united-way/":[21.972215,-159.376764],"https://kauaiconnect.com/lihue-aiki-kai/":[21.990664,-159.365233],"https://kauaiconnect.com/longs-drugs-2/":[21.970216,-159.379032],"https://kauaiconnect.com/mauna-loa-helicopter-tours-kauai/":[21.98179,-159.346127],"https://kauaiconnect.com/minds-eye-interiors/":[21.97243,-159.365135],"https://kauaiconnect.com/pyramid-insurance-kauai/":[21.969376,-159.379338],"https://kauaiconnect.com/rags-to-riches-vintage-modern/":[21.973763,-159.367907],"https://kauaiconnect.com/robs-good-times-grill/":[21.972553,-159.365977],"https://kauaiconnect.com/ross-dress-for-less/":[21.969547,-159.378159],"https://kauaiconnect.com/safeway-pharmacy/":[21.9687,-159.385654],"https://kauaiconnect.com/spectrum-store/":[21.970364,-159.380047],"https://kauaiconnect.com/sushi-blue-wave/":[21.978493,-159.368039],"https://kauaiconnect.com/target-2/":[21.968086,-159.376962],"https://kauaiconnect.com/target-grocery/":[21.968086,-159.376962],"https://kauaiconnect.com/territorial-savings-bank/":[21.968364,-159.385784],"https://kauaiconnect.com/the-koa-store/":[21.991108,-159.366239],"https://kauaiconnect.com/the-ups-store/":[21.969874,-159.378535],"https://kauaiconnect.com/walmart/":[21.982336,-159.365098],"https://kauaiconnect.com/brianne-co/":[21.904291,-159.464924],"https://kauaiconnect.com/craving-thai-food-truck/":[21.903742,-159.46418],"https://kauaiconnect.com/fish-eye-kauai/":[21.903623,-159.466048],"https://kauaiconnect.com/hardware-hawaii-2/":[21.904278,-159.462722],"https://kauaiconnect.com/hawaiian-trading-post/":[21.9259,-159.507894],"https://kauaiconnect.com/hpm-building-supply-lawai/":[21.921055,-159.505232],"https://kauaiconnect.com/kalaheo-cafe-coffee-company/":[21.92486,-159.523785],"https://kauaiconnect.com/kalaheo-dental-group/":[21.924993,-159.525195],"https://kauaiconnect.com/kauai-juice-co-koloa/":[21.904644,-159.464104],"https://kauaiconnect.com/la-spezia/":[21.904915,-159.463448],"https://kauaiconnect.com/longs-drugs-4/":[21.883067,-159.469213],"https://kauaiconnect.com/longs-drugs-pharmacy/":[21.883134,-159.468926],"https://kauaiconnect.com/nukumoi-surf-co/":[21.874027,-159.452825],"https://kauaiconnect.com/poipu-rental-car/":[21.875457,-159.450005],"https://kauaiconnect.com/robin-mccoy-fine-arts/":[21.922873,-159.507829],"https://kauaiconnect.com/starbucks-coffee-company/":[21.87901,-159.45883],"https://kauaiconnect.com/the-clinic-at-kalaheo/":[21.925159,-159.527729],"https://kauaiconnect.com/the-right-slice-llc-kalaheo/":[21.925647,-159.526868],"https://kauaiconnect.com/the-wine-shop/":[21.904814,-159.463746],"https://kauaiconnect.com/window-trends-of-kauai/":[21.924929,-159.525159],"https://kauaiconnect.com/capt-andys/":[21.901307,-159.587155],"https://kauaiconnect.com/clinical-labs-of-hawaii-2/":[21.957986,-159.672161],"https://kauaiconnect.com/eleele-ace-hardware/":[21.903805,-159.585634],"https://kauaiconnect.com/kauai-veterans-memorial-hospital/":[21.960969,-159.670927],"https://kauaiconnect.com/longs-drugs/":[21.905175,-159.585651],"https://kauaiconnect.com/longs-drugs-pharmacy-2/":[21.905117,-159.585629],"https://kauaiconnect.com/ohana-fishing-feed-store/":[21.970561,-159.713321],"https://kauaiconnect.com/subway/":[21.955508,-159.669049],"https://kauaiconnect.com/the-clinic-at-port-allen/":[21.901888,-159.586885],"https://kauaiconnect.com/the-clinic-at-waimea-2/":[21.961185,-159.671202],"https://kauaiconnect.com/west-kauai-hongwanji-mission-hanapepe-temple/":[21.908785,-159.587131]};
  var root = document.getElementById('kch'); if (!root) return;
  var tools = root.querySelector('.kch-tools'); if (!tools) return;

  var css = document.createElement('style');
  css.textContent = '#kch-map{height:380px;border-radius:12px;border:1px solid #e3e0d8;margin:0 0 1.2rem;z-index:0}' +
    '@media (max-width:600px){#kch-map{height:300px}}' +
    '.kch-pop b{display:block;font-size:14px;margin-bottom:2px}.kch-pop small{display:block;color:#6b6b6b;margin-bottom:6px}' +
    '.kch-pop .h{font-family:Georgia,serif;font-weight:bold;font-size:15px}.kch-pop .h.o{color:#117f93}.kch-pop .h.c{color:#b8463a}' +
    '.kch-pop .d{display:flex;justify-content:space-between;gap:12px;font-size:13px}.kch-pop .d em{font-style:normal;color:#5d6670}' +
    '.kch-pop a{display:inline-block;margin-top:8px;font-weight:600;color:#117f93}';
  document.head.appendChild(css);
  var box = document.createElement('div'); box.id = 'kch-map'; box.setAttribute('aria-label', 'Map of places with holiday hours');
  tools.parentNode.insertBefore(box, tools.nextSibling);

  function load(tag, attrs){ return new Promise(function(ok, bad){ var e = document.createElement(tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]); e.onload = ok; e.onerror = bad; document.head.appendChild(e); }); }
  var ready = window.L ? Promise.resolve() : Promise.all([
    load('link', {rel:'stylesheet', href:'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css', integrity:'sha384-sHL9NAb7lN7rfvG5lfHpm643Xkcjzp4jFvuavGOndn6pjVqS6ny56CAt3nsEVT4H', crossorigin:'anonymous'}),
    load('script', {src:'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js', integrity:'sha384-cxOPjt7s7Iz04uaHJceBmS+qpjv2JkIHNVcuOrM+YHwZOmJGBXI00mdUXEq65HTH', crossorigin:'anonymous'})
  ]);

  ready.then(function(){
    var KAUAI = [[21.86, -159.80], [22.24, -159.29]];
    var map = L.map(box, {scrollWheelZoom: false}).fitBounds(KAUAI);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);
    var layer = L.layerGroup().addTo(map), first = true;

    function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
    function popup(li, open){
      var a = li.querySelector('a'), smalls = li.querySelectorAll('small'), h = '';
      var depts = li.querySelectorAll('.kch-dept');
      if (depts.length) {
        Array.prototype.forEach.call(depts, function(d){
          var v = d.querySelector('span'); h += '<div class="d"><em>' + esc(d.querySelector('em').textContent) + '</em><span class="h ' +
            (v.classList.contains('kch-x') ? 'c' : 'o') + '">' + esc(v.textContent) + '</span></div>'; });
      } else if (open) {
        h = '<div class="h o">' + esc(li.querySelector('.kch-hrs').textContent) + '</div>';
      } else {
        h = '<div class="h c">Closed' + (smalls[1] ? ' · ' + esc(smalls[1].textContent) : '') + '</div>';
      }
      return '<div class="kch-pop"><b>' + esc(li.querySelector('b').textContent) + '</b><small>' + esc(smalls[0] ? smalls[0].textContent : '') +
        '</small>' + h + '<a href="' + esc(a.href) + '">View listing &rarr;</a></div>';
    }
    function draw(){
      layer.clearLayers();
      var panel = root.querySelector('.kch-day:not([hidden])'); if (!panel) return;
      var pts = [];
      ['open', 'closed'].forEach(function(kind){
        var sec = panel.querySelector('.kch-sec-' + kind); if (!sec || sec.hidden) return;
        Array.prototype.forEach.call(sec.querySelectorAll('li'), function(li){
          if (li.hidden) return;
          var c = COORDS[li.querySelector('a').getAttribute('href')]; if (!c) return;
          var open = kind === 'open';
          L.circleMarker(c, {radius: open ? 8 : 6, color: '#fff', weight: 2, fillOpacity: .95,
            fillColor: open ? '#117f93' : '#b8463a'}).bindPopup(popup(li, open)).addTo(layer);
          pts.push(c);
        });
      });
      if (pts.length) map.fitBounds(pts, {padding: [28, 28], maxZoom: 14, animate: !first});
      else map.fitBounds(KAUAI);
      first = false;
    }
    var t; function later(){ clearTimeout(t); t = setTimeout(draw, 30); }
    root.addEventListener('click', function(e){ if (e.target.closest('button')) later(); });
    var q = document.getElementById('kch-q'); if (q) q.addEventListener('input', later);
    draw();
  }).catch(function(){ box.remove(); });
})();
