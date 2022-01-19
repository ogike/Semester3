(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[20],{"0jNN":function(e,r,t){"use strict"
var n=Object.prototype.hasOwnProperty
var a=Array.isArray
var o=function(){var e=[]
for(var r=0;r<256;++r)e.push("%"+((r<16?"0":"")+r.toString(16)).toUpperCase())
return e}()
var i=function(e){while(e.length>1){var r=e.pop()
var t=r.obj[r.prop]
if(a(t)){var n=[]
for(var o=0;o<t.length;++o)"undefined"!==typeof t[o]&&n.push(t[o])
r.obj[r.prop]=n}}}
var c=function(e,r){var t=r&&r.plainObjects?Object.create(null):{}
for(var n=0;n<e.length;++n)"undefined"!==typeof e[n]&&(t[n]=e[n])
return t}
var s=function e(r,t,o){if(!t)return r
if("object"!==typeof t){if(a(r))r.push(t)
else{if(!r||"object"!==typeof r)return[r,t];(o&&(o.plainObjects||o.allowPrototypes)||!n.call(Object.prototype,t))&&(r[t]=true)}return r}if(!r||"object"!==typeof r)return[r].concat(t)
var i=r
a(r)&&!a(t)&&(i=c(r,o))
if(a(r)&&a(t)){t.forEach((function(t,a){if(n.call(r,a)){var i=r[a]
i&&"object"===typeof i&&t&&"object"===typeof t?r[a]=e(i,t,o):r.push(t)}else r[a]=t}))
return r}return Object.keys(t).reduce((function(r,a){var i=t[a]
n.call(r,a)?r[a]=e(r[a],i,o):r[a]=i
return r}),i)}
var l=function(e,r){return Object.keys(r).reduce((function(e,t){e[t]=r[t]
return e}),e)}
var u=function(e,r,t){var n=e.replace(/\+/g," ")
if("iso-8859-1"===t)return n.replace(/%[0-9a-f]{2}/gi,unescape)
try{return decodeURIComponent(n)}catch(e){return n}}
var f=function(e,r,t){if(0===e.length)return e
var n=e
"symbol"===typeof e?n=Symbol.prototype.toString.call(e):"string"!==typeof e&&(n=String(e))
if("iso-8859-1"===t)return escape(n).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}))
var a=""
for(var i=0;i<n.length;++i){var c=n.charCodeAt(i)
if(45===c||46===c||95===c||126===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122){a+=n.charAt(i)
continue}if(c<128){a+=o[c]
continue}if(c<2048){a+=o[192|c>>6]+o[128|63&c]
continue}if(c<55296||c>=57344){a+=o[224|c>>12]+o[128|c>>6&63]+o[128|63&c]
continue}i+=1
c=65536+((1023&c)<<10|1023&n.charCodeAt(i))
a+=o[240|c>>18]+o[128|c>>12&63]+o[128|c>>6&63]+o[128|63&c]}return a}
var p=function(e){var r=[{obj:{o:e},prop:"o"}]
var t=[]
for(var n=0;n<r.length;++n){var a=r[n]
var o=a.obj[a.prop]
var c=Object.keys(o)
for(var s=0;s<c.length;++s){var l=c[s]
var u=o[l]
if("object"===typeof u&&null!==u&&-1===t.indexOf(u)){r.push({obj:o,prop:l})
t.push(u)}}}i(r)
return e}
var d=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}
var v=function(e){if(!e||"object"!==typeof e)return false
return!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}
var y=function(e,r){return[].concat(e,r)}
e.exports={arrayToObject:c,assign:l,combine:y,compact:p,decode:u,encode:f,isBuffer:v,isRegExp:d,merge:s}},"60Hp":function(e,r,t){"use strict"
t.r(r)
var n=t("ODXe")
var a=t("x1Tw")
var o=t("Qyje")
var i=t.n(o)
var c=t("pQTu")
var s=t("m0r6")
Object(s["a"])(JSON.parse('{"de":{"canvas_failed_to_complete_the_upload_864a4c0f":"Upload fehlgeschlagen","canvas_failed_to_initiate_the_upload_8e3824d5":"Initialisierung des Upload fehlgeschlagen","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Übertragung der Datei in den Speicher-Service ist fehlgeschlagen. Entweder ist der Service heruntergefahren oder Sie müssen sich erneut bei Canvas anmelden."}}'))
t("jQeR")
t("0sPK")
var l=c["default"].scoped("upload_file")
var u=t("jpBB")
t.d(r,"uploadFile",(function(){return v}))
t.d(r,"completeUpload",(function(){return y}))
t.d(r,"submissionCommentAttachmentsUpload",(function(){return h}))
t.d(r,"uploadFiles",(function(){return m}))
function f(e){if("Network Error"===e.message){const r=new Error(l.t("Canvas failed to initiate the upload."))
r.originalError=e
return Promise.reject(r)}return Promise.reject(e)}function p(e){if("Network Error"===e.message){const r=new Error(l.t("Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."))
r.originalError=e
return Promise.reject(r)}return Promise.reject(e)}function d(e){if("Network Error"===e.message){const r=new Error(l.t("Canvas failed to complete the upload."))
r.originalError=e
return Promise.reject(r)}return Promise.reject(e)}function v(e,r,t){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:a["a"]
if(!t&&!r.url)throw new Error("expected either a file to upload or a url to clone",{file:t,preflightData:r})
if(t&&r.url)throw new Error("can't upload with both a file object and a url to clone",{file:t,preflightData:r})
r.no_redirect=true
r["attachment[context_code]"]&&(r=i.a.stringify(r))
return n.post(e,r).catch(f).then(e=>y(e.data,t,{ajaxLib:n}))}function y(e,r){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
const o=t.ajaxLib||a["a"]
e&&e.attachments&&e.attachments[0]&&(e=e.attachments[0])
if(!e)throw new Error("expected a preflightResponse")
if(r&&!e.upload_url)throw new Error("expected a preflightResponse with an upload_url",{preflightResponse:e})
if(!r&&!e.progress)throw new Error("expected a preflightResponse with a progress",{preflightResponse:e})
const c=e,s=c.upload_url,l=c.progress
if(!s)return Object(u["a"])(l,{ajaxLib:o}).catch(d)
let f=e,v=f.file_param,y=f.upload_params,h=f.success_url
v=v||"file"
y=y||{}
h=h||y.success_url
const m=!!h
const g=new FormData
Object.entries(y).forEach(e=>{let r=Object(n["a"])(e,2),t=r[0],a=r[1]
return g.append(t,a)})
r&&g.append(v,r,t.filename)
const b=o.post(s,g,{responseType:m?"document":"json",onUploadProgress:t.onProgress,withCredentials:!m})
return b.catch(p).then(e=>{if(l)return Object(u["a"])(l,{ajaxLib:o}).catch(d)
let r,n={}
if(h){const t=e.data,a=t.Bucket,o=t.Key,i=t.ETag
r=h
n={bucket:a,key:o,etag:i}}else if(201===e.status&&!t.ignoreResult){r=e.data.location
n={}}if(r){t.includeAvatar&&(n.include="avatar")
n=i.a.stringify(n)
n&&(r=-1!==r.indexOf("?")?"".concat(r,"&").concat(n):"".concat(r,"?").concat(n))
return o.get(r).then(e=>{let r=e.data
return r}).catch(d)}return e.data})}function h(e,r,t){const n="/api/v1/courses/".concat(r,"/assignments/").concat(t,"/submissions/self/comments/files")
const a=e.map(e=>{const r={name:e.name,content_type:e.type}
return v(n,r,e)})
return Promise.all(a)}function m(e,r){const t=e.map(e=>e.url?v(r,{url:e.url,name:e.title,content_type:e.mediaType,submit_assignment:false}):v(r,{name:e.name,content_type:e.type},e))
return Promise.all(t)}},QSc6:function(e,r,t){"use strict"
var n=t("0jNN")
var a=t("sxOR")
var o=Object.prototype.hasOwnProperty
var i={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,r){return e+"["+r+"]"},repeat:function(e){return e}}
var c=Array.isArray
var s=Array.prototype.push
var l=function(e,r){s.apply(e,c(r)?r:[r])}
var u=Date.prototype.toISOString
var f=a["default"]
var p={addQueryPrefix:false,allowDots:false,charset:"utf-8",charsetSentinel:false,delimiter:"&",encode:true,encoder:n.encode,encodeValuesOnly:false,format:f,formatter:a.formatters[f],indices:false,serializeDate:function(e){return u.call(e)},skipNulls:false,strictNullHandling:false}
var d=function(e){return"string"===typeof e||"number"===typeof e||"boolean"===typeof e||"symbol"===typeof e||"bigint"===typeof e}
var v=function e(r,t,a,o,i,s,u,f,v,y,h,m,g){var b=r
"function"===typeof u?b=u(t,b):b instanceof Date?b=y(b):"comma"===a&&c(b)&&(b=b.join(","))
if(null===b){if(o)return s&&!m?s(t,p.encoder,g,"key"):t
b=""}if(d(b)||n.isBuffer(b)){if(s){var j=m?t:s(t,p.encoder,g,"key")
return[h(j)+"="+h(s(b,p.encoder,g,"value"))]}return[h(t)+"="+h(String(b))]}var w=[]
if("undefined"===typeof b)return w
var O
if(c(u))O=u
else{var x=Object.keys(b)
O=f?x.sort(f):x}for(var N=0;N<O.length;++N){var _=O[N]
if(i&&null===b[_])continue
c(b)?l(w,e(b[_],"function"===typeof a?a(t,_):t,a,o,i,s,u,f,v,y,h,m,g)):l(w,e(b[_],t+(v?"."+_:"["+_+"]"),a,o,i,s,u,f,v,y,h,m,g))}return w}
var y=function(e){if(!e)return p
if(null!==e.encoder&&void 0!==e.encoder&&"function"!==typeof e.encoder)throw new TypeError("Encoder has to be a function.")
var r=e.charset||p.charset
if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined")
var t=a["default"]
if("undefined"!==typeof e.format){if(!o.call(a.formatters,e.format))throw new TypeError("Unknown format option provided.")
t=e.format}var n=a.formatters[t]
var i=p.filter;("function"===typeof e.filter||c(e.filter))&&(i=e.filter)
return{addQueryPrefix:"boolean"===typeof e.addQueryPrefix?e.addQueryPrefix:p.addQueryPrefix,allowDots:"undefined"===typeof e.allowDots?p.allowDots:!!e.allowDots,charset:r,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:p.charsetSentinel,delimiter:"undefined"===typeof e.delimiter?p.delimiter:e.delimiter,encode:"boolean"===typeof e.encode?e.encode:p.encode,encoder:"function"===typeof e.encoder?e.encoder:p.encoder,encodeValuesOnly:"boolean"===typeof e.encodeValuesOnly?e.encodeValuesOnly:p.encodeValuesOnly,filter:i,formatter:n,serializeDate:"function"===typeof e.serializeDate?e.serializeDate:p.serializeDate,skipNulls:"boolean"===typeof e.skipNulls?e.skipNulls:p.skipNulls,sort:"function"===typeof e.sort?e.sort:null,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:p.strictNullHandling}}
e.exports=function(e,r){var t=e
var n=y(r)
var a
var o
if("function"===typeof n.filter){o=n.filter
t=o("",t)}else if(c(n.filter)){o=n.filter
a=o}var s=[]
if("object"!==typeof t||null===t)return""
var u
u=r&&r.arrayFormat in i?r.arrayFormat:r&&"indices"in r?r.indices?"indices":"repeat":"indices"
var f=i[u]
a||(a=Object.keys(t))
n.sort&&a.sort(n.sort)
for(var p=0;p<a.length;++p){var d=a[p]
if(n.skipNulls&&null===t[d])continue
l(s,v(t[d],d,f,n.strictNullHandling,n.skipNulls,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.formatter,n.encodeValuesOnly,n.charset))}var h=s.join(n.delimiter)
var m=true===n.addQueryPrefix?"?":""
n.charsetSentinel&&("iso-8859-1"===n.charset?m+="utf8=%26%2310003%3B&":m+="utf8=%E2%9C%93&")
return h.length>0?m+h:""}},Qyje:function(e,r,t){"use strict"
var n=t("QSc6")
var a=t("nmq7")
var o=t("sxOR")
e.exports={formats:o,parse:a,stringify:n}},jpBB:function(e,r,t){"use strict"
t.d(r,"a",(function(){return o}))
var n=t("x1Tw")
function a(e){return new Promise(r=>{setTimeout(r,e)})}function o(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const t=r.ajaxLib||n["a"]
const i=e.url,c=e.workflow_state,s=e.results,l=e.message
if("queued"===c||"running"===c){let e=r.interval
e||(e=1e3)
e<100&&(e=100)
return a(e).then(()=>t.get(i)).then(e=>{const t=e.data
return o(t,r)})}return"completed"===c?Promise.resolve(s):Promise.reject(l)}},nmq7:function(e,r,t){"use strict"
var n=t("0jNN")
var a=Object.prototype.hasOwnProperty
var o=Array.isArray
var i={allowDots:false,allowPrototypes:false,arrayLimit:20,charset:"utf-8",charsetSentinel:false,comma:false,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:false,interpretNumericEntities:false,parameterLimit:1e3,parseArrays:true,plainObjects:false,strictNullHandling:false}
var c=function(e){return e.replace(/&#(\d+);/g,(function(e,r){return String.fromCharCode(parseInt(r,10))}))}
var s="utf8=%26%2310003%3B"
var l="utf8=%E2%9C%93"
var u=function(e,r){var t={}
var u=r.ignoreQueryPrefix?e.replace(/^\?/,""):e
var f=Infinity===r.parameterLimit?void 0:r.parameterLimit
var p=u.split(r.delimiter,f)
var d=-1
var v
var y=r.charset
if(r.charsetSentinel)for(v=0;v<p.length;++v)if(0===p[v].indexOf("utf8=")){p[v]===l?y="utf-8":p[v]===s&&(y="iso-8859-1")
d=v
v=p.length}for(v=0;v<p.length;++v){if(v===d)continue
var h=p[v]
var m=h.indexOf("]=")
var g=-1===m?h.indexOf("="):m+1
var b,j
if(-1===g){b=r.decoder(h,i.decoder,y,"key")
j=r.strictNullHandling?null:""}else{b=r.decoder(h.slice(0,g),i.decoder,y,"key")
j=r.decoder(h.slice(g+1),i.decoder,y,"value")}j&&r.interpretNumericEntities&&"iso-8859-1"===y&&(j=c(j))
j&&"string"===typeof j&&r.comma&&j.indexOf(",")>-1&&(j=j.split(","))
h.indexOf("[]=")>-1&&(j=o(j)?[j]:j)
a.call(t,b)?t[b]=n.combine(t[b],j):t[b]=j}return t}
var f=function(e,r,t){var n=r
for(var a=e.length-1;a>=0;--a){var o
var i=e[a]
if("[]"===i&&t.parseArrays)o=[].concat(n)
else{o=t.plainObjects?Object.create(null):{}
var c="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i
var s=parseInt(c,10)
if(t.parseArrays||""!==c)if(!isNaN(s)&&i!==c&&String(s)===c&&s>=0&&t.parseArrays&&s<=t.arrayLimit){o=[]
o[s]=n}else o[c]=n
else o={0:n}}n=o}return n}
var p=function(e,r,t){if(!e)return
var n=t.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e
var o=/(\[[^[\]]*])/
var i=/(\[[^[\]]*])/g
var c=t.depth>0&&o.exec(n)
var s=c?n.slice(0,c.index):n
var l=[]
if(s){if(!t.plainObjects&&a.call(Object.prototype,s)&&!t.allowPrototypes)return
l.push(s)}var u=0
while(t.depth>0&&null!==(c=i.exec(n))&&u<t.depth){u+=1
if(!t.plainObjects&&a.call(Object.prototype,c[1].slice(1,-1))&&!t.allowPrototypes)return
l.push(c[1])}c&&l.push("["+n.slice(c.index)+"]")
return f(l,r,t)}
var d=function(e){if(!e)return i
if(null!==e.decoder&&void 0!==e.decoder&&"function"!==typeof e.decoder)throw new TypeError("Decoder has to be a function.")
if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined")
var r="undefined"===typeof e.charset?i.charset:e.charset
return{allowDots:"undefined"===typeof e.allowDots?i.allowDots:!!e.allowDots,allowPrototypes:"boolean"===typeof e.allowPrototypes?e.allowPrototypes:i.allowPrototypes,arrayLimit:"number"===typeof e.arrayLimit?e.arrayLimit:i.arrayLimit,charset:r,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:i.charsetSentinel,comma:"boolean"===typeof e.comma?e.comma:i.comma,decoder:"function"===typeof e.decoder?e.decoder:i.decoder,delimiter:"string"===typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:i.delimiter,depth:"number"===typeof e.depth||false===e.depth?+e.depth:i.depth,ignoreQueryPrefix:true===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"===typeof e.interpretNumericEntities?e.interpretNumericEntities:i.interpretNumericEntities,parameterLimit:"number"===typeof e.parameterLimit?e.parameterLimit:i.parameterLimit,parseArrays:false!==e.parseArrays,plainObjects:"boolean"===typeof e.plainObjects?e.plainObjects:i.plainObjects,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:i.strictNullHandling}}
e.exports=function(e,r){var t=d(r)
if(""===e||null===e||"undefined"===typeof e)return t.plainObjects?Object.create(null):{}
var a="string"===typeof e?u(e,t):e
var o=t.plainObjects?Object.create(null):{}
var i=Object.keys(a)
for(var c=0;c<i.length;++c){var s=i[c]
var l=p(s,a[s],t)
o=n.merge(o,l,t)}return n.compact(o)}},sxOR:function(e,r,t){"use strict"
var n=String.prototype.replace
var a=/%20/g
var o=t("0jNN")
var i={RFC1738:"RFC1738",RFC3986:"RFC3986"}
e.exports=o.assign({default:i.RFC3986,formatters:{RFC1738:function(e){return n.call(e,a,"+")},RFC3986:function(e){return String(e)}}},i)}}])

//# sourceMappingURL=20-c-538cfa8cfb.js.map