(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{JrlI:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return f})),n.d(t,"d",(function(){return v})),n.d(t,"c",(function(){return k})),n.d(t,"g",(function(){return x})),n.d(t,"f",(function(){return I})),n.d(t,"h",(function(){return N})),n.d(t,"e",(function(){return M}));var r=n("KQm4"),o=n("q1tI"),i=n.n(o),a=n("vOnD"),c=n("Xt1q"),l=n("+Isj"),d=n("kKU3"),s=n("MBJH"),m=n("D7KU"),u=n("ckOl"),p=a.b.div.withConfig({displayName:"FilterComponents__StyledContainerHeader",componentId:"sc-2r2g3y-0"})(["display:flex;align-items:center;font-size:large;font-weight:normal;justify-content:space-between;margin-bottom:1rem;padding-bottom:.4rem;border-bottom:solid 1px ",";color:",";> div{display:flex;align-items:center;}"],(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.onSurface})),g=function(e){var t=e.title,n=e.end;return i.a.createElement(p,null,t,n)},b=a.b.div.withConfig({displayName:"FilterComponents__StyledFilterPanel",componentId:"sc-2r2g3y-1"})(["height:100%;width:",";padding:1rem;border-radius:.25rem;background-color:",";border:1px solid ",";box-shadow:0 0 .15em lightgray;@media screen and (max-width:1360px){width:",";}@media screen and (max-width:992px){width:",";}"],(function(e){return e.widthConfig.default}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.border}),(function(e){return e.widthConfig[1360]}),(function(e){return e.widthConfig[992]})),f=function(e){var t=e.className,n=e.children,r=e.widthConfig;return i.a.createElement(b,{className:t,widthConfig:r},n)},h=a.b.div.withConfig({displayName:"FilterComponents__ModalHeader",componentId:"sc-2r2g3y-2"})(["display:flex;justify-content:space-between;font-size:large;border-bottom:1px solid ",";"],(function(e){return e.theme.colors.border})),y=a.b.div.withConfig({displayName:"FilterComponents__ModalBody",componentId:"sc-2r2g3y-3"})(["margin:1rem 0;"]),w=function(e){var t=e.handleModalClose;return e.content.map((function(e,n){var r=function(){return 0===n?i.a.createElement("span",{onClick:t},"×"):null};return i.a.createElement(i.a.Fragment,{key:n},i.a.createElement(h,null,i.a.createElement("span",null,e.title),i.a.createElement(r,null)),i.a.createElement(y,null,e.content.map((function(e,t){return i.a.createElement("p",{key:t},e)}))))}))},E=a.b.div.withConfig({displayName:"FilterComponents__StyledModalContainer",componentId:"sc-2r2g3y-4"})(["background-color:",";color:",";position:absolute;width:70%;left:15%;top:10%;@media screen and (max-width:992px){width:80%;left:10%;}@media screen and (max-width:768px){width:90%;left:5%;top:5%;}padding:1rem;border-radius:.25rem;border:1px solid ",";> div > div:first-child > span:last-child{font-size:x-large;cursor:pointer;}"],(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.onSurface}),(function(e){return e.theme.colors.border})),C=a.b.div.withConfig({displayName:"FilterComponents__ModalContentWrapper",componentId:"sc-2r2g3y-5"})(["overflow:auto;max-height:calc(80vh - 2rem);scrollbar-width:thin;padding-right:.5rem;margin-right:-.5rem;&::-webkit-scrollbar{width:.4rem;background:",";}&::-webkit-scrollbar-thumb{background:",";border-radius:.25rem;}&::-webkit-scrollbar-track{background:",";}&::-webkit-scrollbar-corner{background:",";}"],(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface})),v=function(e){var t=e.children,n=e.className,r=e.open,o=e.onClose;return i.a.createElement(c.a,{className:n,open:r,onClose:o,closeAfterTransition:!0,BackdropComponent:l.a,BackdropProps:{timeout:500}},i.a.createElement(d.a,{in:r},i.a.createElement(E,null,i.a.createElement(C,null,t))))},k=function(e){var t=e.content,n=e.modalOpen,r=e.handleModalClose;return i.a.createElement(v,{open:n,onClose:r,"aria-labelledby":"help-modal-title","aria-describedby":"help-modal-description"},i.a.createElement(w,{content:t,handleModalClose:r}))},x=a.b.th.withConfig({displayName:"FilterComponents__SortableTh",componentId:"sc-2r2g3y-6"})(["position:sticky;top:0;z-index:1;cursor:pointer;user-select:none;background-color:",";color:",";&:after{content:'","';}"],(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.onSurface}),(function(e){return e.direction?"asc"===e.direction?" \\25B2":" \\25BC":void 0})),_=Object(a.b)(s.a).withConfig({displayName:"FilterComponents__StyledTable",componentId:"sc-2r2g3y-7"})(["width:100%;margin-bottom:0;&,&&& tr{color:",";}th{padding:.75rem .25rem;}th:first-child{padding-left:.75rem;}td{vertical-align:middle;}tr{border-bottom:",";}"],(function(e){return e.theme.colors.onSurface}),(function(e){return e.$border?"1px solid "+e.theme.colors.secondary:"none"})),I=function(e){var t=e.className,n=e.children,a=e.result,c=e.sortFunc,l=e.defaultSortKey,d=e.striped,s=e.border,m=function(e,t){void 0===t&&(t={key:l,direction:"desc"});var n=Object(o.useState)(t),i=n[0],a=n[1];return{sortedResult:Object(o.useMemo)((function(){var t=Object(r.a)(e);return i.key&&c(t,i),t}),[e,i]),requestSort:function(e){var t=i.key===e&&"desc"===i.direction?"asc":"desc";a({key:e,direction:t})},sortConfig:i}}(a),u=m.sortedResult,p=m.requestSort,g=m.sortConfig;Object(o.useEffect)((function(){g.key!==l&&p(l)}),[l]);return i.a.createElement(_,{className:t,striped:d,borderless:!0,hover:!0,$border:s,size:"sm"},i.a.cloneElement(n,{requestSort:p,getSortDirection:function(e){if(0!==u.length)return g.key===e?g.direction:void 0},sortedResult:u}))},S=a.b.div.withConfig({displayName:"FilterComponents__ResultTableContainer",componentId:"sc-2r2g3y-8"})(["vertical-align:top;position:absolute;width:",";margin-left:calc(100% - ",");padding:1rem;top:0;right:0;bottom:0;left:0;border-radius:.25rem;background-color:",";border:1px solid ",";box-shadow:0 0 .15em lightgray;@media screen and (max-width:1360px){width:",";margin-left:calc(100% - ",");}@media screen and (max-width:992px){width:",";margin-left:calc(100% - ",");position:relative;margin-top:1rem;}"],(function(e){return e.widthConfig.default}),(function(e){return e.widthConfig.default}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.border}),(function(e){return e.widthConfig[1360]}),(function(e){return e.widthConfig[1360]}),(function(e){return e.widthConfig[992]}),(function(e){return e.widthConfig[992]})),N=a.b.div.withConfig({displayName:"FilterComponents__TableWrapper",componentId:"sc-2r2g3y-9"})(["height:calc(100% - 1.4rem - 1.5rem);overflow-x:hidden;overflow-y:auto;scrollbar-width:thin;&::-webkit-scrollbar{width:.4rem;height:.4rem;background:",";}&::-webkit-scrollbar-thumb{background:",";border-radius:.25rem;}&::-webkit-scrollbar-track{background:",";}&::-webkit-scrollbar-corner{background:",";}"],(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.surface})),L=Object(a.b)(I).withConfig({displayName:"FilterComponents__StyledSortableTable",componentId:"sc-2r2g3y-10"})(["img{width:1.8rem;height:1.8rem;}td{padding-left:.75rem;}"]),O=a.b.div.withConfig({displayName:"FilterComponents__IconWrapper",componentId:"sc-2r2g3y-11"})(["svg{fill:",";width:1.4rem;height:1.4rem;margin-left:.4rem;cursor:pointer;vertical-align:top;}"],(function(e){return e.theme.colors.secondary}));function M(e){var t=e.children,n=e.result,r=e.sortFunc,a=e.defaultSortKey,c=e.modalOpen,l=e.handleModalOpen,d=e.handleModalClose,s=e.modalContent,p=e.widthConfig,b=e.striped,f=Object(o.useContext)(m.a).pageString;return i.a.createElement(S,{widthConfig:p},i.a.createElement(g,{title:i.a.createElement("div",null,f.items.drop.filter.resultTitle,i.a.createElement(O,{onClick:l},u.o))}),i.a.createElement(N,null,i.a.createElement(L,{result:n,sortFunc:r,defaultSortKey:a,striped:b},t)),i.a.createElement(k,{modalOpen:c,handleModalClose:d,content:s}))}},MBJH:function(e,t,n){"use strict";var r=n("wx14"),o=n("zLVn"),i=n("TSYQ"),a=n.n(i),c=n("q1tI"),l=n.n(c),d=n("vUet"),s=l.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,c=e.striped,s=e.bordered,m=e.borderless,u=e.hover,p=e.size,g=e.variant,b=e.responsive,f=Object(o.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),h=Object(d.a)(n,"table"),y=a()(i,h,g&&h+"-"+g,p&&h+"-"+p,c&&h+"-striped",s&&h+"-bordered",m&&h+"-borderless",u&&h+"-hover"),w=l.a.createElement("table",Object(r.a)({},f,{className:y,ref:t}));if(b){var E=h+"-responsive";return"string"==typeof b&&(E=E+"-"+b),l.a.createElement("div",{className:E},w)}return w}));t.a=s},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=n("vOnD"),a=n("k2JI"),c=n("JrlI"),l=n("9CnA"),d=n("D7KU"),s=n("ckOl"),m=i.b.div.withConfig({displayName:"SiteAccordionBody__BodyContainer",componentId:"sc-6g2a14-0"})(["width:100%;font-size:.9rem;a{color:",";&:hover{color:",";}}ul{list-style:none;padding:0;margin:0;}> div{margin-top:1rem;}> div:first-child{margin-top:0;}"],(function(e){return e.theme.colors.link}),(function(e){return e.theme.colors.linkHover})),u=i.b.li.withConfig({displayName:"SiteAccordionBody__DescriptionContainer",componentId:"sc-6g2a14-1"})(["margin:1rem 0;&:first-child{margin-top:0;}&:last-child{margin-bottom:0;}"]),p=i.b.div.withConfig({displayName:"SiteAccordionBody__DescriptionHeader",componentId:"sc-6g2a14-2"})(["font-size:large;margin-bottom:.5rem;"]),g=i.b.div.withConfig({displayName:"SiteAccordionBody__DescriptionBody",componentId:"sc-6g2a14-3"})(["margin:0;p{margin:.3rem .5rem;}"]),b=function(){var e=Object(r.useContext)(d.a).pageString;return o.a.createElement(m,null,o.a.createElement("ul",null,e.index.about.content.map((function(e,t){var n;return n="feedback"===e.name?function(){return o.a.createElement("p",null,e.content[0],o.a.createElement("a",{href:"https://peing.net/ja/b5295760aebf4c",target:"_blank",rel:"noreferrer"},e.content[1]),e.content[2])}:"reference"===e.name?function(){return e.content.map((function(e,t){return 3===t?o.a.createElement("p",{key:t},e):o.a.createElement("p",{key:t},o.a.createElement("a",{href:e.link,target:"_blank",rel:"noreferrer"},e.title))}))}:function(){return e.content.map((function(e,t){return o.a.createElement("p",{key:t},e)}))},o.a.createElement(u,{key:t},o.a.createElement(p,null,e.header),o.a.createElement(g,null,o.a.createElement(n,null)))}))))},f=Object(i.b)(l.a).withConfig({displayName:"SiteAccordionBody__MsgAccordion",componentId:"sc-6g2a14-4"})(["&&{border-bottom:1px solid lightgray;> .MuiAccordionSummary-root{padding:0 .5rem;border-bottom:0px solid lightgray;}> .MuiAccordionSummary-root.Mui-expanded{border-bottom:1px solid lightgray;}.MuiAccordionSummary-content{display:flex;align-items:center;margin:.5rem 0;> span{padding:.25rem .4rem;margin-right:.4rem;}}&& .MuiAccordionDetails-root{font-size:small;padding:.4rem .5rem;margin:0;}}"]);function h(e){var t=e.msg,n=e.alwaysOpen,i=Object(r.useState)(!!n),a=i[0],c=i[1],l=t.type,d=t.title,m=t.description,u="New"===l?s.v:"Fix"===l?s.n:s.e;return o.a.createElement(f,{expanded:a,onChange:function(){n||c(!a)},square:!0,title:o.a.createElement(o.a.Fragment,null,o.a.createElement(u,null),d),content:m})}var y=i.b.div.withConfig({displayName:"SiteAccordionBody__MsgBox",componentId:"sc-6g2a14-5"})(["> div:first-child{border-bottom:1px solid lightgray;}> div > div{border-top:none;}"]);function w(){var e=Object(r.useContext)(d.a).pageString;return o.a.createElement(m,null,e.index.updateLog.content.map((function(e,t){return o.a.createElement(y,{key:t},o.a.createElement("div",null,e.version),e.content.map((function(e,t){return o.a.createElement(h,{key:t,msg:e})})))})))}var E=i.b.ul.withConfig({displayName:"SiteAccordionBody__LicenseList",componentId:"sc-6g2a14-6"})(["margin-bottom:-.5rem;"]),C=i.b.div.withConfig({displayName:"SiteAccordionBody__LicenseItemTitle",componentId:"sc-6g2a14-7"})(["font-weight:bold;"]),v=i.b.div.withConfig({displayName:"SiteAccordionBody__LicenseItemContent",componentId:"sc-6g2a14-8"})(["padding-left:.5rem;padding-bottom:.5rem;"]),k=function(){var e=Object(r.useContext)(d.a).pageString;return o.a.createElement(m,null,o.a.createElement(E,null,o.a.createElement("li",{key:"text"},o.a.createElement(C,null,o.a.createElement("span",null,e.index.license.content.title)),o.a.createElement(v,null,o.a.createElement("span",null,e.index.license.content.content))),[{titleLink:"https://github.com/google/material-design-icons",title:"Material icons - Google Design",licenseLink:"https://github.com/google/material-design-icons/blob/master/LICENSE",license:"Apache License 2.0"},{titleLink:"https://github.com/facebook/react",title:"react",licenseLink:"https://github.com/facebook/react/blob/master/LICENSE",license:"MIT License"},{titleLink:"https://github.com/gatsbyjs/gatsby",title:"gatsby",licenseLink:"https://github.com/gatsbyjs/gatsby/blob/master/LICENSE",license:"MIT License"},{titleLink:"https://github.com/react-bootstrap/react-bootstrap",title:"react-bootstrap",licenseLink:"https://github.com/react-bootstrap/react-bootstrap/blob/master/LICENSE",license:"MIT License"},{titleLink:"https://github.com/paulcollett/react-masonry-css",title:"react-masonry-css",licenseLink:"https://github.com/paulcollett/react-masonry-css/blob/master/LICENSE",license:"MIT License"},{titleLink:"https://github.com/dirtyredz/react-scroll-up-button",title:"react-scroll-up-button",licenseLink:"https://github.com/dirtyredz/react-scroll-up-button/blob/master/LICENSE",license:"MIT License"},{titleLink:"https://github.com/mui-org/material-ui",title:"material-ui",licenseLink:"https://github.com/mui-org/material-ui/blob/master/LICENSE",license:"MIT License"},{titleLink:"https://github.com/styled-components/styled-components",title:"styled-components",licenseLink:"https://github.com/styled-components/styled-components/blob/master/LICENSE",license:"MIT License"}].map((function(e,t){return o.a.createElement("li",{key:t},o.a.createElement(C,null,o.a.createElement("a",{href:e.titleLink,target:"_blank",rel:"noreferrer"},e.title)),o.a.createElement(v,null,o.a.createElement("a",{href:e.licenseLink,target:"_blank",rel:"noreferrer"},e.license)))}))))},x=Object(i.b)(c.d).withConfig({displayName:"pages__StyledModalContainer",componentId:"sc-1cl1oet-0"})(["> div:nth-child(3){width:40%;min-width:max-content;left:0;right:0;top:25%;margin:auto;}"]),_=i.b.div.withConfig({displayName:"pages__ModalHeader",componentId:"sc-1cl1oet-1"})(["display:flex;justify-content:space-between;font-size:large;border-bottom:1px solid ",";"],(function(e){return e.theme.colors.border})),I=i.b.div.withConfig({displayName:"pages__ModalBody",componentId:"sc-1cl1oet-2"})(["margin:0;margin-top:.5rem;.MuiAccordion-root,&&& .MuiAccordionSummary-root{border:none;cursor:text;}"]),S=function(e){var t=e.modalOpen,n=e.onClose,i=Object(r.useContext)(d.a).pageString,a=i.index.updateLog.content[0];return o.a.createElement(x,{open:t,onClose:n,"aria-labelledby":"update-modal-title","aria-describedby":"update-modal-description"},o.a.createElement(_,null,o.a.createElement("span",null,i.index.helmet.title+" "+a.version),o.a.createElement("span",{onClick:n},"×")),o.a.createElement(I,null,a.content.map((function(e,t){return o.a.createElement(h,{msg:e,alwaysOpen:!0,key:t})}))))},N=i.b.div.withConfig({displayName:"pages__HomeContainer",componentId:"sc-1cl1oet-3"})(["display:flex;justify-content:center;flex-wrap:wrap;&&& > div{margin-bottom:2rem;}"]),L=i.b.div.withConfig({displayName:"pages__Header",componentId:"sc-1cl1oet-4"})(["width:60%;@media screen and (max-width:992px){width:80%;}@media screen and (max-width:624px){width:90%;}margin-top:2rem;margin-bottom:2rem;font-size:x-large;font-weight:bold;color:",";> span:nth-child(2){margin:.4rem;font-size:large;}"],(function(e){return e.theme.colors.onSurface})),O=Object(i.c)(["0%,67%,80%,96%,100%{transform:scale(1,1) translate(0,0);}72%{transform:scale(1.1,.9) translate(0,5%);}76%,92%{transform:scale(1.2,.8) translate(0,15%);}84%{transform:scale(.9,1.2) translate(0,-100%);}88%{transform:scale(.9,1.2) translate(0,-20%);}"]),M=i.b.span.withConfig({displayName:"pages__NoteIconWrapper",componentId:"sc-1cl1oet-5"})(["position:relative;cursor:pointer;svg{width:1.2rem;height:1.2rem;fill:",";}&:after{position:absolute;content:'';right:-.3rem;top:.1rem;background-color:red;border-radius:100%;animation:"," 1.5s ease-in-out infinite;","}"],(function(e){return e.theme.colors.onSurface}),O,(function(e){return e.$unread?"width: .6rem; height: .6rem;":null})),j=Object(i.b)(l.a).withConfig({displayName:"pages__DescriptionAccordion",componentId:"sc-1cl1oet-6"})(["&&{width:60%;@media screen and (max-width:992px){width:80%;}@media screen and (max-width:624px){width:90%;}border:1px solid ",";border-radius:.25rem;&{box-shadow:0 0 .15em lightgray;}> .MuiAccordionSummary-root{font-size:large;padding:.75rem 1.25rem;border-bottom-right-radius:0;border-bottom-left-radius:0;border-bottom:0px solid ",";}> .MuiAccordionSummary-root.Mui-expanded{border-bottom:1px solid ",";}.MuiAccordionDetails-root{margin:1rem;padding:0;}}"],(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.border}));t.default=function(){var e=Object(r.useContext)(d.a).pageString,t=e.index.updateLog.content[0],n=Object(r.useState)({expanded:0,modalOpen:!1,unread:!0}),i=n[0],c=n[1];Object(r.useEffect)((function(){var e=localStorage.getItem("last-read-version");e&&c((function(n){return Object.assign({},n,{unread:e!==t.version})}))}),[]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.a,{title:e.index.helmet.title,description:e.index.helmet.description}),o.a.createElement(N,null,o.a.createElement(L,null,o.a.createElement("span",null,e.index.helmet.title),o.a.createElement("span",null,t.version),o.a.createElement(M,{onClick:function(){c((function(e){return Object.assign({},e,{modalOpen:!0,unread:!1})})),localStorage.setItem("last-read-version",t.version)},$unread:i.unread},s.w)),[{header:e.index.about.header,body:o.a.createElement(b,null)},{header:e.index.updateLog.header,body:o.a.createElement(w,null)},{header:e.index.license.header,body:o.a.createElement(k,null)}].map((function(e,t){return o.a.createElement(j,{expanded:i.expanded===t,onChange:(n=t,function(e,t){c((function(e){return Object.assign({},e,{expanded:!!t&&n})}))}),square:!1,expandIcon:s.k,title:e.header,content:e.body,key:t});var n}))),o.a.createElement(S,{modalOpen:i.modalOpen,onClose:function(){c((function(e){return Object.assign({},e,{modalOpen:!1})}))}}))}},k2JI:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("qhky"),a=n("D7KU");t.a=function(e){var t=e.title,n=e.description,c=Object(r.useContext)(a.a).userLanguage;return o.a.createElement(i.a,null,o.a.createElement("meta",{name:"title",content:t}),o.a.createElement("meta",{name:"description",content:n}),o.a.createElement("meta",{property:"og:title",content:t}),o.a.createElement("meta",{property:"og:description",content:n}),o.a.createElement("meta",{property:"twitter:title",content:t}),o.a.createElement("meta",{property:"twitter:description",content:n}),o.a.createElement("title",{lang:c},t))}}}]);
//# sourceMappingURL=component---src-pages-index-js-a8ef255de76f4fb40a62.js.map