(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[42],{sAx5:function(e,t,n){"use strict"
var o=n("rePB")
var r=n("1OyB")
var i=n("vuIU")
var a=n("md7G")
var s=n("foSv")
var c=n("Ji7U")
var l=n("q1tI")
var d=n.n(l)
var u=n("17x9")
var p=n.n(u)
var h=n("TSYQ")
var b=n.n(h)
var m=n("cClk")
var w=n("sTNg")
var f=n("BTe1")
var _=n("nAyT")
var g=n("jtGx")
var O=n("/UXv")
var v=n("J2CL")
var k=n("oXx0")
function y(e){var t=e.colors,n=e.typography,o=e.borders,r=e.spacing,i=e.forms
return{fontFamily:n.fontFamily,fontWeight:n.fontWeightNormal,borderWidth:o.widthSmall,borderStyle:o.style,borderColor:t.borderMedium,borderRadius:o.radiusMedium,iconColor:t.textDarkest,color:t.textDarkest,background:t.backgroundLightest,padding:r.small,focusOutlineWidth:o.widthMedium,focusOutlineStyle:o.style,focusOutlineColor:t.borderBrand,errorBorderColor:t.borderDanger,errorOutlineColor:t.borderDanger,placeholderColor:t.textDark,smallFontSize:n.fontSizeSmall,smallHeight:i.inputHeightSmall,mediumFontSize:n.fontSizeMedium,mediumHeight:i.inputHeightMedium,largeFontSize:n.fontSizeLarge,largeHeight:i.inputHeightLarge}}y.canvas=function(e){return{color:e["ic-brand-font-color-dark"],iconColor:e["ic-brand-font-color-dark"],focusBorderColor:e["ic-brand-primary"],focusOutlineColor:e["ic-brand-primary"]}}
n.d(t,"a",(function(){return N}))
var M,C,A,x,I,S
var j={componentId:"bwOAM",template:function(e){return"\n\n.bwOAM_byIz{display:block;position:relative}\n\n.bwOAM_dnnz{align-items:center;display:flex;fill:".concat(e.iconColor||"inherit",";height:100%;inset-inline-end:").concat(e.padding||"inherit",";inset-inline-start:auto;pointer-events:none;position:absolute;top:0}\n\n[dir=ltr] .bwOAM_dnnz{left:auto;right:").concat(e.padding||"inherit","}\n\n[dir=rtl] .bwOAM_dnnz{left:").concat(e.padding||"inherit",";right:auto}\n\n.bwOAM_cPAP{border:").concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:calc(").concat(e.borderRadius||"inherit","*1.5);bottom:-0.25rem;box-sizing:border-box;display:block;left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.95);transition:all 0.2s}\n\n.bwOAM_cwos,input[type].bwOAM_cwos{-moz-appearance:none;-moz-osx-font-smoothing:grayscale;-webkit-appearance:none;-webkit-font-smoothing:antialiased;all:initial;animation:none 0s ease 0s 1 normal none running;appearance:none;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:").concat(e.background||"inherit",";border:medium none currentColor;border:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";border-collapse:separate;border-image:none;border-radius:0;border-radius:").concat(e.borderRadius||"inherit",";border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:#000;color:").concat(e.color||"inherit",";column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;display:block;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamily||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;font-weight:").concat(e.fontWeight||"inherit",";height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;line-height:1;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;outline:none;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding:0 ").concat(e.padding||"inherit",";page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;transition:all 0.2s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;width:100%;word-spacing:normal;z-index:auto}\n\n.bwOAM_cwos::-ms-clear,input[type].bwOAM_cwos::-ms-clear{display:none}\n\n.bwOAM_cwos:focus,input[type].bwOAM_cwos:focus{box-shadow:none}\n\n.bwOAM_cwos:focus~.bwOAM_cPAP,input[type].bwOAM_cwos:focus~.bwOAM_cPAP{opacity:1;transform:scale(1)}\n\n.bwOAM_cwos[aria-invalid],.bwOAM_cwos[aria-invalid]:focus,.bwOAM_cwos[aria-invalid]~.bwOAM_cPAP,input[type].bwOAM_cwos[aria-invalid],input[type].bwOAM_cwos[aria-invalid]:focus,input[type].bwOAM_cwos[aria-invalid]~.bwOAM_cPAP{border-color:").concat(e.errorBorderColor||"inherit","}\n\n.bwOAM_cwos:-ms-input-placeholder,input[type].bwOAM_cwos:-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.bwOAM_cwos::-ms-input-placeholder,input[type].bwOAM_cwos::-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.bwOAM_cwos::placeholder,input[type].bwOAM_cwos::placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.bwOAM_cwos.bwOAM_ywdX,input[type].bwOAM_cwos.bwOAM_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.bwOAM_cwos.bwOAM_doqw,input[type].bwOAM_cwos.bwOAM_doqw{font-size:").concat(e.smallFontSize||"inherit",";height:").concat(e.smallHeight||"inherit","}\n\n.bwOAM_cwos.bwOAM_ycrn,input[type].bwOAM_cwos.bwOAM_ycrn{font-size:").concat(e.mediumFontSize||"inherit",";height:").concat(e.mediumHeight||"inherit","}\n\n.bwOAM_cwos.bwOAM_cMDj,input[type].bwOAM_cwos.bwOAM_cMDj{font-size:").concat(e.largeFontSize||"inherit",";height:").concat(e.largeHeight||"inherit","}\n\n.bwOAM_cwos.bwOAM_Suqk,input[type].bwOAM_cwos.bwOAM_Suqk{-webkit-padding-end:calc(").concat(e.padding||"inherit","*2 + 1em);-webkit-padding-start:").concat(e.padding||"inherit",";padding-inline-end:calc(").concat(e.padding||"inherit","*2 + 1em);padding-inline-start:").concat(e.padding||"inherit","}\n\n[dir=ltr] .bwOAM_cwos.bwOAM_Suqk,[dir=ltr] input[type].bwOAM_cwos.bwOAM_Suqk{padding-left:").concat(e.padding||"inherit",";padding-right:calc(").concat(e.padding||"inherit","*2 + 1em)}\n\n[dir=rtl] .bwOAM_cwos.bwOAM_Suqk,[dir=rtl] input[type].bwOAM_cwos.bwOAM_Suqk{padding-left:calc(").concat(e.padding||"inherit","*2 + 1em);padding-right:").concat(e.padding||"inherit","}\n\n.bwOAM_cwos.bwOAM_EMjX,input[type].bwOAM_cwos.bwOAM_EMjX{text-align:start}\n\n[dir=ltr] .bwOAM_cwos.bwOAM_EMjX,[dir=ltr] input[type].bwOAM_cwos.bwOAM_EMjX{text-align:left}\n\n[dir=rtl] .bwOAM_cwos.bwOAM_EMjX,[dir=rtl] input[type].bwOAM_cwos.bwOAM_EMjX{text-align:right}\n\n.bwOAM_cwos.bwOAM_ImeN,[dir=ltr] .bwOAM_cwos.bwOAM_ImeN,[dir=ltr] input[type].bwOAM_cwos.bwOAM_ImeN,[dir=rtl] .bwOAM_cwos.bwOAM_ImeN,[dir=rtl] input[type].bwOAM_cwos.bwOAM_ImeN,input[type].bwOAM_cwos.bwOAM_ImeN{text-align:center}")},layout:"bwOAM_byIz",icon:"bwOAM_dnnz",outline:"bwOAM_cPAP",input:"bwOAM_cwos",disabled:"bwOAM_ywdX",small:"bwOAM_doqw",medium:"bwOAM_ycrn",large:"bwOAM_cMDj",hasIcon:"bwOAM_Suqk","textAlign--start":"bwOAM_EMjX","textAlign--center":"bwOAM_ImeN"}
var N=(M=Object(_["a"])("7.0.0",null,"Use TextInput from ui-text-input instead."),C=Object(k["a"])(),A=Object(v["themeable"])(y,j),M(x=C(x=A(x=(S=I=function(e){Object(c["a"])(t,e)
function t(e){var n
Object(r["a"])(this,t)
n=Object(a["a"])(this,Object(s["a"])(t).call(this))
n.handleInputRef=function(e){n._input=e
n.props.inputRef(e)}
n._defaultId=Object(f["a"])("TextInput")
n._messagesId=Object(f["a"])("TextInput-messages")
return n}Object(i["a"])(t,[{key:"focus",value:function(){this._input.focus()}},{key:"renderIcon",value:function(){var e=this.props.icon
return"function"===typeof e?d.a.createElement("span",{className:j.icon,"aria-hidden":"true"},d.a.createElement(e,null)):null}},{key:"render",value:function(){var e
var n=this.props,r=n.type,i=n.size,a=n.textAlign,s=n.placeholder,c=n.value,l=n.defaultValue,u=n.disabled,p=n.readOnly,h=n.required,m=n.width,f=n.icon
var _=Object(g["a"])(this.props,t.propTypes)
var O=(e={},Object(o["a"])(e,j.input,true),Object(o["a"])(e,j[i],i),Object(o["a"])(e,j["textAlign--".concat(a)],a),Object(o["a"])(e,j.hasIcon,f),Object(o["a"])(e,j.disabled,u),e)
var v=m?{width:m}:null
var k=""
_["aria-describedby"]&&(k="".concat(_["aria-describedby"]))
this.hasMessages&&(k+=this._messagesId)
return d.a.createElement(w["FormField"],Object.assign({},Object(g["c"])(this.props,w["FormField"].propTypes),{id:this.id,messagesId:this._messagesId}),d.a.createElement("span",{className:j.layout},d.a.createElement("input",Object.assign({},_,{value:c,style:v,defaultValue:l,placeholder:s,ref:this.handleInputRef,type:r,id:this.id,required:h,"aria-required":h,"aria-invalid":this.invalid?"true":null,disabled:u||p,className:b()(O),"aria-describedby":""!==k?k:null})),u||p?null:d.a.createElement("span",{className:j.outline,"aria-hidden":"true"}),this.renderIcon()))}},{key:"hasMessages",get:function(){return this.props.messages&&this.props.messages.length>0}},{key:"invalid",get:function(){return this.props.messages&&this.props.messages.findIndex((function(e){return"error"===e.type}))>=0}},{key:"id",get:function(){return this.props.id||this._defaultId}},{key:"focused",get:function(){return Object(O["a"])(this._input)}},{key:"value",get:function(){return this._input.value}}])
t.displayName="TextInput"
return t}(l["Component"]),I.propTypes={type:p.a.oneOf(["text","email","url","tel","search","password"]),label:p.a.node.isRequired,id:p.a.string,messages:p.a.arrayOf(w["FormPropTypes"].message),size:p.a.oneOf(["small","medium","large"]),layout:p.a.oneOf(["stacked","inline"]),textAlign:p.a.oneOf(["start","center"]),width:p.a.string,inline:p.a.bool,placeholder:p.a.string,disabled:p.a.bool,readOnly:p.a.bool,required:p.a.bool,inputRef:p.a.func,defaultValue:p.a.string,value:Object(m["a"])(p.a.string),icon:p.a.func},I.defaultProps={id:void 0,width:void 0,placeholder:void 0,required:false,defaultValue:void 0,value:void 0,icon:void 0,inline:false,type:"text",size:"medium",textAlign:"start",messages:[],disabled:false,readOnly:false,inputRef:function(e){},layout:"stacked"},S))||x)||x)||x)},yDo9:function(e,t,n){"use strict"
var o=n("An8g")
var r=n("ouhR")
var i=n.n(r)
var a=n("q1tI")
var s=n.n(a)
var c=n("fhzG")
var l=n.n(c)
var d=n("i8i4")
var u=n.n(d)
n("17x9")
var p=n("uvL4")
var h=n("Xx/m")
var b=n("sAx5")
var m=n("WfMV")
var w=n("pQTu")
var f=n("m0r6")
Object(f["a"])(JSON.parse('{"de":{"apply_781a2546":"Anwenden","blue_daf8fea9":"Blau","brick_f2656265":"Ziegelrot","cancel_caeb1e68":"Abbrechen","chosencolor_is_not_a_valid_color_5d542cc":"\'%{chosenColor}\' ist keine gültige Farbe.","could_not_save_chosencolor_741b74ce":"„%{chosenColor}“ konnte nicht gespeichert werden.","cyan_c1d5f68a":"Cyan","deep_purple_bb3e2907":"Sattes Purpur","enter_a_hexcode_here_to_use_a_custom_color_51ecccce":"Zur Verwendung einer benutzerdefinierten Farbe, bitte hier einen Hexcode eingeben.","green_15af4778":"Grün","indigo_2035fc55":"Indigo","light_blue_5374f600":"Hellblau","magenta_4a65993c":"Magenta","olive_6a3e4d6b":"Olive","orange_81386a62":"Orange","pink_68ad45cb":"Rosa","pumpkin_904428d5":"Kürbis","purple_7678a9fc":"Purpur","red_8258edf3":"Rot","select_a_predefined_color_c77ab2f5":"Eine vorab festgelegte Farbe wählen","select_course_color_cad8e62b":"Farbe für den Kurs wählen","teal_f729a294":"Blaugrün"},"hu":{"apply_781a2546":"Alkalmazás","blue_daf8fea9":"Kék","cancel_caeb1e68":"Mégse","chosencolor_is_not_a_valid_color_5d542cc":"\'%{chosenColor}\' nem valódi szín","could_not_save_chosencolor_741b74ce":"Nem sikerült elmenteni a színt: \'%{chosenColor}\'","cyan_c1d5f68a":"Cián","deep_purple_bb3e2907":"Sötétlila","enter_a_hexcode_here_to_use_a_custom_color_51ecccce":"Írjon be egy hexadecimális kódot ahhoz, hogy egyedi színt használhasson","green_15af4778":"Zöld","indigo_2035fc55":"Indigókék","light_blue_5374f600":"Világoskék","orange_81386a62":"Narancs","pink_68ad45cb":"Rózsaszín","purple_7678a9fc":"Lila","red_8258edf3":"Vörös","select_a_predefined_color_c77ab2f5":"Válasszon egy előre definiált színt!","select_course_color_cad8e62b":"Kurzusszín kiválasztása","teal_f729a294":"Kékeszöld"}}'))
n("jQeR")
n("0sPK")
var _=w["default"].scoped("calendar_color_picker")
Object(f["a"])(JSON.parse('{"de":{"nickname_1e6da3ad":"Spitzname"},"hu":{"nickname_1e6da3ad":"Becenév"}}'))
var g=w["default"].scoped("course_nickname_edit")
class O extends s.a.Component{constructor(e){super(e)
this.onKeyPress=e=>{this.props.onEnter&&13==e.charCode&&this.props.onEnter()}
this.handleChange=e=>{this.setState({nickname:e.target.value})}
this.setCourseNickname=()=>{if(this.state.originalNickname!=this.state.nickname)return i.a.ajax({url:"/api/v1/users/self/course_nicknames/".concat(this.props.nicknameInfo.courseId),type:this.state.nickname.length>0?"PUT":"DELETE",data:{nickname:this.state.nickname},success:e=>{this.props.nicknameInfo.onNicknameChange(e.nickname||e.name)},error:()=>{}})}
this.focus=()=>{this.nicknameInput&&this.nicknameInput.focus()}
const t=e.nicknameInfo.nickname==e.nicknameInfo.originalName?"":e.nicknameInfo.nickname
this.state={nickname:t,originalNickname:t}}componentDidMount(){this.nicknameInput&&this.nicknameInput.setAttribute("maxLength","59")}render(){return Object(o["a"])(b["a"],{id:"NicknameInput",label:g.t("Nickname"),placeholder:this.props.nicknameInfo.originalName,value:this.state.nickname,onChange:this.handleChange,onKeyPress:this.onKeyPress,inputRef:e=>{this.nicknameInput=e},size:"small"})}}O.displayName="CourseNicknameEdit"
var v=O
var k=n("TSYQ")
var y=n.n(k)
var M=n("HIhM")
n("MWZS")
n.d(t,"a",(function(){return C}))
const C=[{hexcode:"#BD3C14",get name(){return _.t("Brick")}},{hexcode:"#FF2717",get name(){return _.t("Red")}},{hexcode:"#E71F63",get name(){return _.t("Magenta")}},{hexcode:"#8F3E97",get name(){return _.t("Purple")}},{hexcode:"#65499D",get name(){return _.t("Deep Purple")}},{hexcode:"#4554A4",get name(){return _.t("Indigo")}},{hexcode:"#1770AB",get name(){return _.t("Blue")}},{hexcode:"#0B9BE3",get name(){return _.t("Light Blue")}},{hexcode:"#06A3B7",get name(){return _.t("Cyan")}},{hexcode:"#009688",get name(){return _.t("Teal")}},{hexcode:"#009606",get name(){return _.t("Green")}},{hexcode:"#8D9900",get name(){return _.t("Olive")}},{hexcode:"#D97900",get name(){return _.t("Pumpkin")}},{hexcode:"#FD5D10",get name(){return _.t("Orange")}},{hexcode:"#F06291",get name(){return _.t("Pink")}}]
function A(e){return this.props.withBoxShadow||this.state.currentColor!==e.hexcode}function x(e){return this.state.currentColor===e.hexcode}var I=Object(o["a"])("i",{className:"icon-check"})
var S=Object(o["a"])("svg",{className:"ColorPicker__ColorBlock-line"},void 0,Object(o["a"])("line",{x1:"100%",y1:"0",x2:"0",y2:"100%"}))
var j=Object(o["a"])("i",{className:"icon-warning",role:"presentation"})
const N=l()({displayName:"ColorPicker",hexInputRef:null,getInitialState(){return{isOpen:this.props.isOpen,currentColor:this.props.currentColor,saveInProgress:false}},getDefaultProps:()=>({currentColor:"#efefef",hideOnScroll:function(){try{document.createEvent("TouchEvent")
return false}catch(e){return true}}(),withAnimation:true,withArrow:true,withBorder:true,withBoxShadow:true,withDarkCheck:false,colors:C,setStatusColor:()=>{},allowWhite:false,focusOnMount:true}),componentDidMount(){this.props.focusOnMount&&this.setFocus()
i()(window).on("scroll",this.handleScroll)},componentWillUnmount(){i()(window).off("scroll",this.handleScroll)},componentWillReceiveProps(e){this.setState({isOpen:e.isOpen},()=>{this.state.isOpen&&this.setFocus()})},setFocus(){this.refs.courseNicknameEdit?this.refs.courseNicknameEdit.focus():this.refs.colorSwatch0&&u.a.findDOMNode(this.refs.colorSwatch0).focus()},closeModal(){if(this.isMounted()){this.setState({isOpen:false})
this.props.afterClose&&this.props.afterClose()}},setCurrentColor(e){this.setState({currentColor:e})},setInputColor(e){const t=e.target.value||e.target.placeholder
e.preventDefault()
this.setCurrentColor(t)},setColorForCalendar(e){e=e.replace("#","")
if(e!==this.props.currentColor.replace("#",""))return i.a.ajax({url:"/api/v1/users/"+window.ENV.current_user_id+"/colors/"+this.props.assetString,type:"PUT",data:{hexcode:e},success:()=>{this.props.afterUpdateColor(e)},error:()=>{}})},isValidHex(e){if(!this.props.allowWhite){const t=/^#?([fF]{3}|[fF]{6})$/
if(t.test(e))return false}const t=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
return t.test(e)},setCourseNickname(){if(this.refs.courseNicknameEdit)return this.refs.courseNicknameEdit.setCourseNickname()},onApply(e,t){const n=()=>{this.isMounted()&&this.setState({saveInProgress:false})}
const o=()=>{n()
this.closeModal()}
const r=()=>{n()
i.a.flashError(_.t("Could not save '%{chosenColor}'",{chosenColor:e}))}
this.isValidHex(e)?this.setState({saveInProgress:true},()=>{"StatusColorListItem"===this.props.parentComponent||"ProficiencyRating"===this.props.parentComponent?this.props.setStatusColor(this.state.currentColor,o,r):i.a.when(this.setColorForCalendar(e)).then(()=>{i.a.when(this.setCourseNickname()).then(o,r)},r)}):i.a.flashWarning(_.t("'%{chosenColor}' is not a valid color.",{chosenColor:this.state.currentColor}))},onCancel(){this.setCurrentColor(this.props.currentColor)
this.closeModal()},handleScroll(){this.props.hideOnScroll?this.closeModal():this.state.isOpen&&this.hexInputRef.scrollIntoView()},checkMarkIfMatchingColor(e){if(this.state.currentColor===e)return I},renderColorRows(){return this.props.colors.map((e,t)=>{const n={backgroundColor:e.hexcode}
"#FFFFFF"!==e.hexcode&&A.call(this,e)&&(n.borderColor=e.hexcode)
if(x.call(this,e)){n.borderColor="#73818C"
n.borderWidth="2px"}const r=e.name+" ("+e.hexcode+")"
const i="colorSwatch"+t
const a=y()({ColorPicker__ColorBlock:true,"with-dark-check":this.props.withDarkCheck})
return s.a.createElement("button",{className:a,ref:i,role:"radio","aria-checked":this.state.currentColor===e.hexcode,style:n,title:r,onClick:this.setCurrentColor.bind(null,e.hexcode),key:e.hexcode},"#FFFFFF"===e.hexcode&&S,this.checkMarkIfMatchingColor(e.hexcode),Object(o["a"])("span",{className:"screenreader-only"},void 0,r))})},nicknameEdit(){if(this.props.nicknameInfo)return s.a.createElement(v,{ref:"courseNicknameEdit",nicknameInfo:this.props.nicknameInfo,onEnter:this.onApply.bind(null,this.state.currentColor)})},prompt(){if(!this.props.hidePrompt)return Object(o["a"])("div",{className:"ColorPicker__Header"},void 0,Object(o["a"])("h3",{className:"ColorPicker__Title"},void 0,_.t("Select Course Color")))},colorPreview(){let e=this.isValidHex(this.state.currentColor)?this.state.currentColor:"#FFFFFF"
e.indexOf("#")<0&&(e="#"+e)
const t={color:e,backgroundColor:e}
return Object(o["a"])("div",{className:"ic-Input-group__add-on ColorPicker__ColorPreview",title:this.state.currentColor,style:t,role:"presentation","aria-hidden":"true",tabIndex:"-1"},void 0,!this.isValidHex(this.state.currentColor)&&j)},pickerBody(){const e=y()({ColorPicker__Container:true,"with-animation":this.props.withAnimation,"with-arrow":this.props.withArrow,"with-border":this.props.withBorder,"with-box-shadow":this.props.withBoxShadow})
const t="ColorPickerCustomInput-"+this.props.assetString
return s.a.createElement("div",{className:e,ref:"pickerBody"},this.prompt(),this.nicknameEdit(),Object(o["a"])("div",{className:"ColorPicker__ColorContainer",role:"radiogroup","aria-label":_.t("Select a predefined color.")},void 0,this.renderColorRows()),Object(o["a"])("div",{className:"ColorPicker__CustomInputContainer"},void 0,this.colorPreview(),Object(o["a"])(b["a"],{label:Object(o["a"])(m["a"],{},void 0,_.t("Enter a hexcode here to use a custom color.")),id:t,value:this.state.currentColor,onChange:this.setInputColor,size:"small",margin:"0 0 0 x-small",inputRef:e=>{this.hexInputRef=e}})),Object(o["a"])("div",{className:"ColorPicker__Actions"},void 0,Object(o["a"])(h["a"],{size:"small",onClick:this.onCancel},void 0,_.t("Cancel")),Object(o["a"])(h["a"],{variant:"primary",id:"ColorPicker__Apply",size:"small",onClick:this.onApply.bind(null,this.state.currentColor),disabled:this.state.saveInProgress,margin:"0 0 0 xxx-small"},void 0,_.t("Apply"))))},modalWrapping(e){const t={content:{position:"absolute",top:this.props.positions.top-96,right:"auto",left:Object(M["c"])()?100-this.props.positions.left:this.props.positions.left-174,bottom:0,overflow:"visible",padding:0,borderRadius:"0"}}
return s.a.createElement(p["a"],{ref:"reactModal",style:t,isOpen:this.state.isOpen,onRequestClose:this.closeModal,className:"ColorPicker__Content-Modal right middle horizontal",overlayClassName:"ColorPicker__Overlay"},e)},render(){const e=this.pickerBody()
return this.props.nonModal?e:this.modalWrapping(e)}})
t["b"]=N}}])

//# sourceMappingURL=42-c-e9141d89f7.js.map