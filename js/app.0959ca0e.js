(function(e){function t(t){for(var c,a,s=t[0],i=t[1],u=t[2],d=0,b=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&b.push(o[a][0]),o[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);l&&l(t);while(b.length)b.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(c=!1)}c&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var c={},o={app:0},r=[];function a(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=c,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2da7":function(e,t,n){"use strict";n("f9f7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),o=(n("99af"),n("b680"),{class:"progressWrapper bg-light bg-gradient text-primary d-flex justify-content-start align-items-center"}),r={class:"bg-white d-flex justify-content-center align-items-center w-10"},a={type:"text",ref:"hiddenInput",onkeydown:"this.value=''"},s={key:1,class:"mx-5 row g-3"},i={class:"card-body shadow"},u={class:"text-muted"},l=Object(c["e"])("i",{class:"fas fa-book"},null,-1),d={class:"text-primary text-justify"},b=["onClick"],p=Object(c["e"])("i",{class:"fas fa-feather-alt me-2"},null,-1),m=Object(c["f"])(" Escrever "),f=[p,m],h={class:"mx-5 row counter"},j={class:"col card shadow"},O={class:"card-body row -sm mb-2","data-bs-toggle":"collapse","data-bs-target":"#collapse_info"},g={class:"col d-flex justify-content-center align-items-center flex-column"},x={class:"text-success mb-1"},y=Object(c["e"])("small",{class:"text-muted"},"Acertos",-1),v={class:"col d-flex justify-content-center align-items-center flex-column"},k={class:"text-danger mb-1"},w=Object(c["e"])("small",{class:"text-muted"},"Erros",-1),E={class:"col d-flex justify-content-center align-items-center flex-column"},C={class:"text-primary mb-1"},A=Object(c["e"])("small",null,"%",-1),T=Object(c["e"])("small",{class:"text-muted"},"Precisão",-1),_={class:"row collapse show",id:"collapse_info",style:{"overflow-y":"auto","max-height":"300px"}},P={class:"col my-2"},L={class:"form-check form-switch"},S=Object(c["e"])("label",{class:"form-check-label",for:"checkAutoEnter"},"Enter automático",-1),q={class:"form-check form-switch"},M=Object(c["e"])("label",{class:"form-check-label",for:"checkAutoCaps"},"Capslock automático",-1),N={class:"form-check form-switch"},I=Object(c["e"])("label",{class:"form-check-label",for:"checkAutoAccent"},"Pontuação automática",-1),U={class:"d-none table table-sm table-striped table-light table-bordered"},D=Object(c["e"])("thead",null,[Object(c["e"])("tr",null,[Object(c["e"])("th",null,"Letra"),Object(c["e"])("th",null,"Acertos"),Object(c["e"])("th",null,"Erros")])],-1);function V(e,t,n,p,m,V){var Q=Object(c["l"])("TypingBox");return Object(c["h"])(),Object(c["d"])(c["a"],null,[Object(c["e"])("div",o,[Object(c["e"])("div",{class:"progress bg-primary bg-gradient",style:Object(c["g"])("width:".concat(V.progress,"%"))},null,4),Object(c["e"])("span",r,Object(c["m"])("".concat(V.doneTotal," / ").concat(V.pendingTotal+V.doneTotal)),1)]),Object(c["e"])("input",a,null,512),"SOLVING"==e.status?(Object(c["h"])(),Object(c["c"])(Q,{key:0,done:e.text.done,pending:e.text.pending},null,8,["done","pending"])):(Object(c["h"])(),Object(c["d"])("div",s,[(Object(c["h"])(!0),Object(c["d"])(c["a"],null,Object(c["k"])(e.poems,(function(e,t){return Object(c["h"])(),Object(c["d"])("div",{class:"col",key:"poem_".concat(t)},[Object(c["e"])("div",i,[Object(c["e"])("small",u,[l,Object(c["f"])(" Poema, "+Object(c["m"])(e.reduce((function(e,t){return e+t.length}),0))+" letras ",1)]),Object(c["e"])("h5",d,Object(c["m"])(e.reduce((function(e,t){return e+(e.length?". ":"")+t}),"").substring(0,160))+"...",1),Object(c["e"])("button",{class:"btn btn-light w-100",onClick:function(e){return V.startText(t)}},f,8,b)])])})),128))])),Object(c["e"])("div",h,[Object(c["e"])("div",j,[Object(c["e"])("div",O,[Object(c["e"])("div",g,[Object(c["e"])("h3",x,Object(c["m"])(e.text.corrects),1),y]),Object(c["e"])("div",v,[Object(c["e"])("h3",k,Object(c["m"])(e.text.wrongs),1),w]),Object(c["e"])("div",E,[Object(c["e"])("h3",C,[Object(c["f"])(Object(c["m"])((e.text.corrects/(e.text.wrongs+e.text.corrects)*100).toFixed(2)||"-"),1),A]),T])]),Object(c["e"])("div",_,[Object(c["e"])("div",P,[Object(c["e"])("div",L,[Object(c["o"])(Object(c["e"])("input",{class:"form-check-input",type:"checkbox",id:"checkAutoEnter","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.autoEnter=t})},null,512),[[c["n"],e.autoEnter]]),S]),Object(c["e"])("div",q,[Object(c["o"])(Object(c["e"])("input",{class:"form-check-input",type:"checkbox",id:"checkAutoCaps","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.autoCaps=t})},null,512),[[c["n"],e.autoCaps]]),M]),Object(c["e"])("div",N,[Object(c["o"])(Object(c["e"])("input",{class:"form-check-input",type:"checkbox",id:"checkAutoAccent","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.autoAccent=t})},null,512),[[c["n"],e.autoAccent]]),I])]),Object(c["e"])("table",U,[D,Object(c["e"])("tbody",null,[(Object(c["h"])(!0),Object(c["d"])(c["a"],null,Object(c["k"])(e.metrics,(function(e,t){return Object(c["h"])(),Object(c["d"])("tr",{key:"metric_".concat(t)},[Object(c["e"])("td",null,Object(c["m"])(t),1),Object(c["e"])("td",null,Object(c["m"])(e.correct),1),Object(c["e"])("td",null,Object(c["m"])(e.wrong),1)])})),128))])])])])])],64)}n("caad"),n("2532"),n("ac1f"),n("5319"),n("b64b");var Q=function(e){return Object(c["j"])("data-v-7162bcdc"),e=e(),Object(c["i"])(),e},z={class:"mx-auto container d-flex justify-content-center align-items-center mb-5"},B={class:"text-justify d-flex justify-content-center aligns-item-center flex-column"},F={class:"text-primary"},G=Q((function(){return Object(c["e"])("b",{class:"blink"},[Object(c["e"])("i",{class:"fas fa-i-cursor"})],-1)})),J=Q((function(){return Object(c["e"])("small",{class:"text-muted mt-5 text-justify"},[Object(c["e"])("i",null,[Object(c["f"])("Pressione "),Object(c["e"])("b",null,"ESC"),Object(c["f"])(" para voltar")])],-1)}));function K(e,t,n,o,r,a){return Object(c["h"])(),Object(c["d"])(c["a"],null,[Object(c["e"])("div",z,[Object(c["e"])("div",B,[(Object(c["h"])(!0),Object(c["d"])(c["a"],null,Object(c["k"])(a.donePrimary,(function(e,t){return Object(c["h"])(),Object(c["d"])("span",{class:"text-primary",key:"doneLine_".concat(t)},Object(c["m"])(e),1)})),128)),Object(c["e"])("span",null,[Object(c["e"])("span",F,Object(c["m"])(a.doneCurrent),1),G,Object(c["f"])(Object(c["m"])(a.pendingCurrent),1)]),(Object(c["h"])(!0),Object(c["d"])(c["a"],null,Object(c["k"])(a.pendingMuted,(function(e,t){return Object(c["h"])(),Object(c["d"])("span",{class:"text-muted",key:"pendingLine_".concat(t)},Object(c["m"])(e),1)})),128))])]),J],64)}n("fb6a");var W={name:"TypingBox",props:{done:{type:Array},pending:{type:Array}},computed:{donePrimary:function(){return this.done.slice(0,this.done.length-1)},doneCurrent:function(){return this.done[this.done.length-1]},pendingCurrent:function(){return this.pending[0]},pendingMuted:function(){return this.pending.slice(1,this.pending.length)}}},$=(n("90f4"),n("6b0d")),H=n.n($);const R=H()(W,[["render",K],["__scopeId","data-v-7162bcdc"]]);var X=R,Y=n("bf6c"),Z={name:"App",components:{TypingBox:X},data:function(){return{poems:Y["a"],status:"IDLE",autoAccent:!1,autoCaps:!1,autoEnter:!1,text:{done:[""],doneChars:0,pending:[""],pendingChars:0,wrongs:0,corrects:0},metrics:{},ignoreKeys:["CapsLock","Shift","Control","Backspace"]}},computed:{pendingTotal:function(){return this.text.pending.reduce((function(e,t){return e+t.length}),0)},doneTotal:function(){return this.text.done.reduce((function(e,t){return e+t.length}),0)},progress:function(){var e=this.pendingTotal,t=this.doneTotal,n=e+t;return(90*t/n).toFixed(0)}},methods:{startText:function(e){this.text.pending=Object.assign([],this.poems[e]),this.status="SOLVING"},stopText:function(){this.status="IDLE",this.text.done=[""],this.text.doneChars=0,this.text.pending=[""],this.text.pendingChars=[""]},updateMetrics:function(e,t){this.metrics[e.toUpperCase()]?this.metrics[e.toUpperCase()][e==t?"correct":"wrong"]+=1:this.metrics[e.toUpperCase()]={correct:e==t?1:0,wrong:e!=t?1:0}}},created:function(){var e=this;document.addEventListener("click",(function(){e.$refs.hiddenInput.focus()})),document.addEventListener("keydown",(function(t){var n=t.key;"Escape"==n&&e.stopText()})),document.addEventListener("keypress",(function(t){var n=t.key;if(!e.ignoreKeys.includes(n)&&"SOLVING"==e.status){var c=e.text.pending[0];if(1==e.text.pending.length&&0==c.length)return e.stopText();var o=c.length>0?c[0]:"Enter";if(e.updateMetrics(n,o),e.autoCaps&&(n=n.toUpperCase(),o=o.toUpperCase()),e.autoAccent&&(n=n.normalize("NFD").replace(/[\u0300-\u036f]/g,""),o=o.normalize("NFD").replace(/[\u0300-\u036f]/g,"")),n==o){if(e.text.done[e.text.done.length-1]+="Enter"!=o?o:"",e.text.corrects+=1,e.text.pending[0]=c.substring(1,c.length),"Enter"==o&&(e.text.pending.shift(),e.text.done.push("")),e.autoEnter){var r=e.text.pending[0],a=r.length>0?r[0]:"Enter";while("Enter"==a){if(e.text.corrects+=1,e.text.pending[0]=r.substring(1,r.length),e.text.pending.shift(),e.text.done.push(""),r=e.text.pending[0],console.log(r),console.log(Object.keys(e.text.pending).length),!r&&0==Object.keys(e.text.pending).length)return e.stopText();a=r.length>0?r[0]:"Enter"}}}else e.text.wrongs+=1}}))}};n("2da7");const ee=H()(Z,[["render",V]]);var te=ee;Object(c["b"])(te).mount("#app")},"8f88":function(e,t,n){},"90f4":function(e,t,n){"use strict";n("8f88")},bf6c:function(e){e.exports=JSON.parse('{"a":[["a","a","a","a","a","a","a","a","a","a","a"],["No meio do caminho tinha uma pedra","tinha uma pedra no meio do caminho","tinha uma pedra","no meio do caminho tinha uma pedra.","","Nunca me esquecerei desse acontecimento","na vida de minhas retinas tão fatigadas.","Nunca me esquecerei que no meio do caminho","tinha uma pedra","tinha uma pedra no meio do caminho","no meio do caminho tinha uma pedra."],["De tudo, ao meu amor serei atento","Antes, e com tal zelo, e sempre, e tanto","Que mesmo em face do maior encanto","Dele se encante mais meu pensamento.","","Quero vivê-lo em cada vão momento","E em louvor hei de espalhar meu canto","E rir meu riso e derramar meu pranto","Ao seu pesar ou seu contentamento.","","E assim, quando mais tarde me procure","Quem sabe a morte, angústia de quem vive","Quem sabe a solidão, fim de quem ama","","Eu possa me dizer do amor (que tive):","Que não seja imortal, posto que é chama","Mas que seja infinito enquanto dure."]]}')},f9f7:function(e,t,n){}});
//# sourceMappingURL=app.0959ca0e.js.map