/* =====================================================================
   CONSENTIMIENTO DE COOKIES (LSSI art. 22.2 y Guía de cookies de la AEPD)
   - Nada de terceros se carga sin permiso: el mapa de Google solo aparece
     si el visitante lo pide, y Google Analytics solo si lo acepta.
   - "Rechazar" y "Aceptar" tienen el mismo tamaño y estilo (criterio AEPD).
   - La elección se guarda 12 meses y se puede cambiar desde el pie.
   ===================================================================== */
(function(){
  var C = window.CONFIG || {};
  var CLAVE = 'cookies-v1', DURACION = 365*24*3600*1000;
  var GA = (C.GA4_ID||'').trim();
  var oyentes = [];

  var TXT = {
    es:{
      bTit:'Tu privacidad, tu decisión',
      bTxt:'Uso cookies de análisis para saber qué partes de la web funcionan mejor. Solo se activan si las aceptas.',
      rech:'Rechazar', acep:'Aceptar', conf:'Configurar', mas:'Política de cookies',
      pTit:'Preferencias de cookies',
      pTxt:'Elige qué permites. Puedes cambiarlo cuando quieras desde el pie de la web.',
      tec:'Necesarias', tecD:'Recuerdan tu idioma y esta elección. No te identifican y no se pueden desactivar.', siempre:'Siempre activas',
      map:'Mapa de Google', mapD:'Muestra la ubicación de la oficina. Al cargarlo, Google puede instalar sus cookies.',
      ana:'Analítica', anaD:'Google Analytics: estadísticas anónimas de visitas para mejorar la web.',
      guardar:'Guardar mi elección', cerrar:'Cerrar'
    },
    en:{
      bTit:'Your privacy, your choice',
      bTxt:'I use analytics cookies to see which parts of the site work best. They only switch on if you accept them.',
      rech:'Reject', acep:'Accept', conf:'Settings', mas:'Cookie policy',
      pTit:'Cookie preferences',
      pTxt:'Choose what you allow. You can change it at any time from the footer.',
      tec:'Necessary', tecD:'They remember your language and this choice. They do not identify you and cannot be switched off.', siempre:'Always on',
      map:'Google map', mapD:'Shows where the office is. When it loads, Google may set its own cookies.',
      ana:'Analytics', anaD:'Google Analytics: anonymous visit statistics to improve the site.',
      guardar:'Save my choice', cerrar:'Close'
    }
  };
  function t(k){var l=(document.documentElement.lang||'es').slice(0,2);return (TXT[l]||TXT.es)[k]}

  function leer(){
    try{var v=JSON.parse(localStorage.getItem(CLAVE)||'null');if(v&&Date.now()-v.t<DURACION)return v}catch(e){}
    return null;
  }
  var estado = leer();
  function permitido(cat){return !!(estado&&estado[cat])}
  function guardar(nuevo){
    var antes=estado||{};
    estado={mapas:!!nuevo.mapas,analitica:!!(GA&&nuevo.analitica),t:Date.now()};
    try{localStorage.setItem(CLAVE,JSON.stringify(estado))}catch(e){}
    if(antes.analitica&&!estado.analitica){borrarGA();location.reload();return}
    aplicar();oyentes.forEach(function(f){f(estado)});
  }

  /* ---------- Google Analytics (solo con consentimiento) ---------- */
  var gaCargado=false;
  function cargarGA(){
    if(gaCargado||!GA)return;gaCargado=true;
    window.dataLayer=window.dataLayer||[];
    window.gtag=function(){window.dataLayer.push(arguments)};
    window.gtag('js',new Date());
    window.gtag('config',GA,{anonymize_ip:true,allow_google_signals:false,allow_ad_personalization_signals:false});
    var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(GA);document.head.appendChild(s);
  }
  function borrarGA(){
    var dom=location.hostname.split('.'),ds=[];for(var i=0;i<dom.length-1;i++)ds.push('.'+dom.slice(i).join('.'));ds.push('');
    document.cookie.split(';').forEach(function(c){var n=c.split('=')[0].trim();if(/^_ga|^_gid|^_gat/.test(n))ds.forEach(function(d){document.cookie=n+'=; Max-Age=0; path=/'+(d?'; domain='+d:'')})});
  }

  /* ---------- Mapa (bajo petición) ---------- */
  function cargarMapas(){
    [].slice.call(document.querySelectorAll('[data-mapa]')).forEach(function(caja){
      if(caja.querySelector('iframe'))return;
      var f=document.createElement('iframe');
      f.src=caja.getAttribute('data-mapa');f.title=caja.getAttribute('data-mapa-titulo')||'Mapa';
      f.loading='lazy';f.referrerPolicy='strict-origin-when-cross-origin';
      caja.classList.add('con-mapa');caja.appendChild(f);
    });
  }

  function aplicar(){
    if(permitido('analitica'))cargarGA();
    if(permitido('mapas'))cargarMapas();
  }

  /* ---------- Interfaz ---------- */
  var banner,panel;
  function el(h){var d=document.createElement('div');d.innerHTML=h.trim();return d.firstChild}
  function enlacePolitica(){var raiz=document.body.getAttribute('data-raiz')||'';return raiz+'cookies.html'}

  function mostrarBanner(){
    if(banner)banner.remove();
    banner=el('<section class="ck-banner" role="region" aria-label="'+t('bTit')+'">'+
      '<p class="ck-tit">'+t('bTit')+'</p><p class="ck-txt">'+t('bTxt')+' <a href="'+enlacePolitica()+'">'+t('mas')+'</a></p>'+
      '<div class="ck-acc"><button type="button" class="ck-b" data-ck="rechazar">'+t('rech')+'</button><button type="button" class="ck-b" data-ck="aceptar">'+t('acep')+'</button></div>'+
      '<button type="button" class="ck-conf" data-ck="configurar">'+t('conf')+'</button></section>');
    document.body.appendChild(banner);
    banner.addEventListener('click',function(e){var b=e.target.closest('[data-ck]');if(!b)return;var a=b.getAttribute('data-ck');
      if(a==='aceptar'){guardar({mapas:permitido('mapas'),analitica:true});quitarBanner()}
      else if(a==='rechazar'){guardar({mapas:permitido('mapas'),analitica:false});quitarBanner()}
      else abrirPanel()});
  }
  function quitarBanner(){if(banner){banner.remove();banner=null}}

  function fila(id,tit,desc,on,fijo){
    return '<div class="ck-fila"><div><p class="ck-ft">'+tit+'</p><p class="ck-fd">'+desc+'</p></div>'+
      (fijo?'<span class="ck-siempre">'+t('siempre')+'</span>':'<label class="ck-sw"><input type="checkbox" id="ck-'+id+'"'+(on?' checked':'')+'><span aria-hidden="true"></span><span class="sr">'+tit+'</span></label>')+'</div>';
  }
  function abrirPanel(){
    if(panel)panel.remove();
    panel=el('<dialog class="ck-panel" aria-labelledby="ck-pt"><div class="ck-pc">'+
      '<p class="ck-tit" id="ck-pt">'+t('pTit')+'</p><p class="ck-txt">'+t('pTxt')+' <a href="'+enlacePolitica()+'">'+t('mas')+'</a></p>'+
      fila('tec',t('tec'),t('tecD'),true,true)+fila('mapas',t('map'),t('mapD'),permitido('mapas'))+(GA?fila('analitica',t('ana'),t('anaD'),permitido('analitica')):'')+
      '<div class="ck-acc">'+(GA?'<button type="button" class="ck-b" data-p="rechazar">'+t('rech')+'</button><button type="button" class="ck-b" data-p="aceptar">'+t('acep')+'</button>':'')+'</div>'+
      '<button type="button" class="ck-b ck-guardar" data-p="guardar">'+t('guardar')+'</button>'+
      '<button type="button" class="ck-x" data-p="cerrar" aria-label="'+t('cerrar')+'"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg></button>'+
      '</div></dialog>');
    document.body.appendChild(panel);
    panel.addEventListener('click',function(e){
      if(e.target===panel){cerrarPanel();return}
      var b=e.target.closest('[data-p]');if(!b)return;var a=b.getAttribute('data-p');
      var m=panel.querySelector('#ck-mapas'),an=panel.querySelector('#ck-analitica');
      if(a==='aceptar'){guardar({mapas:true,analitica:true})}
      else if(a==='rechazar'){guardar({mapas:false,analitica:false})}
      else if(a==='guardar'){guardar({mapas:m&&m.checked,analitica:an&&an.checked})}
      if(a!=='cerrar')quitarBanner();
      cerrarPanel();
    });
    panel.addEventListener('cancel',function(e){e.preventDefault();cerrarPanel()});
    if(panel.showModal)panel.showModal();else panel.setAttribute('open','');
  }
  function cerrarPanel(){if(!panel)return;if(panel.close)panel.close();panel.remove();panel=null}

  /* Botones "Mostrar el mapa" y "Preferencias de cookies" */
  document.addEventListener('click',function(e){
    var m=e.target.closest('[data-mapa-cargar]');if(m){e.preventDefault();guardar({mapas:true,analitica:permitido('analitica')});return}
    var c=e.target.closest('[data-cookies]');if(c){e.preventDefault();abrirPanel()}
  });

  window.Consentimiento={permitido:permitido,abrir:abrirPanel,alCambiar:function(f){oyentes.push(f)},
    retraducir:function(){if(banner)mostrarBanner()}};

  function iniciar(){aplicar();if(GA&&!estado)mostrarBanner()}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',iniciar);else iniciar();
})();
