(self.webpackChunktkfmtools=self.webpackChunktkfmtools||[]).push([[886],{74772:function(e,t,r){"use strict";r.d(t,{Q:function(){return s},qg:function(){return p},cP:function(){return y}});var n=r(67294),a=r(50009),o=r(17900),i=r(93175),l=r(16855),c=(0,a.ZP)(i.Z).withConfig({displayName:"Card__StyledImg",componentId:"sc-1duszqx-0"})(["display:flex;justify-content:center;align-items:center;width:100%;background-repeat:no-repeat;"]),d=a.ZP.div.withConfig({displayName:"Card__ImgWrapper",componentId:"sc-1duszqx-1"})(["display:flex;align-items:center;justify-content:center;"]),s=function(e){var t=e.children,r=e.className,a=e.imgType,o=e.imgId,i=e.alt;return e.isBackground?n.createElement(c,{className:r,name:a+"_"+o,isBackground:!0,alt:i},t):n.createElement(d,{className:r},n.createElement(c,{name:a+"_"+o,alt:i}),t)},m=(0,a.ZP)(s).withConfig({displayName:"Card__ItemImg",componentId:"sc-1duszqx-2"})(["> div:first-child{width:2.5rem;height:2.5rem;margin-right:.4rem;user-select:none;}"]),u=a.ZP.div.withConfig({displayName:"Card__TextWrapper",componentId:"sc-1duszqx-3"})(["white-space:nowrap;font-size:medium;font-weight:normal;"]),p=function(e){var t=e.className,r=e.id,a=(0,o.f)().itemString;return n.createElement(m,{className:t,imgType:"item",imgId:r,alt:""},n.createElement(u,null,a.name[r]))},g=(0,a.ZP)(l.Z).withConfig({displayName:"Card__StyledTable",componentId:"sc-1duszqx-4"})(["&& .MuiTableCell-root{font-size:.9rem;padding:.3rem;padding-left:.75rem;}"]),y=function(e){var t=e.className,r=e.children,a=e.striped;return n.createElement(g,{className:t,$striped:a},r)}},67e3:function(e,t,r){"use strict";r.d(t,{m1:function(){return x},bO:function(){return w},$e:function(){return C},qc:function(){return k}});var n=r(67294),a=r(50009),o=r(22122),i=r(81253),l=r(85505),c=(0,r(19123).Z)(n.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),d=r(34621),s=r(37595),m=r(11291),u=r(81664),p=r(67055);function g(e){return"Backspace"===e.key||"Delete"===e.key}var y=n.forwardRef((function(e,t){var r=e.avatar,a=e.classes,d=e.className,s=e.clickable,y=e.color,f=void 0===y?"default":y,h=e.component,k=e.deleteIcon,b=e.disabled,C=void 0!==b&&b,v=e.icon,w=e.label,S=e.onClick,x=e.onDelete,Z=e.onKeyDown,_=e.onKeyUp,I=e.size,E=void 0===I?"medium":I,N=e.variant,$=void 0===N?"default":N,P=(0,i.Z)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),T=n.useRef(null),O=(0,m.Z)(T,t),M=function(e){e.stopPropagation(),x&&x(e)},z=!(!1===s||!S)||s,L="small"===E,R=h||(z?p.Z:"div"),H=R===p.Z?{component:"div"}:{},B=null;if(x){var j=(0,l.Z)("default"!==f&&("default"===$?a["deleteIconColor".concat((0,u.Z)(f))]:a["deleteIconOutlinedColor".concat((0,u.Z)(f))]),L&&a.deleteIconSmall);B=k&&n.isValidElement(k)?n.cloneElement(k,{className:(0,l.Z)(k.props.className,a.deleteIcon,j),onClick:M}):n.createElement(c,{className:(0,l.Z)(a.deleteIcon,j),onClick:M})}var U=null;r&&n.isValidElement(r)&&(U=n.cloneElement(r,{className:(0,l.Z)(a.avatar,r.props.className,L&&a.avatarSmall,"default"!==f&&a["avatarColor".concat((0,u.Z)(f))])}));var q=null;return v&&n.isValidElement(v)&&(q=n.cloneElement(v,{className:(0,l.Z)(a.icon,v.props.className,L&&a.iconSmall,"default"!==f&&a["iconColor".concat((0,u.Z)(f))])})),n.createElement(R,(0,o.Z)({role:z||x?"button":void 0,className:(0,l.Z)(a.root,d,"default"!==f&&[a["color".concat((0,u.Z)(f))],z&&a["clickableColor".concat((0,u.Z)(f))],x&&a["deletableColor".concat((0,u.Z)(f))]],"default"!==$&&[a.outlined,{primary:a.outlinedPrimary,secondary:a.outlinedSecondary}[f]],C&&a.disabled,L&&a.sizeSmall,z&&a.clickable,x&&a.deletable),"aria-disabled":!!C||void 0,tabIndex:z||x?0:void 0,onClick:S,onKeyDown:function(e){e.currentTarget===e.target&&g(e)&&e.preventDefault(),Z&&Z(e)},onKeyUp:function(e){e.currentTarget===e.target&&(x&&g(e)?x(e):"Escape"===e.key&&T.current&&T.current.blur()),_&&_(e)},ref:O},H,P),U||q,n.createElement("span",{className:(0,l.Z)(a.label,L&&a.labelSmall)},w),B)})),f=(0,d.Z)((function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],r=(0,s.U1)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:(0,s._4)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:(0,s._4)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:(0,s._4)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:(0,s._4)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:(0,s._4)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:(0,s._4)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,s.U1)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,s.U1)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,s.U1)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:r,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:(0,s.U1)(r,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:(0,s.U1)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:(0,s.U1)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:(0,s.U1)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:(0,s.U1)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(y),h=r(17900),k=(0,a.ZP)(f).withConfig({displayName:"Chip__StyledChip",componentId:"sc-1s0dbsc-0"})(["&&{height:auto;width:",";color:",";font-size:small;> span{padding:0 .4rem;}margin-right:.4rem;}"],(function(e){return"en"===e.$lang?"3.8rem":"auto"}),(function(e){return e.theme.colors.onPrimary})),b=(0,a.ZP)(k).withConfig({displayName:"Chip__StyledNewChip",componentId:"sc-1s0dbsc-1"})(["&&{background-color:",";}"],(function(e){return e.theme.colors.success})),C=function(){var e=(0,h.f)(),t=e.userLanguage,r=e.pageString;return n.createElement(b,{label:r.index.updateLog.new,$lang:t})},v=(0,a.ZP)(k).withConfig({displayName:"Chip__StyleNFixChip",componentId:"sc-1s0dbsc-2"})(["&&{background-color:",";}"],(function(e){return e.theme.colors.error})),w=function(){var e=(0,h.f)(),t=e.userLanguage,r=e.pageString;return n.createElement(v,{label:r.index.updateLog.fix,$lang:t})},S=(0,a.ZP)(k).withConfig({displayName:"Chip__StyledChangeChip",componentId:"sc-1s0dbsc-3"})(["&&{background-color:",";}"],(function(e){return e.theme.colors.blue})),x=function(){var e=(0,h.f)(),t=e.userLanguage,r=e.pageString;return n.createElement(S,{label:r.index.updateLog.change,$lang:t})}},13170:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return V}});var n,a=r(85061),o=r(19756),i=r(67294),l=r(50009),c=r(4093),d=r(86300),s=r(99395),m=r(49400),u=r(50033),p=r(17900),g=r(47378),y=r(50208),f=r(87001),h=r(74772),k=r(67e3),b=r(22776),C=r(25072),v=r(82195),w=r(28437),S=r(20156),x=JSON.parse('{"101":{"rank":1,"category":0},"102":{"rank":1,"category":0},"103":{"rank":1,"category":0},"104":{"rank":1,"category":0},"105":{"rank":1,"category":0},"201":{"rank":2,"category":0},"202":{"rank":2,"category":0},"203":{"rank":2,"category":0},"204":{"rank":2,"category":0},"205":{"rank":2,"category":0},"301":{"rank":3,"category":0},"302":{"rank":3,"category":0},"303":{"rank":3,"category":0},"304":{"rank":3,"category":0},"305":{"rank":3,"category":0},"401":{"rank":4,"category":0},"402":{"rank":4,"category":0},"403":{"rank":4,"category":0},"404":{"rank":4,"category":0},"405":{"rank":4,"category":0},"406":{"rank":4,"category":0},"407":{"rank":4,"category":0},"408":{"rank":4,"category":0},"409":{"rank":4,"category":0},"410":{"rank":4,"category":0},"501":{"rank":5,"category":0},"502":{"rank":5,"category":0},"503":{"rank":5,"category":0},"504":{"rank":5,"category":0},"505":{"rank":5,"category":0},"506":{"rank":5,"category":0},"507":{"rank":5,"category":0},"508":{"rank":5,"category":0},"509":{"rank":5,"category":0},"510":{"rank":5,"category":0},"601":{"rank":1,"category":1},"602":{"rank":1,"category":1},"603":{"rank":1,"category":1},"604":{"rank":1,"category":1},"605":{"rank":1,"category":1},"701":{"rank":2,"category":1},"702":{"rank":2,"category":1},"703":{"rank":2,"category":1},"704":{"rank":2,"category":1},"705":{"rank":2,"category":1},"801":{"rank":1,"category":2},"802":{"rank":2,"category":2},"803":{"rank":3,"category":2},"901":{"rank":1,"category":3},"902":{"rank":2,"category":3}}'),Z=(0,l.ZP)(f.Re).withConfig({displayName:"drop__StyledTh",componentId:"sc-115hswd-0"})(["&&{background-color:",";color:",";","}white-space:nowrap;",""],(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.onSecondary}),(function(e){return e.$hidden?"display: none;":""}),(function(e){return e.$sortable?"":"cursor: default;"})),_=(0,l.ZP)(s.Z).withConfig({displayName:"drop__StyledTableRow",componentId:"sc-115hswd-1"})(["&&{","}"],(function(e){return e.$hidden?"display: none;":""})),I=(0,l.ZP)(_).withConfig({displayName:"drop__StyledTableHeadRow",componentId:"sc-115hswd-2"})(["&&{background-color:",";color:",";}"],(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.onSecondary})),E=function(e){var t=e.column,r=e.columnHasMounted,n=e.requestSort,a=e.getSortDirection,o=(0,p.f)().pageString;return i.createElement(c.Z,null,i.createElement(I,null,Object.entries(o.items.drop.index.tableHead).map((function(e,o){var l="stage"===e[0]||"energy"===e[0];return(0===o||r[o-1])&&i.createElement(Z,{onClick:l?function(){return n(e[0])}:void 0,direction:l?a(e[0]):void 0,key:e[1],$sortable:l,$hidden:0!==o&&!t.includes(o-1)},e[1])}))))},N=(0,l.ZP)(m.Z).withConfig({displayName:"drop__StyledTableCell",componentId:"sc-115hswd-3"})(["&&{","}"],(function(e){return e.$hidden?"display: none;":""})),$=l.ZP.div.withConfig({displayName:"drop__ItemsContainer",componentId:"sc-115hswd-4"})(["display:flex;flex-direction:row;align-items:center;flex-wrap:wrap;> div:last-child{margin:0;}"]),P=l.ZP.div.withConfig({displayName:"drop__ItemWrapper",componentId:"sc-115hswd-5"})(["display:",";flex-direction:row;align-items:center;flex-wrap:nowrap;margin-right:.8rem;div{flex-wrap:nowrap;font-size:1rem;}img{width:2rem;height:2rem;}"],(function(e){return e.$hidden?"none":"flex"})),T=(0,l.ZP)(k.qc).withConfig({displayName:"drop__StyledChip",componentId:"sc-115hswd-6"})(["&&{background-color:",";color:black;}margin-left:.4rem;"],(function(e){return 0===e.$rarity?"lightgray":1===e.$rarity?"#90CAF9":2===e.$rarity?"#A5D6A7":"#FFAB91"})),O=function(e){var t=e.items,r=e.rarity,n=e.rank,a=e.hidden,o=(0,p.f)().itemString;return i.createElement(N,{$hidden:a},i.createElement($,null,0!==t.length&&t.map((function(e){return i.createElement(P,{key:e.id,$hidden:!r.includes(e.rarity)||0===x[e.id].category&&!n.includes(x[e.id].rank)},i.createElement(h.qg,{id:e.id}),i.createElement(T,{$rarity:e.rarity,label:o.rarity[e.rarity]}))}))))},M=function(e){var t=e.column,r=e.rarity,n=e.rank,a=e.columnHasMounted,l=e.sortedData;return i.createElement(d.Z,null,l.map((function(e){var l=e.chapter,c=e.stage,d=e.energy,s=(0,o.Z)(e,["chapter","stage","energy"]);return i.createElement(_,{key:l+"-"+c,$hidden:Object.values(s).filter((function(e,r){return t.includes(r)})).every((function(e){return!e.some((function(e){return r.includes(e.rarity)&&(0!==x[e.id].category||n.includes(x[e.id].rank))}))}))},i.createElement(m.Z,null,l+"-"+c),Object.values(s).map((function(e,o){return a[o]&&i.createElement(O,{items:e,rarity:r,rank:n,hidden:!t.includes(o),key:o})})),i.createElement(N,{$hidden:!t.includes(3)},a[3]&&d))})))},z={en:{0:2,990:4},"zh-TW":{0:4}},L=l.ZP.div.withConfig({displayName:"drop__StyledContainer",componentId:"sc-115hswd-7"})(["padding:.2rem;"]),R=(0,l.ZP)(C.Z).withConfig({displayName:"drop__StyledHeader",componentId:"sc-115hswd-8"})(["margin-top:1rem;"]),H=(0,l.ZP)(v.C).withConfig({displayName:"drop__StyledToggleButton",componentId:"sc-115hswd-9"})(["&&&{padding:.25rem .15rem;}"]),B=function(e){var t=e.filterBtnValue,r=e.filterBy,n=e.groupValues,a=e.strings,o=(0,p.f)().userLanguage;return i.createElement(L,null,i.createElement(R,{title:a.title,border:!0}),i.createElement(v.Z,{value:t,onChange:r,layoutConfig:z[o]},n.map((function(e,t){return i.createElement(H,{value:e,key:t},a.button[t])}))))},j=(0,l.ZP)(b.WQ).withConfig({displayName:"drop__StyledModal",componentId:"sc-115hswd-10"})(["> div:nth-child(3){top:20%;width:30%;@media screen and (max-width:1300px){width:40%;}@media screen and (max-width:992px){width:60%;}@media screen and (max-width:768px){width:90%;}> div:last-child > div:first-child > div{margin-top:0;}}"]),U=function(e){var t=e.isModalOpen,r=e.onClose,n=e.filterBy,a=(0,o.Z)(e,["isModalOpen","onClose","filterBy"]),l=(0,p.f)().pageString;return i.createElement(j,{title:l.items.drop.index.settingModal.title,open:t,onClose:r,ariaLabelledby:"setting-modal-title"},Object.entries(W).map((function(e,t){return i.createElement(B,{groupValues:e[1],filterBtnValue:a[e[0]],filterBy:n(e[0]),strings:l.items.drop.index.settingModal.content[t],key:t})})))},q=function(e){return 1e3*parseInt(e.chapter)+10*parseInt(e.stage.split(" ")[0])+(e.stage.includes("free")?1:0)+(e.stage.includes("-")?parseInt(e.stage.split("-")[1]):0)},D=function(e,t){e.sort((function(e,r){var n,a;return"stage"===t.key?(n=q(e),a=q(r)):(n=e[t.key],a=r[t.key]),n<a?"asc"===t.direction?-1:1:n>a?"asc"===t.direction?1:-1:0}))},W={column:[0,1,2,3],rank:[1,2,3,4],rarity:[0,1,2,3]},F=(n=[]).concat.apply(n,(0,a.Z)(S.map((function(e){return e.stages.map((function(t){return Object.assign({chapter:e.chapter},t)}))})))),A=(0,l.ZP)(u.Z).withConfig({displayName:"drop__TableWrapper",componentId:"sc-115hswd-11"})(["overflow-x:auto;height:calc(100vh - 11rem);padding-right:0;margin-right:0;table{text-align:center;}"]),K=l.ZP.div.withConfig({displayName:"drop__SettingButtonWrapper",componentId:"sc-115hswd-12"})(["position absolute;right:0;top:-4rem;"]),V=function(){var e=(0,p.f)().pageString,t=(0,i.useState)(Object.assign({},W,{column:"undefined"!=typeof window&&window.innerWidth<600?[0]:W.column,isModalOpen:!1,columnHasMounted:"undefined"!=typeof window&&window.innerWidth<600?(0,a.Z)(Array(4).keys()).map((function(e,t){return 0===t})):Array(4).fill(!0)})),r=t[0],n=t[1],o=function(e){return function(){return n((function(t){return Object.assign({},t,{isModalOpen:e})}))}};return i.createElement(i.Fragment,null,i.createElement(g.Z,{title:e.items.drop.index.helmet.title,description:e.items.drop.index.helmet.description,path:"/items/drop/"}),i.createElement(K,null,i.createElement(y.ZP,{onClick:o(!0),tooltipText:e.items.drop.index.settingTooltip},w.qY)),i.createElement(A,null,i.createElement(f.ZP,{data:F,head:i.createElement(E,{column:r.column,columnHasMounted:r.columnHasMounted}),body:i.createElement(M,{column:r.column,rarity:r.rarity,rank:r.rank,columnHasMounted:r.columnHasMounted}),sortFunc:D,defaultSortKey:"stage",border:!0})),i.createElement(U,Object.assign({},r,{isModalOpen:r.isModalOpen,onClose:o(!1),filterBy:function(e){return function(t,r){n((function(t){var n;return Object.assign({},t,((n={})[e]=r,n.columnHasMounted="column"===e?t.columnHasMounted.map((function(e,t){return e||r.includes(t)})):t.columnHasMounted,n))}))}}})))}}}]);
//# sourceMappingURL=component---src-pages-items-drop-index-js-8be401ac8b4b77e1621c.js.map