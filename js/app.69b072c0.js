(function(e){function t(t){for(var c,r,s=t[0],i=t[1],u=t[2],d=0,f=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(c=!1)}c&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var c={},o={app:0},a=[];function r(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=c,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"090f":function(e,t,n){"use strict";n("29a8")},"0f8f":function(e,t,n){"use strict";n("eda9")},"29a8":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),o=(n("99af"),Object(c["f"])("h2",{class:"fw-bold"},"Peoma concluído!",-1)),a=Object(c["g"])("Você digitou um total de "),r=Object(c["g"])("Dos quais, foram "),s=Object(c["g"])(" e "),i=Object(c["f"])("i",{class:"fa fa-arrow-left me-2"},null,-1),u=Object(c["g"])(" Voltar ao menu inicial "),l=[i,u],d={key:0,class:"bg-light text-primary d-flex justify-content-start align-items-stretch mb-5"},f={class:"bg-white d-flex justify-content-center align-items-center w-10"},b={key:2,class:"mx-5 row g-3 mt-5"},p={class:"card-body shadow border"},m={class:"text-muted"},j=Object(c["f"])("i",{class:"fas fa-book"},null,-1),O={class:"text-primary text-justify"},h=["onClick"],g=Object(c["f"])("i",{class:"fas fa-feather-alt me-2"},null,-1),x=Object(c["g"])(" Escrever "),y=[g,x],v={class:"mx-5 row counter"},k={class:"col card shadow"},w=Object(c["f"])("div",{class:"card-body row -sm mb-2","data-bs-toggle":"collapse","data-bs-target":"#collapse_info"},[Object(c["f"])("div",{class:"col d-flex justify-content-center align-items-center flex-column"},[Object(c["f"])("h3",{class:"text-muted mb-1"},"Configurações"),Object(c["f"])("small",{class:"text-muted"},"Clique para abrir/fechar")])],-1),C={class:"row collapse",id:"collapse_info",style:{"overflow-y":"auto","max-height":"300px"}},E={class:"col my-2"},L={class:"form-check form-switch"},T=Object(c["f"])("label",{class:"form-check-label",for:"checkAutoEnter"},"Enter automático",-1),q={class:"form-check form-switch"},A=Object(c["f"])("label",{class:"form-check-label",for:"checkAutoCaps"},"Capslock automático",-1),S={class:"form-check form-switch"},V=Object(c["f"])("label",{class:"form-check-label",for:"checkAutoAccent"},"Pontuação automática",-1),_={class:"d-none table table-sm table-striped table-light table-bordered"},M=Object(c["f"])("thead",null,[Object(c["f"])("tr",null,[Object(c["f"])("th",null,"Letra"),Object(c["f"])("th",null,"Acertos"),Object(c["f"])("th",null,"Erros")])],-1);function P(e,t,n,i,u,g){var x=Object(c["m"])("TypingBox");return Object(c["i"])(),Object(c["e"])(c["a"],null,[Object(c["f"])("div",{class:"bg-primary bg-gradient text-light",style:Object(c["h"])("transition: all 500ms ease-in-out; overflow:hidden; height:0px; padding-top:".concat("SOLVED"==e.status?"3rem":"0rem","; padding-bottom:").concat("SOLVED"==e.status?"15rem":"0rem","  "))},[o,Object(c["f"])("h6",null,[a,Object(c["f"])("b",null,Object(c["n"])(e.text.corrects+e.text.wrongs)+" caracteres!",1)]),Object(c["f"])("h6",null,[r,Object(c["f"])("b",null,Object(c["n"])(e.text.corrects)+" corretos",1),s,Object(c["f"])("b",null,Object(c["n"])(e.text.wrongs)+" incorretos!",1)]),Object(c["f"])("button",{class:"btn btn-outline-light mt-5",onClick:t[0]||(t[0]=function(){return g.stopText&&g.stopText.apply(g,arguments)})},l)],4),"SOLVING"==e.status||"SOLVED"==e.status?(Object(c["i"])(),Object(c["e"])("div",d,[Object(c["f"])("div",{class:"bg-primary",style:Object(c["h"])("width:".concat(g.progress,"%"))},null,4),Object(c["f"])("span",f,Object(c["n"])("".concat(g.doneTotal," / ").concat(g.pendingTotal+g.doneTotal)),1)])):Object(c["d"])("",!0),"SOLVING"==e.status||"SOLVED"==e.status?(Object(c["i"])(),Object(c["c"])(x,{key:1,capslock:e.text.capsLock,done:e.text.done,pending:e.text.pending,class:"mt-5"},null,8,["capslock","done","pending"])):(Object(c["i"])(),Object(c["e"])("div",b,[(Object(c["i"])(!0),Object(c["e"])(c["a"],null,Object(c["l"])(e.poems,(function(e,t){return Object(c["i"])(),Object(c["e"])("div",{class:"col-4",key:"poem_".concat(t)},[Object(c["f"])("div",p,[Object(c["f"])("small",m,[j,Object(c["g"])(" Poema, "+Object(c["n"])(e.reduce((function(e,t){return e+t.length}),0))+" letras ",1)]),Object(c["f"])("h5",O,Object(c["n"])(e.reduce((function(e,t){return e+(e.length?". ":"")+t}),"").substring(0,160))+"...",1),Object(c["f"])("button",{class:"btn btn-light w-100",onClick:function(e){return g.startText(t)}},y,8,h)])])})),128))])),Object(c["f"])("div",v,[Object(c["f"])("div",k,[w,Object(c["f"])("div",C,[Object(c["f"])("div",E,[Object(c["f"])("div",L,[Object(c["p"])(Object(c["f"])("input",{class:"form-check-input",type:"checkbox",id:"checkAutoEnter","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.autoEnter=t})},null,512),[[c["o"],e.autoEnter]]),T]),Object(c["f"])("div",q,[Object(c["p"])(Object(c["f"])("input",{class:"form-check-input",type:"checkbox",id:"checkAutoCaps","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.autoCaps=t})},null,512),[[c["o"],e.autoCaps]]),A]),Object(c["f"])("div",S,[Object(c["p"])(Object(c["f"])("input",{class:"form-check-input",type:"checkbox",id:"checkAutoAccent","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.autoAccent=t})},null,512),[[c["o"],e.autoAccent]]),V])]),Object(c["f"])("table",_,[M,Object(c["f"])("tbody",null,[(Object(c["i"])(!0),Object(c["e"])(c["a"],null,Object(c["l"])(e.metrics,(function(e,t){return Object(c["i"])(),Object(c["e"])("tr",{key:"metric_".concat(t)},[Object(c["f"])("td",null,Object(c["n"])(t),1),Object(c["f"])("td",null,Object(c["n"])(e.correct),1),Object(c["f"])("td",null,Object(c["n"])(e.wrong),1)])})),128))])])])])])],64)}n("b680"),n("caad"),n("2532"),n("ac1f"),n("5319"),n("b64b");var D=function(e){return Object(c["k"])("data-v-02145bf6"),e=e(),Object(c["j"])(),e},N={class:"mx-auto container d-flex justify-content-center align-items-center mb-5"},Q={class:"text-justify d-flex justify-content-center aligns-item-center flex-column"},U={class:"text-primary"},I=D((function(){return Object(c["f"])("small",{class:"blink"},[Object(c["f"])("i",{class:"fa fa-chevron-right text-muted"})],-1)})),B={key:0,class:"text-muted mt-5 text-justify"},z=D((function(){return Object(c["f"])("i",{class:"fas fa-keyboard"},null,-1)})),G=Object(c["g"])(" "),F=D((function(){return Object(c["f"])("i",null,"Capslock está ativo",-1)})),J=[z,G,F],K=D((function(){return Object(c["f"])("br",null,null,-1)})),H=D((function(){return Object(c["f"])("small",{class:"text-muted mt-5 text-justify"},[Object(c["f"])("i",null,[Object(c["g"])("Pressione "),Object(c["f"])("b",null,"ESC"),Object(c["g"])(" para voltar")])],-1)}));function R(e,t,n,o,a,r){return Object(c["i"])(),Object(c["e"])(c["a"],null,[Object(c["f"])("div",N,[Object(c["f"])("div",Q,[(Object(c["i"])(!0),Object(c["e"])(c["a"],null,Object(c["l"])(r.donePrimary,(function(e,t){return Object(c["i"])(),Object(c["e"])("span",{class:"text-primary",key:"doneLine_".concat(t)},Object(c["n"])(e),1)})),128)),Object(c["f"])("span",null,[Object(c["f"])("span",U,Object(c["n"])(r.doneCurrent),1),I,Object(c["g"])(Object(c["n"])(r.pendingCurrent),1)]),(Object(c["i"])(!0),Object(c["e"])(c["a"],null,Object(c["l"])(r.pendingMuted,(function(e,t){return Object(c["i"])(),Object(c["e"])("span",{class:"text-muted",key:"pendingLine_".concat(t)},Object(c["n"])(e),1)})),128))])]),n.capslock?(Object(c["i"])(),Object(c["e"])("small",B,J)):Object(c["d"])("",!0),K,H],64)}n("fb6a");var W={name:"TypingBox",props:{done:{type:Array},pending:{type:Array},capslock:{type:Boolean}},computed:{donePrimary:function(){return this.done.slice(0,this.done.length-1)},doneCurrent:function(){return this.done[this.done.length-1]},pendingCurrent:function(){return this.pending[0]},pendingMuted:function(){return this.pending.slice(1,this.pending.length)}}},X=(n("0f8f"),n("6b0d")),Y=n.n(X);const Z=Y()(W,[["render",R],["__scopeId","data-v-02145bf6"]]);var $=Z,ee=n("bf6c"),te={name:"App",components:{TypingBox:$},data:function(){return{poems:ee["a"],status:"IDLE",autoAccent:!1,autoCaps:!1,autoEnter:!1,text:{done:[""],doneChars:0,pending:[""],pendingChars:0,wrongs:0,corrects:0,capsLock:!1},metrics:{},ignoreKeys:["CapsLock","Shift","Control","Backspace"]}},computed:{pendingTotal:function(){return this.text.pending.reduce((function(e,t){return e+t.length}),0)},doneTotal:function(){return this.text.done.reduce((function(e,t){return e+t.length}),0)},progress:function(){var e=this.pendingTotal,t=this.doneTotal,n=e+t;return(90*t/n).toFixed(0)}},methods:{startText:function(e){this.text.pending=Object.assign([],this.poems[e]),this.status="SOLVING"},stopText:function(){this.status="IDLE",this.text.done=[""],this.text.doneChars=0,this.text.pending=[""],this.text.pendingChars=0,this.text.corrects=0,this.text.wrongs=0},updateMetrics:function(e,t){this.metrics[e.toUpperCase()]?this.metrics[e.toUpperCase()][e==t?"correct":"wrong"]+=1:this.metrics[e.toUpperCase()]={correct:e==t?1:0,wrong:e!=t?1:0}}},created:function(){var e=this;document.addEventListener("keydown",(function(t){var n=t.key;console.log(n),"Escape"==n&&e.stopText(),"CapsLock"==n&&(e.text.capsLock=!e.text.capsLock)})),document.addEventListener("keypress",(function(t){var n=t.key;if(!e.ignoreKeys.includes(n)&&"SOLVING"==e.status){var c=e.text.pending[0];if(1==e.text.pending.length&&0==c.length)return e.status="SOLVED";var o=c.length>0?c[0]:"Enter";if(console.log(o),console.log(n),e.autoCaps&&(n=n.toUpperCase(),o=o.toUpperCase()),e.autoAccent&&(n=n.normalize("NFD").replace(/[\u0300-\u036f]/g,""),o=o.normalize("NFD").replace(/[\u0300-\u036f]/g,"")),e.updateMetrics(n,o),n==o){if(e.text.done[e.text.done.length-1]+="Enter"!=o?o:"",e.text.corrects+=1,e.text.pending[0]=c.substring(1,c.length),"Enter"==o&&(e.text.pending.shift(),e.text.done.push("")),e.autoEnter){var a=e.text.pending[0],r=a.length>0?a[0]:"Enter";while("Enter"==r){if(e.text.corrects+=1,e.text.pending[0]=a.substring(1,a.length),e.text.pending.shift(),e.text.done.push(""),a=e.text.pending[0],console.log(a),console.log(Object.keys(e.text.pending).length),!a&&0==Object.keys(e.text.pending).length)return e.stopText();r=a.length>0?a[0]:"Enter"}}}else e.text.wrongs+=1}}))}};n("090f");const ne=Y()(te,[["render",P]]);var ce=ne;Object(c["b"])(ce).mount("#app")},bf6c:function(e){e.exports=JSON.parse('{"a":[["O tempo é muito lento para os que esperam","Muito rápido para os que têm medo","Muito longo para os que lamentam","Muito curto para os que festejam","Mas, para os que amam, o tempo é eterno."],["Que o breve","seja de um longo pensar","","Que o longo","seja de um curto sentir","","Que tudo seja leve","de tal forma","que o tempo nunca leve."],["No meio do caminho tinha uma pedra","tinha uma pedra no meio do caminho","tinha uma pedra","no meio do caminho tinha uma pedra.","","Nunca me esquecerei desse acontecimento","na vida de minhas retinas tão fatigadas.","Nunca me esquecerei que no meio do caminho","tinha uma pedra","tinha uma pedra no meio do caminho","no meio do caminho tinha uma pedra."],["De tudo, ao meu amor serei atento","Antes, e com tal zelo, e sempre, e tanto","Que mesmo em face do maior encanto","Dele se encante mais meu pensamento.","","Quero vivê-lo em cada vão momento","E em louvor hei de espalhar meu canto","E rir meu riso e derramar meu pranto","Ao seu pesar ou seu contentamento.","","E assim, quando mais tarde me procure","Quem sabe a morte, angústia de quem vive","Quem sabe a solidão, fim de quem ama","","Eu possa me dizer do amor (que tive):","Que não seja imortal, posto que é chama","Mas que seja infinito enquanto dure."]]}')},eda9:function(e,t,n){}});
//# sourceMappingURL=app.69b072c0.js.map