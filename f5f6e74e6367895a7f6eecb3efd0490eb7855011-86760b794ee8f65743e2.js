(self.webpackChunktkfmtools=self.webpackChunktkfmtools||[]).push([[904],{47378:function(r,t,i){"use strict";var e=i(67294),a=i(35414),s=i(17900);t.Z=function(r){var t=r.title,i=r.description,n=r.path,y=(0,s.f)(),d=y.isDefault,o=y.userLanguage,m="/"===n?"":n.split("/").slice(0,-1).join("_");return e.createElement(a.q,null,e.createElement("meta",{name:"title",content:t}),e.createElement("meta",{name:"description",content:i}),e.createElement("meta",{property:"og:title",content:t}),e.createElement("meta",{property:"og:description",content:i}),e.createElement("meta",{property:"twitter:title",content:t}),e.createElement("meta",{property:"twitter:description",content:i}),e.createElement("meta",{property:"og:url",content:"https://purindaisuki.github.io/tkfmtools"+(d?"":"/"+o)+n}),e.createElement("meta",{property:"og:image",content:"https://purindaisuki.github.io/tkfmtools/website_preview"+m+(d?"":"_"+o)+".png"}),e.createElement("meta",{property:"twitter:url",content:"https://purindaisuki.github.io/tkfmtools"+(d?"":"/"+o)+n}),e.createElement("meta",{property:"twitter:image",content:"https://purindaisuki.github.io/tkfmtools/website_preview"+m+(d?"":"_"+o)+".png"}),e.createElement("title",{lang:o},t))}},25072:function(r,t,i){"use strict";var e=i(67294),a=i(50009),s=i(50208),n=i(28437),y=a.ZP.div.withConfig({displayName:"Header__StyledHeader",componentId:"iju225-0"})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;height:2.2rem;"," color:",";font-size:large;font-weight:normal;"],(function(r){return r.$border?"border-bottom: solid 1px "+r.theme.colors.border+";":""}),(function(r){return r.theme.colors.onSurface})),d=a.ZP.div.withConfig({displayName:"Header__TitleWrapper",componentId:"iju225-1"})(["display:flex;flex-direction:row;align-items:center;> span{display:inline-block;vertical-align:middle;line-height:normal;svg{width:1.2rem;height:1.2rem;margin-right:.4rem;margin-bottom:.2rem;fill:",";}}"],(function(r){return r.theme.colors.onSurface}));t.Z=function(r){var t=r.className,i=r.title,a=r.titleIcon,o=r.withHelp,m=r.onClickHelp,g=r.end,l=r.id,p=r.border;return e.createElement(y,{className:t,$border:p},e.createElement(d,null,e.createElement("span",{id:l},a,i),o&&m&&e.createElement(s.Io,{onClick:m,tooltipText:"Help"},n.by)),g&&e.createElement("div",null,g))}},22776:function(r,t,i){"use strict";i.d(t,{WQ:function(){return P},p2:function(){return u}});var e=i(85061),a=i(67294),s=i(50009),n=i(21407),y=i(90494),d=i(48649),o=i(50033),m=i(25072),g=s.ZP.div.withConfig({displayName:"Modal__ModalContentWrapper",componentId:"o6bkb-0"})(["background-color:",";color:",";position:absolute;width:70%;height:auto;left:0;right:0;top:10%;bottom:auto;margin:auto;@media screen and (max-width:1000px){width:80%;}@media screen and (max-width:768px){width:90%;}padding:1rem;border-radius:.25rem;border:1px solid ",";"],(function(r){return r.theme.colors.surface}),(function(r){return r.theme.colors.onSurface}),(function(r){return r.theme.colors.border})),l=(0,s.ZP)(m.Z).withConfig({displayName:"Modal__ModalHeader",componentId:"o6bkb-1"})(["margin:-1rem;margin-bottom:1rem;padding:.2rem .5rem;background-color:",";span{color:",";}"],(function(r){return r.theme.colors.secondary}),(function(r){return r.theme.colors.onSecondary})),p=s.ZP.span.withConfig({displayName:"Modal__CloseWrapper",componentId:"o6bkb-2"})(["cursor:pointer;font-size:x-large;"]),x=function(r){var t=r.children,i=r.className,e=r.title,s=r.open,o=r.onClose,m=r.keepMounted,x=r.ariaLabelledby,I=r.ariaDescribedby;return a.createElement(d.Z,{className:i,open:s,onClose:o,closeAfterTransition:!0,BackdropComponent:n.Z,BackdropProps:{timeout:500},disableEnforceFocus:!0,keepMounted:m,"aria-labelledby":x,"aria-describedby":I},a.createElement(y.Z,{in:s},a.createElement(g,null,a.createElement(l,{title:e,id:x,end:a.createElement(p,{onClick:o},"×")}),t)))},I=(0,s.ZP)(x).withConfig({displayName:"Modal__StyledScrollableModal",componentId:"o6bkb-3"})(["> div:nth-child(3) > div{max-height:calc(80vh - 2rem);}"]),P=function(r){var t=r.children,i=r.className,e=r.title,s=r.open,n=r.onClose,y=r.keepMounted,d=r.ariaLabelledby,m=r.ariaDescribedby;return a.createElement(I,{className:i,title:e,open:s,onClose:n,keepMounted:y,ariaLabelledby:d,ariaDescribedby:m},a.createElement(o.Z,null,t))},c=s.ZP.div.withConfig({displayName:"Modal__ModalBody",componentId:"o6bkb-4"})(["margin:1rem 0;"]),f=function(r){var t=r.content,i=r.ariaDescribedby;return t.map((function(r,t){return a.createElement(a.Fragment,{key:t},a.createElement(m.Z,{title:r.title,border:!0}),a.createElement(c,null,r.content.map((function(r,t){return a.createElement("p",{key:t,id:i+"_"+t},r)}))))}))},u=function(r){var t=r.title,i=r.content,s=r.open,n=r.onClose,y=r.ariaLabelledby,d=r.ariaDescribedby;return a.createElement(P,{title:t,open:s,onClose:n,ariaLabelledby:y,ariaDescribedby:(0,e.Z)(Array(i.length).keys()).map((function(r){return d+"_"+r})).join(" ")},a.createElement(f,{content:i,ariaDescribedby:d}))};t.ZP=x},50033:function(r,t,i){"use strict";var e=i(50009).ZP.div.withConfig({displayName:"Scrollable",componentId:"sc-1ueymsi-0"})(["overflow:auto;height:100%;scrollbar-width:thin;padding-right:.5rem;margin-right:-.5rem;&::-webkit-scrollbar{width:.4rem;height:.4rem;background:",";}&::-webkit-scrollbar-thumb{background:",";border-radius:.25rem;}&::-webkit-scrollbar-track{background:",";}&::-webkit-scrollbar-corner{background:",";}"],(function(r){return r.theme.colors.surface}),(function(r){return r.theme.colors.border}),(function(r){return r.theme.colors.surface}),(function(r){return r.theme.colors.surface}));t.Z=e},20156:function(r){"use strict";r.exports=JSON.parse('[{"chapter":"0","stages":[{"stage":"1","energy":6,"materials":[{"id":"102","rarity":1}],"trainItems":[],"expPotions":[{"id":"801","rarity":2}]},{"stage":"2","energy":6,"materials":[{"id":"101","rarity":1}],"trainItems":[],"expPotions":[{"id":"801","rarity":2}]},{"stage":"3","energy":6,"materials":[{"id":"105","rarity":1}],"trainItems":[],"expPotions":[{"id":"801","rarity":2}]},{"stage":"4","energy":7,"materials":[{"id":"104","rarity":1}],"trainItems":[],"expPotions":[{"id":"801","rarity":2}]},{"stage":"5","energy":7,"materials":[{"id":"103","rarity":1}],"trainItems":[],"expPotions":[{"id":"801","rarity":2}]},{"stage":"6","energy":7,"materials":[{"id":"102","rarity":1}],"trainItems":[{"id":"601","rarity":0}],"expPotions":[]},{"stage":"6 free","energy":8,"materials":[{"id":"102","rarity":1},{"id":"101","rarity":1}],"trainItems":[],"expPotions":[]},{"stage":"7","energy":8,"materials":[{"id":"101","rarity":1}],"trainItems":[{"id":"605","rarity":0}],"expPotions":[]}]},{"chapter":"1","stages":[{"stage":"2","energy":8,"materials":[{"id":"105","rarity":1}],"trainItems":[{"id":"603","rarity":0}],"expPotions":[{"id":"801","rarity":2}]},{"stage":"3","energy":8,"materials":[{"id":"104","rarity":1}],"trainItems":[{"id":"604","rarity":0}],"expPotions":[{"id":"801","rarity":2}]},{"stage":"4","energy":8,"materials":[{"id":"103","rarity":1}],"trainItems":[{"id":"602","rarity":0}],"expPotions":[{"id":"801","rarity":2}]},{"stage":"5","energy":8,"materials":[{"id":"102","rarity":1}],"trainItems":[{"id":"601","rarity":0}],"expPotions":[{"id":"801","rarity":2}]},{"stage":"5 free","energy":8,"materials":[{"id":"101","rarity":2},{"id":"102","rarity":1}],"trainItems":[],"expPotions":[]},{"stage":"6","energy":9,"materials":[{"id":"101","rarity":1}],"trainItems":[{"id":"605","rarity":0}],"expPotions":[{"id":"801","rarity":2}]},{"stage":"6 free","energy":9,"materials":[{"id":"105","rarity":2},{"id":"103","rarity":1}],"trainItems":[],"expPotions":[]},{"stage":"7","energy":9,"materials":[{"id":"105","rarity":1},{"id":"102","rarity":0}],"trainItems":[],"expPotions":[{"id":"801","rarity":2}]},{"stage":"7 free","energy":9,"materials":[{"id":"104","rarity":2},{"id":"103","rarity":1}],"trainItems":[],"expPotions":[{"id":"801","rarity":2}]},{"stage":"8","energy":10,"materials":[{"id":"104","rarity":1},{"id":"101","rarity":0}],"trainItems":[],"expPotions":[{"id":"801","rarity":2}]}]},{"chapter":"2","stages":[{"stage":"2","energy":10,"materials":[{"id":"201","rarity":0},{"id":"101","rarity":1}],"trainItems":[],"expPotions":[]},{"stage":"3","energy":10,"materials":[{"id":"202","rarity":0},{"id":"102","rarity":1}],"trainItems":[],"expPotions":[]},{"stage":"4","energy":11,"materials":[{"id":"203","rarity":0},{"id":"103","rarity":1}],"trainItems":[],"expPotions":[]},{"stage":"5","energy":11,"materials":[{"id":"204","rarity":0},{"id":"104","rarity":1}],"trainItems":[],"expPotions":[]},{"stage":"5 free","energy":10,"materials":[{"id":"201","rarity":0},{"id":"101","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"6","energy":11,"materials":[{"id":"205","rarity":0},{"id":"105","rarity":1}],"trainItems":[],"expPotions":[]},{"stage":"7","energy":12,"materials":[],"trainItems":[{"id":"604","rarity":1},{"id":"601","rarity":1}],"expPotions":[{"id":"801","rarity":2}]},{"stage":"7 free","energy":10,"materials":[{"id":"202","rarity":0},{"id":"102","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"8","energy":12,"materials":[],"trainItems":[{"id":"602","rarity":1},{"id":"605","rarity":1}],"expPotions":[{"id":"801","rarity":2}]},{"stage":"8 free","energy":11,"materials":[{"id":"203","rarity":0},{"id":"103","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"9","energy":12,"materials":[],"trainItems":[{"id":"601","rarity":1},{"id":"603","rarity":1}],"expPotions":[{"id":"801","rarity":2}]}]},{"chapter":"3","stages":[{"stage":"2","energy":12,"materials":[{"id":"101","rarity":2}],"trainItems":[],"expPotions":[{"id":"802","rarity":2}]},{"stage":"2 free","energy":12,"materials":[{"id":"204","rarity":0},{"id":"104","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"3","energy":12,"materials":[{"id":"102","rarity":2}],"trainItems":[],"expPotions":[{"id":"802","rarity":2}]},{"stage":"4","energy":12,"materials":[{"id":"103","rarity":2}],"trainItems":[],"expPotions":[{"id":"802","rarity":2}]},{"stage":"5","energy":12,"materials":[{"id":"104","rarity":2}],"trainItems":[],"expPotions":[{"id":"802","rarity":2}]},{"stage":"6","energy":12,"materials":[{"id":"105","rarity":2}],"trainItems":[],"expPotions":[{"id":"802","rarity":2}]},{"stage":"6 free","energy":12,"materials":[{"id":"205","rarity":0},{"id":"105","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"7","energy":13,"materials":[{"id":"204","rarity":0}],"trainItems":[{"id":"601","rarity":1}],"expPotions":[{"id":"802","rarity":2}]},{"stage":"7 free","energy":12,"materials":[],"trainItems":[{"id":"702","rarity":1},{"id":"601","rarity":1}],"expPotions":[]},{"stage":"8","energy":13,"materials":[{"id":"203","rarity":0}],"trainItems":[{"id":"605","rarity":1}],"expPotions":[{"id":"802","rarity":2}]},{"stage":"8 free","energy":12,"materials":[],"trainItems":[{"id":"704","rarity":1},{"id":"605","rarity":1}],"expPotions":[]},{"stage":"9","energy":13,"materials":[{"id":"202","rarity":0}],"trainItems":[{"id":"603","rarity":1}],"expPotions":[{"id":"802","rarity":2}]},{"stage":"10","energy":13,"materials":[{"id":"205","rarity":0}],"trainItems":[{"id":"604","rarity":1}],"expPotions":[{"id":"802","rarity":2}]}]},{"chapter":"4","stages":[{"stage":"2","energy":14,"materials":[{"id":"101","rarity":1},{"id":"102","rarity":1}],"trainItems":[],"expPotions":[]},{"stage":"3","energy":14,"materials":[{"id":"102","rarity":1},{"id":"103","rarity":1}],"trainItems":[],"expPotions":[]},{"stage":"3 free-1","energy":14,"materials":[{"id":"201","rarity":0},{"id":"101","rarity":2}],"trainItems":[],"expPotions":[{"id":"802","rarity":1}]},{"stage":"3 free-2","energy":14,"materials":[{"id":"202","rarity":0},{"id":"102","rarity":2}],"trainItems":[],"expPotions":[{"id":"802","rarity":1}]},{"stage":"4","energy":14,"materials":[{"id":"103","rarity":1},{"id":"104","rarity":1}],"trainItems":[],"expPotions":[]},{"stage":"5","energy":14,"materials":[{"id":"104","rarity":1},{"id":"105","rarity":1}],"trainItems":[],"expPotions":[]},{"stage":"5 free","energy":14,"materials":[{"id":"203","rarity":0},{"id":"103","rarity":2}],"trainItems":[],"expPotions":[{"id":"802","rarity":1}]},{"stage":"6","energy":14,"materials":[{"id":"105","rarity":1},{"id":"101","rarity":1}],"trainItems":[],"expPotions":[]},{"stage":"7","energy":14,"materials":[{"id":"201","rarity":0}],"trainItems":[{"id":"601","rarity":1}],"expPotions":[]},{"stage":"7 free","energy":14,"materials":[{"id":"204","rarity":0},{"id":"104","rarity":2}],"trainItems":[],"expPotions":[{"id":"802","rarity":1}]},{"stage":"8","energy":14,"materials":[{"id":"202","rarity":0}],"trainItems":[{"id":"605","rarity":1}],"expPotions":[{"id":"802","rarity":1}]},{"stage":"9","energy":14,"materials":[{"id":"203","rarity":0}],"trainItems":[{"id":"603","rarity":1}],"expPotions":[{"id":"802","rarity":1}]},{"stage":"9 free","energy":14,"materials":[{"id":"205","rarity":0},{"id":"105","rarity":2}],"trainItems":[],"expPotions":[{"id":"802","rarity":1}]},{"stage":"10","energy":14,"materials":[{"id":"204","rarity":0}],"trainItems":[{"id":"604","rarity":1}],"expPotions":[{"id":"802","rarity":1}]},{"stage":"11","energy":14,"materials":[{"id":"205","rarity":0}],"trainItems":[{"id":"602","rarity":1}],"expPotions":[{"id":"802","rarity":1}]},{"stage":"12","energy":14,"materials":[],"trainItems":[{"id":"701","rarity":1},{"id":"704","rarity":1}],"expPotions":[]},{"stage":"13","energy":14,"materials":[],"trainItems":[{"id":"705","rarity":1},{"id":"703","rarity":1}],"expPotions":[]}]},{"chapter":"5","stages":[{"stage":"2","energy":14,"materials":[{"id":"201","rarity":0},{"id":"101","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"3","energy":14,"materials":[{"id":"202","rarity":0},{"id":"102","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"4","energy":14,"materials":[{"id":"204","rarity":0},{"id":"104","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"4 free","energy":14,"materials":[{"id":"201","rarity":0},{"id":"104","rarity":1}],"trainItems":[{"id":"705","rarity":1}],"expPotions":[]},{"stage":"5","energy":14,"materials":[{"id":"205","rarity":0},{"id":"105","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"6","energy":14,"materials":[{"id":"203","rarity":0},{"id":"103","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"6 free","energy":14,"materials":[{"id":"202","rarity":0},{"id":"105","rarity":1}],"trainItems":[{"id":"704","rarity":1}],"expPotions":[]},{"stage":"7","energy":14,"materials":[{"id":"103","rarity":2}],"trainItems":[{"id":"701","rarity":1}],"expPotions":[]},{"stage":"8","energy":14,"materials":[{"id":"105","rarity":2}],"trainItems":[{"id":"702","rarity":1}],"expPotions":[]},{"stage":"9","energy":14,"materials":[{"id":"104","rarity":2}],"trainItems":[{"id":"704","rarity":1}],"expPotions":[]},{"stage":"9 free","energy":14,"materials":[{"id":"401","rarity":0},{"id":"201","rarity":0},{"id":"101","rarity":1}],"trainItems":[],"expPotions":[]},{"stage":"10","energy":14,"materials":[{"id":"102","rarity":2}],"trainItems":[{"id":"703","rarity":1}],"expPotions":[]},{"stage":"11","energy":14,"materials":[{"id":"101","rarity":2}],"trainItems":[{"id":"701","rarity":1}],"expPotions":[]},{"stage":"12","energy":14,"materials":[{"id":"401","rarity":0},{"id":"202","rarity":0},{"id":"101","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"13","energy":14,"materials":[{"id":"402","rarity":0},{"id":"203","rarity":0},{"id":"102","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"14","energy":14,"materials":[{"id":"403","rarity":0},{"id":"204","rarity":0},{"id":"104","rarity":2}],"trainItems":[],"expPotions":[]}]},{"chapter":"6","stages":[{"stage":"2","energy":15,"materials":[{"id":"201","rarity":0},{"id":"101","rarity":2}],"trainItems":[{"id":"601","rarity":1}],"expPotions":[]},{"stage":"3","energy":15,"materials":[{"id":"202","rarity":0},{"id":"102","rarity":2}],"trainItems":[{"id":"605","rarity":1}],"expPotions":[]},{"stage":"3 free","energy":16,"materials":[{"id":"302","rarity":0},{"id":"202","rarity":0},{"id":"102","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"4","energy":15,"materials":[{"id":"203","rarity":0},{"id":"104","rarity":2}],"trainItems":[{"id":"603","rarity":1}],"expPotions":[]},{"stage":"5","energy":15,"materials":[{"id":"204","rarity":0},{"id":"105","rarity":2}],"trainItems":[{"id":"604","rarity":1}],"expPotions":[]},{"stage":"6","energy":15,"materials":[{"id":"205","rarity":0},{"id":"103","rarity":2}],"trainItems":[{"id":"602","rarity":1}],"expPotions":[]},{"stage":"6 free","energy":16,"materials":[{"id":"301","rarity":0},{"id":"201","rarity":0},{"id":"101","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"7","energy":15,"materials":[{"id":"101","rarity":2}],"trainItems":[{"id":"702","rarity":1},{"id":"601","rarity":1}],"expPotions":[]},{"stage":"8","energy":15,"materials":[{"id":"102","rarity":2}],"trainItems":[{"id":"704","rarity":1},{"id":"605","rarity":1}],"expPotions":[]},{"stage":"8 free","energy":16,"materials":[{"id":"305","rarity":0},{"id":"205","rarity":0},{"id":"105","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"9","energy":15,"materials":[{"id":"104","rarity":2}],"trainItems":[{"id":"703","rarity":1},{"id":"603","rarity":1}],"expPotions":[]},{"stage":"10","energy":15,"materials":[{"id":"105","rarity":2}],"trainItems":[{"id":"701","rarity":1},{"id":"604","rarity":1}],"expPotions":[]},{"stage":"11","energy":15,"materials":[{"id":"103","rarity":2}],"trainItems":[{"id":"705","rarity":1},{"id":"602","rarity":1}],"expPotions":[]},{"stage":"12","energy":15,"materials":[{"id":"302","rarity":0},{"id":"202","rarity":0}],"trainItems":[],"expPotions":[{"id":"802","rarity":2}]},{"stage":"13","energy":15,"materials":[{"id":"301","rarity":0},{"id":"201","rarity":0}],"trainItems":[],"expPotions":[{"id":"802","rarity":2}]},{"stage":"14","energy":15,"materials":[{"id":"303","rarity":0},{"id":"203","rarity":0}],"trainItems":[],"expPotions":[{"id":"802","rarity":2}]},{"stage":"15","energy":15,"materials":[{"id":"304","rarity":0},{"id":"204","rarity":0}],"trainItems":[],"expPotions":[{"id":"802","rarity":2}]}]},{"chapter":"7","stages":[{"stage":"2","energy":15,"materials":[{"id":"401","rarity":0},{"id":"101","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"3","energy":15,"materials":[{"id":"402","rarity":0},{"id":"102","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"3 free-1","energy":15,"materials":[{"id":"303","rarity":0},{"id":"205","rarity":0},{"id":"105","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"3 free-2","energy":15,"materials":[{"id":"403","rarity":0},{"id":"204","rarity":0},{"id":"104","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"3 free-3","energy":16,"materials":[{"id":"410","rarity":0},{"id":"203","rarity":0},{"id":"103","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"4","energy":15,"materials":[{"id":"403","rarity":0},{"id":"103","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"5","energy":15,"materials":[{"id":"404","rarity":0},{"id":"104","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"6","energy":16,"materials":[{"id":"405","rarity":0},{"id":"105","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"7","energy":16,"materials":[{"id":"406","rarity":0},{"id":"101","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"8","energy":16,"materials":[{"id":"407","rarity":0},{"id":"102","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"9","energy":16,"materials":[{"id":"408","rarity":0},{"id":"103","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"9 free","energy":16,"materials":[{"id":"405","rarity":0},{"id":"201","rarity":0},{"id":"101","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"10","energy":16,"materials":[{"id":"409","rarity":0},{"id":"104","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"11","energy":16,"materials":[{"id":"410","rarity":0},{"id":"105","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"11 free","energy":16,"materials":[{"id":"402","rarity":0},{"id":"202","rarity":0},{"id":"102","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"12","energy":16,"materials":[{"id":"301","rarity":0},{"id":"103","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"13","energy":16,"materials":[{"id":"402","rarity":0}],"trainItems":[{"id":"601","rarity":2}],"expPotions":[]},{"stage":"14","energy":16,"materials":[{"id":"203","rarity":0},{"id":"101","rarity":1}],"trainItems":[{"id":"701","rarity":1}],"expPotions":[]},{"stage":"15","energy":16,"materials":[{"id":"204","rarity":0},{"id":"102","rarity":1}],"trainItems":[{"id":"705","rarity":1}],"expPotions":[]}]},{"chapter":"8","stages":[{"stage":"2","energy":17,"materials":[{"id":"201","rarity":1},{"id":"101","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"2 free","energy":18,"materials":[{"id":"407","rarity":0},{"id":"201","rarity":1},{"id":"103","rarity":3}],"trainItems":[],"expPotions":[]},{"stage":"3","energy":17,"materials":[{"id":"202","rarity":1},{"id":"102","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"4","energy":17,"materials":[{"id":"203","rarity":1},{"id":"103","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"5","energy":17,"materials":[{"id":"204","rarity":1},{"id":"104","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"6","energy":17,"materials":[{"id":"205","rarity":1},{"id":"105","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"7","energy":17,"materials":[{"id":"401","rarity":0}],"trainItems":[{"id":"601","rarity":2}],"expPotions":[]},{"stage":"8","energy":17,"materials":[{"id":"402","rarity":0}],"trainItems":[{"id":"605","rarity":2}],"expPotions":[]},{"stage":"8 free","energy":18,"materials":[{"id":"408","rarity":0},{"id":"202","rarity":1},{"id":"104","rarity":3}],"trainItems":[],"expPotions":[]},{"stage":"9","energy":17,"materials":[{"id":"403","rarity":0}],"trainItems":[{"id":"603","rarity":2}],"expPotions":[]},{"stage":"10","energy":17,"materials":[{"id":"404","rarity":0}],"trainItems":[{"id":"604","rarity":2}],"expPotions":[]},{"stage":"11","energy":17,"materials":[{"id":"405","rarity":0}],"trainItems":[{"id":"602","rarity":2}],"expPotions":[]},{"stage":"11 free","energy":18,"materials":[{"id":"409","rarity":0},{"id":"203","rarity":1},{"id":"102","rarity":3}],"trainItems":[],"expPotions":[]},{"stage":"12","energy":17,"materials":[{"id":"301","rarity":0}],"trainItems":[{"id":"702","rarity":1},{"id":"601","rarity":2}],"expPotions":[]},{"stage":"13","energy":17,"materials":[{"id":"302","rarity":0}],"trainItems":[{"id":"704","rarity":1},{"id":"605","rarity":2}],"expPotions":[]},{"stage":"14","energy":17,"materials":[{"id":"303","rarity":0}],"trainItems":[{"id":"703","rarity":1},{"id":"603","rarity":2}],"expPotions":[]},{"stage":"15","energy":17,"materials":[{"id":"304","rarity":0}],"trainItems":[{"id":"701","rarity":1},{"id":"604","rarity":2}],"expPotions":[]},{"stage":"16","energy":18,"materials":[{"id":"305","rarity":0}],"trainItems":[{"id":"705","rarity":1},{"id":"602","rarity":2}],"expPotions":[]},{"stage":"17","energy":18,"materials":[{"id":"404","rarity":0},{"id":"101","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"17 free","energy":18,"materials":[{"id":"410","rarity":0},{"id":"204","rarity":1},{"id":"101","rarity":3}],"trainItems":[],"expPotions":[]},{"stage":"18","energy":18,"materials":[{"id":"408","rarity":0},{"id":"104","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"19","energy":18,"materials":[{"id":"406","rarity":0},{"id":"105","rarity":2}],"trainItems":[],"expPotions":[]}]},{"chapter":"9","stages":[{"stage":"2","energy":18,"materials":[{"id":"301","rarity":0},{"id":"101","rarity":2}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"3","energy":18,"materials":[{"id":"302","rarity":0},{"id":"102","rarity":2}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"4","energy":18,"materials":[{"id":"303","rarity":0},{"id":"103","rarity":2}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"4 free","energy":18,"materials":[{"id":"404","rarity":0},{"id":"101","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"5","energy":18,"materials":[{"id":"304","rarity":0},{"id":"104","rarity":2}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"6","energy":18,"materials":[{"id":"305","rarity":0},{"id":"105","rarity":2}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"7","energy":18,"materials":[],"trainItems":[{"id":"702","rarity":1},{"id":"601","rarity":2}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"8","energy":18,"materials":[],"trainItems":[{"id":"704","rarity":1},{"id":"605","rarity":2}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"8 free","energy":18,"materials":[{"id":"407","rarity":0},{"id":"102","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"9","energy":18,"materials":[],"trainItems":[{"id":"703","rarity":1},{"id":"603","rarity":2}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"10","energy":18,"materials":[],"trainItems":[{"id":"701","rarity":1},{"id":"604","rarity":2}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"11","energy":18,"materials":[],"trainItems":[{"id":"705","rarity":1},{"id":"602","rarity":2}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"12","energy":18,"materials":[{"id":"201","rarity":1},{"id":"101","rarity":2}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"12 free","energy":18,"materials":[{"id":"406","rarity":0},{"id":"105","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"13","energy":18,"materials":[{"id":"202","rarity":1},{"id":"102","rarity":2}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"14","energy":18,"materials":[{"id":"203","rarity":1},{"id":"103","rarity":2}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"15","energy":18,"materials":[{"id":"204","rarity":1},{"id":"104","rarity":2}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"16","energy":18,"materials":[{"id":"205","rarity":1},{"id":"105","rarity":2}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"17","energy":18,"materials":[{"id":"409","rarity":0}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]}]},{"chapter":"10","stages":[{"stage":"2","energy":19,"materials":[{"id":"101","rarity":3}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"3","energy":19,"materials":[{"id":"102","rarity":3}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"4","energy":19,"materials":[{"id":"103","rarity":3}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"5","energy":19,"materials":[{"id":"104","rarity":3}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"6","energy":19,"materials":[{"id":"105","rarity":3}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"7","energy":19,"materials":[{"id":"201","rarity":1}],"trainItems":[{"id":"702","rarity":1}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"8","energy":19,"materials":[{"id":"202","rarity":1}],"trainItems":[{"id":"704","rarity":1}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"9","energy":19,"materials":[{"id":"203","rarity":1}],"trainItems":[{"id":"703","rarity":1}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"9 free","energy":19,"materials":[{"id":"401","rarity":0},{"id":"104","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"10","energy":19,"materials":[{"id":"204","rarity":1}],"trainItems":[{"id":"701","rarity":1}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"11","energy":19,"materials":[{"id":"205","rarity":1}],"trainItems":[{"id":"705","rarity":1}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"12","energy":20,"materials":[{"id":"301","rarity":0}],"trainItems":[{"id":"601","rarity":2}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"12 free","energy":20,"materials":[{"id":"403","rarity":0},{"id":"102","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"13","energy":20,"materials":[{"id":"302","rarity":0}],"trainItems":[{"id":"605","rarity":2}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"14","energy":20,"materials":[{"id":"303","rarity":0}],"trainItems":[{"id":"603","rarity":2}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"15","energy":20,"materials":[{"id":"304","rarity":0}],"trainItems":[{"id":"604","rarity":2}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"16","energy":20,"materials":[{"id":"305","rarity":0}],"trainItems":[{"id":"602","rarity":2}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"16 free","energy":20,"materials":[{"id":"405","rarity":0},{"id":"103","rarity":2}],"trainItems":[],"expPotions":[]},{"stage":"17","energy":20,"materials":[{"id":"402","rarity":0}],"trainItems":[{"id":"703","rarity":1}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"18","energy":20,"materials":[{"id":"408","rarity":0}],"trainItems":[{"id":"701","rarity":1}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"19","energy":20,"materials":[{"id":"410","rarity":0}],"trainItems":[{"id":"705","rarity":1}],"expPotions":[{"id":"803","rarity":2}]}]},{"chapter":"11","stages":[{"stage":"2","energy":20,"materials":[{"id":"101","rarity":2}],"trainItems":[{"id":"601","rarity":2}],"expPotions":[]},{"stage":"3","energy":20,"materials":[{"id":"102","rarity":2}],"trainItems":[{"id":"605","rarity":2}],"expPotions":[]},{"stage":"3 free","energy":20,"materials":[{"id":"404","rarity":0},{"id":"201","rarity":1},{"id":"103","rarity":3}],"trainItems":[],"expPotions":[]},{"stage":"4","energy":20,"materials":[{"id":"103","rarity":2}],"trainItems":[{"id":"603","rarity":2}],"expPotions":[]},{"stage":"5","energy":20,"materials":[{"id":"104","rarity":2}],"trainItems":[{"id":"604","rarity":2}],"expPotions":[]},{"stage":"6","energy":20,"materials":[{"id":"105","rarity":2}],"trainItems":[{"id":"602","rarity":2}],"expPotions":[]},{"stage":"7","energy":20,"materials":[{"id":"301","rarity":0},{"id":"201","rarity":1}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"7 free","energy":20,"materials":[{"id":"406","rarity":0},{"id":"202","rarity":1},{"id":"104","rarity":3}],"trainItems":[],"expPotions":[]},{"stage":"8","energy":20,"materials":[{"id":"302","rarity":0},{"id":"202","rarity":1}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"9","energy":20,"materials":[{"id":"303","rarity":0},{"id":"203","rarity":1}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"10","energy":20,"materials":[{"id":"304","rarity":0},{"id":"204","rarity":1}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"11","energy":20,"materials":[{"id":"305","rarity":0},{"id":"205","rarity":1}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"12","energy":20,"materials":[],"trainItems":[{"id":"702","rarity":1},{"id":"601","rarity":2}],"expPotions":[]},{"stage":"12 free","energy":20,"materials":[{"id":"407","rarity":0},{"id":"203","rarity":1},{"id":"102","rarity":3}],"trainItems":[],"expPotions":[]},{"stage":"13","energy":20,"materials":[],"trainItems":[{"id":"704","rarity":1},{"id":"605","rarity":2}],"expPotions":[]},{"stage":"14","energy":20,"materials":[],"trainItems":[{"id":"703","rarity":1},{"id":"603","rarity":2}],"expPotions":[]},{"stage":"14 free","energy":20,"materials":[{"id":"409","rarity":0},{"id":"204","rarity":1},{"id":"101","rarity":3}],"trainItems":[],"expPotions":[]},{"stage":"15","energy":20,"materials":[],"trainItems":[{"id":"701","rarity":1},{"id":"604","rarity":2}],"expPotions":[]},{"stage":"16","energy":20,"materials":[],"trainItems":[{"id":"705","rarity":1},{"id":"602","rarity":2}],"expPotions":[]},{"stage":"17","energy":20,"materials":[{"id":"401","rarity":0},{"id":"101","rarity":1}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"18","energy":20,"materials":[{"id":"403","rarity":0},{"id":"102","rarity":1}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"19","energy":20,"materials":[{"id":"405","rarity":0},{"id":"103","rarity":1}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]}]},{"chapter":"12","stages":[{"stage":"2","energy":20,"materials":[{"id":"201","rarity":1},{"id":"101","rarity":2}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"3","energy":20,"materials":[{"id":"202","rarity":1},{"id":"102","rarity":2}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"4","energy":20,"materials":[{"id":"203","rarity":1},{"id":"103","rarity":2}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"4 free","energy":20,"materials":[{"id":"301","rarity":0},{"id":"101","rarity":2}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"5","energy":20,"materials":[{"id":"204","rarity":1},{"id":"104","rarity":2}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"6","energy":20,"materials":[{"id":"205","rarity":1},{"id":"105","rarity":2}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"7","energy":20,"materials":[],"trainItems":[{"id":"702","rarity":1},{"id":"601","rarity":2}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"7 free","energy":20,"materials":[{"id":"302","rarity":0},{"id":"102","rarity":2}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"8","energy":20,"materials":[],"trainItems":[{"id":"704","rarity":1},{"id":"605","rarity":2}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"9","energy":20,"materials":[],"trainItems":[{"id":"703","rarity":1},{"id":"603","rarity":2}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"10","energy":20,"materials":[],"trainItems":[{"id":"701","rarity":1},{"id":"604","rarity":2}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"10 free","energy":20,"materials":[{"id":"303","rarity":0},{"id":"103","rarity":2}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"11","energy":20,"materials":[],"trainItems":[{"id":"705","rarity":1},{"id":"602","rarity":2}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"12","energy":20,"materials":[{"id":"404","rarity":0},{"id":"101","rarity":2}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"13","energy":20,"materials":[{"id":"408","rarity":0},{"id":"102","rarity":2}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"13 free","energy":20,"materials":[{"id":"304","rarity":0},{"id":"104","rarity":2}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"14","energy":20,"materials":[{"id":"406","rarity":0},{"id":"103","rarity":2}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"15","energy":20,"materials":[{"id":"402","rarity":0},{"id":"104","rarity":2}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"15 free","energy":20,"materials":[{"id":"305","rarity":0},{"id":"105","rarity":2}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"16","energy":20,"materials":[{"id":"403","rarity":0},{"id":"105","rarity":2}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"17","energy":20,"materials":[{"id":"405","rarity":0}],"trainItems":[{"id":"601","rarity":2}],"expPotions":[{"id":"803","rarity":2}]}]},{"chapter":"13","stages":[{"stage":"2","energy":20,"materials":[{"id":"101","rarity":2}],"trainItems":[{"id":"702","rarity":1}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"3","energy":20,"materials":[{"id":"102","rarity":2}],"trainItems":[{"id":"704","rarity":1}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"4","energy":20,"materials":[{"id":"103","rarity":2}],"trainItems":[{"id":"703","rarity":1}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"5","energy":20,"materials":[{"id":"104","rarity":2}],"trainItems":[{"id":"701","rarity":1}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"6","energy":20,"materials":[{"id":"105","rarity":2}],"trainItems":[{"id":"705","rarity":1}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"7","energy":20,"materials":[{"id":"201","rarity":1}],"trainItems":[{"id":"601","rarity":2}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"7 free","energy":20,"materials":[{"id":"401","rarity":0},{"id":"201","rarity":1},{"id":"103","rarity":3}],"trainItems":[],"expPotions":[]},{"stage":"8","energy":20,"materials":[{"id":"202","rarity":1}],"trainItems":[{"id":"605","rarity":2}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"9","energy":20,"materials":[{"id":"203","rarity":1}],"trainItems":[{"id":"603","rarity":2}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"10","energy":20,"materials":[{"id":"204","rarity":1}],"trainItems":[{"id":"604","rarity":2}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"11","energy":20,"materials":[{"id":"205","rarity":1}],"trainItems":[{"id":"602","rarity":2}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"12","energy":20,"materials":[{"id":"101","rarity":2}],"trainItems":[{"id":"702","rarity":1}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"13","energy":20,"materials":[{"id":"102","rarity":2}],"trainItems":[{"id":"704","rarity":1}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"13 free","energy":20,"materials":[{"id":"402","rarity":0},{"id":"202","rarity":1},{"id":"104","rarity":3}],"trainItems":[],"expPotions":[]},{"stage":"14","energy":20,"materials":[{"id":"103","rarity":2}],"trainItems":[{"id":"703","rarity":1}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"15","energy":20,"materials":[{"id":"104","rarity":2}],"trainItems":[{"id":"701","rarity":1}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"16","energy":20,"materials":[{"id":"105","rarity":2}],"trainItems":[{"id":"705","rarity":1}],"expPotions":[{"id":"803","rarity":2}]},{"stage":"17","energy":20,"materials":[{"id":"407","rarity":0},{"id":"201","rarity":1}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"17 free","energy":20,"materials":[{"id":"403","rarity":0},{"id":"203","rarity":1},{"id":"102","rarity":3}],"trainItems":[],"expPotions":[]},{"stage":"18","energy":20,"materials":[{"id":"409","rarity":0},{"id":"202","rarity":1}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]},{"stage":"19","energy":20,"materials":[{"id":"410","rarity":0},{"id":"203","rarity":1}],"trainItems":[],"expPotions":[{"id":"803","rarity":2}]}]}]')}}]);
//# sourceMappingURL=f5f6e74e6367895a7f6eecb3efd0490eb7855011-86760b794ee8f65743e2.js.map