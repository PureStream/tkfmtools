(self.webpackChunktkfmtools=self.webpackChunktkfmtools||[]).push([[319],{8169:function(e,t,n){"use strict";var r=n(22122),o=n(19756),a=n(75900),i=n.n(a),l=n(67294),c=n(99541),u=l.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,u=e.striped,s=e.bordered,d=e.borderless,m=e.hover,f=e.size,p=e.variant,h=e.responsive,y=(0,o.Z)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),g=(0,c.vE)(n,"table"),b=i()(a,g,p&&g+"-"+p,f&&g+"-"+f,u&&g+"-striped",s&&g+"-bordered",d&&g+"-borderless",m&&g+"-hover"),v=l.createElement("table",(0,r.Z)({},y,{className:b,ref:t}));if(h){var C=g+"-responsive";return"string"==typeof h&&(C=C+"-"+h),l.createElement("div",{className:C},v)}return v}));t.Z=u},19809:function(e,t,n){"use strict";var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(67294),c=(r=l)&&r.__esModule?r:{default:r};var u={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.reCalculateColumnCount=n.reCalculateColumnCount.bind(n),n.reCalculateColumnCountDebounce=n.reCalculateColumnCountDebounce.bind(n);var r=void 0;return r=n.props.breakpointCols&&n.props.breakpointCols.default?n.props.breakpointCols.default:parseInt(n.props.breakpointCols)||2,n.state={columnCount:r},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"componentDidUpdate",value:function(){this.reCalculateColumnCount()}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"reCalculateColumnCountDebounce",value:function(){var e=this;window&&window.requestAnimationFrame?(window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame((function(){e.reCalculateColumnCount()}))):this.reCalculateColumnCount()}},{key:"reCalculateColumnCount",value:function(){var e=window&&window.innerWidth||1/0,t=this.props.breakpointCols;"object"!==(void 0===t?"undefined":a(t))&&(t={default:parseInt(t)||2});var n=1/0,r=t.default||2;for(var o in t){var i=parseInt(o);i>0&&e<=i&&i<n&&(n=i,r=t[o])}r=Math.max(1,parseInt(r)||1),this.state.columnCount!==r&&this.setState({columnCount:r})}},{key:"itemsInColumns",value:function(){for(var e=this.state.columnCount,t=new Array(e),n=[].concat(this.props.children||[]),r=0;r<n.length;r++){var o=r%e;t[o]||(t[o]=[]),t[o].push(n[r])}return t}},{key:"renderColumns",value:function(){var e=this.props,t=e.column,n=e.columnAttrs,r=void 0===n?{}:n,a=e.columnClassName,i=this.itemsInColumns(),l=100/i.length+"%",u=a;"string"!=typeof u&&(this.logDeprecated('The property "columnClassName" requires a string'),void 0===u&&(u="my-masonry-grid_column"));var s=o({},t,r,{style:o({},r.style,{width:l}),className:u});return i.map((function(e,t){return c.default.createElement("div",o({},s,{key:t}),e)}))}},{key:"logDeprecated",value:function(e){console.error("[Masonry]",e)}},{key:"render",value:function(){var e=this.props,t=(e.children,e.breakpointCols,e.columnClassName,e.columnAttrs,e.column,e.className),n=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),r=t;return"string"!=typeof t&&(this.logDeprecated('The property "className" requires a string'),void 0===t&&(r="my-masonry-grid")),c.default.createElement("div",o({},n,{className:r}),this.renderColumns())}}]),t}(c.default.Component);s.defaultProps=u,t.Z=s},74772:function(e,t,n){"use strict";n.d(t,{Q:function(){return s},qg:function(){return f},cP:function(){return h}});var r=n(67294),o=n(50009),a=n(8169),i=n(57954),l=n(93175),c=(0,o.ZP)(l.Z).withConfig({displayName:"Card__StyledImg",componentId:"sc-1duszqx-0"})(["display:flex;justify-content:center;align-items:center;width:100%;background-repeat:no-repeat;"]),u=o.ZP.div.withConfig({displayName:"Card__ImgWrapper",componentId:"sc-1duszqx-1"})(["display:flex;align-items:center;justify-content:center;"]),s=function(e){var t=e.children,n=e.className,o=e.imgType,a=e.imgId,i=e.alt;return e.isBackground?r.createElement(c,{className:n,name:o+"_"+a,isBackground:!0,alt:i},t):r.createElement(u,{className:n},r.createElement(c,{name:o+"_"+a,alt:i}),t)},d=(0,o.ZP)(s).withConfig({displayName:"Card__ItemImg",componentId:"sc-1duszqx-2"})(["> div:first-child{width:2.5rem;height:2.5rem;margin-right:.4rem;user-select:none;}"]),m=o.ZP.div.withConfig({displayName:"Card__TextWrapper",componentId:"sc-1duszqx-3"})(["white-space:nowrap;font-size:medium;font-weight:normal;"]),f=function(e){var t=e.className,n=e.id,o=(0,i.f)().itemString;return r.createElement(d,{className:t,imgType:"item",imgId:n,alt:""},r.createElement(m,null,o.name[n]))},p=(0,o.ZP)(a.Z).withConfig({displayName:"Card__StyledTable",componentId:"sc-1duszqx-4"})(["font-size:.9rem;color:",";margin:0;> tbody > tr >{td:first-child{padding-left:.75rem;}}"],(function(e){return e.theme.colors.onSurface})),h=function(e){var t=e.className,n=e.children,o=e.striped;return r.createElement(p,{className:t,striped:o,borderless:!0,size:"sm"},n)}},47233:function(e,t,n){"use strict";n.d(t,{Ps:function(){return p},ac:function(){return b}});var r=n(19756),o=n(67294),a=n(50009),i=n(57954),l=n(74772),c=n(28437),u=n(68912),s=(0,a.ZP)(l.Q).withConfig({displayName:"CharCard__StyledCard",componentId:"sc-1p8ym1z-0"})(["flex-direction:column;align-items:flex-end;justify-content:space-around;width:100%;min-width:10rem;height:3.6rem;background-repeat:no-repeat;background-size:6rem 6rem;background-position:0 -1.6rem;"]),d=a.ZP.div.withConfig({displayName:"CharCard__TextWrapper",componentId:"sc-1p8ym1z-1"})(["margin-left:0;margin-right:1rem;transition:all 0.3s ease;text-transform:none;text-shadow:0 0 1px ",",-2px 0 1px  ",",2px 0 1px  ",",0 -2px 1px ",",0 2px 1px  ",",2px 2px 1px ",",2px -2px 1px ",",-2px 2px 1px ",",-2px -2px 1px ",";"],(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface})),m=(0,a.ZP)(d).withConfig({displayName:"CharCard__TitleText",componentId:"sc-1p8ym1z-2"})(["font-size:small;"]),f=function(e){var t=e.className,n=e.id,r=(0,i.f)().charString;return o.createElement(s,{className:t,imgType:"char_small",imgId:n,alt:"",isBackground:!0},o.createElement(m,null,r.name[n].split(" ").slice(0,-1).join(" ")),o.createElement(d,null,r.name[n].split(" ").slice(-1)[0]))},p=(0,a.ZP)(f).withConfig({displayName:"CharCard__ResponsiveCharCard",componentId:"sc-1p8ym1z-3"})(["@media screen and (min-width:","px){flex-direction:row;align-items:center;justify-content:flex-start;> div{margin-left:7rem}> div:last-child{margin-left:-.6rem;}}"],(function(e){return e.$textWrapConfig})),h=a.ZP.div.withConfig({displayName:"CharCard__TagWrapper",componentId:"sc-1p8ym1z-4"})(["display:flex;flex-direction:row;"]),y=a.ZP.div.withConfig({displayName:"CharCard__IconWrapper",componentId:"sc-1p8ym1z-5"})(["margin-bottom:.1rem;margin-left:.25rem;margin-right:.4rem;> svg{width:1.2rem;fill:",";color:",";}"],(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.secondary})),g=function(e){var t=e.type,n=e.tag,r=(0,i.f)().charString,a={attribute:c.XV,position:c.$g,race:c.i6,body:c.cp,oppai:c.JU,rank:c.U2,else:c.fP};return o.createElement("tr",null,o.createElement("td",null,o.createElement(h,null,o.createElement(y,null,a[t]),r.tags[n])))},b=function(e){var t=e.id,n=(0,i.f)().charString,a=u.find((function(e){return e.id===t})).tags,c=a.available,s=(0,r.Z)(a,["available"]);return c?o.createElement(l.cP,{striped:!0},o.createElement("tbody",null,Object.entries(s).map((function(e,t){return"else"===e[0]?e[1].map((function(e,n){return o.createElement(g,{key:t+n,type:"else",tag:e})})):e[1]>=0?o.createElement(g,{key:t,type:e[0],tag:e[1]}):null})))):o.createElement(l.cP,{striped:!0},o.createElement("tbody",null,o.createElement("tr",null,o.createElement("td",null,n.tagWarnMsg))))};t.ZP=f},87001:function(e,t,n){"use strict";n.d(t,{Re:function(){return l},ZP:function(){return u}});var r=n(67294),o=n(50009),a=n(8169),i=function(e,t,n){var o=(0,r.useState)(n),a=o[0],i=o[1];return{sortedData:(0,r.useMemo)((function(){var n=Array.from(e);return a.key&&t(n,a),n}),[e,a]),sortConfig:a,requestSort:function(e){var t=a.key===e&&"desc"===a.direction?"asc":"desc";i({key:e,direction:t})},getSortDirection:function(t){return 0!==(null==e?void 0:e.length)&&a.key===t?a.direction:void 0}}},l=o.ZP.th.withConfig({displayName:"SortableTable__SortableTh",componentId:"sc-95ym4-0"})(["cursor:pointer;user-select:none;background-color:",";color:",";&:after{content:'","';}"],(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.onSurface}),(function(e){return e.direction?"asc"===e.direction?" \\25B2":" \\25BC":void 0})),c=(0,o.ZP)(a.Z).withConfig({displayName:"SortableTable__StyledTable",componentId:"sc-95ym4-1"})(["width:100%;margin-bottom:0;th{position:sticky;top:0;z-index:1;}&,&&& tr{color:",";}th{padding:.75rem .25rem;}th:first-child{padding-left:.75rem;}td{vertical-align:middle;}tr{border-bottom:",";}"],(function(e){return e.theme.colors.onSurface}),(function(e){return e.$border?"1px solid "+e.theme.colors.secondary:"none"})),u=function(e){var t=e.className,n=e.data,o=e.head,a=e.body,l=e.sortFunc,u=e.defaultSortKey,s=e.striped,d=e.border,m=i(n,l,{key:u,direction:"desc"}),f=m.sortedData,p=m.sortConfig,h=m.requestSort,y=m.getSortDirection;return(0,r.useEffect)((function(){p.key!==u&&h(u)}),[u]),r.createElement(c,{className:t,striped:s,borderless:!0,hover:!0,$border:d,size:"sm"},r.cloneElement(o,{sortedData:f,requestSort:h,getSortDirection:y}),r.cloneElement(a,{sortedData:f}))}},50033:function(e,t,n){"use strict";var r=n(50009).ZP.div.withConfig({displayName:"Scrollable",componentId:"sc-1ueymsi-0"})(["overflow:auto;height:100%;scrollbar-width:thin;padding-right:.5rem;margin-right:-.5rem;&::-webkit-scrollbar{width:.4rem;height:.4rem;background:",";}&::-webkit-scrollbar-thumb{background:",";border-radius:.25rem;}&::-webkit-scrollbar-track{background:",";}&::-webkit-scrollbar-corner{background:",";}"],(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface}));t.Z=r},38234:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var r=n(67294),o=n(50009),a=n(86015);function i(e){var t=e.layoutSwitcher,n=e.localStorageKey,o=e.items,i=e.initLayoutIndex,l=e.unmountOnLeave,c=(0,a.Z)(n,o.map((function(e){return e.layout})),i,l),u=c.layout,s=c.canRender,d=c.setLayout;return r.createElement(r.Fragment,null,r.cloneElement(t,{layout:u,setLayout:d}),o.map((function(e,t){return r.createElement("div",{hidden:u!==e.layout,key:e.layout},s[t]&&e.content)})))}var l=n(57954),c=n(47378),u=n(50208),s=n(19809),d=(0,o.ZP)(s.Z).withConfig({displayName:"Masonry__StyledMasonry",componentId:"jvd8a3-0"})(["display:flex;width:auto;margin-left:-1rem;> div{padding-left:1rem;}"]);function m(e){var t=e.children,n=e.breakpointCols;return r.createElement(d,{breakpointCols:n,columnClassName:""},t)}var f=n(91918),p=n(47233),h=(0,o.ZP)(f.Z).withConfig({displayName:"CharTagMasonry__StyledAccordion",componentId:"xlcyi3-0"})(["&&{&&{margin-bottom:1rem;}border:1px solid ",";border-radius:.25rem;box-shadow:0 0 .15em lightgray;> .MuiAccordionSummary-root{padding:0;border-bottom-right-radius:0;border-bottom-left-radius:0;border-bottom:0px solid ",";}> .MuiAccordionSummary-root.Mui-expanded{border-bottom:1px solid ",";}.MuiAccordionSummary-content{display:flex;align-items:center;justify-content:space-between;padding:0;margin:0;}.MuiAccordionDetails-root{margin:0;padding:0;}}"],(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.border})),y=function(e){var t=e.title,n=e.content,o=(0,r.useState)(!1),a=o[0],i=o[1];return r.createElement(h,{expanded:a,onChange:function(){return i(!a)},title:t,content:n})},g=function(){var e=(0,l.f)().charString;return r.createElement(m,{breakpointCols:{default:6,1360:5,1200:4,992:3,600:2}},Object.keys(e.name).map((function(e,t){return"nr"!==e&&r.createElement(y,{title:r.createElement(p.ZP,{id:e}),content:r.createElement(p.ac,{id:e}),key:t})})))},b=n(50033),v=n(87001),C=o.ZP.div.withConfig({displayName:"WindowTable__Sizer",componentId:"sc-1fg3mlg-0"})(["height:","px;th,td{white-space:nowrap;}"],(function(e){return e.$height}));var w=n(68912),E=(0,o.ZP)(v.Re).withConfig({displayName:"CharTagTable__StyledTh",componentId:"sc-1n6agm0-0"})(["background-color:",";color:",";white-space:nowrap;"],(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.onSecondary})),k=r.forwardRef((function(e,t){var n=(0,l.f)().charString;return r.createElement("thead",{ref:t},r.createElement("tr",null,Object.entries(n.tagAttributes).map((function(t,n){return r.createElement(E,{onClick:function(){return e.requestSort(t[0])},direction:e.getSortDirection(t[0]),key:n},t[1])}))))})),x={"zh-TW":900,en:1300},S=function(e){return 0===e?"N":1===e?"R":2===e?"SR":"SSR"},_=r.forwardRef((function(e,t){var n=e.sortedData,o=e.renderTo,a=(0,l.f)(),i=a.userLanguage,c=a.charString;return r.createElement("tbody",null,n.map((function(e,n){return n>o?null:e.available?r.createElement("tr",{key:e.id,ref:0===n?t:void 0},Object.entries(e).map((function(t,n){return"available"===t[0]||("id"===t[0]?r.createElement("td",{key:n},r.createElement(p.Ps,{id:e.id,$textWrapConfig:x[i]})):"rarity"===t[0]?r.createElement("td",{key:n},S(t[1])):"else"===t[0]?r.createElement("td",{key:n},t[1].map((function(e){return c.tags[e]})).join(", ")):(o=t[1]<0?"-":c.tags[t[1]],r.createElement("td",{key:n},o)));var o}))):r.createElement("tr",{key:e.id},r.createElement("td",null,r.createElement(p.Ps,{id:e.id,$textWrapConfig:x[i]})),r.createElement("td",null,S(e.rarity)),r.createElement("td",null,c.tags[e.attribute]),r.createElement("td",null,c.tags[e.position]),r.createElement("td",{colSpan:"5"},c.tagWarnMsg))})))})),N=(0,o.ZP)((function(e){var t=e.className,n=e.head,o=e.body,a=e.data,i=e.sortFunc,l=e.defaultSortKey,c=e.border,u=(0,r.useRef)(),s=(0,r.useRef)(),d=(0,r.useRef)(),m=(0,r.useState)({scrollTop:0,renderTo:0,sizerHeight:0}),f=m[0],p=m[1];return(0,r.useEffect)((function(){var e=u&&u.current?u.current.getBoundingClientRect().height:0,t=s&&s.current?s.current.getBoundingClientRect().height:0,n=f.scrollTop+e,r=d&&d.current?d.current.getBoundingClientRect().height:0,o=Math.min(Math.floor(n/r),a.length-1),i=t+a.length*r;p((function(e){return Object.assign({},e,{renderTo:Math.max(e.renderTo,o),sizerHeight:i})}))}),[u,d,s,f.scrollTop]),r.createElement(b.Z,{className:t,onScroll:function(e){p((function(t){return Object.assign({},t,{scrollTop:e.target.scrollTop})}))},ref:u},r.createElement(C,{$height:f.sizerHeight},r.createElement(v.ZP,{data:a,head:r.cloneElement(n,{ref:s}),body:r.cloneElement(o,{renderTo:f.renderTo,ref:d}),sortFunc:i,defaultSortKey:l,border:c})))})).withConfig({displayName:"CharTagTable__CharTable",componentId:"sc-1n6agm0-1"})(["overflow-x:auto;height:calc(100vh - 12rem);padding-right:0;margin-right:0;"]),T=function(){var e=(0,l.f)().charString,t=w.map((function(e){var t=e.id,n=e.rarity,r=e.tags;return Object.assign({id:t,rarity:n},r)}));return r.createElement(N,{data:t,head:r.createElement(k,null),body:r.createElement(_,null),sortFunc:function(t,n){t.sort((function(t,r){var o,a;return"else"===n.key?(o=t[n.key].join(""),a=r[n.key].join("")):"name"===n.key?(o=e.name[t.id],a=e.name[r.id]):(o=t[n.key],a=r[n.key]),o<a?"asc"===n.direction?-1:1:o>a?"asc"===n.direction?1:-1:0}))},defaultSortKey:"rarity",border:!0})},P=n(28437),Z=o.ZP.div.withConfig({displayName:"enlist__LayoutBtnContainer",componentId:"sc-199adb2-0"})(["position:absolute;right:0;top:-4rem;@media screen and (max-width:410px){font-size:0;}"]),I=function(e){var t=e.layout,n=e.setLayout,o=(0,l.f)().pageString;return r.createElement(Z,null,o.enlist.index.layout,r.createElement(u.ZP,{$active:"Masonry"===t,onClick:function(){return n("Masonry")},tooltipText:o.enlist.index.masonryTooltip},P.xf),r.createElement(u.ZP,{$active:"Table"===t,onClick:function(){return n("Table")},tooltipText:o.enlist.index.tableTooltip},P.y2))},z=function(){var e=(0,l.f)().pageString;return r.createElement(r.Fragment,null,r.createElement(c.Z,{title:e.enlist.index.helmet.title,description:e.enlist.index.helmet.description,path:"/enlist/"}),r.createElement(i,{localStorageKey:"enlist-character-layout",layoutSwitcher:r.createElement(I,null),items:[{layout:"Masonry",content:r.createElement(g,null)},{layout:"Table",content:r.createElement(T,null)}]}))}}}]);
//# sourceMappingURL=component---src-pages-enlist-index-js-517612f2dd62df164b1c.js.map