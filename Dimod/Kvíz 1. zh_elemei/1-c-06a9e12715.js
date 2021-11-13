(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[1],{"3O+N":function(e,t,n){e.exports=n("h9kl")},BEYS:function(e,t,n){"use strict"
var r=n("sTlx")
var a=n("tpBh")["default"]
var i="1.3.0"
t.VERSION=i
var o=4
t.COMPILER_REVISION=o
var s={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:">= 1.0.0"}
t.REVISION_CHANGES=s
var l=r.isArray,u=r.isFunction,c=r.toString,d="[object Object]"
function p(e,t){this.helpers=e||{}
this.partials=t||{}
f(this)}t.HandlebarsEnvironment=p
p.prototype={constructor:p,logger:m,log:h,registerHelper:function(e,t,n){if(c.call(e)===d){if(n||t)throw new a("Arg not supported with multiple helpers")
r.extend(this.helpers,e)}else{n&&(t.not=n)
this.helpers[e]=t}},registerPartial:function(e,t){c.call(e)===d?r.extend(this.partials,e):this.partials[e]=t}}
function f(e){e.registerHelper("helperMissing",(function(e){if(2===arguments.length)return
throw new a("Missing helper: '"+e+"'")}))
e.registerHelper("blockHelperMissing",(function(t,n){var r=n.inverse||function(){},a=n.fn
u(t)&&(t=t.call(this))
return true===t?a(this):false===t||null==t?r(this):l(t)?t.length>0?e.helpers.each(t,n):r(this):a(t)}))
e.registerHelper("each",(function(e,t){var n=t.fn,r=t.inverse
var a,i=0,o=""
u(e)&&(e=e.call(this))
t.data&&(a=v(t.data))
if(e&&"object"===typeof e)if(l(e))for(var s=e.length;i<s;i++){if(a){a.index=i
a.first=0===i
a.last=i===e.length-1}o+=n(e[i],{data:a})}else for(var c in e)if(e.hasOwnProperty(c)){if(a){a.key=c
a.index=i
a.first=0===i}o+=n(e[c],{data:a})
i++}0===i&&(o=r(this))
return o}))
e.registerHelper("if",(function(e,t){u(e)&&(e=e.call(this))
return!t.hash.includeZero&&!e||r.isEmpty(e)?t.inverse(this):t.fn(this)}))
e.registerHelper("unless",(function(t,n){return e.helpers["if"].call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})}))
e.registerHelper("with",(function(e,t){u(e)&&(e=e.call(this))
if(!r.isEmpty(e))return t.fn(e)}))
e.registerHelper("log",(function(t,n){var r=n.data&&null!=n.data.level?parseInt(n.data.level,10):1
e.log(r,t)}))}var m={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(e,t){if(m.level<=e){var n=m.methodMap[e]
"undefined"!==typeof console&&console[n]&&console[n].call(console,t)}}}
t.logger=m
function h(e,t){m.log(e,t)}t.log=h
var v=function(e){var t={}
r.extend(t,e)
return t}
t.createFrame=v},DfGn:function(e,t,n){"use strict"
var r=n("2DhO")
var a=n("pQTu")
var i=n("m0r6")
Object(i["a"])(JSON.parse('{"de":{"enrollmentNames":{"course_designer":"Kursdesigner","observer":"Beobachter","student":"Student","teacher":"Dozent","teacher_assistant":"Lehrassistent"}},"hu":{"enrollmentNames":{"course_designer":"Kurzustervező","observer":"Megfigyelő","student":"Hallgató","teacher":"Oktató","teacher_assistant":"Segédoktató"}}}'))
n("jQeR")
n("0sPK")
var o=a["default"].scoped("enrollmentNames")
const s={get StudentEnrollment(){return o.t("student","Student")},get TeacherEnrollment(){return o.t("teacher","Teacher")},get TaEnrollment(){return o.t("teacher_assistant","TA")},get ObserverEnrollment(){return o.t("observer","Observer")},get DesignerEnrollment(){return o.t("course_designer","Course Designer")}}
function l(e){return s[e]||e}var u=n("3O+N")
var c=n.n(u)
var d=n("ouhR")
var p=n.n(d)
var f=n("GLiE")
var m=n.n(f)
var h=n("5Ky4")
var v=n("u/6C")
var g=n("VTBJ")
const _={year(e,t){const n=e.startYear<e.endYear?1:-1
const r=p()("<select />",t)
e.includeBlank&&r.append("<option />")
let a=e.startYear
while(a*n<=e.endYear*n){a+=n
r.append(p()('<option value="'.concat(a,'">').concat(a,"</option>")))}return r},month(e,t,n){const r=n.month_names
const a=p()("<select />",t)
e.includeBlank&&a.append("<option />")
for(let e=1;e<=12;e++)a.append(p()('<option value="'.concat(e,'">').concat(Object(h["a"])(r[e]),"</option>")))
return a},day(e,t){const n=p()("<select />",t)
e.includeBlank&&n.append("<option />")
for(let e=1;e<=31;e++)n.append(p()('<option value="'.concat(e,'">').concat(e,"</option>")))
return n}}
function b(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:m.a.clone(t)
const r=["type","startYear","endYear","includeBlank","order"]
r.forEach(e=>delete n[e])
null==n.class&&(n.class="")
n.class+=" date-select"
const i=(new Date).getFullYear()
const o={year:1,month:2,day:3}
const s=a["default"].lookup("date")
"birthdate"===t.type&&m.a.defaults(t,{startYear:i-1,endYear:i-125,includeBlank:true})
m.a.defaults(t,{startYear:i-5,endYear:i+5,order:s.order||["year","month","day"]})
const l=p()("<span>")
for(let r=0,a=t.order.length,i=a>=0;i?r<a:r>a;i?r++:r--){const a=t.order[r]
const i=e.replace(/(\]?)$/,"(".concat(o[a],"i)$1"))
const u=_[a](t,Object(g["a"])({name:i},n),s)
l.append(u)
delete n.id}return l}var S=n("sVap")
var y=n("ppAs")
var x=n("0crz")
var w=n("g1Ui")
n("UlQx")
n("JI1W")
n("p6Wi")
Object(i["a"])(JSON.parse('{"de":{"duration_1_minute_29c7d5ab":"Dauer: 1 Minute","duration_hours_hours_and_minutes_minutes_d5da8c3":"Dauer: %{hours} Stunden und %{minutes} Minuten","duration_minutes_minutes_d7b9182b":"Dauer: %{minutes} Minuten","helpers":{"accessible_date_format":"JJJJ-MM-TT hh:mm","accessible_date_only_format":"TT-MM-JJJJ","accessible_date_prompt":"Format wie","accessible_time_only_format":"hh:mm","course":"Kurs","local":"Lokal"}},"hu":{"helpers":{"accessible_date_format":"ÉÉÉÉ-HH-NN óó:pp","accessible_date_only_format":"ÉÉÉÉ-HH-NN","accessible_date_prompt":"Ilyen formátumban","accessible_time_only_format":"óó:pp","course":"Kurzus","local":"Helyi"}}}'))
var T=a["default"].scoped("handlebars_helpers")
var N,E,O,j,I=[].slice,k={}.hasOwnProperty,D=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t
return-1}
N=c.a["default"]
j={t:function(){var e,t,n,r,i,o,s,l,u,c
e=2<=arguments.length?I.call(arguments,0,t=arguments.length-1):(t=0,[]),o=arguments[t++]
c={}
o=null!=(s=null!=o?o.hash:void 0)?s:{}
for(r in o){u=o[r]
if(!r.match(/^w\d+$/))continue
c[new Array(parseInt(r.replace("w",""))+2).join("*")]=u
delete o[r]}c["*"]&&(o.wrapper=c)
if(!("undefined"===typeof this||this instanceof Window)){l=this
for(n=0,i=l.length;n<i;n++){r=l[n]
o[r]=this[r]}}return new N.SafeString(Object(h["a"])(a["default"].t.apply(a["default"],I.call(e).concat([o]))))},__i18nliner_escape:function(e){return Object(h["a"])(e)},__i18nliner_safe:function(e){return new h["a"].SafeString(e)},__i18nliner_concat:function(){var e,t
e=2<=arguments.length?I.call(arguments,0,t=arguments.length-1):(t=0,[]),arguments[t++]
return e.join("")},hiddenIf:function(e){if(e)return" display:none; "},hiddenUnless:function(e){if(!e)return" display:none; "},hiddenIfExists:function(e){if(null!=e)return" display:none; "},hiddenUnlessExists:function(e){if(null==e)return" display:none; "},ifExists:function(e,t){return null!=e?t.fn(this):t.inverse(this)},semanticDateRange:function(){return new N.SafeString(v["a"].apply(null,arguments))},contextSensitiveDatetimeTitle:function(e,t){var n,r,a,i,o,s
a=t.hash.justText
i=p.a.datetimeString(e)
s=i
if(ENV&&ENV.CONTEXT_TIMEZONE&&ENV.TIMEZONE!==ENV.CONTEXT_TIMEZONE){o=T.t("#helpers.local","Local")
r=T.t("#helpers.course","Course")
n=p.a.datetimeString(e,{timezone:ENV.CONTEXT_TIMEZONE})
i!==n&&(s=Object(h["a"])(o)+": "+Object(h["a"])(i)+"<br>"+Object(h["a"])(r)+": "+Object(h["a"])(n))}return a?new N.SafeString(s):new N.SafeString('data-tooltip data-html-tooltip-title="'+Object(h["a"])(s)+'"')},friendlyDatetime:function(e,t){var n,a,i,o,s
o=t.hash,i=o.pubdate,n=o.contextSensitive
if(null==e)return
m.a.isDate(e)||(e=r["a"].parse(e))
a=p.a.fudgeDateForProfileTimezone(r["a"].parse(e))
s=""
s=n&&ENV&&ENV.CONTEXT_TIMEZONE?N.helpers.contextSensitiveDatetimeTitle(e,{hash:{justText:true}}):p.a.datetimeString(e)
return new N.SafeString("<time data-tooltip data-html-tooltip-title='"+Object(h["a"])(s)+"' datetime='"+e.toISOString()+"' "+p.a.raw(i?"pubdate":void 0)+">\n  <span aria-hidden='true'>"+p.a.friendlyDatetime(a)+"</span>\n  <span class='screenreader-only'>"+s+"</span>\n</time>")},fudge:function(e){return p.a.fudgeDateForProfileTimezone(e)},unfudge:function(e){return p.a.unfudgeDateForProfileTimezone(e)},formattedDate:function(e,t,n){var a
a=n.hash.pubdate
if(null==e)return
m.a.isDate(e)||(e=r["a"].parse(e))
return new N.SafeString("<time data-tooltip title='"+p.a.datetimeString(e)+"' datetime='"+e.toISOString()+"' "+p.a.raw(a?"pubdate":void 0)+">"+Object(h["a"])(e.toString(t))+"</time>")},datetimeFormatted:function(e){return p.a.datetimeString(e)},dateString:function(e){if(!e)return""
return a["default"].l("date.formats.medium",e)},minutesToHM:function(e){var t,n,r
t=Math.floor(e/60)
r=e%60
n=r<10?"0"+r:r
return t+":"+n},durationToString:function(e){var t,n
t=Math.floor(e/60)
n=e%60
return t>0?T.t("Duration: %{hours} hours and %{minutes} minutes",{hours:t,minutes:n}):n>1?T.t("Duration: %{minutes} minutes",{minutes:n}):T.t("Duration: 1 minute")},addIcon:function(e){return new N.SafeString("<i role='presentation' class='icon-"+Object(h["a"])(e)+"'></i>")},dateToString:function(e,t){null==e&&(e="")
return e.toString(t)},tDateToString:function(e,t){var n
null==e&&(e="")
if(!e)return""
m.a.isDate(e)||(e=r["a"].parse(e))
n=p.a.fudgeDateForProfileTimezone(r["a"].parse(e))
return a["default"].l("date.formats."+t,n)},tTimeToString:function(e,t){var n
null==e&&(e="")
if(!e)return""
m.a.isDate(e)||(e=r["a"].parse(e))
n=p.a.fudgeDateForProfileTimezone(r["a"].parse(e))
return a["default"].l("time.formats."+t,n)},tTimeHours:function(e){null==e&&(e="")
return 0===e.getMinutes()&&0===e.getSeconds()?a["default"].l("time.formats.tiny_on_the_hour",e):a["default"].l("time.formats.tiny",e)},tEventToString:function(e,t,n){null==e&&(e="")
null==t&&(t="short")
null==n&&(n="tiny")
return a["default"].t("time.event",{defaultValue:"%{date} at %{time}",date:a["default"].l("date.formats."+t,e),time:a["default"].l("time.formats."+n,e)})},strftime:function(e,t){null==e&&(e="")
return a["default"].strftime(e,t)},accessibleDateFormat:function(e){null==e&&(e="datetime")
return"date"===e?T.t("#helpers.accessible_date_only_format","YYYY-MM-DD"):"time"===e?T.t("#helpers.accessible_time_only_format","hh:mm"):T.t("#helpers.accessible_date_format","YYYY-MM-DD hh:mm")},datepickerScreenreaderPrompt:function(e){var t
null==e&&(e="datetime")
t=T.t("#helpers.accessible_date_prompt","Format Like")
e=N.helpers.accessibleDateFormat(e)
return t+" "+e},mimeClass:S["a"],convertApiUserContent:function(e,t){var n,r
r=t.hash
n=y["a"].convert(e,r)
r&&r.forEditing||(n=new N.SafeString(n))
return n},newlinesToBreak:function(e){e||(e="")
return new N.SafeString(Object(h["a"])(e).replace(/\n/g,"<br />"))},not:function(e){return!e},ifEqual:function(){var e,t,n,r,a,i,o,s
o=arguments[0],t=3<=arguments.length?I.call(arguments,1,n=arguments.length-1):(n=1,[]),s=arguments[n++],E=s.fn,r=s.inverse
for(a=0,i=t.length;a<i;a++){e=t[a]
if(e!==o)return r(this)
o=e}return E(this)},ifAll:function(){var e,t,n,r,a,i,o
t=2<=arguments.length?I.call(arguments,0,n=arguments.length-1):(n=0,[]),o=arguments[n++],E=o.fn,r=o.inverse
for(a=0,i=t.length;a<i;a++){e=t[a]
if(!e)return r(this)}return E(this)},ifAny:function(){var e,t,n,r,a,i,o
t=2<=arguments.length?I.call(arguments,0,n=arguments.length-1):(n=0,[]),o=arguments[n++],E=o.fn,r=o.inverse
for(a=0,i=t.length;a<i;a++){e=t[a]
if(e)return E(this)}return r(this)},ifNull:function(){var e,t,n,r,a
t=2<=arguments.length?I.call(arguments,0,n=arguments.length-1):(n=0,[]),a=arguments[n++],E=a.fn,r=a.inverse
e=t[0]
if(null!=e)return r(this)
return E(this)},eachWithIndex:function(e,t){var n,r,a,i,o
E=t.fn
a=t.inverse
o=parseInt(t.hash.startingValue||0,10)
i=""
if(e&&e.length>0)for(r in e){if(!k.call(e,r))continue
n=e[r]
n._index=parseInt(r,10)+o
i+=E(n)}else i=a(this)
return i},eachProp:function(e,t){var n
return function(){var r
r=[]
for(n in e)r.push(t.fn({property:n,value:e[n]}))
return r}().join("")},ifSettingIs:function(){var e,t,n,r,a
n=arguments[0],a=arguments[1],t=arguments[2],E=t.fn,e=t.inverse
r=ENV.SETTINGS
if(r[n]===a)return E(this)
return e(this)},toSentence:function(e,t){var n
n=m.a.map(e,(function(e){return t.fn(e)}))
return p.a.toSentence(n)},dateSelect:function(e,t){return new N.SafeString(b(e,t.hash).html())},checkbox:function(e,t){var n,r,a,i,o,s,l,u,c,d,f,v,g,_
a=t.hash
v=e.split(/\./)
f=v.join("_")
if(a.prefix){v.unshift(a.prefix)
delete a.prefix}r=v[0]+m.a.chain(v).rest().map((function(e){return"["+e+"]"})).value().join("")
s=m.a.extend({type:"checkbox",value:1,id:f,name:r},a)
if(null==s.checked){_=m.a.reduce(v,(function(e,t){if(null!=e)return e[t]}),this)
_&&(s.checked=true)}d=["checked","disabled"]
for(o=0,u=d.length;o<u;o++){c=d[o]
s[c]?s[c]=c:delete s[c]}s.uniqid&&s.id&&(s.id+="-"+N.helpers.uniqid.call(this))
delete s.uniqid
n=function(){var e
e=[]
for(l in s){g=s[l]
null!=g&&e.push(Object(h["a"])(l)+'="'+Object(h["a"])(g)+'"')}return e}()
i=s.disabled?"disabled":""
return new N.SafeString('<input name="'+Object(h["a"])(s.name)+'" type="hidden" value="0" '+i+">\n<input "+p.a.raw(n.join(" "))+" />")},toPercentage:function(e){return parseInt(100*e)+"%"},toPrecision:function(e,t){return e?parseFloat(e).toPrecision(t):""},checkedIf:function(e,t,n){return 3===arguments.length?e===t?"checked":"":e?"checked":""},selectedIf:function(e,t,n){return 3===arguments.length?e===t?"selected":"":e?"selected":""},disabledIf:function(e,t){return e?"disabled":""},readonlyIf:function(e,t){return e?"readonly":""},checkedUnless:function(e){return e?"":"checked"},join:function(e,t,n){null==t&&(t=",")
if(!e)return""
return e.join(t)},ifIncludes:function(e,t,n){if(!e)return false
return D.call(e,t)>=0?n.fn(this):n.inverse(this)},disabledIfIncludes:function(e,t){if(!e)return""
return D.call(e,t)>=0?"disabled":""},truncate_left:function(e,t){return N.Utils.escapeExpression(x["a"].truncateText(e.split("").reverse().join(""),{max:t}).split("").reverse().join(""))},truncate:function(e,t){return N.Utils.escapeExpression(x["a"].truncateText(e,{max:t}))},escape_html:function(e){return Object(h["a"])(e)},enrollmentName:l,list:function(e,t){var n,r,a,i,o,s,l
m.a.defaults(t.hash,{separator:", ",propName:null,limit:null,end:"..."})
i=t.hash,a=i.propName,r=i.limit,n=i.end,s=i.separator
o=m.a.map(e,(function(e){return a?e[a]:e}))
r&&(o=o.slice(0,r))
l=o.join(s)
return r&&e.length>r?""+l+n:l},titleize:function(e){var t,n
if(!e)return""
n=e.split(/[ _]+/)
t=m()(n).map((function(e){return e[0].toUpperCase()+e.slice(1)}))
return t.join(" ")},uniqid:function(e){var t
arguments.length<=1&&(e=this||window)
if(!e._uniqid_){t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
e._uniqid_=function(){var e,n
n=[]
for(e=1;e<=8;e++)n.push(t.charAt(Math.floor(Math.random()*t.length)))
return n}().join("")}return e._uniqid_},view:function(e){var t,n,r
n=function(e){return(window.requestAnimationFrame||setTimeout)(e,0)}
t="placeholder-"+p.a.guid++
r=function(){var a
a=p()("#"+t)
return a.length?a.replaceWith(e.$el):n(r)}
e.render()
n(r)
return new N.SafeString('<span id="'+t+'">pk</span>')},or:function(){var e,t,n,r,a
t=2<=arguments.length?I.call(arguments,0,n=arguments.length-1):(n=0,[]),arguments[n++]
for(r=0,a=t.length;r<a;r++){e=t[r]
if(e)return e}},addMasteryIcon:function(e,t){var n
null==t&&(t={})
n={exceeds:"check-plus",mastery:"check",near:"plus"}[e]||"x"
return new N.SafeString("<i aria-hidden='true' class='icon-"+Object(h["a"])(n)+"'></i>")},ifGreaterThan:function(e,t,n){return e>t?n.fn(this):n.inverse(this)},n:function(e,t){var n,r,i,o
i=t.hash,r=i.precision,n=i.percentage,o=i.strip_insignificant_zeros
return a["default"].n(e,{precision:r,percentage:n,strip_insignificant_zeros:o})},nf:function(e,t){var n
n=t.hash.format
return w["a"][n](e)},lookup:function(e,t){return e&&e[t]}}
for(O in j){E=j[O]
N.registerHelper(O,E)}t["a"]=N},g1Ui:function(e,t,n){"use strict"
var r=n("pQTu")
const a={_format(e,t){if("number"!==typeof e||isNaN(e))return e
return r["default"].n(e,t)},outcomeScore:e=>a._format(e,{precision:2,strip_insignificant_zeros:true})}
t["a"]=a},h9kl:function(e,t,n){"use strict"
var r=n("BEYS")
var a=n("scbj")["default"]
var i=n("tpBh")["default"]
var o=n("sTlx")
var s=n("vRmd")
var l=function(){var e=new r.HandlebarsEnvironment
o.extend(e,r)
e.SafeString=a
e.Exception=i
e.Utils=o
e.VM=s
e.template=function(t){return s.template(t,e)}
return e}
var u=l()
u.create=l
t["default"]=u},sTlx:function(e,t,n){"use strict"
var r=n("scbj")["default"]
var a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"}
var i=/[&<>"'`]/g
var o=/[&<>"'`]/
function s(e){return a[e]||"&amp;"}function l(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}t.extend=l
var u=Object.prototype.toString
t.toString=u
var c=function(e){return"function"===typeof e}
c(/x/)&&(c=function(e){return"function"===typeof e&&"[object Function]"===u.call(e)})
t.isFunction=c
var d=Array.isArray||function(e){return!(!e||"object"!==typeof e)&&"[object Array]"===u.call(e)}
t.isArray=d
function p(e){if(e instanceof r)return e.toString()
if(!e&&0!==e)return""
e=""+e
if(!o.test(e))return e
return e.replace(i,s)}t.escapeExpression=p
function f(e){return!e&&0!==e||!(!d(e)||0!==e.length)}t.isEmpty=f},sVap:function(e,t,n){"use strict"
var r=n("pQTu")
var a=n("m0r6")
Object(a["a"])(JSON.parse('{"de":{"archive_3f794d7e":"Archivieren","audio_dd489fcc":"Audio","flash_6afbf65a":"Flash","image_8ad06":"Bild","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Nur-Text","presentation_2d9387ca":"Präsentation","source_code_2395ca74":"Quellcode","spreadsheet_6d622119":"Tabellenblatt","text_document_eacbcdb7":"Textdokument","unknown_47a3b725":"Unbekannt","video_b9f27375":"Video","web_page_146f9102":"Webseite"},"hu":{"archive_3f794d7e":"Archívum","audio_dd489fcc":"Hang","flash_6afbf65a":"Flash","image_8ad06":"Kép","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Egyszerű szöveg","presentation_2d9387ca":"Prezentáció","source_code_2395ca74":"Forráskód","spreadsheet_6d622119":"Táblázat","text_document_eacbcdb7":"Szöveges dokumentum","unknown_47a3b725":"Ismeretlen","video_b9f27375":"Videó","web_page_146f9102":"Weboldal "}}'))
n("jQeR")
n("0sPK")
var i=r["default"].scoped("mimeClass")
n.d(t,"a",(function(){return s}))
const o={audio:{get displayName(){return i.t("Audio")},mimeTypes:["audio/x-mpegurl","audio/x-pn-realaudio","audio/x-aiff","audio/3gpp","audio/mid","audio/x-wav","audio/basic","audio/mpeg"]},code:{get displayName(){return i.t("Source code")},mimeTypes:["text/xml","text/css","text/x-yaml","application/xml","application/javascript","text/x-csharp"]},doc:{get displayName(){return i.t("Text document")},mimeTypes:["application/x-docx","text/rtf","application/msword","application/rtf","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]},flash:{get displayName(){return i.t("Flash")},mimeTypes:["application/x-shockwave-flash"]},html:{get displayName(){return i.t("Web page")},mimeTypes:["text/html","application/xhtml+xml"]},image:{get displayName(){return i.t("Image")},mimeTypes:["image/png","image/x-psd","image/gif","image/pjpeg","image/jpeg"]},ppt:{get displayName(){return i.t("Presentation")},mimeTypes:["application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.ms-powerpoint"]},pdf:{get displayName(){return i.t("PDF")},mimeTypes:["application/pdf"]},text:{get displayName(){return i.t("Plain text")},mimeTypes:["text","text/plain"]},video:{get displayName(){return i.t("Video")},mimeTypes:["video/mp4","video/x-ms-asf","video/x-msvideo","video/x-sgi-movie","video/mpeg","video/quicktime","video/x-la-asf","video/3gpp"]},xls:{get displayName(){return i.t("Spreadsheet")},mimeTypes:["application/vnd.oasis.opendocument.spreadsheet","text/csv","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.ms-excel"]},zip:{get displayName(){return i.t("Archive")},mimeTypes:["application/x-rar-compressed","application/x-zip-compressed","application/zip","application/x-zip","application/x-rar"]}}
function s(e){return s.mimeClasses[e]||"file"}s.displayName=function(e){const t=o[s(e)]
return t&&t.displayName||i.t("Unknown")}
s.mimeClasses={}
for(const e in o){const t=o[e]
t.mimeTypes.forEach(t=>s.mimeClasses[t]=e)}},scbj:function(e,t,n){"use strict"
function r(e){this.string=e}r.prototype.toString=function(){return""+this.string}
t["default"]=r},tpBh:function(e,t,n){"use strict"
var r=["description","fileName","lineNumber","message","name","number","stack"]
function a(e,t){var n
if(t&&t.firstLine){n=t.firstLine
e+=" - "+n+":"+t.firstColumn}var a=Error.prototype.constructor.call(this,e)
for(var i=0;i<r.length;i++)this[r[i]]=a[r[i]]
if(n){this.lineNumber=n
this.column=t.firstColumn}}a.prototype=new Error
t["default"]=a},"u/6C":function(e,t,n){"use strict"
var r=n("pQTu")
var a=n("m0r6")
Object(a["a"])(JSON.parse('{"de":{"dates":{"no_date":"Kein Datum"}},"hu":{"dates":{"no_date":"Nincs dátum"}}}'))
n("jQeR")
n("0sPK")
var i=r["default"].scoped("dates")
var o=n("ouhR")
var s=n.n(o)
var l=n("2DhO")
var u=n("5Ky4")
n("UlQx")
n.d(t,"a",(function(){return c}))
function c(e,t){if(!e)return'<span class="date-range date-range-no-date">\n  '.concat(Object(u["a"])(i.t("no_date","No Date")),"\n</span>")
const n=l["a"].parse(e)
const r=l["a"].parse(t)
return+n!==+r?s.a.sameDate(n,r)?'<span class="date-range">\n  <time datetime=\''.concat(n.toISOString(),"'>\n    ").concat(s.a.dateString(n),", ").concat(s.a.timeString(n),"\n  </time> -\n  <time datetime='").concat(r.toISOString(),"'>\n    ").concat(s.a.timeString(r),"\n  </time>\n</span>"):'<span class="date-range">\n  <time datetime=\''.concat(n.toISOString(),"'>\n    ").concat(s.a.datetimeString(n),"\n  </time> -\n  <time datetime='").concat(r.toISOString(),"'>\n    ").concat(s.a.datetimeString(r),"\n  </time>\n</span>"):'<span class="date-range">\n  <time datetime=\''.concat(n.toISOString(),"'>\n    ").concat(s.a.datetimeString(n),"\n  </time>\n</span>")}},vRmd:function(e,t,n){"use strict"
var r=n("sTlx")
var a=n("tpBh")["default"]
var i=n("BEYS").COMPILER_REVISION
var o=n("BEYS").REVISION_CHANGES
function s(e){var t=e&&e[0]||1,n=i
if(t!==n){if(t<n){var r=o[n],s=o[t]
throw new a("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+s+").")}throw new a("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}}t.checkRevision=s
function l(e,t){if(!t)throw new a("No environment passed to template")
var n=function(e,n,r,i,o,s){var l=t.VM.invokePartial.apply(this,arguments)
if(null!=l)return l
if(t.compile){var u={helpers:i,partials:o,data:s}
o[n]=t.compile(e,{data:void 0!==s},t)
return o[n](r,u)}throw new a("The partial "+n+" could not be compiled when running in runtime-only mode")}
var i={escapeExpression:r.escapeExpression,invokePartial:n,programs:[],program:function(e,t,n){var r=this.programs[e]
n?r=c(e,t,n):r||(r=this.programs[e]=c(e,t))
return r},merge:function(e,t){var n=e||t
if(e&&t&&e!==t){n={}
r.extend(n,t)
r.extend(n,e)}return n},programWithDepth:t.VM.programWithDepth,noop:t.VM.noop,compilerInfo:null}
return function(n,r){r=r||{}
var a,o,s=r.partial?r:t
if(!r.partial){a=r.helpers
o=r.partials}var l=e.call(i,s,n,a,o,r.data)
r.partial||t.VM.checkRevision(i.compilerInfo)
return l}}t.template=l
function u(e,t,n){var r=Array.prototype.slice.call(arguments,3)
var a=function(e,a){a=a||{}
return t.apply(this,[e,a.data||n].concat(r))}
a.program=e
a.depth=r.length
return a}t.programWithDepth=u
function c(e,t,n){var r=function(e,r){r=r||{}
return t(e,r.data||n)}
r.program=e
r.depth=0
return r}t.program=c
function d(e,t,n,r,i,o){var s={partial:true,helpers:r,partials:i,data:o}
if(void 0===e)throw new a("The partial "+t+" could not be found")
if(e instanceof Function)return e(n,s)}t.invokePartial=d
function p(){return""}t.noop=p}}])

//# sourceMappingURL=1-c-06a9e12715.js.map