(self.webpackChunktkfmtools=self.webpackChunktkfmtools||[]).push([[302],{24452:function(e,t,n){"use strict";var r=n(67294),a=n(50009),i=n(50033),l=n(17900),o=n(25072),c=n(87001),u=(0,a.ZP)(i.Z).withConfig({displayName:"ResultTablePanel__TableWrapper",componentId:"lhulap-0"})(["max-height:",";overflow-x:hidden;overflow-y:auto;"],(function(e){return e.$maxHeight})),s=(0,a.ZP)(c.ZP).withConfig({displayName:"ResultTablePanel__StyledSortableTable",componentId:"lhulap-1"})(["img{width:1.8rem;height:1.8rem;}td{padding-left:.75rem;}"]);t.Z=function(e){var t=e.data,n=e.head,a=e.body,i=e.sortFunc,c=e.defaultSortKey,m=e.handleModalOpen,f=e.maxHeight,d=e.striped,p=(0,l.f)().pageString;return r.createElement(r.Fragment,null,r.createElement(o.Z,{title:p.items.drop.filter.resultTitle,withHelp:!0,onClickHelp:m,border:!0}),r.createElement(u,{$maxHeight:f},r.createElement(s,{data:t,head:n,body:a,sortFunc:i,defaultSortKey:c,striped:d})))}},26465:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var r=n(19756),a=n(85061),i=n(67294),l=n(50009),o=n(4093),c=n(86300),u=n(99395),s=n(49400),m=n(54480),f=n(17900),d=n(47378),p=n(24452),g=n(87001),h=n(25072),y=n(50208),E=n(82195),b=n(93175),v=n(22776),Z=n(28437),S=n(20156),k={};S.forEach((function(e){e.stages.forEach((function(t){var n=t.materials,a=t.trainItems,i=t.expPotions,l=(0,r.Z)(t,["materials","trainItems","expPotions"]);[n,a,i].forEach((function(t){t.forEach((function(t){var n=Object.assign({chapter:e.chapter,rarity:t.rarity},l);k[t.id]?k[t.id].drop.push(n):k[t.id]={drop:[n]}}))}))}))}));for(var I=1;I<11;I++)k[(500+I).toString()]={drop:[]};for(var C=1;C<3;C++)k[(900+C).toString()]={drop:[]};var w=k,P={en:{1360:4,992:3,768:4,624:3,0:2},"zh-TW":{1360:5,992:4,768:5,624:4,410:3,0:2}},_=(0,l.ZP)(E.C).withConfig({displayName:"filter__StyledToggleButton",componentId:"sc-1e6kgg1-0"})(["display:flex;justify-content:center;align-items:center;font-size:.85rem;"]),O=(0,l.ZP)(b.Z).withConfig({displayName:"filter__ItemImg",componentId:"sc-1e6kgg1-1"})(["width:2.26rem;height:2.26rem;"]),x=function(e){var t=e.filterBtnValue,n=e.filterBy,r=e.clearBtnValue,a=(0,f.f)(),l=a.userLanguage,o=a.pageString,c=a.itemString;return i.createElement(i.Fragment,null,i.createElement(h.Z,{title:o.items.drop.filter.itemPanelTitle,end:i.createElement(y.Io,{onClick:r,tooltipText:o.items.drop.filter.deleteTooltip},Z.pJ),border:!0}),i.createElement(E.Z,{value:t,onChange:n,layoutConfig:P[l]},Object.entries(w).map((function(e,t){return 0===e[1].drop.length||i.createElement(_,{value:e[0],key:t},i.createElement(O,{name:"item_"+e[0],alt:""}),c.name[e[0]])}))))},B=(0,l.ZP)(g.Re).withConfig({displayName:"filter__ImgTh",componentId:"sc-1e6kgg1-2"})(["&:after{position:absolute;top:calc(50% - .75rem);margin-left:2rem;}"]),H=(0,l.ZP)(b.Z).withConfig({displayName:"filter__TableImg",componentId:"sc-1e6kgg1-3"})(["width:1.8rem;height:1.8rem;"]),T=function(e){var t=e.requestSort,n=e.getSortDirection,r=e.data,a=(0,f.f)(),l=a.pageString,o=a.itemString;return 0===r.length?i.createElement(g.Re,null,l.items.drop.filter.tableHead[1]):Object.entries(r[0]).map((function(e,r){if("stage"!==e[0]&&"energy"!==e[0])return i.createElement(B,{key:e[0],onClick:function(){return t(e[0])},direction:n(e[0])},i.createElement(H,{name:"item_"+e[0],alt:o.name[e[0]]}))}))},j=function(e){var t=e.requestSort,n=e.getSortDirection,r=e.sortedData,a=(0,f.f)().pageString;return i.createElement(o.Z,null,i.createElement(u.Z,null,i.createElement(g.Re,{onClick:function(){return t("stage")},direction:n("stage")},a.items.drop.filter.tableHead[0]),i.createElement(T,{requestSort:t,getSortDirection:n,data:r}),i.createElement(B,{onClick:function(){return t("energy")},direction:n("energy")},i.createElement(H,{name:"energy",alt:a.items.drop.filter.tableHead[2]}))))},V=function(e){var t=e.sortedData,n=(0,f.f)().itemString;return i.createElement(c.Z,null,t.map((function(e,t){return i.createElement(u.Z,{hover:!0,key:e.stage},i.createElement(s.Z,null,e.stage),Object.entries(e).map((function(e,t){if("stage"!==e[0]&&"energy"!==e[0])return i.createElement(s.Z,{key:t},n.rarity[e[1]])})),i.createElement(s.Z,null,e.energy))})))},M=function(e,t){var n=function(e){var t=e.split("-");return 1e3*parseInt(t[0])+10*parseInt(t[1].split(" ")[0])+(t[1].includes("free")?1:0)+(t.length>2?parseInt(t[2]):0)};e.sort((function(e,r){var a,i;return"stage"===t.key?(a=n(e.stage),i=n(r.stage)):(a=e[t.key],i=r[t.key]),a<i?"asc"===t.direction?-1:1:a>i?"asc"===t.direction?1:-1:0}))},D=function(){var e=(0,f.f)().pageString,t=(0,i.useState)({filterBtnValue:[],data:[],isHelpModalOpen:!1}),n=t[0],l=t[1],o=function(e,t){var n;if(0!==t.length){var i=(n=[]).concat.apply(n,(0,a.Z)(S.map((function(e){return e.stages.map((function(t){var n=t.materials,a=t.trainItems,i=t.expPotions,l=(0,r.Z)(t,["materials","trainItems","expPotions"]);return Object.assign({},l,{drops:n.concat(a,i),chapter:e.chapter})}))})))).filter((function(e){return t.every((function(t){var n=!1;return e.drops.forEach((function(e){if(e.id===t)return n=!0,!1})),n}))}));i=i.map((function(e){var n={stage:e.chapter+"-"+e.stage,energy:e.energy};return e.drops.forEach((function(e){t.includes(e.id)&&(n[e.id]=e.rarity)})),n})),l((function(e){return Object.assign({},e,{filterBtnValue:t,data:i})}))}else l((function(e){return Object.assign({},e,{filterBtnValue:t,data:[]})}))},c=function(e){return function(){l((function(t){return Object.assign({},t,{isHelpModalOpen:e})}))}};return i.createElement(i.Fragment,null,i.createElement(d.Z,{title:e.items.drop.filter.helmet.title,description:e.items.drop.filter.helmet.description,path:"/items/drop/filter/"}),i.createElement(m.Z,{panelsWidth:["62%","38%"]},i.createElement(x,{filterBtnValue:n.filterBtnValue,filterBy:o,clearBtnValue:function(e){return o(0,[])}}),i.createElement(p.Z,{data:n.data,head:i.createElement(j,null),body:i.createElement(V,null),sortFunc:M,defaultSortKey:n.filterBtnValue[0],handleModalOpen:c(!0),maxHeight:"calc(100vh - 16rem)",striped:!0})),i.createElement(v.p2,{title:e.items.drop.filter.helpModal.title,open:n.isHelpModalOpen,onClose:c(!1),content:e.items.drop.filter.helpModal.content,ariaLabelledby:"help-modal-title",ariaDescribedby:"help-modal-description"}))}}}]);
//# sourceMappingURL=component---src-pages-items-drop-filter-js-d60932df1724e8d4fbfa.js.map