(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[37],{"08kA":function(e,n,t){"use strict"
var r=t("s4NR"),o=t("CxY0"),a=t("U6jy")
function i(e){return e&&e.rel}function d(e,n){function t(t){e[t]=a(n,{rel:t})}n.rel.split(/\s+/).forEach(t)
return e}function c(e,n){var t=n.match(/\s*(.+)\s*=\s*"?([^"]+)"?/)
t&&(e[t[1]]=t[2])
return e}function s(e){try{var n=e.match(/<?([^>]*)>(.*)/),t=n[1],i=n[2].split(";"),d=o.parse(t),s=r.parse(d.query)
i.shift()
var l=i.reduce(c,{})
l=a(s,l)
l.url=t
return l}catch(e){return null}}e.exports=function(e){if(!e)return null
return e.split(/,\s*</).map(s).filter(i).reduce(d,{})}},"4Ogu":function(e,n,t){"use strict"
t.d(n,"a",(function(){return u}))
var r=t("VTBJ")
var o=t("ouhR")
var a=t.n(o)
var i=t("zidk")
var d=t("08kA")
var c=t.n(d)
var s=t("etQE")
function l(e){let n=e.path,t=e.params
const r=a.a.param(t)
if(!r.length)return n
return"".concat(n,"?").concat(r)}async function u(e){let n=e.path,t=e.method,o=void 0===t?"GET":t,a=e.headers,d=void 0===a?{}:a,u=e.params,f=void 0===u?{}:u,v=e.body,b=e.fetchOpts,p=void 0===b?{}:b
const h=Object(r["a"])({},s["d"])
h.headers["X-CSRF-Token"]=Object(i["a"])("_csrf_token")
if(v&&"string"!==typeof v){v=JSON.stringify(v)
h.headers["Content-Type"]="application/json"}Object.assign(h.headers,d)
Object.assign(h,p)
const g=l({path:n,params:f})
const m=await fetch(g,Object(r["a"])({body:v,method:o},h))
if(!m.ok){const e=new Error("doFetchApi received a bad response: ".concat(m.status," ").concat(m.statusText))
e.response=m
throw e}const O=c()(m.headers.get("Link"))
const j=await m.text()
const x=j.length>0?JSON.parse(j):null
return{json:x,response:m,link:O}}},BxIY:function(e,n,t){"use strict"
var r=t("An8g")
var o=t("Ff2n")
var a=t("pQTu")
var i=t("m0r6")
Object(i["a"])(JSON.parse('{"de":{"close_d634289d":"Schließen"},"hu":{"close_d634289d":"Bezárás"}}'))
t("jQeR")
t("0sPK")
var d=a["default"].scoped("canvas_modal")
var c=t("q1tI")
var s=t.n(c)
var l=t("17x9")
var u=t.n(l)
var f=t("Mmr1")
var v=t("S4Kx")
var b=t("TstA")
var p=t("msMH")
var h=t("rePB")
var g=t("1OyB")
var m=t("vuIU")
var O=t("md7G")
var j=t("foSv")
var x=t("Ji7U")
var _=t("TSYQ")
var y=t.n(_)
var k=t("MicT")
var U=t("dpqJ")
var G=t("AdN2")
var w=t("4Awi")
var E=t("II2N")
var C=t("jtGx")
var B=t("9yTY")
var M=t("M4Ft")
var R=t("XQb/")
var D=t("3Zzb")
var S=t("J2CL")
var T=t("oXx0")
var q=t("ysUD")
var N=function(e){var n=e.colors,t=e.spacing
return{background:n.backgroundLightest,borderColor:n.borderMedium,padding:t.medium,inverseBackground:n.backgroundDarkest,inverseBorderColor:n.backgroundDarkest}}
var z,F,I,L,P
var A={componentId:"cDMBL",template:function(e){return"\n\n.cDMBL_bGBk{-webkit-padding-end:".concat(e.padding||"inherit",";-webkit-padding-start:").concat(e.padding||"inherit",";background:").concat(e.background||"inherit",";border-bottom-color:").concat(e.borderColor||"inherit",";border-bottom-style:solid;border-bottom-width:0.0625rem;box-sizing:border-box;flex:0 0 auto;padding:").concat(e.padding||"inherit",";padding-inline-end:").concat(e.padding||"inherit",";padding-inline-start:").concat(e.padding||"inherit","}\n\n[dir=ltr] .cDMBL_bGBk{padding-left:").concat(e.padding||"inherit",";padding-right:").concat(e.padding||"inherit","}\n\n[dir=rtl] .cDMBL_bGBk{padding-left:").concat(e.padding||"inherit",";padding-right:").concat(e.padding||"inherit","}\n\n.cDMBL_enfx{background:").concat(e.inverseBackground||"inherit",";border-bottom-color:").concat(e.inverseBorderColor||"inherit","}\n\n.cDMBL_ssMr{-webkit-padding-end:calc(").concat(e.padding||"inherit","*2 + 1em);padding-inline-end:calc(").concat(e.padding||"inherit","*2 + 1em)}\n\n[dir=ltr] .cDMBL_ssMr{padding-right:calc(").concat(e.padding||"inherit","*2 + 1em)}\n\n[dir=rtl] .cDMBL_ssMr{padding-left:calc(").concat(e.padding||"inherit","*2 + 1em)}")},root:"cDMBL_bGBk",inverse:"cDMBL_enfx",withCloseButton:"cDMBL_ssMr"}
var Q=(z=Object(T["a"])(),F=Object(S["themeable"])(N,A),z(I=F(I=(P=L=function(e){Object(x["a"])(n,e)
function n(){Object(g["a"])(this,n)
return Object(O["a"])(this,Object(j["a"])(n).apply(this,arguments))}Object(m["a"])(n,[{key:"render",value:function(){var e
var n=this.props,t=n.children,r=n.variant,a=Object(o["a"])(n,["children","variant"])
var i=false
s.a.Children.forEach(t,(function(e){e&&Object(w["a"])(e,[f["a"]])&&(i=true)}))
var d=(e={},Object(h["a"])(e,A.root,true),Object(h["a"])(e,A.inverse,"inverse"===r),Object(h["a"])(e,A.withCloseButton,true===i),e)
return s.a.createElement("div",Object.assign({className:y()(d)},Object(C["b"])(a)),t)}}])
n.displayName="ModalHeader"
return n}(c["Component"]),L.propTypes={children:u.a.node,variant:u.a.oneOf(["default","inverse"])},L.defaultProps={children:null,variant:"default"},P))||I)||I)
t("DEX3")
var W=t("n12J")
var J=function(e){var n=e.colors
return{inverseBackground:n.backgroundSecondary}}
var H,X,Y,V,K
var Z={componentId:"butxX",template:function(e){return"\n\n.butxX_bGBk{box-sizing:border-box;flex:1 1 auto;overflow-y:auto}\n\n.butxX_bGBk:focus{outline:none}\n\n.butxX_enfx{background:".concat(e.inverseBackground||"inherit","}")},root:"butxX_bGBk",inverse:"butxX_enfx"}
var $=(H=Object(T["a"])(),X=Object(S["themeable"])(J,Z),H(Y=X(Y=(K=V=function(e){Object(x["a"])(n,e)
function n(){Object(g["a"])(this,n)
return Object(O["a"])(this,Object(j["a"])(n).apply(this,arguments))}Object(m["a"])(n,[{key:"render",value:function(){var e
var t=this.props,r=t.as,a=t.elementRef,i=t.overflow,d=t.variant,c=t.padding,l=t.children,u=Object(o["a"])(t,["as","elementRef","overflow","variant","padding","children"])
var f=W["a"].omitViewProps(u,n)
var v=y()((e={},Object(h["a"])(e,Z.root,true),Object(h["a"])(e,Z.inverse,"inverse"===d),e))
var b="fit"===i
M["a"]
return s.a.createElement(W["a"],Object.assign({},f,{display:"block",width:b?"100%":null,height:b?"100%":null,elementRef:a,as:r,className:v,padding:c,tabIndex:"-1"}),l)}}])
n.displayName="ModalBody"
return n}(c["Component"]),V.propTypes={children:u.a.node,padding:S["ThemeablePropTypes"].spacing,elementRef:u.a.func,as:u.a.elementType,variant:u.a.oneOf(["default","inverse"]),overflow:u.a.oneOf(["scroll","fit"])},V.defaultProps={padding:"medium",as:"div",variant:"default",children:null,elementRef:void 0,overflow:void 0},K))||Y)||Y)
var ee=function(e){var n=e.colors,t=e.borders,r=e.spacing
return{background:n.backgroundLight,borderColor:n.borderMedium,borderWidth:t.widthSmall,borderRadius:t.radiusMedium,padding:r.small,inverseBackground:n.backgroundDarkest,inverseBorderColor:n.borderDarkest}}
var ne,te,re,oe,ae
var ie={componentId:"dNoYT",template:function(e){return"\n\n.dNoYT_bGBk{background:".concat(e.background||"inherit",";border-bottom-left-radius:").concat(e.borderRadius||"inherit",";border-bottom-right-radius:").concat(e.borderRadius||"inherit",";border-top:").concat(e.borderWidth||"inherit"," solid ").concat(e.borderColor||"inherit",";box-sizing:border-box;display:flex;flex:0 0 auto;justify-content:flex-end;padding:").concat(e.padding||"inherit","}\n\n.dNoYT_enfx{background:").concat(e.inverseBackground||"inherit",";border-top:").concat(e.borderWidth||"inherit"," solid ").concat(e.inverseBorderColor||"inherit","}")},root:"dNoYT_bGBk",inverse:"dNoYT_enfx"}
var de=(ne=Object(T["a"])(),te=Object(S["themeable"])(ee,ie),ne(re=te(re=(ae=oe=function(e){Object(x["a"])(n,e)
function n(){Object(g["a"])(this,n)
return Object(O["a"])(this,Object(j["a"])(n).apply(this,arguments))}Object(m["a"])(n,[{key:"render",value:function(){var e
var n=this.props,t=n.children,r=n.variant,a=Object(o["a"])(n,["children","variant"])
var i=(e={},Object(h["a"])(e,ie.root,true),Object(h["a"])(e,ie.inverse,"inverse"===r),e)
return s.a.createElement("div",Object.assign({className:y()(i)},Object(C["b"])(a)),t)}}])
n.displayName="ModalFooter"
return n}(c["Component"]),oe.propTypes={children:u.a.node,variant:u.a.oneOf(["default","inverse"])},oe.defaultProps={variant:"default",children:null},ae))||re)||re)
var ce=function(e){var n=e.colors,t=e.borders,r=e.breakpoints,o=e.shadows,a=e.stacking,i=e.typography
return{fontFamily:i.fontFamily,textColor:n.textDarkest,background:n.backgroundLightest,borderColor:n.borderMedium,borderRadius:t.radiusMedium,inverseBackground:n.backgroundBrandSecondary,inverseTextColor:n.textLightest,autoMinWidth:r.xSmall,smallMaxWidth:r.small,mediumMaxWidth:r.medium,largeMaxWidth:r.large,boxShadow:o.depth3,zIndex:a.topmost}}
var se,le,ue,fe,ve
var be={componentId:"deUoG",template:function(e){return"\n\n.deUoG_bGBk{background:".concat(e.background||"inherit",";border:0.0625rem solid ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";box-shadow:").concat(e.boxShadow||"inherit",";box-sizing:border-box;color:").concat(e.textColor||"inherit",";display:flex;flex-direction:column;font-family:").concat(e.fontFamily||"inherit",";min-width:1px;position:relative}\n\n.deUoG_bGBk.deUoG_eoSs{display:block;overflow:auto}\n\n.deUoG_enfx{background:").concat(e.inverseBackground||"inherit",";color:").concat(e.inverseTextColor||"inherit","}\n\n.deUoG_uUeq,.deUoG_cMDj,.deUoG_ycrn,.deUoG_doqw{max-height:95%;max-width:95%}\n\n.deUoG_uUeq.deUoG_eoSs,.deUoG_cMDj.deUoG_eoSs,.deUoG_ycrn.deUoG_eoSs,.deUoG_doqw.deUoG_eoSs{max-height:none}\n\n.deUoG_uUeq.deUoG_fHQo:not(.deUoG_eoSs),.deUoG_cMDj.deUoG_fHQo:not(.deUoG_eoSs),.deUoG_ycrn.deUoG_fHQo:not(.deUoG_eoSs),.deUoG_doqw.deUoG_fHQo:not(.deUoG_eoSs){transform:translateY(2.5%)}\n\n.deUoG_uUeq{flex:0 1 auto;min-width:").concat(e.autoMinWidth||"inherit","}\n\n.deUoG_doqw{flex:0 1 ").concat(e.smallMaxWidth||"inherit","}\n\n.deUoG_ycrn{flex:0 1 ").concat(e.mediumMaxWidth||"inherit","}\n\n.deUoG_cMDj{flex:0 1 ").concat(e.largeMaxWidth||"inherit","}\n\n.deUoG_cMOR{border:none;border-radius:0;box-shadow:none;flex:1;height:100%;width:100%}\n\n.deUoG_VVEf{align-items:flex-start;bottom:0;box-sizing:border-box;display:flex;justify-content:center;left:0;overflow:auto;right:0;top:0;z-index:").concat(e.zIndex||"inherit","}\n\n.deUoG_ekLq{position:fixed}\n\n.deUoG_fMis{position:absolute}\n\n.deUoG_fuFB{display:block;height:100%;position:relative;width:100%}")},root:"deUoG_bGBk",ie11:"deUoG_eoSs",inverse:"deUoG_enfx",auto:"deUoG_uUeq",large:"deUoG_cMDj",medium:"deUoG_ycrn",small:"deUoG_doqw","overflow--fit":"deUoG_fHQo",fullscreen:"deUoG_cMOR",fullscreenLayout:"deUoG_VVEf","fullscreenLayout--window":"deUoG_ekLq","fullscreenLayout--parent":"deUoG_fMis",constrainContext:"deUoG_fuFB"}
var pe=(se=Object(T["a"])(),le=Object(S["themeable"])(ce,be),se(ue=le(ue=(ve=fe=function(e){Object(x["a"])(n,e)
function n(e){var t
Object(g["a"])(this,n)
t=Object(O["a"])(this,Object(j["a"])(n).call(this,e))
t.handlePortalOpen=function(e){t.DOMNode=e
e&&t.applyTheme(e)}
t.handleTransitionExited=function(){t.setState({transitioning:false})}
t.contentRef=function(e){t._content=e
"function"===typeof t.props.contentRef&&t.props.contentRef(e)}
t.state={transitioning:false}
return t}Object(m["a"])(n,[{key:"componentDidUpdate",value:function(e){e.open&&!this.props.open&&this.setState({transitioning:null!==e.transition})}},{key:"renderChildren",value:function(){var e=this.props,n=e.children,t=e.variant,r=e.overflow
return c["Children"].map(n,(function(e){if(!e)return
return Object(w["a"])(e,[$])?Object(E["a"])(e,{variant:t,overflow:e.props.overflow||r}):Object(E["a"])(e,{variant:t})}))}},{key:"renderDialog",value:function(e){var n
var t=this.props,r=t.onDismiss,o=t.label,a=t.shouldCloseOnDocumentClick,i=t.shouldReturnFocus,d=t.liveRegion,c=t.size,l=t.constrain,u=t.as
var f=s.a.createElement(k["a"],Object.assign({},Object(C["b"])(e),{as:u,open:true,label:o,defaultFocusElement:this.defaultFocusElement,shouldCloseOnDocumentClick:a,shouldCloseOnEscape:true,shouldContainFocus:true,shouldReturnFocus:i,liveRegion:d,onDismiss:r,className:y()((n={},Object(h["a"])(n,be.root,true),Object(h["a"])(n,be[c],true),Object(h["a"])(n,be.inverse,"inverse"===this.props.variant),Object(h["a"])(n,be["overflow--fit"],"fit"===this.props.overflow),Object(h["a"])(n,be.ie11,this.ie11),n)),ref:this.contentRef}),this.renderChildren())
if("fullscreen"===c){var v
return s.a.createElement("span",{className:y()((v={},Object(h["a"])(v,be.fullscreenLayout,true),Object(h["a"])(v,be["fullscreenLayout--".concat(l)],true),v))},f)}return s.a.createElement(q["a"],{placement:this.maskPlacement,fullscreen:"window"===l},f)}},{key:"render",value:function(){var e=this.props,n=e.open,t=e.onOpen,r=e.onClose,a=e.mountNode,i=e.insertAt,d=e.transition,c=e.onEnter,l=e.onEntering,u=e.onEntered,f=e.onExit,v=e.onExiting,b=e.onExited,p=e.constrain,h=(e.overflow,Object(o["a"])(e,["open","onOpen","onClose","mountNode","insertAt","transition","onEnter","onEntering","onEntered","onExit","onExiting","onExited","constrain","overflow"]))
var g=n||this.state.transitioning
return s.a.createElement(D["a"],{mountNode:a,insertAt:i,open:g,onOpen:Object(B["a"])(this.handlePortalOpen,t),onClose:r},g&&s.a.createElement(R["a"],{in:n,transitionOnMount:true,unmountOnExit:true,type:d,onEnter:c,onEntering:l,onEntered:u,onExit:f,onExiting:v,onExited:Object(B["a"])(this.handleTransitionExited,b),theme:this.ie11?{duration:"0s"}:null},"parent"===p?s.a.createElement("span",{className:be.constrainContext},this.renderDialog(h)):this.renderDialog(h)))}},{key:"defaultFocusElement",get:function(){return this.props.defaultFocusElement}},{key:"DOMNode",get:function(){return this._DOMNode},set:function(e){this._DOMNode=e}},{key:"maskPlacement",get:function(){return M["a"]?"top":"fit"===this.props.overflow?"stretch":"center"}}])
n.displayName="Modal"
return n}(c["Component"]),fe.propTypes={label:u.a.string.isRequired,children:U["a"].enforceOrder([Q,$,de],[Q,$],[$,de],[$]),as:u.a.elementType,size:u.a.oneOf(["auto","small","medium","large","fullscreen"]),variant:u.a.oneOf(["default","inverse"]),open:u.a.bool,defaultFocusElement:u.a.oneOfType([u.a.element,u.a.func]),shouldReturnFocus:u.a.bool,shouldCloseOnDocumentClick:u.a.bool,onOpen:u.a.func,onClose:u.a.func,onDismiss:u.a.func,contentRef:u.a.func,mountNode:u.a.oneOfType([G["a"],u.a.func]),insertAt:u.a.oneOf(["bottom","top"]),liveRegion:u.a.oneOfType([u.a.arrayOf(u.a.element),u.a.element,u.a.func]),transition:R["a"].propTypes.type,onEnter:u.a.func,onEntering:u.a.func,onEntered:u.a.func,onExit:u.a.func,onExiting:u.a.func,onExited:u.a.func,constrain:u.a.oneOf(["window","parent"]),overflow:u.a.oneOf(["scroll","fit"])},fe.defaultProps={open:false,size:"auto",variant:"default",transition:"fade",onOpen:function(e){},onClose:function(e){},onDismiss:function(e){},onEnter:function(){},onEntering:function(){},onEntered:function(){},onExit:function(){},onExiting:function(){},onExited:function(){},as:void 0,mountNode:null,insertAt:"bottom",liveRegion:null,contentRef:function(e){},shouldCloseOnDocumentClick:true,shouldReturnFocus:true,defaultFocusElement:null,children:null,constrain:"window",overflow:"scroll"},fe.Header=Q,fe.Body=$,fe.Footer=de,ve))||ue)||ue)
var he=t("p9+C")
var ge=t("z3Sh")
var me=t("RtEy")
var Oe=t.n(me)
t.d(n,"a",(function(){return je}))
je.defaultProps={padding:"small",errorImageUrl:Oe.a,footer:null,closeButtonSize:"small"}
function je(e){let n=e.padding,t=e.errorSubject,a=e.errorCategory,i=e.errorImageUrl,c=e.label,l=e.onDismiss,u=e.children,h=e.footer,g=e.closeButtonSize,m=Object(o["a"])(e,["padding","errorSubject","errorCategory","errorImageUrl","label","onDismiss","children","footer","closeButtonSize"])
return s.a.createElement(pe,Object.assign({label:c,onDismiss:l},m),Object(r["a"])(pe.Header,{},void 0,Object(r["a"])(b["a"],{},void 0,Object(r["a"])(b["a"].Item,{grow:true},void 0,Object(r["a"])(p["a"],{},void 0,c)),Object(r["a"])(b["a"].Item,{},void 0,Object(r["a"])(f["a"],{onClick:l,size:g},void 0,d.t("Close"))))),Object(r["a"])(pe.Body,{padding:n},void 0,Object(r["a"])(v["a"],{as:"div",height:"100%"},void 0,Object(r["a"])(he["a"],{errorComponent:Object(r["a"])(ge["a"],{imageUrl:i,errorSubject:t,errorCategory:a})},void 0,u))),Object(r["a"])(pe.Footer,{},void 0,"function"===typeof h?h():h))}},EUQ6:function(e,n,t){"use strict"
t.d(n,"a",(function(){return a}))
var r=t("17x9")
const o=Object(r["shape"])({id:r["string"].isRequired,display_name:r["string"].isRequired,avatar_image_url:r["string"]})
n["b"]=o
Object(r["shape"])({id:r["string"].isRequired,name:r["string"].isRequired,avatar_url:r["string"],email:r["string"]})
const a=Object(r["shape"])({id:r["string"].isRequired,name:r["string"].isRequired,avatar_image_url:r["string"],html_url:r["string"].isRequired})},U6jy:function(e,n){e.exports=r
var t=Object.prototype.hasOwnProperty
function r(){var e={}
for(var n=0;n<arguments.length;n++){var r=arguments[n]
for(var o in r)t.call(r,o)&&(e[o]=r[o])}return e}},eCn1:function(e,n,t){"use strict"
var r=t("An8g")
var o=t("Ff2n")
var a=t("pQTu")
var i=t("m0r6")
Object(i["a"])(JSON.parse('{"de":{"close_d634289d":"Schließen"},"hu":{"close_d634289d":"Bezárás"}}'))
t("jQeR")
t("0sPK")
var d=a["default"].scoped("tray")
var c=t("q1tI")
var s=t.n(c)
t("17x9")
var l=t("Mmr1")
var u=t("TstA")
var f=t("msMH")
var v=t("7Hz5")
var b=t("p9+C")
var p=t("z3Sh")
var h=t("RtEy")
var g=t.n(h)
t.d(n,"a",(function(){return m}))
m.defaultProps={padding:"small",errorImageUrl:g.a}
function m(e){let n=e.padding,t=e.errorSubject,a=e.errorCategory,i=e.errorImageUrl,c=e.label,h=e.onDismiss,g=e.children,m=Object(o["a"])(e,["padding","errorSubject","errorCategory","errorImageUrl","label","onDismiss","children"])
return s.a.createElement(v["a"],Object.assign({label:c,onDismiss:h},m),Object(r["a"])("div",{style:{display:"flex",flexDirection:"column",height:"100vh"}},void 0,Object(r["a"])(u["a"].Item,{padding:"small medium"},void 0,Object(r["a"])(u["a"],{},void 0,Object(r["a"])(u["a"].Item,{grow:true,shrink:true},void 0,Object(r["a"])(f["a"],{ellipsis:true,level:"h3",as:"h2"},void 0,c)),Object(r["a"])(u["a"].Item,{},void 0,Object(r["a"])(l["a"],{onClick:h,size:"small"},void 0,d.t("Close"))))),Object(r["a"])("div",{style:{display:"flex",flexDirection:"column",flexGrow:1,padding:n}},void 0,Object(r["a"])(b["a"],{errorComponent:Object(r["a"])(p["a"],{imageUrl:i,errorSubject:t,errorCategory:a})},void 0,g))))}},qBwj:function(e,n,t){"use strict"
var r=t("17x9")
var o=t("EUQ6")
const a=Object(r["shape"])({id:r["string"],display_name:r["string"],url:r["string"]})
var i=a
const d=Object(r["shape"])({id:r["string"].isRequired,progress_url:r["string"],user_id:r["string"],workflow_state:Object(r["oneOf"])(["created","exporting","exported","failed"]),attachment:i})
var c=d
const s=["assignment","discussion_topic","page","quiz","module","module_item"]
Object(r["shape"])({id:r["string"].isRequired,name:r["string"].isRequired,content_type:Object(r["oneOf"])(s).isRequired,created_at:r["string"].isRequired,updated_at:r["string"].isRequired,read_state:r["string"].isRequired,sender:o["b"].isRequired,content_export:c})},xGaD:function(e,n,t){"use strict"
var r=t("An8g")
var o=t("Ff2n")
var a=t("pQTu")
var i=t("m0r6")
Object(i["a"])(JSON.parse('{"de":{"loading_25990131":"Wird geladen ..."},"hu":{"loading_25990131":"Töltődik..."}}'))
t("jQeR")
t("0sPK")
var d=a["default"].scoped("canvas_lazy_tray")
var c=t("q1tI")
var s=t.n(c)
var l=t("eCn1")
var u=t("VTJ5")
var f=t("S4Kx")
t.d(n,"a",(function(){return v}))
function v(e){let n=e.children,t=Object(o["a"])(e,["children"])
const a=Object(r["a"])(f["a"],{as:"div",textAlign:"center"},void 0,Object(r["a"])(u["a"],{renderTitle:d.t("Loading...")}))
return s.a.createElement(l["a"],t,Object(r["a"])(c["Suspense"],{fallback:a},void 0,n))}}}])

//# sourceMappingURL=37-c-84534d3c44.js.map