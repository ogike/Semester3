(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[54],{"7FZx":function(t,e,i){"use strict"
var s=i("pQTu")
var n=i("m0r6")
Object(n["a"])(JSON.parse('{"de":{"publish_btn_module":{"buttons":{"publish":"Veröffentlichen","published":"Veröffentlicht","publishing":"Wird veröffentlicht ...","unpublish":"Veröffentlichung rückgängig machen","unpublishing":"Veröffentlichung wird rückgängig gemacht ..."}},"published_click_to_unpublish_db016671":"Veröffentlicht.  Klicken Sie auf die Option „Veröffentlichung zurücknehmen“.","published_click_to_unpublish_title_358122a":"Veröffentlicht.  Hier klicken, um die Veröffentlichung von %{title} zurückzunehmen","unpublished_click_to_publish_6a6d12e1":"Veröffentlichung zurückgenommen.  Klicken Sie, um zu veröffentlichen.","unpublished_click_to_publish_title_7c57293f":"Veröffentlichung zurückgenommen.  Klicken Sie, um %{title} zu veröffentlichen."},"hu":{"publish_btn_module":{"buttons":{"publish":"Publikálás","published":"Publikálva","publishing":"Publikálás alatt...","unpublish":"Publikálás visszavonása","unpublishing":"Publikálás visszavonása folyamatban..."}}}}'))
i("jQeR")
i("0sPK")
var l=s["default"].scoped("publish_btn_module")
var o=i("ouhR")
var r=i.n(o)
var a=i("FIFq")
var u=i.n(a)
var h=i("5Ky4")
i("Z+Ib")
var c=function(t,e){for(var i in e)d.call(e,i)&&(t[i]=e[i])
function s(){this.constructor=t}s.prototype=e.prototype
t.prototype=new s
t.__super__=e.prototype
return t},d={}.hasOwnProperty
e["a"]=function(t){c(e,t)
function e(){return e.__super__.constructor.apply(this,arguments)}e.prototype.disabledClass="disabled"
e.prototype.publishClass="btn-publish"
e.prototype.publishedClass="btn-published"
e.prototype.unpublishClass="btn-unpublish"
e.optionProperty("title")
e.optionProperty("publishText")
e.optionProperty("unpublishText")
e.optionProperty("disabledForModeration")
e.prototype.tagName="button"
e.prototype.className="btn"
e.prototype.events={click:"click",hover:"hover"}
e.prototype.els={i:"$icon",".publish-text":"$text"}
e.prototype.initialize=function(){var t
e.__super__.initialize.apply(this,arguments)
return null!=(t=this.model)?t.on("change:unpublishable",(i=this,function(){if(!i.model.get("unpublishable")&&i.model.get("published"))return i.disable()})):void 0
var i}
e.prototype.setElement=function(){e.__super__.setElement.apply(this,arguments)
this.$el.attr("data-tooltip","")
if(!this.model.get("unpublishable")&&this.model.get("published"))return this.disable()}
e.prototype.hover=function(t){var e
e=t.type
if("mouseenter"===e){if(this.keepState||this.isPublish()||this.isDisabled())return
this.renderUnpublish()
return this.keepState=true}this.keepState=false
if(!(this.isPublish()||this.isDisabled()))return this.renderPublished()}
e.prototype.click=function(t){t.preventDefault()
t.stopPropagation()
if(this.isDisabled())return
this.keepState=true
if(this.isPublish())return this.publish()
if(this.isUnpublish()||this.isPublished())return this.unpublish()}
e.prototype.addAriaLabel=function(t){var e
e=this.$el.find("span.screenreader-only.accessible_label")
e.length||(e=r()('<span class="screenreader-only accessible_label"></span>').appendTo(this.$el))
e.text(t)
return this.$el.attr("aria-label",t)}
e.prototype.setFocusToElement=function(){return this.$el.focus()}
e.prototype.publish=function(t){this.renderPublishing()
return this.model.publish().always((e=this,function(){e.trigger("publish")
e.enable()
e.render()
return e.setFocusToElement()}))
var e}
e.prototype.unpublish=function(t){this.renderUnpublishing()
return this.model.unpublish().done((e=this,function(){e.trigger("unpublish")
e.disable()
e.render()
return e.setFocusToElement()})).fail(function(t){return function(e){403===e.status&&r.a.flashError(t.model.disabledMessage())
t.disable()
t.renderPublished()
return t.setFocusToElement()}}(this))
var e}
e.prototype.isPublish=function(){return this.$el.hasClass(this.publishClass)}
e.prototype.isPublished=function(){return this.$el.hasClass(this.publishedClass)}
e.prototype.isUnpublish=function(){return this.$el.hasClass(this.unpublishClass)}
e.prototype.isDisabled=function(){return this.$el.hasClass(this.disabledClass)}
e.prototype.disable=function(){return this.$el.addClass(this.disabledClass)}
e.prototype.enable=function(){return this.$el.removeClass(this.disabledClass)}
e.prototype.reset=function(){this.$el.removeClass(this.publishClass+" "+this.publishedClass+" "+this.unpublishClass)
this.$icon.removeClass("icon-publish icon-unpublish icon-unpublished")
return this.$el.removeAttr("aria-label")}
e.prototype.publishLabel=function(){if(this.publishText)return this.publishText
if(this.title)return l.t("Unpublished.  Click to publish %{title}.",{title:this.title})
return l.t("Unpublished.  Click to publish.")}
e.prototype.unpublishLabel=function(){if(this.unpublishText)return this.unpublishText
if(this.title)return l.t("Published.  Click to unpublish %{title}.",{title:this.title})
return l.t("Published.  Click to unpublish.")}
e.prototype.render=function(){this.$el.attr("role","button")
this.$el.attr("tabindex","0")
this.$el.html('<i></i><span class="publish-text"></span>')
this.cacheEls()
this.$text.attr("tabindex","-1")
this.model.get("published")?this.renderPublished():this.renderPublish()
return this}
e.prototype.renderPublish=function(){return this.renderState({text:l.t("buttons.publish","Publish"),label:this.publishLabel(),buttonClass:this.publishClass,iconClass:"icon-unpublish"})}
e.prototype.renderPublished=function(){return this.renderState({text:l.t("buttons.published","Published"),label:this.unpublishLabel(),buttonClass:this.publishedClass,iconClass:"icon-publish icon-Solid"})}
e.prototype.renderUnpublish=function(){var t
t=l.t("buttons.unpublish","Unpublish")
return this.renderState({text:t,buttonClass:this.unpublishClass,iconClass:"icon-unpublish"})}
e.prototype.renderPublishing=function(){var t
this.disable()
t=l.t("buttons.publishing","Publishing...")
return this.renderState({text:t,buttonClass:this.publishClass,iconClass:"icon-publish icon-Solid"})}
e.prototype.renderUnpublishing=function(){var t
this.disable()
t=l.t("buttons.unpublishing","Unpublishing...")
return this.renderState({text:t,buttonClass:this.unpublishClass,iconClass:"icon-unpublished"})}
e.prototype.renderState=function(t){this.reset()
this.$el.addClass(t.buttonClass)
this.$el.attr("aria-pressed",t.buttonClass===this.publishedClass)
this.$icon.addClass(t.iconClass)
this.$text.html("&nbsp;"+Object(h["a"])(t.text))
if(this.model.get("disabledForModeration"))return this.disableWithMessage("You do not have permissions to edit this moderated assignment")
if(null==this.model.get("unpublishable")||this.model.get("unpublishable")){this.enable()
this.$el.attr("title",t.text)
if(t.label)return this.addAriaLabel(t.label)}else if(this.model.get("published"))return this.disableWithMessage(this.model.disabledMessage())}
e.prototype.disableWithMessage=function(t){this.disable()
this.$el.attr("aria-disabled",true)
this.$el.attr("title",t)
return this.addAriaLabel(t)}
return e}(u.a.View)},B1vq:function(t,e,i){"use strict"
var s=i("ouhR")
var n=i.n(s)
i("s/PJ")
n.a.fn.scrollToVisible=function(t){const e={}
const i=n()(t)
if(0===i.length)return
let s=i.offset(),l=i.outerWidth(),o=i.outerHeight(),r=s.top,a=r+o,u=s.left,h=u+l,c="html,body"==this.selector?n.a.windowScrollTop():this.scrollTop(),d=this.scrollLeft(),p=this.outerHeight(),f=this.outerWidth()
if("html,body"!=this.selector){let t=n()("body").offset()
this.each((function(){try{t=n()(this).offset()
return false}catch(t){}}))
r-=t.top
a-=t.top
u-=t.left
h-=t.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){p=n()(window).height()
n()("#wizard_box:visible").length>0&&(p-=n()("#wizard_box:visible").height())
f=n()(window).width()
r-=c
u-=d
a-=c
h-=d}r<0||p<o&&a>p?e.scrollTop=r+c:a>p&&(e.scrollTop=a+c-p+20)
u<0?e.scrollLeft=u+d:h>f&&(e.scrollLeft=h+d-f+20)
1==e.scrollTop&&(e.scrollTop=0)
1==e.scrollLeft&&(e.scrollLeft=0)
this.scrollTop(e.scrollTop)
this.scrollLeft(e.scrollLeft)
return this}},RhCJ:function(t,e,i){"use strict"
i.d(e,"a",(function(){return s}))
function s(t,e,i){if("input"===t.as){if("children"===e&&t.children||void 0==t.value)return new Error("Prop `value` and not `children` must be supplied if `".concat(i,' as="input"`'))}else{if("value"===e&&void 0!=t.value)return new Error("Prop `children` and not `value` must be supplied unless `".concat(i,' as="input"`'))
if(!t.children)return new Error("Prop `children` should be supplied unless `".concat(i,' as="input"`.'))}return}},goGJ:function(t,e,i){"use strict"
i.d(e,"a",(function(){return l}))
var s=i("ouhR")
var n=i.n(s)
i("rEd+")
function l(){return n()(".vdd_tooltip_link").tooltip({position:{my:"center bottom",at:"center top-10",collision:"fit fit"},tooltipClass:"center bottom vertical",content(){const t=n()(this).data("tooltipSelector")
try{const e=document.querySelector(t)
return n()(e).html()}catch(t){}}})}},p6Wi:function(t,e,i){"use strict"
var s=i("pQTu")
var n=i("m0r6")
Object(n["a"])(JSON.parse('{"de":{"buttons":{"cancel":"Abbrechen","delete":"Löschen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Möchten Sie dies wirklich löschen?"}}},"hu":{"buttons":{"cancel":"Mégse","delete":"Törlés"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Biztos benne, hogy törli ezt?"}}}}'))
i("jQeR")
i("0sPK")
var l=s["default"].scoped("instructure_misc_plugins")
var o=i("ouhR")
var r=i.n(o)
var a=i("5Ky4")
var u=i("JD5e")
i("jYyc")
i("YGE8")
i("B1vq")
i("s/PJ")
r.a.fn.setOptions=function(t,e){let i=t?"<option value=''>"+Object(a["a"])(t)+"</option>":""
null==e&&(e=[])
e.forEach(t=>{const e=Object(a["a"])(t)
i+='<option value="'+e+'">'+e+"</option>"})
return this.html(r.a.raw(i))}
r.a.fn.ifExists=function(t){this.length&&t.call(this,this)
return this}
r.a.fn.scrollbarWidth=function(){const t=r()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),e=t.find("div")
const i=e.innerWidth()
t.css("overflow-y","scroll")
const s=e.innerWidth()
t.remove()
return i-s}
r.a.fn.dim=function(t){return this.animate({opacity:.4},t)}
r.a.fn.undim=function(t){return this.animate({opacity:1},t)}
r.a.fn.confirmDelete=function(t){t=r.a.extend({},r.a.fn.confirmDelete.defaults,t)
const e=this
let i=null
let s=true
t.noMessage=t.noMessage||t.no_message
const n=function(){if(!s){t.cancelled&&r.a.isFunction(t.cancelled)&&t.cancelled.call(e)
return}t.confirmed||(t.confirmed=function(){e.dim()})
t.confirmed.call(e)
if(t.url){t.success||(t.success=function(t){e.fadeOut("slow",()=>{e.remove()})})
const s=t.prepareData?t.prepareData.call(e,i):{}
s.authenticity_token=Object(u["a"])()
r.a.ajaxJSON(t.url,"DELETE",s,i=>{t.success.call(e,i)},(i,s,n,l)=>{t.error&&r.a.isFunction(t.error)?t.error.call(e,i,s,n,l):r.a.ajaxJSON.unhandledXHRs.push(s)})}else{t.success||(t.success=function(){e.fadeOut("slow",()=>{e.remove()})})
t.success.call(e)}}
if(t.message&&!t.noMessage&&!r.a.skipConfirmations){if(t.dialog){s=false
const e="object"===typeof t.dialog?t.dialog:{}
const o=t.url.includes("assignments")?"btn-danger":"btn-primary"
i=r()(t.message).dialog(r.a.extend({},{modal:true,close:n,buttons:[{text:l.t("#buttons.cancel","Cancel"),click(){r()(this).dialog("close")}},{text:l.t("#buttons.delete","Delete"),class:o,click(){s=true
r()(this).dialog("close")}}]},e))
return}s=confirm(t.message)}n()}
r.a.fn.confirmDelete.defaults={get message(){return l.t("confirms.default_delete_thing","Are you sure you want to delete this?")}}
r.a.fn.fragmentChange=function(t){if(t&&true!==t){const i=(window.location.search||"").replace(/^\?/,"").split("&")
let s=null
for(var e=0;e<i.length;e++){const t=i[e]
t&&0===t.indexOf("hash=")&&(s="#"+t.substring(5))}this.bind("document_fragment_change",t)
const n=this
let l=false
for(e=0;e<r.a._checkFragments.fragmentList.length;e++){const t=r.a._checkFragments.fragmentList[e]
t.doc[0]==n[0]&&(l=true)}l||r.a._checkFragments.fragmentList.push({doc:n,fragment:""})
r()(window).bind("hashchange",r.a._checkFragments)
setTimeout(()=>{s&&s.length>0?n.triggerHandler("document_fragment_change",s):n&&n[0]&&n[0].location&&n[0].location.hash.length>0&&n.triggerHandler("document_fragment_change",n[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
r.a._checkFragments=function(){const t=r.a._checkFragments.fragmentList
for(let e=0;e<t.length;e++){const i=t[e]
const s=i.doc
if(s[0].location.hash!=i.fragment){s.triggerHandler("document_fragment_change",s[0].location.hash)
i.fragment=s[0].location.hash
r.a._checkFragments.fragmentList[e]=i}}}
r.a._checkFragments.fragmentList=[]
r.a.fn.clickLink=function(){const t=this.eq(0)
t.hasClass("disabled_link")||t.click()}
r.a.fn.showIf=function(t){if(r.a.isFunction(t))return this.each((function(e){r()(this).showIf(t.call(this))}))
t?this.show():this.hide()
return this}
r.a.fn.disableIf=function(t){r.a.isFunction(t)&&(t=t.call(this))
this.prop("disabled",!!t)
return this}
r.a.fn.indicate=function(t){t=t||{}
let e
if("remove"==t){e=this.data("indicator")
e&&e.remove()
return}r()(".indicator_box").remove()
let i=this.offset()
t&&t.offset&&(i=t.offset)
const s=this.width()
const n=this.height()
const l=(t.container||this).zIndex()
e=r()(document.createElement("div"))
e.css({width:s+6,height:n+6,top:i.top-3,left:i.left-3,zIndex:l+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
e.addClass("indicator_box")
e.mouseover((function(){r()(this).stop().fadeOut("fast",(function(){r()(this).remove()}))}))
this.data("indicator")&&this.indicate("remove")
this.data("indicator",e)
r()("body").append(e)
t&&t.singleFlash?e.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){r()(this).remove()})):e.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){r()(this).remove()}))
t&&t.scroll&&r()("html,body").scrollToVisible(e)}
r.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
r.a.fn.log=function(t){console.log("%s: %o",t,this)
return this}
r.a.fn.fillWindowWithMe=function(t){const e=r.a.extend({minHeight:400},t),i=r()(this),s=r()("#wrapper"),n=r()("#main"),l=r()("#not_right_side"),o=r()(window),a=r()(this).add(e.alsoResize)
function u(){a.height(0)
const t=o.height()-(s.offset().top+s.outerHeight())+(n.height()-l.height()),u=Math.max(400,t)
a.height(u)
r.a.isFunction(e.onResize)&&e.onResize.call(i,u)}u()
o.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",u)
return this}
r.a.fn.autoGrowInput=function(t){t=r.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},t)
this.filter("input:text").each((function(){let e=t.minWidth||r()(this).width(),i="",s=r()(this),n=r()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:s.css("fontSize"),fontFamily:s.css("fontFamily"),fontWeight:s.css("fontWeight"),letterSpacing:s.css("letterSpacing"),whiteSpace:"nowrap"}),l=function(){setTimeout(()=>{if(i===(i=s.val()))return
n.text(i)
const l=n.width(),o=l+t.comfortZone>=e?l+t.comfortZone:e,r=s.width(),a=o<r&&o>=e||o>e&&o<t.maxWidth
a&&s.width(o)})}
n.insertAfter(s)
r()(this).bind("keyup keydown blur update change",l)}))
return this}
r.a}}])

//# sourceMappingURL=54-c-c6741ede86.js.map