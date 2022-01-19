(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[470],{"+Gzo":function(e,t,n){"use strict"
n.d(t,"a",(function(){return _}))
var i=n("VTBJ")
var o=n("1OyB")
var a=n("vuIU")
var r=n("md7G")
var s=n("foSv")
var l=n("Ji7U")
var c=n("q1tI")
var u=n.n(c)
var d=n("hPGw")
var m=u.a.createElement("path",{d:"M1706.235 1807.059H350.941V112.94h903.53v451.765h451.764v1242.353zm-338.823-1670.74l315.443 315.447h-315.443V136.32zm402.182 242.487L1440.372 49.58C1408.296 17.62 1365.717 0 1320.542 0H238v1920h1581.175V498.635c0-45.176-17.618-87.755-49.58-119.83zM576.823 1242.353h790.589v-112.94H576.823v112.94zm0-451.765h903.53V677.647h-903.53v112.941zm0 677.647h451.765v-112.941H576.823v112.941zm0-451.764h677.648V903.53H576.823v112.941zm0-451.765h451.765V451.765H576.823v112.941z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var _=function(e){Object(l["a"])(t,e)
function t(){Object(o["a"])(this,t)
return Object(r["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(a["a"])(t,[{key:"render",value:function(){return u.a.createElement(d["a"],Object.assign({},this.props,{name:"IconDocument",viewBox:"0 0 1920 1920",bidirectional:true}),m)}}])
t.displayName="IconDocumentLine"
return t}(c["Component"])
_.glyphName="document"
_.variant="Line"
_.propTypes=Object(i["a"])({},d["a"].propTypes)},"/iD7":function(e,t,n){"use strict"
var i=n("pQTu")
var o=n("m0r6")
Object(o["a"])(JSON.parse('{"de":{"editor":{"keyboard_shortcuts":{"dialog_title":"Tastenkombinationen","keybindings":{"close_submenu":"Schließen des Menüs oder Dialogs bringt Sie ebenfalls in den Editor-Bereich zurück.","navigate_toolbar":"Links/rechts Navigation durch Menü/Symbolleiste","open_menubar":"Editor-Menüleiste öffnen","open_toolbar":"Symbolleiste des Editors öffnen"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Diesen Tastenkombinationsdialog öffnen"},"hu":{"editor":{"keyboard_shortcuts":{"dialog_title":"Billentyűparancsok","keybindings":{"close_submenu":"Menü vagy párbeszédablak bezárása, visszavisz a szerkesztő felületre","navigate_toolbar":"Navigáljon balra/jobbra a menün/eszköztáron át","open_menubar":"Szerkesztői menüsor megnyitása","open_toolbar":"Szerkesztői eszköztár megnyitása"}}}}}'))
n("jQeR")
n("0sPK")
var a=i["default"].scoped("editor.keyboard_shortcuts")
var r=n("ouhR")
var s=n.n(r)
var l=n("FIFq")
var c=n.n(l)
var u=n("3O+N")
var d=n.n(u)
n("DfGn")
var m=n("EvX+")
var _=d.a.default
var h=_.template,b=_.templates=_.templates||{}
var p="editor/KeyboardShortcuts"
b[p]=h((function(e,t,n,i,o){this.compilerInfo=[4,">= 1.0.0"]
n=this.merge(n,e.helpers)
o=o||{}
var a,r="",s="function",l=this.escapeExpression,c=this
function u(e,t){var i,o,a=""
a+="\n    <li>\n      <code>"
if(o=n.key)i=o.call(e,{hash:{},data:t})
else{o=e&&e.key
i=typeof o===s?o.call(e,{hash:{},data:t}):o}a+=l(i)+"</code>\n      <span>"
if(o=n.description)i=o.call(e,{hash:{},data:t})
else{o=e&&e.description
i=typeof o===s?o.call(e,{hash:{},data:t}):o}a+=l(i)+"</span>\n    </li>\n  "
return a}r+='<ul class="tinymce-keyboard-shortcuts">\n  '
a=n.each.call(t,t&&t.keybindings,{hash:{},inverse:c.noop,fn:c.program(1,u,o),data:o});(a||0===a)&&(r+=a)
r+="\n</ul>\n"
return r}))
m["a"].loadStylesheet("jst/editor/KeyboardShortcuts",{new_styles_normal_contrast:{combinedChecksum:"f4493af988"},new_styles_high_contrast:{combinedChecksum:"f4493af988"},responsive_layout_normal_contrast:{combinedChecksum:"f4493af988"},responsive_layout_high_contrast:{combinedChecksum:"f4493af988"},new_styles_normal_contrast_rtl:{combinedChecksum:"9b568bbcaf"},new_styles_high_contrast_rtl:{combinedChecksum:"9b568bbcaf"},responsive_layout_normal_contrast_rtl:{combinedChecksum:"9b568bbcaf"},responsive_layout_high_contrast_rtl:{combinedChecksum:"9b568bbcaf"}}[m["a"].getCssVariant()])
var f=b[p]
var g,y
g=[48,119]
y=c.a.View.extend({className:"tinymce-keyboard-shortcuts-toggle",tagName:"a",events:{click:"openDialog"},keybindings:[{key:"ALT+F9",description:a.t("keybindings.open_menubar","Open the editor's menubar")},{key:"ALT+F10",description:a.t("keybindings.open_toolbar","Open the editor's toolbar")},{key:"ESC",description:a.t("keybindings.close_submenu","Close menu or dialog, also gets you back to editor area")},{key:"TAB/Arrows",description:a.t("keybindings.navigate_toolbar","Navigate left/right through menu/toolbar")},{key:"ALT+F8",description:a.t("Open this keyboard shortcuts dialog")}],template:f,initialize:function(){this.el.href="#"
s()(this.el).attr("title",a.t("dialog_title","Keyboard Shortcuts"))
s()('<i class="icon-keyboard-shortcuts" aria-hidden="true" />').appendTo(this.el)
return s()('<span class="screenreader-only" />').text(a.t("dialog_title","Keyboard Shortcuts")).appendTo(this.el)},render:function(){var e
e={keybindings:this.keybindings}
this.$dialog=s()(this.template(e)).dialog({title:a.t("dialog_title","Keyboard Shortcuts"),width:600,resizable:true,autoOpen:false})
this.bindEvents()
return this},bindEvents:function(){if(!ENV.use_rce_enhancements){s()(document).on("keyup.tinymce_keyboard_shortcuts",this.openDialogByKeybinding.bind(this))
return s()(document).on("editorKeyUp",function(e,t){return this.openDialogByKeybinding(t)}.bind(this))}},remove:function(){s()(document).off("keyup.tinymce_keyboard_shortcuts")
s()(document).off("editorKeyUp")
return this.$dialog.dialog("destroy")},openDialog:function(){if(!this.$dialog.dialog("isOpen"))return this.$dialog.dialog("open")},openDialogByKeybinding:function(e){if(g.indexOf(e.keyCode)>-1&&e.altKey)return this.openDialog()}})
t["a"]=y},"0Pgl":function(e,t,n){"use strict"
var i=n("GLiE")
var o=n.n(i)
var a=n("FIFq")
var r=n("fPNa")
var s=function(e,t){for(var n in t)l.call(t,n)&&(e[n]=t[n])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},l={}.hasOwnProperty
t["a"]=function(e){s(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.mixin(r["a"])
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
if(o.a.has(this,"url"))return delete this.url}
t.prototype.resourceName="external_tools"
t.prototype.computedAttributes=[{name:"custom_fields_string",deps:["custom_fields"]}]
t.prototype.urlRoot=function(){return"/api/v1/"+this._contextPath()+"/create_tool_with_verification"}
t.prototype.custom_fields_string=function(){var e,t
return function(){var n,i
n=this.get("custom_fields")
i=[]
for(e in n){t=n[e]
i.push(e+"="+t)}return i}.call(this).join("\n")}
t.prototype.launchUrl=function(e,t){var n,i,o,a
null==t&&(t={})
i=function(){var e
e=[]
for(n in t){a=t[n]
e.push(n+"="+a)}return e}()
o="/"+this._contextPath()+"/external_tools/"+this.id+"/resource_selection?launch_type="+e
i.length>0&&(o=o+"&"+i.join("&"))
return o}
t.prototype.assetString=function(){return"context_external_tool_"+this.id}
return t}(a["Model"])},"5JRF":function(e,t,n){"use strict"
var i=n("rePB")
var o=n("1OyB")
var a=n("vuIU")
var r=n("md7G")
var s=n("foSv")
var l=n("Ji7U")
var c=n("q1tI")
var u=n.n(c)
var d=n("17x9")
var m=n.n(d)
var _=n("TSYQ")
var h=n.n(_)
var b=n("J2CL")
var p=n("nAyT")
var f=n("KgFQ")
var g=n("jtGx")
var y=n("VTBJ")
function v(e){var t=e.typography,n=e.colors,i=e.spacing
return Object(y["a"])({},t,{primaryInverseColor:n.textLightest,primaryColor:n.textDarkest,secondaryColor:n.textDark,secondaryInverseColor:n.textLight,warningColor:n.textWarning,brandColor:n.textBrand,errorColor:n.textDanger,successColor:n.textSuccess,alertColor:n.textAlert,paragraphMargin:"".concat(i.medium," 0")})}v.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"],brandColor:e["ic-brand-primary"]}}
n.d(t,"a",(function(){return S}))
var k,w,j,x,R
var U={componentId:"cjUyb",template:function(e){return"\n\n.cjUyb_bGBk{font-family:".concat(e.fontFamily||"inherit","}\n\n.cjUyb_bGBk sub,.cjUyb_bGBk sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n\n.cjUyb_bGBk sup{top:-0.4em}\n\n.cjUyb_bGBk sub{bottom:-0.4em}\n\n.cjUyb_bGBk code,.cjUyb_bGBk pre{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamilyMonospace||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n.cjUyb_bGBk em,.cjUyb_bGBk i{font-style:italic}\n\n.cjUyb_bGBk b,.cjUyb_bGBk strong{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.cjUyb_bGBk p{display:block;margin:").concat(e.paragraphMargin||"inherit",";padding:0}\n\ninput.cjUyb_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.cjUyb_bGBk[type]{text-align:left}\n\n[dir=rtl] input.cjUyb_bGBk[type]{text-align:right}\n\n.cjUyb_bGBk:focus,input.cjUyb_bGBk[type]:focus{outline:none}\n\n.cjUyb_bGBk.cjUyb_qFsi,input.cjUyb_bGBk[type].cjUyb_qFsi{color:").concat(e.primaryColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_bLsb,input.cjUyb_bGBk[type].cjUyb_bLsb{color:").concat(e.secondaryColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_ezBQ,input.cjUyb_bGBk[type].cjUyb_ezBQ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_dlnd,input.cjUyb_bGBk[type].cjUyb_dlnd{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_cJLh,input.cjUyb_bGBk[type].cjUyb_cJLh{color:").concat(e.successColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_fpfC,input.cjUyb_bGBk[type].cjUyb_fpfC{color:").concat(e.brandColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_eHcp,input.cjUyb_bGBk[type].cjUyb_eHcp{color:").concat(e.warningColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_dwua,input.cjUyb_bGBk[type].cjUyb_dwua{color:").concat(e.errorColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_eZgl,input.cjUyb_bGBk[type].cjUyb_eZgl{color:").concat(e.alertColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_fbNi,input.cjUyb_bGBk[type].cjUyb_fbNi{-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;word-break:break-word}\n\n.cjUyb_bGBk.cjUyb_drST,input.cjUyb_bGBk[type].cjUyb_drST{font-weight:").concat(e.fontWeightNormal||"inherit","}\n\n.cjUyb_bGBk.cjUyb_pEgL,input.cjUyb_bGBk[type].cjUyb_pEgL{font-weight:").concat(e.fontWeightLight||"inherit","}\n\n.cjUyb_bGBk.cjUyb_bdMA,input.cjUyb_bGBk[type].cjUyb_bdMA{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.cjUyb_bGBk.cjUyb_ijuF,input.cjUyb_bGBk[type].cjUyb_ijuF{font-style:normal}\n\n.cjUyb_bGBk.cjUyb_fetN,input.cjUyb_bGBk[type].cjUyb_fetN{font-style:italic}\n\n.cjUyb_bGBk.cjUyb_dfBC,input.cjUyb_bGBk[type].cjUyb_dfBC{font-size:").concat(e.fontSizeXSmall||"inherit","}\n\n.cjUyb_bGBk.cjUyb_doqw,input.cjUyb_bGBk[type].cjUyb_doqw{font-size:").concat(e.fontSizeSmall||"inherit","}\n\n.cjUyb_bGBk.cjUyb_ycrn,input.cjUyb_bGBk[type].cjUyb_ycrn{font-size:").concat(e.fontSizeMedium||"inherit","}\n\n.cjUyb_bGBk.cjUyb_cMDj,input.cjUyb_bGBk[type].cjUyb_cMDj{font-size:").concat(e.fontSizeLarge||"inherit","}\n\n.cjUyb_bGBk.cjUyb_eoMd,input.cjUyb_bGBk[type].cjUyb_eoMd{font-size:").concat(e.fontSizeXLarge||"inherit","}\n\n.cjUyb_bGBk.cjUyb_fdca,input.cjUyb_bGBk[type].cjUyb_fdca{font-size:").concat(e.fontSizeXXLarge||"inherit","}\n\n.cjUyb_bGBk.cjUyb_fEWX,input.cjUyb_bGBk[type].cjUyb_fEWX{line-height:").concat(e.lineHeight||"inherit","}\n\n.cjUyb_bGBk.cjUyb_fNIu,input.cjUyb_bGBk[type].cjUyb_fNIu{line-height:").concat(e.lineHeightFit||"inherit","}\n\n.cjUyb_bGBk.cjUyb_dfDs,input.cjUyb_bGBk[type].cjUyb_dfDs{line-height:").concat(e.lineHeightCondensed||"inherit","}\n\n.cjUyb_bGBk.cjUyb_bDjL,input.cjUyb_bGBk[type].cjUyb_bDjL{line-height:").concat(e.lineHeightDouble||"inherit","}\n\n.cjUyb_bGBk.cjUyb_eQnG,input.cjUyb_bGBk[type].cjUyb_eQnG{letter-spacing:").concat(e.letterSpacingNormal||"inherit","}\n\n.cjUyb_bGBk.cjUyb_bbUA,input.cjUyb_bGBk[type].cjUyb_bbUA{letter-spacing:").concat(e.letterSpacingCondensed||"inherit","}\n\n.cjUyb_bGBk.cjUyb_bRWU,input.cjUyb_bGBk[type].cjUyb_bRWU{letter-spacing:").concat(e.letterSpacingExpanded||"inherit","}\n\n.cjUyb_bGBk.cjUyb_wZsr,input.cjUyb_bGBk[type].cjUyb_wZsr{text-transform:none}\n\n.cjUyb_bGBk.cjUyb_fCZK,input.cjUyb_bGBk[type].cjUyb_fCZK{text-transform:capitalize}\n\n.cjUyb_bGBk.cjUyb_dsRi,input.cjUyb_bGBk[type].cjUyb_dsRi{text-transform:uppercase}\n\n.cjUyb_bGBk.cjUyb_bLtD,input.cjUyb_bGBk[type].cjUyb_bLtD{text-transform:lowercase}")},root:"cjUyb_bGBk","color-primary":"cjUyb_qFsi","color-secondary":"cjUyb_bLsb","color-primary-inverse":"cjUyb_ezBQ","color-secondary-inverse":"cjUyb_dlnd","color-success":"cjUyb_cJLh","color-brand":"cjUyb_fpfC","color-warning":"cjUyb_eHcp","color-error":"cjUyb_dwua","color-alert":"cjUyb_eZgl","wrap-break-word":"cjUyb_fbNi","weight-normal":"cjUyb_drST","weight-light":"cjUyb_pEgL","weight-bold":"cjUyb_bdMA","style-normal":"cjUyb_ijuF","style-italic":"cjUyb_fetN","x-small":"cjUyb_dfBC",small:"cjUyb_doqw",medium:"cjUyb_ycrn",large:"cjUyb_cMDj","x-large":"cjUyb_eoMd","xx-large":"cjUyb_fdca","lineHeight-default":"cjUyb_fEWX","lineHeight-fit":"cjUyb_fNIu","lineHeight-condensed":"cjUyb_dfDs","lineHeight-double":"cjUyb_bDjL","letterSpacing-normal":"cjUyb_eQnG","letterSpacing-condensed":"cjUyb_bbUA","letterSpacing-expanded":"cjUyb_bRWU","transform-none":"cjUyb_wZsr","transform-capitalize":"cjUyb_fCZK","transform-uppercase":"cjUyb_dsRi","transform-lowercase":"cjUyb_bLtD"}
var S=(k=Object(p["a"])("7.0.0",null,"Use Text from ui-text instead."),w=Object(b["themeable"])(v,U),k(j=w(j=(R=x=function(e){Object(l["a"])(t,e)
function t(){Object(o["a"])(this,t)
return Object(r["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(a["a"])(t,[{key:"render",value:function(){var e
var n=this.props,o=n.wrap,a=n.weight,r=n.fontStyle,s=n.size,l=n.lineHeight,c=n.letterSpacing,d=n.transform,m=n.color,_=n.children
var b=Object(f["a"])(t,this.props)
return u.a.createElement(b,Object.assign({},Object(g["a"])(this.props,t.propTypes),{className:h()((e={},Object(i["a"])(e,U.root,true),Object(i["a"])(e,U[s],s),Object(i["a"])(e,U["wrap-".concat(o)],o),Object(i["a"])(e,U["weight-".concat(a)],a),Object(i["a"])(e,U["style-".concat(r)],r),Object(i["a"])(e,U["transform-".concat(d)],d),Object(i["a"])(e,U["lineHeight-".concat(l)],l),Object(i["a"])(e,U["letterSpacing-".concat(c)],c),Object(i["a"])(e,U["color-".concat(m)],m),e)),ref:this.props.elementRef}),_)}}])
t.displayName="Text"
return t}(c["Component"]),x.propTypes={as:m.a.elementType,wrap:m.a.oneOf(["normal","break-word"]),weight:m.a.oneOf(["normal","light","bold"]),fontStyle:m.a.oneOf(["italic","normal"]),size:m.a.oneOf(["x-small","small","medium","large","x-large","xx-large"]),lineHeight:m.a.oneOf(["default","fit","condensed","double"]),letterSpacing:m.a.oneOf(["normal","condensed","expanded"]),transform:m.a.oneOf(["none","capitalize","uppercase","lowercase"]),color:m.a.oneOf(["primary","secondary","primary-inverse","secondary-inverse","success","error","alert","warning","brand"]),children:m.a.node,elementRef:m.a.func},x.defaultProps={as:"span",wrap:"normal",size:"medium",letterSpacing:"normal",children:null,elementRef:void 0,color:void 0,transform:void 0,lineHeight:void 0,fontStyle:void 0,weight:void 0},R))||j)||j)},"5yg4":function(e,t,n){"use strict"
n.r(t)
var i=n("An8g")
var o=n("pQTu")
var a=n("m0r6")
Object(a["a"])(JSON.parse('{"de":{"are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496":"Möchten Sie wirklich abbrechen? Vorgenommene Änderungen werden nicht gespeichert.","attached_files_must_be_greater_than_0_bytes_7f57bee7":"Angehängte Dateien müssen größer als 0 Bytes sein.","button":{"submit_assignment":"Aufgabe abgeben"},"changes_you_made_may_not_be_saved_4e8db973":"Vorgenommene Änderungen werden nicht gespeichert.","errors":{"no_attached_file":"Sie müssen an diese Aufgabe mindestens eine Datei anhängen.","wrong_file_extension":"Die Abgabe der von Ihnen ausgewählten Datei mit der Erweiterung „%{extension}“ war nicht autorisiert."},"file_tree_collapsed_d4b0ae96":"Dateiverzeichnis ausgeblendet","file_tree_expanded_a1d20c4a":"Dateiverzeichnis eingeblendet","q_what_goes_black_white_black_white_a_a_panda_roll_c682ee13":"F: Was wird abwechselnd schwarz, weiß, schwarz, weiß?  A: Ein Panda, der einen Hügel hinunterrollt.","remove_empty_attachment_b2aea632":"leeren Dateianhang entfernen","remove_filename_87f3781e":"%{filename} entfernen","selected_filename_7552a8c0":"ausgewählt %{filename}","submit_assignment":{"buttons":{"submit_assignment":"Aufgabe abgeben"},"file_retrieval_error":"Fehler beim Abrufen der Datei","getting_file":"Datei wird abgerufen ...","invalid_file_retrieval":"Beim Abrufen der mit diesem Tool gesendeten Datei ist ein Problem aufgetreten.","messages":{"not_submitted_yet":"Sie haben die Abgabe ihrer Aufgabe nicht abgeschlossen.  Sie müssen noch auf „Senden“ klicken, um die Abgabe abzuschließen. Möchten Sie diese Seite trotzdem verlassen?","now_overdue":"Diese Aufgabe ist nun überfällig.  Neue Beiträge werden als verspätet gekennzeichnet.  Trotzdem fortfahren?","overdue":"Die Aufgabe ist überfällig.  Möchten Sie sie trotzdem abgeben?","record_before_submitting":"Vor Abgabe aufnehmen","submit_failed":"Die Abgabe ist fehlgeschlagen, bitte erneut versuchen","submitting":"Wird abgegeben ..."},"titles":{"uploading":"Abgabe wird hochgeladen"}}},"hu":{"are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496":"Biztos benne, hogy mégsem? A változtatásai talán nincsenek elmentve.","attached_files_must_be_greater_than_0_bytes_7f57bee7":"A csatolt fájl mérete nem lehet 0 bájt","button":{"submit_assignment":"Feladat beadása"},"errors":{"no_attached_file":"Legalább egy fájlt csatolnia kell ehhez a feladathoz","wrong_file_extension":"A kiválasztott \\"%{extension}\\" kiterjesztésű fájl nem engedélyezett beadásra"},"remove_empty_attachment_b2aea632":"üres melléklet eltávolítása","remove_filename_87f3781e":"%{filename} eltávolítása","submit_assignment":{"buttons":{"submit_assignment":"Feladat leadása"},"file_retrieval_error":"A fájl lekérése sikertelen","getting_file":"Fájl lekérése...","invalid_file_retrieval":"Probléma adódott az eszköz által küldött fájl lekérése közben.","messages":{"not_submitted_yet":"Nem fejezte be a feladat beküldését. A beküldés befejezéséhez a \\"Beküldés\\" gombra kell kattintani. Ennek ellenére elhagyja az oldalt?","now_overdue":"A feladat határideje lejárt. Minden további beadás későként lesz megjelölve. Folytatja?","overdue":"A feladat határideje lejárt. Mégis be szeretné küldeni?","record_before_submitting":"Felvétel a beküldés előtt","submit_failed":"A beküldés sikertelen, kérjük, próbálja újra","submitting":"Beküldés..."},"titles":{"uploading":"Beadandó feltöltése"}}}}'))
n("jQeR")
n("0sPK")
var r=o["default"].scoped("submit_assignment")
var s=n("ouhR")
var l=n.n(s)
var c=n("GLiE")
var u=n.n(c)
Object(a["a"])(JSON.parse('{"de":{"titles":{"view_in_separate_window":"In neuem Fenster anzeigen"}},"hu":{"titles":{"view_in_separate_window":"Megtekintés különálló ablakban"}}}'))
var d=o["default"].scoped("titles")
var m=n("FIFq")
var _=n.n(m)
var h=n("3O+N")
var b=n.n(h)
n("DfGn")
var p=n("EvX+")
var f=b.a.default
var g=f.template,y=f.templates=f.templates||{}
var v="googleDocsTreeView"
y[v]=g((function(e,t,n,i,o){this.compilerInfo=[4,">= 1.0.0"]
n=this.merge(n,e.helpers)
o=o||{}
var a,r="",s="function",l=this.escapeExpression,c=this
function u(e,t,i){var o,a,r=""
r+='\n<li class="folder" tabindex="0" role="menuitem">\n  '
if(a=n.name)o=a.call(e,{hash:{},data:t})
else{a=e&&e.name
o=typeof a===s?a.call(e,{hash:{},data:t}):a}r+=l(o)+"\n  <ul>\n    "
o=n.each.call(e,e&&e.files,{hash:{},inverse:c.noop,fn:c.programWithDepth(2,d,t,i),data:t});(o||0===o)&&(r+=o)
r+="\n  </ul>\n</li>\n"
return r}function d(e,t,i){var o,a,r=""
r+='\n    <li class="file '
if(a=n.extension)o=a.call(e,{hash:{},data:t})
else{a=e&&e.extension
o=typeof a===s?a.call(e,{hash:{},data:t}):a}r+=l(o)+'" id="document_'
if(a=n.document_id)o=a.call(e,{hash:{},data:t})
else{a=e&&e.document_id
o=typeof a===s?a.call(e,{hash:{},data:t}):a}r+=l(o)+'" tabindex="0" role="button" aria-live="true">\n      <span class="filename">'
if(a=n.name)o=a.call(e,{hash:{},data:t})
else{a=e&&e.name
o=typeof a===s?a.call(e,{hash:{},data:t}):a}r+=l(o)+'</span>\n      <a class="popout no-hover" href="'+l((o=(o=e&&e.alternate_url,null==o||false===o?o:o.href),typeof o===s?o.apply(e):o))+'" title="'+l((o=i&&i.title_text,typeof o===s?o.apply(e):o))+'" target="_blank">\n        <img src="/images/popout.png"/>\n      </a>\n      <div class="clear"></div>\n    </li>\n    '
return r}function m(e,t,i){var o,a,r=""
r+='\n<li class="file '
if(a=n.extension)o=a.call(e,{hash:{},data:t})
else{a=e&&e.extension
o=typeof a===s?a.call(e,{hash:{},data:t}):a}r+=l(o)+'" id="document_'
if(a=n.document_id)o=a.call(e,{hash:{},data:t})
else{a=e&&e.document_id
o=typeof a===s?a.call(e,{hash:{},data:t}):a}r+=l(o)+'" tabindex="0" role="button">\n  <span class="filename">'
if(a=n.name)o=a.call(e,{hash:{},data:t})
else{a=e&&e.name
o=typeof a===s?a.call(e,{hash:{},data:t}):a}r+=l(o)+'</span>\n  <a class="popout no-hover" href="'+l((o=(o=e&&e.alternate_url,null==o||false===o?o:o.href),typeof o===s?o.apply(e):o))+'" title="'+l((o=i&&i.title_text,typeof o===s?o.apply(e):o))+'" target="_blank">\n    <img src=\'/images/popout.png\'/>\n  </a>\n  <div class="clear"></div>\n</li>\n'
return r}a=n.each.call(t,(a=t&&t.tree,null==a||false===a?a:a.folders),{hash:{},inverse:c.noop,fn:c.programWithDepth(1,u,o,t),data:o});(a||0===a)&&(r+=a)
r+="\n"
a=n.each.call(t,(a=t&&t.tree,null==a||false===a?a:a.files),{hash:{},inverse:c.noop,fn:c.programWithDepth(4,m,o,t),data:o});(a||0===a)&&(r+=a)
r+="\n"
return r}))
p["a"].loadStylesheet("jst/googleDocsTreeView",{new_styles_normal_contrast:{combinedChecksum:"a7a061ea35"},new_styles_high_contrast:{combinedChecksum:"a7a061ea35"},responsive_layout_normal_contrast:{combinedChecksum:"a7a061ea35"},responsive_layout_high_contrast:{combinedChecksum:"a7a061ea35"},new_styles_normal_contrast_rtl:{combinedChecksum:"973fec7ceb"},new_styles_high_contrast_rtl:{combinedChecksum:"973fec7ceb"},responsive_layout_normal_contrast_rtl:{combinedChecksum:"973fec7ceb"},responsive_layout_high_contrast_rtl:{combinedChecksum:"973fec7ceb"}}[p["a"].getCssVariant()])
var k=y[v]
n("26Wh")
var w=function(e,t){return function(){return e.apply(t,arguments)}},j=function(e,t){for(var n in t)x.call(t,n)&&(e[n]=t[n])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},x={}.hasOwnProperty
var R=function(e){j(t,e)
function t(){this.activateFolder=w(this.activateFolder,this)
this.activateFile=w(this.activateFile,this)
this.handleKeyboard=w(this.handleKeyboard,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.template=k
t.prototype.events={"click li.file":"activateFile","click li.folder":"activateFolder",keydown:"handleKeyboard"}
t.prototype.render=function(){var e
e=d.t("view_in_separate_window","View in Separate Window")
this.$el.html(this.template({tree:this.model,title_text:e}))
return this.$el.instTree({autoclose:false,multi:false,dragdrop:false})}
t.prototype.handleKeyboard=function(e){if(32===e.keyCode){if(l()(document.activeElement).hasClass("file"))return this.activateFile(e)
if(l()(document.activeElement).hasClass("folder"))return this.activateFolder(e)}}
t.prototype.activateFile=function(e){var t,n
if(this.$(e.target).closest(".popout").length>0)return
t="keydown"===e.type?this.$(e.target):this.$(e.currentTarget)
e.preventDefault()
e.stopPropagation()
this.$(".file.active").removeClass("active")
t.addClass("active")
n=t.attr("id").substring(9)
this.trigger("activate-file",n)
return l()("#submit_google_doc_form .btn-primary").focus()}
t.prototype.activateFolder=function(e){var t,n
if("keydown"===e.type){e.preventDefault()
t=this.$(e.target).find(".sign")
n=this.$(e.target)}else{t=this.$(e.target)
0===t.closest(".sign").length&&(n=this.$(e.currentTarget))}if(n&&t.closest(".file,.folder").hasClass("folder")){n.find(".sign").click()
return n.find(".file").focus()}}
t.prototype.tagName="ul"
t.prototype.id="google_docs_tree"
t.prototype.attributes={style:"width: 100%;"}
return t}(_.a.View)
var U=b.a.default
var S=U.template,B=U.templates=U.templates||{}
var C="assignments/homework-submission-tool"
B[C]=S((function(e,t,n,i,o){this.compilerInfo=[4,">= 1.0.0"]
n=this.merge(n,e.helpers)
o=o||{}
var a,r,s="",l="function",c=this.escapeExpression,u=this
function d(e,t){var n,i=""
i+='\n      <img style="max-width: 25px; max-height: 25px;" alt="" src=\''+c((n=(n=e&&e.homework_submission,null==n||false===n?n:n.icon_url),typeof n===l?n.apply(e):n))+"'/>\n    "
return i}function m(e,t){var i,o=""
o+="\n      "
i=n["if"].call(e,e&&e.icon_url,{hash:{},inverse:u.program(6,h,t),fn:u.program(4,_,t),data:t});(i||0===i)&&(o+=i)
o+="\n    "
return o}function _(e,t){var i,o,a=""
a+='\n        <img style="max-width: 25px; max-height: 25px;" alt="" src=\''
if(o=n.icon_url)i=o.call(e,{hash:{},data:t})
else{o=e&&e.icon_url
i=typeof o===l?o.call(e,{hash:{},data:t}):o}a+=c(i)+"'/>\n      "
return a}function h(e,t){return"\n        <img alt=\"\" src='/images/link.png'/>\n      "}s+="<li class='tool'>\n  <a href='#'>\n    "
a=n["if"].call(t,(a=t&&t.homework_submission,null==a||false===a?a:a.icon_url),{hash:{},inverse:u.program(3,m,o),fn:u.program(1,d,o),data:o});(a||0===a)&&(s+=a)
s+="\n\n    "
if(r=n.display_text)a=r.call(t,{hash:{},data:o})
else{r=t&&t.display_text
a=typeof r===l?r.call(t,{hash:{},data:o}):r}s+=c(a)+"\n  </a>\n</li>"
return s}))
var G=B[C]
Object(a["a"])(JSON.parse('{"de":{"external_toolsHomeworkSubmissionLtiContainer":{"no_tools_found":"Keine Tools gefunden"}},"hu":{"external_toolsHomeworkSubmissionLtiContainer":{"no_tools_found":"Nem találhatóak eszközök"}}}'))
var O=o["default"].scoped("external_toolsHomeworkSubmissionLtiContainer")
var E=n("iLq2")
var T=n("0Pgl")
class A extends _.a.Collection{}A.prototype.model=T["a"]
var N=n("x1Tw")
Object(a["a"])(JSON.parse('{"de":{"ExternalContentFileSubmissionView":{"file_retrieval_error":"Fehler beim Abrufen der Datei","getting_file":"Datei wird abgerufen ...","invalid_file_retrieval":"Beim Abrufen der mit diesem Tool gesendeten Datei ist ein Problem aufgetreten.","processing_submission":"Canvas verarbeitet gerade Ihre Einsendung. Sie können diese Seite ruhig verlassen. Wir werden Sie per E-Mail benachrichtigen, falls die Verarbeitung Ihrer Einsendung fehlschlägt."}},"hu":{"ExternalContentFileSubmissionView":{"file_retrieval_error":"A fájl lekérése sikertelen","getting_file":"Fájl lekérése...","invalid_file_retrieval":"Probléma adódott az eszköz által küldött fájl lekérése közben."}}}'))
var L=o["default"].scoped("ExternalContentFileSubmissionView")
Object(a["a"])(JSON.parse('{"de":{"assignments":{"external_content_homework_file_submission_view":{"additional_comments":"Zusätzliche Kommentare","buttons":{"submit_assignment":"Aufgabe abgeben"},"group_assignment_header":"Kommentare ..."}},"buttons":{"cancel":"Abbrechen"},"i_agree_to_the_tool_s_end_user_license_agreement_1ba71197":"Ich bin mit der *Lizenzvereinbarung für Endbenutzer für das Tool einverstanden.*"},"hu":{"assignments":{"external_content_homework_file_submission_view":{"additional_comments":"További megjegyzések","buttons":{"submit_assignment":"Feladat beadása"},"group_assignment_header":"Megjegyzések..."}},"buttons":{"cancel":"Mégse"}}}'))
o["default"].scoped("assignments.external_content_homework_file_submission_view")
var D=b.a.default
var I=D.template,z=D.templates=D.templates||{}
var M="assignments/ExternalContentHomeworkFileSubmissionView"
z[M]=I((function(e,t,n,i,o){this.compilerInfo=[4,">= 1.0.0"]
n=this.merge(n,e.helpers)
o=o||{}
var a,r,s,l="",c=n.helperMissing,u=this.escapeExpression,d="function",m=this
function _(e,t){var i,o,a,r=""
r+='\n          <label class="checkbox">\n            <input type="checkbox" class="turnitin_pledge external-tool" name="turnitin_pledge">\n              '
i=(o=n.__i18nliner_escape||e&&e.__i18nliner_escape,a={hash:{},data:t},o?o.call(e,(i=e&&e.ENV,null==i||false===i?i:i.EULA_URL),a):c.call(e,"__i18nliner_escape",(i=e&&e.ENV,null==i||false===i?i:i.EULA_URL),a))
i=(o=n.__i18nliner_concat||e&&e.__i18nliner_concat,a={hash:{},data:t},o?o.call(e,'<a href="',i,'" target="_blank">$1</a>',a):c.call(e,"__i18nliner_concat",'<a href="',i,'" target="_blank">$1</a>',a))
r+=u((o=n.t||e&&e.t,a={hash:{w0:i,i18n_inferred_key:true},data:t},o?o.call(e,"i_agree_to_the_tool_s_end_user_license_agreement_1ba71197","I agree to the tool's *End-User License Agreement.*",a):c.call(e,"t","i_agree_to_the_tool_s_end_user_license_agreement_1ba71197","I agree to the tool's *End-User License Agreement.*",a)))+"\n            </input>\n          </label>\n        "
return r}function h(e,t){var i,o=""
o+="\n          "
i=n["if"].call(e,(i=e&&e.ENV,null==i||false===i?i:i.SIMILARITY_PLEDGE),{hash:{},inverse:m.noop,fn:m.program(4,b,t),data:t});(i||0===i)&&(o+=i)
o+="\n        "
return o}function b(e,t){var n,i=""
i+='\n            <label class="checkbox">\n              <input type="checkbox" class="turnitin_pledge external-tool" name="turnitin_pledge">\n                '+u((n=(n=e&&e.ENV,null==n||false===n?n:n.SIMILARITY_PLEDGE),typeof n===d?n.apply(e):n))+"\n              </input>\n            </label>\n          "
return i}l+='<div style="padding: 20px;">\n  <form class="form-horizontal external-tool-submission" role="form">\n\n    <div class="control-group">\n      <label class="control-label">File</label>\n      <div class="controls" style="padding-top: 5px;">\n        <strong>'
if(r=n.text)a=r.call(t,{hash:{},data:o})
else{r=t&&t.text
a=typeof r===d?r.call(t,{hash:{},data:o}):r}l+=u(a)+'</strong>\n        <a href="#" class="relaunch-tool btn btn-mini">change</a>\n      </div>\n    </div>\n\n    <div class="control-group">\n      <label class="control-label">'+u((r=n.t||t&&t.t,s={hash:{scope:"assignments.external_content_homework_file_submission_view"},data:o},r?r.call(t,"additional_comments","Additional comments",s):c.call(t,"t","additional_comments","Additional comments",s)))+'</label>\n      <div class="controls">\n        <textarea class="submission_comment" rows="3" placeholder="'+u((r=n.t||t&&t.t,s={hash:{scope:"assignments.external_content_homework_file_submission_view"},data:o},r?r.call(t,"group_assignment_header","Comments...",s):c.call(t,"t","group_assignment_header","Comments...",s)))+'" title="'+u((r=n.t||t&&t.t,s={hash:{scope:"assignments.external_content_homework_file_submission_view"},data:o},r?r.call(t,"additional_comments","Additional comments",s):c.call(t,"t","additional_comments","Additional comments",s)))+'"></textarea>\n      </div>\n    </div>\n\n    <div class="control-group">\n      <div class="controls">\n        '
a=n["if"].call(t,(a=t&&t.ENV,null==a||false===a?a:a.EULA_URL),{hash:{},inverse:m.program(3,h,o),fn:m.program(1,_,o),data:o});(a||0===a)&&(l+=a)
l+='\n        <button type="button" class="cancel_button btn">'+u((r=n.t||t&&t.t,s={hash:{scope:"assignments.external_content_homework_file_submission_view"},data:o},r?r.call(t,"#buttons.cancel","Cancel",s):c.call(t,"t","#buttons.cancel","Cancel",s)))+'</button>\n        <button type="submit" class="submit_button btn btn-primary">'+u((r=n.t||t&&t.t,s={hash:{scope:"assignments.external_content_homework_file_submission_view"},data:o},r?r.call(t,"buttons.submit_assignment","Submit Assignment",s):c.call(t,"t","buttons.submit_assignment","Submit Assignment",s)))+"</button>\n      </div>\n    </div>\n\n  </form>\n</div>\n"
return l}))
var F=z[M]
Object(a["a"])(JSON.parse('{"de":{"submit_assignment_helper":{"messages":{"agree_to_pledge":"Vor Abgabe der Aufgabe müssen Sie der Abgabeerklärung zustimmen."}},"the_launched_tool_returned_an_invalid_resource_for_24512878":"Das gestartete Tool hat eine ungültige Ressource für diese Aufgabe zurückgegeben."},"hu":{"submit_assignment_helper":{"messages":{"agree_to_pledge":"El kell fogadnia a beküldési nyilatkozatot, mielőtt beküldené ezt a feladatot."}}}}'))
var V=o["default"].scoped("submit_assignment_helper")
n("p6Wi")
n("MWZS")
const P=function(e,t){return!ENV.SUBMIT_ASSIGNMENT||!ENV.SUBMIT_ASSIGNMENT.ALLOWED_EXTENSIONS||ENV.SUBMIT_ASSIGNMENT.ALLOWED_EXTENSIONS.length<=0||t.url.match(/\./)&&l.a.inArray(e,ENV.SUBMIT_ASSIGNMENT.ALLOWED_EXTENSIONS)>=0}
const H=function(e){l.a.flashError(V.t("The launched tool returned an invalid resource for this assignment"))
console.log(e)
return false}
function W(e,t){const n=document.querySelectorAll(e)
for(let e=0;e<n.length;++e)n[e].value=t?(new Date).getTime():""}function Q(e){if(!e)return false
if("LtiLinkItem"===e["@type"]){if(!l()("#submit_online_url_form, #submit_online_upload_form").length)return H("this assignment doesn't accept URL submissions")
l()("#external_tool_url").val(e.url)
l()("#external_tool_submission_type").val("basic_lti_launch")
var t=l()("<a/>",{href:e.url}).text(e.text||e.title)
l()("#external_tool_submission_details").empty().append(t).attr("class","url_submission")}else{if("FileItem"!==e["@type"])return H("return_type must be 'link' or 'file'")
if(!l()("#submit_online_upload_form").length)return H("this assignment doesn't accept file submissions")
{const n=e.url.split(/\./).pop()
if(!P(n,e)){l()("#submit_from_external_tool_form button[type=submit]").attr("disabled",true)
return H("Invalid submission file type")}l()("#external_tool_url").val(e.url)
l()("#external_tool_submission_type").val("online_url_to_file")
l()("#external_tool_filename").val(e.text)
t=l()("<a/>",{href:e.url}).text(e.text)
l()("#external_tool_submission_details").empty().append(t).attr("class","file_submission")}}return true}function J(e){if(e.length>0&&!e.attr("checked")){alert(V.t("messages.agree_to_pledge","You must agree to the submission pledge before you can submit this assignment."))
return false}return true}var K=function(e,t){return function(){return e.apply(t,arguments)}},q=function(e,t){for(var n in t)$.call(t,n)&&(e[n]=t[n])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},$={}.hasOwnProperty
var X=function(e){q(t,e)
function t(){this._triggerSubmit=K(this._triggerSubmit,this)
this._triggerCancel=K(this._triggerCancel,this)
this._relaunchTool=K(this._relaunchTool,this)
return t.__super__.constructor.apply(this,arguments)}t.optionProperty("externalTool")
t.prototype.events={"click .relaunch-tool":"_relaunchTool","click .submit_button":"_triggerSubmit","click .cancel_button":"_triggerCancel"}
t.prototype._relaunchTool=function(e){e.preventDefault()
e.stopPropagation()
return this.trigger("relaunchTool",this.externalTool,this.model)}
t.prototype._triggerCancel=function(e){e.preventDefault()
e.stopPropagation()
return this.trigger("cancel",this.externalTool,this.model)}
t.prototype._triggerSubmit=function(e){e.preventDefault()
e.stopPropagation()
this.model.set("comment",this.$el.find(".submission_comment").val())
if(J(l()("input.turnitin_pledge.external-tool")))return this.submitHomework()}
return t}(_.a.View)
var Z=function(e,t){return function(){return e.apply(t,arguments)}},Y=function(e,t){for(var n in t)ee.call(t,n)&&(e[n]=t[n])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},ee={}.hasOwnProperty
var te=function(e){Y(t,e)
function t(){this.submissionFailure=Z(this.submissionFailure,this)
this.disableLoader=Z(this.disableLoader,this)
this.sendCallbackUrl=Z(this.sendCallbackUrl,this)
this.reloadSuccessfulAssignment=Z(this.reloadSuccessfulAssignment,this)
this.submitHomework=Z(this.submitHomework,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.template=F
t.optionProperty("externalTool")
t.prototype.submitHomework=function(){return this.uploadFileFromUrl(this.externalTool,this.model)}
t.prototype.reloadSuccessfulAssignment=function(e){l()(window).off("beforeunload")
alert(L.t("processing_submission","Canvas is currently processing your submission. You can safely navigate away from this page and we will email you if the submission fails to process."))
window.location.reload()
this.loaderPromise.resolve()}
t.prototype.sendCallbackUrl=function(e){var t,n,i,o
o=e.data.upload_url
if(o){t=new FormData
i=e.data.upload_params
if(i)for(n in i)t.append(n,i[n])
return N["a"].post(o,t)}}
t.prototype.disableLoader=function(){return this.loaderPromise.resolve()}
t.prototype.submissionFailure=function(){this.loaderPromise.resolve()
this.$el.find(".submit_button").text(L.t("file_retrieval_error","Retrieving File Failed"))
return l.a.flashError(L.t("invalid_file_retrieval","There was a problem retrieving the file sent from this tool."))}
t.prototype.uploadFileFromUrl=function(e,t){var n,i
this.loaderPromise=l.a.Deferred()
this.assignmentSubmission=t
n={url:this.assignmentSubmission.get("url"),name:this.assignmentSubmission.get("text"),content_type:"",eula_agreement_timestamp:this.assignmentSubmission.get("eula_agreement_timestamp"),comment:this.assignmentSubmission.get("comment")}
i=null!=ENV.SUBMIT_ASSIGNMENT.GROUP_ID_FOR_USER?"/api/v1/groups/"+ENV.SUBMIT_ASSIGNMENT.GROUP_ID_FOR_USER+"/files?assignment_id="+ENV.SUBMIT_ASSIGNMENT.ID+"&submit_assignment=1":"/api/v1/courses/"+ENV.COURSE_ID+"/assignments/"+ENV.SUBMIT_ASSIGNMENT.ID+"/submissions/"+ENV.current_user_id+"/files"
N["a"].post(i,n).then(this.sendCallbackUrl).then(this.reloadSuccessfulAssignment)["catch"](this.submissionFailure)
this.$el.disableWhileLoading(this.loaderPromise,{buttons:{".submit_button":L.t("getting_file","Retrieving File...")}})}
return t}(X)
Object(a["a"])(JSON.parse('{"de":{"assignments":{"external_content_homework_url_submission_view":{"additional_comments":"Zusätzliche Kommentare","buttons":{"submit_assignment":"Aufgabe abgeben"},"group_assignment_header":"Kommentare ..."}},"buttons":{"cancel":"Abbrechen"}},"hu":{"assignments":{"external_content_homework_url_submission_view":{"additional_comments":"További megjegyzések","buttons":{"submit_assignment":"Feladat beadása"},"group_assignment_header":"Megjegyzések..."}},"buttons":{"cancel":"Mégse"}}}'))
o["default"].scoped("assignments.external_content_homework_url_submission_view")
var ne=b.a.default
var ie=ne.template,oe=ne.templates=ne.templates||{}
var ae="assignments/ExternalContentHomeworkUrlSubmissionView"
oe[ae]=ie((function(e,t,n,i,o){this.compilerInfo=[4,">= 1.0.0"]
n=this.merge(n,e.helpers)
o=o||{}
var a,r,s,l="",c="function",u=this.escapeExpression,d=n.helperMissing,m=this
function _(e,t){var n,i=""
i+='\n          <label class="checkbox">\n            <input type="checkbox" class="turnitin_pledge external-tool" name="turnitin_pledge">\n              '+u((n=(n=e&&e.ENV,null==n||false===n?n:n.SIMILARITY_PLEDGE),typeof n===c?n.apply(e):n))+"\n            </input>\n          </label>\n        "
return i}l+='<div style="padding: 20px;">\n  <form class="form-horizontal" role="form">\n\n    <div class="control-group">\n      <label class="control-label">Website URL</label>\n      <div class="controls controls-url">\n        <strong>'
if(r=n.url)a=r.call(t,{hash:{},data:o})
else{r=t&&t.url
a=typeof r===c?r.call(t,{hash:{},data:o}):r}l+=u(a)+'</strong>\n        <a href="#" class="relaunch-tool btn btn-mini">change</a>\n      </div>\n    </div>\n\n    <div class="control-group">\n      <label class="control-label">'+u((r=n.t||t&&t.t,s={hash:{scope:"assignments.external_content_homework_url_submission_view"},data:o},r?r.call(t,"additional_comments","Additional comments",s):d.call(t,"t","additional_comments","Additional comments",s)))+'</label>\n      <div class="controls">\n        <textarea class="submission_comment" rows="3" placeholder="'+u((r=n.t||t&&t.t,s={hash:{scope:"assignments.external_content_homework_url_submission_view"},data:o},r?r.call(t,"group_assignment_header","Comments...",s):d.call(t,"t","group_assignment_header","Comments...",s)))+'" title="'+u((r=n.t||t&&t.t,s={hash:{scope:"assignments.external_content_homework_url_submission_view"},data:o},r?r.call(t,"additional_comments","Additional comments",s):d.call(t,"t","additional_comments","Additional comments",s)))+'"></textarea>\n      </div>\n    </div>\n\n    <div class="control-group">\n      <div class="controls">\n        '
a=n["if"].call(t,(a=t&&t.ENV,null==a||false===a?a:a.SIMILARITY_PLEDGE),{hash:{},inverse:m.noop,fn:m.program(1,_,o),data:o});(a||0===a)&&(l+=a)
l+='\n      </div>\n    </div>\n\n    <div class="control-group">\n      <div class="controls">\n        <button type="button" class="cancel_button btn">'+u((r=n.t||t&&t.t,s={hash:{scope:"assignments.external_content_homework_url_submission_view"},data:o},r?r.call(t,"#buttons.cancel","Cancel",s):d.call(t,"t","#buttons.cancel","Cancel",s)))+'</button>\n        <button type="submit" class="submit_button btn btn-primary">'+u((r=n.t||t&&t.t,s={hash:{scope:"assignments.external_content_homework_url_submission_view"},data:o},r?r.call(t,"buttons.submit_assignment","Submit Assignment",s):d.call(t,"t","buttons.submit_assignment","Submit Assignment",s)))+"</button>\n      </div>\n    </div>\n\n  </form>\n</div>\n"
return l}))
var re=oe[ae]
var se=function(e,t){return function(){return e.apply(t,arguments)}},le=function(e,t){for(var n in t)ce.call(t,n)&&(e[n]=t[n])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},ce={}.hasOwnProperty
var ue=function(e){le(t,e)
function t(){this.redirectSuccessfulAssignment=se(this.redirectSuccessfulAssignment,this)
this.submitHomework=se(this.submitHomework,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.template=re
t.optionProperty("externalTool")
t.prototype.submitHomework=function(){var e,t
e={submission:{submission_type:"online_url",url:this.model.get("url")},comment:{text_comment:this.model.get("comment")}}
t="/api/v1/courses/"+ENV.COURSE_ID+"/assignments/"+ENV.SUBMIT_ASSIGNMENT.ID+"/submissions"
return l.a.ajaxJSON(t,"POST",e,this.redirectSuccessfulAssignment)}
t.prototype.redirectSuccessfulAssignment=function(e){l()(window).off("beforeunload")
return window.location.reload()}
return t}(X)
var de=function(e,t){return function(){return e.apply(t,arguments)}},me=function(e,t){for(var n in t)_e.call(t,n)&&(e[n]=t[n])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},_e={}.hasOwnProperty
var he=function(e){me(t,e)
function t(){this.redirectSuccessfulAssignment=de(this.redirectSuccessfulAssignment,this)
this.submitHomework=de(this.submitHomework,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.template=re
t.optionProperty("externalTool")
t.prototype.buildSubmission=function(){return{submission_type:"basic_lti_launch",url:this.model.get("url")}}
t.prototype.extractComment=function(){return{text_comment:this.model.get("comment")}}
t.prototype.submissionURL=function(){return"/api/v1/courses/"+ENV.COURSE_ID+"/assignments/"+ENV.SUBMIT_ASSIGNMENT.ID+"/submissions"}
t.prototype.submitHomework=function(){var e
e={submission:this.buildSubmission(),comment:this.extractComment()}
return l.a.ajaxJSON(this.submissionURL(),"POST",e,this.redirectSuccessfulAssignment)}
t.prototype.redirectSuccessfulAssignment=function(e){l()(window).off("beforeunload")
return window.location.reload()}
return t}(X)
Object(a["a"])(JSON.parse('{"de":{"error_retrieving_content_c07ee76b":"Fehler beim Abrufen des Contents"}}'))
var be=o["default"].scoped("external_toolsdeepLinking")
function pe(e,t,n){t.trigger("ready",{contentItems:[ge(e)]})
n()}function fe(e,t,n){l.a.flashError(be.t("Error retrieving content"))
console.error(e)
n(t.model.id)}function ge(e){const t={ltiResourceLink:"LtiLinkItem",file:"FileItem"}
const n=e.type,i=e.title,o=e.text,a=e.icon,r=e.url
const s=t[n]
if(!s)throw"Unknown type: ".concat(n)
return{"@type":s,title:i,text:o,url:r,thumbnail:{"@id":a}}}var ye=n("Ds/H")
n("vpJZ")
class ve{constructor(e){this.handleDeepLinking=e=>{if(e.origin!==ENV.DEEP_LINKING_POST_MESSAGE_ORIGIN||!e.data||"LtiDeepLinkingResponse"!==e.data.messageType)return
Object(ye["a"])(e).then(e=>{pe(e,this.contentReturnView,this.removeDeepLinkingListener)}).catch(e=>{fe(e,this.contentReturnView,this.embedLtiLaunch.bind(this))})}
this.removeDeepLinkingListener=()=>{window.removeEventListener("message",this.handleDeepLinking)}
this.addDeepLinkingListener=()=>{this.removeDeepLinkingListener()
window.addEventListener("message",this.handleDeepLinking)}
this.renderedViews={}
this.toolsForm=l()(e)
this.externalToolCollection=new A
this.externalToolCollection.add(ENV.EXTERNAL_TOOLS)}loadExternalTools(){if(!(this.externalToolCollection.length>0))return this.toolsForm.find("ul.tools li").text(O.t("no_tools_found","No tools found"))
l()(".submit_from_external_tool_option").parent().show()
this.toolsForm.find("ul.tools").empty()
this.externalToolCollection.forEach(e=>{this.addToolToMoreList(e)})}embedLtiLaunch(e){const t=this.externalToolCollection.findWhere({id:e.toString(10)})
this.cleanupViewsForTool(t)
const n=this.createReturnView(t)
this.addDeepLinkingListener()
l()("#submit_from_external_tool_form_".concat(e)).prepend(n.el)
n.render()
return this.renderedViews[e.toString(10)].push(n)}cleanupViewsForTool(e){if(u.a.has(this.renderedViews,e.get("id"))){const t=this.renderedViews[e.get("id")]
t.forEach(e=>e.remove())}return this.renderedViews[e.get("id")]=[]}cancelSubmission(){l()("#submit_assignment").hide()
l()(".submit_assignment_link").show()}addToolToMoreList(e){e.attributes.display_text=e.get("homework_submission").label
const t=G(e.attributes)
const n=l()(t).data("tool",e)
return this.toolsForm.find("ul.tools").append(n)}createReturnView(e){const t=new E["a"]({model:e,launchType:"homework_submission",launchParams:{assignment_id:ENV.SUBMIT_ASSIGNMENT.ID},displayAsModal:false})
this.contentReturnView=t
t.on("ready",(n=this,function(t){let i
e=this.model
i=n.createHomeworkSubmissionView(e,t)
i.parentView=n
this.remove()
l()("#submit_from_external_tool_form_"+e.get("id")).append(i.el)
n.cleanupViewsForTool(e)
n.renderedViews[e.get("id")].push(i)
i.render()
return l()("input.turnitin_pledge").click(e=>W("#eula_agreement_timestamp",e.target.checked))}))
var n
t.on("cancel",e=>{})
return t}createHomeworkSubmissionView(e,t){const n=t.contentItems[0]
const i=ve.homeworkSubmissionViewMap[n["@type"]]||ue
const o=new i({externalTool:e,model:new _.a.Model(n)})
o.on("relaunchTool",(function(e,t){this.remove()
return this.parentView.embedLtiLaunch(e.get("id"))}))
o.on("cancel",(function(e,t){return this.parentView.cancelSubmission()}))
return o}}ve.homeworkSubmissionViewMap={FileItem:te,LtiLinkItem:he}
var ke=n("/iD7")
var we=n("21i1")
var je=n("60Hp")
n("jYyc")
n("Z+Ib")
n("YGE8")
n("OShF")
n("iBIV")
n("s/PJ")
n("Sv6n")
n("q1tI")
var xe=n("i8i4")
var Re=n.n(xe)
var Ue=n("Op/J")
var Se={moreToolsListClickHandler(e){e.preventDefault()
const t=l()(this).data("tool")
const n="/courses/".concat(ENV.COURSE_ID,"/external_tools/").concat(t.id,"/resource_selection?homework=1&assignment_id=").concat(ENV.SUBMIT_ASSIGNMENT.ID)
const i=t.get("homework_submission").selection_width||t.get("selection_width")
const o=t.get("homework_submission").selection_height||t.get("selection_height")
const a=t.get("display_text")
const s=l()("<div/>",{id:"homework_selection_dialog",style:"padding: 0; overflow-y: hidden;"}).appendTo(l()("body"))
s.append(l()("<iframe/>",{frameborder:0,src:n,id:"homework_selection_iframe",tabindex:"0"}).css({width:i,height:o})).bind("selection",(e,t)=>{Q(e.contentItems[0])
s.off("dialogbeforeclose",Se.dialogCancelHandler)
s.dialog("close")}).on("dialogbeforeclose",Se.dialogCancelHandler).dialog({width:"auto",height:"auto",title:a,close(){s.remove()}})
const c=35
s.append(l()("<div/>",{id:"tab-helper",style:"height:0px;padding:5px",tabindex:"0"}).focus((function(){l()(this).height("".concat(c,"px"))
const e=document.createTextNode(r.t("Q: What goes black, white, black, white?  A: A panda rolling down a hill."))
this.appendChild(e)})).blur((function(){l()(this).html("").height("0px")})))
return s},beforeUnloadHandler:e=>e.returnValue=r.t("Changes you made may not be saved."),dialogCancelHandler(e,t){const n=confirm(r.t("Are you sure you want to cancel? Changes you made may not be saved."))
false==n&&e.preventDefault()}}
window.submissionAttachmentIndex=-1
we["a"].preloadRemoteModule()
l()(document).ready((function(){let e=false,t=l()(".submit_assignment_form")
const n=new ve("#submit_from_external_tool_form")
if(!ENV.use_rce_enhancements){const e=new ke["a"]
e.render().$el.insertBefore(l()(".switch_text_entry_submission_views:first"))}t.delegate("#submission_comment","focus",(function(e){const t=l()(this)
""===t.val().trim()&&t.addClass("focus_or_content")})).delegate("#submission_comment","blur",(function(e){const t=l()(this)
""===t.val().trim()&&t.removeClass("focus_or_content")}))
t.submit((function(n){const i=this
const o=l()(this).find(".turnitin_pledge")
const a=l()(this).find(".vericite_pledge")
if("online_url_to_file"==l()("#external_tool_submission_type").val()){n.preventDefault()
n.stopPropagation()
Ce()
return}if(!J(o)){n.preventDefault()
n.stopPropagation()
return false}if(!J(a)){n.preventDefault()
n.stopPropagation()
return false}const s=!l()(this).is("#submit_online_text_entry_form")||l()(this).validateForm({object_name:"submission",required:["body"]})
if(!s)return false
l()(this).find("button[type='submit']").text(r.t("messages.submitting","Submitting..."))
l()(this).find("button").attr("disabled",true)
if("submit_online_upload_form"==l()(this).attr("id")){n.preventDefault()&&n.stopPropagation()
const o=l()(this).find("input[type=file]:visible").filter((function(){return""!==l()(this).val()}))
const a=l()(this).find("input[type=file]:visible").filter((function(){return this.files[0]&&0===this.files[0].size}))
const s=l()(this).find("#submission_attachment_ids").val()
const c=function(){l()(i).find("button[type=submit]").text(r.t("#button.submit_assignment","Submit Assignment")).prop("disabled",false)}
if(0===o.length&&""===s){l.a.flashError(r.t("#errors.no_attached_file","You must attach at least one file to this assignment"))
c()
return false}if(a.length){l.a.flashError(r.t("Attached files must be greater than 0 bytes"))
c()
return false}if(ENV.SUBMIT_ASSIGNMENT.ALLOWED_EXTENSIONS.length>0){const e=l()(this).find("button[type=submit]")
let t=false
l.a.each(s.split(","),(e,n)=>{if(n.length>0){const e=l()("#submission_attachment_ids").data(String(n)).split(".").pop().toLowerCase()
if(l.a.inArray(e,ENV.SUBMIT_ASSIGNMENT.ALLOWED_EXTENSIONS)<0){t=true
l.a.flashError(r.t("#errors.wrong_file_extension",'The file you selected with extension "%{extension}", is not authorized for submission',{extension:e}))}}})
if(t){e.text(r.t("#button.submit_assignment","Submit Assignment")).prop("disabled",false)
return false}}l.a.ajaxJSONPreparedFiles.call(this,{handle_files(e,t){const n=(t["submission[attachment_ids]"]||"").split(",")
for(const t in e)n.push(e[t].id)
t["submission[attachment_ids]"]=n.join(",")
return t},context_code:l()("#submit_assignment").data("context_code"),asset_string:l()("#submit_assignment").data("asset_string"),intent:"submit",file_elements:o,formData:l()(this).getFormData(),formDataTarget:"url",url:l()(this).attr("action"),success(t){e=true
window.location=window.location.href.replace(/\#$/g,"").replace(window.location.hash,"")},error(e){t.find("button[type='submit']").text(r.t("messages.submit_failed","Submit Failed, please try again"))
t.find("button").attr("disabled",false)}})}else e=true}))
l()(window).on("beforeunload",t=>{if(l()("#submit_assignment:visible").length>0&&!e){t.returnValue=r.t("messages.not_submitted_yet",'You haven\'t finished submitting your assignment.  You still need to click "Submit" to finish turning it in.  Do you want to leave this page anyway?')
return t.returnValue}})
l()(document).fragmentChange((e,t)=>{if(t&&0==t.indexOf("#submit")){l()(".submit_assignment_link").triggerHandler("click",true)
"#submit_google_doc"==t&&l()("#submit_assignment_tabs").tabs("select",".google_doc_form")}})
l()("input.turnitin_pledge").click(e=>{W("#eula_agreement_timestamp",e.target.checked)})
l()(".submit_assignment_link").click((function(e,t){e.preventDefault()
const i=l()(this).hasClass("late")
new Date
if(i&&!t){let e
e=l()(".resubmit_link").length>0?confirm(r.t("messages.now_overdue","This assignment is now overdue.  Any new submissions will be marked as late.  Continue anyway?")):confirm(r.t("messages.overdue","This assignment is overdue.  Do you still want to submit it?"))
if(!e)return}l()("#submit_assignment").show()
l()(".submit_assignment_link").hide()
l()("html,body").scrollTo(l()("#submit_assignment"))
o()
n.loadExternalTools()
l()("#submit_assignment_tabs li").first().focus()}))
l()(".switch_text_entry_submission_views").click((function(e){e.preventDefault()
we["a"].callOnRCE(l()("#submit_online_text_entry_form textarea:first"),"toggle")
l()(this).siblings(".switch_text_entry_submission_views").andSelf().toggle()}))
l()(".submit_assignment_form .cancel_button").click(()=>{l()("#submit_assignment").hide()
l()(".submit_assignment_link").show()})
function o(){l()("#submit_assignment_tabs").tabs({beforeActivate(e,t){if(t.newTab.context.classList.contains("external-tool")){const e=l()(t.newTab.context).data("id")
n.embedLtiLaunch(e)}},activate(e,t){if(t.newTab.find("a").hasClass("submit_online_text_entry_option")){const e=l()("#submit_online_text_entry_form textarea:first")
we["a"].callOnRCE(e,"exists?")||we["a"].loadNewEditor(e,{manageParent:true})}"submit_google_doc_form"===t.newTab.attr("aria-controls")&&s()
"external-tool"===t.newTab.context.classList[0]&&t.newTab.find("a").click()},create(e,t){if(t.tab.find("a").hasClass("submit_online_text_entry_option")){const e=l()("#submit_online_text_entry_form textarea:first")
we["a"].callOnRCE(e,"exists?")||we["a"].loadNewEditor(e,{manageParent:true})}"submit_google_doc_form"===t.tab.attr("aria-controls")&&s()}})}const a=Object(i["a"])(Ue["default"],{selectFile:e=>{l()("#submission_attachment_ids").val(e.id)
l()("#submission_attachment_ids").data(String(e.id),e.name)
l.a.screenReaderFlashMessageExclusive(r.t("selected %{filename}",{filename:e.name}))},allowUpload:false,useContextAssets:false})
l()(".toggle_uploaded_files_link").click(e=>{e.preventDefault()
const t=l()("#uploaded_files")
if(t.is(":hidden")){l.a.screenReaderFlashMessage(r.t("File tree expanded"))
Re.a.render(a,document.getElementById("uploaded_files"))}else l.a.screenReaderFlashMessage(r.t("File tree collapsed"))
t.slideToggle()})
l()(".add_another_file_link").click((function(e){e.preventDefault()
l()("#submission_attachment_blank").clone(true).removeAttr("id").show().insertBefore(this).find("input").attr("name","attachments["+ ++submissionAttachmentIndex+"][uploaded_data]")
d()})).click()
l()(".remove_attachment_link").click((function(e){e.preventDefault()
l()(this).parents(".submission_attachment").remove()
m()
d()}))
function s(){const e=window.location.pathname+"/list_google_docs"
l.a.get(e,{},(e,t)=>{const n=new R({model:e})
l()("div#google_docs_container").html(n.el)
n.render()
n.on("activate-file",e=>{l()("#submit_google_doc_form").find("input[name='google_doc[document_id]']").val(e)
const t=l()("#submit_google_doc_form").find("[disabled].btn-primary")
t&&t.removeAttr("disabled")})},"json")}l()("#auth-google").live("click",(function(e){e.preventDefault()
const t=l()(this).attr("href")
c(t)}))
if(window.opener)try{window.opener.postMessage({type:"event",payload:"done"},window.opener.location.toString())}catch(e){console.error(e)}function c(e){const t=window.open(e,"Authorize Google Docs","menubar=no,directories=no,location=no,height=500,width=500")
l()(window).on("message",e=>{e=e.originalEvent
if(!e||!e.data||e.origin!==window.location.protocol+"//"+window.location.host)return
if("event"==e.data.type&&"done"==e.data.payload){t&&t.close()
u()}})}function u(){l()("#submit_google_doc_form.auth").hide()
l()("#submit_google_doc_form.submit_assignment_form").removeClass("hide")
s()}function d(){l()("#submit_online_upload_form .remove_attachment_link").showIf(l()("#submit_online_upload_form .submission_attachment:not(#submission_attachment_blank)").length>1)}function m(){l()("#submit_online_upload_form button[type=submit]").attr("disabled",!!l()(".bad_ext_msg:visible").length)}function _(e){let t=r.t("remove empty attachment")
if(e.val()){const n=e.val().replace(/^.*?([^\\\/]*)$/,"$1")
t=r.t("remove %{filename}",{filename:n})}e.parent().find("img").attr("alt",t)}l()(".submission_attachment input[type=file]").live("change",(function(){_(l()(this))
if(ENV.SUBMIT_ASSIGNMENT.ALLOWED_EXTENSIONS.length<1||""==l()(this).val())return
const e=l()(this).val().split(".").pop().toLowerCase()
l()(this).parent().find(".bad_ext_msg").showIf(l.a.inArray(e,ENV.SUBMIT_ASSIGNMENT.ALLOWED_EXTENSIONS)<0)
m()}))}))
l()("#submit_google_doc_form").submit(()=>{if(!l()("#submit_google_doc_form").find("input[name='google_doc[document_id]']").val())return false
l()("#uploading_google_doc_message").dialog({title:r.t("titles.uploading","Uploading Submission"),modal:true,overlay:{backgroundColor:"#000",opacity:.7}})})
l()(document).ready(()=>{l()("#submit_media_recording_form .submit_button").attr("disabled",true).text(r.t("messages.record_before_submitting","Record Before Submitting"))
l()("#media_media_recording_submission_holder .record_media_comment_link").click(e=>{e.preventDefault()
l()("#media_media_recording_submission").mediaComment("create","any",(e,t)=>{l()("#submit_media_recording_form .submit_button").attr("disabled",false).text(r.t("buttons.submit_assignment","Submit Assignment"))
l()("#submit_media_recording_form .media_comment_id").val(e)
l()("#submit_media_recording_form .media_comment_type").val(t)
l()("#media_media_recording_submission_holder").children().hide()
l()("#media_media_recording_ready").show()
l()("#media_comment_submit_button").attr("disabled",false)
l()("#media_media_recording_thumbnail").attr("id","media_comment_"+e)})})})
const Be=l()("#submit_from_external_tool_form")
function Ce(){const e=l()("#homework_file_url").attr("href")
const t={url:l()("#external_tool_url").val(),name:l()("#external_tool_filename").val(),content_type:l()("#external_tool_content_type").val()}
const n=Object(je["uploadFile"])(e,t,null).then(e=>{l()("#external_tool_submission_type").val("online_upload")
l()("#external_tool_file_id").val(e.id)
Be.submit()}).catch(e=>{console.log(e)
Be.find(".submit").text(r.t("file_retrieval_error","Retrieving File Failed"))
l.a.flashError(r.t("invalid_file_retrieval","There was a problem retrieving the file sent from this tool."))})
Be.disableWhileLoading(n,{buttons:{".submit":r.t("getting_file","Retrieving File...")}})
return n}l()("#submit_from_external_tool_form .tools li").live("click",Se.moreToolsListClickHandler)},"97gy":function(e,t,n){"use strict"
n.d(t,"a",(function(){return _}))
var i=n("VTBJ")
var o=n("1OyB")
var a=n("vuIU")
var r=n("md7G")
var s=n("foSv")
var l=n("Ji7U")
var c=n("q1tI")
var u=n.n(c)
var d=n("hPGw")
var m=u.a.createElement("path",{d:"M1743.858 267.012L710.747 1300.124 176.005 765.382 0 941.387l710.747 710.871 1209.24-1209.116z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var _=function(e){Object(l["a"])(t,e)
function t(){Object(o["a"])(this,t)
return Object(r["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(a["a"])(t,[{key:"render",value:function(){return u.a.createElement(d["a"],Object.assign({},this.props,{name:"IconCheckMark",viewBox:"0 0 1920 1920"}),m)}}])
t.displayName="IconCheckMarkSolid"
return t}(c["Component"])
_.glyphName="check-mark"
_.variant="Solid"
_.propTypes=Object(i["a"])({},d["a"].propTypes)},"CO+y":function(e,t,n){"use strict"
n.d(t,"a",(function(){return b}))
var i=n("Ff2n")
var o=n("1OyB")
var a=n("vuIU")
var r=n("md7G")
var s=n("foSv")
var l=n("Ji7U")
var c=n("q1tI")
var u=n.n(c)
var d=n("17x9")
var m=n.n(d)
var _=n("KgFQ")
var h=n("jtGx")
var b=function(e){Object(l["a"])(t,e)
function t(){Object(o["a"])(this,t)
return Object(r["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(a["a"])(t,[{key:"render",value:function(){var e=this.props,n=e.children,o=Object(i["a"])(e,["children"])
var a=Object(_["a"])(t,this.props)
return u.a.createElement(a,Object.assign({},Object(h["b"])(o),{"aria-hidden":"true"}),n)}}])
t.displayName="PresentationContent"
return t}(c["Component"])
b.propTypes={as:m.a.elementType,children:m.a.node}
b.defaultProps={as:"span",children:null}},"Ds/H":function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var i=n("vknZ")
function o(e){const t=i["a"].fromEvent(e,a)
if(t)return t.process()}async function a(){if(this.contentItems.length>0)return this.contentItems[0]}},"EvX+":function(e,t,n){"use strict"
var i=n("HIhM")
const o={}
const a={getCssVariant(){const e=window.ENV.use_responsive_layout?"responsive_layout":"new_styles"
const t=window.ENV.use_high_contrast?"high_contrast":"normal_contrast"
const n=Object(i["c"])()?"_rtl":""
return"".concat(e,"_").concat(t).concat(n)},urlFor(e,t){let n=t.combinedChecksum,i=t.includesNoVariables
const o=i?"no_variables":a.getCssVariant()
return[window.ENV.ASSET_HOST||"","dist","brandable_css",o,"".concat(e,"-").concat(n,".css")].join("/")},loadStylesheet(e,t){if(e in o)return
const n=document.createElement("link")
n.rel="stylesheet"
n.href=a.urlFor(e,t)
n.setAttribute("data-loaded-by-brandableCss",true)
document.head.appendChild(n)
window.canvasCssVariablesPolyfill&&window.canvasCssVariablesPolyfill(n)}}
t["a"]=a},ZbPE:function(e,t,n){"use strict"
var i=n("rePB")
var o=n("1OyB")
var a=n("vuIU")
var r=n("md7G")
var s=n("foSv")
var l=n("Ji7U")
var c=n("q1tI")
var u=n.n(c)
var d=n("17x9")
var m=n.n(d)
var _=n("TSYQ")
var h=n.n(_)
var b=n("J2CL")
var p=n("KgFQ")
var f=n("jtGx")
var g=n("nAyT")
var y=n("VTBJ")
function v(e){var t=e.typography,n=e.colors,i=e.spacing
return Object(y["a"])({},t,{primaryInverseColor:n.textLightest,primaryColor:n.textDarkest,secondaryColor:n.textDark,secondaryInverseColor:n.textLight,warningColor:n.textWarning,brandColor:n.textBrand,errorColor:n.textDanger,dangerColor:n.textDanger,successColor:n.textSuccess,alertColor:n.textAlert,paragraphMargin:"".concat(i.medium," 0")})}v.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"],brandColor:e["ic-brand-primary"]}}
n.d(t,"a",(function(){return U}))
var k,w,j,x
var R={componentId:"enRcg",template:function(e){return"\n\n.enRcg_bGBk{font-family:".concat(e.fontFamily||"inherit","}\n\n.enRcg_bGBk sub,.enRcg_bGBk sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n\n.enRcg_bGBk sup{top:-0.4em}\n\n.enRcg_bGBk sub{bottom:-0.4em}\n\n.enRcg_bGBk code,.enRcg_bGBk pre{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamilyMonospace||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n.enRcg_bGBk em,.enRcg_bGBk i{font-style:italic}\n\n.enRcg_bGBk b,.enRcg_bGBk strong{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.enRcg_bGBk p{display:block;margin:").concat(e.paragraphMargin||"inherit",";padding:0}\n\ninput.enRcg_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.enRcg_bGBk[type]{text-align:left}\n\n[dir=rtl] input.enRcg_bGBk[type]{text-align:right}\n\n.enRcg_bGBk:focus,input.enRcg_bGBk[type]:focus{outline:none}\n\n.enRcg_bGBk.enRcg_qFsi,input.enRcg_bGBk[type].enRcg_qFsi{color:").concat(e.primaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_bLsb,input.enRcg_bGBk[type].enRcg_bLsb{color:").concat(e.secondaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_ezBQ,input.enRcg_bGBk[type].enRcg_ezBQ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dlnd,input.enRcg_bGBk[type].enRcg_dlnd{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_cJLh,input.enRcg_bGBk[type].enRcg_cJLh{color:").concat(e.successColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fpfC,input.enRcg_bGBk[type].enRcg_fpfC{color:").concat(e.brandColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eHcp,input.enRcg_bGBk[type].enRcg_eHcp{color:").concat(e.warningColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dwua,input.enRcg_bGBk[type].enRcg_dwua{color:").concat(e.errorColor||"inherit","}\n\n.enRcg_bGBk.enRcg_NQMb,input.enRcg_bGBk[type].enRcg_NQMb{color:").concat(e.dangerColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eZgl,input.enRcg_bGBk[type].enRcg_eZgl{color:").concat(e.alertColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fbNi,input.enRcg_bGBk[type].enRcg_fbNi{-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;word-break:break-word}\n\n.enRcg_bGBk.enRcg_drST,input.enRcg_bGBk[type].enRcg_drST{font-weight:").concat(e.fontWeightNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_pEgL,input.enRcg_bGBk[type].enRcg_pEgL{font-weight:").concat(e.fontWeightLight||"inherit","}\n\n.enRcg_bGBk.enRcg_bdMA,input.enRcg_bGBk[type].enRcg_bdMA{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.enRcg_bGBk.enRcg_ijuF,input.enRcg_bGBk[type].enRcg_ijuF{font-style:normal}\n\n.enRcg_bGBk.enRcg_fetN,input.enRcg_bGBk[type].enRcg_fetN{font-style:italic}\n\n.enRcg_bGBk.enRcg_dfBC,input.enRcg_bGBk[type].enRcg_dfBC{font-size:").concat(e.fontSizeXSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_doqw,input.enRcg_bGBk[type].enRcg_doqw{font-size:").concat(e.fontSizeSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_ycrn,input.enRcg_bGBk[type].enRcg_ycrn{font-size:").concat(e.fontSizeMedium||"inherit","}\n\n.enRcg_bGBk.enRcg_cMDj,input.enRcg_bGBk[type].enRcg_cMDj{font-size:").concat(e.fontSizeLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_eoMd,input.enRcg_bGBk[type].enRcg_eoMd{font-size:").concat(e.fontSizeXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fdca,input.enRcg_bGBk[type].enRcg_fdca{font-size:").concat(e.fontSizeXXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fEWX,input.enRcg_bGBk[type].enRcg_fEWX{line-height:").concat(e.lineHeight||"inherit","}\n\n.enRcg_bGBk.enRcg_fNIu,input.enRcg_bGBk[type].enRcg_fNIu{line-height:").concat(e.lineHeightFit||"inherit","}\n\n.enRcg_bGBk.enRcg_dfDs,input.enRcg_bGBk[type].enRcg_dfDs{line-height:").concat(e.lineHeightCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bDjL,input.enRcg_bGBk[type].enRcg_bDjL{line-height:").concat(e.lineHeightDouble||"inherit","}\n\n.enRcg_bGBk.enRcg_eQnG,input.enRcg_bGBk[type].enRcg_eQnG{letter-spacing:").concat(e.letterSpacingNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_bbUA,input.enRcg_bGBk[type].enRcg_bbUA{letter-spacing:").concat(e.letterSpacingCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bRWU,input.enRcg_bGBk[type].enRcg_bRWU{letter-spacing:").concat(e.letterSpacingExpanded||"inherit","}\n\n.enRcg_bGBk.enRcg_wZsr,input.enRcg_bGBk[type].enRcg_wZsr{text-transform:none}\n\n.enRcg_bGBk.enRcg_fCZK,input.enRcg_bGBk[type].enRcg_fCZK{text-transform:capitalize}\n\n.enRcg_bGBk.enRcg_dsRi,input.enRcg_bGBk[type].enRcg_dsRi{text-transform:uppercase}\n\n.enRcg_bGBk.enRcg_bLtD,input.enRcg_bGBk[type].enRcg_bLtD{text-transform:lowercase}")},root:"enRcg_bGBk","color-primary":"enRcg_qFsi","color-secondary":"enRcg_bLsb","color-primary-inverse":"enRcg_ezBQ","color-secondary-inverse":"enRcg_dlnd","color-success":"enRcg_cJLh","color-brand":"enRcg_fpfC","color-warning":"enRcg_eHcp","color-error":"enRcg_dwua","color-danger":"enRcg_NQMb","color-alert":"enRcg_eZgl","wrap-break-word":"enRcg_fbNi","weight-normal":"enRcg_drST","weight-light":"enRcg_pEgL","weight-bold":"enRcg_bdMA","style-normal":"enRcg_ijuF","style-italic":"enRcg_fetN","x-small":"enRcg_dfBC",small:"enRcg_doqw",medium:"enRcg_ycrn",large:"enRcg_cMDj","x-large":"enRcg_eoMd","xx-large":"enRcg_fdca","lineHeight-default":"enRcg_fEWX","lineHeight-fit":"enRcg_fNIu","lineHeight-condensed":"enRcg_dfDs","lineHeight-double":"enRcg_bDjL","letterSpacing-normal":"enRcg_eQnG","letterSpacing-condensed":"enRcg_bbUA","letterSpacing-expanded":"enRcg_bRWU","transform-none":"enRcg_wZsr","transform-capitalize":"enRcg_fCZK","transform-uppercase":"enRcg_dsRi","transform-lowercase":"enRcg_bLtD"}
var U=(k=Object(b["themeable"])(v,R),k(w=(x=j=function(e){Object(l["a"])(t,e)
function t(){Object(o["a"])(this,t)
return Object(r["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(a["a"])(t,[{key:"render",value:function(){var e
var n=this.props,o=n.wrap,a=n.weight,r=n.fontStyle,s=n.size,l=n.lineHeight,c=n.letterSpacing,d=n.transform,m=n.color,_=n.children
var b=Object(p["a"])(t,this.props)
return u.a.createElement(b,Object.assign({},Object(f["b"])(this.props),{className:h()((e={},Object(i["a"])(e,R.root,true),Object(i["a"])(e,R[s],s),Object(i["a"])(e,R["wrap-".concat(o)],o),Object(i["a"])(e,R["weight-".concat(a)],a),Object(i["a"])(e,R["style-".concat(r)],r),Object(i["a"])(e,R["transform-".concat(d)],d),Object(i["a"])(e,R["lineHeight-".concat(l)],l),Object(i["a"])(e,R["letterSpacing-".concat(c)],c),Object(i["a"])(e,R["color-".concat(m)],m),e)),ref:this.props.elementRef}),_)}}])
t.displayName="Text"
return t}(c["Component"]),j.propTypes={as:m.a.elementType,children:m.a.node,color:g["a"].deprecatePropValues(m.a.oneOf(["primary","secondary","brand","success","warning","error","danger","alert","primary-inverse","secondary-inverse"]),["error"],"It will be removed in version 8.0.0. Use `danger` instead."),elementRef:m.a.func,fontStyle:m.a.oneOf(["italic","normal"]),letterSpacing:m.a.oneOf(["normal","condensed","expanded"]),lineHeight:m.a.oneOf(["default","fit","condensed","double"]),size:m.a.oneOf(["x-small","small","medium","large","x-large","xx-large"]),transform:m.a.oneOf(["none","capitalize","uppercase","lowercase"]),weight:m.a.oneOf(["normal","light","bold"]),wrap:m.a.oneOf(["normal","break-word"])},j.defaultProps={as:"span",wrap:"normal",size:"medium",letterSpacing:"normal",children:null,elementRef:void 0,color:void 0,transform:void 0,lineHeight:void 0,fontStyle:void 0,weight:void 0},x))||w)},cClk:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"onChange"
var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"defaultValue"
return function(i,o,a){var r=e.apply(null,arguments)
if(r)return r
if(i[o]&&"function"!==typeof i[t])return new Error(["You provided a '".concat(o,"' prop without an '").concat(t,"' handler on '").concat(a,"'. This will render a controlled component. If the component should be uncontrolled and manage its own state, use '").concat(n,"'. Otherwise, set '").concat(t,"'.")].join(""))}}},dqQ7:function(e,t,n){"use strict"
var i=n("An8g")
var o=n("q1tI")
var a=n.n(o)
n("17x9")
var r=n("i8i4")
var s=n.n(r)
var l=n("pQTu")
var c=n("m0r6")
Object(c["a"])(JSON.parse('{"de":{"an_error_occurred_making_a_network_request_d1bda348":"Fehler beim einer Netzwerkanforderung","close_d634289d":"Schließen","details_98a31b68":"Details"},"hu":{"close_d634289d":"Bezárás","details_98a31b68":"Részletek"}}'))
n("jQeR")
n("0sPK")
var u=l["default"].scoped("ajaxflashalert")
var d=n("L+/K")
var m=n("Xx/m")
var _=n("ZbPE")
var h=n("CO+y")
var b=n("6SzX")
var p=n("XQb/")
n.d(t,"a",(function(){return w}))
n.d(t,"b",(function(){return j}))
n.d(t,"c",(function(){return x}))
const f="flashalert_message_holder"
const g="flash_screenreader_holder"
const y=1e4
var v=Object(i["a"])("br",{})
class k extends a.a.Component{constructor(e){super(e)
this.showDetails=()=>{this.setState({showDetails:true})
clearTimeout(this.timerId)
this.timerId=setTimeout(()=>this.closeAlert(),this.props.timeout)}
this.closeAlert=()=>{this.setState({isOpen:false},()=>{setTimeout(()=>{clearTimeout(this.timerId)
this.props.onClose()},500)})}
this.state={showDetails:false,isOpen:true}
this.timerId=0}getLiveRegion(){let e=document.getElementById(g)
if(!e){e=document.createElement("div")
e.id=g
e.setAttribute("role","alert")
document.body.appendChild(e)}return e}findDetailMessage(){const e=this.props.error
let t=e.message
let n
if(e.response&&e.response.data)try{if(Array.isArray(e.response.data.errors)){t=e.response.data.errors[0].message
n=e.message}else if(e.response.data.message){t=e.response.data.message
n=e.message}}catch(n){t=e.message}return{a:t,b:n}}renderDetailMessage(){const e=this.findDetailMessage(),t=e.a,n=e.b
return Object(i["a"])(_["a"],{as:"p",fontStyle:"italic"},void 0,Object(i["a"])(_["a"],{},void 0,t),n?v:null,n?Object(i["a"])(_["a"],{},void 0,n):null)}render(){let e=null
this.props.error&&(e=this.state.showDetails?this.renderDetailMessage():Object(i["a"])("span",{},void 0,Object(i["a"])(h["a"],{},void 0,Object(i["a"])(m["a"],{variant:"link",onClick:this.showDetails},void 0,u.t("Details"))),Object(i["a"])(b["a"],{},void 0,this.renderDetailMessage())))
return Object(i["a"])(p["a"],{transitionOnMount:true,in:this.state.isOpen,type:"fade"},void 0,Object(i["a"])(d["a"],{variant:this.props.variant,renderCloseButtonLabel:u.t("Close"),onDismiss:this.closeAlert,margin:"small auto",timeout:this.props.timeout,liveRegion:this.getLiveRegion,transition:"fade",screenReaderOnly:this.props.screenReaderOnly},void 0,Object(i["a"])("div",{},void 0,Object(i["a"])("p",{style:{margin:"0 -5px"}},void 0,this.props.message),e)))}}k.defaultProps={error:null,variant:"info",timeout:y,screenReaderOnly:false}
function w(e){let t=e.message,n=e.err,o=e.type,a=void 0===o?n?"error":"info":o,r=e.srOnly,l=void 0!==r&&r
function c(e){s.a.unmountComponentAtNode(e)
e.remove()}function u(){let e=document.getElementById(f)
if(!e){e=document.createElement("div")
e.classList.add("clickthrough-container")
e.id=f
e.setAttribute("style","position: fixed; top: 0; left: 0; width: 100%; z-index: 100000;")
document.body.appendChild(e)}return e}function d(e){s.a.render(Object(i["a"])(k,{message:t,timeout:isNaN(ENV.flashAlertTimeout)?y:ENV.flashAlertTimeout,error:n,variant:a,onClose:c.bind(null,e),screenReaderOnly:l}),e)}const m=document.createElement("div")
m.setAttribute("style","max-width:50em;margin:1rem auto;")
m.setAttribute("class","flashalert-message")
u().appendChild(m)
d(m)}function j(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.t("An error occurred making a network request")
return t=>w({message:e,err:t,type:"error"})}function x(e){return()=>w({message:e,type:"success"})}},eAd9:function(e,t,n){(function(t){var n=false
var i
var o
function a(){if("undefined"!==typeof i)return i
var e=document.documentElement
var t=document.createElement("div")
t.setAttribute("style","width:99px;height:99px;position:absolute;top:-9999px;overflow:scroll;")
e.appendChild(t)
i=t.offsetWidth-t.clientWidth
e.removeChild(t)
return i}function r(){return document.documentElement.scrollHeight>window.innerHeight}function s(e){if("undefined"===typeof document||n)return
var t=document.documentElement
o=window.pageYOffset
r()?t.style.width="calc(100% - "+a()+"px)":t.style.width="100%"
t.style.position="fixed"
t.style.top=-o+"px"
t.style.overflow="hidden"
n=true}function l(){if("undefined"===typeof document||!n)return
var e=document.documentElement
e.style.width=""
e.style.position=""
e.style.top=""
e.style.overflow=""
window.scroll(0,o)
n=false}function c(){if(n){l()
return}s()}var u={on:s,off:l,toggle:c}
"undefined"!==typeof e.exports?e.exports=u:t.noScroll=u})(this)},iLq2:function(e,t,n){"use strict"
var i=n("ouhR")
var o=n.n(i)
var a=n("FIFq")
var r=n.n(a)
var s=n("3O+N")
var l=n.n(s)
var c=n("pQTu")
var u=n("m0r6")
Object(u["a"])(JSON.parse('{"de":{"the_following_content_is_partner_provided_ed1da756":"Der folgende Content stammt von einem Partner.","the_preceding_content_is_partner_provided_d753928c":"Der vorhergehende Content stammt von einem Partner.","tool_content_2924d18f":"Tool-Inhalt"},"hu":{"tool_content_2924d18f":"Eszköztartalom"}}'))
n("jQeR")
n("0sPK")
c["default"].scoped("external_tools.external_content_return_view")
n("DfGn")
var d=l.a.default
var m=d.template,_=d.templates=d.templates||{}
var h="ExternalTools/ExternalContentReturnView"
_[h]=m((function(e,t,n,i,o){this.compilerInfo=[4,">= 1.0.0"]
n=this.merge(n,e.helpers)
o=o||{}
var a,r,s,l="",c=n.helperMissing,u=this.escapeExpression,d="function"
l+='<div class="before_external_content_info_alert screenreader-only" tabindex="0">\n  <div class="ic-flash-info">\n    <div class="ic-flash__icon" aria-hidden="true">\n      <i class="icon-info"></i>\n    </div>\n    '+u((r=n.t||t&&t.t,s={hash:{scope:"external_tools.external_content_return_view"},data:o},r?r.call(t,"The following content is partner provided",s):c.call(t,"t","The following content is partner provided",s)))+'\n  </div>\n</div>\n<iframe\n  tabindex="0"\n  class="tool_launch"\n  src="'
if(r=n.launch_url)a=r.call(t,{hash:{},data:o})
else{r=t&&t.launch_url
a=typeof r===d?r.call(t,{hash:{},data:o}):r}l+=u(a)+'"\n  title="'+u((r=n.t||t&&t.t,s={hash:{i18n_inferred_key:true},data:o},r?r.call(t,"tool_content_2924d18f","Tool content",s):c.call(t,"t","tool_content_2924d18f","Tool content",s)))+'"\n  allow="'
if(r=n.allowances)a=r.call(t,{hash:{},data:o})
else{r=t&&t.allowances
a=typeof r===d?r.call(t,{hash:{},data:o}):r}l+=u(a)+'"\n  data-lti-launch="true"\n>\n</iframe>\n<div class="after_external_content_info_alert screenreader-only" tabindex="0">\n  <div class="ic-flash-info">\n    <div class="ic-flash__icon" aria-hidden="true">\n      <i class="icon-info"></i>\n    </div>\n    '+u((r=n.t||t&&t.t,s={hash:{scope:"external_tools.external_content_return_view"},data:o},r?r.call(t,"The preceding content is partner provided",s):c.call(t,"t","The preceding content is partner provided",s)))+"\n  </div>\n</div>\n"
return l}))
var b=_[h]
var p=n("mykf")
var f=function(e,t){return function(){return e.apply(t,arguments)}},g=function(e,t){for(var n in t)y.call(t,n)&&(e[n]=t[n])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},y={}.hasOwnProperty
t["a"]=function(e){g(t,e)
function t(){this._contentCancel=f(this._contentCancel,this)
this._contentReady=f(this._contentReady,this)
this.removeDialog=f(this.removeDialog,this)
this.handleAlertBlur=f(this.handleAlertBlur,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.template=b
t.optionProperty("launchType")
t.optionProperty("launchParams")
t.optionProperty("displayAsModal")
t.prototype.defaults={displayAsModal:true}
t.prototype.els={"iframe.tool_launch":"$iframe"}
t.prototype.events={"focus .before_external_content_info_alert":"handleAlertFocus","focus .after_external_content_info_alert":"handleAlertFocus","blur .before_external_content_info_alert":"handleAlertBlur","blur .after_external_content_info_alert":"handleAlertBlur"}
t.prototype.handleAlertFocus=function(e){o()(e.target).removeClass("screenreader-only")
return this.$el.find("iframe").addClass("info_alert_outline")}
t.prototype.handleAlertBlur=function(e){o()(e.target).addClass("screenreader-only")
return this.$el.find("iframe").removeClass("info_alert_outline")}
t.prototype.attach=function(){return this.model.on("change",(e=this,function(){return e.render()}))
var e}
t.prototype.toJSON=function(){var e
e=t.__super__.toJSON.apply(this,arguments)
e.allowances=Object(p["a"])()
e.launch_url=this.model.launchUrl(this.launchType,this.launchParams)
return e}
t.prototype.afterRender=function(){var e,t
this.attachLtiEvents()
t=this.model.get(this.launchType)||{}
this.$iframe.width("100%")
this.$iframe.height(t.selection_height)
if(this.displayAsModal)return this.$el.dialog({title:(null!=(e=this.model.get(this.launchType))?e.label:void 0)||"",width:t.selection_width,height:t.selection_height,resizable:true,close:this.removeDialog})}
t.prototype.attachLtiEvents=function(){o()(window).on("externalContentReady",this._contentReady)
return o()(window).on("externalContentCancel",this._contentCancel)}
t.prototype.detachLtiEvents=function(){o()(window).off("externalContentReady",this._contentReady)
return o()(window).off("externalContentCancel",this._contentCancel)}
t.prototype.removeDialog=function(){this.detachLtiEvents()
return this.remove()}
t.prototype._contentReady=function(e,t){this.trigger("ready",t)
return this.removeDialog()}
t.prototype._contentCancel=function(e,t){this.trigger("cancel",t)
return this.removeDialog()}
return t}(r.a.View)},ppAs:function(e,t,n){"use strict"
var i=n("ouhR")
var o=n.n(i)
var a=n("GLiE")
var r=n.n(a)
var s=n("5Ky4")
var l=n("pQTu")
var c=n("m0r6")
Object(c["a"])(JSON.parse('{"de":{"user_content_aaf0fb5a":"Benutzer-Content"},"hu":{"user_content_aaf0fb5a":"Felhasználói tartalom"}}'))
n("jQeR")
n("0sPK")
var u=l["default"].scoped("user_content")
const d={translateMathmlForScreenreaders(e){const t=o()("<div/>").html(e.attr("x-canvaslms-safe-mathml")).html()
const n=o()('<span class="hidden-readable"></span>')
n.html(t)
return n},toMediaCommentLink(e){const t=o()("<a\n        id='media_comment_".concat(Object(s["a"])(o()(e).data("media_comment_id")),"'\n        data-media_comment_type='").concat(Object(s["a"])(o()(e).data("media_comment_type")),"'\n        class='instructure_inline_media_comment ").concat(Object(s["a"])(e.nodeName.toLowerCase()),"_comment'\n        data-alt='").concat(Object(s["a"])(o()(e).attr("data-alt")),"'\n      />"))
t.html(o()(e).html())
return t},convert(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=o()("<div />").html(e)
n.find("video.instructure_inline_media_comment,audio.instructure_inline_media_comment").replaceWith((function(){return d.toMediaCommentLink(this)}))
n.find("object.instructure_user_content:not(#kaltura_player) embed").remove()
if(!t.forEditing){n.find("object.instructure_user_content,embed.instructure_user_content").replaceWith((function(){const e=o()(this)
if(!e.data("uc_snippet")||!e.data("uc_sig"))return this
const t=r.a.uniqueId("uc_")
let n="/object_snippet"
ENV.files_domain&&(n="//".concat(ENV.files_domain).concat(n))
const i=o()("<form\n            action='".concat(Object(s["a"])(n),"'\n            method='post'\n            class='user_content_post_form'\n            target='").concat(Object(s["a"])(t),"'\n            id='form-").concat(Object(s["a"])(t),"'\n          />"))
i.append(o()("<input type='hidden'/>").attr({name:"object_data",value:e.data("uc_snippet")}))
i.append(o()("<input type='hidden'/>").attr({name:"s",value:e.data("uc_sig")}))
o()("body").append(i)
setTimeout(()=>i.submit(),0)
return o()("<iframe\n            class='user_content_iframe'\n            name='".concat(Object(s["a"])(t),"'\n            style='width: ").concat(Object(s["a"])(e.data("uc_width")),"; height: ").concat(Object(s["a"])(e.data("uc_height")),";'\n            frameborder='0'\n            title='").concat(Object(s["a"])(u.t("User Content")),"'\n          />"))}))
n.find("img.equation_image").each((e,t)=>{const n=o()(t)
const i=d.translateMathmlForScreenreaders(n)
n.removeAttr("x-canvaslms-safe-mathml")
n.after(i)})}return n.html()}}
t["a"]=d},vknZ:function(e,t,n){"use strict"
var i=n("ouhR")
var o=n.n(i)
var a=n("mykf")
class r{constructor(e){this.assignProperties(e)}toHtmlString(){}assignProperties(e){this.properties.forEach(t=>{this[t]=e[t]})}linkThumbnail(){return this.imageTag(this.thumbnail)}iframeTag(){const e=this.iframe
if(e){const t=document.createElement("iframe")
t.setAttribute("src",e.src)
t.setAttribute("title",this.title||"")
t.setAttribute("allowfullscreen","true")
t.setAttribute("allow",Object(a["a"])())
e.width&&(t.style.width="".concat(e.width,"px"))
e.height&&(t.style.height="".concat(e.height,"px"))
return t.outerHTML}}imageTag(e,t,n){const i=document.createElement("img")
i.setAttribute("src",e)
this.text&&i.setAttribute("alt",this.text)
t&&i.setAttribute("width",t)
n&&i.setAttribute("height",n)
return i.outerHTML}anchorTag(e){const t=document.createElement("a")
t.setAttribute("href",this.safeUrl())
t.setAttribute("title",this.title)
t.setAttribute("target","_blank")
t.innerHTML=e
return t.outerHTML}safeUrl(){return this.url.replace(/^(data:text\/html|javascript:)/,"#$1")}}class s extends r{constructor(e,t,n){super(e)
this.type=s.type
n&&""!==n&&(this.text=n)}get properties(){return Object.freeze(["url","title","text","icon","thumbnail","iframe"])}toHtmlString(){if(this.iframe&&this.iframe.src)return this.iframeTag()
return this.anchorTag(this.linkBody())}linkText(){return this.text&&this.text.trim()||this.title&&this.title.trim()}linkBody(){if(this.thumbnail)return this.linkThumbnail()
return this.linkText()}}s.type="link"
class l extends s{constructor(e,t,n){super(e,t,n)
this.url="".concat(t,"?").concat(this.ltiEndpointParams(e.url))}ltiEndpointParams(e){return"display=borderless&url=".concat(encodeURIComponent(e))}toHtmlString(){if(this.iframe){this.iframe.src=this.safeUrl()
return this.iframeTag()}return this.anchorTag(this.linkBody())}}class c extends r{constructor(e){super(e)
this.type=c.type}get properties(){return Object.freeze(["url","title","thumbnail","text","width","height"])}toHtmlString(){if(this.thumbnail)return this.anchorTag(this.linkThumbnail())
return this.imageTag(this.safeUrl(),this.width,this.height)}}c.type="image"
class u extends r{constructor(e){super(e)
this.type=u.type}get properties(){return Object.freeze(["html","title","text"])}toHtmlString(){return this.html}}u.type="html"
n.d(t,"a",(function(){return d}))
class d{constructor(e,t,n,i,o){this.contentItems=e
this.messages=t
this.logs=n
this.ltiEndpoint=i
this.processHandler=o
this.showMessages()
this.showLogs()}get loggingEnabled(){return ENV&&ENV.DEEP_LINKING_LOGGING}get typeMap(){return{link:s,ltiResourceLink:l,image:c,html:u}}static fromEvent(e,t){const n=e.data,i=n.content_items,o=n.msg,a=n.log,r=n.errormsg,s=n.errorlog,l=n.ltiEndpoint,c=n.messageType
if("LtiDeepLinkingResponse"!==c)return
return new this(i,{msg:o,errormsg:r},{log:a,errorlog:s},l,t)}process(){return this.processHandler(...arguments)}showMessages(){this.messages.errormsg&&o.a.flashError(this.messages.errormsg)
this.messages.msg&&o.a.flashMessage(this.messages.msg)}showLogs(){if(this.loggingEnabled){this.logs.errorlog&&console.error(this.logs.errorlog)
this.logs.log&&console.log(this.logs.log)}}}},ysUD:function(e,t,n){"use strict"
var i=n("VTBJ")
var o=n("rePB")
var a=n("1OyB")
var r=n("vuIU")
var s=n("md7G")
var l=n("foSv")
var c=n("Ji7U")
var u=n("q1tI")
var d=n.n(u)
var m=n("17x9")
var _=n.n(m)
var h=n("TSYQ")
var b=n.n(h)
var p=n("eAd9")
var f=n.n(p)
var g=n("J2CL")
var y=n("sQ3t")
var v=n("jtGx")
function k(e){var t=e.colors,n=e.borders,i=e.stacking
return{zIndex:i.topmost,background:"rgba(255, 255, 255, 0.75)",borderColor:"transparent",focusBorderColor:t.borderBrand,borderRadius:n.radiusMedium,borderWidth:n.widthSmall}}k.canvas=function(e){return{focusBorderColor:e["ic-brand-primary"]}}
n.d(t,"a",(function(){return S}))
var w,j,x,R
var U={componentId:"fvvQs",template:function(e){return"\n\n.fvvQs_bGBk{background:".concat(e.background||"inherit",";border:").concat(e.borderWidth||"inherit"," solid ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";bottom:0;box-sizing:border-box;display:flex;justify-content:center;left:0;outline:none;overflow:auto;position:absolute;right:0;top:0;z-index:").concat(e.zIndex||"inherit","}\n\n.fvvQs_bGBk:focus{border-color:").concat(e.focusBorderColor||"inherit","}\n\n.fvvQs_cMOR{position:fixed}\n\n.fvvQs_dacV{align-items:flex-start}\n\n.fvvQs_cwzs{align-items:center}\n\n.fvvQs_cGWj{align-items:flex-end}\n\n.fvvQs_eFiI{align-items:stretch}")},root:"fvvQs_bGBk",fullscreen:"fvvQs_cMOR",top:"fvvQs_dacV",center:"fvvQs_cwzs",bottom:"fvvQs_cGWj",stretch:"fvvQs_eFiI"}
var S=(w=Object(g["themeable"])(k,U),w(j=(R=x=function(e){Object(c["a"])(t,e)
function t(){var e
var n
Object(a["a"])(this,t)
for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r]
n=Object(s["a"])(this,(e=Object(l["a"])(t)).call.apply(e,[this].concat(o)))
n.handleElementRef=function(e){n.props.elementRef(e)}
n.contentRef=function(e){n._content=e}
return n}Object(r["a"])(t,[{key:"componentDidMount",value:function(){this.props.fullscreen&&f.a.on()}},{key:"componentWillUnmount",value:function(){this.props.fullscreen&&f.a.off()}},{key:"render",value:function(){var e
var n=Object(y["a"])(this.props.children,{ref:this.contentRef})
var a=b()((e={},Object(o["a"])(e,U.root,true),Object(o["a"])(e,U[this.props.placement],true),Object(o["a"])(e,U.fullscreen,this.props.fullscreen),e))
var r=Object(i["a"])({},Object(v["a"])(this.props,t.propTypes),{className:a,ref:this.handleElementRef})
if("function"===typeof this.props.onClick){r.onClick=this.props.onClick
r.tabIndex=-1}return d.a.createElement("span",r,n)}}])
t.displayName="Mask"
return t}(u["Component"]),x.propTypes={onDismiss:_.a.func,placement:_.a.oneOf(["top","center","bottom","stretch"]),fullscreen:_.a.bool,children:_.a.node,onClick:_.a.func,elementRef:_.a.func},x.defaultProps={placement:"center",fullscreen:false,onDismiss:void 0,children:null,onClick:void 0,elementRef:function(e){}},R))||j)}}])

//# sourceMappingURL=submit_assignment-c-559f9a85f2.js.map