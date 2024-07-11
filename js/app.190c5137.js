(function(){"use strict";var o={2092:function(o,e,n){var l=n(5130),r=n(6768),t=n(4232);const u=(0,r.Lk)("label",null,"Color de fondo",-1),a=(0,r.Lk)("label",null,"Color de texto",-1),i=(0,r.Lk)("label",null," Mostrar texto",-1),d=(0,r.Lk)("label",null,"Borde:",-1),p=(0,r.Lk)("br",null,null,-1),c=(0,r.Lk)("p",null,"Opinión:",-1),f=(0,r.Lk)("label",{for:"tipografia"},"Tipografía",-1),s=["value"],k=(0,r.Lk)("label",{for:"tamañodeletra"},"Tamaño de letra",-1),b=(0,r.Lk)("br",null,null,-1),v=(0,r.Lk)("label",null,"Pequeño",-1),L=(0,r.Lk)("label",null,"Mediano",-1),m=(0,r.Lk)("label",null,"Grande",-1),x={key:0};function y(o,e,n,y,h,g){return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("form",null,[(0,r.Lk)("div",null,[u,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>h.colorDeFondo=o)},null,512),[[l.Jo,h.colorDeFondo]])]),(0,r.Lk)("div",null,[a,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=o=>h.colorDeTexto=o)},null,512),[[l.Jo,h.colorDeTexto]])]),(0,r.Lk)("div",null,[(0,r.bo)((0,r.Lk)("input",{type:"checkbox","onUpdate:modelValue":e[2]||(e[2]=o=>h.mostrarTexto=o)},null,512),[[l.lH,h.mostrarTexto]]),i]),(0,r.Lk)("div",null,[d,p,(0,r.bo)((0,r.Lk)("input",{type:"range",min:"0",max:"5",step:"0.5","onUpdate:modelValue":e[3]||(e[3]=o=>h.grosorDeBorde=o)},null,512),[[l.Jo,h.grosorDeBorde]])]),(0,r.Lk)("div",null,[c,(0,r.bo)((0,r.Lk)("textarea",{"onUpdate:modelValue":e[4]||(e[4]=o=>h.opinion=o),placeholder:"Escribe tu opinión..."},null,512),[[l.Jo,h.opinion]])]),(0,r.Lk)("div",null,[f,(0,r.bo)((0,r.Lk)("select",{"onUpdate:modelValue":e[5]||(e[5]=o=>h.selectedFont=o)},[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(h.fonts,(o=>((0,r.uX)(),(0,r.CE)("option",{key:o,value:o},(0,t.v_)(o),9,s)))),128))],512),[[l.u1,h.selectedFont]])]),(0,r.Lk)("div",null,[(0,r.Lk)("label",null,[(0,r.bo)((0,r.Lk)("input",{type:"checkbox","onUpdate:modelValue":e[6]||(e[6]=o=>h.opaco=o)},null,512),[[l.lH,h.opaco]]),(0,r.eW)(" Opaco ")])]),(0,r.Lk)("section",null,[(0,r.Lk)("div",null,[k,b,(0,r.bo)((0,r.Lk)("input",{type:"radio",name:"size",value:"pequeño","onUpdate:modelValue":e[7]||(e[7]=o=>h.radio=o)},null,512),[[l.XL,h.radio]]),v]),(0,r.Lk)("div",null,[(0,r.bo)((0,r.Lk)("input",{type:"radio",name:"size",value:"mediano","onUpdate:modelValue":e[8]||(e[8]=o=>h.radio=o)},null,512),[[l.XL,h.radio]]),L]),(0,r.Lk)("div",null,[(0,r.bo)((0,r.Lk)("input",{type:"radio",name:"size",value:"grande","onUpdate:modelValue":e[9]||(e[9]=o=>h.radio=o)},null,512),[[l.XL,h.radio]]),m])])]),(0,r.Lk)("div",{class:(0,t.C4)(["container",h.radio]),style:(0,t.Tr)({backgroundColor:h.colorDeFondo,color:h.colorDeTexto,borderWidth:h.grosorDeBorde+"px",opacity:h.opaco?.5:1,fontFamily:h.selectedFont})},[(0,r.Lk)("div",null,[h.mostrarTexto?((0,r.uX)(),(0,r.CE)("p",x,"Su opinion:"+(0,t.v_)(h.opinion),1)):(0,r.Q3)("",!0)])],6)],64)}var h={name:"App",data(){return{colorDeFondo:"",colorDeTexto:"",mostrarTexto:!0,grosorDeBorde:1,opinion:"",tipografia:"",opaco:!1,radio:"",fonts:["none","arial","cursive","Courier New"],selectedSize:"",selectedFont:"none"}}},g=n(1241);const O=(0,g.A)(h,[["render",y]]);var T=O;(0,l.Ef)(T).mount("#app")}},e={};function n(l){var r=e[l];if(void 0!==r)return r.exports;var t=e[l]={exports:{}};return o[l].call(t.exports,t,t.exports,n),t.exports}n.m=o,function(){var o=[];n.O=function(e,l,r,t){if(!l){var u=1/0;for(p=0;p<o.length;p++){l=o[p][0],r=o[p][1],t=o[p][2];for(var a=!0,i=0;i<l.length;i++)(!1&t||u>=t)&&Object.keys(n.O).every((function(o){return n.O[o](l[i])}))?l.splice(i--,1):(a=!1,t<u&&(u=t));if(a){o.splice(p--,1);var d=r();void 0!==d&&(e=d)}}return e}t=t||0;for(var p=o.length;p>0&&o[p-1][2]>t;p--)o[p]=o[p-1];o[p]=[l,r,t]}}(),function(){n.n=function(o){var e=o&&o.__esModule?function(){return o["default"]}:function(){return o};return n.d(e,{a:e}),e}}(),function(){n.d=function(o,e){for(var l in e)n.o(e,l)&&!n.o(o,l)&&Object.defineProperty(o,l,{enumerable:!0,get:e[l]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){n.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)}}(),function(){var o={524:0};n.O.j=function(e){return 0===o[e]};var e=function(e,l){var r,t,u=l[0],a=l[1],i=l[2],d=0;if(u.some((function(e){return 0!==o[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(i)var p=i(n)}for(e&&e(l);d<u.length;d++)t=u[d],n.o(o,t)&&o[t]&&o[t][0](),o[t]=0;return n.O(p)},l=self["webpackChunkpruebaejemplo"]=self["webpackChunkpruebaejemplo"]||[];l.forEach(e.bind(null,0)),l.push=e.bind(null,l.push.bind(l))}();var l=n.O(void 0,[504],(function(){return n(2092)}));l=n.O(l)})();
//# sourceMappingURL=app.190c5137.js.map