(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[60,581],{"/J48":function(e,t,i){"use strict"
i.d(t,"a",(function(){return b}))
var n=i("1OyB")
var r=i("vuIU")
var a=i("md7G")
var o=i("foSv")
var s=i("Ji7U")
var c=i("q1tI")
var l=i.n(c)
var d=i("17x9")
var u=i.n(d)
var _=i("nAyT")
var g=i("GTSS")
var f,h,p,m
var b=(f=Object(_["a"])("7.0.0",null,"Use RadioInput from ui-radio-input instead."),f(h=(m=p=function(e){Object(s["a"])(t,e)
function t(){var e
var i
Object(n["a"])(this,t)
for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c]
i=Object(a["a"])(this,(e=Object(o["a"])(t)).call.apply(e,[this].concat(s)))
i._radioInput=null
return i}Object(r["a"])(t,[{key:"focus",value:function(){this._radioInput&&this._radioInput.focus()}},{key:"render",value:function(){var e=this
return l.a.createElement(g["a"],Object.assign({ref:function(t){e._radioInput=t}},this.props))}},{key:"id",get:function(){return this._radioInput&&this._radioInput.id}},{key:"focused",get:function(){return this._radioInput&&this._radioInput.focused}},{key:"checked",get:function(){return this._radioInput&&this._radioInput.checked}}])
t.displayName="RadioInput"
return t}(c["Component"]),p.propTypes={label:u.a.node.isRequired,value:u.a.oneOfType([u.a.string,u.a.number]),id:u.a.string,name:u.a.string,checked:u.a.bool,disabled:u.a.bool,readOnly:u.a.bool,variant:u.a.oneOf(["simple","toggle"]),size:u.a.oneOf(["small","medium","large"]),context:u.a.oneOf(["success","warning","danger","off"]),inline:u.a.bool,onClick:u.a.func,onChange:u.a.func},p.defaultProps={onClick:function(e){},onChange:function(e){},variant:"simple",size:"medium",disabled:false,inline:false,context:"success",readOnly:false,checked:void 0,id:void 0,name:void 0,value:void 0},m))||h)},"7LJr":function(e,t,i){"use strict"
var n=i("ouhR")
var r=i.n(n)
r.a.fn.loadingImg=function(e){if(!this||0===this.length)return this
const t=this.filter(":first")
let i
if("hide"===e||"remove"===e){t.children(".loading_image").remove()
i=t.data("loading_images")||[]
i.forEach(e=>{e&&e.remove()})
t.data("loading_images",null)
return this}if("remove_once"===e){t.children(".loading_image").remove()
i=t.data("loading_images")||[]
const e=i.pop()
e&&e.remove()
t.data("loading_images",i)
return this}"register_image"==e&&3==arguments.length&&(r.a.fn.loadingImg.image_files[arguments[1]]=arguments[2])
e=r.a.extend({},r.a.fn.loadingImg.defaults,e)
let n=r.a.fn.loadingImg.image_files.normal
e.image_size&&r.a.fn.loadingImg.image_files[e.image_size]&&(n=r.a.fn.loadingImg.image_files[e.image_size])
e.paddingTop&&(e.vertical=e.paddingTop)
let a=0
if(e.vertical)if("top"==e.vertical);else if("bottom"==e.vertical)a=t.outerHeight()
else if("middle"==e.vertical)a=t.outerHeight()/2-n.height/2
else{a=parseInt(e.vertical,10)
isNaN(a)&&(a=0)}let o=0
if(e.horizontal)if("left"==e.horizontal);else if("right"==e.horizontal)o=t.outerWidth()-n.width
else if("middle"==e.horizontal)o=t.outerWidth()/2-n.width/2
else{o=parseInt(e.horizontal,10)
isNaN(o)&&(o=0)}const s=t.zIndex()+1
const c=r()(document.createElement("div")).addClass("loading_image_holder")
const l=r()(document.createElement("img")).attr("src",n.url)
c.append(l)
i=t.data("loading_images")||[]
i.push(c)
t.data("loading_images",i)
if(t.css("position")&&"static"!=t.css("position")){c.css({zIndex:s,position:"absolute",top:a,left:o})
t.append(c)}else{const i=t.offset()
let n=i.top,l=i.left
e.vertical&&(n+=a)
e.horizontal&&(l+=o)
c.css({zIndex:s,position:"absolute",top:n,left:l})
r()("body").append(c)}return r()(this)}
r.a.fn.loadingImg.defaults={paddingTop:0,image_size:"normal",vertical:0,horizontal:0}
r.a.fn.loadingImg.image_files={normal:{url:"/images/ajax-loader.gif",width:32,height:32},small:{url:"/images/ajax-loader-small.gif",width:16,height:16}}
r.a.fn.loadingImage=r.a.fn.loadingImg},GTSS:function(e,t,i){"use strict"
var n=i("rePB")
var r=i("1OyB")
var a=i("vuIU")
var o=i("md7G")
var s=i("foSv")
var c=i("Ji7U")
var l=i("q1tI")
var d=i.n(l)
var u=i("17x9")
var _=i.n(u)
var g=i("TSYQ")
var f=i.n(g)
var h=i("BTe1")
var p=i("J2CL")
var m=i("oXx0")
var b=i("jtGx")
var v=i("/UXv")
function k(e){var t=e.spacing,i=e.borders,n=e.colors,r=e.forms,a=e.shadows,o=e.typography
return{labelColor:n.textDarkest,labelFontFamily:o.fontFamily,labelFontWeight:o.fontWeightNormal,labelLineHeight:o.lineHeightCondensed,background:n.backgroundLightest,borderColor:n.borderDarkest,hoverBorderColor:n.borderDarkest,controlSize:"0.1875rem",focusBorderColor:n.borderBrand,focusBorderWidth:i.widthMedium,focusBorderStyle:i.style,simpleFacadeSmallSize:"1rem",simpleFacadeMediumSize:"1.25rem",simpleFacadeLargeSize:"1.75rem",simpleCheckedInsetSmall:"0.1875rem",simpleCheckedInsetMedium:"0.25rem",simpleCheckedInsetLarge:"0.375rem",simpleFontSizeSmall:o.fontSizeSmall,simpleFontSizeMedium:o.fontSizeMedium,simpleFontSizeLarge:o.fontSizeLarge,simpleFacadeMarginEnd:t.xSmall,toggleBorderRadius:i.radiusSmall,toggleBorderWidth:i.widthLarge,toggleBackgroundSuccess:n.backgroundSuccess,toggleBackgroundOff:n.backgroundDark,toggleBackgroundDanger:n.backgroundDanger,toggleBackgroundWarning:n.backgroundWarning,toggleHandleText:n.textLightest,toggleSmallHeight:r.inputHeightSmall,toggleMediumHeight:r.inputHeightMedium,toggleLargeHeight:r.inputHeightLarge,toggleShadow:a.depth1,toggleSmallFontSize:o.fontSizeXSmall,toggleMediumFontSize:o.fontSizeSmall,toggleLargeFontSize:o.fontSizeMedium}}k["canvas-a11y"]=k["canvas-high-contrast"]=function(e){var t=e.colors
return{toggleBackgroundOff:t.backgroundDarkest}}
k.canvas=function(e){return{focusBorderColor:e["ic-brand-primary"],borderColor:e["ic-brand-font-color-dark"],hoverBorderColor:e["ic-brand-font-color-dark"],labelColor:e["ic-brand-font-color-dark"]}}
i.d(t,"a",(function(){return S}))
var y,C,w,N,x
var E={componentId:"fNHEA",template:function(e){return"\n\n.fNHEA_bGBk{position:relative;width:100%}\n\n.fNHEA_bGBk:hover{cursor:default}\n\n.fNHEA_bOnW{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;direction:inherit;display:inline;display:block;empty-cells:show;float:none;font-family:serif;font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align:start;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n[dir=ltr] .fNHEA_bOnW{text-align:left}\n\n[dir=rtl] .fNHEA_bOnW{text-align:right}\n\n.fNHEA_cwos,input.fNHEA_cwos[type=radio]{font-size:inherit;left:0;line-height:inherit;margin:0;opacity:0.0001;padding:0;position:absolute;top:0;width:auto}\n\n.fNHEA_ywdX{opacity:0.5}\n\n.fNHEA_ywdX:hover{cursor:not-allowed}\n\n.fNHEA_eXrk{display:inline-block;vertical-align:middle;width:auto}\n\n.fNHEA_blJt{color:".concat(e.labelColor||"inherit",";flex:1 1 auto;font-family:").concat(e.labelFontFamily||"inherit",";font-weight:").concat(e.labelFontWeight||"inherit",";line-height:").concat(e.labelLineHeight||"inherit","}\n\n.fNHEA_cAug .fNHEA_bOnW{align-items:flex-start;display:flex}\n\n.fNHEA_cAug .fNHEA_cSXm{-webkit-margin-end:").concat(e.simpleFacadeMarginEnd||"inherit",";-webkit-margin-start:0;background:").concat(e.background||"inherit",";border:0.125rem solid ").concat(e.borderColor||"inherit",";border-radius:100%;box-sizing:border-box;display:block;flex-shrink:0;margin-inline-end:").concat(e.simpleFacadeMarginEnd||"inherit",";margin-inline-start:0;min-width:1rem;position:relative;transition:all 0.2s ease-out}\n\n[dir=ltr] .fNHEA_cAug .fNHEA_cSXm{margin-left:0;margin-right:").concat(e.simpleFacadeMarginEnd||"inherit","}\n\n[dir=rtl] .fNHEA_cAug .fNHEA_cSXm{margin-left:").concat(e.simpleFacadeMarginEnd||"inherit",";margin-right:0}\n\n.fNHEA_cAug .fNHEA_cSXm:before{border:").concat(e.focusBorderWidth||"inherit"," ").concat(e.focusBorderStyle||"inherit"," ").concat(e.focusBorderColor||"inherit",';border-radius:100%;box-sizing:border-box;content:"";height:calc(100% + 0.75rem);left:-0.375rem;opacity:0;pointer-events:none;position:absolute;top:-0.375rem;transform:scale(0.75);transition:all 0.2s;width:calc(100% + 0.75rem)}\n\n.fNHEA_cAug.fNHEA_doqw .fNHEA_cSXm{height:').concat(e.simpleFacadeSmallSize||"inherit",";width:").concat(e.simpleFacadeSmallSize||"inherit","}\n\n.fNHEA_cAug.fNHEA_doqw .fNHEA_blJt{font-size:").concat(e.simpleFontSizeSmall||"inherit","}\n\n.fNHEA_cAug.fNHEA_doqw .fNHEA_cwos:checked+.fNHEA_bOnW .fNHEA_cSXm{box-shadow:inset 0 0 0 ").concat(e.simpleCheckedInsetSmall||"inherit"," ").concat(e.hoverBorderColor||"inherit","}\n\n.fNHEA_cAug.fNHEA_ycrn .fNHEA_cSXm{height:").concat(e.simpleFacadeMediumSize||"inherit",";width:").concat(e.simpleFacadeMediumSize||"inherit","}\n\n.fNHEA_cAug.fNHEA_ycrn .fNHEA_blJt{font-size:").concat(e.simpleFontSizeMedium||"inherit","}\n\n.fNHEA_cAug.fNHEA_ycrn .fNHEA_cwos:checked+.fNHEA_bOnW .fNHEA_cSXm{box-shadow:inset 0 0 0 ").concat(e.simpleCheckedInsetMedium||"inherit"," ").concat(e.hoverBorderColor||"inherit","}\n\n.fNHEA_cAug.fNHEA_cMDj .fNHEA_cSXm{height:").concat(e.simpleFacadeLargeSize||"inherit",";width:").concat(e.simpleFacadeLargeSize||"inherit","}\n\n.fNHEA_cAug.fNHEA_cMDj .fNHEA_blJt{font-size:").concat(e.simpleFontSizeLarge||"inherit","}\n\n.fNHEA_cAug.fNHEA_cMDj .fNHEA_cwos:checked+.fNHEA_bOnW .fNHEA_cSXm{box-shadow:inset 0 0 0 ").concat(e.simpleCheckedInsetLarge||"inherit"," ").concat(e.hoverBorderColor||"inherit","}\n\n.fNHEA_cAug .fNHEA_cwos:hover+.fNHEA_bOnW .fNHEA_cSXm{border-color:").concat(e.hoverBorderColor||"inherit","}\n\n.fNHEA_cAug .fNHEA_cwos:checked+.fNHEA_bOnW .fNHEA_cSXm{background:").concat(e.background||"inherit",";border-color:").concat(e.hoverBorderColor||"inherit",";box-shadow:inset 0 0 0 ").concat(e.controlSize||"inherit"," ").concat(e.hoverBorderColor||"inherit","}\n\n.fNHEA_cAug .fNHEA_cwos:focus+.fNHEA_bOnW .fNHEA_cSXm{background:").concat(e.background||"inherit","}\n\n.fNHEA_cAug .fNHEA_cwos:focus+.fNHEA_bOnW .fNHEA_cSXm:before{opacity:1;transform:scale(1)}\n\n.fNHEA_cjSw .fNHEA_bOnW{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;box-sizing:border-box;display:block;position:relative;user-select:none}\n\n.fNHEA_cjSw .fNHEA_blJt{align-items:center;display:flex;line-height:1;min-width:0.0625rem;overflow:hidden;position:relative;text-overflow:ellipsis;text-transform:uppercase;white-space:nowrap;z-index:1}\n\n.fNHEA_cjSw .fNHEA_cSXm{border-radius:").concat(e.toggleBorderRadius||"inherit",";box-shadow:").concat(e.toggleShadow||"inherit",";display:block;height:100%;left:0;top:0;visibility:hidden;width:100%;z-index:1}\n\n.fNHEA_cjSw .fNHEA_cSXm,.fNHEA_cjSw .fNHEA_cSXm:before{box-sizing:border-box;position:absolute}\n\n.fNHEA_cjSw .fNHEA_cSXm:before{border:").concat(e.focusBorderWidth||"inherit"," ").concat(e.focusBorderStyle||"inherit"," ").concat(e.focusBorderColor||"inherit",";border-radius:calc(").concat(e.toggleBorderRadius||"inherit",' + 0.0625rem);content:"";height:calc(100% + 0.5rem);left:-0.25rem;opacity:0;top:-0.25rem;transform:scale(0.75);transition:all 0.2s;width:calc(100% + 0.5rem)}\n\n.fNHEA_cjSw.fNHEA_cOXX .fNHEA_cSXm{background-color:').concat(e.toggleBackgroundSuccess||"inherit","}\n\n.fNHEA_cjSw.fNHEA_zGXc .fNHEA_cSXm{background-color:").concat(e.toggleBackgroundDanger||"inherit","}\n\n.fNHEA_cjSw.fNHEA_eRqw .fNHEA_cSXm{background-color:").concat(e.toggleBackgroundWarning||"inherit","}\n\n.fNHEA_cjSw.fNHEA_ksNK .fNHEA_cSXm{background-color:").concat(e.toggleBackgroundOff||"inherit","}\n\n.fNHEA_cjSw.fNHEA_doqw .fNHEA_bOnW{height:").concat(e.toggleSmallHeight||"inherit",";padding:0 0.5rem}\n\n.fNHEA_cjSw.fNHEA_doqw .fNHEA_bOnW .fNHEA_blJt{font-size:").concat(e.toggleSmallFontSize||"inherit",";height:").concat(e.toggleSmallHeight||"inherit","}\n\n.fNHEA_cjSw.fNHEA_doqw .fNHEA_bOnW .fNHEA_blJt svg{font-size:calc(").concat(e.toggleSmallFontSize||"inherit"," + 0.375rem)}\n\n.fNHEA_cjSw.fNHEA_ycrn .fNHEA_bOnW{height:").concat(e.toggleMediumHeight||"inherit",";padding:0 0.875rem}\n\n.fNHEA_cjSw.fNHEA_ycrn .fNHEA_bOnW .fNHEA_blJt{font-size:").concat(e.toggleMediumFontSize||"inherit",";height:").concat(e.toggleMediumHeight||"inherit","}\n\n.fNHEA_cjSw.fNHEA_ycrn .fNHEA_bOnW .fNHEA_blJt svg{font-size:calc(").concat(e.toggleMediumFontSize||"inherit"," + 0.375rem)}\n\n.fNHEA_cjSw.fNHEA_cMDj .fNHEA_bOnW{height:").concat(e.toggleLargeHeight||"inherit",";padding:0 1rem}\n\n.fNHEA_cjSw.fNHEA_cMDj .fNHEA_bOnW .fNHEA_blJt{font-size:").concat(e.toggleLargeFontSize||"inherit",";height:").concat(e.toggleLargeHeight||"inherit","}\n\n.fNHEA_cjSw.fNHEA_cMDj .fNHEA_bOnW .fNHEA_blJt svg{font-size:calc(").concat(e.toggleLargeFontSize||"inherit"," + 0.375rem)}\n\n.fNHEA_cjSw .fNHEA_cwos:checked+.fNHEA_bOnW .fNHEA_cSXm{visibility:visible}\n\n.fNHEA_cjSw .fNHEA_cwos:checked+.fNHEA_bOnW .fNHEA_blJt{color:").concat(e.toggleHandleText||"inherit","}\n\n.fNHEA_cjSw .fNHEA_cwos:focus+.fNHEA_bOnW .fNHEA_blJt{text-decoration:underline}\n\n.fNHEA_cjSw .fNHEA_cwos:focus+.fNHEA_bOnW .fNHEA_cSXm:before{opacity:1;transform:scale(1)}")},root:"fNHEA_bGBk",control:"fNHEA_bOnW",input:"fNHEA_cwos",disabled:"fNHEA_ywdX",inline:"fNHEA_eXrk",label:"fNHEA_blJt",simple:"fNHEA_cAug",facade:"fNHEA_cSXm",small:"fNHEA_doqw",medium:"fNHEA_ycrn",large:"fNHEA_cMDj",toggle:"fNHEA_cjSw",success:"fNHEA_cOXX",danger:"fNHEA_zGXc",warning:"fNHEA_eRqw",off:"fNHEA_ksNK"}
var S=(y=Object(m["a"])(),C=Object(p["themeable"])(k,E),y(w=C(w=(x=N=function(e){Object(c["a"])(t,e)
function t(e){var i
Object(r["a"])(this,t)
i=Object(o["a"])(this,Object(s["a"])(t).call(this,e))
i.handleClick=function(e){if(i.props.disabled||i.props.readOnly){e.preventDefault()
return}i.props.onClick(e)}
i.handleChange=function(e){if(i.props.disabled||i.props.readOnly){e.preventDefault()
return}"undefined"===typeof i.props.checked&&i.setState({checked:!i.state.checked})
i.props.onChange(e)}
i.state={}
"undefined"===typeof e.checked&&(i.state.checked=false)
i._defaultId=Object(h["a"])("RadioInput")
return i}Object(a["a"])(t,[{key:"focus",value:function(){this._input.focus()}},{key:"render",value:function(){var e,i=this
var r=this.props,a=r.disabled,o=r.readOnly,s=r.label,c=r.variant,l=r.size,u=r.inline,_=r.context,g=r.value,h=r.name
var p=Object(b["a"])(this.props,t.propTypes)
var m=(e={},Object(n["a"])(e,E.root,true),Object(n["a"])(e,E.disabled,a),Object(n["a"])(e,E[c],true),Object(n["a"])(e,E[_],"toggle"===c),Object(n["a"])(e,E[l],true),Object(n["a"])(e,E["inline"],u),e)
return d.a.createElement("div",{className:f()(m)},d.a.createElement("input",Object.assign({},p,{id:this.id,ref:function(e){i._input=e},value:g,name:h,checked:this.checked,type:"radio",className:E.input,disabled:a||o,"aria-disabled":a||o?"true":null,onChange:this.handleChange,onClick:this.handleClick})),d.a.createElement("label",{className:E.control,htmlFor:this.id},d.a.createElement("span",{className:E.facade,"aria-hidden":"true"}),d.a.createElement("span",{className:E.label},s)))}},{key:"id",get:function(){return this.props.id||this._defaultId}},{key:"focused",get:function(){return Object(v["a"])(this._input)}},{key:"checked",get:function(){return"undefined"===typeof this.props.checked?this.state.checked:this.props.checked}}])
t.displayName="RadioInput"
return t}(l["Component"]),N.propTypes={label:_.a.node.isRequired,value:_.a.oneOfType([_.a.string,_.a.number]),id:_.a.string,name:_.a.string,checked:_.a.bool,disabled:_.a.bool,readOnly:_.a.bool,variant:_.a.oneOf(["simple","toggle"]),size:_.a.oneOf(["small","medium","large"]),context:_.a.oneOf(["success","warning","danger","off"]),inline:_.a.bool,onClick:_.a.func,onChange:_.a.func},N.defaultProps={onClick:function(e){},onChange:function(e){},variant:"simple",size:"medium",disabled:false,inline:false,context:"success",readOnly:false,checked:void 0,id:void 0,name:void 0,value:void 0},x))||w)||w)},T3Mz:function(e,t,i){"use strict"
i.r(t)
var n=i("VTBJ")
var r=i("An8g")
var a=i("q1tI")
var o=i.n(a)
var s=i("i8i4")
var c=i.n(s)
i("17x9")
var l=i("sUqa")
var d=i("5JRF")
var u=i("pQTu")
var _=i("m0r6")
Object(_["a"])(JSON.parse('{"de":{"criterion_5f0b62f8":"Kriterium","duplicate_31cec192":"Duplizieren","find_outcome_746cc57e":"Lernziel suchen","new_criterion_6054bc7f":"Neues Kriterium"},"hu":{"criterion_5f0b62f8":"Kritérium","find_outcome_746cc57e":"Tanulási eredmény keresése","new_criterion_6054bc7f":"Új kritérium"}}'))
i("jQeR")
i("0sPK")
var g=u["default"].scoped("RubricAddCriterionPopover")
var f=i("ouhR")
var h=i.n(f)
var p=Object(r["a"])(l["a"].Separator,{})
class m extends o.a.Component{render(){const e=this.props,t=e.rubric,i=e.duplicateFunction
const n=t.find(".criterion:not(.blank)").map((function(e){const t=h()(this)
const i=t.getTemplateData({textValues:["description"]})
return{index:e,description:i.description}})).toArray()
return Object(r["a"])("span",{},void 0,Object(r["a"])(l["a"],{placement:"bottom",trigger:Object(r["a"])("a",{className:"icon-plus",href:"#"},void 0,g.t("Criterion"))},void 0,Object(r["a"])(l["a"].Item,{id:"add_criterion_button",onClick:()=>h()("#add_criterion_link").trigger("click")},void 0,Object(r["a"])(d["a"],{size:"small",weight:"bold"},void 0,g.t("New Criterion"))),p,Object(r["a"])(l["a"].Group,{id:"criterion_duplicate_menu",label:g.t("Duplicate")},void 0,n.map(e=>Object(r["a"])(l["a"].Item,{onClick:()=>i(t,e.index)},e.index,Object(r["a"])("div",{className:"ellipsis popover_menu_width"},void 0,e.description))))),Object(r["a"])("a",{href:"#",id:"add_learning_outcome_link",className:"icon-search find_outcome_link outcome"},void 0,g.t("Find Outcome")),Object(r["a"])("a",{href:"#",id:"add_criterion_link",className:"hidden icon-plus add_criterion_link"},void 0,g.t("New Criterion")))}}var b=m
var v=i("LvDl")
var k=i.n(v)
Object(_["a"])(JSON.parse('{"de":{"account_rubrics_40c190a8":"Konto-Bewertungsschema","learning_mastery_5fc34276":"Lernleistungsziel"},"hu":{"account_rubrics_40c190a8":"Fiókszintű értékelőtáblák","learning_mastery_5fc34276":"Tanulási jártassági szint"}}'))
var y=u["default"].scoped("RubricManagement")
var C=i("6vK/")
var w=i("agq5")
var N=i("Xx/m")
var x=i("we39")
Object(_["a"])(JSON.parse('{"de":{"account_proficiency_ratings_saved_292d9239":"Konto-Kompetenzeinstufungen gespeichert","add_proficiency_rating_d819f6b8":"Leistungsstand hinzufügen","added_new_proficiency_rating_e30cab8a":"Neue Kompetenzeinstufung hinzugefügt","an_error_occurred_while_loading_account_proficienc_c7d6568b":"Fehler beim Laden der Konto-Kompetenzeinstufungen: %{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"Fehler beim Laden der Konto-Kompetenzeinstufungen","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"Fehler beim Speichern der Konto-Kompetenzeinstufungen","color_a363e1b0":"Farbe","customize_learning_mastery_ratings_4ace142a":"Anpassen Lernerfolgseinstufungen","get_started_b9507525":"Beginnen","invalid_points_8e929c3f":"Ungültige Punkte","loading_bde52856":"Wird geladen","mastery_7ec348b5":"Leistungsziel","missing_required_description_99a99ff":"Erforderliche Beschreibung fehlt","negative_points_fda45730":"Negative Punkte","points_bb475533":"Punkte","points_must_be_less_than_previous_rating_bc627bec":"Die Punktzahl muss geringer sein als bei der vorherigen Bewertung.","proficiency_rating_6346119f":"Kompetenzeinstufung","proficiency_rating_deleted_77827473":"Kompetenzeinstufung gelöscht","proficiency_ratings_2bbabdcd":"Kompetenzeinstufungen","save_learning_mastery_82889d8b":"Erreichtes Leistungsziel speichern","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\n\\n                   Legen Sie fest, wie ihre Kompetenzeinstufungen im Notenbuch der Lernleistungsziele erscheinen.\\n\\n                   Passen Sie die Anzahl der Einstufungen, die Lernleistungsebene, die Punkte und die Farben an.\\n\\n                "},"hu":{"color_a363e1b0":"Szín","get_started_b9507525":"Vágjon bele!","loading_bde52856":"Töltődik","points_bb475533":"Pont"}}'))
var E=u["default"].scoped("ProficiencyTable")
var S=i("4Pkj")
var O=i("WfMV")
var A=i("VTJ5")
var z=i("Z/f4")
Object(_["a"])(JSON.parse('{"de":{"change_dcaa253a":"Ändern","change_description_34c49853":"Beschreibung ändern","change_mastery_f4d43c07":"Leistungsziel ändern","change_points_9e5104ac":"Punkte ändern","delete_proficiency_rating_5436ee08":"Leistungsstand löschen"},"hu":{"change_dcaa253a":"Módosítás"}}'))
var j=u["default"].scoped("ProficiencyRating")
var B=i("xHhu")
var H=i("zpiH")
var P=i("/J48")
var L=i("WEeK")
var D=i("yDo9")
function T(e){if("#"!==e[0])return"#".concat(e)
return e}var R=Object(r["a"])(B["a"],{})
class I extends o.a.Component{constructor(e){super(e)
this.setDescriptionRef=e=>{this.descriptionInput=e}
this.setPointsRef=e=>{this.pointsInput=e}
this.setTrashRef=e=>{this.trashButton=e}
this.setColorRef=e=>{this.colorButton=e}
this.setColor=(e,t,i)=>{const n=T(e)
this.setState({showColorPopover:false})
this.props.onColorChange(n)}
this.handleDescriptionChange=e=>{this.props.onDescriptionChange(e.target.value)}
this.handleMasteryChange=e=>{this.props.onMasteryChange()}
this.handlePointChange=e=>{this.props.onPointsChange(e.target.value)}
this.handleMenuToggle=e=>{this.setState({showColorPopover:e})}
this.handleMenuClose=()=>{this.setState({showColorPopover:false})}
this.handleDelete=()=>{this.props.onDelete()}
this.errorMessage=e=>e?[{text:e,type:"error"}]:null
this.state={showColorPopover:false}
this.descriptionInput=null
this.pointsInput=null
this.trashButton=null
this.colorButton=null}componentDidMount(){"mastery"===this.props.focusField&&this.radioInput.focus()}componentDidUpdate(){"trash"===this.props.focusField?setTimeout(()=>this.props.disableDelete?this.colorButton.focus():this.trashButton.focus(),700):"description"===this.props.focusField?this.descriptionInput.focus():"points"===this.props.focusField&&this.pointsInput.focus()}render(){const e=this.props,t=e.color,i=e.description,n=e.descriptionError,a=e.disableDelete,s=e.mastery,c=e.points,l=e.pointsError
return Object(r["a"])("tr",{},void 0,Object(r["a"])("td",{style:{textAlign:"center",verticalAlign:"top",padding:"1.1rem 0 0 0"}},void 0,Object(r["a"])("div",{style:{display:"inline-block"}},void 0,o.a.createElement(P["a"],{ref:e=>{this.radioInput=e},label:Object(r["a"])(O["a"],{},void 0,j.t("Change mastery")),checked:s,onChange:this.handleMasteryChange}))),Object(r["a"])("td",{className:"description",style:{verticalAlign:"top"}},void 0,o.a.createElement(L["a"],{ref:this.setDescriptionRef,renderLabel:Object(r["a"])(O["a"],{},void 0,j.t("Change description")),messages:this.errorMessage(n),onChange:this.handleDescriptionChange,defaultValue:i})),Object(r["a"])("td",{className:"points",style:{verticalAlign:"top"}},void 0,o.a.createElement(L["a"],{ref:this.setPointsRef,renderLabel:Object(r["a"])(O["a"],{},void 0,j.t("Change points")),messages:this.errorMessage(l),onChange:this.handlePointChange,defaultValue:j.n(c),width:"4rem"})),Object(r["a"])("td",{className:"color",style:{verticalAlign:"top"}},void 0,Object(r["a"])(H["a"],{on:"click",show:this.state.showColorPopover,onToggle:this.handleMenuToggle},void 0,Object(r["a"])(H["a"].Trigger,{},void 0,o.a.createElement(N["a"],{ref:this.setColorRef,variant:"link"},Object(r["a"])("div",{},void 0,Object(r["a"])("span",{className:"colorPickerIcon",style:{background:T(t)}}),j.t("Change")))),Object(r["a"])(H["a"].Content,{},void 0,Object(r["a"])(D["b"],{parentComponent:"ProficiencyRating",colors:D["a"],currentColor:T(t),isOpen:true,hidePrompt:true,nonModal:true,hideOnScroll:false,withAnimation:false,withBorder:false,withBoxShadow:false,withArrow:false,focusOnMount:false,afterClose:this.handleMenuClose,setStatusColor:this.setColor}))),Object(r["a"])("div",{className:"delete"},void 0,Object(r["a"])(N["a"],{disabled:a,buttonRef:this.setTrashRef,onClick:this.handleDelete,variant:"icon",icon:R},void 0,Object(r["a"])(O["a"],{},void 0,j.t("Delete proficiency rating"))))))}}I.defaultProps={descriptionError:null,focusField:null,pointsError:null}
var F=i("xDdU")
var M=i.n(F)
var G=i("GLiE")
var W=i.n(G)
var V=i("JPcv")
var J=i("x1Tw")
const Q=e=>J["a"].get("/api/v1/accounts/".concat(e,"/outcome_proficiency"))
const K=(e,t)=>J["a"].post("/api/v1/accounts/".concat(e,"/outcome_proficiency"),t)
var X=i("HbFp")
var q=i("f6Li")
const U="EF4437"
function Y(e){if("#"===e[0])return e.substring(1)
return e}var $=Object(r["a"])(S["a"],{},void 0,Object(r["a"])(q["a"],{url:"/images/trophy.svg"}))
var Z=Object(r["a"])(x["a"],{})
class ee extends o.a.Component{constructor(e){super(e)
this.fetchRatings=()=>{Q(this.props.accountId).then(e=>{if(200===e.status)this.configToState(e.data)
else{h.a.flashError(E.t("An error occurred while loading account proficiency ratings"))
this.setState({loading:false})}}).catch(e=>{e.response&&404!==e.response.status&&h.a.flashError(E.t("An error occurred while loading account proficiency ratings: %{m}",{m:e.response.statusText}))
this.setState({billboard:true,loading:false})})}
this.configToState=e=>{const t=Object(V["List"])(e.ratings.map(e=>this.createRating(e.description,e.points,e.color)))
const i=e.ratings.findIndex(e=>e.mastery)
this.setState({loading:false,masteryIndex:i,rows:Object(V["fromJS"])(t)})}
this.fieldWithFocus=()=>this.state.rows.some(e=>e.get("focusField"))
this.createRating=function(e,t,i){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null
return Object(V["fromJS"])({description:e,points:t,key:M()(),color:i,focusField:n})}
this.addRow=()=>{let e=0
const t=this.state.rows.last()
t&&(e=t.get("points")-1);(e<0||Number.isNaN(e))&&(e=0)
const i=this.createRating("",e,U,"mastery")
this.setState({rows:this.state.rows.push(i)})
h.a.screenReaderFlashMessage(E.t("Added new proficiency rating"))}
this.handleMasteryChange=W.a.memoize(e=>()=>{this.setState({masteryIndex:e})})
this.handleDescriptionChange=W.a.memoize(e=>t=>{let i=this.state.rows
this.invalidDescription(t)||(i=i.removeIn([e,"descriptionError"]))
i=i.setIn([e,"description"],t)
this.setState({rows:i})})
this.handlePointsChange=W.a.memoize(e=>t=>{const i=X["a"].parse(t)
let n=this.state.rows
!this.invalidPoints(i)&&i>=0&&(n=n.removeIn([e,"pointsError"]))
n=n.setIn([e,"points"],i)
this.setState({rows:n})})
this.handleColorChange=W.a.memoize(e=>t=>{const i=this.state.rows.update(e,e=>e.set("color",Y(t)))
this.setState({rows:i})})
this.handleDelete=W.a.memoize(e=>()=>{const t=this.state.masteryIndex
const i=this.state.rows.delete(e)
t>=e&&t>0&&this.setState({masteryIndex:t-1})
if(0===e){this.setState({rows:i})
this.props.focusTab&&setTimeout(this.props.focusTab,700)}else this.setState({rows:i.setIn([e-1,"focusField"],"trash")})
h.a.screenReaderFlashMessage(E.t("Proficiency Rating deleted"))})
this.isStateValid=()=>!this.state.rows.some(e=>this.invalidPoints(e.get("points"))||e.get("points")<0||this.invalidDescription(e.get("description")))
this.stateToConfig=()=>({ratings:this.state.rows.map((e,t)=>({description:e.get("description"),points:e.get("points"),mastery:t===this.state.masteryIndex,color:e.get("color")})).toJS()})
this.handleSubmit=()=>{this.checkForErrors()||K(this.props.accountId,this.stateToConfig()).then(e=>{200===e.status?h.a.flashMessage(E.t("Account proficiency ratings saved")):h.a.flashError(E.t("An error occurred while saving account proficiency ratings"))})}
this.checkForErrors=()=>{let e=null
let t=true
const i=this.state.rows.map(i=>{let n=i
if(this.invalidDescription(i.get("description"))){n=n.set("descriptionError",E.t("Missing required description"))
if(t){n=n.set("focusField","description")
t=false}}if(this.invalidPoints(i.get("points"))){e=null
n=n.set("pointsError",E.t("Invalid points"))
if(t){n=n.set("focusField","points")
t=false}}else if(i.get("points")<0){n=n.set("pointsError",E.t("Negative points"))
if(t){n=n.set("focusField","points")
t=false}}else{const r=i.get("points")
if(null!==e&&e<=r){n=n.set("pointsError",E.t("Points must be less than previous rating"))
if(t){n=n.set("focusField","points")
t=false}}e=r}return n})
t||this.setState({rows:i})
return!t}
this.invalidPoints=e=>Number.isNaN(e)
this.invalidDescription=e=>!e||0===e.trim().length
this.removeBillboard=()=>{this.setState({billboard:false})}
this.state={loading:true,masteryIndex:1,rows:Object(V["List"])([this.createRating("Exceeds Mastery",4,"127A1B"),this.createRating("Mastery",3,"00AC18"),this.createRating("Near Mastery",2,"FAB901"),this.createRating("Below Mastery",1,"FD5D10"),this.createRating("Well Below Mastery",0,"EE0612")])}}componentDidMount(){this.fetchRatings()}componentDidUpdate(){this.fieldWithFocus()&&this.setState({rows:this.state.rows.map(e=>e.delete("focusField"))})}renderSpinner(){return Object(r["a"])("div",{style:{textAlign:"center"}},void 0,Object(r["a"])(A["a"],{renderTitle:E.t("Loading"),size:"large",margin:"0 0 0 medium"}))}renderBillboard(){const e={width:"10rem",margin:"0 auto"}
const t={textAlign:"center"}
return Object(r["a"])("div",{style:t},void 0,o.a.createElement(w["a"],{headingAs:"h2",headingLevel:"h2",ref:e=>{this.triggerRoot=e},hero:Object(r["a"])("div",{style:e},void 0,$),heading:E.t("Customize Learning Mastery Ratings"),message:E.t("\n            Set up how your Proficiency Ratings appear inside of Learning Mastery Gradebook.\n            Adjust number of ratings, mastery level, points, and colors.\n          ").trim()}),Object(r["a"])(N["a"],{variant:"primary",onClick:this.removeBillboard},void 0,E.t("Get Started")))}renderTable(){const e=this.state.masteryIndex
return Object(r["a"])("div",{},void 0,Object(r["a"])(z["a"],{caption:Object(r["a"])(O["a"],{},void 0,E.t("Proficiency ratings"))},void 0,Object(r["a"])("thead",{},void 0,Object(r["a"])("tr",{},void 0,Object(r["a"])("th",{className:"masteryCol",scope:"col"},void 0,E.t("Mastery")),Object(r["a"])("th",{scope:"col"},void 0,E.t("Proficiency Rating")),Object(r["a"])("th",{className:"pointsCol",scope:"col"},void 0,E.t("Points")),Object(r["a"])("th",{className:"colorCol",scope:"col"},void 0,E.t("Color")))),Object(r["a"])("tbody",{},void 0,this.state.rows.map((t,i)=>Object(r["a"])(I,{color:t.get("color"),description:t.get("description"),descriptionError:t.get("descriptionError"),disableDelete:1===this.state.rows.size,focusField:t.get("focusField")||(0===i?"mastery":null),points:t.get("points").toString(),pointsError:t.get("pointsError"),mastery:i===e,onColorChange:this.handleColorChange(i),onDelete:this.handleDelete(i),onDescriptionChange:this.handleDescriptionChange(i),onMasteryChange:this.handleMasteryChange(i),onPointsChange:this.handlePointsChange(i)},t.get("key"))),Object(r["a"])("tr",{},void 0,Object(r["a"])("td",{colSpan:"4",style:{textAlign:"center"}},void 0,Object(r["a"])(N["a"],{onClick:this.addRow,icon:Z,variant:"circle-primary"},void 0,Object(r["a"])(O["a"],{},void 0,E.t("Add proficiency rating"))))))),Object(r["a"])("div",{className:"save"},void 0,Object(r["a"])(N["a"],{variant:"primary",onClick:this.handleSubmit},void 0,E.t("Save Learning Mastery"))))}render(){const e=this.state,t=e.billboard,i=e.loading
return i?this.renderSpinner():t?this.renderBillboard():this.renderTable()}}ee.defaultProps={focusTab:null}
var te=Object(r["a"])("div",{id:"new_rubrics"})
class ie extends o.a.Component{componentDidMount(){h()("#right-side-wrapper").show()
h()("#rubrics").detach().appendTo("#new_rubrics")}componentWillUnmount(){h()("#right-side-wrapper").hide()
h()("#rubrics").detach().appendTo("#rubric_attic")}render(){return te}}var ne=Object(r["a"])(ie,{})
class re extends o.a.Component{constructor(){super(...arguments)
this.focusTab=k.a.memoize(e=>()=>{c.a.findDOMNode(this.tabList._tabs[e]).focus()})}render(){return o.a.createElement(C["a"],{ref:e=>{this.tabList=e},defaultSelectedIndex:0},Object(r["a"])(C["a"].Panel,{title:y.t("Account Rubrics")},void 0,ne),Object(r["a"])(C["a"].Panel,{title:y.t("Learning Mastery")},void 0,Object(r["a"])(ee,{focusTab:this.focusTab(1),accountId:this.props.accountId})))}}Object(_["a"])(JSON.parse('{"de":{"add_criterion_eb9587ef":"Kriterium hinzufügen","create_criterion_6df4d4ad":"Kriterium erstellen","criterion_created_42669293":"Kriterium erstellt","criterion_long_description_e9a97247":"Ausführliche Kriteriumsbeschreibung","criterion_updated_36c0b3dc":"Kriterium aktualisiert","description_436c48d7":"Beschreibung","edit_criterion_5e4dadca":"Kriterium bearbeiten","edit_rubric":{"buttons":{"create_rubric":"Bewertungsschema erstellen","update_rubric":"Bewertungsschema aktualisieren"},"change":"Ändern","discussion_points_possible":{"one":"%{count} möglicher Punkt","other":"%{count} mögliche Punkte"},"errors":{"load_rubrics_failed":"Das Laden der Bewertungsschemata ist fehlgeschlagen, bitte erneut versuchen"},"leave_different":"Unterschiedlich lassen","messages":{"loading_rubric_groups":"Bewertungsschemagruppen werden geladen ...","loading_rubrics":"Bewertungsschemata werden geladen ..."},"prompts":{"confirm_delete":"Möchten Sie dieses Bewertungsschema wirklich löschen?","read_only_rubric":"Sie dürfen dieses Bewertungsschema nicht bearbeiten, da Sie entweder nicht über die erforderliche Berechtigung verfügen oder das Bewertungsschema an mehr als einem Ort verwendet wird. Alle vorgenommenen Änderungen ergeben ein neues Bewertungsschema, das auf dem alten basiert. Möchten Sie trotzdem fortfahren?"},"titles":{"edit_rubric_rating":"Bewertung bearbeiten","find_existing_rubric":"Bestehendes Bewertungsschema suchen"}},"max_dd02d615":"max.","new_criterion_canceled_d8c2a655":"Neues Kriterium storniert","new_rating_canceled_eed3c4ff":"Neue Bewertung storniert","new_rating_created_54125331":"Neue Bewertung erstellt","rating_title_3b60881e":"Bewertungstitel","rating_updated_7aff90ea":"Bewertung aktualisiert","update_criterion_edcbd330":"Kriterium aktualisieren"},"hu":{"add_criterion_eb9587ef":"Kritérium hozzáadása","create_criterion_6df4d4ad":"Kritérium létrehozása","criterion_updated_36c0b3dc":"Kritérium frissítve","description_436c48d7":"Leírás","edit_criterion_5e4dadca":"Kritérium szerkesztése","edit_rubric":{"buttons":{"create_rubric":"Értékelőtábla létrehozása","update_rubric":"Értékelőtábla frissítése"},"change":"Módosítás","discussion_points_possible":{"one":"%{count} elérhető pont","other":"elérhető pont: %{count} "},"errors":{"load_rubrics_failed":"Az értékelőtábla betöltése sikertelen, próbálja újra!"},"leave_different":"Hagyja meg különbözőnek","messages":{"loading_rubric_groups":"Értékelőtábla-csoportok betöltése...","loading_rubrics":"Értékelőtábla betöltése..."},"prompts":{"confirm_delete":"Biztos benne, hogy törli ezt az értékelőtáblát?","read_only_rubric":"Ön nem szerkesztheti ezt az értékelőtáblát, mert nincs engedélye vagy már használatban van. Minden módosítás egy új értékelőtáblába lesz átvezetve, ami az eredeti alapján készül el. Mindenképpen folytatja?"},"titles":{"find_existing_rubric":"Létező értékelőtábla keresése"}},"max_dd02d615":"max","new_criterion_canceled_d8c2a655":"Új kritérium törölve","new_rating_canceled_eed3c4ff":"Új értékelés törölve","new_rating_created_54125331":"Új értékelés létrehozva","update_criterion_edcbd330":"Kritérium frissítése"}}'))
var ae=u["default"].scoped("edit_rubric")
var oe=i("3O+N")
var se=i.n(oe)
Object(_["a"])(JSON.parse('{"de":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Bleibt die Gesamtpunktzahl der Aufgabe bei %{assignmentPoints} und die Gesamtpunktzahl des Bewertungsschemas bei %{rubricPoints}, führt dies zu einem maximalen Punktwert von %{toPercentage_pointRatio} der von Studenten abgegebenen Aufgaben, die nach dem Bewertungsschema benotet wurden."},"titles":{"update_assignment_points":"Die Punkte der Aufgaben ändern, um sie dem Bewertungsschema anzugleichen?"}}},"hu":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Ha a feladat összpontszámát /%{assignmentPoints}/ és az értékelőtábla pontjait /%{rubricPoints}/ így hagyja, akkor a maximálisan elérhető pontszám %{toPercentage_pointRatio} százaléka lesz elérhető minden olyan hallgató számára, akit az értékelőtáblával értékel."},"titles":{"update_assignment_points":"Feladat pontjainak módosítása az értékelőtáblához illeszkedően? "}}}}'))
u["default"].scoped("change_points_possible_to_match_rubric_dialog")
i("DfGn")
var ce=se.a.default
var le=ce.template,de=ce.templates=ce.templates||{}
var ue="changePointsPossibleToMatchRubricDialog"
de[ue]=le((function(e,t,i,n,r){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
r=r||{}
var a,o,s,c="",l=i.helperMissing,d=this.escapeExpression
c+='<p title="'+d((o=i.t||t&&t.t,s={hash:{scope:"change_points_possible_to_match_rubric_dialog"},data:r},o?o.call(t,"titles.update_assignment_points","Change assignment points to match rubric?",s):l.call(t,"t","titles.update_assignment_points","Change assignment points to match rubric?",s)))+'">\n  '
a=(o=i.toPercentage||t&&t.toPercentage,s={hash:{},data:r},o?o.call(t,t&&t.pointRatio,s):l.call(t,"toPercentage",t&&t.pointRatio,s))
c+=d((o=i.t||t&&t.t,s={hash:{toPercentage_pointRatio:a,assignmentPoints:t&&t.assignmentPoints,rubricPoints:t&&t.rubricPoints,scope:"change_points_possible_to_match_rubric_dialog"},data:r},o?o.call(t,"prompts.update_assignment_points","Leaving the assignment's total points at %{assignmentPoints} and the rubric's total points at %{rubricPoints} will result in a maximum possible score of %{toPercentage_pointRatio} for student submissions graded with the rubric.",s):l.call(t,"t","prompts.update_assignment_points","Leaving the assignment's total points at %{assignmentPoints} and the rubric's total points at %{rubricPoints} will result in a maximum possible score of %{toPercentage_pointRatio} for student submissions graded with the rubric.",s)))+"\n</p>\n"
return c}))
var _e=de[ue]
var ge=i("5Ky4")
i("hX8w")
i("jYyc")
i("Z+Ib")
i("YGE8")
i("JI1W")
i("p6Wi")
i("7LJr")
i("OShF")
i("MWZS")
i("teYS")
i("s/PJ")
i("TBRb")
const fe={htmlBody:null,hidePoints:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i]
t.forEach(e=>{e.find(".toggle_for_hide_points").addClass("hidden")})},showPoints:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i]
t.forEach(e=>{e.find(".toggle_for_hide_points").removeClass("hidden")})},localizedPoints:e=>ae.n(e,{precision:2,strip_insignificant_zeros:true}),updateCriteria(e){e.find(".criterion:not(.blank)").each((function(e){h()(this).attr("id","criterion_"+(e+1))}))},updateAddCriterionLinks(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
if(!e.is(":visible")||0===e.find("#add_criterion_holder").length)return
h()("#add_criterion_container").remove()
e.find("#add_criterion_holder").append(h()("<span/>").attr("id","add_criterion_container"))
setTimeout(()=>{c.a.render(Object(r["a"])(b,{rubric:e,duplicateFunction:fe.copyCriterion}),document.getElementById("add_criterion_container"))
t&&e.find('"#add_criterion_container '.concat(t,":visible")).focus()},0)},copyCriterion(e,t){const i=fe.addCriterion(e,t)
i.removeClass("new_criterion")
i.find(".criterion_id").text("blank")
i.find(".rating_id").text("blank")
fe.editCriterion(i)},addCriterion(e,t){let i
i="undefined"!==typeof t?e.find(".criterion:not(.blank):eq(".concat(t,")")):e.find(".criterion.blank:first")
const n=i.clone(true)
n.addClass("new_criterion")
n.removeClass("blank")
e.find(".summary").before(n.show())
const r=n.hasClass("learning_outcome_criterion")?".icon-plus":null
fe.updateCriteria(e)
fe.sizeRatings(n)
fe.updateAddCriterionLinks(e,r)
return n},addNewRatingColumn(e){const t=e.parents(".rubric")
e.addClass("add_column")
if(t.hasClass("editing")){const i=e.clone(true).removeClass("edge_rating"),r=X["a"].parse(e.find(".points").text()),a=e.parents(".criterion"),o=(a.find(".criterion_points"),{description:"",rating_long_description:"",min_points:r}),s=e.hasClass("add_left")
if(e.hasClass("add_left")){const t=X["a"].parse(e.prev(".rating").find(".points").text())
o.points=Math.round((r+t)/2)
o.points!=r&&o.points!=t||(o.points=r)}else{const t=X["a"].parse(e.next(".rating").find(".points").text())
o.min_points=t
o.points=Math.round((r+t)/2)
o.points!=r&&o.points!=t||(o.points=t)}i.fillTemplateData({data:Object(n["a"])({},o,{min_points:fe.localizedPoints(o.min_points),points:fe.localizedPoints(o.points)})})
fe.flagInfinitesimalRating(i,a.find(".criterion_use_range").attr("checked"))
if(s)e.before(i)
else{i.addClass("new_rating")
e.after(i)}const c=i.prev(".rating")
c&&c.fillTemplateData({data:{min_points:o.points}})
fe.hideCriterionAdd(t)
fe.updateCriterionPoints(a,true)
fe.sizeRatings(a)
setTimeout(()=>{h.a.screenReaderFlashMessageExclusive(ae.t("New Rating Created"))
h()(".new_rating").find(".edit_rating_link").click()},100)}return false},onFindOutcome(e){let t,i=h()(".rubric table.rubric_table:visible:first")
i.find(".criterion.learning_outcome_"+e.id).find(".delete_criterion_link").click()
fe.addCriterion(i)
t=i.find(".criterion:not(.blank):last")
t.removeClass("new_criterion")
t.toggleClass("ignore_criterion_for_scoring",!e.useForScoring)
t.find(".mastery_points").val(e.get("mastery_points"))
t.addClass("learning_outcome_criterion")
t.find(".outcome_sr_content").attr("aria-hidden",false)
t.find(".learning_outcome_id").text(e.id)
t.find(".hide_when_learning_outcome").hide()
t.find(".criterion_points").val(e.get("ratings")[0].points).blur()
for(let i=0;i<e.get("ratings").length-2;i++)t.find(".rating:not(.blank):first").addClass("add_column").click()
t.find(".rating:not(.blank)").each((function(t){const i=e.get("ratings")[t]
h()(this).fillTemplateData({data:i})}))
t.find(".cancel_button").click()
t.find("div.long_description").remove()
t.find("textarea.long_description").text(e.get("description"))
t.find(".long_description_holder").toggleClass("empty",!e.get("description"))
t.find(".description_title").text(e.get("title"))
t.find(".criterion_description").val(e.get("title")).focus().select()
t.find(".mastery_points").text(e.get("mastery_points"))
t.find(".edit_criterion_link").remove()
t.find(".rating .links").remove()
fe.updateAddCriterionLinks(i,".icon-search")
t.find(".long_description_holder").show()},hideCriterionAdd(e){e.find(".add_right, .add_left, .add_column").removeClass("add_left add_right add_column")},updateRubricPoints(e){let t=0
e.find(".criterion:not(.blank):not(.ignore_criterion_for_scoring) .criterion_points").each((function(){const e=X["a"].parse(h()(this).val())
isNaN(e)||(t+=e)}))
t=he(t,2)
e.find(".rubric_total").text(fe.localizedPoints(t))},updateCriterionPoints(e,t){const i=h.a.makeArray(e.find(".rating")).reverse()
let n=-1
let r=X["a"].parse(e.find(".criterion_points").val())
const a=e.find(".criterion_use_range").attr("checked")
r=Number.isNaN(r)?5:he(r,2)
e.find(".rating:first .points").text(fe.localizedPoints(r))
h.a.each(i,(e,t)=>{const i=h()(t)
const r=i.getTemplateData({textValues:["points"]})
r.points=X["a"].parse(r.points)
r.points<n&&(r.points=n)
r.points=he(r.points,2)
n=r.points
r.points=fe.localizedPoints(r.points)
i.fillTemplateData({data:r})
fe.flagInfinitesimalRating(i,a)})
t&&n>r&&(r=n)
e.find(".criterion_points").val(fe.localizedPoints(r))
e.find(".display_criterion_points").text(fe.localizedPoints(r))
if(!e.data("criterion_points")||X["a"].parse(e.data("criterion_points"))!==r){if(!e.data("criterion_points")){let i=e.context.defaultValue
t&&(i=e.find(".rating:first .points").text())
e.data("criterion_points",X["a"].parse(i))}const i=e.data("criterion_points")
const n=r
const o=e.find(".rating")
h()(o[0]).find(".points").text(fe.localizedPoints(r))
let s=r
for(let e=1;e<o.length;e++){const t=X["a"].parse(h()(o[e]).find(".points").text())
let r=t/i*n;(Number.isNaN(t)||0===t&&s>0&&e<o.length-1)&&(r=s-Math.round(s/(o.length-e)))
Number.isNaN(r)?r=0:r>s&&(r=s-1)
r=fe.localizedPoints(Math.max(0,r))
s=r
h()(o[e]).find(".points").text(r)
fe.flagInfinitesimalRating(h()(o[e]),a)
if(e>0){h()(o[e-1]).find(".min_points").text(r)
fe.flagInfinitesimalRating(h()(o[e-1]),a)}}e.data("criterion_points",X["a"].parse(r))}fe.updateRubricPoints(e.parents(".rubric"))},flagInfinitesimalRating(e,t){const i=e.getTemplateData({textValues:["points","min_points"]})
if(X["a"].parse(i.min_points)===X["a"].parse(i.points)){e.addClass("infinitesimal")
e.find(".range_rating").hide()}else{e.removeClass("infinitesimal")
e.find(".range_rating").showIf(t)}},capPointChange(e,t,i,n){const r=t.getTemplateData({textValues:[n]})
return fe.localizedPoints(i(e,X["a"].parse(r[n])))},editCriterion(e){if(!e.parents(".rubric").hasClass("editing"))return
if(e.hasClass("learning_outcome_criterion"))return
e.find(".edit_criterion_link").click()},originalSizeRatings(){const e=h()(".rubric:not(.rubric_summary) .criterion:visible")
if(e.length){const t=h.a.windowScrollTop()
e.each((function(){const e=h()(this),t=e.find(".ratings:visible")
if(t.length){const i=t.find(".rating .container").css("height",""),n=Math.max(t.height(),e.find(".criterion_description .container .description_content").height())
i.css("height",n-10+"px")}}))
fe.htmlBody.scrollTop(t)}},rubricData(e){e=e.filter(":first")
e.hasClass("editing")||(e=e.next(".editing"))
e.find(".criterion_points").each((function(){const e=h()(this).val()
h()(this).parents(".criterion").find(".display_criterion_points").text(e)}))
var t=e.getFormData()
e.find(".rubric_title .title").text(t.title)
e.find(".rubric_table caption .title").text(t.title)
t=e.getTemplateData({textValues:["title","description","rubric_total","rubric_association_id"]})
let i={}
i["rubric[title]"]=t.title
i["rubric[points_possible]"]=t.rubric_total
i["rubric_association[use_for_grading]"]=e.find(".grading_rubric_checkbox").attr("checked")?"1":"0"
i["rubric_association[hide_score_total]"]="0"
"0"==i["rubric_association[use_for_grading]"]&&(i["rubric_association[hide_score_total]"]=e.find(".totalling_rubric_checkbox").attr("checked")?"1":"0")
i["rubric_association[hide_points]"]=e.find(".hide_points_checkbox").attr("checked")?"1":"0"
i["rubric_association[hide_outcome_results]"]=e.find(".hide_outcome_results_checkbox").attr("checked")?"1":"0"
i["rubric[free_form_criterion_comments]"]=e.find(".rubric_custom_rating").attr("checked")?"1":"0"
i["rubric_association[id]"]=t.rubric_association_id
i.rubric_association_id=t.rubric_association_id
let n=0
e.find(".criterion:not(.blank)").each((function(){const e=h()(this)
const t=!!e.find(".criterion_use_range").attr("checked")
if(!e.hasClass("learning_outcome_criterion")){const t=e.find("input.mastery_points").val()
e.find("span.mastery_points").text(X["a"].validate(t)?t:0)}const r=e.getTemplateData({textValues:["description","display_criterion_points","learning_outcome_id","mastery_points","long_description","criterion_id"]})
e.hasClass("learning_outcome_criterion")&&(r.long_description=e.find("textarea.long_description").val())
r.mastery_points=e.find("span.mastery_points").text()
const a="rubric[criteria]["+n+"]"
i[a+"[description]"]=r.description
i[a+"[points]"]=r.display_criterion_points
i[a+"[learning_outcome_id]"]=r.learning_outcome_id
i[a+"[long_description]"]=r.long_description
i[a+"[id]"]=r.criterion_id
i[a+"[criterion_use_range]"]=t
e.hasClass("ignore_criterion_for_scoring")&&(i[a+"[ignore_for_scoring]"]="1")
r.learning_outcome_id&&(i[a+"[mastery_points]"]=r.mastery_points)
let o=0
e.find(".rating").each((function(){const e=h()(this)
const t=e.getTemplateData({textValues:["description","rating_long_description","points","rating_id"]})
const n=a+"[ratings]["+o+"]"
i[n+"[description]"]=t.description
i[n+"[long_description]"]=t.rating_long_description
i[n+"[points]"]=X["a"].parse(t.points)
i[n+"[id]"]=t.rating_id
o++}))
n++}))
i.title=i["rubric[title]"]
i.points_possible=X["a"].parse(i["rubric[points_possible]"])
i.rubric_id=e.attr("id").substring(7)
i=h.a.extend(i,h()("#rubrics #rubric_parameters").getFormData())
return i},addRubric(){const e=h()("#default_rubric").clone(true).attr("id","rubric_new").addClass("editing")
e.find(".edit_rubric").remove()
const t=h()("#edit_rubric").clone(true).show().removeAttr("id").addClass("edit_rubric")
const i=t.find("#edit_rubric_form")
e.find(".rubric_table").append(t)
i.attr("method","POST").attr("action",h()("#add_rubric_url").attr("href"))
const n=h()("#assignment_show .points_possible,#rubrics.rubric_dialog .assignment_points_possible")
const r=h()("#quiz_show,#quiz_edit_wrapper")
i.find(".rubric_grading").showIf(n.length>0&&0===r.length)
return e},editRubric(e,t){let i,n,r,a
h()("#add_criterion_container").remove()
fe.isEditing=true
i=e.clone(true).addClass("editing")
i.find(".edit_rubric").remove()
n=i.getTemplateData({textValues:["use_for_grading","free_form_criterion_comments","hide_score_total","hide_points","hide_outcome_results"]})
e.hide().after(i.show())
r=h()("#edit_rubric").clone(true).show().removeAttr("id").addClass("edit_rubric")
a=r.find("#edit_rubric_form")
i.find(".rubric_table").append(r)
i.find(":text:first").focus().select()
a.find(".grading_rubric_checkbox").attr("checked","true"===n.use_for_grading).triggerHandler("change")
a.find(".rubric_custom_rating").attr("checked","true"===n.free_form_criterion_comments).triggerHandler("change")
a.find(".totalling_rubric_checkbox").attr("checked","true"===n.hide_score_total).triggerHandler("change")
a.find(".hide_points_checkbox").attr("checked","true"===n.hide_points).triggerHandler("change")
a.find(".hide_outcome_results_checkbox").attr("checked","true"===n.hide_outcome_results).triggerHandler("change")
const o=ae.t("buttons.create_rubric","Create Rubric")
const s=ae.t("buttons.update_rubric","Update Rubric")
a.find(".save_button").text("rubric_new"==i.attr("id")?o:s)
a.attr("method","PUT").attr("action",t)
fe.sizeRatings()
fe.updateAddCriterionLinks(i)
return i},hideEditRubric(e,t){fe.isEditing=false
e=e.filter(":first")
e.hasClass("editing")||(e=e.next(".editing"))
e.removeClass("editing")
e.find(".edit_rubric").remove()
if(t){if("rubric_new"!=e.attr("id")){const t=e.prev(".rubric")
t.show()
t.find(".rubric_title .title").focus()}else h()(".add_rubric_link").show().focus()
e.remove()}else e.find(".rubric_title .links").show()},updateRubric(e,t){e.find(".criterion:not(.blank)").remove()
const i=e.find(".rating:first").clone(true).removeAttr("id")
e.fillTemplateData({data:t,id:"rubric_"+t.id,hrefValues:["id","rubric_association_id"],avoid:".criterion"})
e.fillFormData(t)
fe.isEditing=false
let r=h.a.replaceTags(e.find(".edit_rubric_url").attr("href"),"rubric_id",t.id)
e.find(".edit_rubric_link").attr("href",r).showIf(t.permissions.update_association)
r=h.a.replaceTags(e.find(".delete_rubric_url").attr("href"),"association_id",t.rubric_association_id)
e.find(".delete_rubric_link").attr("href",r).showIf(t.permissions.delete_association)
e.find(".find_rubric_link").showIf(t.permissions.update_association&&!h()("#rubrics").hasClass("raw_listing"))
e.find(".criterion:not(.blank) .ratings").empty()
t.criteria.forEach(t=>{t.display_criterion_points=fe.localizedPoints(t.points)
t.criterion_id=t.id
const r=e.find(".criterion.blank:first").clone(true).show().removeAttr("id")
r.removeClass("blank")
r.fillTemplateData({data:t,htmlValues:["long_description"]})
r.find(".long_description_holder").toggleClass("empty",!t.long_description)
r.find(".criterion_use_range").attr("checked",true===t.criterion_use_range)
r.find(".ratings").empty()
r.find(".hide_when_learning_outcome").showIf(!t.learning_outcome_id)
r.toggleClass("learning_outcome_criterion",!!t.learning_outcome_id)
r.toggleClass("ignore_criterion_for_scoring",!!t.ignore_for_scoring)
r.find(".outcome_sr_content").attr("aria-hidden",!t.learning_outcome_id)
if(t.learning_outcome_id){r.find(".long_description_holder").show()
r.find("div.long_description").remove()
t.long_description&&r.find(".long_description_link").removeClass("hidden")}let a=0
t.ratings.forEach(e=>{a++
e.rating_id=e.id
e.rating_long_description=e.long_description
e.min_points=0
a<t.ratings.length&&(e.min_points=t.ratings[a].points)
const o=i.clone(true)
o.toggleClass("edge_rating",1===a||a===t.ratings.length)
a===t.ratings.length&&o.find(".add_rating_link").remove()
o.fillTemplateData({data:Object(n["a"])({},e,{min_points:fe.localizedPoints(e.min_points),points:fe.localizedPoints(e.points)})})
o.find(".range_rating").showIf(true===t.criterion_use_range&&X["a"].parse(e.min_points)!==X["a"].parse(e.points))
r.find(".ratings").append(o)})
if(t.learning_outcome_id){r.find(".edit_criterion_link").remove()
r.find(".rating .links").remove()}e.find(".summary").before(r)
r.find(".criterion_points").val(fe.localizedPoints(t.points))
r.data("criterion_points",X["a"].parse(t.points))})
e.find(".criterion:not(.blank)").find(".ratings").showIf(!t.free_form_criterion_comments).end().find(".custom_ratings").showIf(t.free_form_criterion_comments)
e.find(".rubric_title .title").focus()}}
fe.sizeRatings=W.a.debounce(fe.originalSizeRatings,10)
var he=function(e,t){t=Math.pow(10,t||0).toFixed(t<0?-t:0)
return Math.round(e*t)/t}
fe.init=function(){const e=!h()("#rubrics").hasClass("raw_listing")
const t=h()("#rubric_dialog"),i=h()("#rubric_long_description_dialog"),n=h()("#rubric_rating_dialog")
fe.htmlBody=h()("html,body")
h()("#rubrics").delegate(".edit_criterion_link, .long_description_link","click",(function(e){e.preventDefault()
let t=h()(this).parents(".rubric").hasClass("editing"),n=h()(this).parents(".criterion"),r=h()(this).parents(".criterion").hasClass("learning_outcome_criterion"),a=ae.t("Edit Criterion"),o=n.getTemplateData({textValues:["long_description","description"]})
if(t&&!r){if(n.hasClass("new_criterion")){o.description=""
a=ae.t("Add Criterion")
i.find(".save_button").text(ae.t("Create Criterion"))}else i.find(".save_button").text(ae.t("Update Criterion"))
i.fillFormData(o).fillTemplateData({data:o}).hideErrors().find(".editing").show().end().find(".displaying").hide().end()}else{r||(o.long_description=Object(ge["a"])(o.long_description).replace(/(\r?\n)/g,"<br>$1"))
a=ae.t("Criterion Long Description")
i.fillTemplateData({data:o,htmlValues:["description","long_description"],avoid:"textarea"}).find(".displaying").show().end().find(".editing").hide().end()}const s=function(){if(n.hasClass("new_criterion")){setTimeout(()=>{h.a.screenReaderFlashMessageExclusive(ae.t("New Criterion Canceled"))},100)
n.find(".delete_criterion_link").click()}}
const c=function(){n.hasClass("new_criterion")?n.parents(".rubric_container").first().find("#add_criterion_container .icon-plus").focus():n.find(".edit_criterion_link").focus()}
i.data("current_criterion",n).dialog({title:a,width:416,buttons:[],close:s,beforeClose:c})
t&&!r&&i.fixDialogButtons()})).delegate(".edit_rating_link","click",(function(e){e.preventDefault()
const t=h()(this).parents(".criterion")
const i=h()(this).parents(".rating")
const r=i.getTemplateData({textValues:["description","points","min_points","rating_long_description"]})
const a=t.getTemplateData({textValues:["description"]})
if(!i.parents(".rubric").hasClass("editing"))return
if(i.parents(".criterion").hasClass("learning_outcome_criterion"))return
const o=i.closest("td").next(".rating")
const s=i.parents(".criterion").find(".criterion_use_range").attr("checked")
n.find(".range_rating").showIf(s)
n.find(".min_points").prop("disabled",!o.length)
fe.hideCriterionAdd(i.parents(".rubric"))
n.find("#edit_rating_form_criterion_description").text(a.description)
const c=n.find("#points")
if(s){c.attr("aria-labelledby","rating_form_max_score_label")
c.attr("placeholder",ae.t("max"))}else{c.attr("aria-labelledby","rating_form_score_label")
c.removeAttr("placeholder")}const l=function(){const e=n.data("current_rating")
if(e.hasClass("new_rating")){setTimeout(()=>{h.a.screenReaderFlashMessageExclusive(ae.t("New Rating Canceled"))},100)
e.find(".delete_rating_link").click()}}
n.fillFormData(r).find(".editing").show().end().find(".displaying").hide().end()
n.data("current_criterion",t).data("current_rating",i).hideErrors().dialog({title:ae.t("titles.edit_rubric_rating","Edit Rating"),width:400,buttons:[],close:l})
n.fixDialogButtons()})).delegate(".find_rubric_link","click",e=>{e.preventDefault()
t.dialog({width:800,height:380,resizable:true,title:ae.t("titles.find_existing_rubric","Find Existing Rubric")})
if(!t.hasClass("loaded")){t.find(".loading_message").text(ae.t("messages.loading_rubric_groups","Loading rubric groups..."))
const e=t.find(".grading_rubrics_url").attr("href")
h.a.ajaxJSON(e,"GET",{},e=>{e.forEach(e=>{const i=t.find(".rubrics_dialog_context_select.blank:first").clone(true).removeClass("blank")
i.fillTemplateData({data:{name:e.name,context_code:e.context_code,rubrics:e.rubrics+" rubrics"}})
t.find(".rubrics_dialog_contexts_select").append(i.show())})
0==e.length?t.find(".loading_message").text("No rubrics found"):t.find(".loading_message").remove()
t.find(".rubrics_dialog_rubrics_holder").slideDown()
t.find(".rubrics_dialog_contexts_select .rubrics_dialog_context_select:visible:first").click()
t.addClass("loaded")},e=>{t.find(".loading_message").text(ae.t("errors.load_rubrics_failed","Loading rubrics failed, please try again"))})}}).delegate(".edit_rubric_link","click",(function(e){e.preventDefault()
const t=h()(this),i=t.parents(".rubric"),n=ae.t("prompts.read_only_rubric","You can't edit this rubric, either because you don't have permission or it's being used in more than one place. Any changes you make will result in a new rubric based on the old rubric. Continue anyway?")
if(fe.isEditing)return false
t.hasClass("copy_edit")&&!confirm(n)||fe.editRubric(i,t.attr("href"))}))
h()(".rubric .delete_rubric_link").bind("click",(function(e,t){e.preventDefault()
let i=ae.t("prompts.confirm_delete","Are you sure you want to delete this rubric?")
t&&t.confirmationMessage&&(i=t.confirmationMessage)
h()(this).parents(".rubric").confirmDelete({url:h()(this).attr("href"),message:i,success(){h()(this).fadeOut(()=>{h()(".add_rubric_link").show().focus()
t&&h.a.isFunction(t)&&t()})}})}))
i.find(".save_button").click(()=>{const e=i.find("textarea.long_description").val(),t=i.find("textarea.description").val(),n=i.data("current_criterion")
const r=i.validateForm({required:["description"],labels:{description:ae.t("Description")}})
if(!r)return
if(n){n.fillTemplateData({data:{long_description:e,description_title:t}})
n.find("textarea.long_description").val(e)
n.find("textarea.description").val(t)
n.find(".long_description_holder").toggleClass("empty",!e)
let i=ae.t("Criterion Updated")
n.hasClass("new_criterion")&&(i=ae.t("Criterion Created"))
n.removeClass("new_criterion")
n.show()
const r=n.parents(".rubric")
fe.updateCriteria(r)
fe.updateRubricPoints(r)
fe.updateAddCriterionLinks(r)
setTimeout(()=>{h.a.screenReaderFlashMessageExclusive(i)
n.find(".edit_criterion_link").focus()},100)}i.dialog("close")})
i.find(".cancel_button").click(()=>{i.dialog("close")})
n.find(".save_button").click(e=>{e.preventDefault()
e.stopPropagation()
const t=n.find("#edit_rating_form").getFormData()
const i=n.find("#edit_rating_form").validateForm({data:t,required:["description"],labels:{description:ae.t("Rating Title")}})
if(!i)return
const r=n.data("current_rating")
const a=n.data("current_criterion")
const o=r.find(".edit_rating_link")
const s=a.find(".criterion_use_range").attr("checked")
const c=r.next(".rating")
const l=r.prev(".rating")
t.points=he(X["a"].parse(t.points),2)
if(isNaN(t.points)){t.points=X["a"].parse(a.find(".criterion_points").val())
isNaN(t.points)&&(t.points=5)
t.points<0&&(t.points=0)}t.min_points=he(X["a"].parse(t.min_points),2);(isNaN(t.min_points)||t.min_points<0)&&(t.min_points=0)
if(s){if(t.points<t.min_points){const e=t.points
t.points=t.min_points
t.min_points=e}l&&0!==l.length&&(t.points=fe.capPointChange(t.points,l,Math.min,"points"))
c&&0!==c.length&&(t.min_points=fe.capPointChange(t.min_points,c,Math.max,"min_points"))}r.fillTemplateData({data:t})
fe.flagInfinitesimalRating(r,s)
if(0===r.prev(".rating").length){a.find(".criterion_points").val(fe.localizedPoints(t.points))
a.data("criterion_points",t.points)}if(c){c.fillTemplateData({data:{points:t.min_points}})
fe.flagInfinitesimalRating(c,s)}if(l){l.fillTemplateData({data:{min_points:t.points}})
fe.flagInfinitesimalRating(l,s)}fe.updateCriterionPoints(a,true)
fe.originalSizeRatings()
r.removeClass("new_rating")
n.dialog("close")
setTimeout(()=>{h.a.screenReaderFlashMessageExclusive(ae.t("Rating Updated"))
o.focus()},100)})
n.find(".cancel_button").click(()=>{n.dialog("close")})
h()(".add_rubric_link").click(t=>{t.preventDefault()
if(h()("#rubric_new").length>0)return
if(e&&h()("#rubrics .rubric:visible").length>0)return
const i=fe.addRubric()
h()("#rubrics").append(i.show())
h()(".add_rubric_link").hide()
fe.updateAddCriterionLinks(i)
const n=i.find(".find_rubric_link:visible:first")
n.length>0?n.focus():i.find(":text:first").focus().select()})
h()("#rubric_dialog").delegate(".rubrics_dialog_context_select","click",(function(e){e.preventDefault()
h()(".rubrics_dialog_contexts_select .selected_side_tab").removeClass("selected_side_tab")
const i=h()(this)
i.addClass("selected_side_tab")
const n=i.getTemplateData({textValues:["context_code"]}).context_code
if(i.hasClass("loaded")){t.find(".rubrics_loading_message").hide()
t.find(".rubrics_dialog_rubrics,.rubrics_dialog_rubrics_select").show()
t.find(".rubrics_dialog_rubrics_select .rubrics_dialog_rubric_select").hide()
t.find(".rubrics_dialog_rubrics_select .rubrics_dialog_rubric_select."+n).show()
t.find(".rubrics_dialog_rubrics_select .rubrics_dialog_rubric_select:visible:first").click()}else{t.find(".rubrics_loading_message").text(ae.t("messages.loading_rubrics","Loading rubrics...")).show()
t.find(".rubrics_dialog_rubrics,.rubrics_dialog_rubrics_select").hide()
const e=t.find(".grading_rubrics_url").attr("href")+"?context_code="+n
h.a.ajaxJSON(e,"GET",{},e=>{i.addClass("loaded")
t.find(".rubrics_loading_message").hide()
t.find(".rubrics_dialog_rubrics,.rubrics_dialog_rubrics_select").show()
e.forEach(e=>{const i=e.rubric_association
const n=i.rubric
const r=t.find(".rubrics_dialog_rubric_select.blank:first").clone(true)
r.addClass(i.context_code)
n.criterion_count=n.data.length
r.fillTemplateData({data:n}).removeClass("blank")
t.find(".rubrics_dialog_rubrics_select").append(r.show())
const a=t.find(".rubrics_dialog_rubric.blank:first").clone(true)
a.removeClass("blank")
a.find(".criterion.blank").hide()
n.rubric_total=n.points_possible
a.fillTemplateData({data:n,id:"rubric_dialog_"+n.id})
n.data.forEach(e=>{e.criterion_points=e.points
e.criterion_points_possible=e.points
e.criterion_description=e.description
const t=e.ratings
delete e.ratings
const i=a.find(".criterion.blank:first").clone().removeClass("blank")
i.fillTemplateData({data:e})
i.find(".rating_holder").addClass("blank")
t.forEach(e=>{const t=i.find(".rating_holder.blank:first").clone().removeClass("blank")
e.rating=e.description
t.fillTemplateData({data:e})
i.find(".ratings").append(t.show())})
i.find(".rating_holder.blank").remove()
a.find(".rubric.rubric_summary tr.summary").before(i.show())})
t.find(".rubrics_dialog_rubrics").append(a)})
t.find(".rubrics_dialog_rubrics_select .rubrics_dialog_rubric_select").hide()
t.find(".rubrics_dialog_rubrics_select .rubrics_dialog_rubric_select."+n).show()
t.find(".rubrics_dialog_rubrics_select .rubrics_dialog_rubric_select:visible:first").click()},e=>{t.find(".rubrics_loading_message").text("Loading rubrics failed, please try again")})}})).delegate(".rubrics_dialog_rubric_select","click",(function(e){e.preventDefault()
const t=h()(this)
t.find("a").focus()
const i=t.getTemplateData({textValues:["id"]}).id
h()(".rubric_dialog .rubrics_dialog_rubric_select").removeClass("selected_side_tab")
t.addClass("selected_side_tab")
h()(".rubric_dialog .rubrics_dialog_rubric").hide()
h()(".rubric_dialog #rubric_dialog_"+i).show()})).delegate(".select_rubric_link","click",(function(e){e.preventDefault()
const i={}
const n=t.getTemplateData({textValues:["rubric_association_type","rubric_association_id","rubric_association_purpose"]})
i["rubric_association[association_type]"]=n.rubric_association_type
i["rubric_association[association_id]"]=n.rubric_association_id
i["rubric_association[rubric_id]"]=h()(this).parents(".rubrics_dialog_rubric").getTemplateData({textValues:["id"]}).id
i["rubric_association[purpose]"]=n.rubric_association_purpose
t.loadingImage()
const r=t.find(".select_rubric_url").attr("href")
h.a.ajaxJSON(r,"POST",i,e=>{t.loadingImage("remove")
let i=h()("#rubrics .rubric:visible:first")
0===i.length&&(i=fe.addRubric())
const n=e.rubric
n.rubric_association_id=e.rubric_association.id
n.use_for_grading=e.rubric_association.use_for_grading
n.permissions=n.permissions||{}
if(e.rubric_association.permissions){n.permissions.update_association=e.rubric_association.permissions.update
n.permissions.delete_association=e.rubric_association.permissions.delete}fe.updateRubric(i,n)
fe.updateRubricPoints(i)
fe.hideEditRubric(i,false)
t.dialog("close")},()=>{t.loadingImage("remove")})}))
t.find(".cancel_find_rubric_link").click(e=>{e.preventDefault()
t.dialog("close")})
t.find(".rubric_brief").find(".expand_data_link,.collapse_data_link").click((function(e){e.preventDefault()
h()(this).parents(".rubric_brief").find(".expand_data_link,.collapse_data_link").toggle().end().find(".details").slideToggle()}))
let r=false,a=false
h()("#edit_rubric_form").formSubmit({processData(e){const t=h()(this).parents(".rubric")
if(!t.find(".criterion:not(.blank)").length)return false
e=fe.rubricData(t)
if(ENV.MASTER_COURSE_DATA&&ENV.MASTER_COURSE_DATA.restricted_by_master_course&&ENV.MASTER_COURSE_DATA.is_master_course_child_content&&ENV.MASTER_COURSE_DATA.master_course_restrictions.points)a=true
else if("1"==e["rubric_association[use_for_grading]"]){const t=X["a"].parse(h()("#assignment_show .points_possible, #rubrics.rubric_dialog .assignment_points_possible").text())
const i=parseFloat(e.points_possible)
if(null!=t&&void 0!=t&&i!=t&&!r){const e=0===t?i:i/t
const n=h()(_e({assignmentPoints:t,rubricPoints:i,pointRatio:e}))
const o=function(e){r=true
a=true===e
n.remove()
h()("#edit_rubric_form").submit()}
n.dialog({dialogClass:"edit-rubric-confirm-points-change",buttons:[{text:ae.t("change","Change"),click:o},{text:ae.t("leave_different","Leave different"),click(){o(true)}}],width:400,resizable:false,close:n.remove})
return false}}e.skip_updating_points_possible=a
a=false
r=false
return e},beforeSubmit(e){const t=h()(this).parents(".rubric")
t.find(".rubric_title .title").text(e["rubric[title]"])
t.find(".rubric_table caption .title").text(e["rubric[title]"])
t.find(".rubric_total").text(fe.localizedPoints(e.points_possible))
t.removeClass("editing")
"rubric_new"==t.attr("id")?t.attr("id","rubric_adding"):t.prev(".rubric").remove()
h()(this).parents("tr").hide()
t.loadingImage()
return t},success(t,i){const n=t.rubric
i.loadingImage("remove")
n.rubric_association_id=t.rubric_association.id
n.use_for_grading=t.rubric_association.use_for_grading
n.hide_points=t.rubric_association.hide_points
n.hide_outcome_results=t.rubric_association.hide_outcome_results
n.permissions=n.permissions||{}
if(t.rubric_association.permissions){n.permissions.update_association=t.rubric_association.permissions.update
n.permissions.delete_association=t.rubric_association.permissions.delete}fe.updateRubric(i,n)
if(t.rubric_association&&t.rubric_association.use_for_grading&&!t.rubric_association.skip_updating_points_possible){h()("#assignment_show .points_possible").text(n.points_possible)
const e=ae.t("discussion_points_possible",{one:"%{count} point possible",other:"%{count} points possible"},{count:n.points_possible||0,precision:2,strip_insignificant_zeros:true})
h()(".discussion-title .discussion-points").text(e)}e||h()(".add_rubric_link").show()
i.find(".rubric_title .links:not(.locked)").show()}})
h()("#edit_rubric_form .cancel_button").click((function(){fe.hideEditRubric(h()(this).parents(".rubric"),true)}))
h()("#rubrics").delegate(".add_criterion_link","click",(function(e){const t=fe.addCriterion(h()(this).parents(".rubric"))
t.hide()
fe.editCriterion(t)
return false})).delegate(".description_title","click",(function(){const e=h()(this).parents(".criterion")
fe.editCriterion(e)
return false})).delegate(".delete_criterion_link","click",(function(e){const t=h()(this).parents(".criterion")
const i=t.prevAll(".criterion:not(.blank)").first()
let n=i.find(".edit_criterion_link")
0==i.length&&(n=t.parents(".rubric_container").find(".rubric_title input"))
const r=t.parents(".rubric")
if(t.hasClass("new_criterion")){t.remove()
fe.updateAddCriterionLinks(r,".icon-plus")}else{n.focus()
t.fadeOut(()=>{t.remove()
fe.updateCriteria(r)
fe.updateRubricPoints(r)
fe.updateAddCriterionLinks(r)})}return false})).delegate(".rating_description_value","click",e=>false).bind("mouseover",e=>{const t=h()(e.target)
t.closest(".ratings").length||fe.hideCriterionAdd(t.parents(".rubric"))}).delegate(".delete_rating_link","click",(function(e){const t=h()(this).closest("td")
const i=t.prev().find(".add_rating_link_after")
const n=t.prev(".rating")
const r={min_points:t.next(".rating").find(".points").text()}
n.fillTemplateData({data:r})
e.preventDefault()
fe.hideCriterionAdd(h()(this).parents(".rubric"))
h()(this).parents(".rating").fadeOut((function(){const e=h()(this).parents(".criterion")
fe.flagInfinitesimalRating(n,e.find(".criterion_use_range").attr("checked"))
h()(this).remove()
fe.sizeRatings(e)
i.focus()}))})).delegate(".add_rating_link_after","click",(function(e){e.preventDefault()
const t=h()(this).parents("td.rating")
t.addClass("add_right")
fe.addNewRatingColumn(t)})).delegate(".add_column","click",(function(e){const t=h()(this)
fe.addNewRatingColumn(t)}))
h()(".criterion_points").keydown((function(e){13==e.keyCode&&fe.updateCriterionPoints(h()(this).parents(".criterion"))})).blur((function(e){fe.updateCriterionPoints(h()(this).parents(".criterion"))}))
h()("#edit_rating").delegate(".cancel_button","click",(function(e){h()(this).closest("td.rating").find(".edit_rating_link")}))
h()("#edit_rubric_form .rubric_custom_rating").change((function(){h()(this).parents(".rubric").find("tr.criterion").find(".ratings").showIf(!h()(this).attr("checked")).end().find(".criterion_use_range_div").showIf(!h()(this).attr("checked")).end().find(".custom_ratings").showIf(h()(this).attr("checked"))})).triggerHandler("change")
h()("#edit_rubric_form #totalling_rubric").change((function(){h()(this).parents(".rubric").find(".total_points_holder").showIf(!h()(this).attr("checked"))}))
h()("#edit_rubric_form #hide_points").change((function(e){e.target.checked?fe.hidePoints(h()(this).parents(".rubric"),h()("#rubric_rating_dialog")):fe.showPoints(h()(this).parents(".rubric"),h()("#rubric_rating_dialog"))}))
h()("#edit_rubric_form .hide_points_checkbox").change((function(){if(h()(this).is(":visible")){const e=h()(this).attr("checked")
if(e){h()(this).parents(".rubric").find(".grading_rubric_checkbox").attr("checked",false)
h()(this).parents(".rubric").find(".grading_rubric_checkbox").triggerHandler("change")}h()(this).parents(".rubric").find(".rubric_grading").css("display",e?"none":"")
h()(this).parents(".rubric").find(".totalling_rubric").css("display",e?"none":"")}}))
h()("#edit_rubric_form .grading_rubric_checkbox").change((function(){if(h()(this).is(":visible")){h()(this).parents(".rubric").find(".totalling_rubric").css("visibility",h()(this).attr("checked")?"hidden":"visible")
h()(this).parents(".rubric").find(".totalling_rubric_checkbox").attr("checked",false)}})).triggerHandler("change")
h()(".criterion_use_range").change((function(){const e=h()(this).attr("checked")
h()(this).parents("tr.criterion").find(".rating").each((function(){const t=e&&!h()(this).hasClass("infinitesimal")&&X["a"].parse(h()(this).find(".points").text())!==X["a"].parse(h()(this).find(".min_points").text())
h()(this).find(".range_rating").showIf(t)}))})).triggerHandler("change")
h()("#criterion_blank").find(".criterion_points").val("5")
if(h()("#default_rubric").find(".criterion").length<=1){fe.addCriterion(h()("#default_rubric"))
h()("#default_rubric").find(".criterion").removeClass("new_criterion")}setInterval(fe.sizeRatings,1e4)
h.a.publish("edit_rubric/initted")}
if(document.getElementById("rubric_management")&&ENV.NON_SCORING_RUBRICS&&ENV.PERMISSIONS.manage_outcomes){h()("h1").hide()
const e=ENV.context_asset_string.split("_")[1]
c.a.render(Object(r["a"])(re,{accountId:e}),document.getElementById("rubric_management"))}var pe=fe
Object(_["a"])(JSON.parse('{"de":{"EditRubricPage":{"titles":{"find_outcomes":"Lernziele suchen"}}},"hu":{"EditRubricPage":{"titles":{"find_outcomes":"Tanulási eredmény keresése"}}}}'))
var me=u["default"].scoped("EditRubricPage")
var be=i("B0dq")
var ve=i("dSIe")
class ke{static initClass(){this.prototype.$els={}
this.prototype.translations={findOutcome:me.t("titles.find_outcomes","Find Outcomes")}}constructor(){this.onFindOutcome=e=>{e.preventDefault()
this.dialogCreated||this.createDialog()
this.$els.dialog.show()
return this.$els.dialog.$el.find(".alert").focus()}
this.rootOutcomeGroup=new be["a"](ENV.ROOT_OUTCOME_GROUP)
this.attachInitialEvent()
this.dialogCreated=false}attachInitialEvent(){this.$els.rubricWrapper=h()("#rubrics")
return this.$els.rubricWrapper.on("click","a.find_outcome_link",this.onFindOutcome)}createDialog(){this.$els.dialog=new ve["a"]({title:this.translations.findOutcome,selectedGroup:this.rootOutcomeGroup,useForScoring:true,shouldImport:false,disableGroupImport:true,rootOutcomeGroup:this.rootOutcomeGroup})
this.$els.dialog.on("import",this.onOutcomeImport)
return this.dialogCreated=true}onOutcomeImport(e){return pe.onFindOutcome(e)}}ke.initClass()
document.addEventListener("rubricEditDataReady",e=>{new ke
pe.init()})},"Z/f4":function(e,t,i){"use strict"
var n=i("rePB")
var r=i("1OyB")
var a=i("vuIU")
var o=i("md7G")
var s=i("foSv")
var c=i("Ji7U")
var l=i("q1tI")
var d=i.n(l)
var u=i("17x9")
var _=i.n(u)
var g=i("TSYQ")
var f=i.n(g)
var h=i("n12J")
var p=i("J2CL")
var m=i("nAyT")
var b=i("jtGx")
var v=i("oXx0")
function k(e){var t=e.colors,i=e.typography,n=e.spacing
return{color:t.textDarkest,background:t.backgroundLightest,fontFamily:i.fontFamily,fontWeight:i.fontWeightNormal,fontSize:i.fontSizeMedium,borderColor:t.borderMedium,headerBorderColor:t.borderDark,hoverBorderColor:t.borderBrand,captionColor:t.textDarkest,captionFontSize:i.fontSizeMedium,smallFontSize:i.fontSizeSmall,smallLineHeight:i.lineHeightFit,smallPadding:"".concat(n.xxSmall," ").concat(n.xSmall),mediumFontSize:i.fontSizeMedium,mediumLineHeight:i.lineHeightCondensed,mediumPadding:"".concat(n.xSmall," ").concat(n.small),largeFontSize:i.fontSizeLarge,largeLineHeight:i.lineHeightCondensed,largePadding:"".concat(n.small," ").concat(n.medium),stripedBackground:t.backgroundLight}}k.canvas=function(e){return{color:e["ic-brand-font-color-dark"],captionColor:e["ic-brand-font-color-dark"],hoverBorderColor:e["ic-brand-primary"]}}
i.d(t,"a",(function(){return O}))
var y,C,w,N,x,E
var S={componentId:"eQCNs",template:function(e){return"\n\n.eQCNs_bGBk{border-collapse:collapse;border-spacing:0;color:".concat(e.color||"inherit",";display:table;font-family:").concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";max-width:100%;width:100%}\n\n.eQCNs_bGBk,.eQCNs_bGBk caption{background:").concat(e.background||"inherit","}\n\n.eQCNs_bGBk caption{color:").concat(e.captionColor||"inherit",";font-size:").concat(e.captionFontSize||"inherit",";text-align:start}\n\n[dir=ltr] .eQCNs_bGBk caption{text-align:left}\n\n[dir=rtl] .eQCNs_bGBk caption{text-align:right}\n\n.eQCNs_bGBk td,.eQCNs_bGBk th,.eQCNs_bGBk tr{box-sizing:border-box}\n\n.eQCNs_bGBk td,.eQCNs_bGBk th{border-bottom-color:").concat(e.borderColor||"inherit",";border-bottom-style:solid;border-bottom-width:0.0625rem;text-align:start;vertical-align:middle}\n\n[dir=ltr] .eQCNs_bGBk td,[dir=ltr] .eQCNs_bGBk th{text-align:left}\n\n[dir=rtl] .eQCNs_bGBk td,[dir=rtl] .eQCNs_bGBk th{text-align:right}\n\n.eQCNs_bGBk th{font-weight:700}\n\n.eQCNs_bGBk thead>th{border-bottom-color:").concat(e.headerBorderColor||"inherit","}\n\n.eQCNs_doqw{font-size:").concat(e.smallFontSize||"inherit","}\n\n.eQCNs_doqw td,.eQCNs_doqw th{line-height:").concat(e.smallLineHeight||"inherit",";padding:").concat(e.smallPadding||"inherit","}\n\n.eQCNs_ycrn{font-size:").concat(e.mediumFontSize||"inherit","}\n\n.eQCNs_ycrn td,.eQCNs_ycrn th{line-height:").concat(e.mediumLineHeight||"inherit",";padding:").concat(e.mediumPadding||"inherit","}\n\n.eQCNs_cMDj{font-size:").concat(e.largeFontSize||"inherit","}\n\n.eQCNs_cMDj td,.eQCNs_cMDj th{line-height:").concat(e.largeLineHeight||"inherit",";padding:").concat(e.largePadding||"inherit","}\n\n.eQCNs_bBWt>tbody>tr>td:nth-child(2n),.eQCNs_cWEh>tbody>tr:nth-child(odd){background-color:").concat(e.stripedBackground||"inherit","}\n\n.eQCNs_fKeI>tbody>tr{border-left:0.1875rem solid transparent;border-right:0.1875rem solid transparent}\n\n.eQCNs_fKeI>tbody>tr:hover{border-color:").concat(e.hoverBorderColor||"inherit","}\n\n.eQCNs_bvTK{table-layout:fixed}")},root:"eQCNs_bGBk",small:"eQCNs_doqw",medium:"eQCNs_ycrn",large:"eQCNs_cMDj",colStriped:"eQCNs_bBWt",rowStriped:"eQCNs_cWEh",hover:"eQCNs_fKeI",fixedLayout:"eQCNs_bvTK"}
var O=(y=Object(m["a"])("7.0.0",null,"Use @instructure/ui-table instead."),C=Object(v["a"])(),w=Object(p["themeable"])(k,S),y(N=C(N=w(N=(E=x=function(e){Object(c["a"])(t,e)
function t(){Object(r["a"])(this,t)
return Object(o["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(a["a"])(t,[{key:"render",value:function(){var e
var i=(e={},Object(n["a"])(e,S.root,true),Object(n["a"])(e,S.fixedLayout,"fixed"===this.props.layout),Object(n["a"])(e,S[this.props.size],true),Object(n["a"])(e,S.rowStriped,"rows"===this.props.striped),Object(n["a"])(e,S.colStriped,"columns"===this.props.striped),Object(n["a"])(e,S.hover,this.props.hover),e)
var r=h["a"].omitViewProps(Object(b["a"])(this.props,t.propTypes),t)
return d.a.createElement(h["a"],Object.assign({},r,{elementRef:this.props.elementRef,as:"table",className:f()(i),margin:this.props.margin}),d.a.createElement("caption",null,this.props.caption),this.props.children)}}])
t.displayName="Table"
return t}(l["Component"]),x.propTypes={caption:_.a.node.isRequired,children:_.a.node,hover:_.a.bool,size:_.a.oneOf(["small","medium","large"]),striped:_.a.oneOf(["columns","rows"]),margin:p["ThemeablePropTypes"].spacing,elementRef:_.a.func,layout:_.a.oneOf(["auto","fixed"])},x.defaultProps={children:null,striped:void 0,margin:void 0,elementRef:void 0,hover:false,size:"medium",layout:"auto"},E))||N)||N)||N)},agq5:function(e,t,i){"use strict"
var n=i("VTBJ")
var r=i("rePB")
var a=i("1OyB")
var o=i("vuIU")
var s=i("md7G")
var c=i("foSv")
var l=i("Ji7U")
var d=i("q1tI")
var u=i.n(d)
var _=i("17x9")
var g=i.n(_)
var f=i("TSYQ")
var h=i.n(f)
var p=i("msMH")
var m=i("n12J")
var b=i("J2CL")
var v=i("E+IV")
var k=i("KgFQ")
var y=i("jtGx")
function C(e){var t=e.borders,i=e.colors,n=e.spacing,r=e.typography
return{fontFamily:r.fontFamily,paddingSmall:n.small,paddingMedium:n.medium,paddingLarge:n.medium,iconColor:i.textDark,smallMargin:n.xSmall,mediumMargin:n.small,largeMargin:n.medium,iconHoverColor:i.textLink,backgroundColor:i.backgroundLightest,iconHoverColorInverse:i.textLightest,buttonBorderWidth:t.widthMedium,buttonBorderRadius:t.radiusLarge,messageColor:i.textDark,messageColorClickable:i.textLink,messageColorInverse:i.textLight,messageFontSizeSmall:r.fontSizeSmall,messageFontSizeMedium:r.fontSizeMedium,messageFontSizeLarge:r.fontSizeLarge,clickableActiveBg:i.backgroundBrand,clickableActiveText:i.textLightest,buttonBorderStyle:t.style,buttonHoverBorderStyle:"dashed"}}C.canvas=function(e){return{iconHoverColor:e["ic-link-color"],messageColorClickable:e["ic-link-color"],clickableActiveBg:e["ic-brand-primary"]}}
i.d(t,"a",(function(){return O}))
var w,N,x,E
var S={componentId:"ftPBL",template:function(e){return"\n\n.ftPBL_bGBk{box-sizing:border-box;display:block;font-family:".concat(e.fontFamily||"inherit",";margin-left:auto;margin-right:auto;position:relative;text-align:center}\n\n[dir=ltr] .ftPBL_bGBk,[dir=rtl] .ftPBL_bGBk{text-align:center}\n\n.ftPBL_bGBk:not(.ftPBL_bGiS){background-color:").concat(e.backgroundColor||"inherit","}\n\n.ftPBL_bGBk.ftPBL_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.ftPBL_EwaR,.ftPBL_caGd,.ftPBL_eDnN,.ftPBL_cuDj,.ftPBL_elxg{display:block}\n\n.ftPBL_cuDj+.ftPBL_eDnN{margin:").concat(e.largeMargin||"inherit"," 0 0}\n\n.ftPBL_eDnN+.ftPBL_elxg,.ftPBL_cuDj+.ftPBL_elxg,.ftPBL_doqw .ftPBL_cuDj+.ftPBL_eDnN{margin:").concat(e.mediumMargin||"inherit"," 0 0}\n\n.ftPBL_doqw{padding:").concat(e.paddingSmall||"inherit","}\n\n.ftPBL_doqw .ftPBL_cuDj{font-size:3rem}\n\n.ftPBL_doqw .ftPBL_elxg{font-size:").concat(e.messageFontSizeSmall||"inherit","}\n\n.ftPBL_ycrn{padding:").concat(e.paddingMedium||"inherit","}\n\n.ftPBL_ycrn .ftPBL_cuDj{font-size:5rem}\n\n.ftPBL_ycrn .ftPBL_elxg{font-size:").concat(e.messageFontSizeMedium||"inherit","}\n\n.ftPBL_cMDj{padding:").concat(e.paddingLarge||"inherit","}\n\n.ftPBL_cMDj .ftPBL_cuDj{font-size:10rem}\n\n.ftPBL_cMDj .ftPBL_elxg{font-size:").concat(e.messageFontSizeLarge||"inherit","}\n\n.ftPBL_elxg{color:").concat(e.messageColor||"inherit","}\n\n.ftPBL_cuDj{color:").concat(e.iconColor||"inherit","}\n\n.ftPBL_cuDj>img,.ftPBL_cuDj>svg{display:block;margin:0 auto;max-width:100%}\n\n.ftPBL_cuDj>img{height:auto}\n\n.ftPBL_bGiS{-moz-appearance:none;-moz-user-select:none;-ms-user-select:none;-webkit-appearance:none;-webkit-user-select:none;appearance:none;background:").concat(e.backgroundColor||"inherit",";border:").concat(e.buttonBorderWidth||"inherit"," ").concat(e.buttonBorderStyle||"inherit"," transparent;border-radius:").concat(e.buttonBorderRadius||"inherit",";box-sizing:border-box;cursor:pointer;margin:0;text-decoration:none;touch-action:manipulation;user-select:none;width:100%}\n\n.ftPBL_bGiS:hover{border-style:").concat(e.buttonHoverBorderStyle||"inherit","}\n\n.ftPBL_bGiS:focus,.ftPBL_bGiS:hover{border-color:").concat(e.iconHoverColor||"inherit",";outline:none;text-decoration:none}\n\n.ftPBL_bGiS:focus .ftPBL_cuDj,.ftPBL_bGiS:hover .ftPBL_cuDj{color:").concat(e.iconHoverColor||"inherit","}\n\n.ftPBL_bGiS:active{background:").concat(e.clickableActiveBg||"inherit",";border-color:").concat(e.iconHoverColor||"inherit","}\n\n.ftPBL_bGiS:active .ftPBL_cuDj,.ftPBL_bGiS:active .ftPBL_elxg{color:").concat(e.clickableActiveText||"inherit","}\n\n.ftPBL_bGiS .ftPBL_elxg{color:").concat(e.messageColorClickable||"inherit","}")},root:"ftPBL_bGBk",clickable:"ftPBL_bGiS",disabled:"ftPBL_ywdX",button:"ftPBL_EwaR",content:"ftPBL_caGd",heading:"ftPBL_eDnN",hero:"ftPBL_cuDj",message:"ftPBL_elxg",small:"ftPBL_doqw",medium:"ftPBL_ycrn",large:"ftPBL_cMDj"}
var O=(w=Object(b["themeable"])(C,S),w(N=(E=x=function(e){Object(l["a"])(t,e)
function t(){var e
var i
Object(a["a"])(this,t)
for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o]
i=Object(s["a"])(this,(e=Object(c["a"])(t)).call.apply(e,[this].concat(r)))
i.handleClick=function(e){var t=i.props,n=t.readOnly,r=t.onClick
if(n){e.preventDefault()
e.stopPropagation()}else"function"===typeof r&&r(e)}
return i}Object(o["a"])(t,[{key:"renderHeading",value:function(){var e=this.props,t=e.headingLevel,i=e.headingAs,n=e.heading
return u.a.createElement("span",{className:S.heading},u.a.createElement(p["a"],{level:t,as:i,color:"primary"},n))}},{key:"renderHero",value:function(){return this.heroIsFunction?this.props.hero(this.SVGIconSize):this.props.hero}},{key:"renderContent",value:function(){var e=this.props,t=e.heading,i=e.message,n=e.hero
return u.a.createElement("span",{className:S.content},n&&u.a.createElement("span",{className:S.hero},this.renderHero()),t&&this.renderHeading(),i&&u.a.createElement("span",{className:S.message},Object(v["a"])(i)))}},{key:"render",value:function(){var e
var i=this.props,a=i.href,o=i.disabled,s=i.readOnly,c=i.onClick,l=i.size,d=i.margin,_=i.elementRef
var g=(e={},Object(r["a"])(e,S.root,true),Object(r["a"])(e,S[l],true),Object(r["a"])(e,S.clickable,a||c),Object(r["a"])(e,S.disabled,o),e)
var f=Object(k["a"])(t,this.props)
return u.a.createElement(m["a"],{as:"div",margin:d},u.a.createElement(m["a"],Object.assign({},Object(y["a"])(this.props,Object(n["a"])({},t.propTypes,{},m["a"].propTypes)),{type:"button"===f?"button":null,as:f,elementRef:_,className:h()(g),href:a,onClick:this.handleClick,disabled:o,"aria-disabled":o||s?"true":null}),this.renderContent()))}},{key:"heroIsFunction",get:function(){return"function"===typeof this.props.hero}},{key:"SVGIconSize",get:function(){var e=this.props.size
return"small"===e?"medium":"large"===e?"x-large":"large"}}])
t.displayName="Billboard"
return t}(d["Component"]),x.propTypes={hero:g.a.oneOfType([g.a.element,g.a.func]),size:g.a.oneOf(["small","medium","large"]),as:g.a.elementType,elementRef:g.a.func,heading:g.a.string,headingAs:g.a.oneOf(["h1","h2","h3","span"]),headingLevel:g.a.oneOf(["h1","h2","h3","h4"]),message:g.a.oneOfType([g.a.node,g.a.func]),onClick:g.a.func,href:g.a.string,disabled:g.a.bool,readOnly:g.a.bool,margin:b["ThemeablePropTypes"].spacing},x.defaultProps={margin:void 0,disabled:false,readOnly:false,href:void 0,message:void 0,onClick:void 0,heading:void 0,hero:void 0,size:"medium",headingAs:"span",headingLevel:"h1",as:"span",elementRef:function(e){}},E))||N)},f6Li:function(e,t,i){"use strict"
var n=i("q1tI")
var r=i.n(n)
i("17x9")
var a=i("ouhR")
var o=i.n(a)
const s=9
const c=1
class l extends r.a.Component{componentDidMount(){this.fetchSVG()}componentWillReceiveProps(e){e.url!==this.props.url&&this.fetchSVG()}fetchSVG(){false
o.a.ajax(this.props.url,{success:e=>{this.svg=e
e.nodeType===s&&(this.svg=e.firstChild)
if(this.svg.nodeType!==c&&"SVG"!==this.svg.nodeName)throw new Error("SVGWrapper: SVG Element must be returned by request to ".concat(this.props.url))
this.props.fillColor&&this.svg.setAttribute("style","fill:".concat(this.props.fillColor))
this.svg.setAttribute("focusable",false)
this.rootSpan.appendChild(this.svg)}})}render(){return r.a.createElement("span",{ref:e=>{this.rootSpan=e}})}}t["a"]=l},hX8w:function(e,t,i){"use strict"
var n=i("pQTu")
var r=i("m0r6")
Object(r["a"])(JSON.parse('{"de":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Abruf der Resultate wurde unerwartet abgebrochen. Bitte versuchen Sie es erneut."},"messages":{"loading_outcomes":"Resultate werden geladen ...","no_outcomes_found":"Keine Resultate gefunden","no_rubric_outcomes_found":"Keine gemäß Bewertungsschema konfigurierten Resultate gefunden"},"titles":{"find_outcome":"Lernziel suchen"}}},"hu":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Váratlan hiba a tanulási eredmények lehívása közben. Kérjük, próbálja újra. "},"messages":{"loading_outcomes":"Tanulási eredmények betöltése","no_outcomes_found":"Nem található tanulási eredmény","no_rubric_outcomes_found":"Nem található értékelőtáblához kapcsolódó tanulási eredmény"},"titles":{"find_outcome":"Tanulási eredmény keresése"}}}}'))
i("jQeR")
i("0sPK")
var a=n["default"].scoped("find_outcome")
var o=i("ouhR")
var s=i.n(o)
var c=i("0crz")
i("jYyc")
i("YGE8")
i("OShF")
var l={find(e,t){t=t||{}
l.callback=e
const i=s()("#find_outcome_criterion_dialog")
if(!i.hasClass("loaded")){i.find(".loading_message").text(a.t("messages.loading_outcomes","Loading Outcomes..."))
s.a.ajaxJSON(i.find(".outcomes_list_url").attr("href"),"GET",{},e=>{const n=[]
for(var r in e){var o=e[r].learning_outcome;(!t.for_rubric||o.data&&o.data.rubric_criterion)&&n.push(o)}if(0===n.length){let e
e=t.for_rubric?a.t("messages.no_rubric_outcomes_found","No Rubric-Configured Outcomes found"):a.t("messages.no_outcomes_found","No Outcomes found")
i.find(".loading_message").text(e)}else{i.find(".loading_message").hide()
i.addClass("loaded")
for(var r in n){o=n[r]
o.name=o.short_description
o.mastery_points=o.data.rubric_criterion.mastery_points||o.data.rubric_criterion.points_possible
const e=i.find(".outcomes_select.blank:first").clone(true).removeClass("blank")
o.title=o.short_description
const t=s()("<div/>")
t.text(o.short_description)
o.title=c["a"].truncateText(s.a.trim(t.text()),{max:35})
o.display_name=o.cached_context_short_name||""
e.fillTemplateData({data:o})
i.find(".outcomes_selects").append(e.show())
const a=i.find(".outcome.blank:first").clone(true).removeClass("blank")
a.find(".mastery_level").attr("id","outcome_question_bank_mastery_"+o.id).end().find(".mastery_level_text").attr("for","outcome_question_bank_mastery_"+o.id)
o.learning_outcome_id=o.id
const l=o.data&&o.data.rubric_criterion
let d=l.points_possible&&null!=l.mastery_points&&l.mastery_points/l.points_possible||0
d=Math.round(1e4*d)/100||""
a.find(".mastery_level").val(d)
a.fillTemplateData({data:o,htmlValues:["description"]})
a.addClass("outcome_"+o.id)
if(o.data&&o.data.rubric_criterion)for(const e in o.data.rubric_criterion.ratings){const t=o.data.rubric_criterion.ratings[e]
const i=a.find(".rating.blank").clone(true).removeClass("blank")
i.fillTemplateData({data:t})
a.find("tr").append(i.show())}i.find(".outcomes_list").append(a)}i.find(".outcomes_select:not(.blank):first").click()}},e=>{i.find(".loading_message").text(a.t("errors.outcome_retrieval_failed","Outcomes Retrieval failed unexpected.  Please try again."))})}i.dialog({modal:true,title:a.t("titles.find_outcome","Find Outcome"),width:700,height:400})}}
window.find_outcome=l
s()(document).ready((function(){s()("#find_outcome_criterion_dialog .outcomes_select").click((function(e){e.preventDefault()
s()("#find_outcome_criterion_dialog .outcomes_select.selected_side_tab").removeClass("selected_side_tab")
s()(this).addClass("selected_side_tab")
const t=s()(this).getTemplateData({textValues:["id"]}).id
s()("#find_outcome_criterion_dialog .outcomes_list .outcome").hide()
s()("#find_outcome_criterion_dialog .outcomes_list .outcome_"+t).show()}))
s()("#find_outcome_criterion_dialog .select_outcome_link").click((function(e){e.preventDefault()
const t=s()(this).parents(".outcome")
s()("#find_outcome_criterion_dialog").dialog("close")
s.a.isFunction(l.callback)&&l.callback(t)}))}))},"rf+m":function(e,t,i){"use strict"
i.d(t,"a",(function(){return g}))
var n=i("VTBJ")
var r=i("1OyB")
var a=i("vuIU")
var o=i("md7G")
var s=i("foSv")
var c=i("Ji7U")
var l=i("q1tI")
var d=i.n(l)
var u=i("hPGw")
var _=d.a.createElement("path",{d:"M568.13.012L392 176.142l783.864 783.989L392 1743.87 568.13 1920l960.118-959.87z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var g=function(e){Object(c["a"])(t,e)
function t(){Object(r["a"])(this,t)
return Object(o["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(a["a"])(t,[{key:"render",value:function(){return d.a.createElement(u["a"],Object.assign({},this.props,{name:"IconArrowOpenEnd",viewBox:"0 0 1920 1920",bidirectional:true}),_)}}])
t.displayName="IconArrowOpenEndSolid"
return t}(l["Component"])
g.glyphName="arrow-open-end"
g.variant="Solid"
g.propTypes=Object(n["a"])({},u["a"].propTypes)},we39:function(e,t,i){"use strict"
i.d(t,"a",(function(){return g}))
var n=i("VTBJ")
var r=i("1OyB")
var a=i("vuIU")
var o=i("md7G")
var s=i("foSv")
var c=i("Ji7U")
var l=i("q1tI")
var d=i.n(l)
var u=i("hPGw")
var _=d.a.createElement("path",{d:"M903.53 0v903.53H0v112.94h903.53V1920h112.94v-903.53H1920V903.53h-903.53V0z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var g=function(e){Object(c["a"])(t,e)
function t(){Object(r["a"])(this,t)
return Object(o["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(a["a"])(t,[{key:"render",value:function(){return d.a.createElement(u["a"],Object.assign({},this.props,{name:"IconPlus",viewBox:"0 0 1920 1920"}),_)}}])
t.displayName="IconPlusLine"
return t}(l["Component"])
g.glyphName="plus"
g.variant="Line"
g.propTypes=Object(n["a"])({},u["a"].propTypes)},xHhu:function(e,t,i){"use strict"
i.d(t,"a",(function(){return g}))
var n=i("VTBJ")
var r=i("1OyB")
var a=i("vuIU")
var o=i("md7G")
var s=i("foSv")
var c=i("Ji7U")
var l=i("q1tI")
var d=i.n(l)
var u=i("hPGw")
var _=d.a.createElement("path",{d:"M1581.176 1750.588c0 31.06-25.411 56.47-56.47 56.47H395.294c-31.059 0-56.47-25.41-56.47-56.47V564.706H225.882v1185.882c0 93.403 76.01 169.412 169.412 169.412h1129.412c93.402 0 169.412-76.01 169.412-169.412V564.706h-112.942v1185.882zm-903.529-169.412h112.941V677.647h-112.94v903.53zm451.765 0h112.94V677.647h-112.94v903.53zm211.211-1242.352L1217.065 0H694.6L571.268 338.824H.01v112.94h1920v-112.94h-579.388zm-649.299 0l82.334-225.883h364.462l82.334 225.883h-529.13z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var g=function(e){Object(c["a"])(t,e)
function t(){Object(r["a"])(this,t)
return Object(o["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(a["a"])(t,[{key:"render",value:function(){return d.a.createElement(u["a"],Object.assign({},this.props,{name:"IconTrash",viewBox:"0 0 1920 1920"}),_)}}])
t.displayName="IconTrashLine"
return t}(l["Component"])
g.glyphName="trash"
g.variant="Line"
g.propTypes=Object(n["a"])({},u["a"].propTypes)}}])

//# sourceMappingURL=60-c-5193a1ef16.js.map