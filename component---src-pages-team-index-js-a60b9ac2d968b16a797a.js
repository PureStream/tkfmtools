(self.webpackChunktkfmtools=self.webpackChunktkfmtools||[]).push([[164],{49044:function(e,n,t){"use strict";var o=t(22122),r=t(28481),a=t(81253),i=t(67294),c=t(85505),l=t(12933),s=t(68725),u=t(34621),d=t(23729),m=i.forwardRef((function(e,n){var t=e.autoFocus,u=e.checked,m=e.checkedIcon,p=e.classes,f=e.className,h=e.defaultChecked,g=e.disabled,v=e.icon,E=e.id,Z=e.inputProps,b=e.inputRef,k=e.name,y=e.onBlur,w=e.onChange,C=e.onFocus,x=e.readOnly,S=e.required,I=e.tabIndex,P=e.type,T=e.value,N=(0,a.Z)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),_=(0,l.Z)({controlled:u,default:Boolean(h),name:"SwitchBase",state:"checked"}),L=(0,r.Z)(_,2),O=L[0],z=L[1],B=(0,s.Z)(),M=g;B&&void 0===M&&(M=B.disabled);var R="checkbox"===P||"radio"===P;return i.createElement(d.Z,(0,o.Z)({component:"span",className:(0,c.Z)(p.root,f,O&&p.checked,M&&p.disabled),disabled:M,tabIndex:null,role:void 0,onFocus:function(e){C&&C(e),B&&B.onFocus&&B.onFocus(e)},onBlur:function(e){y&&y(e),B&&B.onBlur&&B.onBlur(e)},ref:n},N),i.createElement("input",(0,o.Z)({autoFocus:t,checked:u,defaultChecked:h,className:p.input,disabled:M,id:R&&E,name:k,onChange:function(e){var n=e.target.checked;z(n),w&&w(e,n)},readOnly:x,ref:b,required:S,tabIndex:I,type:P,value:T},Z)),O?m:v)}));n.Z=(0,u.Z)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(m)},44988:function(e,n,t){"use strict";t.d(n,{Z:function(){return P}});var o=t(67294),r=t(50009),a=t(81253),i=t(96156),c=t(22122),l=t(85505),s=t(34621),u=t(381),d=t(73935),m=t(70703),p=t(11291),f=t(57544);function h(e){return e.substring(2).toLowerCase()}var g=function(e){var n=e.children,t=e.disableReactTree,r=void 0!==t&&t,a=e.mouseEvent,i=void 0===a?"onClick":a,c=e.onClickAway,l=e.touchEvent,s=void 0===l?"onTouchEnd":l,u=o.useRef(!1),g=o.useRef(null),v=o.useRef(!1),E=o.useRef(!1);o.useEffect((function(){return setTimeout((function(){v.current=!0}),0),function(){v.current=!1}}),[]);var Z=o.useCallback((function(e){g.current=d.findDOMNode(e)}),[]),b=(0,p.Z)(n.ref,Z),k=(0,f.Z)((function(e){var n=E.current;if(E.current=!1,v.current&&g.current&&!function(e){return document.documentElement.clientWidth<e.clientX||document.documentElement.clientHeight<e.clientY}(e))if(u.current)u.current=!1;else{var t;if(e.composedPath)t=e.composedPath().indexOf(g.current)>-1;else t=!(0,m.Z)(g.current).documentElement.contains(e.target)||g.current.contains(e.target);t||!r&&n||c(e)}})),y=function(e){return function(t){E.current=!0;var o=n.props[e];o&&o(t)}},w={ref:b};return!1!==s&&(w[s]=y(s)),o.useEffect((function(){if(!1!==s){var e=h(s),n=(0,m.Z)(g.current),t=function(){u.current=!0};return n.addEventListener(e,k),n.addEventListener("touchmove",t),function(){n.removeEventListener(e,k),n.removeEventListener("touchmove",t)}}}),[k,s]),!1!==i&&(w[i]=y(i)),o.useEffect((function(){if(!1!==i){var e=h(i),n=(0,m.Z)(g.current);return n.addEventListener(e,k),function(){n.removeEventListener(e,k)}}}),[k,i]),o.createElement(o.Fragment,null,o.cloneElement(n,w))},v=t(81664),E=t(88231),Z=t(43337),b=t(58063),k=t(37595),y=o.forwardRef((function(e,n){var t=e.action,r=e.classes,i=e.className,s=e.message,u=e.role,d=void 0===u?"alert":u,m=(0,a.Z)(e,["action","classes","className","message","role"]);return o.createElement(b.Z,(0,c.Z)({role:d,square:!0,elevation:6,className:(0,l.Z)(r.root,i),ref:n},m),o.createElement("div",{className:r.message},s),t?o.createElement("div",{className:r.action},t):null)})),w=(0,s.Z)((function(e){var n="light"===e.palette.type?.8:.98,t=(0,k._4)(e.palette.background.default,n);return{root:(0,c.Z)({},e.typography.body2,(0,i.Z)({color:e.palette.getContrastText(t),backgroundColor:t,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288})),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(y),C=o.forwardRef((function(e,n){var t=e.action,r=e.anchorOrigin,i=(r=void 0===r?{vertical:"bottom",horizontal:"center"}:r).vertical,s=r.horizontal,d=e.autoHideDuration,m=void 0===d?null:d,p=e.children,h=e.classes,b=e.className,k=e.ClickAwayListenerProps,y=e.ContentProps,C=e.disableWindowBlurListener,x=void 0!==C&&C,S=e.message,I=e.onClose,P=e.onEnter,T=e.onEntered,N=e.onEntering,_=e.onExit,L=e.onExited,O=e.onExiting,z=e.onMouseEnter,B=e.onMouseLeave,M=e.open,R=e.resumeHideDuration,D=e.TransitionComponent,H=void 0===D?Z.Z:D,F=e.transitionDuration,$=void 0===F?{enter:u.x9.enteringScreen,exit:u.x9.leavingScreen}:F,j=e.TransitionProps,q=(0,a.Z)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),A=o.useRef(),W=o.useState(!0),V=W[0],Y=W[1],G=(0,f.Z)((function(){I&&I.apply(void 0,arguments)})),U=(0,f.Z)((function(e){I&&null!=e&&(clearTimeout(A.current),A.current=setTimeout((function(){G(null,"timeout")}),e))}));o.useEffect((function(){return M&&U(m),function(){clearTimeout(A.current)}}),[M,m,U]);var X=function(){clearTimeout(A.current)},J=o.useCallback((function(){null!=m&&U(null!=R?R:.5*m)}),[m,R,U]);return o.useEffect((function(){if(!x&&M)return window.addEventListener("focus",J),window.addEventListener("blur",X),function(){window.removeEventListener("focus",J),window.removeEventListener("blur",X)}}),[x,J,M]),!M&&V?null:o.createElement(g,(0,c.Z)({onClickAway:function(e){I&&I(e,"clickaway")}},k),o.createElement("div",(0,c.Z)({className:(0,l.Z)(h.root,h["anchorOrigin".concat((0,v.Z)(i)).concat((0,v.Z)(s))],b),onMouseEnter:function(e){z&&z(e),X()},onMouseLeave:function(e){B&&B(e),J()},ref:n},q),o.createElement(H,(0,c.Z)({appear:!0,in:M,onEnter:(0,E.Z)((function(){Y(!1)}),P),onEntered:T,onEntering:N,onExit:_,onExited:(0,E.Z)((function(){Y(!0)}),L),onExiting:O,timeout:$,direction:"top"===i?"down":"up"},j),p||o.createElement(w,(0,c.Z)({message:S,action:t},y)))))})),x=(0,s.Z)((function(e){var n={top:8},t={bottom:8},o={justifyContent:"flex-end"},r={justifyContent:"flex-start"},a={top:24},l={bottom:24},s={right:24},u={left:24},d={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:(0,c.Z)({},n,(0,i.Z)({},e.breakpoints.up("sm"),(0,c.Z)({},a,d))),anchorOriginBottomCenter:(0,c.Z)({},t,(0,i.Z)({},e.breakpoints.up("sm"),(0,c.Z)({},l,d))),anchorOriginTopRight:(0,c.Z)({},n,o,(0,i.Z)({},e.breakpoints.up("sm"),(0,c.Z)({left:"auto"},a,s))),anchorOriginBottomRight:(0,c.Z)({},t,o,(0,i.Z)({},e.breakpoints.up("sm"),(0,c.Z)({left:"auto"},l,s))),anchorOriginTopLeft:(0,c.Z)({},n,r,(0,i.Z)({},e.breakpoints.up("sm"),(0,c.Z)({right:"auto"},a,u))),anchorOriginBottomLeft:(0,c.Z)({},t,r,(0,i.Z)({},e.breakpoints.up("sm"),(0,c.Z)({right:"auto"},l,u)))}}),{flip:!1,name:"MuiSnackbar"})(C),S=t(28437),I=(0,r.ZP)(x).withConfig({displayName:"MySnackbar__StyledSnackbar",componentId:"svwosn-0"})(["> div{display:flex;flex-direction:row-reverse;justify-content:center;background-color:",";font-size:medium;}.MuiSnackbarContent-action{margin:0;padding:0;}svg{width:1.4rem;height:1.4rem;margin-right:.4rem;fill:",";}"],(function(e){return"warn"===e.$type?e.theme.colors.warn:"success"===e.$type?e.theme.colors.success:e.theme.colors.error}),(function(e){return"warn"===e.$type?e.theme.colors.onWarn:"success"===e.$type?e.theme.colors.onSuccess:e.theme.colors.onError})),P=function(e){var n=e.open,t=e.onClose,r=e.message,a=e.type,i={success:S.tm,warn:S.zM,error:S.Pz};return o.createElement(I,{open:n,autoHideDuration:3e3,onClose:t,anchorOrigin:{vertical:"bottom",horizontal:"center"},message:r,action:i[a],$type:a})}},22772:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ee}});var o=t(67294),r=t(50009),a=t(83332),i=t(22122),c=t(81253),l=t(85505),s=t(49044),u=t(19123),d=(0,u.Z)(o.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=(0,u.Z)(o.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),p=t(37595),f=(0,u.Z)(o.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),h=t(81664),g=t(34621),v=o.createElement(m,null),E=o.createElement(d,null),Z=o.createElement(f,null),b=o.forwardRef((function(e,n){var t=e.checkedIcon,r=void 0===t?v:t,a=e.classes,u=e.color,d=void 0===u?"secondary":u,m=e.icon,p=void 0===m?E:m,f=e.indeterminate,g=void 0!==f&&f,b=e.indeterminateIcon,k=void 0===b?Z:b,y=e.inputProps,w=e.size,C=void 0===w?"medium":w,x=(0,c.Z)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),S=g?k:p,I=g?k:r;return o.createElement(s.Z,(0,i.Z)({type:"checkbox",classes:{root:(0,l.Z)(a.root,a["color".concat((0,h.Z)(d))],g&&a.indeterminate),checked:a.checked,disabled:a.disabled},color:d,inputProps:(0,i.Z)({"data-indeterminate":g},y),icon:o.cloneElement(S,{fontSize:void 0===S.props.fontSize&&"small"===C?C:S.props.fontSize}),checkedIcon:o.cloneElement(I,{fontSize:void 0===I.props.fontSize&&"small"===C?C:I.props.fontSize}),ref:n},x))})),k=(0,g.Z)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,p.U1)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,p.U1)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(b),y=t(62846),w=t(80791),C=t(4381),x=o.forwardRef((function(e,n){var t=e.classes,r=e.className,a=(0,c.Z)(e,["classes","className"]);return o.createElement("div",(0,i.Z)({className:(0,l.Z)(t.root,r),ref:n},a))}));x.muiName="ListItemSecondaryAction";var S=(0,g.Z)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(x),I=t(45650),P=t(65541),T=t(28001),N=t(57954),_=t(47378),L=t(17182),O=t(78032),z=t(93175),B=t(27859),M=t(44988),R=t(28437),D=(0,r.ZP)(I.Z).withConfig({displayName:"team__StyledMenu",componentId:"sc-91g1dd-0"})([".MuiPaper-root{background-color:",";color:",";}"],(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.onSurface})),H=(0,r.ZP)(P.Z).withConfig({displayName:"team__StyledMenuItem",componentId:"sc-91g1dd-1"})(["&&{svg{fill:",";}}"],(function(e){return e.theme.colors.secondary})),F=function(){var e,n=(0,N.f)().pageString,t=(0,T.q)(),r=t.importLineupData,a=t.actions.toggleImportLineupData,i=(0,o.useState)({anchorElement:!1,isSnackbarOpen:!1}),c=i[0],l=i[1];return o.createElement(o.Fragment,null,o.createElement(B.ZP,{"aria-controls":"setting-menu","aria-haspopup":"true",onClick:function(e){return l((function(n){return Object.assign({},n,{anchorElement:e.currentTarget})}))},tooltipText:n.team.index.settingTooltip},R.qY),o.createElement(w.Z,{component:D,id:"setting-menu",anchorEl:c.anchorElement,open:Boolean(c.anchorElement),onClose:function(){return l((function(e){return Object.assign({},e,{anchorElement:null})}))}},o.createElement(C.Z,{component:H,dense:!0,button:!0,onClick:function(){a()||l((function(e){return Object.assign({},e,{isSnackbarOpen:!0})}))}},o.createElement(k,{edge:"start",checked:r,disableRipple:!0,inputProps:{"aria-labelledby":"setting-description"}}),o.createElement("span",{id:"setting-description"},n.team.index.settingDescription))),o.createElement(M.Z,{open:c.isSnackbarOpen,onClose:(e=!1,function(){return l((function(n){return Object.assign({},n,{isSnackbarOpen:e})}))}),message:n.team.index.errorSnackbar,type:"error"}))},$=(0,r.ZP)(L.Z).withConfig({displayName:"team__TeamHeader",componentId:"sc-91g1dd-2"})(["position:relative;left:-1rem;width:calc(100% + 2rem);height:auto;margin:0;padding:0 0 .5rem 1rem;border:none;label{margin-right:.6rem;font-size:large;}"]),j=(0,r.ZP)(a.Z).withConfig({displayName:"team__StyledButton",componentId:"sc-91g1dd-3"})(["&&{padding:.6rem;color:",";border:1px solid ",";font-size:medium;svg{margin:0;}span{line-height:normal;}}"],(function(e){return e.theme.colors.onSurface}),(function(e){return e.theme.colors.shadow})),q=function(){var e=(0,N.f)().pageString,n=(0,T.q)().actions.newTeam;return o.createElement(o.Fragment,null,o.createElement($,{title:o.createElement(O.Z,{to:"/team/build/"},o.createElement(j,{startIcon:R.k8,onClick:function(){return n()}},o.createElement("span",null,e.team.index.newComposition))),end:o.createElement(F,null)}))},A=r.ZP.div.withConfig({displayName:"team__CharContainer",componentId:"sc-91g1dd-4"})(["display:flex;flex-wrap:nowrap;overflow-x:hidden;"]),W=(0,r.ZP)(z.Z).withConfig({displayName:"team__CharImg",componentId:"sc-91g1dd-5"})(["flex:0 0 auto;width:3rem;height:3rem;overflow:hidden;"]),V=r.ZP.div.withConfig({displayName:"team__EmptySlot",componentId:"sc-91g1dd-6"})(["flex:0 0 auto;width:3rem;height:3rem;overflow:hidden;"]),Y=function(e){var n=e.chars,t=(0,N.f)().charString;return n.every((function(e){return void 0===(null==e?void 0:e.id)}))?o.createElement(A,null,o.createElement(V,null)):o.createElement(A,null,n.map((function(e,n){return(null==e?void 0:e.id)&&o.createElement(W,{key:n,name:"char_small_"+e.id,alt:t.name[e.id]})})))},G=(0,r.ZP)(C.Z).withConfig({displayName:"team__DataItem",componentId:"sc-91g1dd-7"})(["&&{margin-bottom:.6rem;padding-right:6.8rem;}background:linear-gradient( 90deg,",","," );"],(function(e){return e.$isDragging?e.theme.colors.shadow:e.theme.colors.shadow+"2A"}),(function(e){return e.$isDragging?e.theme.colors.surface:e.theme.colors.shadow+"0D"})),U=r.ZP.span.withConfig({displayName:"team__TitleText",componentId:"sc-91g1dd-8"})(["width:8rem;color:",";white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"],(function(e){return e.theme.colors.onSurface})),X=(0,r.ZP)(B.ZP).withConfig({displayName:"team__OperationButton",componentId:"sc-91g1dd-9"})(["svg{width:1.4rem;height:1.4rem;}"]),J=function(){var e=(0,N.f)().pageString,n=(0,T.q)(),t=n.localTeams,r=n.actions,a=r.getTeam,i=r.selectTeam,c=r.pushTeam,l=r.deleteTeam;return o.createElement(w.Z,null,null==t?void 0:t.map((function(n,t){return o.createElement(G,{component:O.Z,to:"/team/build/",button:!0,key:t,onClick:function(){return i(t)}},o.createElement(U,null,n.name),o.createElement(Y,{chars:n.characters}),o.createElement(S,null,o.createElement(X,{onClick:function(){return c(a(t))},tooltipText:e.team.index.copyTooltip,edge:"end","aria-label":"copy-team"},R.TI),o.createElement(X,{onClick:function(){return l(t)},tooltipText:e.team.index.deleteTooltip,edge:"end","aria-label":"delete-team"},R.pJ)))})))},K=r.ZP.div.withConfig({displayName:"team__PageWrapper",componentId:"sc-91g1dd-10"})(["max-width:1000px;margin:auto;"]),Q=(0,r.ZP)(y.Z).withConfig({displayName:"team__StyledDivider",componentId:"sc-91g1dd-11"})(["&&{background-color:",";}"],(function(e){return e.theme.colors.dropdownHover})),ee=function(){var e=(0,N.f)().pageString;return o.createElement(K,null,o.createElement(_.Z,{title:e.team.index.helmet.title,description:e.team.index.helmet.description,path:"/team/"}),o.createElement(q,null),o.createElement(Q,null),o.createElement(J,null))}}}]);
//# sourceMappingURL=component---src-pages-team-index-js-a60b9ac2d968b16a797a.js.map