(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[14],{"/1jZ":function(e,t,n){"use strict"
var i=n("pQTu")
var a=n("m0r6")
Object(a["a"])(JSON.parse('{"de":{"afrikaans_da0fe6ee":"Afrikaans","albanian_21ed929e":"Albanisch","arabic_c5c87acd":"Arabisch","belarusian_b2f19c76":"Weißrussisch","bulgarian_feccab7e":"Bulgarisch","catalan_16f6b78f":"Katalanisch","chinese_111d37f6":"Chinesisch","chinese_simplified_7f0bd370":"Vereinfachtes Chinesisch","chinese_traditional_8a7f759d":"Traditionelles Chinesisch","croatian_d713d655":"Kroatisch","czech_9aa2cbe4":"Tschechisch","danish_c18cdac8":"Dänisch","dutch_6d05cee5":"Holländisch","english_c60612e2":"Englisch","estonian_5e8e2fa4":"Estnisch","filipino_33339264":"Filipino","finnish_4df2923d":"Finnisch","french_33881544":"Französisch","galician_7e4508b5":"Galizisch","german_3ec99bbb":"Deutsch","greek_65c5b3f7":"Griechisch","haitian_creole_7eb4195b":"Haitianisches Creole","hebrew_88fbf778":"Hebräisch","hindi_9bcd4b34":"Hindi","hungarian_fc7d30c9":"Ungarisch","icelandic_9d6d35de":"Isländisch","indonesian_5f6accd6":"Indonesisch","irish_567e109f":"Irisch","italian_bd3c792d":"Italienisch","japanese_b5721ca7":"Japanisch","korean_da812d9":"Koreanisch","latvian_2bbb6aab":"Lettisch","lithuanian_5adcbe24":"Litauisch","macedonian_6ed541af":"Mazedonisch","malay_f5dddce4":"Malaiisch","maltese_916925e8":"Maltesisch","norwegian_53f391ec":"Norwegisch","persian_a8cadb95":"Persische","polish_4cf2ecaf":"Polnisch","portuguese_9c212cf4":"Portugiesisch","romanian_13670c1e":"Rumänisch","russian_1e3e197":"Russisch","serbian_7187f1f2":"Serbisch","slovak_69f48e1b":"Slowakisch","slovenian_30ae5208":"Slowenisch","spanish_de9de5d6":"Spanisch","swahili_5caeb4ba":"Swahili","swedish_59a593ca":"Schwedisch","tagalog_74906db7":"Tagalog","thai_8f9bc548":"Thai","turkish_5b69578b":"Türkisch","ukrainian_945b00b7":"Ukrainisch","vietnamese_e7a76583":"Vietnamesisch","welsh_42ab94b1":"Walisisch","yiddish_f96986df":"Jiddisch"},"hu":{"greek_65c5b3f7":"Görög"}}'))
n("jQeR")
n("0sPK")
var r=i["default"].scoped("closedCaptionLanguages")
const s={get af(){return r.t("Afrikaans")},get sq(){return r.t("Albanian")},get ar(){return r.t("Arabic")},get be(){return r.t("Belarusian")},get bg(){return r.t("Bulgarian")},get ca(){return r.t("Catalan")},get zh(){return r.t("Chinese")},get"zh-cn"(){return r.t("Chinese Simplified")},get"zh-tw"(){return r.t("Chinese Traditional")},get hr(){return r.t("Croatian")},get cs(){return r.t("Czech")},get da(){return r.t("Danish")},get nl(){return r.t("Dutch")},get en(){return r.t("English")},get et(){return r.t("Estonian")},get fl(){return r.t("Filipino")},get fi(){return r.t("Finnish")},get fr(){return r.t("French")},get gl(){return r.t("Galician")},get de(){return r.t("German")},get el(){return r.t("Greek")},get ht(){return r.t("Haitian Creole")},get iw(){return r.t("Hebrew")},get hi(){return r.t("Hindi")},get hu(){return r.t("Hungarian")},get is(){return r.t("Icelandic")},get id(){return r.t("Indonesian")},get ga(){return r.t("Irish")},get it(){return r.t("Italian")},get ja(){return r.t("Japanese")},get ko(){return r.t("Korean")},get lv(){return r.t("Latvian")},get lt(){return r.t("Lithuanian")},get mk(){return r.t("Macedonian")},get ms(){return r.t("Malay")},get mt(){return r.t("Maltese")},get no(){return r.t("Norwegian")},get fa(){return r.t("Persian")},get pl(){return r.t("Polish")},get pt(){return r.t("Portuguese")},get ro(){return r.t("Romanian")},get ru(){return r.t("Russian")},get sr(){return r.t("Serbian")},get sk(){return r.t("Slovak")},get sl(){return r.t("Slovenian")},get es(){return r.t("Spanish")},get sw(){return r.t("Swahili")},get sv(){return r.t("Swedish")},get tl(){return r.t("Tagalog")},get th(){return r.t("Thai")},get tr(){return r.t("Turkish")},get uk(){return r.t("Ukrainian")},get vi(){return r.t("Vietnamese")},get cy(){return r.t("Welsh")},get yi(){return r.t("Yiddish")}}
t["a"]=s},"0crz":function(e,t,n){"use strict"
var i=n("ouhR")
var a=n.n(i)
var r=n("pQTu")
var s=n("m0r6")
Object(s["a"])(JSON.parse('{"de":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"zitierten Text zeigen","word_separator":" "}}},"hu":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"idézett szöveg megjelenítése","word_separator":" "}}}}'))
n("jQeR")
n("0sPK")
var o=r["default"].scoped("lib.text_helper")
var c=n("5Ky4")
var l,d,u
l="LINK-PLACEHOLDER"
d=/\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))|(LINK-PLACEHOLDER)/gi
t["a"]=u={quoteClump:function(e){return"<div class='quoted_text_holder'> <a href='#' class='show_quoted_text_link'>"+Object(c["a"])(o.t("quoted_text_toggle","show quoted text"))+"</a> <div class='quoted_text' style='display: none;'> "+a.a.raw(e.join("\n"))+" </div> </div>"},formatMessage:function(e){var t,n,i,a,r,s,o,h
a=[]
r=[]
e=e.replace(d,(function(e,t){var n
r.push(e===l?l:(n=e,"http://"===n.slice(0,7)||"https://"===n.slice(0,8)||(n="http://"+n),a.push(n),"<a href='"+Object(c["a"])(n)+"'>"+Object(c["a"])(e)+"</a>"))
return l}))
e=Object(c["a"])(e)
e=e.replace(new RegExp(l,"g"),(function(e,t){return r.shift()}))
e=e.replace(/\n/g,"<br />\n")
s=[]
o=[]
h=e.split("\n")
for(t=0,n=h.length;t<n;t++){i=h[t]
if(i.match(/^(&gt;|>)/))o.push(i)
else{o.length&&s.push(u.quoteClump(o))
o=[]
s.push(i)}}o.length&&s.push(u.quoteClump(o))
return s.join("\n")},delimit:function(e){var t,n,i,a,r
if(isNaN(e))return String(e)
r=e<0?"-":""
t=Math.abs(e)
if(Infinity===t)return String(e)
n=Math.floor(t)
a=t===n?"":String(t).replace(/^\d+\./,".")
while(n>=1e3){i=String(n).replace(/\d+(\d\d\d)$/,",$1")
n=Math.floor(n/1e3)
a=i+a}return r+String(n)+a},truncateText:function(e,t){var n,i,a,r,s,c
null==t&&(t={})
i=null!=(r=t.max)?r:30
n=o.t("ellipsis","...")
c=o.t("word_separator"," ")
e=(null!=e?e:"").replace(/\s+/g,c).trim()
if(!e||e.length<=i)return e
s=0
while(true){a=e.indexOf(c,s+1)
if(a<0||a>i-n.length)break
s=a}s||(s=i-n.length)
return e.substring(0,s)+n},plainText:function(e){return e.replace(/(<([^>]+)>)/gi,"")}}},"21i1":function(e,t,n){"use strict"
var i=n("yiTI")
var a=n("xe+K")
function r(e,t,n,i){const a=!n
const r=a?t:"function"===typeof i?i:t[n]
false
return r}var s=n("ouhR")
var o=n.n(s)
const c=!ENV.use_rce_enhancements&&n("rkWX").default
function l(e,t,n){e.css("display","none")
const r=t.onFocus
t.onFocus=function(){ENV.use_rce_enhancements||_.showSidebar()
r instanceof Function&&r(...arguments)}
i["a"].loadOnTarget(e,t,(t,i)=>{const r=b(e)
const s=m(o()(t))
s.data("remoteEditor",i)
r.trigger(a["a"],i)
n&&n(i)})}function d(e){const t=b(e)
const n=t.attr("id")
const i="tinymce-parent-of-".concat(n)
if(t.parent().attr("id")!==i)return t.wrap("<div id='".concat(i,"' style='visibility: hidden'></div>"))}function u(){o()(".mce-resizehandle").attr("aria-hidden",true)}let h=0
function f(){return"random_editor_id_".concat(h++)}function g(e){const t=o()(e)
const n="attr"in t?t.attr("id"):t.id
n&&""!=n||t.attr("id",f())}function m(e){const t=b(e)
const n=t.attr("id")
if(!n||""==n)return t
const i=o()("#".concat(n))
if(i.length<=0)return t
return i}const p="with the new RCE you don't need to call this method, it is a no op since there is no sidebar"
const _={preloadRemoteModule(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{}
return i["a"].preload(e)},initSidebar:r(p,(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
ENV.use_rce_enhancements||c.init(e)})),showSidebar:r(p,()=>{ENV.use_rce_enhancements||c.show()}),hideSidebar:r(p,()=>{ENV.use_rce_enhancements||c.hide()}),loadNewEditor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
let n=arguments.length>2?arguments[2]:void 0
let i=b(e)
if(i.length<=0)return
g(i)
t=o.a.extend({},t)
const a=e=>{t.focus&&this.activateRCE(i)
n&&n(e)}
i=this.freshNode(i)
if(t.manageParent){delete t.manageParent
d(i)}l(i,t,a)
u()},callOnRCE(e,t){let n=b(e)
n=this.freshNode(n)
for(var i=arguments.length,r=new Array(i>2?i-2:0),s=2;s<i;s++)r[s-2]=arguments[s]
return Object(a["d"])(n,t,...r)},destroyRCE(e){let t=b(e)
t=this.freshNode(t)
Object(a["b"])(t)
ENV.use_rce_enhancements||c.hide()},activateRCE(e){let t=b(e)
t=this.freshNode(t)
Object(a["c"])(t)
ENV.use_rce_enhancements||c.show()},freshNode:m,ensureID:g}
function b(e){return e.length?e:o()(e)}t["a"]=_},B1vq:function(e,t,n){"use strict"
var i=n("ouhR")
var a=n.n(i)
n("s/PJ")
a.a.fn.scrollToVisible=function(e){const t={}
const n=a()(e)
if(0===n.length)return
let i=n.offset(),r=n.outerWidth(),s=n.outerHeight(),o=i.top,c=o+s,l=i.left,d=l+r,u="html,body"==this.selector?a.a.windowScrollTop():this.scrollTop(),h=this.scrollLeft(),f=this.outerHeight(),g=this.outerWidth()
if("html,body"!=this.selector){let e=a()("body").offset()
this.each((function(){try{e=a()(this).offset()
return false}catch(e){}}))
o-=e.top
c-=e.top
l-=e.left
d-=e.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){f=a()(window).height()
a()("#wizard_box:visible").length>0&&(f-=a()("#wizard_box:visible").height())
g=a()(window).width()
o-=u
l-=h
c-=u
d-=h}o<0||f<s&&c>f?t.scrollTop=o+u:c>f&&(t.scrollTop=c+u-f+20)
l<0?t.scrollLeft=l+h:d>g&&(t.scrollLeft=d+h-g+20)
1==t.scrollTop&&(t.scrollTop=0)
1==t.scrollLeft&&(t.scrollLeft=0)
this.scrollTop(t.scrollTop)
this.scrollLeft(t.scrollLeft)
return this}},Cvk5:function(e,t,n){"use strict"
n.r(t)
var i=n("pQTu")
var a=n("m0r6")
Object(a["a"])(JSON.parse('{"de":{"editor_accessibility":{"accessibles":{"background_color":"Hintergrundfarbe, zum Auswählen Pfeil-nach-unten drücken","forecolor":"Textfarbe, zum Auswahlen Pfeil-nach-unten drücken"},"titles":{"font_size":"Schriftgröße, zum Auswählen Pfeil-nach-unten drücken","formatting":"Formatierung, zum Auswählen Pfeil-nach-unten drücken","rte_help":"Rich Text-Bereich. Für Hilfe \\u003cAlt\\u003e+F8 drücken"}},"rich_content_editor_2708ef21":"Rich-Content-Editor"},"hu":{"editor_accessibility":{"accessibles":{"background_color":"Háttérszín, nyomja le a kiválasztáshoz","forecolor":"Szövegszín, nyomja le a kiválasztáshoz"},"titles":{"font_size":"Betűméret, nyomja le a kiválasztáshoz","formatting":"Formázás, nyomja le a kiválasztáshoz","rte_help":"Vizuális szövegterület, nyomja le az ALT+F8-at a segítséghez"}},"rich_content_editor_2708ef21":"Vizuális szövegszerkesztő"}}'))
n("jQeR")
n("0sPK")
var r=i["default"].scoped("editor_accessibility")
var s=n("ouhR")
var o=n.n(s)
n.d(t,"default",(function(){return c}))
class c{constructor(e){this.editor=e
this.id_prepend=e.id
this.$el=o()("#".concat(e.editorContainer.id))}accessiblize(){this._cacheElements()
this._addTitles()
this._addLabels()
this._accessiblizeMenubar()
this._removeStatusbarFromTabindex()}_cacheElements(){this.$iframe=this.$el.find(".mce-edit-area iframe")}_addLabels(){this.$el.attr("aria-label",r.t("Rich Content Editor"))
o()(this.editor.getBody()).attr("aria-label",o()('label[for="'.concat(this.id_prepend,'"]')).text())
this.$el.find("div[aria-label='Font Sizes']").attr("aria-label",r.t("titles.font_size","Font Size, press down to select"))
this.$el.find("div.mce-listbox.mce-last:not([aria-label])").attr("aria-label",r.t("titles.formatting","Formatting, press down to select"))
this.$el.find("div[aria-label='Text color']").attr("aria-label",r.t("accessibles.forecolor","Text Color, press down to select"))
this.$el.find("div[aria-label='Background color'").attr("aria-label",r.t("accessibles.background_color","Background Color, press down to select"))}_addTitles(){this.$iframe.attr("title",r.t("titles.rte_help","Rich Text Area. Press ALT+F8 for help"))}_accessiblizeMenubar(){const e=this.$el.find(".mce-menubar")
const t=e.find(".mce-menubtn").first()
e.hide()
this.editor.addShortcut("Alt+F9","",()=>{e.show()
t.focus()
this.editor.addShortcut("Alt+F9","",()=>t.focus())})}_removeStatusbarFromTabindex(){const e=this.$el.find(".mce-statusbar > .mce-container-body")
e.attr("tabindex",-1)}}},iklP:function(e,t,n){"use strict"
var i=n("pQTu")
var a=n("m0r6")
Object(a["a"])(JSON.parse('{"de":{"findLinkForService":{"buttons":{"search":"Suchen","search_by_tag":"Suche nach Tag"},"errors":{"search_failed":"Suche fehlgeschlagen. Bitte erneut versuchen"},"no_description":"Keine Beschreibung","no_results_found":"Keine Ergebnisse gefunden","status":{"diigo_search_throttling":"Diigo beschränkt den Benutzer auf eine Suche alle zehn Sekunden.  Bitte warten Sie ...","searching":"Suche läuft ..."},"titles":{"bookmark_search":"Lesezeichensuche: %{service_name}"}}},"hu":{"findLinkForService":{"buttons":{"search":"Keresés","search_by_tag":"Keresés címke alapján"},"errors":{"search_failed":"A keresés sikertelen, kérjük, próbálja újra. "},"no_description":"Nincs leírás","no_results_found":"Nincs találat","status":{"diigo_search_throttling":"A Diigo korlátozása alapján tíz másodpercenként egy keresést lehet végrehajtani. Kérjük, várjon...","searching":"Keresés..."},"titles":{"bookmark_search":"Könyvjelző keresése: %{service_name}"}}}}'))
n("jQeR")
n("0sPK")
var r=i["default"].scoped("findLinkForService")
var s=n("ouhR")
var o=n.n(s)
var c=n("5Ky4")
var l=n("0crz")
n("jYyc")
n("Z+Ib")
n("YGE8")
n.d(t,"b",(function(){return d}))
n.d(t,"a",(function(){return h}))
function d(e,t,n){o.a.isArray(e)||(e=[e])
const i="/services?service_types=".concat(e.join(","))
o.a.ajaxJSON(i,"GET",{},e=>{t&&t(e)},e=>{n&&n(e)})}let u
function h(e,t){let n=o()("#instructure_bookmark_search")
if(!n.length){n=o()("<div id='instructure_bookmark_search'/>")
n.append("".concat("<form id='bookmark_search_form' style='margin-bottom: 5px;'><img src='/images/blank.png'/>&nbsp;&nbsp;<input type='text' class='query' style='width: 230px;'/><button class='btn search_button' type='submit'>").concat(Object(c["a"])(r.t("buttons.search","Search")),"</button></form>"))
n.append("<div class='results' style='max-height: 200px; overflow: auto;'/>")
n.find("form").submit(t=>{t.preventDefault()
t.stopPropagation()
const i=new Date
if("diigo"==e&&u&&i-u<15e3){setTimeout(()=>{n.find("form").submit()},15e3-(i-u))
n.find(".results").empty().append(Object(c["a"])(r.t("status.diigo_search_throttling","Diigo limits users to one search every ten seconds.  Please wait...")))
return}n.find(".results").empty().append(Object(c["a"])(r.t("status.searching","Searching...")))
u=new Date
const a=n.find(".query").val()
const s=o.a.replaceTags(n.data("reference_url"),"query",a)
o.a.ajaxJSON(s,"GET",{},e=>{n.find(".results").empty()
e.length||n.find(".results").append(Object(c["a"])(r.t("no_results_found","No Results Found")))
for(const t in e){e[t].short_title=e[t].title
e[t].title==e[t].description&&(e[t].short_title=l["a"].truncateText(e[t].description,{max:30}))
o()("<div class='bookmark'/>").appendTo(n.find(".results")).append(o()('<a class="bookmark_link" style="font-weight: bold;"/>').attr({href:e[t].url,title:e[t].title}).text(e[t].short_title)).append(o()("<div style='margin: 5px 10px; font-size: 0.8em;'/>").text(e[t].description||r.t("no_description","No description")))}},()=>{n.find(".results").empty().append(Object(c["a"])(r.t("errors.search_failed","Search failed, please try again.")))})})
n.delegate(".bookmark_link","click",(function(e){e.preventDefault()
const i=o()(this).attr("href")
const a=o()(this).attr("title")||o()(this).text()
n.dialog("close")
t({url:i,title:a})}))}n.find(".search_button").text("delicious"==e?r.t("buttons.search_by_tag","Search by Tag"):r.t("buttons.search","Search"))
n.find("form img").attr("src","/images/".concat(e,"_small_icon.png"))
let i="/search/bookmarks?q=%7B%7B+query+%7D%7D&service_type=%7B%7B+service_type+%7D%7D"
i=o.a.replaceTags(i,"service_type",e)
n.data("reference_url",i)
n.find(".results").empty().end().find(".query").val("")
n.dialog({title:r.t("titles.bookmark_search","Bookmark Search: %{service_name}",{service_name:o.a.titleize(e)}),open(){n.find("input:visible:first").focus().select()},width:400})}},mykf:function(e,t,n){"use strict"
const i=()=>{const e=ENV.LTI_LAUNCH_FRAME_ALLOWANCES||[]
return e.join("; ")}
t["a"]=i},p6Wi:function(e,t,n){"use strict"
var i=n("pQTu")
var a=n("m0r6")
Object(a["a"])(JSON.parse('{"de":{"buttons":{"cancel":"Abbrechen","delete":"Löschen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Möchten Sie dies wirklich löschen?"}}},"hu":{"buttons":{"cancel":"Mégse","delete":"Törlés"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Biztos benne, hogy törli ezt?"}}}}'))
n("jQeR")
n("0sPK")
var r=i["default"].scoped("instructure_misc_plugins")
var s=n("ouhR")
var o=n.n(s)
var c=n("5Ky4")
var l=n("JD5e")
n("jYyc")
n("YGE8")
n("B1vq")
n("s/PJ")
o.a.fn.setOptions=function(e,t){let n=e?"<option value=''>"+Object(c["a"])(e)+"</option>":""
null==t&&(t=[])
t.forEach(e=>{const t=Object(c["a"])(e)
n+='<option value="'+t+'">'+t+"</option>"})
return this.html(o.a.raw(n))}
o.a.fn.ifExists=function(e){this.length&&e.call(this,this)
return this}
o.a.fn.scrollbarWidth=function(){const e=o()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div")
const n=t.innerWidth()
e.css("overflow-y","scroll")
const i=t.innerWidth()
e.remove()
return n-i}
o.a.fn.dim=function(e){return this.animate({opacity:.4},e)}
o.a.fn.undim=function(e){return this.animate({opacity:1},e)}
o.a.fn.confirmDelete=function(e){e=o.a.extend({},o.a.fn.confirmDelete.defaults,e)
const t=this
let n=null
let i=true
e.noMessage=e.noMessage||e.no_message
const a=function(){if(!i){e.cancelled&&o.a.isFunction(e.cancelled)&&e.cancelled.call(t)
return}e.confirmed||(e.confirmed=function(){t.dim()})
e.confirmed.call(t)
if(e.url){e.success||(e.success=function(e){t.fadeOut("slow",()=>{t.remove()})})
const i=e.prepareData?e.prepareData.call(t,n):{}
i.authenticity_token=Object(l["a"])()
o.a.ajaxJSON(e.url,"DELETE",i,n=>{e.success.call(t,n)},(n,i,a,r)=>{e.error&&o.a.isFunction(e.error)?e.error.call(t,n,i,a,r):o.a.ajaxJSON.unhandledXHRs.push(i)})}else{e.success||(e.success=function(){t.fadeOut("slow",()=>{t.remove()})})
e.success.call(t)}}
if(e.message&&!e.noMessage&&!o.a.skipConfirmations){if(e.dialog){i=false
const t="object"===typeof e.dialog?e.dialog:{}
const s=e.url.includes("assignments")?"btn-danger":"btn-primary"
n=o()(e.message).dialog(o.a.extend({},{modal:true,close:a,buttons:[{text:r.t("#buttons.cancel","Cancel"),click(){o()(this).dialog("close")}},{text:r.t("#buttons.delete","Delete"),class:s,click(){i=true
o()(this).dialog("close")}}]},t))
return}i=confirm(e.message)}a()}
o.a.fn.confirmDelete.defaults={get message(){return r.t("confirms.default_delete_thing","Are you sure you want to delete this?")}}
o.a.fn.fragmentChange=function(e){if(e&&true!==e){const n=(window.location.search||"").replace(/^\?/,"").split("&")
let i=null
for(var t=0;t<n.length;t++){const e=n[t]
e&&0===e.indexOf("hash=")&&(i="#"+e.substring(5))}this.bind("document_fragment_change",e)
const a=this
let r=false
for(t=0;t<o.a._checkFragments.fragmentList.length;t++){const e=o.a._checkFragments.fragmentList[t]
e.doc[0]==a[0]&&(r=true)}r||o.a._checkFragments.fragmentList.push({doc:a,fragment:""})
o()(window).bind("hashchange",o.a._checkFragments)
setTimeout(()=>{i&&i.length>0?a.triggerHandler("document_fragment_change",i):a&&a[0]&&a[0].location&&a[0].location.hash.length>0&&a.triggerHandler("document_fragment_change",a[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
o.a._checkFragments=function(){const e=o.a._checkFragments.fragmentList
for(let t=0;t<e.length;t++){const n=e[t]
const i=n.doc
if(i[0].location.hash!=n.fragment){i.triggerHandler("document_fragment_change",i[0].location.hash)
n.fragment=i[0].location.hash
o.a._checkFragments.fragmentList[t]=n}}}
o.a._checkFragments.fragmentList=[]
o.a.fn.clickLink=function(){const e=this.eq(0)
e.hasClass("disabled_link")||e.click()}
o.a.fn.showIf=function(e){if(o.a.isFunction(e))return this.each((function(t){o()(this).showIf(e.call(this))}))
e?this.show():this.hide()
return this}
o.a.fn.disableIf=function(e){o.a.isFunction(e)&&(e=e.call(this))
this.prop("disabled",!!e)
return this}
o.a.fn.indicate=function(e){e=e||{}
let t
if("remove"==e){t=this.data("indicator")
t&&t.remove()
return}o()(".indicator_box").remove()
let n=this.offset()
e&&e.offset&&(n=e.offset)
const i=this.width()
const a=this.height()
const r=(e.container||this).zIndex()
t=o()(document.createElement("div"))
t.css({width:i+6,height:a+6,top:n.top-3,left:n.left-3,zIndex:r+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
t.addClass("indicator_box")
t.mouseover((function(){o()(this).stop().fadeOut("fast",(function(){o()(this).remove()}))}))
this.data("indicator")&&this.indicate("remove")
this.data("indicator",t)
o()("body").append(t)
e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){o()(this).remove()})):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){o()(this).remove()}))
e&&e.scroll&&o()("html,body").scrollToVisible(t)}
o.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
o.a.fn.log=function(e){console.log("%s: %o",e,this)
return this}
o.a.fn.fillWindowWithMe=function(e){const t=o.a.extend({minHeight:400},e),n=o()(this),i=o()("#wrapper"),a=o()("#main"),r=o()("#not_right_side"),s=o()(window),c=o()(this).add(t.alsoResize)
function l(){c.height(0)
const e=s.height()-(i.offset().top+i.outerHeight())+(a.height()-r.height()),l=Math.max(400,e)
c.height(l)
o.a.isFunction(t.onResize)&&t.onResize.call(n,l)}l()
s.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",l)
return this}
o.a.fn.autoGrowInput=function(e){e=o.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e)
this.filter("input:text").each((function(){let t=e.minWidth||o()(this).width(),n="",i=o()(this),a=o()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:i.css("fontSize"),fontFamily:i.css("fontFamily"),fontWeight:i.css("fontWeight"),letterSpacing:i.css("letterSpacing"),whiteSpace:"nowrap"}),r=function(){setTimeout(()=>{if(n===(n=i.val()))return
a.text(n)
const r=a.width(),s=r+e.comfortZone>=t?r+e.comfortZone:t,o=i.width(),c=s<o&&s>=t||s>t&&s<e.maxWidth
c&&i.width(s)})}
a.insertAfter(i)
o()(this).bind("keyup keydown blur update change",r)}))
return this}
o.a},rkWX:function(e,t,n){"use strict"
n.r(t)
var i=n("ouhR")
var a=n.n(i)
var r=n("yiTI")
function s(e){r["a"].loadSidebarOnTarget(a()("#editor_tabs").get(0),e)}const o={instance:void 0,pendingShow:false,initializing:false,subscriptions:{},init(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
if(!this.instance&&!this.initializing){this.initializing=true
const e=e=>{this.initializing=false
this.instance=e
this.pendingShow&&this.show()}
s(e)}this.subscriptions=e},show(){if(this.instance){this.instance.show()
this.subscriptions.show&&this.subscriptions.show()}else this.pendingShow=true},hide(){if(this.instance){this.instance.hide()
this.subscriptions.hide&&this.subscriptions.hide()}else this.pendingShow=false},reset(){this.instance=void 0
this.initializing=false
this.subscriptions={}}}
t["default"]=o},yiTI:function(e,t,n){"use strict"
var i=n("VTBJ")
var a=n("ODXe")
var r=n("ouhR")
var s=n.n(r)
var o=n("GLiE")
var c=n.n(o)
var l=n("x1Tw")
function d(e){let t=e
let n=null
return e=>{null===n&&(n=l["a"].post("/api/v1/jwts/refresh",{jwt:t}).then(e=>{n=null
t=e.data.token
return t}))
"function"===typeof e&&n.then(e)
return n}}var u=n("HIhM")
class h{constructor(e,t,n,i){this.formatBtnGroup="bold italic underline forecolor backcolor removeformat alignleft aligncenter alignright"
this.positionBtnGroup="outdent indent superscript subscript bullist numlist"
this.fontBtnGroup="ltr rtl fontsizeselect formatselect check_a11y"
this.baseURL=e.baseURL
this.maxButtons=t.maxVisibleEditorButtons
this.extraButtons=t.editorButtons
this.instConfig=t
this.viewportWidth=n
this.idAttribute=i}defaultConfig(){return{selector:"#".concat(this.idAttribute),toolbar:this.toolbar(),[!window.ENV.use_rce_enhancements&&"theme"]:"modern",[!window.ENV.use_rce_enhancements&&"skin"]:false,directionality:Object(u["b"])(),plugins:"autolink,media,paste,table,lists,".concat(window.ENV.use_rce_enhancements?",instructure-ui-icons,instructure_condensed_buttons,instructure_documents":"textcolor",",link,directionality,a11y_checker,wordcount"),external_plugins:{instructure_image:"/javascripts/tinymce_plugins/instructure_image/plugin.js",instructure_links:"/javascripts/tinymce_plugins/instructure_links/plugin.js",instructure_embed:"/javascripts/tinymce_plugins/instructure_embed/plugin.js",instructure_equation:"/javascripts/tinymce_plugins/instructure_equation/plugin.js",instructure_external_tools:"/javascripts/tinymce_plugins/instructure_external_tools/plugin.js",instructure_record:"/javascripts/tinymce_plugins/instructure_record/plugin.js"},language_load:false,convert_urls:false,menubar:true,branding:false,remove_script_host:true,resize:true,block_formats:"Paragraph=p;Header 2=h2;Header 3=h3;Header 4=h4;Preformatted=pre",valid_elements:"@[id|class|style|title|dir<ltr?rtl|lang|xml::lang|onclick|ondblclick|onmousedown|onmouseup|onmouseover|onmousemove|onmouseout|onkeypress|onkeydown|onkeyup],a[rel|rev|charset|hreflang|tabindex|accesskey|type|name|href|target|title|class|onfocus|onblur],strong/b,em/i,strike,u,#p,-ol[type|compact],-ul[type|compact],-li,br,img[longdesc|usemap|src|border|alt=|title|hspace|vspace|width|height|align],-sub,-sup,-blockquote,-table[border=0|cellspacing|cellpadding|width|frame|rules|height|align|summary|bgcolor|background|bordercolor],-tr[rowspan|width|height|align|valign|bgcolor|background|bordercolor],tbody,thead,tfoot,#td[colspan|rowspan|width|height|align|valign|bgcolor|background|bordercolor|scope],#th[colspan|rowspan|width|height|align|valign|scope],caption,-div,-span,-code,-pre,address,-h1,-h2,-h3,-h4,-h5,-h6,hr[size|noshade],-font[face|size|color],dd,dl,dt,cite,abbr,acronym,del[datetime|cite],ins[datetime|cite],object[classid|width|height|codebase|*],param[name|value|_value],embed[type|width|height|src|*],script[src|type],map[name],area[shape|coords|href|alt|target],bdo,col[align|char|charoff|span|valign|width],colgroup[align|char|charoff|span|valign|width],dfn,kbd,label[for],legend,q[cite],samp,small,tt,var,big,figure,figcaption,source,track,mark,article,aside,details,footer,header,nav,section,summary,time",extended_valid_elements:"@[id|accesskey|class|dir|lang|style|tabindex|title|contenteditable|contextmenu|draggable|dropzone|hidden|longdesc|spellcheck|translate|align|role|aria-labelledby|aria-atomic|aria-busy|aria-controls|aria-describedby|aria-disabled|aria-dropeffect|aria-flowto|aria-grabbed|aria-haspopup|aria-hidden|aria-invalid|aria-label|aria-labelledby|aria-live|aria-owns|aria-relevant|aria-autocomplete|aria-checked|aria-disabled|aria-expanded|aria-haspopup|aria-hidden|aria-invalid|aria-label|aria-level|aria-multiline|aria-multiselectable|aria-orientation|aria-pressed|aria-readonly|aria-required|aria-selected|aria-sort|aria-valuemax|aria-valuemin|aria-valuenow|aria-valuetext],iframe[id|data-media-type|title|src|width|height|name|align|style|class|sandbox|allowfullscreen|webkitallowfullscreen|mozallowfullscreen|allow],i[iclass],a[hidden|href|target|rel|media|hreflang|type|charset|name|rev|shape|coords|download|alt],#p,li[value],-ol[reversed|start|type|compact],pre[width],table[border|summary|width|frame|rules|cellspacing|cellpadding|bgcolor],tbody[char|charoff|valign],td[colspan|rowspan|headers|abbr|axis|scope|align|char|charoff|valign|nowrap|bgcolor|width|height],tfoot[char|charoff|valign],th[colspan|rowspan|headers|scope|abbr|axis|align|char|charoff|valign|nowrap|bgcolor|width|height],thead[char|charoff|valign],tr[char|charoff|valign|bgcolor],-ul[compact],video[name|src|allowfullscreen|muted|poster|width|height|controls|playsinline],audio[name|src|muted|controls],annotation[href|xref|definitionURL|encoding|cd|name|src],annotation-xml[href|xref|definitionURL|encoding|cd|name|src],maction[href|xref|mathcolor|mathbackground|actiontype|selection],maligngroup[href|xref|mathcolor|mathbackground|groupalign],malignmark[href|xref|mathcolor|mathbackground|edge],math[xmlns|href|xref|display|maxwidth|overflow|altimg|altimg-width|altimg-height|altimg-valign|alttext|cdgroup|mathcolor|mathbackground|scriptlevel|displaystyle|scriptsizemultiplier|scriptminsize|infixlinebreakstyle|decimalpoint|mathvariant|mathsize|width|height|valign|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast|depth|lquote|rquote|linethickness|munalign|denomalign|bevelled|voffset|open|close|separators|notation|subscriptshift|superscriptshift|accentunder|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|side|minlabelspacing|rowspan|columnspan|edge|stackalign|charalign|charspacing|longdivstyle|position|shift|location|crossout|length|leftoverhang|rightoverhang|mslinethickness|selection],menclose[href|xref|mathcolor|mathbackground|notation],merror[href|xref|mathcolor|mathbackground],mfenced[href|xref|mathcolor|mathbackground|open|close|separators],mfrac[href|xref|mathcolor|mathbackground|linethickness|munalign|denomalign|bevelled],mglyph[href|xref|mathcolor|mathbackground|src|alt|width|height|valign],mi[href|xref|mathcolor|mathbackground|mathvariant|mathsize],mlabeledtr[href|xref|mathcolor|mathbackground],mlongdiv[href|xref|mathcolor|mathbackground|longdivstyle|align|stackalign|charalign|charspacing],mmultiscripts[href|xref|mathcolor|mathbackground|subscriptshift|superscriptshift],mn[href|xref|mathcolor|mathbackground|mathvariant|mathsize],mo[href|xref|mathcolor|mathbackground|mathvariant|mathsize|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast],mover[href|xref|mathcolor|mathbackground|accent|align],mpadded[href|xref|mathcolor|mathbackground|height|depth|width|lspace|voffset],mphantom[href|xref|mathcolor|mathbackground],mprescripts[href|xref|mathcolor|mathbackground],mroot[href|xref|mathcolor|mathbackground],mrow[href|xref|mathcolor|mathbackground],ms[href|xref|mathcolor|mathbackground|mathvariant|mathsize|lquote|rquote],mscarries[href|xref|mathcolor|mathbackground|position|location|crossout|scriptsizemultiplier],mscarry[href|xref|mathcolor|mathbackground|location|crossout],msgroup[href|xref|mathcolor|mathbackground|position|shift],msline[href|xref|mathcolor|mathbackground|position|length|leftoverhang|rightoverhang|mslinethickness],mspace[href|xref|mathcolor|mathbackground|mathvariant|mathsize],msqrt[href|xref|mathcolor|mathbackground],msrow[href|xref|mathcolor|mathbackground|position],mstack[href|xref|mathcolor|mathbackground|align|stackalign|charalign|charspacing],mstyle[href|xref|mathcolor|mathbackground|scriptlevel|displaystyle|scriptsizemultiplier|scriptminsize|infixlinebreakstyle|decimalpoint|mathvariant|mathsize|width|height|valign|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast|depth|lquote|rquote|linethickness|munalign|denomalign|bevelled|voffset|open|close|separators|notation|subscriptshift|superscriptshift|accentunder|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|side|minlabelspacing|rowspan|columnspan|edge|stackalign|charalign|charspacing|longdivstyle|position|shift|location|crossout|length|leftoverhang|rightoverhang|mslinethickness|selection],msub[href|xref|mathcolor|mathbackground|subscriptshift],msubsup[href|xref|mathcolor|mathbackground|subscriptshift|superscriptshift],msup[href|xref|mathcolor|mathbackground|superscriptshift],mtable[href|xref|mathcolor|mathbackground|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|width|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|displaystyle|side|minlabelspacing],mtd[href|xref|mathcolor|mathbackground|rowspan|columnspan|rowalign|columnalign|groupalign],mtext[href|xref|mathcolor|mathbackground|mathvariant|mathsize|width|height|depth|linebreak],mtr[href|xref|mathcolor|mathbackground|rowalign|columnalign|groupalign],munder[href|xref|mathcolor|mathbackground|accentunder|align],munderover[href|xref|mathcolor|mathbackground|accent|accentunder|align],none[href|xref|mathcolor|mathbackground],semantics[href|xref|definitionURL|encoding]",non_empty_elements:"td th iframe video audio object script a i area base basefont br col frame hr img input isindex link meta param embed source wbr track",content_css:window.ENV.url_to_what_gets_loaded_inside_the_tinymce_editor_css,browser_spellcheck:true,init_instance_callback:e=>{$("#".concat(e.id)).parent().css("visibility","visible")},show_media_upload:!!INST.kalturaSettings&&!INST.kalturaSettings.hide_rte_button}}external_buttons(){let e=""
for(let t=0;this.extraButtons&&t<this.extraButtons.length;t++)this.extraButtons.length<=this.maxButtons||t<this.maxButtons-1?e="".concat(e," instructure_external_button_").concat(this.extraButtons[t].id):e.match(/instructure_external_button_clump/)||(e+=" instructure_external_button_clump")
return e}buildInstructureButtons(){let e=" instructure_image instructure_equation".concat(window.ENV.use_rce_enhancements?" lti_tool_dropdown":"")
e+=this.external_buttons()
this.instConfig&&this.instConfig.allowMediaComments&&this.instConfig.kalturaSettings&&!this.instConfig.kalturaSettings.hide_rte_button&&(e+=" instructure_record")
const t=this.instConfig&&this.instConfig.equellaEnabled?" instructure_equella":""
e+=t
return e}balanceButtons(e){const t="table media instructure_links unlink".concat(e)
let n=""
let i=""
let a=""
if(this.viewportWidth<359&&this.viewportWidth>0){n=this.formatBtnGroup
i="".concat(this.positionBtnGroup," ").concat(t)
a=this.fontBtnGroup}else if(this.viewportWidth<1200){n="".concat(this.formatBtnGroup," ").concat(this.positionBtnGroup)
i="".concat(t," ").concat(this.fontBtnGroup)}else n="".concat(this.formatBtnGroup," ").concat(this.positionBtnGroup," ").concat(t," ").concat(this.fontBtnGroup)
return window.ENV.use_rce_enhancements?[n,i,a]:[n,i,a].map(e=>e.split(" ").join(","))}toolbar(){const e=this.buildInstructureButtons()
return this.balanceButtons(e)}}function f(e,t,i){if(void 0==i)var a=false
else a=i
return{auto_focus:t,setup(t){const i=s()("#"+t.id)
t.on("keyup",e=>{s()(document).trigger("editorKeyUp",[e])})
t.on("change",()=>{i.trigger("change")})
t.on("keyup keydown click mousedown",()=>{a&&t.selection&&i.data("last_bookmark",t.selection.getBookmark(1))})
ENV.use_rce_enhancements||t.on("init",()=>{const e=e=>e.default?e.default:e
const i=e(n("Cvk5"))
new i(t).accessiblize()})
t.on("init",()=>{s()(window).triggerHandler("resize")
s()(t.contentDocument).bind("DOMNodeInserted",t=>{let n,i=t.target
1===i.nodeType&&"IMG"===i.nodeName&&(n=s()(i).data("url"))&&s()(i).attr("src",e.activeEditor.documentBaseURI.toAbsolute(n))})
"onfocusout"in t.contentWindow||s()(t.contentWindow).blur(e=>{if(!t.removed&&t.undoManager.typing){t.undoManager.typing=false
t.undoManager.add()}})})}}}var g=n("u7Gu")
function m(e,t,n,a,r){const s=new h(r,g["a"],e,t)
const o=void 0
return Object(i["a"])({},s.defaultConfig(),{},f(r,o,a),{},n.tinyOptions||{})}var p=m
var _=n("An8g")
var b=n("pQTu")
var v=n("m0r6")
Object(v["a"])(JSON.parse('{"de":{"ExternalToolsPlugin":{"more_external_tools":"Weitere externe Tools"}},"hu":{"ExternalToolsPlugin":{"more_external_tools":"További külső eszközök"}}}'))
n("jQeR")
n("0sPK")
var w=b["default"].scoped("ExternalToolsPlugin")
var k=n("5Ky4")
s.a.fn.dropdownList=function(e){if(this.length){let n=s()("#instructure_dropdown_list")
if("hide"==e||"remove"==e||n.data("current_dropdown_initiator")==this[0]){n.remove().data("current_dropdown_initiator",null)
return}e=s.a.extend({},s.a.fn.dropdownList.defaults,e)
var t=n.children("div.list")
if(!t.length){n=s()("<div id='instructure_dropdown_list'><div class='list ui-widget-content'></div></div>").appendTo("body")
s()(document).mousedown(e=>{n.data("current_dropdown_initiator")&&!s()(e.target).closest("#instructure_dropdown_list").length&&n.hide().data("current_dropdown_initiator",null)}).mouseup(e=>{if(n.data("current_dropdown_initiator")&&!s()(e.target).closest("#instructure_dropdown_list").length){n.hide()
setTimeout(()=>{n.data("current_dropdown_initiator",null)},100)}}).add(this).add(n).keydown(e=>{if(n.data("current_dropdown_initiator")){const t=n.find(".ui-state-hover,.ui-state-active")
if(38==e.keyCode){t.length&&t.prev().length?t.removeClass("ui-state-hover ui-state-active").addClass("minimal").prev().addClass("ui-state-hover").removeClass("minimal").find("span").focus():$item.focus()
return false}if(40==e.keyCode){t.length?t.next().length&&t.removeClass("ui-state-hover ui-state-active").addClass("minimal").next().addClass("ui-state-hover").removeClass("minimal").find("span").focus():n.find(".option:first").addClass("ui-state-hover").removeClass("minimal").find("span").focus()
return false}if(13==e.keyCode&&t.length){t.click()
return false}n.hide().data("current_dropdown_initiator",null)}})
n.find(".option").removeClass("ui-state-hover ui-state-active").addClass("minimal")
n.click(e=>{n.hide().data("current_dropdown_initiator",null)})
t=n.children("div.list")}n.data("current_dropdown_initiator",this[0])
e.width&&n.width(e.width)
e.height&&n.find(".list").css("maxHeight",e.height)
t.empty()
s.a.each(e.options,(e,n)=>{const i=s()("<div class='option minimal' style='cursor: pointer; padding: 2px 5px; overflow: hidden; white-space: nowrap;'>  <span tabindex='-1'>"+e+"</span></div>").appendTo(t)
function a(){i.parent().find("div.option").removeClass("ui-state-hover ui-state-active").addClass("minimal")}s.a.isFunction(n)?i.addClass("ui-state-default").bind({mouseenter(){a()
i.addClass("ui-state-hover").removeClass("minimal")},mouseleave:a,mousedown(e){e.preventDefault()
a()
i.addClass("ui-state-active").removeClass("minimal")},mouseup:a,click:n}):i.addClass("ui-state-disabled").bind({mousedown(e){e.preventDefault()}})})
const i=this.offset(),a=this.outerHeight()
this.outerWidth()
n.css({whiteSpace:"nowrap",position:"absolute",top:i.top+a,left:i.left+5,right:""}).hide().show()
n.offset().left+n.width()>s()(window).width()&&n.css({left:"",right:0})}return this}
s.a.fn.dropdownList.defaults={height:250,width:"auto"}
n("JI1W")
var y={buttonConfig(e,t){const n={title:e.name,classes:"widget btn instructure_external_tool_button"}
if(ENV.use_rce_enhancements){n.id=e.id
n.onAction=()=>t.execCommand("instructureExternalButton".concat(e.id))
n.description=e.description}else n.cmd="instructureExternalButton".concat(e.id)
e.canvas_icon_class?n.icon="hack-to-avoid-mce-prefix ".concat(e.canvas_icon_class):n.image=e.icon_url
return n},clumpedButtonMapping:(e,t,n)=>e.reduce((e,i)=>{let a
a=i.canvas_icon_class?"<i class='".concat(Object(k["a"])(i.canvas_icon_class),"' data-tool-id='").concat(i.id,"'></i>"):"<img src='".concat(Object(k["a"])(i.icon_url),"' data-tool-id='").concat(i.id,"'/>")
a+="&nbsp;".concat(Object(k["a"])(i.name))
e[a]=function(){n(i,t)}
return e},{}),attachClumpedDropdown(e,t,n){e.dropdownList({options:t})
n.on("click",()=>{e.dropdownList("hide")})}}
var x=n("mykf")
var C=n("xe+K")
const E=function(e,t){this.id=e.id
this.selectedContent=e.selection.getContent()
this.selectionDetails={node:e.selection.getNode(),range:e.selection.getRng()}
this.$editorEl=t
this.getEditor=function(){if(void 0!==this.$editorEl)return this.$editorEl
return s()("#"+this.id)}
this.createLink=function(e,t,n){Object(C["d"])(this.getEditor(),"create_link",{url:e,classes:t,selectedContent:this.selectedContent,dataAttributes:n,selectionDetails:this.selectionDetails})}}
var T=E
var z=n("iklP")
n("YGE8")
n("p6Wi")
class N{fetchYouTubeTitle(e,t){const n=ENV.JWT
const i=ENV.RICH_CONTENT_APP_HOST
const a="//".concat(i,"/api/youtube_title?vid_id=").concat(e)
s.a.ajax({headers:{Authorization:"Bearer ".concat(n)},url:a}).success(n=>{n.id===e&&t(n.title)}).error(e=>{t(null,e)})}titleYouTubeText(e){const t=s.a.youTubeID(e.attr("href"))
this.fetchYouTubeTitle(t,(n,i)=>{if(i){console.error('failed to get video title from youtube for "'.concat(t,'":'),i.responseText)
const n=(+e.attr("data-ytt-failcnt")||0)+1
e.attr("data-ytt-failcnt",n)}else{e.text(n)
e.attr("data-preview-alt",n)}})}}const j=["instructure_scribd_file"]
const S=["instructure_scribd_file"]
const O=new WeakMap
function B(e){const t=e.closest("img").attr("src")
return"<img src='"+Object(k["a"])(t)+"'/>"}function R(e){e.nodeChanged()
return new T(e)}function L(e,t){let n=e.replace(/(auto_open|inline_disabled)/g,"")
t.find(".auto_show_inline_content").attr("checked")&&(n+=" auto_open")
t.find(".disable_inline_content").attr("checked")&&(n+=" inline_disabled")
return n}function I(e,t,n,i){const a=e.find("#instructure_link_prompt_form")
a.off("submit")
a.on("submit",(function(a){a.preventDefault()
a.stopPropagation()
e.data("editor")
const r=s()(this).find(".prompt").val()
const o=e.find(".inst-link-preview-alt input").val()
const c=L(n.call(),e)
const l={"preview-alt":o}
e.dialog("close")
t.createLink(r,c,l)
i.call()}))}function A(e){const t=R(e)
const n=t.getEditor()
var i=s()("#instructure_link_prompt")
let a=""
i.removeClass("for_inline_content").find(".disable_enhancement").hide().end().find(".auto_show").hide().end().find(".insert_button").text("Insert Link").end().find(".disable_inline_content").attr("checked",false).end().find(".auto_show_inline_content").attr("checked",false)
if(0==i.length){i=s()(document.createElement("div"))
Object(z["b"])("BookmarkService",(function(e){const t=i.data("editor")
const n=s()("<div style='text-align: left; margin-left: 20px;'/>")
let r,o
for(const i in e){r=e[i].user_service
if(r){o=s()("<a href='#' class='bookmark_service no-hover'/>")
o.addClass(r.service)
o.data("service",r)
o.attr("title","Find links using "+r.service)
const e=s()("<img/>")
e.attr("src","/images/"+r.service+"_small_icon.png")
o.append(e)
o.click((function(e){e.preventDefault()
s()("#instructure_link_prompt").dialog("close")
Object(z["a"])(s()(this).data("service").service,e=>{s()("#instructure_link_prompt").dialog("close")
Object(C["d"])(t,"create_link",{title:e.title,url:e.url,classes:a})})}))
n.append(o)
n.append("&nbsp;&nbsp;")}}i.find("#instructure_link_prompt_form").after(n)}))
i.append("<p><em>This will make the selected text a link, or insert a new link if nothing is selected.</em></p> <label for='instructure_link_prompt_form_input'>Paste or type a url or wiki page in the box below:</label><form id='instructure_link_prompt_form' class='form-inline'><input type='text' id='instructure_link_prompt_form_input' class='prompt' class='btn' value='http://'/> <button type='submit' class='insert_button btn'>Insert Link</button></form>").append("<div class='actions'></div><div class='clear'></div>").append('<div class="inst-link-preview-alt" style="display: none;"><label>Alt text for inline preview: <input type="text" style="display: block;" /></label></div>').append("<div class='disable_enhancement' style='display: none;'><input type='checkbox' class='disable_inline_content' id='disable_inline_content'/><label for='disable_inline_content'> Disable inline previews for this link</label></div>").append("<div class='auto_show' style='display: none;'><input type='checkbox' class='auto_show_inline_content' id='auto_show_inline_content'/><label for='auto_show_inline_content'> Auto-open the inline preview for this link</label></div>")
i.find(".disable_inline_content").change((function(){s()(this).attr("checked")&&i.find(".auto_show_inline_content").attr("checked",false)
i.find(".auto_show").showIf(!s()(this).attr("checked")&&i.hasClass("for_inline_content_can_auto_show"))}))
i.find(".actions").delegate(".embed_image_link","click",e=>{const t=i.data("editor")
const n=s()(e.target)
e.preventDefault()
Object(C["d"])(t,"insert_code",B(n))
i.dialog("close")})
i.find(".actions").delegate(".embed_youtube_link","click",e=>{e.preventDefault()
i.find("#instructure_link_prompt_form").triggerHandler("submit")})
i.find("#instructure_link_prompt_form .prompt").bind("change keyup",(function(){const e=i.find(".inst-link-preview-alt")
e.hide()
s()("#instructure_link_prompt .actions").empty()
const t=s()(this).val()
const n=i.data("original_data")
if(n&&t==n.url){i.toggleClass("for_inline_content",n.for_inline_content).toggleClass("for_inline_content_can_auto_show",n.for_inline_content_can_auto_show).find(".disable_enhancement").showIf(n.for_inline_content).end().find(".auto_show").showIf(n.for_inline_content_can_auto_show)
a=n.prior_classes}else{i.removeClass("for_inline_content").removeClass("for_inline_content_can_auto_show")
const e=new RegExp("("+j.join("|")+")","g")
a=a.replace(e,"")}let r=!i.hasClass("for_inline_content")
const o=!i.hasClass("for_inline_content_can_auto_show")
if(t.match(/\.(gif|png|jpg|jpeg)$/)){var c=s()(document.createElement("div"))
c.css("textAlign","center")
var l=s()(document.createElement("img"))
l.attr("src",t)
l.addClass("embed_image_link")
l.css("cursor","pointer")
const e=new Image
e.src=t
var d=function t(){e.complete?(e.height<100||e.height>100&&e.height<200)&&l.height(e.height):setTimeout(t,500)}
setTimeout(d,500)
l.height(100)
l.attr("title","Click to Embed the Image")
c.append(l)
s()("#instructure_link_prompt .actions").append(c)}else if(t.match(INST.youTubeRegEx)){e.show()
const n=s.a.youTubeID(t)
c=s()(document.createElement("div"))
c.css("textAlign","center")
!i.find(".disable_inline_content").attr("checked")&&i.hasClass("for_inline_content_can_auto_show")&&i.find(".auto_show").show()
r=false
i.find(".disable_enhancement").show()
l=s()(document.createElement("img"))
l.attr("src","http://img.youtube.com/vi/"+n+"/2.jpg")
l.css({paddingLeft:100,background:"url(/images/youtube_logo.png) no-repeat left center",height:90,display:"inline-block"})
l.attr("alt",t)
l.addClass("embed_youtube_link")
l.css("cursor","pointer")
l.attr("title","Click to Embed YouTube Video")
c.append(l)
s()("#instructure_link_prompt .actions").append(c)}if(r){i.find(".disable_enhancement").hide()
i.find(".disable_inline_content").attr("checked",false)}if(o){i.find(".auto_show").hide()
i.find(".auto_show_inline_content").attr("checked",false)}}))
i.attr("id","instructure_link_prompt")
s()("body").append(i)}const r=function(){return a}
const o=function(){D(e,true)}
I(i,t,r,o)
i.data("editor",n)
i.data("original_data",null)
let c=e.selection.getNode()
while("A"!=c.nodeName&&"BODY"!=c.nodeName&&c.parentNode)c=c.parentNode
const l="A"==c.nodeName?s()(c):null
if(l){i.find(".prompt").val(l.attr("href")).change()
i.find(".inst-link-preview-alt input").val(l.data("preview-alt"))
a=(l.attr("class")||"").replace(/youtube_link_to_box/,"")
var d=new RegExp("("+j.join("|")+")");(l.attr("class")||"").match(d)&&i.addClass("for_inline_content").find(".disable_enhancement").show()
d=new RegExp("("+S.join("|")+")");(l.attr("class")||"").match(d)&&i.addClass("for_inline_content_can_auto_show").find(".auto_show").show()
i.data("original_data",{url:l.attr("href"),for_inline_content:i.hasClass("for_inline_content"),for_inline_content_can_auto_show:i.hasClass("for_inline_content_can_auto_show"),prior_classes:a,preview_alt:l.data("preview-alt")})
i.find(".disable_inline_content").attr("checked",l.hasClass("inline_disabled")).triggerHandler("change")
i.find(".auto_show_inline_content").attr("checked",l.hasClass("auto_open")).triggerHandler("change")
i.find(".insert_button").text("Update Link")}else i.find(".prompt").val("").change()
i.dialog({width:425,height:"auto",title:"Link to Website URL",open(){s()(this).find(".prompt").focus().select()}})}function D(e,t){D.counter=D.counter||0
true==t&&0!=D.counter?D.counter=(D.counter+1)%5:s()(e.getBody()).find("a").each((function(){const e=new N
const t=s()(this)
if(t.attr("href")&&!t.hasClass("inline_disabled")&&t.attr("href").match(INST.youTubeRegEx)){const n=+t.attr("data-ytt-failcnt")||0
t.addClass("youtube_link_to_box")
t.text()===t.attr("href")&&n<1&&e.titleYouTubeText(t)}}))}function P(e){if(O.get(e)||void 0===e.on)return
e.on("PreProcess",(function(e){s()(e.node).find("a.youtube_link_to_box").removeClass("youtube_link_to_box")
s()(e.node).find("img.iframe_placeholder").each((function(){const e=s()(this)
const t=s()("<iframe/>")
const n=e.attr("height")||e.css("height")
const i=e.hasClass("fullWidth")?"100%":e.attr("width")||e.css("width")
e.attr("width",i)
e.css("width",i)
t.attr("src",e.attr("rel"))
t.attr("style",e.attr("_iframe_style"))
if(!t[0].style.height.length){t.attr("height",n)
t.css("height",n)}if(!t[0].style.width.length){t.attr("width",i)
t.css("width",i)}s()(this).after(t)
s()(this).remove()}))}))
e.on("change",()=>{D(e)})
e.on("SetContent",()=>{D(e,"contentJustSet")})
O.set(e,true)}var V={buttonToImg:B,prepEditorForDialog:R,buildLinkClasses:L,bindLinkSubmit:I,renderDialog:A,updateLinks:D,initEditor:P}
n("q1tI")
var F=n("i8i4")
var q=n.n(F)
const H={get more_external_tools(){return Object(k["a"])(w.t("more_external_tools","More External Tools"))}}
const W={init(e,t,i){V.initEditor(e)
if(!i||!i.editorButtons||!i.editorButtons.length)return
let a={open:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return setTimeout(()=>a.open(...t),50)}}
Promise.all([n.e(7),n.e(498)]).then(n.bind(null,"/wcz")).then(t=>{let n=t.default
const i=document.createElement("div")
document.body.appendChild(i)
q.a.render(Object(_["a"])(n,{win:window,editor:e,contextAssetString:ENV.context_asset_string,iframeAllowances:Object(x["a"])(),resourceSelectionUrl:s()("#context_external_tool_resource_selection_url").attr("href"),deepLinkingOrigin:ENV.DEEP_LINKING_POST_MESSAGE_ORIGIN}),i,(function(){a=this}))})
const r=[]
const o=[]
for(let t=0;i.editorButtons&&t<i.editorButtons.length;t++){const n=i.editorButtons[t]
const s=()=>a.open(n)
if(ENV.use_rce_enhancements){o.push(y.buttonConfig(n,e))
e.addCommand("instructureExternalButton".concat(n.id),s)}else if(i.editorButtons.length>i.maxVisibleEditorButtons&&t>=i.maxVisibleEditorButtons-1)r.push(n)
else{e.addCommand("instructureExternalButton".concat(n.id),s)
e.addButton("instructure_external_button_".concat(n.id),y.buttonConfig(n,e))}}o.length&&ENV.use_rce_enhancements&&e.ui.registry.addButton("lti_tool_dropdown",{onAction:()=>{const e=new CustomEvent("tinyRCE/onExternalTools",{detail:{ltiButtons:o}})
document.dispatchEvent(e)},icon:"lti",tooltip:"Apps"})
if(r.length){const t=function(){const t=y.clumpedButtonMapping(r,e,e=>a.open(e))
y.attachClumpedDropdown(s()("#".concat(this._id)),t,e)}
ENV.use_rce_enhancements?e.ui.registry.addButton("instructure_external_button_clump",{title:H.more_external_tools,image:"/images/downtick.png",onAction:t}):e.addButton("instructure_external_button_clump",{title:H.more_external_tools,image:"/images/downtick.png",onkeyup(e){if(32===e.keyCode||13===e.keyCode){e.stopPropagation()
t.call(this)}},onclick:t})}}}
var M=W
function G(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const t=["equationCB","linksCB","imagePickerCB","equellaCB","externalToolCB","recordCB"]
t.forEach(t=>{void 0===e[t]&&(e[t]=function(){})})
document.addEventListener("tinyRCE/initEquation",t=>{let i=t.detail
Promise.all([n.e(1),n.e(526)]).then(n.bind(null,"F+Bh")).then(t=>{let n=t.default
const a=new n(i.ed)
e.equationCB(a)})})
document.addEventListener("tinyRCE/initLinks",t=>{let n=t.detail
V.renderDialog(n.ed)
e.linksCB()})
document.addEventListener("tinyRCE/initImagePicker",t=>{Promise.all([n.e(1),n.e(8),n.e(94),n.e(497)]).then(n.bind(null,"Dwgn")).then(n=>{let i=n.default
const a=new i(t.detail.ed,t.detail.selectedNode)
e.imagePickerCB(a)})})
document.addEventListener("tinyRCE/initEquella",t=>{n.e(595).then(n.bind(null,"gg/z")).then(n=>{let i=n.default
i(t.detail.ed)
e.equellaCB()})})
document.addEventListener("tinyRCE/initExternalTools",t=>{M.init(t.detail.ed,t.detail.url,g["a"])
e.externalToolCB()})
document.addEventListener("tinyRCE/initRecord",t=>{Promise.all([n.e(36),n.e(596)]).then(n.bind(null,"xR7n")).then(n=>{let i=n.default
i.insertEditor(t.detail.ed)
e.recordCB()})})}const K={call(e){if("exists?"===e)return true
for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i]
return this[e](...n)},focus(){if(void 0!==tinymce){const e=tinymce.get(this._textareaEl.id)
e&&e.focus(true)}}}
const J={show(){$("#editor_tabs").show()},hide(){$("#editor_tabs").hide()}}
const U={wrapEditor(e){const t=Object(i["a"])({},K,{},e)
return Object.assign(e,t)},wrapSidebar(e){const t=Object(i["a"])({},J,{},e)
return Object.assign(e,t)}}
var Y=U
var Q=n("Cf7h")
var Z=n("/1jZ")
function X(){if(!ENV.context_asset_string)return null
let e,t
const n=ENV.current_user_id
if(ENV.use_rce_enhancements&&!ENV.RICH_CONTENT_CAN_UPLOAD_FILES){t=n
e="user"}else{var i=Object(Q["a"])(ENV.context_asset_string,false)
var r=Object(a["a"])(i,2)
e=r[0]
t=r[1]}return{canUploadFiles:ENV.RICH_CONTENT_CAN_UPLOAD_FILES,containingContext:{contextType:e,contextId:t,userId:n},contextType:e,contextId:t,filesTabDisabled:ENV.RICH_CONTENT_FILES_TAB_DISABLED,host:ENV.RICH_CONTENT_APP_HOST,jwt:ENV.JWT,refreshToken:d(ENV.JWT),themeUrl:ENV.active_brand_config_json_url,liveRegion:()=>document.getElementById("flash_screenreader_holder")}}let ee
const te={preload(e){(window.requestIdleCallback||window.setTimeout)(()=>this.loadRCE(e))},loadOnTarget(e,t,n){const i=this.getTargetTextarea(e)
const a=this.getRenderingTarget(i,t.getRenderingTarget)
const r=this.createRCEProps(i,t)
this.loadRCE(e=>{e.renderIntoDiv(a,r,e=>{e.mceInstance().on("init",()=>n(i,Y.wrapEditor(e)))})})},loadSidebarOnTarget(e,t){if(ENV.RICH_CONTENT_SKIP_SIDEBAR)return
const n=X()
this.loadRCE(i=>{i.renderSidebarIntoDiv(e,n,e=>{t(Y.wrapSidebar(e))})})},loadingCallbacks:[],RCE:null,loadRCE(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{}
ee||(ee=(window.ENV.use_rce_enhancements?Promise.all([n.e(3),n.e(4),n.e(5),n.e(6),n.e(7),n.e(8),n.e(9),n.e(10),n.e(11),n.e(12),n.e(13),n.e(16),n.e(15),n.e(19),n.e(18),n.e(25),n.e(32),n.e(33),n.e(34),n.e(35),n.e(38),n.e(31),n.e(39),n.e(43),n.e(52),n.e(57),n.e(58),n.e(59),n.e(63),n.e(214)]).then(n.bind(null,"Idzl")):Promise.all([n.e(3),n.e(4),n.e(5),n.e(6),n.e(10),n.e(11),n.e(13),n.e(16),n.e(15),n.e(19),n.e(18),n.e(22),n.e(39),n.e(59),n.e(67),n.e(66),n.e(90),n.e(99),n.e(215)]).then(n.bind(null,"66gZ"))).then(e=>{this.RCE=e
G()
return e}))
return ee.then(()=>{this.loadingCallbacks.forEach(e=>e(this.RCE))
this.loadingCallbacks=[]
e(this.RCE)})},getTargetTextarea:e=>"textarea"===s()(e).get(0).type?s()(e).get(0):s()(e).find("textarea").get(0),getRenderingTarget(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0
let n
n="undefined"===typeof t?s()(e).parent().get(0):t(e)
s()(n).addClass("ic-RichContentEditor")
return n},_attrsToMirror(e){const t=["name"]
const n=c.a.reduce(e.attributes,(e,t)=>{e[t.name]=t.value
return e},{})
return c.a.pick(n,t)},createRCEProps(e,t){const n=e.offsetWidth
const a=e.offsetHeight
a&&(t.tinyOptions=Object(i["a"])({height:a},t.tinyOptions||{}))
const r=ENV.LOCALE
const s=Object.keys(Z["a"]).map(e=>({id:e,label:Z["a"][e]})).sort((e,t)=>e.id===r?-1:t.id===r?1:e.label.localeCompare(t.label,r))
const o={enabled:ENV.use_rce_enhancements&&ENV.rce_auto_save,rce_auto_save_max_age_ms:Number.isNaN(ENV.rce_auto_save_max_age_ms)?36e5:ENV.rce_auto_save_max_age_ms}
return{defaultContent:e.value||t.defaultContent,editorOptions:p.bind(null,n,e.id,t,null),language:ENV.LOCALE,mirroredAttrs:this._attrsToMirror(e),onFocus:t.onFocus,onBlur:t.onBlur,textareaClassName:e.className,textareaId:e.id,trayProps:X(),languages:s,autosave:o}}}
t["a"]=te}}])

//# sourceMappingURL=14-c-766951dc6f.js.map