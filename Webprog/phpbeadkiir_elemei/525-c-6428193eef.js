(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[525,530,584],{"/j35":function(e,t,s){"use strict"
s.r(t)
var n=s("ouhR")
var a=s.n(n)
var i=s("3O+N")
var o=s.n(i)
var l=s("pQTu")
var r=s("m0r6")
Object(r["a"])(JSON.parse('{"de":{"jquery":{"module_sequence_footer":{"next":"Nächste/r","previous":"Vorherige"}},"module_navigation_97043417":"Modul-Navigation"},"hu":{"jquery":{"module_sequence_footer":{"next":"Következő","previous":"Előző"}},"module_navigation_97043417":"Modulnavigáció"}}'))
s("jQeR")
s("0sPK")
l["default"].scoped("jquery.module_sequence_footer")
s("DfGn")
var c=o.a.default
var u=c.template,d=c.templates=c.templates||{}
var h="jquery/ModuleSequenceFooter"
d[h]=u((function(e,t,s,n,a){this.compilerInfo=[4,">= 1.0.0"]
s=this.merge(s,e.helpers)
a=a||{}
var i,o,l,r="",c="function",u=this.escapeExpression,d=s.helperMissing,h=this
function m(e,t){var n,a,i,o=""
o+='\n      <a\n        href="'+u((n=(n=e&&e.previous,null==n||false===n?n:n.url),typeof n===c?n.apply(e):n))+'"\n        role="button"\n        class="Button module-sequence-footer-button--previous"\n        data-tooltip="right"\n        data-html-tooltip-title="'+u((n=(n=e&&e.previous,null==n||false===n?n:n.tooltip),typeof n===c?n.apply(e):n))+'"\n        aria-describedby="msf'
if(a=s.instanceNumber)n=a.call(e,{hash:{},data:t})
else{a=e&&e.instanceNumber
n=typeof a===c?a.call(e,{hash:{},data:t}):a}o+=u(n)+'-previous-desc"\n      >\n        <i class="icon-mini-arrow-left"></i>'+u((a=s.t||e&&e.t,i={hash:{scope:"jquery.module_sequence_footer"},data:t},a?a.call(e,"previous","Previous",i):d.call(e,"t","previous","Previous",i)))+'\n        <span id="msf'
if(a=s.instanceNumber)n=a.call(e,{hash:{},data:t})
else{a=e&&e.instanceNumber
n=typeof a===c?a.call(e,{hash:{},data:t}):a}o+=u(n)+'-previous-desc" class="hidden" hidden>'+u((n=(n=e&&e.previous,null==n||false===n?n:n.tooltipText),typeof n===c?n.apply(e):n))+"</span>\n      </a>\n    "
return o}function p(e,t){var n,a,i,o=""
o+='\n      <span class="module-sequence-footer-button--next" data-tooltip="left" data-html-tooltip-title="'+u((n=(n=e&&e.next,null==n||false===n?n:n.tooltip),typeof n===c?n.apply(e):n))+'">\n        <a\n          href="'+u((n=(n=e&&e.next,null==n||false===n?n:n.url),typeof n===c?n.apply(e):n))+'"\n          role="button"\n          class="Button"\n          aria-describedby="msf'
if(a=s.instanceNumber)n=a.call(e,{hash:{},data:t})
else{a=e&&e.instanceNumber
n=typeof a===c?a.call(e,{hash:{},data:t}):a}o+=u(n)+'-next-desc"\n          '
n=s["if"].call(e,(n=e&&e.next,null==n||false===n?n:n.modules_tab_disabled),{hash:{},inverse:h.noop,fn:h.program(4,_,t),data:t});(n||0===n)&&(o+=n)
o+="\n          "+u((a=s.disabledIf||e&&e.disabledIf,i={hash:{},data:t},a?a.call(e,(n=e&&e.next,null==n||false===n?n:n.modules_tab_disabled),i):d.call(e,"disabledIf",(n=e&&e.next,null==n||false===n?n:n.modules_tab_disabled),i)))+"\n        >\n          "+u((a=s.t||e&&e.t,i={hash:{scope:"jquery.module_sequence_footer"},data:t},a?a.call(e,"next","Next",i):d.call(e,"t","next","Next",i)))+'<i class="icon-mini-arrow-right"></i>\n          <span id="msf'
if(a=s.instanceNumber)n=a.call(e,{hash:{},data:t})
else{a=e&&e.instanceNumber
n=typeof a===c?a.call(e,{hash:{},data:t}):a}o+=u(n)+'-next-desc" class="hidden" hidden>'+u((n=(n=e&&e.next,null==n||false===n?n:n.tooltipText),typeof n===c?n.apply(e):n))+"</span>\n        </a>\n      </span>\n    "
return o}function _(e,t){return' aria-disabled="true" '}r+="<div class='module-sequence-padding'></div>\n<div class='module-sequence-footer' role=\"navigation\" aria-label=\""+u((o=s.t||t&&t.t,l={hash:{i18n_inferred_key:true},data:a},o?o.call(t,"module_navigation_97043417","Module Navigation",l):d.call(t,"t","module_navigation_97043417","Module Navigation",l)))+'">\n  <div class="module-sequence-footer-content">\n    '
i=s["if"].call(t,(i=t&&t.previous,null==i||false===i?i:i.show),{hash:{},inverse:h.noop,fn:h.program(1,m,a),data:a});(i||0===i)&&(r+=i)
r+="\n\n    "
i=s["if"].call(t,(i=t&&t.next,null==i||false===i?i:i.show),{hash:{},inverse:h.noop,fn:h.program(3,p,a),data:a});(i||0===i)&&(r+=i)
r+="\n  </div>\n</div>\n"
return r}))
var m=d[h]
var p=s("GLiE")
var _=s.n(p)
Object(r["a"])(JSON.parse('{"de":{"choose_the_next_mastery_path_b035b727":"Wählen Sie den nächsten Leistungsziel-Pfad","next_item_2d1ddc96":"Weiter: *Objekt*","next_mastery_path_is_currently_locked_a9253711":"Der nächste Leistungsziel-Pfad ist derzeit gesperrt.","next_mastery_path_is_still_processing_please_perio_bb0121af":"Der nächste Leistungsziel-Pfad ist noch in Bearbeitung, bitte aktualisieren Sie regelmäßig die Seite.","sequence_footer":{"next_module":"Nächstes Modul:","next_module_desc":"Nächstes Modul: *module*","prev_module":"Vorheriges Modul:","prev_module_desc":"Vorheriges Modul: *module*","prev_module_item_desc":"Vorheriges: *item*"}},"hu":{"sequence_footer":{"next_module":"Következő modul:","next_module_desc":"Következő modul: *module*","prev_module":"Előző modul:","prev_module_desc":"Előző modul: *modul*","prev_module_item_desc":"Előző: *elem*"}}}'))
var f=l["default"].scoped("sequence_footer")
var v=s("5Ky4")
s("jYyc")
s.d(t,"default",(function(){return g}))
let b=0
a.a.fn.moduleSequenceFooter=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
if(!e.assetType||!e.assetID)throw"Option must be set with assetType and assetID"
this.msfAnimation=e=>this.find(".module-sequence-padding, .module-sequence-footer").toggleClass("no-animation",!e)
if(!this.data("msfInstance")){this.msfInstance=new a.a.fn.moduleSequenceFooter.MSFClass(e)
this.data("msfInstance",this.msfInstance)
this.msfInstance.fetch().done(()=>{if(this.msfInstance.hide){this.hide()
return}this.html(m({instanceNumber:this.msfInstance.instanceNumber,previous:this.msfInstance.previous,next:this.msfInstance.next}))
e&&void 0!==e.animation&&this.msfAnimation(e.animation)
this.show()
a()(window).triggerHandler("resize")})}return this}
class g{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
this.iconClasses={ModuleItem:"icon-module",File:"icon-paperclip",Page:"icon-document",Discussion:"icon-discussion",Assignment:"icon-assignment",Quiz:"icon-quiz",ExternalTool:"icon-link","Lti::MessageHandler":"icon-link"}
this.success=e=>{this.modules=e.modules
if(!(e&&e.items&&1===e.items.length)){this.hide=true
return}this.item=e.items[0];(this.previous.show=this.item.prev)&&this.buildPreviousData()
if(this.item.next||this.awaitingPathProgress()){this.next.show=true
const e=this.awaitingPathProgress()
e?this.buildNextPathData():this.buildNextData()}}
this.instanceNumber=b++
this.courseID=e.courseID||"undefined"!==typeof ENV&&ENV.course_id
this.assetID=e.assetID
this.assetType=e.assetType
this.location=e.location||document.location
this.previous={}
this.next={}
this.url="/api/v1/courses/".concat(this.courseID,"/module_item_sequence")}getQueryParams(e){let t
e=e.split("+").join(" ")
const s={}
const n=/[?&]?([^=]+)=([^&]*)/g
while(t=n.exec(e))s[decodeURIComponent(t[1])]=decodeURIComponent(t[2])
return s}fetch(){const e=this.getQueryParams(this.location.search)
return e.module_item_id?a.a.ajaxJSON(this.url,"GET",{asset_type:"ModuleItem",asset_id:e.module_item_id,frame_external_urls:true},this.success,null,{}):a.a.ajaxJSON(this.url,"GET",{asset_type:this.assetType,asset_id:this.assetID,frame_external_urls:true},this.success,null,{})}buildPreviousData(){this.previous.url=this.item.prev.html_url
if(this.item.current.module_id===this.item.prev.module_id){this.previous.tooltip="<i class='".concat(Object(v["a"])(this.iconClasses[this.item.prev.type]),"'></i> ").concat(Object(v["a"])(this.item.prev.title))
this.previous.tooltipText=f.t("prev_module_item_desc","Previous: *item*",{wrapper:this.item.prev.title})}else{const e=_.a.find(this.modules,e=>e.id===this.item.prev.module_id)
this.previous.tooltip="<strong style='float:left'>".concat(Object(v["a"])(f.t("prev_module","Previous Module:")),"</strong> <br> ").concat(Object(v["a"])(e.name))
this.previous.tooltipText=f.t("prev_module_desc","Previous Module: *module*",{wrapper:e.name})}}buildNextPathData(){const e=this.item.mastery_path
if(e.awaiting_choice){this.next.url=e.choose_url
this.next.tooltipText=f.t("Choose the next mastery path")}else{const t=f.t("Next mastery path is currently locked")
const s=f.t("Next mastery path is still processing, please periodically refresh the page")
const n=e.locked?t:s
this.next.modules_tab_disabled=e.modules_tab_disabled
this.next.url=e.modules_url
this.next.tooltipText=n}this.next.tooltip="<i class='".concat(Object(v["a"])(this.iconClasses.ModuleItem),"'/> ").concat(this.next.tooltipText)}buildNextData(){this.next.url=this.item.next.html_url
if(this.item.current.module_id===this.item.next.module_id){this.next.tooltip="<i class='".concat(Object(v["a"])(this.iconClasses[this.item.next.type]),"'></i> ").concat(Object(v["a"])(this.item.next.title))
this.next.tooltipText=f.t("Next: *item*",{wrapper:this.item.next.title})}else{const e=_.a.find(this.modules,e=>e.id===this.item.next.module_id)
this.next.tooltip="<strong style='float:left'>".concat(Object(v["a"])(f.t("next_module","Next Module:")),"</strong> <br> ").concat(Object(v["a"])(e.name))
this.next.tooltipText=f.t("next_module_desc","Next Module: *module*",{wrapper:e.name})}}awaitingPathProgress(){const e=this.item.mastery_path
if(e&&e.is_student)return e.awaiting_choice||e.locked||e.still_processing}}a.a.fn.moduleSequenceFooter.MSFClass=g},"0crz":function(e,t,s){"use strict"
var n=s("ouhR")
var a=s.n(n)
var i=s("pQTu")
var o=s("m0r6")
Object(o["a"])(JSON.parse('{"de":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"zitierten Text zeigen","word_separator":" "}}},"hu":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"idézett szöveg megjelenítése","word_separator":" "}}}}'))
s("jQeR")
s("0sPK")
var l=i["default"].scoped("lib.text_helper")
var r=s("5Ky4")
var c,u,d
c="LINK-PLACEHOLDER"
u=/\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))|(LINK-PLACEHOLDER)/gi
t["a"]=d={quoteClump:function(e){return"<div class='quoted_text_holder'> <a href='#' class='show_quoted_text_link'>"+Object(r["a"])(l.t("quoted_text_toggle","show quoted text"))+"</a> <div class='quoted_text' style='display: none;'> "+a.a.raw(e.join("\n"))+" </div> </div>"},formatMessage:function(e){var t,s,n,a,i,o,l,h
a=[]
i=[]
e=e.replace(u,(function(e,t){var s
i.push(e===c?c:(s=e,"http://"===s.slice(0,7)||"https://"===s.slice(0,8)||(s="http://"+s),a.push(s),"<a href='"+Object(r["a"])(s)+"'>"+Object(r["a"])(e)+"</a>"))
return c}))
e=Object(r["a"])(e)
e=e.replace(new RegExp(c,"g"),(function(e,t){return i.shift()}))
e=e.replace(/\n/g,"<br />\n")
o=[]
l=[]
h=e.split("\n")
for(t=0,s=h.length;t<s;t++){n=h[t]
if(n.match(/^(&gt;|>)/))l.push(n)
else{l.length&&o.push(d.quoteClump(l))
l=[]
o.push(n)}}l.length&&o.push(d.quoteClump(l))
return o.join("\n")},delimit:function(e){var t,s,n,a,i
if(isNaN(e))return String(e)
i=e<0?"-":""
t=Math.abs(e)
if(Infinity===t)return String(e)
s=Math.floor(t)
a=t===s?"":String(t).replace(/^\d+\./,".")
while(s>=1e3){n=String(s).replace(/\d+(\d\d\d)$/,",$1")
s=Math.floor(s/1e3)
a=n+a}return i+String(s)+a},truncateText:function(e,t){var s,n,a,i,o,r
null==t&&(t={})
n=null!=(i=t.max)?i:30
s=l.t("ellipsis","...")
r=l.t("word_separator"," ")
e=(null!=e?e:"").replace(/\s+/g,r).trim()
if(!e||e.length<=n)return e
o=0
while(true){a=e.indexOf(r,o+1)
if(a<0||a>n-s.length)break
o=a}o||(o=n-s.length)
return e.substring(0,o)+s},plainText:function(e){return e.replace(/(<([^>]+)>)/gi,"")}}},ppAs:function(e,t,s){"use strict"
var n=s("ouhR")
var a=s.n(n)
var i=s("GLiE")
var o=s.n(i)
var l=s("5Ky4")
var r=s("pQTu")
var c=s("m0r6")
Object(c["a"])(JSON.parse('{"de":{"user_content_aaf0fb5a":"Benutzer-Content"},"hu":{"user_content_aaf0fb5a":"Felhasználói tartalom"}}'))
s("jQeR")
s("0sPK")
var u=r["default"].scoped("user_content")
const d={translateMathmlForScreenreaders(e){const t=a()("<div/>").html(e.attr("x-canvaslms-safe-mathml")).html()
const s=a()('<span class="hidden-readable"></span>')
s.html(t)
return s},toMediaCommentLink(e){const t=a()("<a\n        id='media_comment_".concat(Object(l["a"])(a()(e).data("media_comment_id")),"'\n        data-media_comment_type='").concat(Object(l["a"])(a()(e).data("media_comment_type")),"'\n        class='instructure_inline_media_comment ").concat(Object(l["a"])(e.nodeName.toLowerCase()),"_comment'\n        data-alt='").concat(Object(l["a"])(a()(e).attr("data-alt")),"'\n      />"))
t.html(a()(e).html())
return t},convert(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const s=a()("<div />").html(e)
s.find("video.instructure_inline_media_comment,audio.instructure_inline_media_comment").replaceWith((function(){return d.toMediaCommentLink(this)}))
s.find("object.instructure_user_content:not(#kaltura_player) embed").remove()
if(!t.forEditing){s.find("object.instructure_user_content,embed.instructure_user_content").replaceWith((function(){const e=a()(this)
if(!e.data("uc_snippet")||!e.data("uc_sig"))return this
const t=o.a.uniqueId("uc_")
let s="/object_snippet"
ENV.files_domain&&(s="//".concat(ENV.files_domain).concat(s))
const n=a()("<form\n            action='".concat(Object(l["a"])(s),"'\n            method='post'\n            class='user_content_post_form'\n            target='").concat(Object(l["a"])(t),"'\n            id='form-").concat(Object(l["a"])(t),"'\n          />"))
n.append(a()("<input type='hidden'/>").attr({name:"object_data",value:e.data("uc_snippet")}))
n.append(a()("<input type='hidden'/>").attr({name:"s",value:e.data("uc_sig")}))
a()("body").append(n)
setTimeout(()=>n.submit(),0)
return a()("<iframe\n            class='user_content_iframe'\n            name='".concat(Object(l["a"])(t),"'\n            style='width: ").concat(Object(l["a"])(e.data("uc_width")),"; height: ").concat(Object(l["a"])(e.data("uc_height")),";'\n            frameborder='0'\n            title='").concat(Object(l["a"])(u.t("User Content")),"'\n          />"))}))
s.find("img.equation_image").each((e,t)=>{const s=a()(t)
const n=d.translateMathmlForScreenreaders(s)
s.removeAttr("x-canvaslms-safe-mathml")
s.after(n)})}return s.html()}}
t["a"]=d}}])

//# sourceMappingURL=525-c-6428193eef.js.map