(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{EU73:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("k2JI"),i=a("vOnD"),c=a("QojX"),s=a("JI6e"),o=a("FXsi"),d=a("JrlI"),m=a("MdAk"),u=a("cYtq"),h=a("D7KU"),p=a("ckOl"),b=function(e){var t=e.handleSelect,a=e.potentialMaxNum,r=e.potentialSubMinNum,i=e.disciplineDisabled,d=e.starMinNum,m=Object(n.useContext)(h.a).pageString;return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a.Row,null,l.a.createElement(s.a,null,m.characters.stats.levelTitle),l.a.createElement(s.a,null,m.characters.stats.starTitle)),l.a.createElement(c.a.Row,null,l.a.createElement(s.a,null,l.a.createElement(o.d,{type:"number",min:"1",max:"60",onChange:t("level"),placeholder:1})),l.a.createElement(o.c,{as:s.a,minNum:d,maxNum:5,onChange:t("star")})),l.a.createElement(o.e,{title:m.characters.stats.potentialTitle,subMinNum:r,minNum:1,maxNum:a,selectAttrs:["potential","potentialSub"],handleSelect:t}),m.characters.stats.disciplineTitle,l.a.createElement(c.a.Row,null,l.a.createElement(o.c,{as:s.a,minNum:0,maxNum:3,disabled:i,onChange:t("discipline")})))},f=Object(i.b)(d.b).withConfig({displayName:"ChatStats__StyledPanel",componentId:"sc-1ws4c6q-0"})(["@media screen and (max-width:992px){width:",";margin-left:calc(100% - ",");position:relative;margin-top:1rem;}"],(function(e){return e.widthConfig[992]}),(function(e){return e.widthConfig[992]})),w=i.b.div.withConfig({displayName:"ChatStats__BodyContainer",componentId:"sc-1ws4c6q-1"})(["display:flex;flex-direction:column;"]),g=i.b.div.withConfig({displayName:"ChatStats__StatusWrapper",componentId:"sc-1ws4c6q-2"})(["margin:1.5rem .5rem;svg{width:1.2rem;height:1.2rem;margin-right:.2rem;fill:",";}"],(function(e){return e.theme.colors.onSurface})),C=function(e){var t=e.widthConfig,a=e.result,r=Object(n.useContext)(h.a).pageString,i=Object(n.useState)(!1),c=i[0],s=i[1];return l.a.createElement(f,{widthConfig:t},l.a.createElement(o.b,{title:r.characters.stats.resultTitle,handleModalOpen:function(){return s(!0)}}),l.a.createElement(w,null,l.a.createElement(g,null,p.b,"ATK: "+a.ATK),l.a.createElement(g,null,p.r,"HP: "+a.HP)),l.a.createElement(m.b,{title:r.characters.stats.helpModal.title,open:c,onClose:function(){return s(!1)},content:r.characters.stats.helpModal.content,ariaLabelledby:"help-modal-title",ariaDescribedby:"help-modal-description"}))},E=i.b.div.withConfig({displayName:"ChatStats__CalculatorContainer",componentId:"sc-1ws4c6q-3"})(["display:table;width:100%;> div{display:table-cell;}@media screen and (max-width:992px){display:block;> div{display:block;}}"]),S=Object(i.b)(o.a).withConfig({displayName:"ChatStats__StyledCharPanel",componentId:"sc-1ws4c6q-4"})(["width:35%;@media screen and (max-width:992px){width:100%;}"]),v=i.b.div.withConfig({displayName:"ChatStats__TableGutter",componentId:"sc-1ws4c6q-5"})(["width:1rem;@media screen and (max-width:992px){display:hidden;}"]),N={default:"calc(65% - 1rem)",992:"100%"};function x(){var e=Object(n.useState)({character:"101",level:1,potential:1,potentialSub:0,discipline:0,star:3,result:{ATK:920,HP:3476}}),t=e[0],a=e[1],r=function(e){return function(n){var l=Object.assign({},t),r=n.target.value;if(l[e]="character"===e?r:parseInt(r),isNaN(parseInt(l.level))||l.level<0||l.level>60)a((function(e){return Object.assign({},e,{level:1,result:{ATK:"-",HP:"-"}})}));else{"4"!==l.character[0]&&"3"!==l.character[0]||(t.potential>6&&(l.potential=1),"4"===l.character[0]&&(l.discipline=0)),1!==l.potential&&0===t.potentialSub&&(l.potentialSub=1),4-l.character[0]>t.star&&(l.star=4-l.character[0]);var i=u.find((function(e){return e.id===l.character})).stats,c=i.initATK,s=i.initHP,d=Math.pow(1.1,l.level-1),m=Object(o.f)(l.character,[1,0],[l.potential,l.potentialSub]).buff,h=1+.05*l.discipline,p=(l.star+5)/(9-l.character[0]);l.result={ATK:Math.floor(c*d*(1+m.ATK/100)*h*p),HP:Math.floor(s*d*(1+m.HP/100)*h*p)},a(l)}}};return l.a.createElement(E,{resultPanelWidthConfig:N},l.a.createElement(S,{handleSelect:r,character:t.character},l.a.createElement(b,{handleSelect:r,potentialSubMinNum:1===t.potential?0:1,potentialMaxNum:"4"===t.character[0]||"3"===t.character[0]?6:12,disciplineDisabled:"4"===t.character[0],starMinNum:4-t.character[0]})),l.a.createElement(v,null),l.a.createElement(C,{widthConfig:N,result:t.result}))}t.default=function(){var e=Object(n.useContext)(h.a).pageString;return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{title:e.characters.stats.helmet.title,description:e.characters.stats.helmet.description,path:"/characters/stats"}),l.a.createElement(x,null))}}}]);
//# sourceMappingURL=component---src-pages-characters-stats-js-b179b72a0de75b623a49.js.map