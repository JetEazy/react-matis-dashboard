"use strict";(self.webpackChunkletian_dashboard=self.webpackChunkletian_dashboard||[]).push([[634],{89275:function(e,o,a){a.d(o,{Z:function(){return O}});var n=a(4942),t=a(63366),r=a(87462),l=a(47313),c=a(83061),i=a(21921),d=a(17551),s=a(70885),u=a(28170),p=a(64164),m=a(44817),b=a(11736),f=a(86366),h=a(32298),v=a(77430);function Z(e){return(0,h.Z)("PrivateSwitchBase",e)}(0,v.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var g=a(46417),k=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],x=(0,p.ZP)(f.Z)((function(e){var o=e.ownerState;return(0,r.Z)({padding:9,borderRadius:"50%"},"start"===o.edge&&{marginLeft:"small"===o.size?-3:-12},"end"===o.edge&&{marginRight:"small"===o.size?-3:-12})})),y=(0,p.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),P=l.forwardRef((function(e,o){var a=e.autoFocus,n=e.checked,l=e.checkedIcon,d=e.className,p=e.defaultChecked,f=e.disabled,h=e.disableFocusRipple,v=void 0!==h&&h,P=e.edge,C=void 0!==P&&P,R=e.icon,w=e.id,F=e.inputProps,S=e.inputRef,z=e.name,B=e.onBlur,I=e.onChange,j=e.onFocus,L=e.readOnly,M=e.required,N=e.tabIndex,O=e.type,E=e.value,H=(0,t.Z)(e,k),q=(0,m.Z)({controlled:n,default:Boolean(p),name:"SwitchBase",state:"checked"}),T=(0,s.Z)(q,2),V=T[0],D=T[1],_=(0,b.Z)(),A=f;_&&"undefined"===typeof A&&(A=_.disabled);var W="checkbox"===O||"radio"===O,G=(0,r.Z)({},e,{checked:V,disabled:A,disableFocusRipple:v,edge:C}),J=function(e){var o=e.classes,a=e.checked,n=e.disabled,t=e.edge,r={root:["root",a&&"checked",n&&"disabled",t&&"edge".concat((0,u.Z)(t))],input:["input"]};return(0,i.Z)(r,Z,o)}(G);return(0,g.jsxs)(x,(0,r.Z)({component:"span",className:(0,c.Z)(J.root,d),centerRipple:!0,focusRipple:!v,disabled:A,tabIndex:null,role:void 0,onFocus:function(e){j&&j(e),_&&_.onFocus&&_.onFocus(e)},onBlur:function(e){B&&B(e),_&&_.onBlur&&_.onBlur(e)},ownerState:G,ref:o},H,{children:[(0,g.jsx)(y,(0,r.Z)({autoFocus:a,checked:n,defaultChecked:p,className:J.input,disabled:A,id:W&&w,name:z,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var o=e.target.checked;D(o),I&&I(e,o)}},readOnly:L,ref:S,required:M,ownerState:G,tabIndex:N,type:O},"checkbox"===O&&void 0===E?{}:{value:E},F)),V?l:R]}))})),C=a(25700),R=(0,C.Z)((0,g.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),w=(0,C.Z)((0,g.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),F=(0,C.Z)((0,g.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),S=a(11236);function z(e){return(0,h.Z)("MuiCheckbox",e)}var B=(0,v.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),I=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],j=(0,p.ZP)(P,{shouldForwardProp:function(e){return(0,p.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,o){var a=e.ownerState;return[o.root,a.indeterminate&&o.indeterminate,"default"!==a.color&&o["color".concat((0,u.Z)(a.color))]]}})((function(e){var o,a=e.theme,t=e.ownerState;return(0,r.Z)({color:(a.vars||a).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:a.vars?"rgba(".concat("default"===t.color?a.vars.palette.action.activeChannel:a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,d.Fq)("default"===t.color?a.palette.action.active:a.palette[t.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&(o={},(0,n.Z)(o,"&.".concat(B.checked,", &.").concat(B.indeterminate),{color:(a.vars||a).palette[t.color].main}),(0,n.Z)(o,"&.".concat(B.disabled),{color:(a.vars||a).palette.action.disabled}),o))})),L=(0,g.jsx)(w,{}),M=(0,g.jsx)(R,{}),N=(0,g.jsx)(F,{}),O=l.forwardRef((function(e,o){var a,n,d=(0,S.Z)({props:e,name:"MuiCheckbox"}),s=d.checkedIcon,p=void 0===s?L:s,m=d.color,b=void 0===m?"primary":m,f=d.icon,h=void 0===f?M:f,v=d.indeterminate,Z=void 0!==v&&v,k=d.indeterminateIcon,x=void 0===k?N:k,y=d.inputProps,P=d.size,C=void 0===P?"medium":P,R=d.className,w=(0,t.Z)(d,I),F=Z?x:h,B=Z?x:p,O=(0,r.Z)({},d,{color:b,indeterminate:Z,size:C}),E=function(e){var o=e.classes,a=e.indeterminate,n=e.color,t={root:["root",a&&"indeterminate","color".concat((0,u.Z)(n))]},l=(0,i.Z)(t,z,o);return(0,r.Z)({},o,l)}(O);return(0,g.jsx)(j,(0,r.Z)({type:"checkbox",inputProps:(0,r.Z)({"data-indeterminate":Z},y),icon:l.cloneElement(F,{fontSize:null!=(a=F.props.fontSize)?a:C}),checkedIcon:l.cloneElement(B,{fontSize:null!=(n=B.props.fontSize)?n:C}),ownerState:O,ref:o,className:(0,c.Z)(E.root,R)},w,{classes:E}))}))},64558:function(e,o,a){a.d(o,{Z:function(){return x}});var n=a(4942),t=a(63366),r=a(87462),l=a(47313),c=a(83061),i=a(21921),d=a(11736),s=a(42669),u=a(28170),p=a(64164),m=a(11236),b=a(32298);function f(e){return(0,b.Z)("MuiFormControlLabel",e)}var h=(0,a(77430).Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),v=a(67223),Z=a(46417),g=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],k=(0,p.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,o){var a=e.ownerState;return[(0,n.Z)({},"& .".concat(h.label),o.label),o.root,o["labelPlacement".concat((0,u.Z)(a.labelPlacement))]]}})((function(e){var o=e.theme,a=e.ownerState;return(0,r.Z)((0,n.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(h.disabled),{cursor:"default"}),"start"===a.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===a.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===a.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,n.Z)({},"& .".concat(h.label),(0,n.Z)({},"&.".concat(h.disabled),{color:(o.vars||o).palette.text.disabled})))})),x=l.forwardRef((function(e,o){var a=(0,m.Z)({props:e,name:"MuiFormControlLabel"}),n=a.className,p=a.componentsProps,b=void 0===p?{}:p,h=a.control,x=a.disabled,y=a.disableTypography,P=a.label,C=a.labelPlacement,R=void 0===C?"end":C,w=(0,t.Z)(a,g),F=(0,d.Z)(),S=x;"undefined"===typeof S&&"undefined"!==typeof h.props.disabled&&(S=h.props.disabled),"undefined"===typeof S&&F&&(S=F.disabled);var z={disabled:S};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof h.props[e]&&"undefined"!==typeof a[e]&&(z[e]=a[e])}));var B=(0,v.Z)({props:a,muiFormControl:F,states:["error"]}),I=(0,r.Z)({},a,{disabled:S,labelPlacement:R,error:B.error}),j=function(e){var o=e.classes,a=e.disabled,n=e.labelPlacement,t=e.error,r={root:["root",a&&"disabled","labelPlacement".concat((0,u.Z)(n)),t&&"error"],label:["label",a&&"disabled"]};return(0,i.Z)(r,f,o)}(I),L=P;return null==L||L.type===s.Z||y||(L=(0,Z.jsx)(s.Z,(0,r.Z)({component:"span",className:j.label},b.typography,{children:L}))),(0,Z.jsxs)(k,(0,r.Z)({className:(0,c.Z)(j.root,n),ownerState:I,ref:o},w,{children:[l.cloneElement(h,z),L]}))}))}}]);