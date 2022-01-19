(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[245,515],{"/iD7":function(e,t,n){"use strict"
var r=n("pQTu")
var o=n("m0r6")
Object(o["a"])(JSON.parse('{"de":{"editor":{"keyboard_shortcuts":{"dialog_title":"Tastenkombinationen","keybindings":{"close_submenu":"Schließen des Menüs oder Dialogs bringt Sie ebenfalls in den Editor-Bereich zurück.","navigate_toolbar":"Links/rechts Navigation durch Menü/Symbolleiste","open_menubar":"Editor-Menüleiste öffnen","open_toolbar":"Symbolleiste des Editors öffnen"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Diesen Tastenkombinationsdialog öffnen"},"hu":{"editor":{"keyboard_shortcuts":{"dialog_title":"Billentyűparancsok","keybindings":{"close_submenu":"Menü vagy párbeszédablak bezárása, visszavisz a szerkesztő felületre","navigate_toolbar":"Navigáljon balra/jobbra a menün/eszköztáron át","open_menubar":"Szerkesztői menüsor megnyitása","open_toolbar":"Szerkesztői eszköztár megnyitása"}}}}}'))
n("jQeR")
n("0sPK")
var i=r["default"].scoped("editor.keyboard_shortcuts")
var a=n("ouhR")
var c=n.n(a)
var s=n("FIFq")
var l=n.n(s)
var u=n("3O+N")
var d=n.n(u)
n("DfGn")
var b=n("EvX+")
var h=d.a.default
var p=h.template,f=h.templates=h.templates||{}
var m="editor/KeyboardShortcuts"
f[m]=p((function(e,t,n,r,o){this.compilerInfo=[4,">= 1.0.0"]
n=this.merge(n,e.helpers)
o=o||{}
var i,a="",c="function",s=this.escapeExpression,l=this
function u(e,t){var r,o,i=""
i+="\n    <li>\n      <code>"
if(o=n.key)r=o.call(e,{hash:{},data:t})
else{o=e&&e.key
r=typeof o===c?o.call(e,{hash:{},data:t}):o}i+=s(r)+"</code>\n      <span>"
if(o=n.description)r=o.call(e,{hash:{},data:t})
else{o=e&&e.description
r=typeof o===c?o.call(e,{hash:{},data:t}):o}i+=s(r)+"</span>\n    </li>\n  "
return i}a+='<ul class="tinymce-keyboard-shortcuts">\n  '
i=n.each.call(t,t&&t.keybindings,{hash:{},inverse:l.noop,fn:l.program(1,u,o),data:o});(i||0===i)&&(a+=i)
a+="\n</ul>\n"
return a}))
b["a"].loadStylesheet("jst/editor/KeyboardShortcuts",{new_styles_normal_contrast:{combinedChecksum:"f4493af988"},new_styles_high_contrast:{combinedChecksum:"f4493af988"},responsive_layout_normal_contrast:{combinedChecksum:"f4493af988"},responsive_layout_high_contrast:{combinedChecksum:"f4493af988"},new_styles_normal_contrast_rtl:{combinedChecksum:"9b568bbcaf"},new_styles_high_contrast_rtl:{combinedChecksum:"9b568bbcaf"},responsive_layout_normal_contrast_rtl:{combinedChecksum:"9b568bbcaf"},responsive_layout_high_contrast_rtl:{combinedChecksum:"9b568bbcaf"}}[b["a"].getCssVariant()])
var y=f[m]
var g,v
g=[48,119]
v=l.a.View.extend({className:"tinymce-keyboard-shortcuts-toggle",tagName:"a",events:{click:"openDialog"},keybindings:[{key:"ALT+F9",description:i.t("keybindings.open_menubar","Open the editor's menubar")},{key:"ALT+F10",description:i.t("keybindings.open_toolbar","Open the editor's toolbar")},{key:"ESC",description:i.t("keybindings.close_submenu","Close menu or dialog, also gets you back to editor area")},{key:"TAB/Arrows",description:i.t("keybindings.navigate_toolbar","Navigate left/right through menu/toolbar")},{key:"ALT+F8",description:i.t("Open this keyboard shortcuts dialog")}],template:y,initialize:function(){this.el.href="#"
c()(this.el).attr("title",i.t("dialog_title","Keyboard Shortcuts"))
c()('<i class="icon-keyboard-shortcuts" aria-hidden="true" />').appendTo(this.el)
return c()('<span class="screenreader-only" />').text(i.t("dialog_title","Keyboard Shortcuts")).appendTo(this.el)},render:function(){var e
e={keybindings:this.keybindings}
this.$dialog=c()(this.template(e)).dialog({title:i.t("dialog_title","Keyboard Shortcuts"),width:600,resizable:true,autoOpen:false})
this.bindEvents()
return this},bindEvents:function(){if(!ENV.use_rce_enhancements){c()(document).on("keyup.tinymce_keyboard_shortcuts",this.openDialogByKeybinding.bind(this))
return c()(document).on("editorKeyUp",function(e,t){return this.openDialogByKeybinding(t)}.bind(this))}},remove:function(){c()(document).off("keyup.tinymce_keyboard_shortcuts")
c()(document).off("editorKeyUp")
return this.$dialog.dialog("destroy")},openDialog:function(){if(!this.$dialog.dialog("isOpen"))return this.$dialog.dialog("open")},openDialogByKeybinding:function(e){if(g.indexOf(e.keyCode)>-1&&e.altKey)return this.openDialog()}})
t["a"]=v},"2BSC":function(e,t,n){"use strict"
var r=n("FIFq")
var o=n.n(r)
var i=n("fQ4S")
var a=n("ouhR")
var c=n.n(a)
var s=n("GLiE")
var l=n.n(s)
var u=n("pQTu")
var d=n("m0r6")
Object(d["a"])(JSON.parse('{"de":{"errors":{"blank":"Erforderlich","required":"Erforderlich","unsaved_changes":"Sie haben nicht gespeicherte Änderungen."}},"hu":{"errors":{"blank":"Kötelező","required":"Kötelező","unsaved_changes":"Még el nem mentett módosításai vannak."}}}'))
n("jQeR")
n("0sPK")
var b=u["default"].scoped("errors")
n("tVj+")
n("vpJZ")
n("Z+Ib")
var h=n("xe+K")
var p=n("cbNQ")
var f=function(e,t){return function(){return e.apply(t,arguments)}},m=function(e,t){for(var n in t)y.call(t,n)&&(e[n]=t[n])
function r(){this.constructor=e}r.prototype=t.prototype
e.prototype=new r
e.__super__=t.prototype
return e},y={}.hasOwnProperty,g=[].slice
t["a"]=function(e){m(t,e)
function t(){this.checkUnload=f(this.checkUnload,this)
this.watchUnload=f(this.watchUnload,this)
this.onSaveFail=f(this.onSaveFail,this)
this.onSaveSuccess=f(this.onSaveSuccess,this)
return t.__super__.constructor.apply(this,arguments)}t.mixin(i["a"])
t.prototype.tagName="form"
t.prototype.className="validated-form-view"
t.prototype.events={submit:"submit"}
t.prototype.saveOpts={wait:true}
t.prototype.disableWhileLoadingOpts={}
t.prototype.submit=function(e,t){var n,r,o,i,a,s,u,d,b
null==t&&(t=h["d"])
null!=e&&e.preventDefault()
this.hideErrors()
d=this.$el.find("textarea[data-rich_text]").toArray()
u=true
d.length>0&&window.ENV.use_rce_enhancements&&(u=d.map((function(e){return t(c()(e),"checkReadyToGetCode",window.confirm)})).every((function(e){return e})))
if(!u)return
r=this.getFormData()
a=this.validateBeforeSave(r,{})
if(0===l.a.keys(a).length){i=new c.a.Deferred
b=this.saveFormData(r)
b.then(this.onSaveSuccess.bind(this),this.onSaveFail.bind(this))
b.fail((p=this,function(){i.reject()
if(p.setFocusAfterError)return p.setFocusAfterError()}))
this.dontRenableAfterSaveSuccess||b.done((function(){return i.resolve()}))
this.$el.disableWhileLoading(i,this.disableWhileLoadingOpts)
this.trigger("submit")
return b}o=l.a.map(c()("[data-error-type]"),(function(e){return c()(e).attr("data-error-type")}))
n=l.a.chain(l.a.keys(a)).reject((function(e){return l.a.includes(o,e)})).value()
s=n[0]||o[0]
this.findField(s).focus()
return window.setTimeout(function(e){return function(){e.showErrors(a)
return null}}(this),50)
var p}
t.prototype.getFormData=function(){return this.$el.toJSON()}
t.prototype.saveFormData=function(e){var t,n
null==e&&(e=null)
t=this.model
e||(e=this.getFormData())
n=this.saveOpts
return t.save(e,n)}
t.prototype.validate=function(e){var t,n
null==e&&(e={})
e||(e={})
t=e["data"]||this.getFormData()
n=this.validateFormData(t,{})
this.hideErrors()
this.showErrors(n)
return 0===n.length}
t.prototype.validateFormData=function(e){return{}}
t.prototype.validateBeforeSave=function(e){return this.validateFormData(e)}
t.prototype.hideErrors=function(){return this.$el.hideErrors()}
t.prototype.onSaveSuccess=function(){return this.trigger.apply(this,["success"].concat(g.call(arguments)))}
t.prototype.onSaveFail=function(e){var t
t=this.parseErrorResponse(e)
t||(t={})
this.showErrors(t)
return this.trigger.apply(this,["fail",t].concat(g.call(arguments)))}
t.prototype.parseErrorResponse=function(e){if(422===e.status)return{authenticity_token:"invalid"}
try{return c.a.parseJSON(e.responseText).errors}catch(e){e
return{}}}
t.prototype.translations=Object(p["b"])({},{required:function(){return b.t("required","Required")},blank:function(){return b.t("blank","Required")},unsaved:function(){return b.t("unsaved_changes","You have unsaved changes.")}})
t.prototype.fieldSelectors=null
t.prototype.findField=function(e){var t,n,r
r=(null!=(n=this.fieldSelectors)?n[e]:void 0)||"[name='"+e+"']"
t=this.$(r)
0===t.length&&(t=this.$("[data-error-type='"+e+"']"))
t.data("rich_text")&&(t=this.findSiblingTinymce(t))
t.length>1&&(t=t.not("[type=hidden]"))
return t}
t.prototype.castJSON=function(e){var t
if(!l.a.isObject(e))return e
if(null!=e.toJSON)return e.toJSON()
t=l.a.clone(e)
l.a.each(t,(n=this,function(e,r){return t[r]=n.castJSON(e)}))
var n
return t}
t.prototype.original=null
t.prototype.watchUnload=function(){this.original=this.castJSON(this.getFormData())
this.unwatchUnload()
return c()(window).on("beforeunload",this.checkUnload)}
t.prototype.unwatchUnload=function(){return c()(window).off("beforeunload",this.checkUnload)}
t.prototype.checkUnload=function(){var e
e=this.castJSON(this.getFormData())
if(!l.a.isEqual(this.original,e))return this.translations.unsaved}
return t}(o.a.View)},"5JRF":function(e,t,n){"use strict"
var r=n("rePB")
var o=n("1OyB")
var i=n("vuIU")
var a=n("md7G")
var c=n("foSv")
var s=n("Ji7U")
var l=n("q1tI")
var u=n.n(l)
var d=n("17x9")
var b=n.n(d)
var h=n("TSYQ")
var p=n.n(h)
var f=n("J2CL")
var m=n("nAyT")
var y=n("KgFQ")
var g=n("jtGx")
var v=n("VTBJ")
function _(e){var t=e.typography,n=e.colors,r=e.spacing
return Object(v["a"])({},t,{primaryInverseColor:n.textLightest,primaryColor:n.textDarkest,secondaryColor:n.textDark,secondaryInverseColor:n.textLight,warningColor:n.textWarning,brandColor:n.textBrand,errorColor:n.textDanger,successColor:n.textSuccess,alertColor:n.textAlert,paragraphMargin:"".concat(r.medium," 0")})}_.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"],brandColor:e["ic-brand-primary"]}}
n.d(t,"a",(function(){return x}))
var j,w,k,B,U
var O={componentId:"cjUyb",template:function(e){return"\n\n.cjUyb_bGBk{font-family:".concat(e.fontFamily||"inherit","}\n\n.cjUyb_bGBk sub,.cjUyb_bGBk sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n\n.cjUyb_bGBk sup{top:-0.4em}\n\n.cjUyb_bGBk sub{bottom:-0.4em}\n\n.cjUyb_bGBk code,.cjUyb_bGBk pre{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamilyMonospace||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n.cjUyb_bGBk em,.cjUyb_bGBk i{font-style:italic}\n\n.cjUyb_bGBk b,.cjUyb_bGBk strong{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.cjUyb_bGBk p{display:block;margin:").concat(e.paragraphMargin||"inherit",";padding:0}\n\ninput.cjUyb_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.cjUyb_bGBk[type]{text-align:left}\n\n[dir=rtl] input.cjUyb_bGBk[type]{text-align:right}\n\n.cjUyb_bGBk:focus,input.cjUyb_bGBk[type]:focus{outline:none}\n\n.cjUyb_bGBk.cjUyb_qFsi,input.cjUyb_bGBk[type].cjUyb_qFsi{color:").concat(e.primaryColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_bLsb,input.cjUyb_bGBk[type].cjUyb_bLsb{color:").concat(e.secondaryColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_ezBQ,input.cjUyb_bGBk[type].cjUyb_ezBQ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_dlnd,input.cjUyb_bGBk[type].cjUyb_dlnd{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_cJLh,input.cjUyb_bGBk[type].cjUyb_cJLh{color:").concat(e.successColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_fpfC,input.cjUyb_bGBk[type].cjUyb_fpfC{color:").concat(e.brandColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_eHcp,input.cjUyb_bGBk[type].cjUyb_eHcp{color:").concat(e.warningColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_dwua,input.cjUyb_bGBk[type].cjUyb_dwua{color:").concat(e.errorColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_eZgl,input.cjUyb_bGBk[type].cjUyb_eZgl{color:").concat(e.alertColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_fbNi,input.cjUyb_bGBk[type].cjUyb_fbNi{-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;word-break:break-word}\n\n.cjUyb_bGBk.cjUyb_drST,input.cjUyb_bGBk[type].cjUyb_drST{font-weight:").concat(e.fontWeightNormal||"inherit","}\n\n.cjUyb_bGBk.cjUyb_pEgL,input.cjUyb_bGBk[type].cjUyb_pEgL{font-weight:").concat(e.fontWeightLight||"inherit","}\n\n.cjUyb_bGBk.cjUyb_bdMA,input.cjUyb_bGBk[type].cjUyb_bdMA{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.cjUyb_bGBk.cjUyb_ijuF,input.cjUyb_bGBk[type].cjUyb_ijuF{font-style:normal}\n\n.cjUyb_bGBk.cjUyb_fetN,input.cjUyb_bGBk[type].cjUyb_fetN{font-style:italic}\n\n.cjUyb_bGBk.cjUyb_dfBC,input.cjUyb_bGBk[type].cjUyb_dfBC{font-size:").concat(e.fontSizeXSmall||"inherit","}\n\n.cjUyb_bGBk.cjUyb_doqw,input.cjUyb_bGBk[type].cjUyb_doqw{font-size:").concat(e.fontSizeSmall||"inherit","}\n\n.cjUyb_bGBk.cjUyb_ycrn,input.cjUyb_bGBk[type].cjUyb_ycrn{font-size:").concat(e.fontSizeMedium||"inherit","}\n\n.cjUyb_bGBk.cjUyb_cMDj,input.cjUyb_bGBk[type].cjUyb_cMDj{font-size:").concat(e.fontSizeLarge||"inherit","}\n\n.cjUyb_bGBk.cjUyb_eoMd,input.cjUyb_bGBk[type].cjUyb_eoMd{font-size:").concat(e.fontSizeXLarge||"inherit","}\n\n.cjUyb_bGBk.cjUyb_fdca,input.cjUyb_bGBk[type].cjUyb_fdca{font-size:").concat(e.fontSizeXXLarge||"inherit","}\n\n.cjUyb_bGBk.cjUyb_fEWX,input.cjUyb_bGBk[type].cjUyb_fEWX{line-height:").concat(e.lineHeight||"inherit","}\n\n.cjUyb_bGBk.cjUyb_fNIu,input.cjUyb_bGBk[type].cjUyb_fNIu{line-height:").concat(e.lineHeightFit||"inherit","}\n\n.cjUyb_bGBk.cjUyb_dfDs,input.cjUyb_bGBk[type].cjUyb_dfDs{line-height:").concat(e.lineHeightCondensed||"inherit","}\n\n.cjUyb_bGBk.cjUyb_bDjL,input.cjUyb_bGBk[type].cjUyb_bDjL{line-height:").concat(e.lineHeightDouble||"inherit","}\n\n.cjUyb_bGBk.cjUyb_eQnG,input.cjUyb_bGBk[type].cjUyb_eQnG{letter-spacing:").concat(e.letterSpacingNormal||"inherit","}\n\n.cjUyb_bGBk.cjUyb_bbUA,input.cjUyb_bGBk[type].cjUyb_bbUA{letter-spacing:").concat(e.letterSpacingCondensed||"inherit","}\n\n.cjUyb_bGBk.cjUyb_bRWU,input.cjUyb_bGBk[type].cjUyb_bRWU{letter-spacing:").concat(e.letterSpacingExpanded||"inherit","}\n\n.cjUyb_bGBk.cjUyb_wZsr,input.cjUyb_bGBk[type].cjUyb_wZsr{text-transform:none}\n\n.cjUyb_bGBk.cjUyb_fCZK,input.cjUyb_bGBk[type].cjUyb_fCZK{text-transform:capitalize}\n\n.cjUyb_bGBk.cjUyb_dsRi,input.cjUyb_bGBk[type].cjUyb_dsRi{text-transform:uppercase}\n\n.cjUyb_bGBk.cjUyb_bLtD,input.cjUyb_bGBk[type].cjUyb_bLtD{text-transform:lowercase}")},root:"cjUyb_bGBk","color-primary":"cjUyb_qFsi","color-secondary":"cjUyb_bLsb","color-primary-inverse":"cjUyb_ezBQ","color-secondary-inverse":"cjUyb_dlnd","color-success":"cjUyb_cJLh","color-brand":"cjUyb_fpfC","color-warning":"cjUyb_eHcp","color-error":"cjUyb_dwua","color-alert":"cjUyb_eZgl","wrap-break-word":"cjUyb_fbNi","weight-normal":"cjUyb_drST","weight-light":"cjUyb_pEgL","weight-bold":"cjUyb_bdMA","style-normal":"cjUyb_ijuF","style-italic":"cjUyb_fetN","x-small":"cjUyb_dfBC",small:"cjUyb_doqw",medium:"cjUyb_ycrn",large:"cjUyb_cMDj","x-large":"cjUyb_eoMd","xx-large":"cjUyb_fdca","lineHeight-default":"cjUyb_fEWX","lineHeight-fit":"cjUyb_fNIu","lineHeight-condensed":"cjUyb_dfDs","lineHeight-double":"cjUyb_bDjL","letterSpacing-normal":"cjUyb_eQnG","letterSpacing-condensed":"cjUyb_bbUA","letterSpacing-expanded":"cjUyb_bRWU","transform-none":"cjUyb_wZsr","transform-capitalize":"cjUyb_fCZK","transform-uppercase":"cjUyb_dsRi","transform-lowercase":"cjUyb_bLtD"}
var x=(j=Object(m["a"])("7.0.0",null,"Use Text from ui-text instead."),w=Object(f["themeable"])(_,O),j(k=w(k=(U=B=function(e){Object(s["a"])(t,e)
function t(){Object(o["a"])(this,t)
return Object(a["a"])(this,Object(c["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){var e
var n=this.props,o=n.wrap,i=n.weight,a=n.fontStyle,c=n.size,s=n.lineHeight,l=n.letterSpacing,d=n.transform,b=n.color,h=n.children
var f=Object(y["a"])(t,this.props)
return u.a.createElement(f,Object.assign({},Object(g["a"])(this.props,t.propTypes),{className:p()((e={},Object(r["a"])(e,O.root,true),Object(r["a"])(e,O[c],c),Object(r["a"])(e,O["wrap-".concat(o)],o),Object(r["a"])(e,O["weight-".concat(i)],i),Object(r["a"])(e,O["style-".concat(a)],a),Object(r["a"])(e,O["transform-".concat(d)],d),Object(r["a"])(e,O["lineHeight-".concat(s)],s),Object(r["a"])(e,O["letterSpacing-".concat(l)],l),Object(r["a"])(e,O["color-".concat(b)],b),e)),ref:this.props.elementRef}),h)}}])
t.displayName="Text"
return t}(l["Component"]),B.propTypes={as:b.a.elementType,wrap:b.a.oneOf(["normal","break-word"]),weight:b.a.oneOf(["normal","light","bold"]),fontStyle:b.a.oneOf(["italic","normal"]),size:b.a.oneOf(["x-small","small","medium","large","x-large","xx-large"]),lineHeight:b.a.oneOf(["default","fit","condensed","double"]),letterSpacing:b.a.oneOf(["normal","condensed","expanded"]),transform:b.a.oneOf(["none","capitalize","uppercase","lowercase"]),color:b.a.oneOf(["primary","secondary","primary-inverse","secondary-inverse","success","error","alert","warning","brand"]),children:b.a.node,elementRef:b.a.func},B.defaultProps={as:"span",wrap:"normal",size:"medium",letterSpacing:"normal",children:null,elementRef:void 0,color:void 0,transform:void 0,lineHeight:void 0,fontStyle:void 0,weight:void 0},U))||k)||k)},AXvA:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var r=n("HMVb")
function o(e,t){var n=Object.keys(e)
if(1!==n.length)throw new Error("Expected exactly one key in query object.")
var o=n[0]
var a=["minHeight","maxHeight","minWidth","maxWidth"]
if(-1===a.indexOf(o))throw new Error("Invalid key `".concat(o,"` in query object. Valid keys should consist of one of the following: ")+"".concat(a.join(", ")," (case sensitive)"))
var c=e[o]
if("string"!==typeof c&&"number"!==typeof c)throw new Error("The value of the query object must be a string or number.")
if(!c)throw new Error("No value supplied for query object")
return"(".concat(i(o.toLowerCase()),": ").concat(Object(r["a"])(c,t),"px)")}function i(e){return e.slice(0,3)+"-"+e.slice(3)}},BYL3:function(e,t,n){"use strict"
var r=n("ouhR")
var o=n.n(r)
var i=n("xe+K")
const a=/^(?:select|textarea)/i
const c=/\r?\n/g
const s=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week|file)$/i
function l(){if(this.elements)return o.a.makeArray(this.elements)
{const e=o()(this).find(":input")
return e.length?e:this}}function u(){return this.name&&!this.disabled&&(this.checked||a.test(this.nodeName)||s.test(this.type))}function d(e,t){"string"===typeof t&&(t=t.replace(c,"\r\n"))
return{name:e,value:t}}function b(){const e=o()(this)
const t=(()=>{if("file"!==this.type)return e.hasClass("datetime_field_enabled")?""===e.val()?null:e.data("date")||null:e.data("rich_text")?Object(i["d"])(e,"get_code",false):e.val()
if(e.val())return this})()
return o.a.isArray(t)?t.map(e=>d(this.name,e)):d(this.name,t)}o.a.fn.serializeForm=function(){return this.map(l).filter(u).map(b).get()}},"EvX+":function(e,t,n){"use strict"
var r=n("HIhM")
const o={}
const i={getCssVariant(){const e=window.ENV.use_responsive_layout?"responsive_layout":"new_styles"
const t=window.ENV.use_high_contrast?"high_contrast":"normal_contrast"
const n=Object(r["c"])()?"_rtl":""
return"".concat(e,"_").concat(t).concat(n)},urlFor(e,t){let n=t.combinedChecksum,r=t.includesNoVariables
const o=r?"no_variables":i.getCssVariant()
return[window.ENV.ASSET_HOST||"","dist","brandable_css",o,"".concat(e,"-").concat(n,".css")].join("/")},loadStylesheet(e,t){if(e in o)return
const n=document.createElement("link")
n.rel="stylesheet"
n.href=i.urlFor(e,t)
n.setAttribute("data-loaded-by-brandableCss",true)
document.head.appendChild(n)
window.canvasCssVariablesPolyfill&&window.canvasCssVariablesPolyfill(n)}}
t["a"]=i},HMVb:function(e,t,n){"use strict"
var r=n("ODXe")
var o=n("i/8D")
var i=n("DUTp")
var a=n("IPIv")
var c={}
function s(e,t){if(!o["a"])return 16
var n=e||Object(i["a"])(e).documentElement
if(!t&&c[n])return c[n]
var r=parseInt(Object(a["a"])(n).getPropertyValue("font-size"))
c[n]=r
return r}var l=n("CyAq")
n.d(t,"a",(function(){return u}))
function u(e,t){var n=t||document.body
if(!e||"number"===typeof e)return e
var o=Object(l["a"])(e),i=Object(r["a"])(o,2),a=i[0],c=i[1]
return"rem"===c?a*s():"em"===c?a*s(n):a}},HbFp:function(e,t,n){"use strict"
var r=n("qJBq")
var o=n.n(r)
var i=n("pQTu")
const a={_parseNumber:o.a,parse(e){if(null==e)return NaN
if("number"===typeof e)return e
let t=a._parseNumber(e.toString(),{thousands:i["default"].lookup("number.format.delimiter"),decimal:i["default"].lookup("number.format.separator")})
isNaN(t)&&(t=a._parseNumber(e))
e.toString().match(/e/)&&isNaN(t)&&(t=parseFloat(e))
return t},validate:e=>!isNaN(a.parse(e))}
t["a"]=a},JNmV:function(e,t,n){"use strict"
n.r(t)
var r=n("ouhR")
var o=n.n(r)
n("T3Mz")
const i=function(){const e=document.createEvent("Event")
e.initEvent("rubricEditDataReady",true,true)
document.dispatchEvent(e)}
o.a.isReady?i():o()(document).ready(()=>i())},TBRb:function(e,t,n){"use strict"
var r=n("ouhR")
var o=n.n(r)
var i=n("GLiE")
var a=n.n(i)
var c=n("Nxtp")
n("YGE8")
o.a.fn.fixDialogButtons=function(){return this.each((function(){const e=o()(this)
const t=e.find(".button-container:last .btn, button[type=submit]")
if(t.length){e.find(".button-container:last, button[type=submit]").hide()
let n=o.a.map(t.toArray(),t=>{const n=o()(t)
let r=n.attr("class")||""
const i=n.attr("id")
if(n.is(".dialog_closer")){n.off(".fixdialogbuttons")
n.on("click.fixdialogbuttons",Object(c["a"])(()=>e.dialog("close")))}"submit"===n.prop("type")&&n[0].form&&(r+=" button_type_submit")
return{text:n.text(),"data-text-while-loading":n.data("textWhileLoading"),click:()=>n.click(),class:r,id:i}})
n=a.a.sortBy(n,e=>e.class.match(/btn-primary/)?1:0)
e.dialog("option","buttons",n)}}))}},WEeK:function(e,t,n){"use strict"
var r=n("rePB")
var o=n("Ff2n")
var i=n("1OyB")
var a=n("vuIU")
var c=n("md7G")
var s=n("foSv")
var l=n("Ji7U")
var u=n("q1tI")
var d=n.n(u)
var b=n("17x9")
var h=n.n(b)
var p=n("TSYQ")
var f=n.n(p)
var m=n("cClk")
var y=n("nAyT")
var g=n("jtGx")
var v=n("E+IV")
var _=n("/UXv")
var j=n("sTNg")
var w=n("TstA")
var k=n("BTe1")
var B=n("J2CL")
function U(e){var t=e.colors,n=e.typography,r=e.borders,o=e.spacing,i=e.forms
return{fontFamily:n.fontFamily,fontWeight:n.fontWeightNormal,borderWidth:r.widthSmall,borderStyle:r.style,borderColor:t.borderMedium,borderRadius:r.radiusMedium,iconColor:t.textDarkest,color:t.textDarkest,background:t.backgroundLightest,padding:o.small,focusOutlineWidth:r.widthMedium,focusOutlineStyle:r.style,focusOutlineColor:t.borderBrand,errorBorderColor:t.borderDanger,errorOutlineColor:t.borderDanger,placeholderColor:t.textDark,smallFontSize:n.fontSizeSmall,smallHeight:i.inputHeightSmall,mediumFontSize:n.fontSizeMedium,mediumHeight:i.inputHeightMedium,largeFontSize:n.fontSizeLarge,largeHeight:i.inputHeightLarge}}U.canvas=function(e){return{color:e["ic-brand-font-color-dark"],iconColor:e["ic-brand-font-color-dark"],focusBorderColor:e["ic-brand-primary"],focusOutlineColor:e["ic-brand-primary"]}}
n.d(t,"a",(function(){return q}))
var O,x,H,S,M
var C={componentId:"qBMHb",template:function(e){return"\n\n.qBMHb_cSXm{background:".concat(e.background||"inherit",";border:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";position:relative}\n\n.qBMHb_cSXm,.qBMHb_cSXm:before{box-sizing:border-box;display:block}\n\n.qBMHb_cSXm:before{border:").concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:calc(").concat(e.borderRadius||"inherit",'*1.5);bottom:-0.25rem;content:"";left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.95);transition:all 0.2s}\n\n.qBMHb_cSXm.qBMHb_cVYB:before{opacity:1;transform:scale(1)}\n\n.qBMHb_cSXm.qBMHb_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.qBMHb_cSXm.qBMHb_fszt,.qBMHb_cSXm.qBMHb_fszt.qBMHb_cVYB:before{border-color:').concat(e.errorBorderColor||"inherit","}\n\n.qBMHb_cwos,input[type].qBMHb_cwos{-moz-appearance:none;-moz-osx-font-smoothing:grayscale;-webkit-appearance:none;-webkit-font-smoothing:antialiased;all:initial;animation:none 0s ease 0s 1 normal none running;appearance:none;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:transparent;border:medium none currentColor;border:none;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:#000;color:").concat(e.color||"inherit",";column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;display:block;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamily||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;font-weight:").concat(e.fontWeight||"inherit",";height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;outline:none;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding:0 ").concat(e.padding||"inherit",";page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;width:100%;word-spacing:normal;z-index:auto}\n\n.qBMHb_cwos::-ms-clear,input[type].qBMHb_cwos::-ms-clear{display:none}\n\n.qBMHb_cwos[autocomplete=off]::-webkit-contacts-auto-fill-button,input[type].qBMHb_cwos[autocomplete=off]::-webkit-contacts-auto-fill-button{display:none!important}\n\n.qBMHb_cwos:focus,input[type].qBMHb_cwos:focus{box-shadow:none}\n\n.qBMHb_cwos:-ms-input-placeholder,input[type].qBMHb_cwos:-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.qBMHb_cwos::-ms-input-placeholder,input[type].qBMHb_cwos::-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.qBMHb_cwos::placeholder,input[type].qBMHb_cwos::placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.qBMHb_cwos.qBMHb_doqw,input[type].qBMHb_cwos.qBMHb_doqw{font-size:").concat(e.smallFontSize||"inherit",";height:calc(").concat(e.smallHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.smallHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_ycrn,input[type].qBMHb_cwos.qBMHb_ycrn{font-size:").concat(e.mediumFontSize||"inherit",";height:calc(").concat(e.mediumHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.mediumHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_cMDj,input[type].qBMHb_cwos.qBMHb_cMDj{font-size:").concat(e.largeFontSize||"inherit",";height:calc(").concat(e.largeHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.largeHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_EMjX,input[type].qBMHb_cwos.qBMHb_EMjX{text-align:start}\n\n[dir=ltr] .qBMHb_cwos.qBMHb_EMjX,[dir=ltr] input[type].qBMHb_cwos.qBMHb_EMjX{text-align:left}\n\n[dir=rtl] .qBMHb_cwos.qBMHb_EMjX,[dir=rtl] input[type].qBMHb_cwos.qBMHb_EMjX{text-align:right}\n\n.qBMHb_cwos.qBMHb_ImeN,[dir=ltr] .qBMHb_cwos.qBMHb_ImeN,[dir=ltr] input[type].qBMHb_cwos.qBMHb_ImeN,[dir=rtl] .qBMHb_cwos.qBMHb_ImeN,[dir=rtl] input[type].qBMHb_cwos.qBMHb_ImeN,input[type].qBMHb_cwos.qBMHb_ImeN{text-align:center}")},facade:"qBMHb_cSXm",focused:"qBMHb_cVYB",disabled:"qBMHb_ywdX",invalid:"qBMHb_fszt",input:"qBMHb_cwos",small:"qBMHb_doqw",medium:"qBMHb_ycrn",large:"qBMHb_cMDj","textAlign--start":"qBMHb_EMjX","textAlign--center":"qBMHb_ImeN"}
var q=(O=Object(y["a"])("7.0.0",{label:"renderLabel",disabled:"interaction",readOnly:"interaction",required:"isRequired",inline:"display"}),x=Object(B["themeable"])(U,C),O(H=x(H=(M=S=function(e){Object(l["a"])(t,e)
function t(e){var n
Object(i["a"])(this,t)
n=Object(c["a"])(this,Object(s["a"])(t).call(this))
n.handleInputRef=function(e){n._input=e
n.props.inputRef(e)}
n.handleChange=function(e){n.props.onChange(e,e.target.value)}
n.handleBlur=function(e){n.props.onBlur(e)
n.setState({hasFocus:false})}
n.handleFocus=function(e){n.props.onFocus(e)
n.setState({hasFocus:true})}
n.state={hasFocus:false}
n._defaultId=Object(k["a"])("TextInput")
n._messagesId=Object(k["a"])("TextInput-messages")
return n}Object(a["a"])(t,[{key:"focus",value:function(){this._input.focus()}},{key:"renderInput",value:function(){var e
var t=this.props,n=t.type,i=t.size,a=t.textAlign,c=t.placeholder,s=t.value,l=t.defaultValue,u=t.disabled,b=t.readOnly,h=t.interaction,p=t.required,m=t.isRequired,y=Object(o["a"])(t,["type","size","textAlign","placeholder","value","defaultValue","disabled","readOnly","interaction","required","isRequired"])
var v=Object(g["b"])(y)
var _=(e={},Object(r["a"])(e,C.input,true),Object(r["a"])(e,C[i],i),Object(r["a"])(e,C["textAlign--".concat(a)],a),e)
var j=""
v["aria-describedby"]&&(j="".concat(v["aria-describedby"]))
this.hasMessages&&(j=""!==j?"".concat(j," ").concat(this._messagesId):this._messagesId)
return d.a.createElement("input",Object.assign({},v,{className:f()(_),defaultValue:l,value:s,placeholder:c,ref:this.handleInputRef,type:n,id:this.id,required:m||p,"aria-invalid":this.invalid?"true":null,disabled:"disabled"===h||u,readOnly:"readonly"===h||b,"aria-describedby":""!==j?j:null,onChange:this.handleChange,onBlur:this.handleBlur,onFocus:this.handleFocus}))}},{key:"render",value:function(){var e
var t=this.props,n=t.interaction,o=t.disabled,i=t.width,a=t.inline,c=t.display,s=t.label,l=t.renderLabel,u=t.renderBeforeInput,b=t.renderAfterInput,h=t.messages,p=t.inputContainerRef,m=t.icon
var y=u||b||m
var g=(e={},Object(r["a"])(e,C.facade,true),Object(r["a"])(e,C.disabled,"disabled"===n||o),Object(r["a"])(e,C.invalid,this.invalid),Object(r["a"])(e,C.focused,this.state.hasFocus),e)
return d.a.createElement(j["FormField"],{id:this.id,label:Object(v["a"])(l||s),messagesId:this._messagesId,messages:h,inline:"inline-block"===c||a,width:i,inputContainerRef:p,layout:this.props.layout},d.a.createElement("span",{className:f()(g)},y?d.a.createElement(w["a"],{wrap:"wrap"},u&&d.a.createElement(w["a"].Item,{padding:"0 0 0 small"},Object(v["a"])(u)),d.a.createElement(w["a"].Item,{shouldGrow:true,shouldShrink:true},d.a.createElement(w["a"],{__dangerouslyIgnoreExperimentalWarnings:true},d.a.createElement(w["a"].Item,{shouldGrow:true,shouldShrink:true},this.renderInput()),(b||m)&&d.a.createElement(w["a"].Item,{padding:"0 small 0 0"},b?Object(v["a"])(b):Object(v["a"])(m))))):this.renderInput()))}},{key:"hasMessages",get:function(){return this.props.messages&&this.props.messages.length>0}},{key:"invalid",get:function(){return this.props.messages&&this.props.messages.findIndex((function(e){return"error"===e.type}))>=0}},{key:"focused",get:function(){return Object(_["a"])(this._input)}},{key:"value",get:function(){return this._input.value}},{key:"id",get:function(){return this.props.id||this._defaultId}}])
t.displayName="TextInput"
return t}(u["Component"]),S.propTypes={renderLabel:h.a.oneOfType([h.a.node,h.a.func]),type:h.a.oneOf(["text","email","url","tel","search","password"]),id:h.a.string,value:Object(m["a"])(h.a.string),defaultValue:h.a.string,interaction:h.a.oneOf(["enabled","disabled","readonly"]),messages:h.a.arrayOf(j["FormPropTypes"].message),size:h.a.oneOf(["small","medium","large"]),textAlign:h.a.oneOf(["start","center"]),width:h.a.string,display:h.a.oneOf(["inline-block","block"]),placeholder:h.a.string,isRequired:h.a.bool,inputRef:h.a.func,inputContainerRef:h.a.func,renderBeforeInput:h.a.oneOfType([h.a.node,h.a.func]),renderAfterInput:h.a.oneOfType([h.a.node,h.a.func]),onChange:h.a.func,onBlur:h.a.func,onFocus:h.a.func,icon:h.a.func,label:h.a.oneOfType([h.a.node,h.a.func]),disabled:h.a.bool,readOnly:h.a.bool,required:h.a.bool,inline:h.a.bool},S.defaultProps={renderLabel:void 0,type:"text",id:void 0,interaction:"enabled",isRequired:false,value:void 0,defaultValue:void 0,display:"block",placeholder:void 0,width:void 0,size:"medium",textAlign:"start",messages:[],inputRef:function(e){},inputContainerRef:function(e){},onChange:function(e,t){},onBlur:function(e){},onFocus:function(e){},renderBeforeInput:void 0,renderAfterInput:void 0},M))||H)||H)},cClk:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"onChange"
var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"defaultValue"
return function(r,o,i){var a=e.apply(null,arguments)
if(a)return a
if(r[o]&&"function"!==typeof r[t])return new Error(["You provided a '".concat(o,"' prop without an '").concat(t,"' handler on '").concat(i,"'. This will render a controlled component. If the component should be uncontrolled and manage its own state, use '").concat(n,"'. Otherwise, set '").concat(t,"'.")].join(""))}}},cbNQ:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
n.d(t,"b",(function(){return i}))
const r={}.hasOwnProperty
function o(e,t){for(const n in t)r.call(t,n)&&(e[n]=t[n])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e}function i(e,t){Object.keys(t).forEach(n=>Object.defineProperty(e,n,{get:t[n],enumerable:true,configurable:true}))
return e}},dTie:function(e,t,n){"use strict"
var r=n("An8g")
var o=n("Ff2n")
var i=n("q1tI")
var a=n.n(i)
n("17x9")
var c=n("Mmr1")
var s=n("msMH")
var l=n("pQTu")
var u=n("m0r6")
Object(u["a"])(JSON.parse('{"de":{"close_d634289d":"Schließen"},"hu":{"close_d634289d":"Bezárás"}}'))
n("jQeR")
n("0sPK")
var d=l["default"].scoped("modal")
var b=n("98st")
n.d(t,"a",(function(){return p}))
function h(){return document.getElementById("flash_screenreader_holder")}function p(e){let t=e.label,n=e.closeButtonLabel,i=e.onDismiss,l=e.children,u=Object(o["a"])(e,["label","closeButtonLabel","onDismiss","children"])
return a.a.createElement(b["a"],Object.assign({liveRegion:h},u,{label:t,onDismiss:i}),Object(r["a"])(b["a"].Header,{},void 0,Object(r["a"])(c["a"],{placement:"end",offset:"medium",onClick:i},void 0,n||d.t("Close")),Object(r["a"])(s["a"],{},void 0,t)),l)}["Header","Body","Footer"].forEach(e=>p[e]=b["a"][e])
p.defaultProps={closeButtonLabel:void 0}},eGSd:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
var r,o,i,a
var c=0
var s=[]
var l=false
if("function"!==typeof e)throw new TypeError("Expected a function")
var u=!!n.leading
var d="maxWait"in n
var b=!("trailing"in n)||!!n.trailing
var h=d?Math.max(+n.maxWait||0,t):0
function p(t){var n=r
var a=o
r=o=void 0
c=t
if(true!==l){i=e.apply(a,n)
return i}}function f(e){c=e
s.push(setTimeout(g,t))
return u?p(e):i}function m(e){var n=e-a
var r=e-c
var o=t-n
return d?Math.min(o,h-r):o}function y(e){var n=e-a
var r=e-c
return"undefined"===typeof a||n>=t||n<0||d&&r>=h}function g(){var e=Date.now()
if(y(e))return v(e)
s.push(setTimeout(g,m(e)))}function v(e){w()
if(b&&r)return p(e)
r=o=void 0
return i}function _(){l=true
w()
c=0
r=a=o=void 0}function j(){return 0===s.length?i:v(Date.now())}function w(){s.forEach((function(e){return clearTimeout(e)}))
s=[]}function k(){var e=Date.now()
var n=y(e)
for(var c=arguments.length,l=new Array(c),u=0;u<c;u++)l[u]=arguments[u]
r=l
o=this
a=e
if(n){if(0===s.length)return f(a)
if(d){s.push(setTimeout(g,t))
return p(a)}}0===s.length&&s.push(setTimeout(g,t))
return i}k.cancel=_
k.flush=j
return k}},fQ4S:function(e,t,n){"use strict"
var r=n("ouhR")
var o=n.n(r)
var i=n("GLiE")
var a=n.n(i)
var c=n("5Ky4")
n("tVj+")
n("vpJZ")
n("Z+Ib")
n("JI1W")
t["a"]={fieldSelectors:null,findSiblingTinymce:function(e){return e.siblings(".mce-tinymce").find(".mce-edit-area")},findField:function(e,t){var n,r,i
null==t&&(t=false)
i=(null!=(r=this.fieldSelectors)?r[e]:void 0)||"[name='"+e+"']"
n=t?o()(i):this.$(i)
n.data("rich_text")&&(n=this.findSiblingTinymce(n))
return n},showErrors:function(e,t){var n,r,i,a,s,l,u,d
null==t&&(t=false)
d=[]
for(i in e){r=e[i]
n=r.element||this.findField(i,t)
a=r.message||function(){var e,t,n,o
o=[]
for(e=0,t=r.length;e<t;e++){s=r[e].message
o.push(Object(c["a"])((null!=(n=this.translations)?n[s]:void 0)||s))}return o}.call(this).join("</p><p>")
null!=(l=n.errorBox(o.a.raw(""+a)))&&null!=(u=l.css("z-index","1100"))&&u.attr("role","alert")
this.attachErrorDescription(n,a)
r.$input=n
d.push(r.$errorBox=n.data("associated_error_box"))}return d},attachErrorDescription:function(e,t){var n
n=this.findOrCreateDescriptionField(e)
n["description"].text(o.a.raw(""+t))
return e.attr("aria-describedby",n["description"].attr("id")+" "+n["originalDescriptionIds"])},findOrCreateDescriptionField:function(e){var t,n,r
n=e.attr("id")
o()("#"+n+"_sr_description").length>0||o()("<div>").attr({id:n+"_sr_description",class:"screenreader-only"}).insertBefore(e)
t=o()("#"+n+"_sr_description")
r=this.getExistingDescriptionIds(e,n)
return{description:t,originalDescriptionIds:r}},getExistingDescriptionIds:function(e,t){var n,r
n=e.attr("aria-describedby")
r=n?n.split(" "):[]
return a.a.without(r,t+"_sr_description")}}},gCYW:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c}))
var r=n("QF4Q")
var o=n("i/8D")
var i=n("EgqM")
var a=n("DUTp")
function c(e){var t={top:0,left:0,height:0,width:0}
if(!o["a"])return t
var n=Object(r["a"])(e)
if(!n)return t
if(n===window)return{left:window.pageXOffset,top:window.pageYOffset,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth+window.pageXOffset,bottom:window.innerHeight+window.pageYOffset}
var s=e===document?document:Object(a["a"])(n)
var l=s&&s.documentElement
if(!l||!Object(i["a"])(l,n))return t
var u=n.getBoundingClientRect()
var d
for(d in u)t[d]=u[d]
if(s!==document){var b=s.defaultView.frameElement
if(b){var h=c(b)
t.top+=h.top
t.bottom+=h.top
t.left+=h.left
t.right+=h.left}}return{top:t.top+(window.pageYOffset||l.scrollTop)-(l.clientTop||0),left:t.left+(window.pageXOffset||l.scrollLeft)-(l.clientLeft||0),width:(null==t.width?n.offsetWidth:t.width)||0,height:(null==t.height?n.offsetHeight:t.height)||0,right:s.body.clientWidth-t.width-t.left,bottom:s.body.clientHeight-t.height-t.top}}},msMH:function(e,t,n){"use strict"
var r=n("rePB")
var o=n("Ff2n")
var i=n("1OyB")
var a=n("vuIU")
var c=n("md7G")
var s=n("foSv")
var l=n("Ji7U")
var u=n("q1tI")
var d=n.n(u)
var b=n("17x9")
var h=n.n(b)
var p=n("TSYQ")
var f=n.n(p)
var m=n("n12J")
var y=n("J2CL")
var g=n("RhCJ")
var v=n("nAyT")
var _=n("KgFQ")
var j=n("jtGx")
var w=n("oXx0")
function k(e){var t=e.borders,n=e.colors,r=e.spacing,o=e.typography
return{fontFamily:o.fontFamily,lineHeight:o.lineHeightFit,h1FontSize:o.fontSizeXXLarge,h1FontWeight:o.fontWeightLight,h2FontSize:o.fontSizeXLarge,h2FontWeight:o.fontWeightNormal,h3FontSize:o.fontSizeLarge,h3FontWeight:o.fontWeightBold,h4FontSize:o.fontSizeMedium,h4FontWeight:o.fontWeightBold,h5FontSize:o.fontSizeSmall,h5FontWeight:o.fontWeightNormal,primaryInverseColor:n.textLightest,primaryColor:n.textDarkest,secondaryColor:n.textDark,secondaryInverseColor:n.textLight,borderPadding:r.xxxSmall,borderColor:n.borderMedium,borderWidth:t.widthSmall,borderStyle:t.style}}k.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"]}}
n.d(t,"a",(function(){return C}))
var B,U,O,x,H,S
var M={componentId:"brHtQ",template:function(e){return"\n\n.brHtQ_bGBk{font-family:".concat(e.fontFamily||"inherit",";line-height:").concat(e.lineHeight||"inherit",";margin:0}\n\ninput.brHtQ_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:-0.375rem 0 0 0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.brHtQ_bGBk[type]{text-align:left}\n\n[dir=rtl] input.brHtQ_bGBk[type]{text-align:right}\n\ninput.brHtQ_bGBk[type]:focus{outline:none}\n\n.brHtQ_fCtg{font-size:").concat(e.h1FontSize||"inherit",";font-weight:").concat(e.h1FontWeight||"inherit","}\n\n.brHtQ_cVrl{font-size:").concat(e.h2FontSize||"inherit",";font-weight:").concat(e.h2FontWeight||"inherit","}\n\n.brHtQ_dnfM{font-size:").concat(e.h3FontSize||"inherit",";font-weight:").concat(e.h3FontWeight||"inherit","}\n\n.brHtQ_KGwv{font-size:").concat(e.h4FontSize||"inherit",";font-weight:").concat(e.h4FontWeight||"inherit","}\n\n.brHtQ_eYKA{font-size:").concat(e.h5FontSize||"inherit",";font-weight:").concat(e.h5FontWeight||"inherit","}\n\n.brHtQ_dbSc{font-size:inherit;font-weight:inherit;line-height:inherit;margin:0}\n\n.brHtQ_bACI{border-top:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-top:").concat(e.borderPadding||"inherit","}\n\n.brHtQ_kWwi{border-bottom:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-bottom:").concat(e.borderPadding||"inherit","}\n\n.brHtQ_drOs{color:inherit}\n\n.brHtQ_eCSh{color:").concat(e.primaryColor||"inherit","}\n\n.brHtQ_buuG{color:").concat(e.secondaryColor||"inherit","}\n\n.brHtQ_bFtJ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.brHtQ_dsSB{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.brHtQ_bOQC{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}")},root:"brHtQ_bGBk","level--h1":"brHtQ_fCtg","level--h2":"brHtQ_cVrl","level--h3":"brHtQ_dnfM","level--h4":"brHtQ_KGwv","level--h5":"brHtQ_eYKA","level--reset":"brHtQ_dbSc","border--top":"brHtQ_bACI","border--bottom":"brHtQ_kWwi","color--inherit":"brHtQ_drOs","color--primary":"brHtQ_eCSh","color--secondary":"brHtQ_buuG","color--primary-inverse":"brHtQ_bFtJ","color--secondary-inverse":"brHtQ_dsSB",ellipsis:"brHtQ_bOQC"}
var C=(B=Object(v["a"])("8.0.0",{ellipsis:"<TruncateText />"}),U=Object(w["a"])(),O=Object(y["themeable"])(k,M),B(x=U(x=O(x=(S=H=function(e){Object(l["a"])(t,e)
function t(){Object(i["a"])(this,t)
return Object(c["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(a["a"])(t,[{key:"render",value:function(){var e
var n=this.props,i=n.border,a=n.children,c=n.color,s=n.level,l=n.margin,u=n.elementRef,b=n.ellipsis,h=Object(o["a"])(n,["border","children","color","level","margin","elementRef","ellipsis"])
var p=Object(_["a"])(t,this.props,(function(){return"reset"===s?"span":s}))
return d.a.createElement(m["a"],Object.assign({},Object(j["b"])(h),{className:f()((e={},Object(r["a"])(e,M.root,true),Object(r["a"])(e,M["level--".concat(s)],true),Object(r["a"])(e,M["color--".concat(c)],c),Object(r["a"])(e,M["border--".concat(i)],"none"!==i),Object(r["a"])(e,M.ellipsis,b),e)),as:p,margin:l,elementRef:u}),a)}}])
t.displayName="Heading"
return t}(u["Component"]),H.propTypes={border:h.a.oneOf(["none","top","bottom"]),children:g["a"],color:h.a.oneOf(["primary","secondary","primary-inverse","secondary-inverse","inherit"]),level:h.a.oneOf(["h1","h2","h3","h4","h5","reset"]),as:h.a.elementType,margin:y["ThemeablePropTypes"].spacing,elementRef:h.a.func,ellipsis:h.a.bool},H.defaultProps={children:null,margin:void 0,elementRef:void 0,border:"none",color:"inherit",level:"h2"},S))||x)||x)||x)},ppAs:function(e,t,n){"use strict"
var r=n("ouhR")
var o=n.n(r)
var i=n("GLiE")
var a=n.n(i)
var c=n("5Ky4")
var s=n("pQTu")
var l=n("m0r6")
Object(l["a"])(JSON.parse('{"de":{"user_content_aaf0fb5a":"Benutzer-Content"},"hu":{"user_content_aaf0fb5a":"Felhasználói tartalom"}}'))
n("jQeR")
n("0sPK")
var u=s["default"].scoped("user_content")
const d={translateMathmlForScreenreaders(e){const t=o()("<div/>").html(e.attr("x-canvaslms-safe-mathml")).html()
const n=o()('<span class="hidden-readable"></span>')
n.html(t)
return n},toMediaCommentLink(e){const t=o()("<a\n        id='media_comment_".concat(Object(c["a"])(o()(e).data("media_comment_id")),"'\n        data-media_comment_type='").concat(Object(c["a"])(o()(e).data("media_comment_type")),"'\n        class='instructure_inline_media_comment ").concat(Object(c["a"])(e.nodeName.toLowerCase()),"_comment'\n        data-alt='").concat(Object(c["a"])(o()(e).attr("data-alt")),"'\n      />"))
t.html(o()(e).html())
return t},convert(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=o()("<div />").html(e)
n.find("video.instructure_inline_media_comment,audio.instructure_inline_media_comment").replaceWith((function(){return d.toMediaCommentLink(this)}))
n.find("object.instructure_user_content:not(#kaltura_player) embed").remove()
if(!t.forEditing){n.find("object.instructure_user_content,embed.instructure_user_content").replaceWith((function(){const e=o()(this)
if(!e.data("uc_snippet")||!e.data("uc_sig"))return this
const t=a.a.uniqueId("uc_")
let n="/object_snippet"
ENV.files_domain&&(n="//".concat(ENV.files_domain).concat(n))
const r=o()("<form\n            action='".concat(Object(c["a"])(n),"'\n            method='post'\n            class='user_content_post_form'\n            target='").concat(Object(c["a"])(t),"'\n            id='form-").concat(Object(c["a"])(t),"'\n          />"))
r.append(o()("<input type='hidden'/>").attr({name:"object_data",value:e.data("uc_snippet")}))
r.append(o()("<input type='hidden'/>").attr({name:"s",value:e.data("uc_sig")}))
o()("body").append(r)
setTimeout(()=>r.submit(),0)
return o()("<iframe\n            class='user_content_iframe'\n            name='".concat(Object(c["a"])(t),"'\n            style='width: ").concat(Object(c["a"])(e.data("uc_width")),"; height: ").concat(Object(c["a"])(e.data("uc_height")),";'\n            frameborder='0'\n            title='").concat(Object(c["a"])(u.t("User Content")),"'\n          />"))}))
n.find("img.equation_image").each((e,t)=>{const n=o()(t)
const r=d.translateMathmlForScreenreaders(n)
n.removeAttr("x-canvaslms-safe-mathml")
n.after(r)})}return n.html()}}
t["a"]=d},qJBq:function(e,t){(function(){var t,n,r
r=[]
t={}
e.exports=n=function(e,n,o){var i,a,c,s,l,u,d,b,h
null==o&&(o=true)
if("string"===typeof n){if(2!==n.length)throw{name:"ArgumentException",message:"The format for string options is '<thousands><decimal>' (exactly two characters)"}
h=n[0],i=n[1]}else if(Array.isArray(n)){if(2!==n.length)throw{name:"ArgumentException",message:"The format for array options is ['<thousands>','[<decimal>'] (exactly two elements)"}
h=n[0],i=n[1]}else{h=(null!=n?n.thousands:void 0)||(null!=n?n.group:void 0)||t.thousands
i=(null!=n?n.decimal:void 0)||t.decimal}d=""+h+i+o
u=r[d]
if(null==u){c=o?3:1
u=r[d]=new RegExp("^\\s*([+-]?(?:(?:\\d{1,3}(?:\\"+h+"\\d{"+c+",3})+)|\\d*))(?:\\"+i+"(\\d*))?\\s*$")}b=e.match(u)
if(!(null!=b&&3===b.length))return NaN
s=b[1].replace(new RegExp("\\"+h,"g"),"")
a=b[2]
l=parseFloat(s+"."+a)
return l}
e.exports.setOptions=function(e){var n,r
for(n in e){r=e[n]
t[n]=r}}
e.exports.factoryReset=function(){t={thousands:",",decimal:"."}}
e.exports.withOptions=function(e,t){null==t&&(t=true)
return function(r){return n(r,e,t)}}
e.exports.factoryReset()}).call(this)},"tVj+":function(e,t,n){"use strict"
var r=n("ouhR")
var o=n.n(r)
n("BYL3")
const i={validate:/^[a-zA-Z][a-zA-Z0-9_-]*(?:\[(?:\d*|[a-zA-Z0-9_-]+)\])*$/,key:/[a-zA-Z0-9_-]+|(?=\[\])/g,push:/^$/,fixed:/^\d+$/,named:/^[a-zA-Z0-9_-]+$/}
const a=function(e,t,n){e[t]=n
return e}
o.a.fn.toJSON=function(){let e={},t={}
const n=function(e,n){void 0===t[e]&&(t[e]=0)
if(void 0===n)return t[e]++
if(void 0!==n&&n>t[e])return t[e]=++n}
o.a.each(o()(this).serializeForm(),(function(){if(!i.validate.test(this.name))return
let t,r=this.name.match(i.key),c=this.value,s=this.name
while(void 0!==(t=r.pop())){s=s.replace(new RegExp("\\["+t+"\\]$"),"")
if(t.match(i.push))c=a([],n(s),c)
else if(t.match(i.fixed)){n(s,t)
c=a([],t,c)}else t.match(i.named)&&(c=a({},t,c))}e=o.a.extend(true,e,c)}))
return e}},teYS:function(e,t,n){const r=n("ouhR")
var o,i,a,c=r({})
r.subscribe=o=function(e,t){if(r.isPlainObject(e))return r.each(e,(function(e,t){o(e,t)}))
function n(){return t.apply(this,Array.prototype.slice.call(arguments,1))}n.guid=t.guid=t.guid||r.guid++
c.bind(e,n)}
r.unsubscribe=i=function(){c.unbind.apply(c,arguments)}
r.publish=a=function(){c.trigger.apply(c,arguments)}
e.exports={subscribe:o,unsubscribe:i,publish:a}},u9uf:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c}))
var r=n("17x9")
var o=n.n(r)
var i=n("AdN2")
var a=n("AXvA")
var c={validQuery:function(e,t,n){try{Object(a["a"])(e[t])}catch(e){return new Error("Invalid query prop supplied to `".concat(n,"`. ").concat(e.message))}},placement:o.a.oneOf(["top","end","bottom","start","top start","start top","start center","start bottom","bottom start","bottom center","bottom end","end bottom","end center","end top","top end","top center","center end","center start","top stretch","bottom stretch","end stretch","start stretch","offscreen"]),mountNode:o.a.oneOfType([i["a"],o.a.func]),constrain:o.a.oneOfType([i["a"],o.a.func,o.a.oneOf(["window","scroll-parent","parent","none"])])}}}])

//# sourceMappingURL=edit_rubric-c-53bf1dd27f.js.map