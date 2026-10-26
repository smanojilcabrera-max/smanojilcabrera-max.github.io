/* Rellena los datos de las páginas legales desde js/config.js. El email se compone aquí para que no aparezca escrito en el código. */
(function(){
  var C=window.CONFIG||{},$=function(s){return [].slice.call(document.querySelectorAll(s))};
  var email=(C.EMAIL_AL_REVES||'').split('').reverse().join('');
  $('[data-email]').forEach(function(a){a.textContent=email;a.href='mailto:'+email+'?subject='+encodeURIComponent(a.getAttribute('data-asunto')||'Protección de datos')});
  $('[data-dato]').forEach(function(x){var v=C[x.getAttribute('data-dato')];var fila=x.closest('[data-fila]')||x;if(v){x.textContent=v}else{fila.hidden=true}});
  var ga=!!(C.GA4_ID||'').trim();
  $('[data-si-ga]').forEach(function(x){x.hidden=!ga});
  $('[data-no-ga]').forEach(function(x){x.hidden=ga});
  var a=document.getElementById('anio');if(a)a.textContent=new Date().getFullYear();
})();
