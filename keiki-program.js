/* Kauai Connect: keiki program detail page (kauaiconnect.com/keiki-program/...).
   Hosted on GitHub Pages; the WordPress "Single: Keiki Program" template loads it with one <script src>.
   It reads the program's own post content (organization, description, address, contact, phone, email, website,
   ages, fees, about) plus its types / area / organization from the site's REST API, and redraws the page in the
   same look as the Keiki Resources list (same type colours, icons and names as build_keiki_map.py).
   If anything fails, the original page is left exactly as it was. */
(function(){
'use strict';
if(window.__kcpLoaded){return;} window.__kcpLoaded=true;
var body=document.body; if(!body){return;}
var pid=(body.className.match(/\bpostid-(\d+)\b/)||[])[1];
if(!pid||!/\bsingle-keiki-program\b/.test(body.className)){return;}
var API='/wp-json/wp/v2/';
if(!/kauaiconnect\.com$/.test(location.hostname)){API='https://kauaiconnect.com'+API;}
var UP='https://kauaiconnect.com/wp-content/uploads/';
/* keep in step with TYPE_COLORS / CATEGORIES in scripts/build_keiki_map.py */
var LOOK={
 'youth-sports-and-recreational-activities':{c:'#0E6E7E',i:UP+'2024/04/sports.svg',n:'Youth Sports and Recreation'},
 'arts-and-cultural-programs':{c:'#C2571A',i:UP+'2024/04/art.svg',n:'Arts and Culture'},
 'summer-camps-and-special-programs':{c:'#7B4FA0',i:UP+'2024/04/island.svg',n:'Summer Camps and Special Programs'},
 'educational-programs-and-schools':{c:'#2E7D32',i:UP+'2024/04/graduate.svg',n:'Learning and Schools'},
 'health-and-well-being-services':{c:'#B5266B',i:UP+'2024/04/health_wellness.svg',n:'Health and Well-being'},
 'community-organizations-and-support-services':{c:'#2F5DA8',i:UP+'2024/04/spa.svg',n:'Community and Family Support'},
 'after-school-programs':{c:'#8A6A00',i:UP+'happy_hour.svg',n:'After-School Programs'},
 'childcare-and-early-learning-centers':{c:'#A23E48',i:UP+'playground.svg',n:'Childcare and Early Learning'},
 'libraries-and-educational-resources':{c:'#5B6770',i:UP+'2024/04/book.svg',n:'Libraries and Learning Resources'}
};
var OTHER={c:'#5B6770',i:'',n:''};
var AREA={North:'North Shore',East:'East Side',Lihue:'Līhuʻe',South:'South Shore',West:'West Side'};

var CSS=[
'html.kcp-on .wp-block-post-featured-image,html.kcp-on .wp-block-post-title,html.kcp-on .wp-block-post-content,html.kcp-on .kcp-src{display:none!important}',
'html.kcp-on .wp-site-blocks>.wp-block-group[style*="padding-top:8vh"]{padding-top:22px!important}',
'.kcp{--ink:#131313;--text:#595959;--soft:#f7f9fa;--line:#e3e7ea;--sun:#ffe24a;--free:#1B7A43;box-sizing:border-box;max-width:1100px;margin:0 auto;color:var(--text);text-align:left;font-size:16px;line-height:1.55}',
'.kcp *{box-sizing:border-box}',
'.kcp a{color:var(--ink)}',
'.kcp :focus-visible{outline:3px solid var(--ink);outline-offset:2px;border-radius:6px}',
'.kcp-back{display:inline-flex;align-items:center;gap:6px;font-size:.92rem;font-weight:600;text-decoration:none;color:var(--text)!important;margin:0 0 18px}',
'.kcp-back:hover{color:var(--ink)!important;text-decoration:underline}',
'.kcp-back svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}',
'.kcp-head{position:relative;border-radius:24px;padding:28px 30px 26px;margin:0 0 26px;background:color-mix(in srgb,var(--c) 6%,#fff);border:1px solid color-mix(in srgb,var(--c) 20%,#fff);overflow:hidden}',
'.kcp-head::before{content:"";position:absolute;inset:0 0 auto 0;height:7px;background:var(--c)}',
'.kcp-types{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 12px}',
'.kcp-type{display:inline-flex;align-items:center;gap:8px;font-size:.84rem;font-weight:600;color:var(--tc)!important;background:#fff;border:1px solid color-mix(in srgb,var(--tc) 30%,#fff);border-radius:999px;padding:5px 12px 5px 6px;text-decoration:none}',
'.kcp-type:hover{border-color:var(--tc)}',
'.kcp-type i{width:24px;height:24px;flex:none;border-radius:50%;background:color-mix(in srgb,var(--tc) 13%,#fff);position:relative}',
'.kcp-type i::after{content:"";position:absolute;inset:5px;background:var(--tc);-webkit-mask:var(--i) center/contain no-repeat;mask:var(--i) center/contain no-repeat}',
'.kcp h1{margin:0;font-size:clamp(1.8rem,4vw,2.6rem);line-height:1.12;letter-spacing:-.01em;color:var(--ink);font-weight:700}',
'.kcp-org{margin:8px 0 0;font-size:1.05rem}',
'.kcp-org b{color:var(--ink);font-weight:600}',
'.kcp-tags{display:flex;flex-wrap:wrap;gap:8px;margin:16px 0 0}',
'.kcp-tag{display:inline-flex;align-items:center;gap:6px;font-size:.88rem;font-weight:600;background:#fff;color:var(--ink);border-radius:999px;padding:6px 13px;border:1px solid var(--line)}',
'.kcp-tag svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;opacity:.75}',
'.kcp-tag.free{background:#E3F2E8;border-color:#E3F2E8;color:var(--free)}',
'.kcp-main{display:grid;grid-template-columns:minmax(0,1fr) 340px;gap:28px;align-items:start}',
'.kcp-media{margin:0 0 24px;border-radius:20px;overflow:hidden;background:var(--soft);border:1px solid var(--line);display:grid;place-items:center;max-height:380px}',
'.kcp-media img{display:block;width:100%;height:auto;max-height:380px;object-fit:contain}',
'.kcp-media.photo img{object-fit:cover}',
'.kcp-sec{margin:0 0 26px}',
'.kcp h2{margin:0 0 10px;font-size:1.2rem;line-height:1.3;color:var(--ink);font-weight:700;text-align:left}',
'.kcp-desc p{margin:0 0 .8em;font-size:1.04rem;color:#3d3d3d}',
'.kcp-desc strong{color:var(--ink)}',
'.kcp-orgbox{display:flex;gap:18px;align-items:flex-start;background:var(--soft);border-radius:20px;padding:20px 22px}',
'.kcp-logo{flex:none;width:76px;height:76px;border-radius:16px;background:#fff;border:1px solid var(--line);display:grid;place-items:center;padding:8px}',
'.kcp-logo img{max-width:100%;max-height:100%;object-fit:contain;display:block}',
'.kcp-orgbox p{margin:0;font-size:.97rem}',
'.kcp-card{position:sticky;top:90px;background:#fff;border:1px solid var(--line);border-radius:20px;padding:22px;box-shadow:0 6px 22px rgba(19,19,19,.06)}',
'.kcp-btns{display:flex;flex-direction:column;gap:8px;margin:0 0 18px}',
'.kcp-btn{display:flex;align-items:center;justify-content:center;gap:8px;border-radius:999px;padding:12px 16px;font-weight:700;font-size:.97rem;text-decoration:none!important;border:1.5px solid var(--c);color:var(--c)!important;background:#fff;text-align:center}',
'.kcp-btn.pri{background:var(--c);color:#fff!important}',
'.kcp-btn:hover{filter:brightness(.92)}',
'.kcp-btn svg{width:17px;height:17px;flex:none;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}',
'.kcp-dl{margin:0;padding:0}',
'.kcp-row{display:grid;grid-template-columns:34px minmax(0,1fr);gap:10px;padding:12px 0;border-top:1px solid var(--line)}',
'.kcp-row:first-child{border-top:0;padding-top:2px}',
'.kcp-ic{width:34px;height:34px;border-radius:10px;background:color-mix(in srgb,var(--c) 10%,#fff);color:var(--c);display:grid;place-items:center}',
'.kcp-ic svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}',
'.kcp-row dt{font-size:.74rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--text);margin:0}',
'.kcp-row dd{margin:1px 0 0;color:var(--ink);font-size:.98rem;font-weight:500;overflow-wrap:anywhere}',
'.kcp-row dd a{color:var(--ink);text-decoration:underline;text-decoration-color:color-mix(in srgb,var(--c) 55%,#fff);text-underline-offset:3px}',
'.kcp-row dd small{display:block;margin-top:2px}',
'.kcp-row dd small a{font-weight:600;font-size:.88rem}',
'.kcp-fix{margin:16px 0 0;padding-top:14px;border-top:1px dashed var(--line);font-size:.86rem}',
'.kcp-more{margin:38px 0 0;padding-top:28px;border-top:1px solid var(--line)}',
'.kcp-more-h{display:flex;align-items:baseline;justify-content:space-between;gap:12px;flex-wrap:wrap;margin:0 0 14px}',
'.kcp-more-h h2{margin:0}',
'.kcp-more-h a{font-size:.92rem;font-weight:600}',
'.kcp-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}',
'.kcp-mc{position:relative;display:flex;flex-direction:column;gap:7px;background:#fff;border:1px solid var(--line);border-radius:20px;padding:20px 20px 18px;overflow:hidden;transition:box-shadow .15s,transform .15s;text-decoration:none!important}',
'.kcp-mc::before{content:"";position:absolute;inset:0 0 auto 0;height:6px;background:var(--tc)}',
'.kcp-mc:hover{box-shadow:0 8px 24px rgba(19,19,19,.10);transform:translateY(-2px)}',
'.kcp-mc .t{font-size:.78rem;font-weight:600;color:var(--tc)}',
'.kcp-mc h3{margin:0;font-size:1.05rem;line-height:1.25;color:var(--ink)}',
'.kcp-mc .o{font-size:.88rem;color:var(--text)}',
'.kcp-mc .g{display:flex;flex-wrap:wrap;gap:6px;margin-top:4px}',
'.kcp-mc .g span{font-size:.76rem;font-weight:600;background:var(--soft);color:var(--ink);border-radius:999px;padding:3px 9px}',
'.kcp-mc .g span.free{background:#E3F2E8;color:var(--free)}',
'@media (max-width:900px){.kcp-main{grid-template-columns:1fr}.kcp-card{position:static}.kcp-aside{order:-1}.kcp-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}',
'@media (max-width:600px){.kcp-head{padding:22px 18px 20px;border-radius:20px}.kcp-grid{grid-template-columns:1fr}.kcp-orgbox{flex-direction:column;padding:18px}.kcp-card{padding:18px}}',
'@media (prefers-reduced-motion:reduce){.kcp *{transition:none!important}.kcp-mc:hover{transform:none}}'
].join('\n');

var I={
 back:'<path d="M15 18l-6-6 6-6"/>',
 cost:'<path d="M12 3v18M16.5 7.5c-.8-1.2-2.4-2-4.5-2-2.6 0-4.3 1.3-4.3 3.2 0 4.3 9 2.3 9 6.6 0 2-1.9 3.3-4.7 3.3-2.3 0-4-.9-4.8-2.3"/>',
 ages:'<circle cx="9" cy="7" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17.5" cy="9.5" r="2.2"/><path d="M16 14.3c3 .1 5 2.4 5 5.7"/>',
 area:'<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
 person:'<circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7"/>',
 phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
 mail:'<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 6.5l8.5 6.5 8.5-6.5"/>',
 web:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3"/>',
 ext:'<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'
};
function svg(k){return '<svg viewBox="0 0 24 24" aria-hidden="true">'+I[k]+'</svg>';}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function dec(s){var t=document.createElement('textarea');t.innerHTML=s||'';return t.value;}
function txt(n){return (n&&n.textContent||'').replace(/ /g,' ').replace(/\s+/g,' ').trim();}
function getJ(path){return fetch(API+path,{credentials:'omit'}).then(function(r){if(!r.ok){throw new Error(r.status);}return r.json();});}
function okUrl(u){return /^https?:\/\//i.test(u||'');}
/* "10-21" -> "Ages 10-21"; text that already says what it is ("Grades K-5", "All ages", "Teens") is left alone */
function agesTxt(a){a=String(a||'').trim();if(/^(pre-?)?k\s*[-–]/i.test(a)){return 'Grades '+a;}return /^[\d\s\-–+]/.test(a)?'Ages '+a:a;}
function host(u){try{return new URL(u).hostname.replace(/^www\./,'');}catch(e){return u;}}

/* ---- read what the page already shows ---- */
function parse(content){
  var out={desc:[],rows:{},about:null,aboutName:''};
  if(!content){return out;}
  var cur=null;
  Array.prototype.forEach.call(content.querySelectorAll('tr'),function(tr){
    var td=tr.querySelectorAll('td'); if(!td.length||tr.querySelector('hr')){return;}
    var lab=txt(td[0]).replace(/:$/,''), val=td[1]||null;
    if(lab){cur=lab; out.rows[cur]=out.rows[cur]||[];}
    if(cur&&val){var v=txt(val); if(v){out.rows[cur].push({t:v,a:val.querySelector('a')});}}
  });
  var table=content.querySelector('table'), seenTable=false;
  Array.prototype.forEach.call(content.children,function(el){
    if(el===table||el.contains&&table&&el.contains(table)){seenTable=true;return;}
    if(el.tagName!=='P'){return;}
    var s=el.querySelector('strong'), lab=s?txt(s):'';
    if(/^Organization:?$/i.test(lab)){return;}
    if(/^About\b/i.test(lab)){out.aboutName=lab.replace(/^About\s+/i,'').replace(/:$/,'');var c=el.cloneNode(true);c.removeChild(c.querySelector('strong'));out.about=c;return;}
    if(!txt(el)){return;}
    if(seenTable){out.desc.push(el.cloneNode(true));return;}
    var c2=el.cloneNode(true);
    if(/^Program Description:?$/i.test(lab)){c2.removeChild(c2.querySelector('strong'));}
    out.desc.push(c2);
  });
  return out;
}
function first(rows,k){var r=rows[k];return r&&r[0]?r[0]:null;}

function fee(p,freeId){
  var f=p.kc_prog_fee,q=(p.kc_prog_freq||'').trim();
  if(freeId&&(p['free-program']||[]).indexOf(freeId)!==-1){return 'Free';}
  if(f===null||f===''||f===undefined){return q&&!/free/i.test(q)?q:(/free/i.test(q)?'Free':'');}
  if(parseFloat(f)===0){return 'Free';}
  return '$'+f+(q?' '+q.toLowerCase():'');
}

/* ---- build ---- */
function build(d){
  var p=d.p, src=d.src, types=d.types, org=d.org, region=d.region;
  var L0=types[0]?(LOOK[types[0].slug]||OTHER):OTHER;
  var title=dec(p.title.rendered)||txt(document.querySelector('.wp-block-post-title'));
  var orgName=org?dec(org.name):src.aboutName;
  var cost=fee(p,d.freeId)||(first(src.rows,'Fees')||{}).t||'';
  if(/^\$0\b/.test(cost)){cost='Free';}
  if(!/[0-9a-z]/i.test(cost)){cost='';}
  var ages=p.kc_prog_ages||(first(src.rows,'Ages')||{}).t||'';
  var web=okUrl(p.kc_prog_web)?p.kc_prog_web:((first(src.rows,'Website')||{}).a||{}).href||'';
  var addrLines=(src.rows.Address||[]).map(function(r){return r.t.replace(/\s*,\s*$/,'').replace(/\s+,/g,',');}).filter(Boolean);
  var street=addrLines.length>1||(addrLines[0]&&/\d/.test(addrLines[0]));
  var contact=(first(src.rows,'Contact')||{}).t||'';
  var phone=(first(src.rows,'Phone')||{}).t||'';
  var email=(first(src.rows,'Email')||{}).t||'';
  var areaN=region?(AREA[region.name]||region.name):'';

  var h='<div class="kcp" style="--c:'+L0.c+'">';
  h+='<a class="kcp-back" href="/keiki-resource-table/#list">'+svg('back')+'All keiki resources</a>';
  h+='<header class="kcp-head">';
  if(types.length){
    h+='<div class="kcp-types">';
    types.forEach(function(t){var L=LOOK[t.slug]||OTHER;
      h+='<a class="kcp-type" style="--tc:'+L.c+'" href="/keiki-resource-table/?type='+encodeURIComponent(t.slug)+'#list"><i style="--i:url('+esc(L.i)+')"></i>'+esc(L.n||dec(t.name))+'</a>';});
    h+='</div>';
  }
  h+='<h1>'+esc(title)+'</h1>';
  if(orgName){h+='<p class="kcp-org">Offered by <b>'+esc(orgName)+'</b></p>';}
  var tags='';
  if(cost){tags+='<span class="kcp-tag'+(cost==='Free'?' free':'')+'">'+svg('cost')+esc(cost)+'</span>';}
  if(ages){tags+='<span class="kcp-tag">'+svg('ages')+esc(agesTxt(ages))+'</span>';}
  if(areaN){tags+='<span class="kcp-tag">'+svg('area')+esc(areaN)+'</span>';}
  if(tags){h+='<div class="kcp-tags">'+tags+'</div>';}
  h+='</header>';

  h+='<div class="kcp-main"><div class="kcp-body">';
  if(d.img){h+='<figure class="kcp-media" id="kcp-media"><img src="'+esc(d.img)+'" alt="'+esc(title)+'" decoding="async"></figure>';}
  h+='<section class="kcp-sec"><h2>About this program</h2><div class="kcp-desc" id="kcp-desc"></div></section>';
  if(src.about&&txt(src.about)){
    h+='<section class="kcp-sec"><div class="kcp-orgbox">';
    if(org&&okUrl(org.z_taxonomy_image_url)){h+='<span class="kcp-logo"><img src="'+esc(org.z_taxonomy_image_url)+'" alt="" loading="lazy"></span>';}
    h+='<div><h2>About '+esc(orgName)+'</h2><p id="kcp-about"></p></div></div></section>';
  }
  h+='</div>';

  h+='<aside class="kcp-aside"><div class="kcp-card">';
  var btns='';
  if(web){btns+='<a class="kcp-btn pri" href="'+esc(web)+'" target="_blank" rel="noopener">Visit website'+svg('ext')+'</a>';}
  if(phone){btns+='<a class="kcp-btn" href="tel:'+esc(phone.replace(/[^\d+]/g,''))+'">'+svg('phone')+'Call '+esc(phone)+'</a>';}
  if(btns){h+='<div class="kcp-btns">'+btns+'</div>';}
  h+='<dl class="kcp-dl">';
  function row(ic,lab,val){h+='<div class="kcp-row"><span class="kcp-ic">'+svg(ic)+'</span><div><dt>'+lab+'</dt><dd>'+val+'</dd></div></div>';}
  if(cost){row('cost','Cost',esc(cost));}
  if(ages){row('ages','Ages',esc(ages));}
  if(addrLines.length||areaN){
    var a=addrLines.length?esc(addrLines.join(', ')):esc(areaN);
    var plain=function(s){return String(s).normalize('NFD').replace(/[̀-ͯʻ’'`]/g,'').toLowerCase();};
    if(areaN&&addrLines.length&&!street&&plain(addrLines.join(' ')).indexOf(plain(region.name))===-1){a+=' <small>'+esc(areaN)+'</small>';}
    if(street){a+='<small><a href="https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(addrLines.join(', ')+', Kauai, HI')+'" target="_blank" rel="noopener">Get directions</a></small>';}
    row('area','Where',a);
  }
  if(contact){row('person','Contact',esc(contact));}
  if(phone){row('phone','Phone','<a href="tel:'+esc(phone.replace(/[^\d+]/g,''))+'">'+esc(phone)+'</a>');}
  var mails=email.split(/\s*(?:,|;|\bor\b|\band\b|\s)\s*/i).filter(function(m){return /^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(m);});
  if(mails.length){row('mail','Email',mails.map(function(m){return '<a href="mailto:'+esc(m)+'">'+esc(m)+'</a>';}).join('<br>'));}
  if(web){row('web','Website','<a href="'+esc(web)+'" target="_blank" rel="noopener">'+esc(host(web))+'</a>');}
  h+='</dl>';
  h+='<p class="kcp-fix">Something out of date? <a href="/contact/">Let us know</a> and we’ll fix it.</p>';
  h+='</div></aside></div>';
  h+='<div id="kcp-rel"></div>';
  h+='</div>';
  return h;
}

function miniCard(p,typeById,freeId,orgById){
  var tid=(p['program-type']||[]).filter(function(t){return typeById[t];})[0];
  var t=typeById[tid], L=t?(LOOK[t.slug]||OTHER):OTHER;
  var g='', f=fee(p,freeId); if(f){g+='<span'+(f==='Free'?' class="free"':'')+'>'+esc(f)+'</span>';}
  if(p.kc_prog_ages){g+='<span>'+esc(agesTxt(p.kc_prog_ages))+'</span>';}
  var o=(p.organization||[])[0];
  return '<a class="kcp-mc" style="--tc:'+L.c+'" href="'+esc(p.link)+'">'+(t?'<span class="t">'+esc(L.n||dec(t.name))+'</span>':'')+
    '<h3>'+esc(dec(p.title.rendered))+'</h3>'+(o&&orgById[o]?'<span class="o">'+esc(orgById[o])+'</span>':'')+(g?'<span class="g">'+g+'</span>':'')+'</a>';
}

function related(p,types,orgName,typeById,freeId){
  var F='_fields=id,link,title,organization,program-type,free-program,kc_prog_fee,kc_prog_freq,kc_prog_ages&per_page=12&exclude='+p.id;
  var o=(p.organization||[])[0], t=types[0];
  var jobs=[o?getJ('keiki-program?organization='+o+'&'+F).catch(function(){return [];}):Promise.resolve([]),
            t?getJ('keiki-program?program-type='+t.id+'&'+F).catch(function(){return [];}):Promise.resolve([])];
  Promise.all(jobs).then(function(res){
    var orgList=res[0].slice(0,6), seen={}; orgList.forEach(function(x){seen[x.id]=1;});
    var typeList=res[1].filter(function(x){return !seen[x.id];});
    var oids={}; orgList.concat(typeList).forEach(function(x){(x.organization||[]).forEach(function(i){oids[i]=1;});});
    var ids=Object.keys(oids);
    return (ids.length?getJ('organization?include='+ids.join(',')+'&per_page=100&_fields=id,name').catch(function(){return [];}):Promise.resolve([])).then(function(os){
      var orgById={}; os.forEach(function(x){orgById[x.id]=dec(x.name);});
      /* prefer same-area programs for the "more like this" row */
      var reg=(p['keiki-region']||[])[0];
      typeList.sort(function(a,b){return ((b['keiki-region']||[]).indexOf(reg)!==-1)-((a['keiki-region']||[]).indexOf(reg)!==-1);});
      typeList=typeList.slice(0,3);
      var h='';
      if(orgList.length){
        h+='<section class="kcp-more"><div class="kcp-more-h"><h2>More from '+esc(orgName)+'</h2></div><div class="kcp-grid">'+
           orgList.map(function(x){return miniCard(x,typeById,freeId,{});}).join('')+'</div></section>';
      }
      if(typeList.length&&t){
        var L=LOOK[t.slug]||OTHER;
        h+='<section class="kcp-more"><div class="kcp-more-h"><h2>More '+esc(L.n||dec(t.name))+'</h2><a href="/keiki-resource-table/?type='+encodeURIComponent(t.slug)+'#list">See all</a></div><div class="kcp-grid">'+
           typeList.map(function(x){return miniCard(x,typeById,freeId,orgById);}).join('')+'</div></section>';
      }
      var box=document.getElementById('kcp-rel'); if(box){box.innerHTML=h;}
    });
  }).catch(function(){});
}

function run(){
  var content=document.querySelector('.wp-block-post-content');
  var fig=document.querySelector('.wp-block-post-featured-image');
  var imgEl=fig&&fig.querySelector('img');
  var anchor=fig||document.querySelector('.wp-block-post-title')||content;
  if(!anchor){return;}
  var src=parse(content);
  getJ('keiki-program/'+pid+'?_fields=id,link,title,organization,program-type,keiki-region,free-program,kc_prog_fee,kc_prog_freq,kc_prog_ages,kc_prog_web,kc_prog_desc').then(function(p){
    var o=(p.organization||[])[0], r=(p['keiki-region']||[])[0];
    return Promise.all([
      getJ('program-type?per_page=100&_fields=id,slug,name'),
      o?getJ('organization/'+o+'?_fields=id,name,link,z_taxonomy_image_url').catch(function(){return null;}):null,
      r?getJ('keiki-region/'+r+'?_fields=id,name').catch(function(){return null;}):null,
      getJ('free-program?per_page=100&_fields=id,slug').catch(function(){return [];})
    ]).then(function(res){
      var typeById={}; res[0].forEach(function(t){typeById[t.id]=t;});
      var types=(p['program-type']||[]).map(function(id){return typeById[id];}).filter(Boolean);
      var freeId=null; (res[3]||[]).forEach(function(t){if(/^(true|yes|free)$/i.test(t.slug)){freeId=t.id;}});
      var d={p:p,src:src,types:types,org:res[1],region:res[2],freeId:freeId,img:imgEl?(imgEl.currentSrc||imgEl.src):''};
      var st=document.createElement('style'); st.id='kcp-css'; st.textContent=CSS; document.head.appendChild(st);
      var wrap=document.createElement('div'); wrap.innerHTML=build(d);
      var root=wrap.firstChild;
      anchor.parentNode.insertBefore(root,anchor);
      var desc=root.querySelector('#kcp-desc');
      if(src.desc.length){src.desc.forEach(function(n){desc.appendChild(n);});}
      else{var pp=document.createElement('p');pp.textContent=p.kc_prog_desc||'';desc.appendChild(pp);}
      var ab=root.querySelector('#kcp-about'); if(ab&&src.about){while(src.about.firstChild){ab.appendChild(src.about.firstChild);} ab.innerHTML=ab.innerHTML.replace(/^(\s|&nbsp;)+/,'');}
      var mi=root.querySelector('#kcp-media img');
      if(mi){mi.addEventListener('load',function(){var w=mi.naturalWidth,hh=mi.naturalHeight;
        if(w&&hh&&w/hh>1.2&&w/hh<1.9&&w>=700){mi.parentNode.classList.add('photo');}
        if(w&&w<200){mi.parentNode.style.display='none';}});
        mi.addEventListener('error',function(){mi.parentNode.style.display='none';});}
      document.documentElement.classList.add('kcp-on');
      related(p,types,d.org?dec(d.org.name):src.aboutName,typeById,freeId);
    });
  }).catch(function(e){ if(window.console){console.warn('Keiki program page: kept the original layout',e);} })
    .then(function(){var w=document.getElementById('kcp-wait'); if(w){w.remove();}});
}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',run);}else{run();}
})();
