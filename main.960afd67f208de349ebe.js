(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,e,n){},QfWi:function(t,e,n){"use strict";n.r(e);n("L1EO");var o=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],r={startBtn:document.querySelector('[data-action="start"]'),stopBtn:document.querySelector('[ data-action="stop"]'),body:document.querySelector("body")},a=null;r.startBtn.addEventListener("click",(function(){a=setInterval((function(){var t,e,n=(t=0,e=o.length-1,Math.floor(Math.random()*(e-t+1)+t));r.body.style.backgroundColor=o[n],console.log(o[n]),r.startBtn.disabled="true"}),1e3)})),r.stopBtn.addEventListener("click",(function(){r.startBtn.removeEventListener,clearInterval(a),r.startBtn.removeAttribute("disabled")}))}},[["QfWi",1]]]);
//# sourceMappingURL=main.960afd67f208de349ebe.js.map