(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{1587:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[slug]",function(){return n(5949)}])},2572:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var r=n(5893),o=n(7294),l=n(9008),a=n.n(l),i=n(7311),s=n(5337);let d=e=>{var t;let{style:n,seoContent:o}=e;return(0,r.jsxs)(a(),{children:[(null==o?void 0:o.title)?(0,r.jsx)("title",{children:null==o?void 0:o.title}):"",(null==o?void 0:o.fullHead)?(0,i.ZP)(null==o?void 0:null===(t=o.fullHead)||void 0===t?void 0:t.replaceAll("https://jun88v88.com","https://jun88247.com/"),{replace(e){let{type:t,parent:n,name:o}=e;if("tag"===t&&"title"===o||(null==n?void 0:n.name)==="title")return(0,r.jsx)(r.Fragment,{})}}):"",(0,r.jsx)("link",{href:"/favicon.ico",rel:"icon"}),(null==n?void 0:n.length)>0&&(null==n?void 0:n.map((e,t)=>{if(null==e||!e.src)return(0,r.jsx)("style",{children:null==e?void 0:e.after},t);{let n=null==e?void 0:e.src;return(null==n?void 0:n.includes("http"))||(n="".concat("https://jun88v88.com").concat(n)),(0,r.jsx)("link",{rel:"stylesheet",href:n},t)}}))]})};var u=n(5417),c=n(9479),p=n(186),m=n(5624),h=n(7585),f=n(7806),g=n(1664),v=n.n(g),b=n(1163);function x(e){let{menuItems:t}=e,n=(0,b.useRouter)(),[l,a]=o.useState(!1),[i,s]=(0,o.useState)();return(0,r.jsxs)(u.R,{isBordered:!0,isMenuOpen:l,onMenuOpenChange:a,children:[(0,r.jsx)(c.U,{className:"sm:hidden",justify:"start",children:(0,r.jsx)(p.L,{"aria-label":l?"Close menu":"Open menu"})}),(0,r.jsxs)(c.U,{className:"hidden sm:!flex sm:!visible gap-4",justify:"center",children:[(0,r.jsx)(m.k,{children:(0,r.jsx)(v(),{href:"/",className:"text-white",children:"HOME"})}),null==t?void 0:t.map((e,t)=>{var o;if(null==e?void 0:e.description)return(0,r.jsx)(m.k,{children:(0,r.jsx)("div",{className:(null===(o=n.asPath)||void 0===o?void 0:o.replace("/",""))===e.slug?"text-blue-400 hover:cursor-pointer":"text-white hover:cursor-pointer",onClick:()=>{n.push(null==e?void 0:e.slug)},children:null==e?void 0:e.name})})})]}),(0,r.jsx)(h.$,{children:null==t?void 0:t.map((e,n)=>{if(null==e?void 0:e.description)return(0,r.jsx)(f.h,{children:(0,r.jsx)(v(),{className:"w-full",color:2===n?"warning":n===t.length-1?"danger":"foreground",href:"#",size:"lg",children:null==e?void 0:e.name})},"".concat(null==e?void 0:e.slug,"-").concat(n))})})]})}var y=n(7340),w=n(8806);function j(){let e=(0,y._)(["\n            query GetAllCate {\n                categories {\n                    nodes {\n                        name\n                        uri\n                        categoryId\n                        slug\n                        description\n                    }\n                }\n        }\n                \n      "]);return j=function(){return e},e}let k=async()=>{var e,t;let n=(0,w.Ps)(j()),r=await s.L.query({query:n}),o=null==r?void 0:null===(t=r.data)||void 0===t?void 0:null===(e=t.categories)||void 0===e?void 0:e.nodes;if(o)return o};function C(e){let{children:t,styleSheet:n,seoContent:l}=e,[a,i]=(0,o.useState)([]),s=async()=>{let e=await k();return console.log(e),e},u=async()=>{try{let e=await s();i(e)}catch(e){console.error("Failed to fetch menu items:",e)}};return(0,o.useEffect)(()=>{u()},[]),(0,r.jsxs)("div",{className:"relative flex flex-col h-full bg-white",children:[(0,r.jsx)(d,{style:n,seoContent:l}),(0,r.jsx)(x,{menuItems:a}),(0,r.jsx)("main",{className:"text-black text-justify p-20",children:t})]})}},5949:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return K},default:function(){return q}});var r=n(5893),[o,l]=(0,n(6347).k)({name:"CardContext",strict:!0,errorMessage:"useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />"}),a=n(9488),i=n(5512),s=(0,a.tv)({slots:{base:["flex","flex-col","relative","overflow-hidden","h-auto","outline-none","text-foreground","box-border","bg-content1",...i.Dh],header:["flex","p-3","z-10","w-full","justify-start","items-center","shrink-0","overflow-inherit","color-inherit","subpixel-antialiased"],body:["relative","flex","flex-1","w-full","p-3","flex-auto","flex-col","place-content-inherit","align-items-inherit","h-auto","break-words","text-left","overflow-y-auto","subpixel-antialiased"],footer:["p-3","h-auto","flex","w-full","items-center","overflow-hidden","color-inherit","subpixel-antialiased"]},variants:{shadow:{none:{base:"shadow-none"},sm:{base:"shadow-small"},md:{base:"shadow-medium"},lg:{base:"shadow-large"}},radius:{none:{base:"rounded-none",header:"rounded-none",footer:"rounded-none"},sm:{base:"rounded-small",header:"rounded-t-small",footer:"rounded-b-small"},md:{base:"rounded-medium",header:"rounded-t-medium",footer:"rounded-b-medium"},lg:{base:"rounded-large",header:"rounded-t-large",footer:"rounded-b-large"}},fullWidth:{true:{base:"w-full"}},isHoverable:{true:{base:"data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2"}},isPressable:{true:{base:"cursor-pointer"}},isBlurred:{true:{base:["bg-background/80","dark:bg-background/20","backdrop-blur-md","backdrop-saturate-150"]}},isFooterBlurred:{true:{footer:["bg-background/10","backdrop-blur","backdrop-saturate-150"]}},isDisabled:{true:{base:"opacity-disabled cursor-not-allowed"}},disableAnimation:{true:"",false:{base:"transition-transform-background motion-reduce:transition-none"}}},compoundVariants:[{isPressable:!0,class:"data-[pressed=true]:scale-[0.97] tap-highlight-transparent"}],defaultVariants:{radius:"lg",shadow:"md",fullWidth:!1,isHoverable:!1,isPressable:!1,isDisabled:!1,isFooterBlurred:!1}}),d=n(7294);function u(...e){return(...t)=>{for(let n of e)"function"==typeof n&&n(...t)}}"undefined"!=typeof window&&window.document&&window.document.createElement;let c=new Map;var p=n(512),m=n(7243);let h=!1,f=0;function g(){h=!0,setTimeout(()=>{h=!1},50)}function v(e){"touch"===e.pointerType&&g()}function b(){if("undefined"!=typeof document)return"undefined"!=typeof PointerEvent?document.addEventListener("pointerup",v):document.addEventListener("touchend",g),f++,()=>{--f>0||("undefined"!=typeof PointerEvent?document.removeEventListener("pointerup",v):document.removeEventListener("touchend",g))}}var x=n(3755),y=n(6733),w=n(5607),j=n(9869),k=n(9037),C=n(262),E=new Set(["id","type","style","title","role","tabIndex","htmlFor","width","height","abbr","accept","acceptCharset","accessKey","action","allowFullScreen","allowTransparency","alt","async","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","challenge","charset","checked","cite","class","className","cols","colSpan","command","content","contentEditable","contextMenu","controls","coords","crossOrigin","data","dateTime","default","defer","dir","disabled","download","draggable","dropzone","encType","enterKeyHint","for","form","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","headers","hidden","high","href","hrefLang","httpEquiv","icon","inputMode","isMap","itemId","itemProp","itemRef","itemScope","itemType","kind","label","lang","list","loop","manifest","max","maxLength","media","mediaGroup","method","min","minLength","multiple","muted","name","noValidate","open","optimum","pattern","ping","placeholder","poster","preload","radioGroup","referrerPolicy","readOnly","rel","required","rows","rowSpan","sandbox","scope","scoped","scrolling","seamless","selected","shape","size","sizes","slot","sortable","span","spellCheck","src","srcDoc","srcSet","start","step","target","translate","typeMustMatch","useMap","value","wmode","wrap"]),P=new Set(["onCopy","onCut","onPaste","onLoad","onError","onWheel","onScroll","onCompositionEnd","onCompositionStart","onCompositionUpdate","onKeyDown","onKeyPress","onKeyUp","onFocus","onBlur","onChange","onInput","onSubmit","onClick","onContextMenu","onDoubleClick","onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onPointerDown","onPointerEnter","onPointerLeave","onPointerUp","onSelect","onTouchCancel","onTouchEnd","onTouchMove","onTouchStart","onAnimationStart","onAnimationEnd","onAnimationIteration","onTransitionEnd"]),N=/^(data-.*)$/,M=/^(aria-.*)$/,S=/^(on[A-Z].*)$/;function T(e,t={}){let{labelable:n=!0,enabled:r=!0,propNames:o,omitPropNames:l,omitEventNames:a,omitDataProps:i,omitEventProps:s}=t,d={};if(!r)return e;for(let t in e)!((null==l?void 0:l.has(t))||(null==a?void 0:a.has(t))&&S.test(t)||S.test(t)&&!P.has(t)||i&&N.test(t)||s&&S.test(t))&&(Object.prototype.hasOwnProperty.call(e,t)&&(E.has(t)||n&&M.test(t)||(null==o?void 0:o.has(t))||N.test(t))||S.test(t))&&(d[t]=e[t]);return d}var I=n(3295),H=n(8522),z=n(9664),D=n(1526),W=n(8897),_=e=>{let{ripples:t=[],motionProps:n,color:o="currentColor",style:l,onClear:a}=e;return(0,r.jsx)(r.Fragment,{children:t.map(e=>{let t=Math.min(Math.max(.01*e.size,.2),e.size>100?.75:.5);return(0,r.jsx)(H.X,{features:z.H,children:(0,r.jsx)(D.M,{mode:"popLayout",children:(0,r.jsx)(W.m.span,{animate:{transform:"scale(2)",opacity:0},className:"nextui-ripple",exit:{opacity:0},initial:{transform:"scale(0)",opacity:.35},style:{position:"absolute",backgroundColor:o,borderRadius:"100%",transformOrigin:"center",pointerEvents:"none",overflow:"hidden",inset:0,zIndex:0,top:e.y,left:e.x,width:`${e.size}px`,height:`${e.size}px`,...l},transition:{duration:t},onAnimationComplete:()=>{a(e.key)},...n})})},e.key)})})};_.displayName="NextUI.Ripple";var A=(0,w.Gp)((e,t)=>{let{children:n,context:l,Component:a,isPressable:i,disableAnimation:f,disableRipple:g,getCardProps:v,getRippleProps:E}=function(e){var t,n,r,o;let l=(0,y.w)(),[a,i]=(0,w.oe)(e,s.variantKeys),{ref:f,as:g,children:v,onClick:E,onPress:P,autoFocus:N,className:M,classNames:S,allowTextSelectionOnPress:H=!0,...z}=a,D=(0,I.gy)(f),W=g||(e.isPressable?"button":"div"),_="string"==typeof W,A=null!=(n=null!=(t=e.disableAnimation)?t:null==l?void 0:l.disableAnimation)&&n,L=null!=(o=null!=(r=e.disableRipple)?r:null==l?void 0:l.disableRipple)&&o,B=(0,j.W)(null==S?void 0:S.base,M),{onClick:F,onClear:O,ripples:R}=function(e={}){let[t,n]=(0,d.useState)([]);return{ripples:t,onClick:(0,d.useCallback)(e=>{let t=e.currentTarget,r=Math.max(t.clientWidth,t.clientHeight),o=t.getBoundingClientRect();n(t=>[...t,{key:(0,k.QI)(t.length.toString()),size:r,x:e.clientX-o.left-r/2,y:e.clientY-o.top-r/2}])},[]),onClear:(0,d.useCallback)(e=>{n(t=>t.filter(t=>t.key!==e))},[]),...e}}(),U=e=>{A||L||!D.current||F(e)},{buttonProps:$,isPressed:Z}=(0,x.j)({onPress:P,elementType:g,isDisabled:!e.isPressable,onClick:u(E,U),allowTextSelectionOnPress:H,...z},D),{hoverProps:G,isHovered:K}=function(e){let{onHoverStart:t,onHoverChange:n,onHoverEnd:r,isDisabled:o}=e,[l,a]=(0,d.useState)(!1),i=(0,d.useRef)({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;(0,d.useEffect)(b,[]);let{hoverProps:s,triggerHoverEnd:u}=(0,d.useMemo)(()=>{let e=(e,r)=>{if(i.pointerType=r,o||"touch"===r||i.isHovered||!e.currentTarget.contains(e.target))return;i.isHovered=!0;let l=e.currentTarget;i.target=l,t&&t({type:"hoverstart",target:l,pointerType:r}),n&&n(!0),a(!0)},l=(e,t)=>{if(i.pointerType="",i.target=null,"touch"===t||!i.isHovered)return;i.isHovered=!1;let o=e.currentTarget;r&&r({type:"hoverend",target:o,pointerType:t}),n&&n(!1),a(!1)},s={};return"undefined"!=typeof PointerEvent?(s.onPointerEnter=t=>{h&&"mouse"===t.pointerType||e(t,t.pointerType)},s.onPointerLeave=e=>{!o&&e.currentTarget.contains(e.target)&&l(e,e.pointerType)}):(s.onTouchStart=()=>{i.ignoreEmulatedMouseEvents=!0},s.onMouseEnter=t=>{i.ignoreEmulatedMouseEvents||h||e(t,"mouse"),i.ignoreEmulatedMouseEvents=!1},s.onMouseLeave=e=>{!o&&e.currentTarget.contains(e.target)&&l(e,"mouse")}),{hoverProps:s,triggerHoverEnd:l}},[t,n,r,o,i]);return(0,d.useEffect)(()=>{o&&u({currentTarget:i.target},i.pointerType)},[o]),{hoverProps:s,isHovered:l}}({isDisabled:!e.isHoverable,...z}),{isFocusVisible:q,isFocused:V,focusProps:X}=(0,m.F)({autoFocus:N}),Q=(0,d.useMemo)(()=>s({...i,disableAnimation:A}),[(0,k.Xx)(i),A]),Y=(0,d.useMemo)(()=>({slots:Q,classNames:S,disableAnimation:A,isDisabled:e.isDisabled,isFooterBlurred:e.isFooterBlurred,fullWidth:e.fullWidth}),[Q,S,e.isDisabled,e.isFooterBlurred,A,e.fullWidth]),J=(0,d.useCallback)((t={})=>({ref:D,className:Q.base({class:B}),tabIndex:e.isPressable?0:-1,"data-hover":(0,C.PB)(K),"data-pressed":(0,C.PB)(Z),"data-focus":(0,C.PB)(V),"data-focus-visible":(0,C.PB)(q),"data-disabled":(0,C.PB)(e.isDisabled),...function(...e){let t={...e[0]};for(let n=1;n<e.length;n++){let r=e[n];for(let e in r){let n=t[e],o=r[e];"function"==typeof n&&"function"==typeof o&&"o"===e[0]&&"n"===e[1]&&e.charCodeAt(2)>=65&&90>=e.charCodeAt(2)?t[e]=u(n,o):("className"===e||"UNSAFE_className"===e)&&"string"==typeof n&&"string"==typeof o?t[e]=(0,p.Z)(n,o):"id"===e&&n&&o?t.id=function(e,t){if(e===t)return e;let n=c.get(e);if(n)return n(t),t;let r=c.get(t);return r?(r(e),e):t}(n,o):t[e]=void 0!==o?o:n}}return t}(e.isPressable?{...$,...X,role:"button"}:{},e.isHoverable?G:{},T(z,{enabled:_}),T(t))}),[D,Q,B,_,e.isPressable,e.isHoverable,e.isDisabled,K,Z,q,$,X,G,z]),ee=(0,d.useCallback)(()=>({ripples:R,onClear:O}),[R,O]);return{context:Y,domRef:D,Component:W,classNames:S,children:v,isHovered:K,isPressed:Z,disableAnimation:A,isPressable:e.isPressable,isHoverable:e.isHoverable,disableRipple:L,handleClick:U,isFocusVisible:q,getCardProps:J,getRippleProps:ee}}({...e,ref:t});return(0,r.jsxs)(a,{...v(),children:[(0,r.jsx)(o,{value:l,children:n}),i&&!f&&!g&&(0,r.jsx)(_,{...E()})]})});A.displayName="NextUI.Card";var L=(0,w.Gp)((e,t)=>{var n;let{as:o,className:a,children:i,...s}=e,d=(0,I.gy)(t),{slots:u,classNames:c}=l(),p=(0,j.W)(null==c?void 0:c.header,a);return(0,r.jsx)(o||"div",{ref:d,className:null==(n=u.header)?void 0:n.call(u,{class:p}),...s,children:i})});L.displayName="NextUI.CardHeader";var B=(0,a.tv)({slots:{wrapper:"relative shadow-black/5",zoomedWrapper:"relative overflow-hidden rounded-inherit",img:"relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100",blurredImg:["absolute","z-0","inset-0","w-full","h-full","object-cover","filter","blur-lg","scale-105","saturate-150","opacity-30","translate-y-1"]},variants:{radius:{none:{},sm:{},md:{},lg:{},full:{}},shadow:{none:{wrapper:"shadow-none",img:"shadow-none"},sm:{wrapper:"shadow-small",img:"shadow-small"},md:{wrapper:"shadow-medium",img:"shadow-medium"},lg:{wrapper:"shadow-large",img:"shadow-large"}},isZoomed:{true:{img:["object-cover","transform","hover:scale-125"]}},showSkeleton:{true:{wrapper:["group","relative","overflow-hidden","bg-content3 dark:bg-content2"],img:"opacity-0"}},disableAnimation:{true:{img:"transition-none"},false:{img:"transition-transform-opacity motion-reduce:transition-none !duration-300"}}},defaultVariants:{radius:"lg",shadow:"none",isZoomed:!1,isBlurred:!1,showSkeleton:!1},compoundVariants:[{showSkeleton:!0,disableAnimation:!1,class:{wrapper:["before:opacity-100","before:absolute","before:inset-0","before:-translate-x-full","before:animate-[shimmer_2s_infinite]","before:border-t","before:border-content4/30","before:bg-gradient-to-r","before:from-transparent","before:via-content4","dark:before:via-default-700/10","before:to-transparent","after:opacity-100","after:absolute","after:inset-0","after:-z-10","after:bg-content3","dark:after:bg-content2"]}}],compoundSlots:[{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"none",class:"rounded-none"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"full",class:"rounded-full"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"sm",class:"rounded-small"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"md",class:"rounded-md"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"lg",class:"rounded-large"}]}),F=(null==globalThis?void 0:globalThis.document)?d.useLayoutEffect:d.useEffect,O=(0,w.Gp)((e,t)=>{let{Component:n,domRef:o,slots:l,classNames:a,isBlurred:i,isZoomed:s,fallbackSrc:u,removeWrapper:c,disableSkeleton:p,getImgProps:m,getWrapperProps:h,getBlurredImgProps:f}=function(e){var t,n;let r=(0,y.w)(),[o,l]=(0,w.oe)(e,B.variantKeys),{ref:a,as:i,src:s,className:u,classNames:c,loading:p,isBlurred:m,fallbackSrc:h,isLoading:f,disableSkeleton:g=!!h,removeWrapper:v=!1,onError:b,onLoad:x,srcSet:E,sizes:P,crossOrigin:N,...M}=o,S=function(e={}){let{loading:t,src:n,srcSet:r,onLoad:o,onError:l,crossOrigin:a,sizes:i,ignoreFallback:s}=e,[u,c]=(0,d.useState)("pending");(0,d.useEffect)(()=>{c(n?"loading":"pending")},[n]);let p=(0,d.useRef)(),m=(0,d.useCallback)(()=>{if(!n)return;h();let e=new Image;e.src=n,a&&(e.crossOrigin=a),r&&(e.srcset=r),i&&(e.sizes=i),t&&(e.loading=t),e.onload=e=>{h(),c("loaded"),null==o||o(e)},e.onerror=e=>{h(),c("failed"),null==l||l(e)},p.current=e},[n,a,r,i,o,l,t]),h=()=>{p.current&&(p.current.onload=null,p.current.onerror=null,p.current=null)};return F(()=>{if(!s)return"loading"===u&&m(),()=>{h()}},[u,m,s]),s?"loaded":u}({src:s,loading:p,onError:b,onLoad:x,ignoreFallback:!1,srcSet:E,sizes:P,crossOrigin:N}),T=null!=(n=null!=(t=e.disableAnimation)?t:null==r?void 0:r.disableAnimation)&&n,H="loaded"===S&&!f,z="loading"===S||f,D=e.isZoomed,W=(0,I.gy)(a),{w:_,h:A}=(0,d.useMemo)(()=>({w:o.width?"number"==typeof o.width?`${o.width}px`:o.width:"fit-content",h:o.height?"number"==typeof o.height?`${o.height}px`:o.height:"auto"}),[null==o?void 0:o.width,null==o?void 0:o.height]),L=(!s||!H)&&!!h,O=z&&!g,R=(0,d.useMemo)(()=>B({...l,disableAnimation:T,showSkeleton:O}),[(0,k.Xx)(l),T,O]),U=(0,j.W)(u,null==c?void 0:c.img),$=(0,d.useCallback)(()=>{let e=L?{backgroundImage:`url(${h})`}:{};return{className:R.wrapper({class:null==c?void 0:c.wrapper}),style:{...e,maxWidth:_}}},[R,L,h,null==c?void 0:c.wrapper]),Z=(0,d.useCallback)(()=>({src:s,"aria-hidden":(0,C.PB)(!0),className:R.blurredImg({class:null==c?void 0:c.blurredImg})}),[R,s,null==c?void 0:c.blurredImg]);return{Component:i||"img",domRef:W,slots:R,classNames:c,isBlurred:m,disableSkeleton:g,fallbackSrc:h,removeWrapper:v,isZoomed:D,isLoading:z,getImgProps:(e={})=>{let t=(0,j.W)(U,null==e?void 0:e.className);return{src:s,ref:W,"data-loaded":(0,C.PB)(H),className:R.img({class:t}),loading:p,srcSet:E,sizes:P,crossOrigin:N,...M,style:{...(null==M?void 0:M.height)&&{height:A},...e.style,...M.style}}},getWrapperProps:$,getBlurredImgProps:Z}}({...e,ref:t}),g=(0,r.jsx)(n,{ref:o,...m()});if(c)return g;let v=(0,r.jsx)("div",{className:l.zoomedWrapper({class:null==a?void 0:a.zoomedWrapper}),children:g});return i?(0,r.jsxs)("div",{...h(),children:[s?v:g,(0,d.cloneElement)(g,f())]}):s||!p||u?(0,r.jsxs)("div",{...h(),children:[" ",s?v:g]}):g});O.displayName="NextUI.Image";var R=n(1163);let U=e=>{let{title:t,image:n}=e;return(0,R.useRouter)(),(0,r.jsxs)(A,{className:"col-span-12 sm:col-span-4 h-[300px] hover:cursor",children:[(0,r.jsx)(L,{className:"absolute z-10 top-1 flex-col !items-start",children:(0,r.jsx)("h4",{className:"text-black font-medium text-large",children:t||"Stream the Acme event"})}),(0,r.jsx)(O,{removeWrapper:!0,alt:"Card background",className:"z-0 w-full h-full object-cover",src:n||"https://nextui.org/images/card-example-4.jpeg"})]})};var $=n(2572),Z=n(1664),G=n.n(Z),K=!0;function q(e){var t;let{post:n,seoContent:o,isCate:l,catePost:a}=e,i=(0,R.useRouter)();return(0,r.jsx)($.Z,{styleSheet:null==n?void 0:null===(t=n.enqueuedStylesheets)||void 0===t?void 0:t.nodes,seoContent:o,children:(0,r.jsxs)("main",{children:[(0,r.jsx)("h1",{className:"text-black text-7xl text-center pb-20",children:(null==n?void 0:n.title)||(null==n?void 0:n.name)}),(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:l?null==n?void 0:n.description:null==n?void 0:n.content}}),l&&(0,r.jsx)("div",{className:"grid grid-cols-3 gap-4 pt-20",children:null==a?void 0:a.map(e=>{var t,n;return(0,r.jsx)(G(),{href:null==e?void 0:e.slug,className:"hover:cursor-pointer",children:(0,r.jsx)(U,{title:null==e?void 0:e.title,image:null==e?void 0:null===(n=e.featuredImage)||void 0===n?void 0:null===(t=n.node)||void 0===t?void 0:t.sourceUrl,onClick:()=>i.push(null==e?void 0:e.slug)})},null==e?void 0:e.slug)})})]})})}}},function(e){e.O(0,[781,888,774,179],function(){return e(e.s=1587)}),_N_E=e.O()}]);