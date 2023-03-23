"use strict";(self.webpackChunkletian_dashboard=self.webpackChunkletian_dashboard||[]).push([[346],{28308:function(n,e,s){s.d(e,{Z:function(){return _}});var t=s(70885),i=s(47313),a=s(30168),r=s(63366),o=s(87462),d=s(83061),h=s(30686),l=s(21921);function c(n){return String(n).match(/[\d.\-+]*\s*(.*)/)[1]||""}function m(n){return parseFloat(n)}var x=s(17551),j=s(64164),u=s(11236),g=s(32298);function Z(n){return(0,g.Z)("MuiSkeleton",n)}(0,s(77430).Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var w,v,f,p,b,P,C,S,k=s(46417),y=["animation","className","component","height","style","variant","width"],R=(0,h.F4)(b||(b=w||(w=(0,a.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),F=(0,h.F4)(P||(P=v||(v=(0,a.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),M=(0,j.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(n,e){var s=n.ownerState;return[e.root,e[s.variant],!1!==s.animation&&e[s.animation],s.hasChildren&&e.withChildren,s.hasChildren&&!s.width&&e.fitContent,s.hasChildren&&!s.height&&e.heightAuto]}})((function(n){var e=n.theme,s=n.ownerState,t=c(e.shape.borderRadius)||"px",i=m(e.shape.borderRadius);return(0,o.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,x.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===s.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(i).concat(t,"/").concat(Math.round(i/.6*10)/10).concat(t),"&:empty:before":{content:'"\\00a0"'}},"circular"===s.variant&&{borderRadius:"50%"},"rounded"===s.variant&&{borderRadius:(e.vars||e).shape.borderRadius},s.hasChildren&&{"& > *":{visibility:"hidden"}},s.hasChildren&&!s.width&&{maxWidth:"fit-content"},s.hasChildren&&!s.height&&{height:"auto"})}),(function(n){return"pulse"===n.ownerState.animation&&(0,h.iv)(C||(C=f||(f=(0,a.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),R)}),(function(n){var e=n.ownerState,s=n.theme;return"wave"===e.animation&&(0,h.iv)(S||(S=p||(p=(0,a.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),F,(s.vars||s).palette.action.hover)})),A=i.forwardRef((function(n,e){var s=(0,u.Z)({props:n,name:"MuiSkeleton"}),t=s.animation,i=void 0===t?"pulse":t,a=s.className,h=s.component,c=void 0===h?"span":h,m=s.height,x=s.style,j=s.variant,g=void 0===j?"text":j,w=s.width,v=(0,r.Z)(s,y),f=(0,o.Z)({},s,{animation:i,component:c,variant:g,hasChildren:Boolean(v.children)}),p=function(n){var e=n.classes,s=n.variant,t=n.animation,i=n.hasChildren,a=n.width,r=n.height,o={root:["root",s,t,i&&"withChildren",i&&!a&&"fitContent",i&&!r&&"heightAuto"]};return(0,l.Z)(o,Z,e)}(f);return(0,k.jsx)(M,(0,o.Z)({as:c,ref:e,className:(0,d.Z)(p.root,a),ownerState:f},v,{style:(0,o.Z)({width:w,height:m},x)}))})),X=s(62463),B=s(82937),N=s(8611),_=function(n){var e=n.children,s=(0,i.useState)(!0),a=(0,t.Z)(s,2),r=a[0],o=a[1];(0,i.useEffect)((function(){o(!1)}),[]);var d=(0,k.jsx)(N.Z,{title:(0,k.jsx)(A,{sx:{width:{xs:120,md:180}}}),secondary:(0,k.jsx)(A,{animation:"wave",variant:"circular",width:24,height:24}),children:(0,k.jsxs)(X.Z,{spacing:1,children:[(0,k.jsx)(A,{}),(0,k.jsx)(A,{sx:{height:64},animation:"wave",variant:"rectangular"}),(0,k.jsx)(A,{}),(0,k.jsx)(A,{})]})});return(0,k.jsxs)(k.Fragment,{children:[r&&(0,k.jsxs)(B.ZP,{container:!0,spacing:3,children:[(0,k.jsx)(B.ZP,{item:!0,xs:12,md:6,children:d}),(0,k.jsx)(B.ZP,{item:!0,xs:12,md:6,children:d}),(0,k.jsx)(B.ZP,{item:!0,xs:12,md:6,children:d}),(0,k.jsx)(B.ZP,{item:!0,xs:12,md:6,children:d})]}),!r&&e]})}},83346:function(n,e,s){s.r(e);var t=s(62111),i=s(62463),a=s(42669),r=s(82937),o=s(8611),d=s(28308),h=s(46417);function l(n){var e=n.shadow;return(0,h.jsx)(o.Z,{border:!1,sx:{boxShadow:e},children:(0,h.jsxs)(i.Z,{spacing:1,justifyContent:"center",alignItems:"center",children:[(0,h.jsx)(a.Z,{variant:"h6",children:"boxShadow"}),(0,h.jsx)(a.Z,{variant:"subtitle1",children:e})]})})}function c(n){var e=n.shadow,s=n.label,t=n.color,r=n.bgcolor;return(0,h.jsx)(o.Z,{border:!1,sx:{bgcolor:r||"inherit",boxShadow:e},children:(0,h.jsx)(i.Z,{spacing:1,justifyContent:"center",alignItems:"center",children:(0,h.jsx)(a.Z,{variant:"subtitle1",color:t,children:s})})})}e.default=function(){var n=(0,t.Z)();return(0,h.jsx)(d.Z,{children:(0,h.jsxs)(r.ZP,{container:!0,spacing:3,children:[(0,h.jsx)(r.ZP,{item:!0,xs:12,children:(0,h.jsx)(o.Z,{title:"Basic Shadow",codeHighlight:!0,children:(0,h.jsxs)(r.ZP,{container:!0,spacing:3,children:[(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"0"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"1"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"2"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"3"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"4"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"5"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"6"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"7"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"8"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"9"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"10"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"11"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"12"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"13"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"14"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"15"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"16"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"17"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"18"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"19"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"20"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"21"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"22"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"23"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"24"})})]})})}),(0,h.jsx)(r.ZP,{item:!0,xs:12,children:(0,h.jsx)(o.Z,{title:"Custom Shadow",codeHighlight:!0,children:(0,h.jsx)(r.ZP,{container:!0,spacing:3,children:(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(c,{shadow:n.customShadows.z1,label:"z1",color:"inherit"})})})})})]})})}}}]);