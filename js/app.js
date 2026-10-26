/* =====================================================================
   Landing de Sergio Mañojil — comportamiento
   (La configuración está en js/config.js)
   ===================================================================== */
(function(){
  var C=window.CONFIG||{},$=function(s,r){return [].slice.call((r||document).querySelectorAll(s))},id=function(x){return document.getElementById(x)};
  C.EMAIL_ADDRESS=(C.EMAIL_AL_REVES||'').split('').reverse().join('');
  C.FORM_ENDPOINT='https://formsubmit.co/ajax/'+(C.FORM_CODIGO||C.EMAIL_ADDRESS);
  var calma=matchMedia('(prefers-reduced-motion: reduce)').matches;
  function el(t,c){var e=document.createElement(t);if(c)e.className=c;return e}

  /* ---------- Idioma ES / EN ---------- */
  var LG='es',T0=document.title,M0=document.querySelector('meta[name=description]').content;
  var TEN='Sergio Mañojil | Real estate advisor in Gran Canaria',MEN='Sell, buy or rent in Gran Canaria with a plan, not with luck. A valuation tailored to today\'s market and direct contact with Sergio Mañojil, associate agent at RE/MAX Lanzagorta.';
  var D={
  /* cabecera y menú */
  "Saltar al contenido":"Skip to content","Sergio Mañojil. Ir al inicio":"Sergio Mañojil. Go to top","Menú principal":"Main menu","Servicios":"Services","Valoración":"Valuation","Cómo trabajo":"How I work","Preguntas":"FAQ","Oficina":"Office","Pide tu plan":"Get your plan","Abrir menú":"Open menu","Cerrar menú":"Close menu","Preguntas frecuentes":"Frequently asked questions",
  "Vender":"Sell","Comprar":"Buy","Alquilar mi vivienda":"Rent out my home","Busco alquiler":"Find a rental","Invertir":"Invest",
  /* portada */
  "Sergio Mañojil, asesor inmobiliario":"Sergio Mañojil, real estate advisor","Imagen generada con IA":"AI-generated image","Sergio Mañojil, asesor inmobiliario en Gran Canaria":"Sergio Mañojil, real estate advisor in Gran Canaria",
  "Vender o comprar una casa es una de las decisiones más importantes de tu vida. Mi trabajo es que salga bien.":"Buying or selling a home is one of the most important decisions of your life. My job is to make it go well.",
  "Pide tu plan sin compromiso":"Get your plan, no obligation","Te lleva un minuto. Te respondo yo.":"It takes a minute. I reply personally.",
  /* qué necesitas */
  "¿Qué necesitas?":"What do you need?","Elige tu caso y te hago solo las preguntas que importan.":"Pick your case and I'll only ask what matters.",
  "Al mejor precio, sin malvender":"At the best price, without underselling","Encuentra la tuya sin perder meses":"Find yours without wasting months","Soy propietario: inquilinos solventes":"I'm the owner: reliable tenants","Encuentra tu casa sin perder tiempo":"Find your home without wasting time","Decide con números, no a ojo":"Decide with numbers, not guesswork",
  /* conmigo */
  "Lo que tienes conmigo":"What you get with me","Valoración adaptada al mercado actual":"A valuation tailored to today's market","De tu propiedad, sin coste ni compromiso.":"Of your property, at no cost and with no obligation.","La fuerza de RE/MAX y de la MLS":"The strength of RE/MAX and the MLS","Máxima difusión entre agentes con clientes que ya buscan en tu zona.":"Maximum exposure among agents with clients already searching in your area.","Me encargo de todo, en persona":"I handle everything, personally","Llevo tu caso yo mismo, de la primera llamada a la firma en notaría.":"I manage your case myself, from the first call to signing at the notary.","RE/MAX Grupo Lanzagorta":"RE/MAX Grupo Lanzagorta",
  /* valoración */
  "¿Cuánto vale de verdad tu vivienda?":"What is your home really worth?","El precio de salida marca el ritmo de toda la venta. Ajustado al mercado, atrae desde el primer día a los compradores adecuados. Desajustado, resta visibilidad y deja escapar grandes oportunidades.":"The asking price sets the pace of the whole sale. Aligned with the market, it attracts the right buyers from day one. Misaligned, it loses visibility and lets great opportunities slip away.","Por eso cada valoración se basa en datos reales de tu zona.":"That's why every valuation is based on real data from your area.","Tu valoración incluye":"Your valuation includes","Estudio de viviendas comparables en tu zona":"Study of comparable homes in your area","Análisis del mercado actual y de la demanda":"Analysis of the current market and demand","Precio recomendado y estrategia de venta a medida":"Recommended price and a tailored sales strategy","Sin coste ni compromiso: decides tú con toda la información":"No cost, no obligation: you decide with all the information","Quiero valorar mi propiedad":"Value my property",
  /* proceso */
  "Cuatro pasos. Cero sorpresas.":"Four steps. Zero surprises.","Análisis de tu caso":"Analysis of your case","Se estudian tu situación, tus plazos y tus objetivos. Sin compromiso.":"Your situation, timing and goals are studied. No obligation.","Plan a medida":"Tailored plan","Precio, estrategia y calendario definidos con datos reales del mercado de tu zona.":"Price, strategy and timeline set with real market data for your area.","Puesta en marcha":"Launch","Si vendes o alquilas: anuncios destacados en portales, red RE/MAX y MLS. Si compras, inviertes o buscas alquiler: búsqueda a medida y visitas filtradas.":"If you sell or rent out: featured listings on the portals, the RE/MAX network and the MLS. If you buy, invest or look for a rental: a tailored search and filtered viewings.","Negociación y cierre":"Negotiation and closing","Negociación a tu favor y acompañamiento en arras, contrato y notaría, con respaldo jurídico.":"Negotiation in your favour and support through the deposit contract, contract and notary, with legal backing.","Empezar por el paso 1":"Start with step 1",
  /* preguntas */
  "Lo que todo el mundo me pregunta":"What everyone asks me","¿Qué tengo detrás si trabajo contigo?":"What do I get behind me if I work with you?","Un equipo completo, no solo una persona. Un departamento jurídico y legal que revisa contratos y documentación, anuncios premium en los principales portales, la red RE/MAX y la MLS, y una base de datos de clientes con búsquedas activas. Y a mí como tu único interlocutor, de principio a fin.":"A whole team, not just one person. A legal department that reviews contracts and documents, premium listings on the main portals, the RE/MAX network and the MLS, and a database of clients actively searching. And me as your single point of contact, from start to finish.","¿Por qué no vender por mi cuenta?":"Why not sell on my own?","Puedes hacerlo, pero vas solo. Un precio mal fijado, una negociación floja o un papel que falta en el último momento suelen salir más caros que contar con un profesional. Conmigo tu inmueble llega a muchos más compradores, cada paso está revisado por el equipo jurídico y tú no pierdes tardes enseñando la casa a quien no va a comprar.":"You can, but you're on your own. A wrongly set price, weak negotiation or a missing document at the last minute usually cost more than hiring a professional. With me your property reaches many more buyers, every step is reviewed by the legal team and you don't waste afternoons showing your home to people who won't buy.","¿La valoración tiene algún coste?":"Does the valuation cost anything?","No tiene coste ni compromiso. Te explico con datos cómo llego al precio recomendado y decides tú, con toda la información delante.":"There's no cost and no obligation. I show you with data how I reach the recommended price and you decide, with all the information in front of you.","¿Cuánto se tarda en vender una vivienda?":"How long does it take to sell a home?","Depende de la zona, del tipo de inmueble y, sobre todo, del precio de salida. Una vivienda bien valorada, bien presentada y con buena difusión se vende antes. En la valoración te doy una estimación realista para tu caso.":"It depends on the area, the type of property and, above all, the asking price. A well-priced, well-presented and well-marketed home sells sooner. In the valuation I give you a realistic estimate for your case.","¿Qué documentación necesito para vender?":"What documents do I need to sell?","Principalmente la escritura o nota simple, el último recibo del IBI, el certificado de eficiencia energética y el certificado de la comunidad de propietarios, además de otros según el caso. Te ayudo a reunirlo todo y el equipo jurídico lo revisa antes de firmar.":"Mainly the title deed or land registry extract, the latest property tax (IBI) receipt, the energy performance certificate and the homeowners' association certificate, plus others depending on the case. I help you gather it all and the legal team reviews it before signing.","Busco alquiler, ¿cómo me ayudas?":"I'm looking for a rental, how can you help?","Me cuentas qué buscas, tu presupuesto y tu situación, y te aviso de las viviendas que encajan contigo. Te acompaño en las visitas y en el contrato, revisado por el equipo jurídico, para que entres a vivir con tranquilidad.":"You tell me what you're looking for, your budget and your situation, and I let you know about homes that fit. I go with you to viewings and through the contract, reviewed by the legal team, so you can move in with peace of mind.","¿En qué zonas trabajas?":"Which areas do you cover?","En toda Gran Canaria, especialmente en Las Palmas de Gran Canaria y alrededores. Si tu inmueble está fuera de la isla, escríbeme y lo vemos.":"All of Gran Canaria, especially Las Palmas de Gran Canaria and the surrounding area. If your property is off the island, message me and we'll see.",
  "¿Qué haces con mis datos?":"What do you do with my data?","Los uso solo para atender tu solicitud y no los vendo ni los cedo a nadie para publicidad. Puedes pedirme que los borre cuando quieras. Todo el detalle está en la":"I only use it to handle your request and I never sell it or pass it on for advertising. You can ask me to delete it whenever you like. Full details are in the","política de privacidad":"privacy policy",
  /* oficina */
  "Ven a conocerme":"Come and meet me","Pásate y pregunta por mí. Si me avisas antes, te reservo un hueco.":"Drop by and ask for me. If you let me know beforehand, I'll keep a slot free for you.","Cómo llegar":"Get directions","Avisarte de que voy":"Let you know I'm coming","Mapa de la oficina de RE/MAX Lanzagorta":"Map of the RE/MAX Lanzagorta office","El mapa se carga desde Google Maps, que puede usar sus propias cookies.":"The map loads from Google Maps, which may use its own cookies.","Más información":"More information","Mostrar el mapa":"Show the map",
  /* contacto y pie */
  "Agente asociado · RE/MAX Lanzagorta":"Associate agent · RE/MAX Lanzagorta","¿Hablamos?":"Shall we talk?","Cuéntame qué tienes en mente. Te escucho, te explico tus opciones con calma y decides tú. Te respondo yo personalmente.":"Tell me what you have in mind. I'll listen, explain your options calmly and you decide. I reply personally.","Dejar mis datos":"Leave my details",
  "Asesor inmobiliario en Gran Canaria. Agente asociado · RE/MAX Lanzagorta":"Real estate advisor in Gran Canaria. Associate agent · RE/MAX Lanzagorta","Redes sociales":"Social media","Información legal":"Legal information","Aviso legal y condiciones de uso":"Legal notice and terms of use","Política de privacidad":"Privacy policy","Política de cookies":"Cookie policy","Preferencias de cookies":"Cookie preferences",
  "Las fotos de Sergio que aparecen en esta web están generadas con inteligencia artificial. Cada oficina RE/MAX es de propiedad y gestión independiente. ©":"The photos of Sergio on this website are AI-generated. Each RE/MAX office is independently owned and operated. ©",
  /* formulario */
  "Cerrar":"Close","Cuéntame qué necesitas":"Tell me what you need","Te respondo personalmente. Sin compromiso.":"I'll reply personally. No obligation.","Elige una opción y te respondo personalmente. Sin compromiso.":"Pick an option and I'll reply personally. No obligation.","Enviar":"Send","Enviando…":"Sending…",
  "Nombre":"Name","Teléfono":"Phone","Email":"Email","(opcional)":"(optional)","Comentarios":"Comments","Cualquier cosa que quieras contarme":"Anything you'd like to tell me","Detalles (recomendable)":"Details (recommended)","Cuanto más me cuentes, mejor podré ayudarte.":"The more you tell me, the better I can help you.","Añadir un comentario":"Add a comment",
  "He leído la":"I have read the","y acepto que Sergio me contacte para atender mi solicitud.":"and agree that Sergio may contact me to handle my request.",
  "Responsable:":"Controller:","Finalidad:":"Purpose:","atender tu solicitud y contactarte.":"to handle your request and contact you.","Derechos:":"Rights:","acceder, rectificar o borrar tus datos, entre otros.":"access, correct or delete your data, among others.","Información completa":"Full information (in Spanish)",
  "¿Solo tienes una duda?":"Just a quick question?","Escríbeme un email":"Email me","¡Recibido,":"Got it,","Reviso tu caso y te contacto yo mismo lo antes posible.":"I'll review your case and contact you myself as soon as possible.",
  "Necesito tu nombre y un teléfono válido para llamarte.":"I need your name and a valid phone number to call you.","Necesito un email válido para enviarte la información.":"I need a valid email to send you the information.","Marca la casilla para que pueda contactarte.":"Tick the box so I can contact you.","Elige arriba qué necesitas.":"Choose above what you need.",
  "No se ha podido enviar. Inténtalo de nuevo en un momento o escríbeme un email desde el enlace de abajo.":"It couldn't be sent. Please try again in a moment or email me using the link below.",
  "Has enviado varias solicitudes seguidas. Espera unos minutos o escríbeme un email.":"You've sent several requests in a row. Please wait a few minutes or email me.",
  "Vamos a vender tu vivienda":"Let's sell your home","Déjame tus datos y te preparo una valoración adaptada al mercado actual, sin coste ni compromiso.":"Leave your details and I'll prepare a valuation tailored to today's market, at no cost and with no obligation.","Vamos a encontrar tu vivienda":"Let's find your home","Cuéntame qué buscas y te aviso de lo que encaje contigo.":"Tell me what you're looking for and I'll let you know what fits.","Empezar mi búsqueda":"Start my search","Vamos a alquilar tu vivienda":"Let's rent out your home","Te ayudo a encontrar inquilinos con perfil solvente y a hacerlo todo bien.":"I'll help you find reliable tenants and do everything right.","Quiero alquilar mi vivienda":"Rent out my home","Vamos a encontrar tu alquiler":"Let's find your rental","Cuéntame qué buscas y te aviso de las viviendas que encajen contigo.":"Tell me what you're looking for and I'll let you know about homes that fit.","Buscar mi alquiler":"Find my rental","Vamos a analizar tu inversión":"Let's analyse your investment","Cuéntame tu objetivo y lo vemos con números.":"Tell me your goal and we'll look at it with numbers.","Analizar mi inversión":"Analyse my investment",
  "Tipo de inmueble":"Property type","Municipio":"Municipality","Barrio o calle aproximada":"Neighbourhood or approximate street","Superficie (m²)":"Size (m²)","Habitaciones":"Bedrooms","¿Cuándo te gustaría vender?":"When would you like to sell?","Precio que tienes en mente (€)":"Price you have in mind (€)","Zonas que te interesan":"Areas you're interested in","Presupuesto máximo (€)":"Maximum budget (€)","Habitaciones (mínimo)":"Bedrooms (minimum)","Financiación":"Financing","¿Cuándo quieres comprar?":"When do you want to buy?","¿Está amueblada?":"Is it furnished?","¿Cuándo estaría disponible?":"When would it be available?","Renta que tienes en mente (€/mes)":"Rent you have in mind (€/month)","Presupuesto (€)":"Budget (€)","Objetivo":"Goal","¿Cuándo quieres invertir?":"When do you want to invest?","Renta máxima (€/mes)":"Maximum rent (€/month)","¿Cuántas personas vivirán?":"How many people will live there?","¿Con mascotas?":"Any pets?","Situación laboral":"Employment status","Duración del alquiler":"Rental length","¿Cuándo necesitas entrar?":"When do you need to move in?",
  "Sin indicar":"Not specified","Piso":"Flat","Ático":"Penthouse","Dúplex":"Duplex","Casa / chalet":"House / villa","Local comercial":"Commercial premises","Suelo / terreno":"Land / plot","Finca":"Rural estate (finca)","Garaje / trastero":"Garage / storage room","Edificio":"Building","Otro":"Other","Otra":"Other","Fondos propios":"Own funds","Necesito hipoteca":"I need a mortgage","Ya tengo hipoteca aprobada":"Mortgage already approved","Aún no lo sé":"Not sure yet","Lo antes posible":"As soon as possible","En 1-3 meses":"In 1-3 months","En 3-6 meses":"In 3-6 months","Más adelante":"Later on","Solo quiero informarme":"Just finding out","Sí":"Yes","Parcialmente":"Partly","Ya":"Now","Alquiler de larga duración":"Long-term rental","Alquiler vacacional":"Holiday rental","Reforma y venta":"Renovate and sell","Patrimonio a largo plazo":"Long-term wealth","Lo estoy valorando":"Still deciding","Contrato indefinido":"Permanent contract","Contrato temporal":"Temporary contract","Autónomo":"Self-employed","Pensionista":"Pensioner","Estudiante":"Student","Larga duración":"Long-term","Temporada (menos de 1 año)":"Short-term (under 1 year)"
  };
  function nz(x){return x.replace(/\s+/g,' ').trim()}
  function trn(es,nodo){if(LG!=='en')return es;var p=nodo&&nodo.parentNode;if(p&&p.dataset&&p.dataset.en)return p.dataset.en;var v=D[nz(es)];if(v==null)return es;return es.match(/^\s*/)[0]+v+es.match(/\s*$/)[0]}
  function applyLang(raiz){raiz=raiz||document.body;
    var w=document.createTreeWalker(raiz,NodeFilter.SHOW_TEXT,null),n,ls=[];
    while(n=w.nextNode()){if(!/^(SCRIPT|STYLE|NOSCRIPT)$/.test(n.parentNode.nodeName)&&n.nodeValue.trim())ls.push(n)}
    ls.forEach(function(n){if(n.__es===undefined)n.__es=n.nodeValue;var v=trn(n.__es,n);if(n.nodeValue!==v)n.nodeValue=v});
    var AE=$('[aria-label],[title],[alt],[placeholder],[data-mapa-titulo]',raiz);if(raiz.matches&&raiz.matches('[aria-label],[title],[alt],[placeholder]'))AE.unshift(raiz);
    AE.forEach(function(e){['aria-label','title','alt','placeholder','data-mapa-titulo'].forEach(function(a){if(!e.hasAttribute(a)||e.id==='idioma')return;e.__a=e.__a||{};if(e.__a[a]===undefined)e.__a[a]=e.getAttribute(a);var v=trn(e.__a[a]);if(e.getAttribute(a)!==v)e.setAttribute(a,v)})})}
  function L(x){if(LG==='en')applyLang(x)}
  var bIdioma=id('idioma');
  function setLang(lg,guardar){LG=lg;document.documentElement.lang=lg;document.title=lg==='en'?TEN:T0;document.querySelector('meta[name=description]').content=lg==='en'?MEN:M0;
    bIdioma.textContent=lg==='en'?'ES':'EN';bIdioma.lang=lg==='en'?'es':'en';bIdioma.setAttribute('aria-label',lg==='en'?'Cambiar a español':'Switch to English');
    applyLang(document.body);refrescarWA();if(window.Consentimiento)window.Consentimiento.retraducir();
    if(guardar)try{localStorage.setItem('lang',lg)}catch(e){}}
  bIdioma.addEventListener('click',function(){setLang(LG==='en'?'es':'en',true)});

  /* ---------- Datos de contacto ---------- */
  var wa=(C.WHATSAPP_NUMBER||'').replace(/\D/g,''),cur='';
  var MSG={general:'Hola Sergio, he visto tu web y me gustaría hablar contigo.'},MSG_EN={general:'Hi Sergio, I saw your website and I would like to talk to you.'};
  function waUrl(){return 'https://wa.me/'+wa+'?text='+encodeURIComponent((LG==='en'?MSG_EN:MSG).general)}
  function refrescarWA(){if(wa)$('[data-wa]').forEach(function(a){a.href=waUrl()})}
  $('[data-wa]').forEach(function(a){if(!wa){a.hidden=true;return}a.href=waUrl();a.target='_blank';a.rel='noopener noreferrer'});
  // El email solo se compone al pulsar: así no aparece en el código de la página
  $('[data-mail]').forEach(function(a){if(!C.EMAIL_ADDRESS){a.hidden=true;return}a.addEventListener('click',function(e){e.preventDefault();location.href='mailto:'+C.EMAIL_ADDRESS+'?subject='+encodeURIComponent(LG==='en'?'Question from your website':'Consulta desde tu web')})});
  $('[data-href]').forEach(function(a){var v=C[a.dataset.href];if(v)a.setAttribute('href',v);else a.parentNode.hidden=true});
  $('[data-oficina]').forEach(function(x){x.textContent=C.OFFICE_ADDRESS});
  var qMapa=encodeURIComponent(C.OFFICE_NAME+' '+C.OFFICE_ADDRESS);
  id('como-llegar').href='https://www.google.com/maps/search/?api=1&query='+qMapa;
  id('mapa').setAttribute('data-mapa','https://maps.google.com/maps?q='+qMapa+'&z=16&hl=es&ie=UTF8&output=embed');
  id('anio').textContent=new Date().getFullYear();

  /* ---------- Menú ---------- */
  var burger=id('burger'),mm=id('menu-movil');
  function menu(o){burger.setAttribute('aria-expanded',o);burger.__a=burger.__a||{};burger.__a['aria-label']=o?'Cerrar menú':'Abrir menú';burger.setAttribute('aria-label',burger.__a['aria-label']);L(burger);mm.classList.toggle('abierto',o);document.documentElement.classList.toggle('lock',o)}
  burger.addEventListener('click',function(){menu(burger.getAttribute('aria-expanded')!=='true')});
  $('a,button',mm).forEach(function(a){a.addEventListener('click',function(){menu(false)})});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&mm.classList.contains('abierto'))menu(false)});

  /* ---------- Cabecera y barra móvil ---------- */
  var cab=id('cab'),barra=id('barra'),portada=id('inicio'),pasada=false,alFinal=false;
  function barraOk(){barra.classList.toggle('ver',pasada&&!alFinal)}
  if('IntersectionObserver' in window){
    // la barra fija aparece al pasar la portada y se esconde al llegar al contacto (allí ya hay botón)
    new IntersectionObserver(function(e){var r=e[0];pasada=!r.isIntersecting&&r.boundingClientRect.top<0;cab.classList.toggle('sombra',r.boundingClientRect.top<0);barraOk()},{threshold:0}).observe(portada);
    new IntersectionObserver(function(e){alFinal=e[0].isIntersecting;barraOk()},{threshold:0}).observe(id('contacto'));
  }else{cab.classList.add('sombra');barra.classList.add('ver')}

  /* ---------- Preguntas (acordeón) ---------- */
  $('.q>button').forEach(function(b){b.addEventListener('click',function(){var q=b.parentNode,o=!q.classList.contains('abierta');q.classList.toggle('abierta',o);b.setAttribute('aria-expanded',o)})});

  /* ---------- Formulario en hoja ---------- */
  var Z=['Las Palmas de Gran Canaria','Telde','Arucas','Santa Brígida','Vega de San Mateo','Teror','Firgas','Moya','Santa María de Guía','Gáldar','Agaete','La Aldea de San Nicolás','Artenara','Tejeda','Valleseco','Valsequillo de Gran Canaria','Ingenio','Agüimes','Santa Lucía de Tirajana','San Bartolomé de Tirajana','Mogán','Otro'];
  var TV=['Piso','Ático','Dúplex','Casa / chalet','Local comercial','Suelo / terreno','Finca','Garaje / trastero','Edificio','Otro'];
  var FIN=['Fondos propios','Necesito hipoteca','Ya tengo hipoteca aprobada','Aún no lo sé'],PL=['Lo antes posible','En 1-3 meses','En 3-6 meses','Más adelante','Solo quiero informarme'];
  /* t = título, s = subtítulo, b = botón, x = frase del correo. NO cambies los títulos sin avisar: el panel los usa para reconocer las solicitudes. */
  var T={
    '':{t:'Cuéntame qué necesitas',s:'Elige una opción y te respondo personalmente. Sin compromiso.',b:'Enviar',x:'hablar contigo'},
    vender:{t:'Vamos a vender tu vivienda',s:'Déjame tus datos y te preparo una valoración adaptada al mercado actual, sin coste ni compromiso.',b:'Quiero valorar mi propiedad',x:'vender mi inmueble y pedir una valoración',
      f:[['Tipo de inmueble','sel',TV],['Municipio','sel',Z],['Barrio o calle aproximada','txt'],['Superficie (m²)','num'],['Habitaciones','num'],['¿Cuándo te gustaría vender?','sel',PL],['Precio que tienes en mente (€)','num']]},
    comprar:{t:'Vamos a encontrar tu vivienda',s:'Cuéntame qué buscas y te aviso de lo que encaje contigo.',b:'Empezar mi búsqueda',x:'comprar un inmueble',
      f:[['Tipo de inmueble','sel',TV],['Zonas que te interesan','txt'],['Presupuesto máximo (€)','num'],['Habitaciones (mínimo)','num'],['Financiación','sel',FIN],['¿Cuándo quieres comprar?','sel',PL]]},
    alquilar:{t:'Vamos a alquilar tu vivienda',s:'Te ayudo a encontrar inquilinos con perfil solvente y a hacerlo todo bien.',b:'Quiero alquilar mi vivienda',x:'alquilar mi vivienda',
      f:[['Tipo de inmueble','sel',TV],['Municipio','sel',Z],['Habitaciones','num'],['¿Está amueblada?','sel',['Sí','No','Parcialmente']],['¿Cuándo estaría disponible?','sel',['Ya','En 1-3 meses','Más adelante']],['Renta que tienes en mente (€/mes)','num']]},
    inquilino:{t:'Vamos a encontrar tu alquiler',s:'Cuéntame qué buscas y te aviso de las viviendas que encajen contigo.',b:'Buscar mi alquiler',x:'encontrar una vivienda en alquiler',
      f:[['Tipo de inmueble','sel',TV],['Zonas que te interesan','txt'],['Renta máxima (€/mes)','num'],['Habitaciones (mínimo)','num'],['¿Cuántas personas vivirán?','num'],['¿Con mascotas?','sel',['Sí','No']],['Situación laboral','sel',['Contrato indefinido','Contrato temporal','Autónomo','Pensionista','Estudiante','Otra']],['Duración del alquiler','sel',['Larga duración','Temporada (menos de 1 año)']],['¿Cuándo necesitas entrar?','sel',['Ya','En 1-3 meses','Más adelante']]]},
    invertir:{t:'Vamos a analizar tu inversión',s:'Cuéntame tu objetivo y lo vemos con números.',b:'Analizar mi inversión',x:'invertir en inmuebles',
      f:[['Presupuesto (€)','num'],['Objetivo','sel',['Alquiler de larga duración','Alquiler vacacional','Reforma y venta','Patrimonio a largo plazo','Lo estoy valorando']],['Zonas que te interesan','txt'],['Financiación','sel',FIN],['¿Cuándo quieres invertir?','sel',PL]]}
  };
  var hoja=id('hoja'),form=id('form'),ok=id('ok'),seg=id('segmento'),campos=id('campos'),btn=id('f-btn'),err=id('f-err');
  function construir(k){
    campos.innerHTML='';
    (T[k].f||[]).forEach(function(f){var l=el('label'),x;l.appendChild(document.createTextNode(f[0]));
      if(f[1]==='sel'){x=el('select');var o=el('option');o.value='';o.textContent='Sin indicar';x.appendChild(o);f[2].forEach(function(v){var p=el('option');p.value=v;p.textContent=v;x.appendChild(p)})}
      else{x=el('input');x.autocomplete='off';x.maxLength=f[1]==='num'?12:120;if(f[1]==='num'){x.inputMode='decimal'}}
      x.dataset.f=f[0];l.appendChild(x);campos.appendChild(l)});
    id('mas').hidden=!T[k].f;
  }
  function elegir(k){
    cur=k||'';var t=T[cur];
    $('button',seg).forEach(function(b){b.setAttribute('aria-pressed',b.dataset.k===cur)});seg.classList.remove('error');
    id('hoja-t').textContent=t.t;id('hoja-sub').textContent=t.s;btn.textContent=t.b;construir(cur);
    L(hoja);
  }
  $('button',seg).forEach(function(b){b.addEventListener('click',function(){elegir(b.dataset.k)})});
  var t0=0;
  function abrir(k){
    t0=Date.now();
    form.hidden=false;ok.hidden=true;err.hidden=true;elegir(k);
    document.documentElement.classList.add('lock');
    hoja.classList.remove('cerrando');
    if(!hoja.open){if(hoja.showModal)hoja.showModal();else hoja.setAttribute('open','')}
    hoja.querySelector('.hoja-cuerpo').scrollTop=0;
    if(matchMedia('(hover:hover) and (pointer:fine)').matches)setTimeout(function(){id('f-nombre').focus({preventScroll:true})},350);
  }
  function cerrar(){
    if(!hoja.open)return;
    if(calma){fin();return}
    hoja.classList.add('cerrando');
    var hecho=false;function fin2(){if(hecho)return;hecho=true;fin()}
    hoja.addEventListener('animationend',fin2,{once:true});setTimeout(fin2,450);
  }
  function fin(){hoja.classList.remove('cerrando');if(hoja.close)hoja.close();else hoja.removeAttribute('open');document.documentElement.classList.remove('lock')}
  $('[data-abrir]').forEach(function(b){b.addEventListener('click',function(){abrir(b.dataset.abrir)})});
  id('cerrar').addEventListener('click',cerrar);id('ok-cerrar').addEventListener('click',cerrar);
  hoja.addEventListener('cancel',function(e){e.preventDefault();cerrar()});
  hoja.addEventListener('click',function(e){if(e.target===hoja)cerrar()});
  hoja.addEventListener('close',function(){document.documentElement.classList.remove('lock')});

  /* ---------- Envío (con protecciones) ---------- */
  var enviando=false;
  // Limpia lo que escribe el visitante: quita caracteres de control y corta la longitud
  function limpio(v,max){return String(v||'').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g,'').replace(/[<>]/g,'').trim().slice(0,max||200)}
  // Freno antiabuso: como mucho 3 envíos cada 10 minutos desde el mismo navegador
  var LIM_N=3,LIM_MS=10*60*1000;
  function envios(){try{return JSON.parse(localStorage.getItem('envios-formulario')||'[]').filter(function(t){return Date.now()-t<LIM_MS})}catch(e){return[]}}
  function anotarEnvio(){try{var a=envios();a.push(Date.now());localStorage.setItem('envios-formulario',JSON.stringify(a))}catch(e){}}
  function marcar(x,mal){x.setAttribute('aria-invalid',mal?'true':'false')}
  form.addEventListener('submit',function(e){
    e.preventDefault();if(enviando)return;
    var n=id('f-nombre'),t=id('f-tel'),m=id('f-mail'),c=id('f-ok'),mal=[];
    var vN=limpio(n.value,80),vT=limpio(t.value,20),vM=limpio(m.value,120);
    marcar(n,!vN);if(!vN)mal.push(n);
    var telMal=!/^[+0-9 ().\-]{9,20}$/.test(vT)||vT.replace(/\D/g,'').length<9;marcar(t,telMal);if(telMal)mal.push(t);
    var mailMal=!/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(vM);marcar(m,mailMal);if(mailMal)mal.push(m);
    id('chk-l').classList.toggle('error',!c.checked);if(!c.checked)mal.push(c);
    if(!cur){seg.classList.add('error');mal.unshift(seg.querySelector('button'))}
    function aviso(txt){err.textContent=txt;err.hidden=false;L(err)}
    if(mal.length){var faltan=!vN||telMal;aviso(!cur?'Elige arriba qué necesitas.':(faltan?'Necesito tu nombre y un teléfono válido para llamarte.':(mailMal?'Necesito un email válido para enviarte la información.':'Marca la casilla para que pueda contactarte.')));mal[0].focus();return}
    err.hidden=true;
    var lineas=[];$('[data-f]',campos).forEach(function(x){var v=limpio(x.value,120);if(v)lineas.push('• '+x.dataset.f+': '+v)});
    var com=limpio(id('f-com').value,1000);
    var origen=limpio(new URLSearchParams(location.search).get('src'),30).toLowerCase().replace(/[^a-z0-9_-]/g,'')||'directo';
    var txt='Solicitud web: quiero '+T[cur].x+'.\n\n• Nombre: '+vN+'\n• Teléfono: '+vT+'\n• Email: '+vM+(lineas.length?'\n'+lineas.join('\n'):'')+(com?'\n• Comentarios: '+com:'')+'\n• Origen: '+origen;
    function bloquear(on){enviando=on;btn.disabled=on;btn.textContent=on?'Enviando…':T[cur].b;L(btn)}
    function hecho(){bloquear(false);form.reset();$('[aria-invalid]',form).forEach(function(x){x.removeAttribute('aria-invalid')});id('mas-com').open=false;id('ok-n').textContent=vN;form.hidden=true;ok.hidden=false;L(ok);hoja.querySelector('.hoja-cuerpo').scrollTop=0}
    function fallo(){bloquear(false);aviso('No se ha podido enviar. Inténtalo de nuevo en un momento o escríbeme un email desde el enlace de abajo.')}
    // Antirrobots: campo trampa relleno o envío en menos de 3 s (ningún humano es tan rápido) = se descarta en silencio
    if(id('f-hp').value||Date.now()-t0<3000){hecho();return}
    if(envios().length>=LIM_N){aviso('Has enviado varias solicitudes seguidas. Espera unos minutos o escríbeme un email.');return}
    bloquear(true);
    fetch(C.FORM_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({_subject:'Nueva solicitud web: '+T[cur].t,_template:'table',_honey:'',interes:cur,nombre:vN,telefono:vT,email:vM,mensaje:txt,origen:origen,consentimiento:true})})
      .then(function(r){return r.json().catch(function(){return{}}).then(function(j){if(!r.ok||j.success===false||j.success==='false')throw 0;anotarEnvio();hecho()})})
      .catch(fallo);
  });

  /* ---------- Idioma guardado o ?lang=en ---------- */
  var qL=new URLSearchParams(location.search).get('lang'),sv=null;try{sv=localStorage.getItem('lang')}catch(e){}
  if((qL||sv)==='en')setLang('en');
})();
