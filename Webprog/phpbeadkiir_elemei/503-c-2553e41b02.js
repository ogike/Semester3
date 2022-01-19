(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[503],{"7LJr":function(e,t,n){"use strict"
var a=n("ouhR")
var i=n.n(a)
i.a.fn.loadingImg=function(e){if(!this||0===this.length)return this
const t=this.filter(":first")
let n
if("hide"===e||"remove"===e){t.children(".loading_image").remove()
n=t.data("loading_images")||[]
n.forEach(e=>{e&&e.remove()})
t.data("loading_images",null)
return this}if("remove_once"===e){t.children(".loading_image").remove()
n=t.data("loading_images")||[]
const e=n.pop()
e&&e.remove()
t.data("loading_images",n)
return this}"register_image"==e&&3==arguments.length&&(i.a.fn.loadingImg.image_files[arguments[1]]=arguments[2])
e=i.a.extend({},i.a.fn.loadingImg.defaults,e)
let a=i.a.fn.loadingImg.image_files.normal
e.image_size&&i.a.fn.loadingImg.image_files[e.image_size]&&(a=i.a.fn.loadingImg.image_files[e.image_size])
e.paddingTop&&(e.vertical=e.paddingTop)
let s=0
if(e.vertical)if("top"==e.vertical);else if("bottom"==e.vertical)s=t.outerHeight()
else if("middle"==e.vertical)s=t.outerHeight()/2-a.height/2
else{s=parseInt(e.vertical,10)
isNaN(s)&&(s=0)}let o=0
if(e.horizontal)if("left"==e.horizontal);else if("right"==e.horizontal)o=t.outerWidth()-a.width
else if("middle"==e.horizontal)o=t.outerWidth()/2-a.width/2
else{o=parseInt(e.horizontal,10)
isNaN(o)&&(o=0)}const r=t.zIndex()+1
const l=i()(document.createElement("div")).addClass("loading_image_holder")
const c=i()(document.createElement("img")).attr("src",a.url)
l.append(c)
n=t.data("loading_images")||[]
n.push(l)
t.data("loading_images",n)
if(t.css("position")&&"static"!=t.css("position")){l.css({zIndex:r,position:"absolute",top:s,left:o})
t.append(l)}else{const n=t.offset()
let a=n.top,c=n.left
e.vertical&&(a+=s)
e.horizontal&&(c+=o)
l.css({zIndex:r,position:"absolute",top:a,left:c})
i()("body").append(l)}return i()(this)}
i.a.fn.loadingImg.defaults={paddingTop:0,image_size:"normal",vertical:0,horizontal:0}
i.a.fn.loadingImg.image_files={normal:{url:"/images/ajax-loader.gif",width:32,height:32},small:{url:"/images/ajax-loader-small.gif",width:16,height:16}}
i.a.fn.loadingImage=i.a.fn.loadingImg},"7WS/":function(e,t,n){"use strict"
var a=n("pQTu")
var i=n("m0r6")
Object(i["a"])(JSON.parse('{"de":{"play_media_comment_35257210":"Medienkommentar wiedergeben","play_media_comment_by_name_from_createdat_515b3b":"Medienkommentar durch %{name} von %{createdAt} wiedergeben."}}'))
n("jQeR")
n("0sPK")
var s=a["default"].scoped("mediaCommentThumbnail")
var o=n("GLiE")
var r=n.n(o)
var l=n("5Ky4")
var c=n("ouhR")
var d=n.n(c)
var u=n("hX7l")
const m={normal:{width:140,height:100},small:{width:70,height:50}}
function h(e,t,n){if(!INST.kalturaSettings)return console.log("Kaltura has not been enabled for this account")
let a,i
const o=d()(e)
try{const e=document.createElement("a")
e.href=o.attr("href")
i=e}catch(e){}if(i&&Object(u["a"])(i.search).no_preview)return
const r=m[t]||m.normal
const c=o.data("media_comment_id")||d.a.trim(o.find(".media_comment_id:first").text())||(a=o.attr("id"))&&a.match(/^media_comment_/)&&a.substring(14)||d.a.trim(o.parent().find(".media_comment_id:first").text())
const h=o.data("author")
const _=o.data("created_at")
let f
f=h&&_?s.t("Play media comment by %{name} from %{createdAt}.",{name:h,createdAt:_}):s.t("Play media comment.")
if(c){const e="https://".concat(INST.kalturaSettings.resource_domain)
const a="".concat(e,"/p/").concat(INST.kalturaSettings.partner_id,"/thumbnail/entry_id/").concat(c,"/width/")+"".concat(r.width,"/height/").concat(r.height,"/bgcolor/000000/type/2/vid_sec/5")
const i=d()("<span\n        style='background-image: url(".concat(Object(l["a"])(a),");'\n        class='media_comment_thumbnail media_comment_thumbnail-").concat(Object(l["a"])(t),"'\n      >\n        <span class='media_comment_thumbnail_play_button'>\n          <span class='screenreader-only'>\n            ").concat(Object(l["a"])(f),"\n          </span>\n        </span>\n      </span>"))
const s=o.closest("p")
s.attr("title")||s.attr("title",Object(l["a"])(f))
let u=o
if(n){u=o.clone().empty().removeClass("instructure_file_link")
const e=o.parent(".instructure_file_link_holder")
e.length?u.appendTo(e):o.after(u)}else o.empty()
u.data("download",u.attr("href")).prop("href","#").addClass("instructure_inline_media_comment").append(i).css({backgroundImage:"",padding:0})}}d.a.fn.mediaCommentThumbnail=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"normal"
let t=arguments.length>1?arguments[1]:void 0
return this.each((function(){r.a.defer(h,this,e,t)}))}},OShF:function(e,t,n){"use strict"
var a=n("ouhR")
var i=n.n(a)
var s=n("5Ky4")
n("JI1W")
i.a.fn.fillTemplateData=function(e){if(this.length&&e){e.iterator&&this.find("*").andSelf().each((function(){const t=i()(this)
i.a.each(["name","id","class"],(n,a)=>{t.attr(a)&&t.attr(a,t.attr(a).replace(/-iterator-/,e.iterator))})}))
e.id&&this.attr("id",e.id)
let a=false
if(e.data)for(var t in e.data){if(e.except&&-1!=i.a.inArray(t,e.except))continue
e.data[t]&&e.dataValues&&-1!=i.a.inArray(t,e.dataValues)&&this.data(t,e.data[t].toString())
const o=this.find("."+t)
var n=e.avoid||""
o.each((function(){const o=i()(this)
if(o.length>0&&0===o.closest(n).length){"undefined"!==typeof e.data[t]&&null!==e.data[t]||(e.data[t]="")
if(e.htmlValues&&-1!=i.a.inArray(t,e.htmlValues)){o.html(i.a.raw(e.data[t].toString()))
if(o.hasClass("user_content")){a=true
o.removeClass("enhanced")
o.data("unenhanced_content_html",e.data[t].toString())}}else if("INPUT"==o[0].tagName.toUpperCase())o.val(e.data[t])
else try{const n=e.data[t].toString()
o.html(Object(s["a"])(n))}catch(e){}}}))}e.hrefValues&&e.data&&this.find("a,span[rel]").each((function(){let t,n,a,s=i()(this)
for(const o in e.hrefValues){if(!e.hrefValues.hasOwnProperty(o))continue
const r=e.hrefValues[o]
if(t=s.attr("href")){const n=i.a.replaceTags(t,r,encodeURIComponent(e.data[r]))
const a=s.text()===s.html()?s.text():null
if(t!==n){s.attr("href",n)
a&&s.text(a)}}(n=s.attr("rel"))&&s.attr("rel",i.a.replaceTags(n,r,e.data[r]));(a=s.attr("name"))&&s.attr("name",i.a.replaceTags(a,r,e.data[r]))}}))
a&&i()(document).triggerHandler("user_content_change")}return this}
i.a.fn.fillTemplateData.defaults={htmlValues:null,hrefValues:null}
i.a.fn.getTemplateData=function(e){if(!this.length||!e)return{}
var t,n={}
if(e.textValues){const t=this
e.textValues.forEach(e=>{const s=t.find("."+e.replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
a=i.a.trim(s.text())
"&nbsp;"===s.html()&&(a="")
1===a.length&&160===a.charCodeAt(0)&&(a="")
n[e]=a})}if(e.dataValues)for(t in e.dataValues){var a=this.data(e.dataValues[t])
a&&(n[e.dataValues[t]]=a)}if(e.htmlValues)for(t in e.htmlValues){const s=this.find("."+e.htmlValues[t].replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
a=null
a=s.hasClass("user_content")&&s.data("unenhanced_content_html")?s.data("unenhanced_content_html"):i.a.trim(s.html())
n[e.htmlValues[t]]=a}return n}
i.a.fn.getTemplateValue=function(e,t){const n=i.a.extend({},t,{textValues:[e]})
return this.getTemplateData(n)[e]}},TBRb:function(e,t,n){"use strict"
var a=n("ouhR")
var i=n.n(a)
var s=n("GLiE")
var o=n.n(s)
var r=n("Nxtp")
n("YGE8")
i.a.fn.fixDialogButtons=function(){return this.each((function(){const e=i()(this)
const t=e.find(".button-container:last .btn, button[type=submit]")
if(t.length){e.find(".button-container:last, button[type=submit]").hide()
let n=i.a.map(t.toArray(),t=>{const n=i()(t)
let a=n.attr("class")||""
const s=n.attr("id")
if(n.is(".dialog_closer")){n.off(".fixdialogbuttons")
n.on("click.fixdialogbuttons",Object(r["a"])(()=>e.dialog("close")))}"submit"===n.prop("type")&&n[0].form&&(a+=" button_type_submit")
return{text:n.text(),"data-text-while-loading":n.data("textWhileLoading"),click:()=>n.click(),class:a,id:s}})
n=o.a.sortBy(n,e=>e.class.match(/btn-primary/)?1:0)
e.dialog("option","buttons",n)}}))}},cuKi:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s}))
var a=n("GLiE")
var i=n.n(a)
function s(e){return i()(e).reduce((e,t,n)=>{let a=n.split("][")
let s=a.length-1
if(/\[/.test(a[0])&&/\]$/.test(a[s])){a[s]=a[s].replace(/\]$/,"")
a=a.shift().split("[").concat(a)
s=a.length-1}else s=0
if(s){let i=0
let o=e
while(i<=s){n=""===a[i]?o.length:a[i]
o=o[n]=i<s?o[n]||(a[i+1]&&isNaN(a[i+1])?{}:[]):t
i++}}else i.a.isArray(e[n])?e[n].push(t):null!=e[n]?e[n]=[e[n],t]:e[n]=t
return e},{})}},fy7k:function(e,t,n){"use strict"
var a=n("u7Gu")
var i=n("pQTu")
var s=n("m0r6")
Object(s["a"])(JSON.parse('{"de":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Dieses Dokument kann in Canvas nicht angezeigt werden.","document_preview_processing":"Die Dokumentvorschau wird gerade ausgeführt. Versuchen Sie es später noch einmal."}}},"hu":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Ezt a dokumentumot nem lehet megtekinteni a Canvasban. ","document_preview_processing":"A dokumentum előnézete feldolgozás alatt. Kérjük, próbálja újra később."}}}}'))
n("jQeR")
n("0sPK")
var o=i["default"].scoped("jquery_doc_previews")
var r=n("ouhR")
var l=n.n(r)
n("GLiE")
var c=n("5Ky4")
n("jYyc")
var d=n("hiU6")
n("JI1W")
n("7LJr")
var u=n("Vj0+")
const m={"application/vnd.openxmlformats-officedocument.wordprocessingml.template":[1,1],"application/vnd.oasis.opendocument.spreadsheet":[1,1],"application/vnd.sun.xml.writer":[1,1],"application/excel":[1,1],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[1,1],"text/rtf":[1,1],"application/vnd.openxmlformats-officedocument.spreadsheetml.template":[1,1],"application/vnd.sun.xml.impress":[1,1],"application/vnd.sun.xml.calc":[1,1],"application/vnd.ms-excel":[1,1],"application/msword":[1,1],"application/mspowerpoint":[1,1],"application/rtf":[1,1],"application/vnd.oasis.opendocument.presentation":[1,1],"application/vnd.oasis.opendocument.text":[1,1],"application/vnd.openxmlformats-officedocument.presentationml.template":[1,1],"application/vnd.openxmlformats-officedocument.presentationml.slideshow":[1,1],"text/plain":[1,1],"application/vnd.openxmlformats-officedocument.presentationml.presentation":[1,1],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[1,1],"application/postscript":[1,1],"application/pdf":[1,1],"application/vnd.ms-powerpoint":[1,1]}
l.a.filePreviewsEnabled=function(){return!(a["a"].disableCrocodocPreviews&&a["a"].disableGooglePreviews)}
l.a.isPreviewable=function(e,t){return l.a.filePreviewsEnabled()&&m[e]&&(!t||!a["a"]["disable"+l.a.capitalize(t)+"Previews"]&&m[e][{scribd:0,google:1}[t]])}
l.a.fn.loadDocPreview=function(e){return this.each((function(){const t=l()(this),n=l.a.extend({width:"100%",height:"400px"},t.data(),e)
function i(e){if(n.attachment_view_inline_ping_url){l.a.ajaxJSON(n.attachment_view_inline_ping_url,"POST",{},()=>{},()=>{})
Object(d["a"])("Doc Previews",e,JSON.stringify(n,["attachment_id","submission_id","mimetype","crocodoc_session_url","canvadoc_session_url"]))}}if(!a["a"].disableCrocodocPreviews&&n.crocodoc_session_url){const e=Object(u["a"])(n.crocodoc_session_url)
var s=l()("<iframe/>",{src:e,width:n.width,height:n.height,allowfullscreen:"1",id:n.id})
s.appendTo(t)
s.load(()=>{i("crocodoc")
l.a.isFunction(n.ready)&&n.ready()})}else if(n.canvadoc_session_url){const e=l()('<div style="overflow: auto; resize: vertical;        border: 1px solid transparent; height: 100%;"/>')
e.appendTo(t)
const a=void 0!==n.iframe_min_height?n.iframe_min_height:"800px"
const o=Object(u["a"])(n.canvadoc_session_url)
s=l()("<iframe/>",{src:o,width:n.width,allowfullscreen:"1",css:{border:0,overflow:"auto",height:"99%","min-height":a},id:n.id})
s.appendTo(e)
s.load(()=>{i("canvadocs")
l.a.isFunction(n.ready)&&n.ready()})}else if(!a["a"].disableGooglePreviews&&(!n.mimetype||l.a.isPreviewable(n.mimetype,"google"))&&n.attachment_id||n.public_url){const e=function(){const e="//docs.google.com/viewer?"+l.a.param({embedded:true,url:n.public_url})
n.ajax_valid&&!n.ajax_valid()||l()('<iframe src="'+Object(c["a"])(e)+'" height="'+n.height+'" width="100%" />').appendTo(t).load(()=>{i("google")
l.a.isFunction(n.ready)&&n.ready()})}
if(n.public_url)e()
else if(n.attachment_id){let a="/api/v1/files/"+n.attachment_id+"/public_url.json"
n.submission_id&&(a+="?"+l.a.param({submission_id:n.submission_id}))
t.loadingImage()
l.a.ajaxJSON(a,"GET",{},a=>{t.loadingImage("remove")
if(a&&a.public_url){l.a.extend(n,a)
e()}})}}else l.a.filePreviewsEnabled()&&(n.attachment_preview_processing?t.html("<p>"+Object(c["a"])(o.t("errors.document_preview_processing","The document preview is currently being processed. Please try again later."))+"</p>"):t.html("<p>"+Object(c["a"])(o.t("errors.cannot_view_document_in_canvas","This document cannot be displayed within Canvas."))+"</p>"))}))}},hX7l:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var a=n("ODXe")
var i=n("cuKi")
const s={true:true,false:false,null:null}
function o(e,t){if(!e||"boolean"===typeof e){const e=window.location.search
if(!e)return{}
return o(e,...arguments)}const n={}
e.replace(/\+/g," ").split("&").forEach(e=>{let i=e.split("="),o=Object(a["a"])(i,2),r=o[0],l=o[1]
r=decodeURIComponent(r)
l=decodeURIComponent(l)
t&&(l=l&&!isNaN(l)?+l:"undefined"===l?void 0:void 0!==s[l]?s[l]:l)
n[r]=l})
return Object(i["a"])(n)}},rnoQ:function(e,t,n){"use strict"
var a=n("pQTu")
var i=n("m0r6")
Object(i["a"])(JSON.parse('{"de":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Tastenkombinationen"}}},"hu":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Billentyűparancsok"}}}}'))
n("jQeR")
n("0sPK")
var s=a["default"].scoped("KeyboardNavDialog")
var o=n("FIFq")
var r=n("ouhR")
var l=n.n(r)
n("YGE8")
var c=function(e,t){for(var n in t)d.call(t,n)&&(e[n]=t[n])
function a(){this.constructor=e}a.prototype=t.prototype
e.prototype=new a
e.__super__=t.prototype
return e},d={}.hasOwnProperty
t["a"]=function(e){c(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.el="#keyboard_navigation"
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
this.bindOpenKeys
return this}
t.prototype.render=function(e){this.$el.html(e)
return this}
t.prototype.bindOpenKeys=function(){var e
e=null
return l()(document).keydown((t=this,function(n){var a
a=188===n.keyCode||191===n.keyCode
if(a&&!l()(n.target).is(":input")){n.preventDefault()
if(!t.$el.is(":visible")){e=document.activeElement
return t.$el.dialog({title:s.t("titles.keyboard_shortcuts","Keyboard Shortcuts"),width:400,height:"auto",close:function(){l()("li",this).attr("tabindex","")
if(e)return l()(e).focus()}})}t.$el.dialog("close")
if(e)return l()(e).focus()}}))
var t}
return t}(o["View"])},wGhc:function(e,t,n){"use strict"
n.r(t)
var a=n("GLiE")
var i=n.n(a)
var s=n("ouhR")
var o=n.n(s)
var r=n("pQTu")
var l=n("m0r6")
Object(l["a"])(JSON.parse('{"de":{"hide_account_navigation_menu_ccdf9480":"Konto-Navigationsmenü ausblenden","hide_admin_navigation_menu_5cab9c9e":"Admin-Navigationsmenü ausblenden","hide_courses_navigation_menu_6f7c4cfd":"Kurs-Navigationsmenü ausblenden","hide_groups_navigation_menu_62e8b3d0":"Gruppen-Navigationsmenü ausblenden","hide_navigation_menu_f0b3e90":"Navigationsmenü ausblenden","show_account_navigation_menu_d97270a9":"Konto-Navigationsmenü einblenden","show_admin_navigation_menu_92fb579f":"Admin-Navigationsmenü einblenden","show_courses_navigation_menu_7ad1a8d4":"Kursnavigationsmenü einblenden","show_groups_navigation_menu_1521d38d":"Gruppen-Navigationsmenü einblenden","show_navigation_menu_34e7f441":"Navigationsmenü einblenden"},"hu":{"hide_courses_navigation_menu_6f7c4cfd":"Kurzusnavigációs menü elrejtése","hide_navigation_menu_f0b3e90":"Navigációs menü elrejtése"}}'))
n("jQeR")
n("0sPK")
var c=r["default"].scoped("subnav_menu_toggle")
const d={hide:{get default(){return c.t("Hide Navigation Menu")},get account(){return c.t("Hide Account Navigation Menu")},get admin(){return c.t("Hide Admin Navigation Menu")},get courses(){return c.t("Hide Courses Navigation Menu")},get groups(){return c.t("Hide Groups Navigation Menu")}},show:{get default(){return c.t("Show Navigation Menu")},get account(){return c.t("Show Account Navigation Menu")},get admin(){return c.t("Show Admin Navigation Menu")},get courses(){return c.t("Show Courses Navigation Menu")},get groups(){return c.t("Show Groups Navigation Menu")}}}
const u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.pathname
const t=document.body.classList.contains("course-menu-expanded")
const n=t?"hide":"show"
let a=d[n].default
e.match(/^\/profile/)?a=d[n].account:e.match(/^\/accounts/)?a=d[n].admin:e.match(/^\/courses/)?a=d[n].courses:e.match(/^\/groups/)&&(a=d[n].groups)
const i=document.getElementById("courseMenuToggle")
i.setAttribute("aria-label",a)
i.setAttribute("title",a)}
var m=u
var h=n("Nxtp")
n("iBIV")
n("VHne")
n("p6Wi")
o()(document).ready((function(){o()("#floating_reminders").draggable()
o()(".show_reminders_link").click((function(e){e.preventDefault()
o()(this).blur()
const t=o()("#floating_reminders")
const n=t.clone()
n.children().css("visibility","hidden")
const a=o()("#reminders_icon").offset()
const i=o()("#floating_reminders").offset().top
t.after(n)
n.css({width:20,height:20,left:a.left,top:a.top-i,opacity:0})
t.css("visibility","hidden").css("left","")
n.animate({top:t.css("top"),left:t.css("left"),width:t.width(),height:t.height(),opacity:1},"slow",(function(){o()(this).remove()
t.css("visibility","visible")
t.find("a:not(.hide_reminders_link):visible:first").focus()
o()("#reminders_icon").hide()}))
t.find(".update_session_url").attr("href")}))
o()(".hide_reminders_link").click((function(e){e.preventDefault()
const t=o()(this).parents("#floating_reminders")
const n=t.clone()
t.after(n).css("left",-2e3)
n.children().css("visibility","hidden")
const a=o()("#reminders_icon").show().offset()
const i=n.offset().top
n.animate({width:20,height:20,left:a.left,top:a.top-i,opacity:0},"slow",(function(){o()(this).remove()}))
t.find(".update_session_url").attr("href")}))
o()(".drop_held_context_link").click((function(e){e.preventDefault()
const t=o()(this).parents(".reminder")
t.confirmDelete({url:o()(this).attr("href"),message:"Are you sure you want to drop this "+t.find(".item_type").text()+"?",success(e){o()(this).fadeOut("fast",(function(){o()(this).remove()
0===o()("#floating_reminders .reminder").length&&o()("#floating_reminders").fadeOut("fast",(function(){o()(this).remove()
o()("#reminders_icon").remove()}))}))}})}))}))
var _=n("rnoQ")
Object(l["a"])(JSON.parse('{"de":{"instructure_js":{"alerts":{"file_previews_disabled":"Die Dateivorschaufunktion wurde für diese Canvas-Seite deaktiviert."},"buttons":{"next_module":"Nächstes Modul","previous_module":"Vorheriges Modul"},"draft":"Entwurf","errors":{"posting_message_failed":"Post fehlgeschlagen, bitte erneut versuchen"},"links":{"minimize_file_preview":"Dateivorschau minimieren","minimize_youtube_video":"Video minimieren","view_equella_content_in_new_window":"Inhalt in neuem Fenster anzeigen"},"status":{"posting_message":"Nachricht wird gepostet ..."},"switched_roles_message":{"designer":"Sie haben für diesen Kurs vorübergehend die Rollen getauscht und sehen den Kurs nun als Designer.  Sie können Rolle und Berechtigungen auf der Kursstartseite wiederherstellen.","observer":"Sie haben für diesen Kurs vorübergehend die Rollen getauscht und sehen den Kurs nun als Beobachter.  Sie können Rolle und Berechtigungen auf der Kursstartseite wiederherstellen.","student":"Sie haben für diesen Kurs vorübergehend die Rollen getauscht und sehen den Kurs nun als Student.  Sie können Rolle und Berechtigungen auf der Kursstartseite wiederherstellen.","ta":"Sie haben für diesen Kurs vorübergehend die Rollen getauscht und sehen den Kurs nun als Lehrassistent.  Sie können Rolle und Berechtigungen auf der Kursstartseite wiederherstellen.","teacher":"Sie haben für diesen Kurs vorübergehend die Rollen getauscht und sehen den Kurs nun als Dozent.  Sie können Rolle und Berechtigungen auf der Kursstartseite wiederherstellen."},"titles":{"equella_content_preview":"Vorschau für Equella-Content","external_link":"Links zu einer externen Website","preview_document":"Dokument als Vorschau anzeigen"}},"time":{"count_hours_ago":{"one":"vor 1 Stunde","other":"vor %{count} Stunden"},"count_minutes_ago":{"one":"vor 1 Minute","other":"vor %{count} Minuten"},"less_than_a_minute_ago":"vor weniger als einer Minute"}},"hu":{"instructure_js":{"alerts":{"file_previews_disabled":"Ezen a Canvas oldalon a fájlok előnézete le van tiltva. "},"buttons":{"next_module":"Következő modul","previous_module":"Előző modul"},"draft":"Piszkozat","errors":{"posting_message_failed":"Sikertelen bejegyzés, próbálja újra "},"links":{"minimize_file_preview":"Fájl előnézet méretének csökkentése","minimize_youtube_video":"Videó méretének csökkentése","view_equella_content_in_new_window":"tartalom megtekintése új ablakban"},"status":{"posting_message":"Üzenet közzététele... "},"switched_roles_message":{"designer":"Ideiglenesen szerepkört váltott ezen a kurzuson, a kurzust jelenleg tervezőként tekinti meg. Visszaállíthatja a szerepkörét és jogosultságait a kurzus kezdőlapján.","observer":"Ideiglenesen szerepkört váltott ezen a kurzuson, a kurzust jelenleg megfigyelőként tekinti meg. Visszaállíthatja a szerepkörét és jogosultságait a kurzus kezdőlapján.","student":"Ideiglenesen szerepkört váltott ezen a kurzuson, a kurzust jelenleg hallgatóként tekinti meg. Visszaállíthatja a szerepkörét és jogosultságait a kurzus kezdőlapján.","ta":"Ideiglenesen szerepkört váltott ezen a kurzuson, a kurzust jelenleg segédoktatóként tekinti meg. Visszaállíthatja a szerepkörét és jogosultságait a kurzus kezdőlapján.","teacher":"Ideiglenesen szerepkört váltott ezen a kurzuson, a kurzust jelenleg oktatóként tekinti meg. Visszaállíthatja a szerepkörét és jogosultságait a kurzus kezdőlapján."},"titles":{"equella_content_preview":"Equella tartalom előnézete","external_link":"Linkek egy külső oldalra","preview_document":"Dokumentum előnézete"}},"time":{"count_hours_ago":{"one":"1 órával ezelőtt","other":"%{count} órával ezelőtt"},"count_minutes_ago":{"one":"1 perccel ezelőtt","other":"%{count} perccel ezelőtt"},"less_than_a_minute_ago":"kevesebb mint egy perce"}}}'))
var f=r["default"].scoped("instructure_js")
var g=n("2DhO")
var p=n("5Ky4")
var v=n("21i1")
n("u7Gu")
n("YGE8")
function b(e){e=(e||"").split(":")[0]
const t=e.split("."),n=t.length
return(n>1?[t[n-2],t[n-1]]:t).join("")}const w=b(window.location.hostname)
o.a.expr[":"].external=function(e){const t=o()(e).attr("href")
return!!(t&&t.length&&!t.match(/^(mailto\:|javascript\:)/)&&e.hostname&&b(e.hostname)!=w)}
window.equella={ready(e){o()(document).triggerHandler("equella_ready",e)},cancel(){o()(document).triggerHandler("equella_cancel")}}
o()(document).bind("equella_ready",(function(e,t){o()("#equella_dialog").triggerHandler("equella_ready",t)})).bind("equella_cancel",(function(){o()("#equella_dialog").dialog("close")}))
window.external_tool_dialog={ready(e){const t=jQuery.Event("selection")
t.contentItems=e
o()("#resource_selection_dialog:visible").triggerHandler(t)
o()("#homework_selection_dialog:visible").triggerHandler(t)},cancel(){o()("#external_tool_button_dialog").dialog("close")
o()("#resource_selection_dialog").dialog("close")
o()("#homework_selection_dialog:visible").dialog("close")}}
window.jsonFlickrApi=function(e){o()("#instructure_image_search").triggerHandler("search_results",e)}
n("jYyc")
n("fy7k")
var k=n("hiU6")
n("UlQx")
n("Z+Ib")
n("JI1W")
n("q3b3")
n("7LJr")
n("MWZS")
n("OShF")
n("TBRb")
n("7WS/")
n("2sOc")
n("teYS")
n("Yf8v")
n("fuo4")
n("Sv6n")
o()("body").on("click","[data-track-category]",(function(){const e=o()(this).data(),t=e.trackCategory,n=e.trackLabel,a=e.trackAction,i=e.trackValue
Object(k["a"])(t,a,n,i)}))
function y(){const e=o()(this)
const t=e.attr("href")
const n=o.a.youTubeID(t||"")
if(n&&!e.hasClass("inline_disabled")){const a=o()('\n      <a\n        href="'.concat(Object(p["a"])(t),'"\n        class="youtubed"\n      >\n        <img src="/images/play_overlay.png"\n          class="media_comment_thumbnail"\n          style="background-image: url(//img.youtube.com/vi/').concat(Object(p["a"])(n),'/2.jpg)"\n          alt="').concat(Object(p["a"])(e.data("preview-alt")||""),'"\n        />\n      </a>\n    '))
a.click(Object(h["a"])((function(){const e=o()("\n        <span class='youtube_holder' style='display: block;'>\n          <iframe\n            src='//www.youtube.com/embed/".concat(Object(p["a"])(n),"?autoplay=1&rel=0&hl=en_US&fs=1'\n            frameborder='0'\n            width='425'\n            height='344'\n            allowfullscreen\n          ></iframe>\n          <br/>\n          <a\n            href='#'\n            style='font-size: 0.8em;'\n            class='hide_youtube_embed_link'\n          >\n            ").concat(Object(p["a"])(f.t("links.minimize_youtube_video","Minimize Video")),"\n          </a>\n        </span>\n      "))
e.find(".hide_youtube_embed_link").click(Object(h["a"])(()=>{e.remove()
a.show()
Object(k["a"])("hide_embedded_content","hide_you_tube")}))
o()(this).after(e).hide()})))
Object(k["a"])("show_embedded_content","show_you_tube")
e.addClass("youtubed").after(a)}}Object(k["a"])("Route",window.location.pathname.replace(/\/$/,"").replace(/\d+/g,"--")||"/")
const x=".dialog, .draggable, .resizable, .sortable, .tabs"
function j(){if(ENV.SKIP_ENHANCING_USER_CONTENT)return
const e=o()("#content")
o()(".user_content:not(.enhanced):visible").addClass("unenhanced")
o()(".user_content.unenhanced:visible").each((function(){const t=o()(this)
t.find("img").each((n,a)=>{const i=()=>o()(a).css("maxWidth",Math.min(e.width(),t.width(),o()(a).width()||a.naturalWidth))
0===a.naturalWidth?a.addEventListener("load",i):i()})
t.data("unenhanced_content_html",t.html())})).find(".enhanceable_content").show().filter(x).ifExists(e=>{const t="Deprecated use of magic jQueryUI widget markup detected:\n\nYou're relying on undocumented functionality where Canvas makes jQueryUI widgets out of rich content that has the following class names: "+x+".\n\nCanvas is moving away from jQueryUI for our own widgets and this behavior will go away. Rather than relying on the internals of Canvas's JavaScript, you should use your own custom JS file to do any such customizations."
console.error(t,e)}).end().filter(".dialog").each((function(){const e=o()(this)
e.hide()
e.closest(".user_content").find("a[href='#"+e.attr("id")+"']").click(t=>{t.preventDefault()
e.dialog()})})).end().filter(".draggable").draggable().end().filter(".resizable").resizable().end().filter(".sortable").sortable().end().filter(".tabs").each((function(){o()(this).tabs()})).end().end().find("a:not(.not_external, .external):external").each((function(){const e=Object(p["a"])(f.t("titles.external_link","Links to an external site."))
o()(this).not(":has(img)").addClass("external").html("<span>"+o()(this).html()+"</span>").attr("target","_blank").attr("rel","noreferrer noopener").append('<span aria-hidden="true" class="ui-icon ui-icon-extlink ui-icon-inline" title="'+o.a.raw(e)+'"/>').append('<span class="screenreader-only">&nbsp;('+o.a.raw(e)+")</span>")})).end()
o.a.filePreviewsEnabled()&&o()("a.instructure_scribd_file").not(".inline_disabled").each((function(){const e=o()(this)
if(o.a.trim(e.text())){const t=o()("<span class='instructure_file_holder link_holder'/>"),n=o()("<a class='file_preview_link' aria-hidden='true' href='"+Object(p["a"])(e.attr("href"))+"' title='"+Object(p["a"])(f.t("titles.preview_document","Preview the document"))+"' style='padding-left: 5px;'><img src='/images/preview.png' alt='"+Object(p["a"])(f.t("titles.preview_document","Preview the document"))+"'/></a>")
e.removeClass("instructure_scribd_file").before(t).appendTo(t)
t.append(n)
e.hasClass("auto_open")&&n.click()}}))
o()(".user_content.unenhanced a,.user_content.unenhanced+div.answers a").find("img.media_comment_thumbnail").each((function(){o()(this).closest("a").addClass("instructure_inline_media_comment")})).end().filter(".instructure_inline_media_comment").removeClass("no-underline").mediaCommentThumbnail("normal").end().filter(".instructure_video_link, .instructure_audio_link").mediaCommentThumbnail("normal",true).end().not(".youtubed").each(y)
o()(".user_content.unenhanced").removeClass("unenhanced").addClass("enhanced")
setTimeout(()=>{o()(".user_content form.user_content_post_form:not(.submitted)").submit().addClass("submitted")},10)}o()((function(){if(window._earlyClick){document.removeEventListener("click",window._earlyClick)
window._earlyClick.clicks&&setTimeout((function(){o.a.each(i.a.uniq(window._earlyClick.clicks),(function(){const e=o.a.Event("click")
e.preventDefault()
o()(this).trigger(e)}))}),1)}const e=o()("#breadcrumbs")
if(e.length){let t
let n=false
const a=40.5
let i
const s=()=>{i&&(window.cancelIdleCallback||window.cancelAnimationFrame)(i)
i=(window.requestIdleCallback||window.requestAnimationFrame)(()=>{let i=500
t=t||e.find(".ellipsible")
t.ifExists(()=>{t.css("maxWidth","")
for(let s=0;e.height()>a&&s<20;s++){if(!n){n=true
t.addClass("ellipsis")}t.css("maxWidth",i-=20)}})})}
s()
o()(window).resize(s)}_["a"].prototype.bindOpenKeys.call({$el:o()("#keyboard_navigation")})
o()("#switched_role_type").ifExists((function(){const e=o()(this).attr("class")
const t=o()("<img/>")
let n=null
switch(o()(this).data("role")){case"TeacherEnrollment":n=f.t("switched_roles_message.teacher","You have switched roles temporarily for this course, and are now viewing the course as a teacher.  You can restore your role and permissions from the course home page.")
break
case"StudentEnrollment":n=f.t("switched_roles_message.student","You have switched roles temporarily for this course, and are now viewing the course as a student.  You can restore your role and permissions from the course home page.")
break
case"TaEnrollment":n=f.t("switched_roles_message.ta","You have switched roles temporarily for this course, and are now viewing the course as a TA.  You can restore your role and permissions from the course home page.")
break
case"ObserverEnrollment":n=f.t("switched_roles_message.observer","You have switched roles temporarily for this course, and are now viewing the course as an observer.  You can restore your role and permissions from the course home page.")
break
case"DesignerEnrollment":n=f.t("switched_roles_message.designer","You have switched roles temporarily for this course, and are now viewing the course as a designer.  You can restore your role and permissions from the course home page.")
break
default:n=f.t("switched_roles_message.student","You have switched roles temporarily for this course, and are now viewing the course as a student.  You can restore your role and permissions from the course home page.")}t.attr("src","/images/warning.png").attr("title",n).css({paddingRight:2,width:12,height:12})
o()("#crumb_"+e).find("a").prepend(t)}))
o()("a.show_quoted_text_link").live("click",(function(e){const t=o()(this).parents(".quoted_text_holder").children(".quoted_text")
if(t.length>0){e.preventDefault()
t.show()
o()(this).hide()}}))
o()("a.equella_content_link").live("click",(function(e){e.preventDefault()
let t=o()("#equella_preview_dialog")
if(!t.length){t=o()("<div/>")
t.attr("id","equella_preview_dialog").hide()
t.html("<h2/><iframe style='background: url(/images/ajax-loader-medium-444.gif) no-repeat left top; width: 800px; height: 350px; border: 0;' src='about:blank' borderstyle='0'/><div style='text-align: right;'><a href='#' class='original_link external external_link' target='_blank'>"+Object(p["a"])(f.t("links.view_equella_content_in_new_window","view the content in a new window"))+"</a>")
t.find("h2").text(o()(this).attr("title")||o()(this).text()||f.t("titles.equella_content_preview","Equella Content Preview"))
const e=t.find("iframe")
setTimeout(()=>{e.css("background","#fff")},2500)
o()("body").append(t)
t.dialog({autoOpen:false,width:"auto",resizable:false,title:f.t("titles.equella_content_preview","Equella Content Preview"),close(){t.find("iframe").attr("src","about:blank")}})}t.find(".original_link").attr("href",o()(this).attr("href"))
t.dialog("close").dialog("open")
t.find("iframe").attr("src",o()(this).attr("href"))}))
o()(".dialog_opener[aria-controls]:not(.user_content *)").live("click",(function(e){const t=this
o()("#"+o()(this).attr("aria-controls")).ifExists(n=>{e.preventDefault()
if(!n.data("dialog")){n.dialog(o.a.extend({autoOpen:false,modal:true},o()(t).data("dialogOpts")))
n.fixDialogButtons()}n.dialog("open")})}))
o.a.filePreviewsEnabled()?o()("a.file_preview_link").live("click",(function(e){e.preventDefault()
const t=o()(this).loadingImage({image_size:"small"}).hide()
o.a.ajaxJSON(t.attr("href").replace(/\/download/,""),"GET",{},n=>{const a=n&&n.attachment
t.loadingImage("remove")
if(a&&(o.a.isPreviewable(a.content_type,"google")||a.canvadoc_session_url)){const n=o()("<div>").insertAfter(t.parents(".link_holder:last")).loadDocPreview({canvadoc_session_url:a.canvadoc_session_url,mimeType:a.content_type,public_url:a.public_url,attachment_preview_processing:"pending_upload"==a.workflow_state||"processing"==a.workflow_state})
const i=o()('<a href="#" style="font-size: 0.8em;" class="hide_file_preview_link">'+Object(p["a"])(f.t("links.minimize_file_preview","Minimize File Preview"))+"</a>").click(e=>{e.preventDefault()
t.show()
t.focus()
n.remove()
Object(k["a"])("hide_embedded_content","hide_file_preview")})
n.prepend(i)
Object.prototype.hasOwnProperty.call(e,"originalEvent")&&i.focus()
Object(k["a"])("show_embedded_content","show_file_preview")}},()=>{t.loadingImage("remove").hide()})})):o()("a.file_preview_link").live("click",e=>{e.preventDefault()
alert(f.t("alerts.file_previews_disabled","File previews have been disabled for this Canvas site"))})
let t
o.a.subscribe("userContent/change",()=>{clearTimeout(t)
t=setTimeout(j,50)})
o()(document).bind("user_content_change",j)
o()(()=>{setInterval(j,15e3)
setTimeout(j,15)})
o()(".zone_cached_datetime").each((function(){if(o()(this).attr("title")){const e=g["a"].parse(o()(this).attr("title"))
e&&o()(this).text(o.a.datetimeString(e))}}))
o()(".show_sub_messages_link").click((function(e){e.preventDefault()
o()(this).parents(".subcontent").find(".communication_sub_message.toggled_communication_sub_message").removeClass("toggled_communication_sub_message")
o()(this).parents(".communication_sub_message").remove()}))
o()(".show_comments_link").click((function(e){e.preventDefault()
o()(this).closest("ul").find("li").show()
o()(this).closest("li").remove()}))
o()(".communication_message .message_short .read_more_link").click((function(e){e.preventDefault()
o()(this).parents(".communication_message").find(".message_short").hide().end().find(".message").show()}))
o()(".communication_message .close_notification_link").live("click",(function(e){e.preventDefault()
const t=o()(this).parents(".communication_message")
t.confirmDelete({url:o()(this).attr("rel"),noMessage:true,success(){o()(this).slideUp((function(){o()(this).remove()}))}})}))
o()(".communication_message .add_entry_link").click((function(e){e.preventDefault()
const t=o()(this).parents(".communication_message")
const n=t.find(".reply_message").hide()
const a=t.find(".communication_sub_message.blank").clone(true).removeClass("blank")
n.before(a.show())
const s=i.a.uniqueId("textarea_")
a.find("textarea.rich_text").attr("id",s)
o()(document).triggerHandler("richTextStart",o()("#"+s))
a.find("textarea:first").focus().select()}))
o()(document).bind("richTextStart",(e,t)=>{if(!t||0===t.length)return
t=o()(t)
if(!t||0===t.length)return
v["a"].initSidebar({show(){o()("#sidebar_content").hide()},hide(){o()("#sidebar_content").show()}})
v["a"].loadNewEditor(t,{focus:true})}).bind("richTextEnd",(e,t)=>{if(!t||0===t.length)return
t=o()(t)
if(!t||0===t.length)return
v["a"].destroyRCE(t)})
o()(".communication_message .content .links .show_users_link,.communication_message .header .show_users_link").click((function(e){e.preventDefault()
o()(this).parents(".communication_message").find(".content .users_list").slideToggle()}))
o()(".communication_message .delete_message_link").click((function(e){e.preventDefault()
o()(this).parents(".communication_message").confirmDelete({noMessage:true,url:o()(this).attr("href"),success(){o()(this).slideUp()}})}))
o()(".communication_sub_message .add_conversation_message_form").formSubmit({beforeSubmit(e){o()(this).find("button").attr("disabled",true)
o()(this).find(".submit_button").text(f.t("status.posting_message","Posting Message..."))
o()(this).loadingImage()},success(e){o()(this).loadingImage("remove")
const t=o()(this).parents(".communication_sub_message")
const n=t.parents(".communication_message")
const a=e.messages[0]
t.fillTemplateData({data:{post_date:o.a.datetimeString(a.created_at),message:a.body},htmlValues:["message"]})
t.find(".message").show()
o()(this).remove()
n.find(".reply_message").show()
o.a.flashMessage("Message Sent!")
o()(document).triggerHandler("user_content_change")
"/"===window.location.pathname&&Object(k["a"])("dashboard_comment","create")},error(e){o()(this).loadingImage("remove")
o()(this).find("button").attr("disabled",false)
o()(this).find(".submit_button").text("Post Failed, Try Again")
o()(this).formErrors(e)}})
o()(".communication_sub_message .add_sub_message_form").formSubmit({beforeSubmit(e){o()(this).find("button").attr("disabled",true)
o()(this).find(".submit_button").text(f.t("status.posting_message","Posting Message..."))
o()(this).loadingImage()},success(e){o()(this).loadingImage("remove")
const t=o()(this).parents(".communication_sub_message")
if(o()(this).hasClass("submission_comment_form")){const n=o()(this).getTemplateData({textValues:["submission_user_id"]}).submission_user_id
let a=null
for(const t in e){const i=e[t].submission
i.user_id==n&&(a=i)}if(a){const e=a.submission_comments[a.submission_comments.length-1].submission_comment
e.post_date=o.a.datetimeString(e.created_at)
e.message=e.formatted_body||e.comment
t.fillTemplateData({data:e,htmlValues:["message"]})}}else{const n=e.discussion_entry
n.post_date=o.a.datetimeString(n.created_at)
t.find(".content > .message_html").val(n.message)
t.fillTemplateData({data:n,htmlValues:["message"]})}t.find(".message").show()
t.find(".user_content").removeClass("enhanced")
t.parents(".communication_message").find(".reply_message").removeClass("lonely_behavior_message").show()
o()(document).triggerHandler("richTextEnd",o()(this).find("textarea.rich_text"))
o()(document).triggerHandler("user_content_change")
o()(this).remove()
window.location.href.match(/dashboard/)&&Object(k["a"])("dashboard_comment","create")},error(e){o()(this).loadingImage("remove")
o()(this).find("button").attr("disabled",false)
o()(this).find(".submit_button").text(f.t("errors.posting_message_failed","Post Failed, Try Again"))
o()(this).formErrors(e)}})
o()(".communication_sub_message form .cancel_button").click((function(){const e=o()(this).parents(".communication_sub_message")
const t=o()(this).parents(".communication_message")
o()(document).triggerHandler("richTextEnd",e.find("textarea.rich_text"))
e.remove()
t.find(".reply_message").show()}))
o()(".communication_message,.communication_sub_message").bind("focusin mouseenter",(function(){o()(this).addClass("communication_message_hover")})).bind("focusout mouseleave",(function(){o()(this).removeClass("communication_message_hover")}))
o()(".communication_sub_message .more_options_reply_link").click((function(e){e.preventDefault()
const t=o()(this).parents("form")
let n=null
n=t.hasClass("submission_comment_form")?{comment:t.find("textarea:visible:first").val()||""}:{message:t.find("textarea:visible:first").val()||""}
window.location.href=o()(this).attr("href")+"?message="+encodeURIComponent(n.message)}))
o()(".communication_message.new_activity_message").ifExists((function(){this.find(".message_type img").click((function(){const e=o()(this),t=o.a.trim(e.attr("class"))
e.parents(".message_type").find("img").removeClass("selected")
e.addClass("selected").parents(".new_activity_message").find(".message_type_text").text(e.attr("title")).end().find(".activity_form").hide().end().find("textarea, :text").val("").end().find("."+t+"_form").show().find(".context_select").change()}))
this.find(".context_select").change((function(){const e=o()(this),t=e.val(),n=e.parents(".communication_message"),a=n.find("form")
a.attr("action",n.find("."+t+"_form_url").attr("href"))
a.data("context_name",this.options[this.selectedIndex].text)
a.data("context_code",t)
n.find(".roster_list").hide().find(":checkbox").each((function(){o()(this).attr("checked",false)}))
n.find("."+t+"_roster_list").show()})).triggerHandler("change")
this.find(".cancel_button").click((function(e){o()(this).parents(".communication_message").hide().prev(".new_activity_message").show()}))
this.find(".new_activity_message_link").click((function(e){e.preventDefault()
o()(this).parents(".communication_message").hide().next(".new_activity_message").find(".message_type img.selected").click().end().show().find(":text:visible:first").focus().select()}))
this.find("form.message_form").formSubmit({beforeSubmit(e){o()("button").attr("disabled",true)
o()("button.submit_button").text(f.t("status.posting_message","Posting Message..."))},success(e){o()("button").attr("disabled",false)
o()("button.submit_button").text("Post Message")
const t=o()(this).data("context_code")||""
const n=o()(this).data("context_name")||""
if(o()(this).hasClass("discussion_topic_form")){const a=e.discussion_topic
a.context_code=n
a.user_name=o()("#identity .user_name").text()
a.post_date=o.a.datetimeString(a.created_at)
a.topic_id=a.id
const i=o()(this).parents(".communication_message").find(".template")
const s=i.find(".communication_message").clone(true)
s.find(".header .title,.behavior_content .less_important a").attr("href",i.find("."+t+"_topic_url").attr("href"))
s.find(".add_entry_link").attr("href",i.find("."+t+"_topics_url").attr("href"))
s.find(".user_name").attr("href",i.find("."+t+"_user_url").attr("href"))
s.find(".topic_assignment_link,.topic_assignment_url").attr("href",i.find("."+t+"_assignment_url").attr("href"))
s.find(".attachment_name,.topic_attachment_url").attr("href",i.find("."+t+"_attachment_url").attr("href"))
const r={discussion_topic_id:a.id}
s.fillTemplateData({data:a,hrefValues:["topic_id","user_id","assignment_id","attachment_id"],avoid:".subcontent"})
s.find(".subcontent").fillTemplateData({data:r,hrefValues:["topic_id","user_id"]})
s.find(".subcontent form").attr("action",i.find("."+t+"_entries_url").attr("href"))
s.fillFormData(r,{object_name:"discussion_entry"})
o()(this).parents(".communication_message").after(s.hide())
s.slideDown()
o()(this).parents(".communication_message").slideUp()
o()(this).parents(".communication_message").prev(".new_activity_message").slideDown()}else o()(this).hasClass("announcement_form")||window.location.reload()},error(e){o()("button").attr("disabled",false)
o()("button.submit_button").text(f.t("errors.posting_message_failed","Post Failed, Try Again"))
o()(this).formErrors(e)}})}))
o()("#topic_list .show_all_messages_link").show().click((function(e){e.preventDefault()
o()("#topic_list .topic_message").show()
o()(this).hide()}))
let a=[]
function s(){a=[...document.querySelectorAll(".time_ago_date")].filter(o.a.expr.filters.visible)
r()}function r(){const e=a.shift()
if(e){const t=o()(e),n=t.data("parsed_date")||Date.parse(t.data("timestamp")||"")
if(n){const e=new Date-n
t.data("timestamp",n.toISOString())
t.data("parsed_date",n)
const a=o.a.fudgeDateForProfileTimezone(n)
const i=a.toString("MMM d, yyyy")+a.toString(" h:mmtt").toLowerCase()
let s=i
if(e<864e5)if(e<36e5)if(e<6e4)s=f.t("#time.less_than_a_minute_ago","less than a minute ago")
else{const t=parseInt(e/6e4,10)
s=f.t("#time.count_minutes_ago",{one:"1 minute ago",other:"%{count} minutes ago"},{count:t})}else{const t=parseInt(e/36e5,10)
s=f.t("#time.count_hours_ago",{one:"1 hour ago",other:"%{count} hours ago"},{count:t})}t.text(s)
t.attr("title",i)}setTimeout(r,1)}else setTimeout(s,6e4)}setTimeout(s,100)
const l=o()("#sequence_footer .sequence_details_url").filter(":last").attr("href")
if(l)o.a.ajaxJSON(l,"GET",{},e=>{const t=o()("#sequence_footer")
if(e.current_item){o()("#sequence_details .current").fillTemplateData({data:e.current_item.content_tag})
o.a.each({previous:".prev",next:".next"},(n,a)=>{const i=t.find(a)
if(e[n+"_item"]||e[n+"_module"]){const a=e[n+"_item"]&&e[n+"_item"].content_tag||e[n+"_module"]&&e[n+"_module"].context_module
if(!e[n+"_item"]){a.title=a.title||a.name
"unpublished"===a.workflow_state&&(a.title+=" ("+f.t("draft","Draft")+")")
a.text="previous"==n?f.t("buttons.previous_module","Previous Module"):f.t("buttons.next_module","Next Module")
i.addClass("module_button")}i.fillTemplateData({data:a})
e[n+"_item"]?i.attr("href",o.a.replaceTags(t.find(".module_item_url").attr("href"),"id",a.id)):i.attr("href",o.a.replaceTags(t.find(".module_url").attr("href"),"id",a.id)+"/items/"+("previous"===n?"last":"first"))}else i.hide()})
t.show()
o()(window).resize()}})
else{const e=o()("#sequence_footer")
if(e.length){const t=o()(e[0])
Promise.all([n.e(1),n.e(530)]).then(n.bind(null,"/j35")).then(()=>{t.moduleSequenceFooter({courseID:t.attr("data-course-id"),assetType:t.attr("data-asset-type"),assetID:t.attr("data-asset-id")})})}}o()("#right-side").delegate(".more_link","click",(function(e){const t=o()(this)
const n=t.parents("ul").children(":hidden").show()
t.closest("li").remove()
0===e.screenX&&n.first().find(":tabbable:first").focus()
return false}))
o()("#right-side").on("click",".disable-todo-item-link",(function(e){e.preventDefault()
const t=o()(this).parents("li, div.topic_message").last()
const n=o()(this).closest(".to-do-list > li").prev()
const a=n.find(".disable-todo-item-link").length&&n.find(".disable-todo-item-link")||o()(".todo-list-header")
const i=o()(this).data("api-href")
const s=o()(this).data("flash-message")
function r(e){t.confirmDelete({url:e,noMessage:true,success(){s&&o.a.flashMessage(s)
o()(this).slideUp((function(){o()(this).remove()
a.focus()}))}})}r(i)}))
setTimeout((function(){const e=document.getElementById("content")
if(!e)return
const t=e.querySelectorAll('a[href*="//"]:not([href*="'.concat(window.location.hostname,'"])'))
for(let e=0;e<t.length;e++){const n=o()(t[e])
if(n.hasClass("external"))continue
const a=n.not(".open_in_a_new_tab").not(":has(img)").not(".not_external").not(".exclude_external_icon")
if(a.length){const e=f.t("titles.external_link","Links to an external site.")
const t=o()('<span class="ui-icon ui-icon-extlink ui-icon-inline"/>').attr("title",e)
t.append(o()('<span class="screenreader-only"/>').text(e))
a.addClass("external").children("span.ui-icon-extlink").remove().end().html("<span>"+n.html()+"</span>").attr("target","_blank").attr("rel","noreferrer noopener").append(t)}}}),100)}))
n("JD5e")
function z(e){e.data("handled",true)
const t=e.data("url")||e.attr("href")
const n=e.data("method")
const a=e.attr("target")
const i=o()('<form method="post" action="'.concat(Object(p["a"])(t),'"></form>'))
const s='\n    <input name="_method" value="'.concat(Object(p["a"])(n),'" type="hidden" />\n    <input name="authenticity_token" type="hidden" />\n  ')
a&&i.attr("target",a)
i.hide().append(s).appendTo("body").submit()}function T(e){const t=e.data("confirm")
if(!t)return true
return confirm(t)}o()(document).delegate("a[data-confirm], a[data-method], a[data-remove]","click",(function(e){const t=o()(this)
if(t.data("handled")||!T(t))return false
if(t.data("remove")){O(t)
return false}if(t.data("method")){z(t)
return false}}))
function O(e){const t=e.data("remove")
let n=e
const a=e.data("url")
const i=e.closest(":ui-popup").popup("option","trigger").data("KyleMenu")
i&&i.opts.appendMenuTo&&(n=i.$placeholder)
const s=n.closest(t)
s.bind({beforeremove(){s.hide()},remove(){s.remove()}})
s.trigger("beforeremove")
const r=()=>s.trigger("remove")
const l=()=>s.show()
a?o.a.ajaxJSON(a,"DELETE",{},r,l):r()}var C=n("lVr/")
o()(document).on("mousedown click keydown",".al-trigger",(function(e){const t=o()(this)
if(t.data("kyleMenu"))return
let n=o.a.extend({noButton:true},t.data("kyleMenuOptions"))
t.data("append-to-body")&&(n.appendMenuTo="body")
n=o.a.extend(n,{popupOpts:{position:{my:t.data("popup-my"),at:t.data("popup-at"),within:t.data("popup-within")}}})
new C["a"](t,n)
t.trigger(e)}))
function S(e){return function(){let t
const n=o()(this)
if(!(t=n.data("textWhileTarget".concat(e))))return
const a="textWhileTarget".concat("Hidden"===e?"Shown":"Hidden")
const i=n.data(a)
i||n.data(a,n.text())
n.text(t)}}function D(e,t,n){let a
null==t&&(t=e.is(":ui-dialog:hidden")||"true"!==e.attr("aria-expanded"))
const i=o()("[aria-controls*=".concat(e.attr("id"),"]"))
i.filter((function(){return o()(this).data("hideWhileTargetShown")})).toggle(!t)
if(n&&void 0!==n.attr("aria-expanded")){n.attr("aria-expanded",!("true"===n.attr("aria-expanded")))
e.toggle("true"===n.attr("aria-expanded"))}else e.attr("aria-expanded","".concat(t)).toggle(t)
if(e.is(":ui-dialog")||(a=e.data("turnIntoDialog"))){if(a&&t){a=o.a.extend({autoOpen:false,close(){D(e,false)}},a)
e.dialog(a).fixDialogButtons()}if(t){e.dialog("open")
e.data("read-on-open")&&e.dialog("widget").attr("aria-live","assertive").attr("aria-atomic","true")}else e.dialog("isOpen")&&e.dialog("close")}i.each(S(t?"Shown":"Hidden"))}const I={bind(){o()(document).on("click change keyclick",".element_toggler[aria-controls]",(function(e){let t
const n=o()(this)
if(n.is('input[type="checkbox"]')){if("click"===e.type)return
t=n.prop("checked")}"click"===e.type&&e.preventDefault()
let a=n.closest(".user_content")
a.length||(a=o()(document.body))
const i=a.find("#".concat(n.attr("aria-controls").replace(/\s/g,", #")))
i.length&&D(i,t,n)
const s=n.find('i[class*="icon-mini-arrow"].auto_rotate')
if(s.length){s.toggleClass("icon-mini-arrow-down")
s.toggleClass("icon-mini-arrow-right")}}))}}
I.bind()
const E=13
o()(document).on("keydown",".ic-Super-toggle__input",e=>{e.which===E&&o()(e.target).click()})
Object(l["a"])(JSON.parse('{"de":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura wurde für diese Canvas-Website deaktiviert"},"links":{"minimize_embedded_kaltura_content":"Eingebettete Inhalte minimieren"}}},"hu":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"A Kaltura le lett tiltva ezen a Canvas-oldalon"},"links":{"minimize_embedded_kaltura_content":"Beágyazott tartalom méretének csökkentése"}}}}'))
var N=r["default"].scoped("instructure_inline_media_comment")
n("f3bb")
const V={buildMinimizerLink:()=>o()('<a href="#" style="font-size: 0.8em;">\n      '.concat(Object(p["a"])(N.t("links.minimize_embedded_kaltura_content","Minimize embedded content")),"\n    </a>")),buildCommentHolder:e=>o()('<div><div class="innerholder" tabindex="-1" style="margin-bottom: 15px;"></div></div>'),getMediaCommentId(e){let t
let n=e.data("media_comment_id")||e.find(".media_comment_id:first").text()
n||(t=e.attr("id"))
t&&t.match(/^media_comment_/)&&(n=t.substring(14))
return n},collapseComment(e){H(e.find("video,audio").data("mediaelementplayer"),e=>e.pause())
e.remove()
Object(k["a"])("hide_embedded_content","hide_media")}}
const M=e=>{o()(e.target).find("div.mejs-audio").focus()}
const P=300
const K=e=>{const t=e.closest("td")
return t.length>0}
const q=e=>{const t=e.closest("td").css("width").replace("px","")
return t<P}
const A=e=>K(e)&&q(e)
const R=e=>{const t=e.closest("td")
const n=t.css("width")
t.data("orig-width",n)
t.css("width","".concat(P,"px"))}
o()(document).on("click","a.instructure_inline_media_comment",Object(h["a"])((function(){if(!INST.kalturaSettings){alert(N.t("alerts.kaltura_disabled","Kaltura has been disabled for this Canvas site"))
return}const e=o()(this)
let t="video"
const n=V.getMediaCommentId(e)
const a=V.buildCommentHolder(e)
A(e)&&R(e)
e.after(a)
e.hide();("audio"===e.data("media_comment_type")||e.is(".audio_playback, .audio_comment, .instructure_audio_link"))&&(t="audio")
a.children("div").mediaComment("show_inline",n,t,e.data("download")||e.attr("href"))
const i=V.buildMinimizerLink()
i.appendTo(a).click(Object(h["a"])(()=>{const t=e.closest("td")
e.show().focus()
t.css("width",t.data("orig-width"))
V.collapseComment(a)}))
Object(k["a"])("show_embedded_content","show_media")
a.find(".innerholder").css("outline","none")
a.find(".innerholder").on("focus",M)})))
function H(e,t){return"undefined"!==typeof e&&null!==e?t(e):void 0}if(ENV.ping_url){const e=setInterval(()=>{document.hidden||o.a.post(ENV.ping_url).fail(t=>{401===t.status&&clearInterval(e)})},18e4)}Object(l["a"])(JSON.parse('{"de":{"locked_image_24f37a16":"Gesperrtes Bild"}}'))
var J=r["default"].scoped("broken_images")
function W(e){o()(e).on("error",e=>{e.currentTarget.src?o.a.get(e.currentTarget.src).fail(t=>{403===t.status?o()(e.currentTarget).attr({src:"/images/svg-icons/icon_lock.svg",alt:J.t("Locked image"),width:100,height:100}):o()(e.currentTarget).addClass("broken-image")}):o()(e.currentTarget).addClass("broken-image")})}function L(){Array.from(document.querySelectorAll('img:not([src=""])')).forEach(W)}o()(document).ready(()=>L())
const G=".lti-thumbnail-launch"
function F(e){e.preventDefault()
B.launch(o()(e.target).closest(G))}class Y{constructor(){o()(document.body).delegate(G,"click",F)}launch(e){const t=JSON.parse(e.attr("target"))
const n=o()("<iframe/>",{src:e.attr("href"),allowfullscreen:"",width:t.displayWidth||500,height:t.displayHeight||500})
e.replaceWith(n)}}const B=new Y(G)
ENV.page_view_update_url&&n.e(594).then(n.bind(null,"MOpQ"))
o()("#skip_navigation_link").on("click",Object(h["a"])((function(){o()(o()(this).attr("href")).attr("tabindex",-1).focus()})))
const U=1200
function Q(){const e=o()("#section-tabs li a")
if(e.length){const t=o()("body").hasClass("course-menu-expanded")||o()(document).width()>=U-15?0:-1
e.attr("tabIndex",t)}}o()(Q)
o()(window).on("resize",i.a.debounce(Q,50))
o()("body").on("click","#courseMenuToggle",()=>{o()("body").toggleClass("course-menu-expanded")
m()
o()("#left-side").css({display:o()("body").hasClass("course-menu-expanded")?"block":"none"})
Q()})}}])

//# sourceMappingURL=503-c-2553e41b02.js.map