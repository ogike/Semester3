(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[94],{"+Pml":function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var r=n("VTBJ")
var a=n("1OyB")
var i=n("vuIU")
var o=n("md7G")
var c=n("foSv")
var s=n("Ji7U")
var l=n("q1tI")
var d=n.n(l)
var u=n("hPGw")
var f=d.a.createElement("path",{d:"M1807.059 1637.706c0 31.172-25.412 56.47-56.47 56.47H169.411c-31.06 0-56.47-25.298-56.47-56.47V225.94h590.907L854.4 451.824H225.882v112.94H1807.06v1072.942zM990.269 451.824L764.385 113H0v1524.706c0 93.402 76.01 169.412 169.412 169.412h1581.176c93.403 0 169.412-76.01 169.412-169.412V451.824H990.268z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var h=function(e){Object(s["a"])(t,e)
function t(){Object(a["a"])(this,t)
return Object(o["a"])(this,Object(c["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){return d.a.createElement(u["a"],Object.assign({},this.props,{name:"IconFolder",viewBox:"0 0 1920 1920",bidirectional:true}),f)}}])
t.displayName="IconFolderLine"
return t}(l["Component"])
h.glyphName="folder"
h.variant="Line"
h.propTypes=Object(r["a"])({},u["a"].propTypes)},"2LKJ":function(e,t,n){e.exports=m
m.Minimatch=g
var r={sep:"/"}
try{r=n("33yf")}catch(e){}var a=m.GLOBSTAR=g.GLOBSTAR={}
var i=n("TuBq")
var o={"!":{open:"(?:(?!(?:",close:"))[^/]*?)"},"?":{open:"(?:",close:")?"},"+":{open:"(?:",close:")+"},"*":{open:"(?:",close:")*"},"@":{open:"(?:",close:")"}}
var c="[^/]"
var s=c+"*?"
var l="(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?"
var d="(?:(?!(?:\\/|^)\\.).)*?"
var u=f("().*{}+?[]^$\\!")
function f(e){return e.split("").reduce((function(e,t){e[t]=true
return e}),{})}var h=/\/+/
m.filter=p
function p(e,t){t=t||{}
return function(n,r,a){return m(n,e,t)}}function b(e,t){e=e||{}
t=t||{}
var n={}
Object.keys(t).forEach((function(e){n[e]=t[e]}))
Object.keys(e).forEach((function(t){n[t]=e[t]}))
return n}m.defaults=function(e){if(!e||!Object.keys(e).length)return m
var t=m
var n=function(n,r,a){return t.minimatch(n,r,b(e,a))}
n.Minimatch=function(n,r){return new t.Minimatch(n,b(e,r))}
return n}
g.defaults=function(e){if(!e||!Object.keys(e).length)return g
return m.defaults(e).Minimatch}
function m(e,t,n){if("string"!==typeof t)throw new TypeError("glob pattern string required")
n||(n={})
if(!n.nocomment&&"#"===t.charAt(0))return false
if(""===t.trim())return""===e
return new g(t,n).match(e)}function g(e,t){if(!(this instanceof g))return new g(e,t)
if("string"!==typeof e)throw new TypeError("glob pattern string required")
t||(t={})
e=e.trim()
"/"!==r.sep&&(e=e.split(r.sep).join("/"))
this.options=t
this.set=[]
this.pattern=e
this.regexp=null
this.negate=false
this.comment=false
this.empty=false
this.make()}g.prototype.debug=function(){}
g.prototype.make=_
function _(){if(this._made)return
var e=this.pattern
var t=this.options
if(!t.nocomment&&"#"===e.charAt(0)){this.comment=true
return}if(!e){this.empty=true
return}this.parseNegate()
var n=this.globSet=this.braceExpand()
t.debug&&(this.debug=console.error)
this.debug(this.pattern,n)
n=this.globParts=n.map((function(e){return e.split(h)}))
this.debug(this.pattern,n)
n=n.map((function(e,t,n){return e.map(this.parse,this)}),this)
this.debug(this.pattern,n)
n=n.filter((function(e){return-1===e.indexOf(false)}))
this.debug(this.pattern,n)
this.set=n}g.prototype.parseNegate=v
function v(){var e=this.pattern
var t=false
var n=this.options
var r=0
if(n.nonegate)return
for(var a=0,i=e.length;a<i&&"!"===e.charAt(a);a++){t=!t
r++}r&&(this.pattern=e.substr(r))
this.negate=t}m.braceExpand=function(e,t){return O(e,t)}
g.prototype.braceExpand=O
function O(e,t){t||(t=this instanceof g?this.options:{})
e="undefined"===typeof e?this.pattern:e
if("undefined"===typeof e)throw new TypeError("undefined pattern")
if(t.nobrace||!e.match(/\{.*\}/))return[e]
return i(e)}g.prototype.parse=k
var y={}
function k(e,t){if(e.length>65536)throw new TypeError("pattern is too long")
var n=this.options
if(!n.noglobstar&&"**"===e)return a
if(""===e)return""
var r=""
var i=!!n.nocase
var l=false
var d=[]
var f=[]
var h
var p=false
var b=-1
var m=-1
var g="."===e.charAt(0)?"":n.dot?"(?!(?:^|\\/)\\.{1,2}(?:$|\\/))":"(?!\\.)"
var _=this
function v(){if(h){switch(h){case"*":r+=s
i=true
break
case"?":r+=c
i=true
break
default:r+="\\"+h}_.debug("clearStateChar %j %j",h,r)
h=false}}for(var O,k=0,B=e.length;k<B&&(O=e.charAt(k));k++){this.debug("%s\t%s %s %j",e,k,r,O)
if(l&&u[O]){r+="\\"+O
l=false
continue}switch(O){case"/":return false
case"\\":v()
l=true
continue
case"?":case"*":case"+":case"@":case"!":this.debug("%s\t%s %s %j <-- stateChar",e,k,r,O)
if(p){this.debug("  in class")
"!"===O&&k===m+1&&(O="^")
r+=O
continue}_.debug("call clearStateChar %j",h)
v()
h=O
n.noext&&v()
continue
case"(":if(p){r+="("
continue}if(!h){r+="\\("
continue}d.push({type:h,start:k-1,reStart:r.length,open:o[h].open,close:o[h].close})
r+="!"===h?"(?:(?!(?:":"(?:"
this.debug("plType %j %j",h,r)
h=false
continue
case")":if(p||!d.length){r+="\\)"
continue}v()
i=true
var T=d.pop()
r+=T.close
"!"===T.type&&f.push(T)
T.reEnd=r.length
continue
case"|":if(p||!d.length||l){r+="\\|"
l=false
continue}v()
r+="|"
continue
case"[":v()
if(p){r+="\\"+O
continue}p=true
m=k
b=r.length
r+=O
continue
case"]":if(k===m+1||!p){r+="\\"+O
l=false
continue}if(p){var C=e.substring(m+1,k)
try{RegExp("["+C+"]")}catch(e){var S=this.parse(C,y)
r=r.substr(0,b)+"\\["+S[0]+"\\]"
i=i||S[1]
p=false
continue}}i=true
p=false
r+=O
continue
default:v()
l?l=false:!u[O]||"^"===O&&p||(r+="\\")
r+=O}}if(p){C=e.substr(m+1)
S=this.parse(C,y)
r=r.substr(0,b)+"\\["+S[0]
i=i||S[1]}for(T=d.pop();T;T=d.pop()){var I=r.slice(T.reStart+T.open.length)
this.debug("setting tail",r,T)
I=I.replace(/((?:\\{2}){0,64})(\\?)\|/g,(function(e,t,n){n||(n="\\")
return t+t+n+"|"}))
this.debug("tail=%j\n   %s",I,I,T,r)
var j="*"===T.type?s:"?"===T.type?c:"\\"+T.type
i=true
r=r.slice(0,T.reStart)+j+"\\("+I}v()
l&&(r+="\\\\")
var z=false
switch(r.charAt(0)){case".":case"[":case"(":z=true}for(var x=f.length-1;x>-1;x--){var M=f[x]
var E=r.slice(0,M.reStart)
var L=r.slice(M.reStart,M.reEnd-8)
var F=r.slice(M.reEnd-8,M.reEnd)
var D=r.slice(M.reEnd)
F+=D
var W=E.split("(").length-1
var X=D
for(k=0;k<W;k++)X=X.replace(/\)[+*?]?/,"")
D=X
var R=""
""===D&&t!==y&&(R="$")
var N=E+L+D+R+F
r=N}""!==r&&i&&(r="(?=.)"+r)
z&&(r=g+r)
if(t===y)return[r,i]
if(!i)return w(e)
var A=n.nocase?"i":""
try{var H=new RegExp("^"+r+"$",A)}catch(e){return new RegExp("$.")}H._glob=e
H._src=r
return H}m.makeRe=function(e,t){return new g(e,t||{}).makeRe()}
g.prototype.makeRe=B
function B(){if(this.regexp||false===this.regexp)return this.regexp
var e=this.set
if(!e.length){this.regexp=false
return this.regexp}var t=this.options
var n=t.noglobstar?s:t.dot?l:d
var r=t.nocase?"i":""
var i=e.map((function(e){return e.map((function(e){return e===a?n:"string"===typeof e?C(e):e._src})).join("\\/")})).join("|")
i="^(?:"+i+")$"
this.negate&&(i="^(?!"+i+").*$")
try{this.regexp=new RegExp(i,r)}catch(e){this.regexp=false}return this.regexp}m.match=function(e,t,n){n=n||{}
var r=new g(t,n)
e=e.filter((function(e){return r.match(e)}))
r.options.nonull&&!e.length&&e.push(t)
return e}
g.prototype.match=T
function T(e,t){this.debug("match",e,this.pattern)
if(this.comment)return false
if(this.empty)return""===e
if("/"===e&&t)return true
var n=this.options
"/"!==r.sep&&(e=e.split(r.sep).join("/"))
e=e.split(h)
this.debug(this.pattern,"split",e)
var a=this.set
this.debug(this.pattern,"set",a)
var i
var o
for(o=e.length-1;o>=0;o--){i=e[o]
if(i)break}for(o=0;o<a.length;o++){var c=a[o]
var s=e
n.matchBase&&1===c.length&&(s=[i])
var l=this.matchOne(s,c,t)
if(l){if(n.flipNegate)return true
return!this.negate}}if(n.flipNegate)return false
return this.negate}g.prototype.matchOne=function(e,t,n){var r=this.options
this.debug("matchOne",{this:this,file:e,pattern:t})
this.debug("matchOne",e.length,t.length)
for(var i=0,o=0,c=e.length,s=t.length;i<c&&o<s;i++,o++){this.debug("matchOne loop")
var l=t[o]
var d=e[i]
this.debug(t,l,d)
if(false===l)return false
if(l===a){this.debug("GLOBSTAR",[t,l,d])
var u=i
var f=o+1
if(f===s){this.debug("** at the end")
for(;i<c;i++)if("."===e[i]||".."===e[i]||!r.dot&&"."===e[i].charAt(0))return false
return true}while(u<c){var h=e[u]
this.debug("\nglobstar while",e,u,t,f,h)
if(this.matchOne(e.slice(u),t.slice(f),n)){this.debug("globstar found match!",u,c,h)
return true}if("."===h||".."===h||!r.dot&&"."===h.charAt(0)){this.debug("dot detected!",e,u,t,f)
break}this.debug("globstar swallow a segment, and continue")
u++}if(n){this.debug("\n>>> no match, partial?",e,u,t,f)
if(u===c)return true}return false}var p
if("string"===typeof l){p=r.nocase?d.toLowerCase()===l.toLowerCase():d===l
this.debug("string match",l,d,p)}else{p=d.match(l)
this.debug("pattern match",l,d,p)}if(!p)return false}if(i===c&&o===s)return true
if(i===c)return n
if(o===s){var b=i===c-1&&""===e[i]
return b}throw new Error("wtf?")}
function w(e){return e.replace(/\\(.)/g,"$1")}function C(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}},"33yf":function(e,t,n){(function(e){function n(e,t){var n=0
for(var r=e.length-1;r>=0;r--){var a=e[r]
if("."===a)e.splice(r,1)
else if(".."===a){e.splice(r,1)
n++}else if(n){e.splice(r,1)
n--}}if(t)for(;n--;n)e.unshift("..")
return e}t.resolve=function(){var t="",r=false
for(var i=arguments.length-1;i>=-1&&!r;i--){var o=i>=0?arguments[i]:e.cwd()
if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings")
if(!o)continue
t=o+"/"+t
r="/"===o.charAt(0)}t=n(a(t.split("/"),(function(e){return!!e})),!r).join("/")
return(r?"/":"")+t||"."}
t.normalize=function(e){var r=t.isAbsolute(e),o="/"===i(e,-1)
e=n(a(e.split("/"),(function(e){return!!e})),!r).join("/")
e||r||(e=".")
e&&o&&(e+="/")
return(r?"/":"")+e}
t.isAbsolute=function(e){return"/"===e.charAt(0)}
t.join=function(){var e=Array.prototype.slice.call(arguments,0)
return t.normalize(a(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings")
return e})).join("/"))}
t.relative=function(e,n){e=t.resolve(e).substr(1)
n=t.resolve(n).substr(1)
function r(e){var t=0
for(;t<e.length;t++)if(""!==e[t])break
var n=e.length-1
for(;n>=0;n--)if(""!==e[n])break
if(t>n)return[]
return e.slice(t,n-t+1)}var a=r(e.split("/"))
var i=r(n.split("/"))
var o=Math.min(a.length,i.length)
var c=o
for(var s=0;s<o;s++)if(a[s]!==i[s]){c=s
break}var l=[]
for(s=c;s<a.length;s++)l.push("..")
l=l.concat(i.slice(c))
return l.join("/")}
t.sep="/"
t.delimiter=":"
t.dirname=function(e){"string"!==typeof e&&(e+="")
if(0===e.length)return"."
var t=e.charCodeAt(0)
var n=47===t
var r=-1
var a=true
for(var i=e.length-1;i>=1;--i){t=e.charCodeAt(i)
if(47===t){if(!a){r=i
break}}else a=false}if(-1===r)return n?"/":"."
if(n&&1===r)return"/"
return e.slice(0,r)}
function r(e){"string"!==typeof e&&(e+="")
var t=0
var n=-1
var r=true
var a
for(a=e.length-1;a>=0;--a)if(47===e.charCodeAt(a)){if(!r){t=a+1
break}}else if(-1===n){r=false
n=a+1}if(-1===n)return""
return e.slice(t,n)}t.basename=function(e,t){var n=r(e)
t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length))
return n}
t.extname=function(e){"string"!==typeof e&&(e+="")
var t=-1
var n=0
var r=-1
var a=true
var i=0
for(var o=e.length-1;o>=0;--o){var c=e.charCodeAt(o)
if(47===c){if(!a){n=o+1
break}continue}if(-1===r){a=false
r=o+1}46===c?-1===t?t=o:1!==i&&(i=1):-1!==t&&(i=-1)}if(-1===t||-1===r||0===i||1===i&&t===r-1&&t===n+1)return""
return e.slice(t,r)}
function a(e,t){if(e.filter)return e.filter(t)
var n=[]
for(var r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r])
return n}var i="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){t<0&&(t=e.length+t)
return e.substr(t,n)}}).call(this,n("8oxB"))},"55KM":function(e,t,n){"use strict"
var r=n("VTBJ")
var a=n("rePB")
var i=n("1OyB")
var o=n("vuIU")
var c=n("md7G")
var s=n("foSv")
var l=n("Ji7U")
var d=n("q1tI")
var u=n.n(d)
var f=n("17x9")
var h=n.n(f)
var p=n("TSYQ")
var b=n.n(p)
var m=n("n12J")
var g=n("J2CL")
var _=n("nAyT")
var v=n("jtGx")
var O=n("i/8D")
function y(){return!!O["a"]&&"objectFit"in document.documentElement.style!==false}var k=n("oXx0")
function B(){return{effectTransitionDuration:"1s",imageBlurAmount:"0.25em"}}n.d(t,"a",(function(){return M}))
var T,w,C,S,I,j,z
var x={componentId:"IIMRk",template:function(e){return"\n\n.IIMRk_EtBB{bottom:auto;float:none;left:auto;line-height:normal;margin:0;max-height:none;max-width:100%;min-height:0;min-width:0;padding:0;position:static;right:auto;top:auto;transform:none}\n\n[dir=ltr] .IIMRk_EtBB,[dir=rtl] .IIMRk_EtBB{float:none}\n\n.IIMRk_fJwG{display:inline-block;vertical-align:middle}\n\n.IIMRk_cYkL{height:100%;left:0;position:absolute;top:0;transition:all ".concat(e.overlayTransitionDuration||"inherit",";width:100%}\n\n.IIMRk_fqss{display:block}\n\n.IIMRk_dIXK,.IIMRk_cYkL{transition:all ").concat(e.effectTransitionDuration||"inherit","}\n\n.IIMRk_fZcw,.IIMRk_dETD,.IIMRk_bPct,.IIMRk_eJVL{height:100%;width:100%}\n\n.IIMRk_eJVL{object-fit:cover}\n\n.IIMRk_fZcw{object-fit:contain}\n\n.IIMRk_fZcw.IIMRk_fqss{height:auto;max-height:100%;max-width:100%;width:auto}\n\n.IIMRk_baUy{height:inherit}\n\n.IIMRk_dETD{background-position:50%;background-repeat:no-repeat}\n\n.IIMRk_dETD.IIMRk_baUy{background-size:contain}\n\n.IIMRk_dETD.IIMRk_bPct{background-size:cover}\n\n.IIMRk_rUUn{overflow:hidden;position:relative}")},image:"IIMRk_EtBB",overlayLayout:"IIMRk_fJwG",overlay:"IIMRk_cYkL","has-overlay":"IIMRk_fqss","has-filter":"IIMRk_dIXK",contain:"IIMRk_fZcw","container--has-background":"IIMRk_dETD","container--has-cover":"IIMRk_bPct",cover:"IIMRk_eJVL","container--has-contain":"IIMRk_baUy","container--has-overlay":"IIMRk_rUUn"}
var M=(T=Object(k["a"])(),w=Object(_["a"])("7.0.0",{cover:"constrain"}),C=Object(_["a"])("7.0.0",null,"Use Img from ui-img instead."),S=Object(g["themeable"])(B,x),T(I=w(I=C(I=S(I=(z=j=function(e){Object(l["a"])(t,e)
function t(){Object(i["a"])(this,t)
return Object(c["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(o["a"])(t,[{key:"renderFilter",value:function(){var e="blur(".concat(this.theme.imageBlurAmount,")")
var t="grayscale(1)"
return this.props.grayscale&&this.props.blur?"".concat(e," ").concat(t):this.props.grayscale?t:this.props.blur?e:null}},{key:"render",value:function(){var e
var n=this.props,i=n.src,o=n.alt,c=n.margin,s=n.inline,l=n.overlay,d=n.grayscale,f=n.blur,h=n.cover,p=n.constrain,g=n.width,_=n.height,O=n.elementRef
var y={alt:o||""}
var k={className:b()((e={},Object(a["a"])(e,x.image,true),Object(a["a"])(e,x["has-overlay"],l),Object(a["a"])(e,x["has-filter"],f||d),Object(a["a"])(e,x.cover,this.supportsObjectFit&&(h||"cover"===p)),Object(a["a"])(e,x.contain,this.supportsObjectFit&&"contain"===p),e)),style:{filter:f||d?this.renderFilter():"none"},src:i}
var B=Object(r["a"])({},m["a"].omitViewProps(Object(v["a"])(this.props,t.propTypes),t),{width:g,height:_,margin:c,display:s?"inline-block":"block",elementRef:O})
var T=!this.supportsObjectFit&&(h||p)
if(l||T){var w
var C=T?Object(r["a"])({},y,{},B):B
return u.a.createElement(m["a"],Object.assign({},C,{as:"span",className:b()((w={},Object(a["a"])(w,x["container--has-overlay"],l),Object(a["a"])(w,x["container--has-cover"],h||"cover"===p),Object(a["a"])(w,x["container--has-contain"],"contain"===p),Object(a["a"])(w,x["container--has-background"],T),w)),style:{backgroundImage:T?"url(".concat(i,")"):void 0}}),!T&&u.a.createElement("img",Object.assign({},k,y)),l&&u.a.createElement("span",{className:x.overlay,style:{backgroundColor:l.color,opacity:.1*l.opacity,mixBlendMode:l.blend?l.blend:null}}))}return u.a.createElement(m["a"],Object.assign({},B,k,y,{as:"img"}))}},{key:"supportsObjectFit",get:function(){return y()}}])
t.displayName="Img"
return t}(d["Component"]),j.propTypes={src:h.a.string.isRequired,alt:h.a.string,inline:h.a.bool,margin:g["ThemeablePropTypes"].spacing,overlay:h.a.shape({color:h.a.string.isRequired,opacity:h.a.oneOf([0,1,2,3,4,5,6,7,8,9,10]).isRequired,blend:h.a.oneOf(["normal","multiply","screen","overlay","color-burn"])}),grayscale:h.a.bool,blur:h.a.bool,cover:h.a.bool,constrain:h.a.oneOf(["cover","contain"]),elementRef:h.a.func,height:h.a.oneOfType([h.a.string,h.a.number]),width:h.a.oneOfType([h.a.string,h.a.number])},j.defaultProps={margin:void 0,overlay:void 0,constrain:void 0,elementRef:void 0,height:void 0,width:void 0,alt:"",inline:true,grayscale:false,blur:false},z))||I)||I)||I)||I)},"7Lu0":function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var r=n("VTBJ")
var a=n("1OyB")
var i=n("vuIU")
var o=n("md7G")
var c=n("foSv")
var s=n("Ji7U")
var l=n("q1tI")
var d=n.n(l)
var u=n("hPGw")
var f=d.a.createElement("path",{d:"M572.501 747l-254.933 815.893-101.867-31.786 278.507-890.774h1105.813v-320H783.808L612.181 107H.021v1546.667c0 88.213 71.787 160 160 160h1388.054c75.946 0 141.973-54.08 156.906-128.64L1892.608 747H572.501z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var h=function(e){Object(s["a"])(t,e)
function t(){Object(a["a"])(this,t)
return Object(o["a"])(this,Object(c["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){return d.a.createElement(u["a"],Object.assign({},this.props,{name:"IconOpenFolder",viewBox:"0 0 1920 1920",bidirectional:true}),f)}}])
t.displayName="IconOpenFolderSolid"
return t}(l["Component"])
h.glyphName="open-folder"
h.variant="Solid"
h.propTypes=Object(r["a"])({},u["a"].propTypes)},HVsT:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var r=n("VTBJ")
var a=n("1OyB")
var i=n("vuIU")
var o=n("md7G")
var c=n("foSv")
var s=n("Ji7U")
var l=n("q1tI")
var d=n.n(l)
var u=n("hPGw")
var f=d.a.createElement("path",{d:"M213.333 960c0-167.36 56-321.707 149.44-446.4L1406.4 1557.227c-124.693 93.44-279.04 149.44-446.4 149.44-411.627 0-746.667-335.04-746.667-746.667m1493.334 0c0 167.36-56 321.707-149.44 446.4L513.6 362.773c124.693-93.44 279.04-149.44 446.4-149.44 411.627 0 746.667 335.04 746.667 746.667M960 0C429.76 0 0 429.76 0 960s429.76 960 960 960 960-429.76 960-960S1490.24 0 960 0",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var h=function(e){Object(s["a"])(t,e)
function t(){Object(a["a"])(this,t)
return Object(o["a"])(this,Object(c["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){return d.a.createElement(u["a"],Object.assign({},this.props,{name:"IconNo",viewBox:"0 0 1920 1920"}),f)}}])
t.displayName="IconNoSolid"
return t}(l["Component"])
h.glyphName="no"
h.variant="Solid"
h.propTypes=Object(r["a"])({},u["a"].propTypes)},IqBw:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var r=n("VTBJ")
var a=n("1OyB")
var i=n("vuIU")
var o=n("md7G")
var c=n("foSv")
var s=n("Ji7U")
var l=n("q1tI")
var d=n.n(l)
var u=n("hPGw")
var f=d.a.createElement("path",{d:"M1493.602 1468.294H225.837C523.211 387.9 755.305 1443.9 983.898 1115.918c284.612-408.283 590.57-405.685 710.174 352.376h-200.47zm-816-1129.412c124.8 0 225.882 101.196 225.882 225.883 0 124.687-101.082 225.882-225.882 225.882-124.687 0-225.882-101.195-225.882-225.882 0-124.687 101.195-225.883 225.882-225.883zM-.045 1807.118h1920V113h-1920v1694.118z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var h=function(e){Object(s["a"])(t,e)
function t(){Object(a["a"])(this,t)
return Object(o["a"])(this,Object(c["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){return d.a.createElement(u["a"],Object.assign({},this.props,{name:"IconImage",viewBox:"0 0 1920 1920"}),f)}}])
t.displayName="IconImageSolid"
return t}(l["Component"])
h.glyphName="image"
h.variant="Solid"
h.propTypes=Object(r["a"])({},u["a"].propTypes)},J3yE:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var r=n("VTBJ")
var a=n("1OyB")
var i=n("vuIU")
var o=n("md7G")
var c=n("foSv")
var s=n("Ji7U")
var l=n("q1tI")
var d=n.n(l)
var u=n("hPGw")
var f=d.a.createElement("path",{d:"M1072.156 537.778c59.802-.707 116.561 14.29 157.774 56.99 36.644 37.974 50.015 91.327 43.72 142.908-9.128 74.877-30.737 144.983-56.093 215.657-27.129 75.623-54.66 151.09-82.332 226.512-44.263 120.685-88.874 241.237-132.65 362.1-10.877 30.018-18.635 62.072-21.732 93.784-3.376 34.532 21.462 51.526 52.648 36.203 24.977-12.278 49.288-28.992 68.845-48.768 31.952-32.31 63.766-64.776 94.805-97.98 15.515-16.605 30.86-33.397 45.912-50.438 11.993-13.583 24.318-34.02 40.779-42.28 31.17-15.642 55.226 22.846 49.582 49.794-6.008 28.736-27.377 53.54-45.014 75.973-54.87 69.795-115.044 137.088-183.308 193.977-67.103 55.77-141.607 103.216-223.428 133.98-26.65 10.016-53.957 18.253-81.713 24.563-53.585 12.192-112.798 11.283-167.56 3.333-40.151-5.828-76.246-31.44-93.264-68.707-29.544-64.698-8.98-144.595 6.295-210.45 20.37-87.77 51.85-170.961 83.13-255.163 33.253-89.517 67.435-178.676 101.726-267.797 31.294-81.296 62.72-162.537 93.69-243.95 8.718-22.923 21.183-45.255 24.845-68.963 6.109-39.537-22.406-74.738-61.985-51.947-92.46 53.244-153.538 141.534-224.52 218.4-16.089 17.43-35.243 39.04-62.907 19.07-29.521-21.308-20.765-48.637-3.987-71.785 93.18-128.58 205.056-248.86 350.86-316.783 60.932-28.386 146.113-57.285 225.882-58.233zM1440 205.244c-.008 169.189-182.758 284.908-335.53 212.455-78.956-37.446-117.358-126.202-98.219-227.002 26.494-139.598 183.78-227.203 315.717-175.87 76.703 29.846 118.04 96.533 118.032 190.417z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var h=function(e){Object(s["a"])(t,e)
function t(){Object(a["a"])(this,t)
return Object(o["a"])(this,Object(c["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){return d.a.createElement(u["a"],Object.assign({},this.props,{name:"IconInfoBorderless",viewBox:"0 0 1920 1920"}),f)}}])
t.displayName="IconInfoBorderlessSolid"
return t}(l["Component"])
h.glyphName="info-borderless"
h.variant="Solid"
h.propTypes=Object(r["a"])({},u["a"].propTypes)},"L+/K":function(e,t,n){"use strict"
var r=n("1OyB")
var a=n("vuIU")
var i=n("md7G")
var o=n("foSv")
var c=n("Ji7U")
n("DEX3")
var s=n("q1tI")
var l=n.n(s)
var d=n("i8i4")
var u=n.n(d)
var f=n("17x9")
var h=n.n(f)
var p=n("TSYQ")
var b=n.n(p)
var m=n("3zPy")
var g=n.n(m)
var _=n("nAyT")
var v=n("E+IV")
var O=n("Mmr1")
var y=n("n12J")
var k=n("6SzX")
var B=n("HVsT")
var T=n("J3yE")
var w=n("97gy")
var C=n("znKQ")
var S=n("XQb/")
var I=n("J2CL")
var j=n("BTe1")
function z(e){var t=e.colors,n=e.borders,r=e.spacing,a=e.typography,i=e.shadows
return{background:t.backgroundLightest,color:t.textDarkest,marginTop:r.small,borderRadius:n.radiusMedium,borderWidth:n.widthMedium,borderStyle:n.style,contentPadding:"".concat(r.small," ").concat(r.medium),contentFontSize:a.fontSizeMedium,contentFontFamily:a.fontFamily,contentFontWeight:a.fontWeightNormal,contentLineHeight:a.lineHeightCondensed,closeButtonMarginTop:r.xSmall,closeButtonMarginRight:r.xxSmall,iconColor:t.textLightest,iconBackground:t.backgroundLightest,successBorderColor:t.borderSuccess,successIconBackground:t.backgroundSuccess,infoBorderColor:t.borderInfo,infoIconBackground:t.backgroundInfo,warningBorderColor:t.borderWarning,warningIconBackground:t.backgroundWarning,dangerBorderColor:t.borderDanger,dangerIconBackground:t.backgroundDanger,boxShadow:i.depth2}}z.canvas=function(e){return{color:e["ic-brand-font-color-dark"]}}
n.d(t,"a",(function(){return W}))
var x,M,E,L,F
var D={componentId:"cvphu",template:function(e){return"\n\n.cvphu_bgqc{background:".concat(e.background||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";border-style:").concat(e.borderStyle||"inherit",";border-width:").concat(e.borderWidth||"inherit",";box-shadow:").concat(e.boxShadow||"inherit",";color:").concat(e.color||"inherit",";display:flex;min-width:12rem}\n\n.cvphu_bgqc,.cvphu_caGd{box-sizing:border-box}\n\n.cvphu_caGd{flex:1;font-family:").concat(e.contentFontFamily||"inherit",";font-size:").concat(e.contentFontSize||"inherit",";font-weight:").concat(e.contentFontWeight||"inherit",";line-height:").concat(e.contentLineHeight||"inherit",";min-width:0.0625rem;padding:").concat(e.contentPadding||"inherit","}\n\n.cvphu_dnnz{align-items:center;border-right:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit",";color:").concat(e.iconColor||"inherit",";flex:0 0 2.5rem;font-size:1.125rem;justify-content:center}\n\n.cvphu_fsGh,.cvphu_dnnz{box-sizing:border-box;display:flex}\n\n.cvphu_fsGh{align-items:flex-start;margin-right:").concat(e.closeButtonMarginRight||"inherit",";margin-top:").concat(e.closeButtonMarginTop||"inherit",";order:1}\n\n.cvphu_cOXX{border-color:").concat(e.successBorderColor||"inherit","}\n\n.cvphu_cOXX .cvphu_dnnz{background-color:").concat(e.successIconBackground||"inherit",";border-right-color:").concat(e.successIconBackground||"inherit","}\n\n.cvphu_pypk{border-color:").concat(e.infoBorderColor||"inherit","}\n\n.cvphu_pypk .cvphu_dnnz{background:").concat(e.infoIconBackground||"inherit",";border-right-color:").concat(e.infoIconBackground||"inherit","}\n\n.cvphu_ddvR{border-color:").concat(e.dangerBorderColor||"inherit","}\n\n.cvphu_ddvR .cvphu_dnnz{background:").concat(e.dangerIconBackground||"inherit",";border-right-color:").concat(e.dangerIconBackground||"inherit","}\n\n.cvphu_eRqw{border-color:").concat(e.warningBorderColor||"inherit","}\n\n.cvphu_eRqw .cvphu_dnnz{background:").concat(e.warningIconBackground||"inherit",";border-right-color:").concat(e.warningIconBackground||"inherit","}")},alert:"cvphu_bgqc",content:"cvphu_caGd",icon:"cvphu_dnnz",closeButton:"cvphu_fsGh",success:"cvphu_cOXX",info:"cvphu_pypk",error:"cvphu_ddvR",warning:"cvphu_eRqw"}
var W=(x=Object(_["a"])("7.0.0",{closeButtonLabel:"renderCloseButtonLabel"}),M=Object(I["themeable"])(z,D),x(E=M(E=(F=L=function(e){Object(c["a"])(t,e)
function t(e){var n
Object(r["a"])(this,t)
n=Object(i["a"])(this,Object(o["a"])(t).call(this,e))
n._timeouts=[]
n.handleTimeout=function(){n.props.timeout>0&&n._timeouts.push(setTimeout((function(){n.close()}),n.props.timeout))}
n.onExitTransition=function(){n.props.onDismiss&&n.props.onDismiss()}
n.close=function(){n.clearTimeouts()
n.removeScreenreaderAlert()
n.setState({open:false},(function(){n.props.onDismiss&&"none"===n.props.transition&&n.props.onDismiss()}))}
n.handleKeyUp=function(e){(n.props.renderCloseButtonLabel||n.props.closeButtonLabel)&&e.keyCode===g.a.codes.esc&&n.close()}
n.state={open:true}
return n}Object(a["a"])(t,[{key:"variantUI",value:function(){return{error:{Icon:B["a"],classNames:b()(D.alert,D.error)},info:{Icon:T["a"],classNames:b()(D.alert,D.info)},success:{Icon:w["a"],classNames:b()(D.alert,D.success)},warning:{Icon:C["a"],classNames:b()(D.alert,D.warning)}}[this.props.variant]}},{key:"clearTimeouts",value:function(){this._timeouts.forEach((function(e){return clearTimeout(e)}))
this._timeouts=[]}},{key:"isDOMNode",value:function(e){return e&&"object"===typeof e&&1===e.nodeType}},{key:"getLiveRegion",value:function(){var e=null
"function"===typeof this.props.liveRegion&&(e=this.props.liveRegion())
return this.isDOMNode(e)?e:null}},{key:"initLiveRegion",value:function(e){e.getAttribute("role")
if(e){e.setAttribute("aria-live",this.props.liveRegionPoliteness)
e.setAttribute("aria-relevant","additions text")
e.setAttribute("aria-atomic",this.props.isLiveRegionAtomic)}}},{key:"createScreenreaderContentNode",value:function(){return l.a.createElement(k["a"],null,this.props.children)}},{key:"createScreenreaderAlert",value:function(){var e=this.getLiveRegion()
if(e){this.srid=Object(j["a"])("Alert")
var t=document.createElement("div")
t.setAttribute("id",this.srid)
var n=this.createScreenreaderContentNode()
u.a.render(n,t)
e.appendChild(t)}}},{key:"updateScreenreaderAlert",value:function(){var e=this
if(this.getLiveRegion()){var t=document.getElementById(this.srid)
t&&u.a.render(null,t,(function(){var n=e.createScreenreaderContentNode()
u.a.render(n,t)}))}}},{key:"removeScreenreaderAlert",value:function(){var e=this.getLiveRegion()
if(e){var t=document.getElementById(this.srid)
if(t){e.removeAttribute("aria-live")
e.removeAttribute("aria-relevant")
e.removeAttribute("aria-atomic")
u.a.unmountComponentAtNode(t)
t.parentNode.removeChild(t)
this.initLiveRegion(e)}}}},{key:"componentDidMount",value:function(){var e=this.getLiveRegion()
e&&this.initLiveRegion(e)
this.handleTimeout()
this.createScreenreaderAlert()}},{key:"componentDidUpdate",value:function(e){false===!!this.props.open&&!!this.props.open!==!!e.open?this.close():this.props.children!==e.children&&this.updateScreenreaderAlert()}},{key:"componentWillUnmount",value:function(){this.removeScreenreaderAlert()
this.clearTimeouts()}},{key:"renderIcon",value:function(){var e=this.variantUI(),t=e.Icon
return l.a.createElement("div",{className:D.icon},l.a.createElement(t,{className:D.alertIcon}))}},{key:"renderCloseButton",value:function(){var e=this.props.renderCloseButtonLabel&&Object(v["a"])(this.props.renderCloseButtonLabel)||this.props.closeButtonLabel
return e?l.a.createElement("div",{className:D.closeButton,key:"closeButton"},l.a.createElement(O["a"],{onClick:this.close,size:"small",variant:"icon"},e)):null}},{key:"renderAlert",value:function(){var e=this.variantUI(),t=e.classNames
return l.a.createElement(y["a"],{as:"div",margin:this.props.margin,className:t,onKeyUp:this.handleKeyUp},this.renderIcon(),l.a.createElement("div",{className:D.content},this.props.children),this.renderCloseButton())}},{key:"render",value:function(){if(this.props.screenReaderOnly){this.getLiveRegion()
return null}if("none"===this.props.transition)return this.state.open?this.renderAlert():null
return l.a.createElement(S["a"],{type:this.props.transition,transitionOnMount:true,in:this.state.open,unmountOnExit:true,onExited:this.onExitTransition},this.renderAlert())}}])
t.displayName="Alert"
return t}(s["Component"]),L.propTypes={children:h.a.node,variant:h.a.oneOf(["info","success","warning","error"]),margin:I["ThemeablePropTypes"].spacing,liveRegion:h.a.func,liveRegionPoliteness:h.a.oneOf(["polite","assertive"]),isLiveRegionAtomic:h.a.bool,screenReaderOnly:h.a.bool,timeout:h.a.number,renderCloseButtonLabel:h.a.oneOfType([h.a.func,h.a.node]),closeButtonLabel:h.a.string,onDismiss:h.a.func,transition:h.a.oneOf(["none","fade"]),open:h.a.bool},L.defaultProps={variant:"info",margin:"x-small 0",timeout:0,transition:"fade",open:true,screenReaderOnly:false,liveRegionPoliteness:"assertive",isLiveRegionAtomic:false,onDismiss:void 0,liveRegion:void 0,renderCloseButtonLabel:void 0,closeButtonLabel:void 0,children:null},F))||E)||E)},M1Vv:function(e,t,n){"use strict"
var r=n("pQTu")
var a=n("m0r6")
Object(a["a"])(JSON.parse('{"de":{"a_file_named_itemname_already_exists_in_this_folde_b0dc7185":"Es gibt bereits eine Datei namens %{itemName} in diesem Ordner.","actions_efcde10d":"Aktionen","add_folder_ba50d107":"Ordner hinzufügen","all_my_files_a0213441":"Alle meine Dateien","an_error_occurred_trying_to_prepare_download_pleas_df6fa596":"Beim Vorbereiten des Downloadvorgangs ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal.","an_unknown_server_error_occurred_please_try_again_f517eaf3":"Ein unbekannter Serverfehler ist aufgetreten. Bitte versuchen Sie es erneut.","are_you_sure_you_want_to_delete_these_count_items_148e98ba":{"one":"Möchten Sie %{name} wirklich löschen?","other":"Möchten Sie diese %{count} Elemente wirklich löschen?"},"available_folders_694d0436":"Verfügbare Ordner","before_publishing_this_file_you_must_specify_usage_2229d20b":"Vor dem Veröffentlichen dieser Datei müssen Sie die Nutzungsrechte festlegen.","cancel_caeb1e68":"Abbrechen","copy_to_folder_32ecc3c3":"In Ordner kopieren","copying_628a9607":"Wird kopiert ...","count_items_deleted_successfully_a287aa53":{"one":"%{name} erfolgreich gelöscht","other":"%{count} Elemente erfolgreich gelöscht"},"count_items_selected_91814713":{"one":"%{count} Element ausgewählt","other":"%{count} Elemente ausgewählt"},"course_files_a31f97fc":"Kursdateien","creative_commons_714a065f":"Creative Commons","delete_a6efa79d":"Löschen","download_as_zip_5dae7f19":"Als ZIP-Datei herunterladen","download_c7ffdfb9":"Herunterladen","edit_permissions_for_count_items_d65e3855":{"one":"Berechtigungen bearbeiten für: %{itemName}","other":"Berechtigungen für %{count} Elemente bearbeiten"},"error_deleting_name_reason_11f9d399":"Fehler beim Löschen von %{name}: %{reason}","error_message_2b9d12ee":"Fehler: %{message}","error_uploading_file_e2d31b56":"Fehler beim Hochladen einer Datei.","fair_use_bee47d77":"Angemessene Nutzung","file_list_350d08df":"Dateiliste","file_name_2fe68ec1":"Dateiname","file_upload_failed_af22dd91":"Hochladen der Datei fehlgeschlagen.","file_uploading_56c9c0c8":"Datei wird hochgeladen","filename_progress_percent_uploaded_1f465e66":"%{fileName} – %{progress} Prozent hochgeladen","filename_uploaded_successfully_edd8e825":"%{fileName} hochgeladen.","files_c300e900":"Dateien","files_menu_86dddbc0":"Dateienmenü","files_quota_percentused_of_bytesavailable_used_7f62792c":"Dateienkontingent: %{percentUsed} von %{bytesAvailable} verwendet","files_toolbar_2f2f0976":"Werkzeugleiste „Dateien“","folder_705fd2d7":"Ordner","folder_browsing_tree_1f00a3ae":"Baumstruktur zum Durchsuchen von Ordnern","folder_tree_fbab0726":"Ordnerstruktur","group_files_82e5dcdb":"Gruppendateien","if_you_leave_the_zip_file_download_currently_being_c47c1dfb":"Wenn Sie die Seite verlassen, wird der gerade vorbereitete ZIP-Datei-Download abgebrochen.","loading_folders_d8b5869e":"Ordner werden geladen","loading_more_results_def6df65":"Weitere Ergebnisse werden geladen ...","locked_762f138b":"Gesperrt","manage_access_bd923d8d":"Zugang verwalten","manage_usage_rights_c5a8c216":"Nutzungsrechte verwalten","move_abf00365":"Verschieben","moving_a4d552df":"Wird verschoben ...","my_files_2f621040":"Meine Dateien","own_copyright_cc59db55":"Ist Inhaber des Urheberrechts","percentused_of_bytesavailable_used_a859a40d":"%{percentUsed} von %{bytesAvailable} verwendet","please_enter_a_search_term_with_three_or_more_char_53fd5ed8":"Geben Sie einen Suchbegriff mit drei oder mehr Zeichen ein.","public_domain_112ed397":"Public Domain","react_files":{"accept":"Akzeptieren","cancel":"Abbrechen","confirm_delete_with_contents":{"one":"Möchten Sie %{name} wirklich löschen? Das Element ist nicht leer. Alle Inhalte des Elements werden ebenfalls gelöscht.","other":"Möchten Sie diese %{count} Elemente und alle ihre Inhalte wirklich löschen?"},"created_at":"Erstellungsdatum","created_at_short":"Erstellt","errors":{"no_match":{"keywords":"Andere Schlüsselwörter probieren","spelled":"Stellen Sie sicher, dass alle Wörter richtig geschrieben sind.","suggestions":"Vorschläge:","three_chars":"Geben Sie mindestens 3 Buchstaben in das Suchfeld ein.","your_search":"Bei Ihrer Suche – „%{search_term}“ – wurden keine übereinstimmenden Dateien gefunden."}},"files":"Dateien","folder_browsing_tree":"Baumstruktur zum Durchsuchen von Ordnern","folder_name":"Ordnername","modified_by":"Geändert von","move_question":{"one":"Wohin möchten Sie %{item} verschieben?","other":"Wohin möchten Sie diese %{count} Elemente verschieben?"},"move_success":{"one":"%{item} in %{destinationFolder} verschoben","other":"%{count} Elemente in %{destinationFolder} verschoben"},"name":"Name","progress_message":"Download wird vorbereitet: %{percent}% abgeschlossen","results_count":"%{num_results} Suchergebnisse werden angezeigt","search_results_for":"Suchergebnisse für „%{search_term}“","select_all":"Alle auswählen","size":"Größe","sorted_ascending":"Aufsteigend sortiert","sorted_desending":"Absteigend sortiert","this_folder_is_empty":"Dieser Ordner ist leer.","updated_at":"Änderungsdatum","updated_at_short":"Geändert"},"rename_45608f54":"Umbenennen","retry_ebd5f8ba":"Erneut versuchen","search_for_files_7541fb28":"Nach Dateien suchen","select_d70f31da":"Auswählen","select_itemname_f70db487":"%{itemName} auswählen","show_and_hide_courses_menu_9e09d1d0":"Kurs-Menü ein- und ausblenden","something_went_wrong_d238c551":"Etwas ging schief.","sorted_direction_by_columnname_d049ac44":"%{direction} sortiert nach %{columnName}","success_file_uploaded_8174e93f":"Erfolg: Datei hochgeladen","this_folder_is_currently_locked_and_unavailable_to_f85c451":"Dieser Ordner ist derzeit gesperrt und kann nicht angezeigt werden.","upload_file_fd2361b8":"Datei hochladen","upload_not_available_for_this_folder_8f8623c6":"Hochladen ist für diesen Ordner nicht verfügbar","usage_rights_f0960ad6":"Nutzungsrechte","used_by_permission_314a78dd":"Verwendung mit Genehmigung","view_ba339f93":"Ansehen","viewing_folders_is_not_available_798a15e1":"Ansicht von Ordnern ist nicht verfügbar","warning_for_improved_accessibility_in_moving_files_71e1028b":"Achtung: Um den Zugriff beim Verschieben von Dateien zu verbessern, verwenden Sie die Dialogoption „Verschieben in“ aus dem Menü.","your_search_encountered_the_following_errors_fc3e5e7f":{"one":"Bei Ihrer Suche ist folgender Fehler aufgetreten:","other":"Bei Ihrer Suche sind folgende Fehler aufgetreten:"}},"hu":{"a_file_named_itemname_already_exists_in_this_folde_b0dc7185":"Már létezik %{itemName} nevű fájl ebben a mappában.","actions_efcde10d":"Tevékenységek","add_folder_ba50d107":"Mappa hozzáadása","all_my_files_a0213441":"Összes fájlom","an_error_occurred_trying_to_prepare_download_pleas_df6fa596":"Hiba történt a letöltés előkészítése során, kérjük, próbálja újra!","an_unknown_server_error_occurred_please_try_again_f517eaf3":"Ismeretlen szerverhiba történt. Kérjük, próbálja újra!","are_you_sure_you_want_to_delete_these_count_items_148e98ba":{"one":"Biztos, hogy törölni szeretné ezt: %{name}?","other":"Biztos, hogy törölni szeretné ezt a %{count} elemet?"},"before_publishing_this_file_you_must_specify_usage_2229d20b":"Ennek a fájlnak a publikálása előtt be kell állítania a használati jogokat.","cancel_caeb1e68":"Mégse","copy_to_folder_32ecc3c3":"Másolás mappába","copying_628a9607":"Másolás...","count_items_deleted_successfully_a287aa53":{"one":"%{name} sikeresen törölve.","other":"%{count} elem sikeresen törölve."},"count_items_selected_91814713":{"one":"%{count} elem kiválasztva","other":"%{count} elem kiválasztva"},"course_files_a31f97fc":"Kurzusfájlok","creative_commons_714a065f":"Creative Commons - \\"kreatív közjavak\\"","delete_a6efa79d":"Törlés","download_as_zip_5dae7f19":"Letöltés zip fájlként","download_c7ffdfb9":"Letöltés","edit_permissions_for_count_items_d65e3855":{"one":"Engedélyek kezelése %{itemName} elemhez","other":"Engedélyek kezelése %{count} elemhez"},"error_deleting_name_reason_11f9d399":"Hiba történt %{name} törlésekor: %{reason}","error_message_2b9d12ee":"Hiba: %{message}","error_uploading_file_e2d31b56":"Hiba adódott a fájl feltöltése közben.","fair_use_bee47d77":"Méltányos használat","file_list_350d08df":"Fájllista","file_name_2fe68ec1":"Fájlnév","filename_progress_percent_uploaded_1f465e66":"%{fileName} - %{progress} százalék feltöltve","filename_uploaded_successfully_edd8e825":"%{fileName} feltöltése sikeres volt!","files_c300e900":"Fájlok","files_toolbar_2f2f0976":"Fájlok eszköztár","folder_705fd2d7":"Mappa","folder_browsing_tree_1f00a3ae":"Mappaböngészés fanézetben","group_files_82e5dcdb":"Csoportfájlok","if_you_leave_the_zip_file_download_currently_being_c47c1dfb":"Ha elhagyja az oldalt, a zip fájl letöltésének előkészítése megszakad.","loading_more_results_def6df65":"További találatok betöltése...","locked_762f138b":"Zárolt","manage_access_bd923d8d":"Hozzáférés kezelése","manage_usage_rights_c5a8c216":"Felhasználói jogosultságok kezelése","move_abf00365":"Áthelyezés","moving_a4d552df":"Áthelyezés...","my_files_2f621040":"Fájljaim","own_copyright_cc59db55":"Szerzői jog birtoklása","please_enter_a_search_term_with_three_or_more_char_53fd5ed8":"Kérjük, olyan keresési kifejezést írjon be, ami három vagy több karakterből áll","public_domain_112ed397":"Közkincs","react_files":{"accept":"Elfogad","cancel":"Mégse","confirm_delete_with_contents":{"one":"Biztos benne, hogy törli ezt az elemet %{name}? Ha nem üres, akkor minden egyebet is töröl benne.","other":"Biztos benne, hogy törli ezt a/az  %{count} elemet és minden egyebet benne?"},"created_at":"Létrehozás dátuma","created_at_short":"Létrehozva","errors":{"no_match":{"keywords":"Próbálja más kulcsszavakkal!","spelled":"Győződjön meg róla, hogy minden szó helyesen van leírva!","suggestions":"Javaslatok:","three_chars":"Legalább 3 karaktert be kell írni a keresőmezőbe!","your_search":"A keresésre - \\"%{search_term}\\" - nincs találat a fájlok között."}},"files":"Fájlok","folder_browsing_tree":"Mappaböngészés fanézetben","folder_name":"Mappa neve","modified_by":"Módosította","move_question":{"one":"Hová szeretné áthelyezni ezt az elemet %{item}?","other":"Hová szeretné áthelyezni ezt a/az %{count} elemet?"},"move_success":{"one":"%{item} elem áthelyezve ide: %{destinationFolder}","other":"%{count} elem áthelyezve ide: %{destinationFolder}"},"name":"Név","progress_message":"Letöltés előkészítése: %{percent}% kész","results_count":"%{num_results} keresési eredmény megjelenítése","search_results_for":"keresés eredménye a következő keresőszavakra: \\"%{search_term}\\"","select_all":"Összes kiválasztása","size":"Méret","sorted_ascending":"Emelkedő sorrendben","sorted_desending":"Csökkenő sorrendben","this_folder_is_empty":"Ez a mappa üres","updated_at":"Módosítás dátuma","updated_at_short":"Módosítva"},"rename_45608f54":"Átnevezés","retry_ebd5f8ba":"Újra","search_for_files_7541fb28":"Fájlok keresése","select_d70f31da":"Kiválasztás","select_itemname_f70db487":"%{itemName} kiválasztása","show_and_hide_courses_menu_9e09d1d0":"Kurzusok menü megjelenítése és elrejtése","this_folder_is_currently_locked_and_unavailable_to_f85c451":"A mappa jelenleg zárolva van, nem megtekinthető.","usage_rights_f0960ad6":"Felhasználási jogok","used_by_permission_314a78dd":"Használat engedéllyel","view_ba339f93":"Megtekintés","viewing_folders_is_not_available_798a15e1":"Mappák megtekintése nem elérhető","warning_for_improved_accessibility_in_moving_files_71e1028b":"Figyelem! A fájlok rendezésének jobb hozzáférhetőségének érdekében, kérjük, használja a használja a menü Mozgatás ide párbeszédablakát.","your_search_encountered_the_following_errors_fc3e5e7f":{"one":"A keresés során a következő hiba merült fel:","other":"A keresés során a következő hibák merültek fel:"}}}'))
n("jQeR")
n("0sPK")
t["a"]=r["default"].scoped("react_files")},"Op/J":function(e,t,n){"use strict"
n.r(t)
var r=n("An8g")
var a=n("VTBJ")
var i=n("M1Vv")
var o=n("q1tI")
var c=n.n(o)
var s=n("LvDl")
var l=n.n(s)
var d=n("ouhR")
var u=n.n(d)
var f=n("x1Tw")
var h=n("2LKJ")
var p=n.n(h)
var b=n("1OyB")
var m=n("vuIU")
var g=n("md7G")
var _=n("foSv")
var v=n("Ji7U")
var O=n("17x9")
var y=n.n(O)
var k=n("3zPy")
var B=n.n(k)
var T=n("+Pml")
var w=n("+Gzo")
var C=n("J2CL")
var S=n("jtGx")
var I=n("cClk")
var j=n("oXx0")
var z=n("rePB")
var x=n("TSYQ")
var M=n.n(x)
var E=n("8S//")
var L=n("M4Ft")
var F=n("55KM")
function D(e){var t=e.colors,n=e.spacing,r=e.typography,a=e.borders
return{hoverBackgroundColor:t.backgroundBrand,hoverTextColor:t.textLightest,focusOutlineWidth:a.widthMedium,focusOutlineColor:t.borderBrand,focusOutlineStyle:a.style,iconColor:t.textDarkest,iconsMarginRight:n.xSmall,descriptorMarginTop:n.xxxSmall,descriptorTextColor:t.textDarkest,descriptorFontSizeSmall:r.fontSizeXSmall,descriptorFontSizeMedium:r.fontSizeXSmall,descriptorFontSizeLarge:r.fontSizeSmall,nameTextColor:t.textBrand,nameFontSizeSmall:r.fontSizeXSmall,nameFontSizeMedium:r.fontSizeSmall,nameFontSizeLarge:r.fontSizeMedium,baseSpacingSmall:n.xSmall,baseSpacingMedium:n.small,baseSpacingLarge:"1rem",borderWidth:a.widthSmall,borderRadius:a.radiusMedium,borderColor:t.borderDark,textLineHeight:r.lineHeightCondensed,selectedTextColor:t.textLightest,selectedBackgroundColor:t.backgroundDark,selectedOutlineWidth:a.widthLarge}}D["canvas"]=function(e){return{iconColor:e["ic-brand-font-color-dark"],hoverBackgroundColor:e["ic-brand-primary"],focusOutlineColor:e["ic-brand-primary"],nameTextColor:e["ic-brand-primary"],descriptorTextColor:e["ic-brand-font-color-dark"]}}
var W,X,R,N,A
var H={componentId:"bfBOT",template:function(e){return"\n\n@keyframes bfBOT_EwaR{50%{opacity:0.5;transform:translate3d(2%,0,0)}to{opacity:1;transform:translateZ(0)}}\n\n.bfBOT_bGBk{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;animation-delay:0.2s;animation-duration:0.2s;animation-fill-mode:forwards;animation-name:bfBOT_EwaR;animation-timing-function:ease-out;background-color:transparent;border:none;border-radius:".concat(e.borderRadius||"inherit",";box-sizing:border-box;cursor:pointer;display:block;font-family:inherit;margin:0;opacity:0.01;outline:0;position:relative;text-align:start;transform:translate3d(-2%,0,0);transform-origin:left center;user-select:none;width:100%;z-index:1}\n\n[dir=ltr] .bfBOT_bGBk{text-align:left}\n\n[dir=rtl] .bfBOT_bGBk{text-align:right}\n\n.bfBOT_bGBk:not(.bfBOT_eoSs):after{border:").concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:calc(").concat(e.borderRadius||"inherit",'*1.5);bottom:-0.25rem;box-sizing:border-box;content:"";display:block;left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.95);transition:all 0.2s}\n\n.bfBOT_bGBk:hover{background-color:').concat(e.hoverBackgroundColor||"inherit","}\n\n.bfBOT_bGBk:hover.bfBOT_fGhm{background-color:").concat(e.selectedBackgroundColor||"inherit","}\n\n.bfBOT_bGBk:hover.bfBOT_ewdC:before{visibility:hidden}\n\n.bfBOT_bGBk:hover .bfBOT_dnnz,.bfBOT_bGBk:hover .bfBOT_biFO,.bfBOT_bGBk:hover .bfBOT_sTpL{color:").concat(e.hoverTextColor||"inherit","}\n\n.bfBOT_bGBk.bfBOT_cVYB:not(.bfBOT_eoSs):after{opacity:1;transform:scale(1)}\n\n.bfBOT_bGBk.bfBOT_cVYB.bfBOT_eoSs{outline:").concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit","}\n\n.bfBOT_byIz{align-items:center;display:flex;line-height:1;min-height:2rem}\n\n.bfBOT_dnnz,.bfBOT_eWKC{min-width:0.0625rem}\n\n.bfBOT_dnnz{color:").concat(e.iconColor||"inherit",";position:relative;z-index:1}\n\n.bfBOT_eWKC{flex:1;line-height:").concat(e.textLineHeight||"inherit","}\n\n.bfBOT_biFO,.bfBOT_sTpL{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n\n.bfBOT_sTpL{color:").concat(e.nameTextColor||"inherit","}\n\n.bfBOT_biFO{color:").concat(e.descriptorTextColor||"inherit",";margin-top:").concat(e.descriptorMarginTop||"inherit","}\n\n.bfBOT_ewdC:before{background:").concat(e.borderColor||"inherit",';content:"";height:').concat(e.borderWidth||"inherit",";inset-inline-end:auto;inset-inline-start:0;pointer-events:none;position:absolute;top:50%}\n\n[dir=ltr] .bfBOT_ewdC:before{left:0;right:auto}\n\n[dir=rtl] .bfBOT_ewdC:before{left:auto;right:0}\n\n.bfBOT_doqw.bfBOT_ewdC{padding:calc(").concat(e.baseSpacingSmall||"inherit","/3) ").concat(e.baseSpacingSmall||"inherit","}\n\n.bfBOT_doqw.bfBOT_ewdC:before{width:calc(").concat(e.baseSpacingSmall||"inherit"," - 0.0625rem)}\n\n.bfBOT_doqw.bfBOT_ewdC .bfBOT_dnnz,.bfBOT_doqw.bfBOT_ewdC .bfBOT_dXYn{-webkit-margin-end:").concat(e.baseSpacingSmall||"inherit",";-webkit-margin-start:0;margin-inline-end:").concat(e.baseSpacingSmall||"inherit",";margin-inline-start:0}\n\n[dir=ltr] .bfBOT_doqw.bfBOT_ewdC .bfBOT_dnnz,[dir=ltr] .bfBOT_doqw.bfBOT_ewdC .bfBOT_dXYn{margin-left:0;margin-right:").concat(e.baseSpacingSmall||"inherit","}\n\n[dir=rtl] .bfBOT_doqw.bfBOT_ewdC .bfBOT_dnnz,[dir=rtl] .bfBOT_doqw.bfBOT_ewdC .bfBOT_dXYn{margin-left:").concat(e.baseSpacingSmall||"inherit",";margin-right:0}\n\n.bfBOT_doqw.bfBOT_ewdC .bfBOT_dnnz{font-size:calc(").concat(e.baseSpacingSmall||"inherit","*2)}\n\n.bfBOT_doqw.bfBOT_ewdC .bfBOT_dXYn{height:calc(").concat(e.baseSpacingSmall||"inherit","*2);width:calc(").concat(e.baseSpacingSmall||"inherit","*2)}\n\n.bfBOT_doqw.bfBOT_cIHp{padding:calc(").concat(e.baseSpacingSmall||"inherit","/3) calc(").concat(e.baseSpacingSmall||"inherit","/2)}\n\n.bfBOT_doqw.bfBOT_cIHp .bfBOT_dnnz,.bfBOT_doqw.bfBOT_cIHp .bfBOT_dXYn{-webkit-margin-end:calc(").concat(e.baseSpacingSmall||"inherit","/2);-webkit-margin-start:0;margin-inline-end:calc(").concat(e.baseSpacingSmall||"inherit","/2);margin-inline-start:0}\n\n[dir=ltr] .bfBOT_doqw.bfBOT_cIHp .bfBOT_dnnz,[dir=ltr] .bfBOT_doqw.bfBOT_cIHp .bfBOT_dXYn{margin-left:0;margin-right:calc(").concat(e.baseSpacingSmall||"inherit","/2)}\n\n[dir=rtl] .bfBOT_doqw.bfBOT_cIHp .bfBOT_dnnz,[dir=rtl] .bfBOT_doqw.bfBOT_cIHp .bfBOT_dXYn{margin-left:calc(").concat(e.baseSpacingSmall||"inherit","/2);margin-right:0}\n\n.bfBOT_doqw.bfBOT_cIHp .bfBOT_dnnz{font-size:calc(").concat(e.baseSpacingSmall||"inherit","*2)}\n\n.bfBOT_doqw.bfBOT_cIHp .bfBOT_dXYn{height:calc(").concat(e.baseSpacingSmall||"inherit","*2);width:calc(").concat(e.baseSpacingSmall||"inherit","*2)}\n\n.bfBOT_doqw .bfBOT_sTpL{font-size:").concat(e.nameFontSizeSmall||"inherit","}\n\n.bfBOT_doqw .bfBOT_biFO{font-size:").concat(e.descriptorFontSizeSmall||"inherit","}\n\n.bfBOT_ycrn.bfBOT_ewdC{padding:calc(").concat(e.baseSpacingMedium||"inherit","/3) ").concat(e.baseSpacingMedium||"inherit","}\n\n.bfBOT_ycrn.bfBOT_ewdC:before{width:calc(").concat(e.baseSpacingMedium||"inherit"," - 0.0625rem)}\n\n.bfBOT_ycrn.bfBOT_ewdC .bfBOT_dnnz,.bfBOT_ycrn.bfBOT_ewdC .bfBOT_dXYn{-webkit-margin-end:").concat(e.baseSpacingMedium||"inherit",";-webkit-margin-start:0;margin-inline-end:").concat(e.baseSpacingMedium||"inherit",";margin-inline-start:0}\n\n[dir=ltr] .bfBOT_ycrn.bfBOT_ewdC .bfBOT_dnnz,[dir=ltr] .bfBOT_ycrn.bfBOT_ewdC .bfBOT_dXYn{margin-left:0;margin-right:").concat(e.baseSpacingMedium||"inherit","}\n\n[dir=rtl] .bfBOT_ycrn.bfBOT_ewdC .bfBOT_dnnz,[dir=rtl] .bfBOT_ycrn.bfBOT_ewdC .bfBOT_dXYn{margin-left:").concat(e.baseSpacingMedium||"inherit",";margin-right:0}\n\n.bfBOT_ycrn.bfBOT_ewdC .bfBOT_dnnz{font-size:calc(").concat(e.baseSpacingMedium||"inherit","*2)}\n\n.bfBOT_ycrn.bfBOT_ewdC .bfBOT_dXYn{height:calc(").concat(e.baseSpacingMedium||"inherit","*2);width:calc(").concat(e.baseSpacingMedium||"inherit","*2)}\n\n.bfBOT_ycrn.bfBOT_cIHp{padding:calc(").concat(e.baseSpacingMedium||"inherit","/3) calc(").concat(e.baseSpacingMedium||"inherit","/2)}\n\n.bfBOT_ycrn.bfBOT_cIHp .bfBOT_dnnz,.bfBOT_ycrn.bfBOT_cIHp .bfBOT_dXYn{-webkit-margin-end:calc(").concat(e.baseSpacingMedium||"inherit","/2);-webkit-margin-start:0;margin-inline-end:calc(").concat(e.baseSpacingMedium||"inherit","/2);margin-inline-start:0}\n\n[dir=ltr] .bfBOT_ycrn.bfBOT_cIHp .bfBOT_dnnz,[dir=ltr] .bfBOT_ycrn.bfBOT_cIHp .bfBOT_dXYn{margin-left:0;margin-right:calc(").concat(e.baseSpacingMedium||"inherit","/2)}\n\n[dir=rtl] .bfBOT_ycrn.bfBOT_cIHp .bfBOT_dnnz,[dir=rtl] .bfBOT_ycrn.bfBOT_cIHp .bfBOT_dXYn{margin-left:calc(").concat(e.baseSpacingMedium||"inherit","/2);margin-right:0}\n\n.bfBOT_ycrn.bfBOT_cIHp .bfBOT_dnnz{font-size:calc(").concat(e.baseSpacingMedium||"inherit","*2)}\n\n.bfBOT_ycrn.bfBOT_cIHp .bfBOT_dXYn{height:calc(").concat(e.baseSpacingMedium||"inherit","*2);width:calc(").concat(e.baseSpacingMedium||"inherit","*2)}\n\n.bfBOT_ycrn .bfBOT_sTpL{font-size:").concat(e.nameFontSizeMedium||"inherit","}\n\n.bfBOT_ycrn .bfBOT_biFO{font-size:").concat(e.descriptorFontSizeMedium||"inherit","}\n\n.bfBOT_cMDj.bfBOT_ewdC{padding:calc(").concat(e.baseSpacingLarge||"inherit","/3) ").concat(e.baseSpacingLarge||"inherit","}\n\n.bfBOT_cMDj.bfBOT_ewdC:before{width:calc(").concat(e.baseSpacingLarge||"inherit"," - 0.0625rem)}\n\n.bfBOT_cMDj.bfBOT_ewdC .bfBOT_dnnz,.bfBOT_cMDj.bfBOT_ewdC .bfBOT_dXYn{-webkit-margin-end:").concat(e.baseSpacingLarge||"inherit",";-webkit-margin-start:0;margin-inline-end:").concat(e.baseSpacingLarge||"inherit",";margin-inline-start:0}\n\n[dir=ltr] .bfBOT_cMDj.bfBOT_ewdC .bfBOT_dnnz,[dir=ltr] .bfBOT_cMDj.bfBOT_ewdC .bfBOT_dXYn{margin-left:0;margin-right:").concat(e.baseSpacingLarge||"inherit","}\n\n[dir=rtl] .bfBOT_cMDj.bfBOT_ewdC .bfBOT_dnnz,[dir=rtl] .bfBOT_cMDj.bfBOT_ewdC .bfBOT_dXYn{margin-left:").concat(e.baseSpacingLarge||"inherit",";margin-right:0}\n\n.bfBOT_cMDj.bfBOT_ewdC .bfBOT_dnnz{font-size:calc(").concat(e.baseSpacingLarge||"inherit","*2)}\n\n.bfBOT_cMDj.bfBOT_ewdC .bfBOT_dXYn{height:calc(").concat(e.baseSpacingLarge||"inherit","*2);width:calc(").concat(e.baseSpacingLarge||"inherit","*2)}\n\n.bfBOT_cMDj.bfBOT_cIHp{padding:calc(").concat(e.baseSpacingLarge||"inherit","/3) calc(").concat(e.baseSpacingLarge||"inherit","/2)}\n\n.bfBOT_cMDj.bfBOT_cIHp .bfBOT_dnnz,.bfBOT_cMDj.bfBOT_cIHp .bfBOT_dXYn{-webkit-margin-end:calc(").concat(e.baseSpacingLarge||"inherit","/2);-webkit-margin-start:0;margin-inline-end:calc(").concat(e.baseSpacingLarge||"inherit","/2);margin-inline-start:0}\n\n[dir=ltr] .bfBOT_cMDj.bfBOT_cIHp .bfBOT_dnnz,[dir=ltr] .bfBOT_cMDj.bfBOT_cIHp .bfBOT_dXYn{margin-left:0;margin-right:calc(").concat(e.baseSpacingLarge||"inherit","/2)}\n\n[dir=rtl] .bfBOT_cMDj.bfBOT_cIHp .bfBOT_dnnz,[dir=rtl] .bfBOT_cMDj.bfBOT_cIHp .bfBOT_dXYn{margin-left:calc(").concat(e.baseSpacingLarge||"inherit","/2);margin-right:0}\n\n.bfBOT_cMDj.bfBOT_cIHp .bfBOT_dnnz{font-size:calc(").concat(e.baseSpacingLarge||"inherit","*2)}\n\n.bfBOT_cMDj.bfBOT_cIHp .bfBOT_dXYn{height:calc(").concat(e.baseSpacingLarge||"inherit","*2);width:calc(").concat(e.baseSpacingLarge||"inherit","*2)}\n\n.bfBOT_cMDj .bfBOT_sTpL{font-size:").concat(e.nameFontSizeLarge||"inherit","}\n\n.bfBOT_cMDj .bfBOT_biFO{font-size:").concat(e.descriptorFontSizeLarge||"inherit","}\n\n.bfBOT_fGhm{background-color:").concat(e.selectedBackgroundColor||"inherit","}\n\n.bfBOT_fGhm.bfBOT_ewdC:before{visibility:hidden}\n\n.bfBOT_fGhm .bfBOT_dnnz,.bfBOT_fGhm .bfBOT_biFO,.bfBOT_fGhm .bfBOT_sTpL{color:").concat(e.selectedTextColor||"inherit","}")},root:"bfBOT_bGBk",button:"bfBOT_EwaR",ie11:"bfBOT_eoSs",selected:"bfBOT_fGhm",folderTree:"bfBOT_ewdC",icon:"bfBOT_dnnz",textDescriptor:"bfBOT_biFO",textName:"bfBOT_sTpL",focused:"bfBOT_cVYB",layout:"bfBOT_byIz",text:"bfBOT_eWKC",small:"bfBOT_doqw",thumbnail:"bfBOT_dXYn",indent:"bfBOT_cIHp",medium:"bfBOT_ycrn",large:"bfBOT_cMDj"}
var U=(W=Object(j["a"])(),X=Object(C["themeable"])(D,H),W(R=X(R=(A=N=function(e){Object(v["a"])(t,e)
function t(){Object(b["a"])(this,t)
return Object(g["a"])(this,Object(_["a"])(t).apply(this,arguments))}Object(m["a"])(t,[{key:"renderImage",value:function(){var e=this.props.type
switch(e){case"collection":return this.renderCollectionIcon()
case"item":return this.renderItemImage()}}},{key:"renderCollectionIcon",value:function(){var e=this.props.expanded?this.props.collectionIconExpanded:this.props.collectionIcon
if(e)return c.a.createElement(e,{className:H.icon})}},{key:"renderItemImage",value:function(){var e=this.props.thumbnail
var t=this.props.itemIcon
if(e)return c.a.createElement("div",{className:H.thumbnail},c.a.createElement(F["a"],{src:e,constrain:"cover",alt:""}))
if(t)return c.a.createElement(t,{className:H.icon})}},{key:"render",value:function(){var e
var t=this.props,n=t.name,r=t.descriptor,a=t.expanded,i=t.selected,o=t.focused,s=t.variant,l=t.size
var d=(e={},Object(z["a"])(e,H.root,true),Object(z["a"])(e,H[l],true),Object(z["a"])(e,H[s],true),Object(z["a"])(e,H.expanded,a),Object(z["a"])(e,H.selected,i),Object(z["a"])(e,H.focused,o),Object(z["a"])(e,H.ie11,L["a"]),e)
return c.a.createElement("button",{tabIndex:-1,type:"button",className:M()(d)},c.a.createElement("span",{className:H.layout},this.renderImage(),c.a.createElement("span",{className:H.text},c.a.createElement("span",{className:H.textName},n),r?c.a.createElement("span",{className:H.textDescriptor,title:r},r):null)))}}])
t.displayName="TreeButton"
return t}(o["Component"]),N.propTypes={id:y.a.oneOfType([y.a.string,y.a.number]),name:y.a.string,descriptor:y.a.string,type:y.a.string,size:y.a.oneOf(["small","medium","large"]),variant:y.a.oneOf(["folderTree","indent"]),collectionIcon:y.a.func,collectionIconExpanded:y.a.func,itemIcon:y.a.func,thumbnail:y.a.string,onClick:y.a.func,expanded:y.a.bool,selected:y.a.bool,focused:y.a.bool},N.defaultProps={type:"treeButton",size:"medium",variant:"folderTree",selected:false,focused:false,onClick:function(){},id:void 0,name:void 0,collectionIcon:void 0,collectionIconExpanded:void 0,itemIcon:void 0,thumbnail:void 0,expanded:false,descriptor:void 0},A))||R)||R)
var G=function(e){var t=e.colors,n=e.spacing,r=e.typography,a=e.borders
return{fontFamily:r.fontFamily,baseSpacingSmall:n.xSmall,baseSpacingMedium:n.small,baseSpacingLarge:"1rem",borderWidth:a.widthSmall,borderColor:t.borderDark}}
var q,P,V,J,K
var Y={componentId:"fXaWe",template:function(e){return"\n\n@keyframes fXaWe_cpmC{to{transform:scaleY(1)}}\n\n.fXaWe_cpmC{box-sizing:border-box;font-family:".concat(e.fontFamily||"inherit",';list-style-type:none;position:relative}\n\n.fXaWe_cpmC,.fXaWe_fjNS{margin:0;padding:0}\n\n.fXaWe_ewEu:focus,.fXaWe_fjNS:focus{outline:0}\n\n.fXaWe_ewdC .fXaWe_cpmC:before{animation-duration:0.2s;animation-fill-mode:forwards;animation-name:fXaWe_cpmC;animation-timing-function:ease-out;bottom:1.1875rem;content:"";inset-inline-end:auto;inset-inline-start:0;pointer-events:none;position:absolute;top:0.25rem;transform:scaleY(0.01);transform-origin:center top}\n\n[dir=ltr] .fXaWe_ewdC .fXaWe_cpmC:before{left:0;right:auto}\n\n[dir=rtl] .fXaWe_ewdC .fXaWe_cpmC:before{left:auto;right:0}\n\n.fXaWe_ewdC:not(.fXaWe_bUWG) .fXaWe_cpmC:before{background:').concat(e.borderColor||"inherit",";width:").concat(e.borderWidth||"inherit","}\n\n.fXaWe_ewdC.fXaWe_bUWG .fXaWe_cpmC:before{background:#73818c;width:0.0625rem}\n\n.fXaWe_doqw.fXaWe_cIHp .fXaWe_cpmC{-webkit-margin-end:0;-webkit-margin-start:calc(").concat(e.baseSpacingSmall||"inherit","*3);margin-inline-end:0;margin-inline-start:calc(").concat(e.baseSpacingSmall||"inherit","*3)}\n\n[dir=ltr] .fXaWe_doqw.fXaWe_cIHp .fXaWe_cpmC{margin-left:calc(").concat(e.baseSpacingSmall||"inherit","*3);margin-right:0}\n\n[dir=rtl] .fXaWe_doqw.fXaWe_cIHp .fXaWe_cpmC{margin-left:0;margin-right:calc(").concat(e.baseSpacingSmall||"inherit","*3)}\n\n.fXaWe_doqw.fXaWe_ewdC .fXaWe_cpmC{-webkit-margin-end:0;-webkit-margin-start:calc(").concat(e.baseSpacingSmall||"inherit","*2);margin-inline-end:0;margin-inline-start:calc(").concat(e.baseSpacingSmall||"inherit","*2);margin-top:calc(-1*").concat(e.baseSpacingSmall||"inherit",");padding-top:").concat(e.baseSpacingSmall||"inherit","}\n\n[dir=ltr] .fXaWe_doqw.fXaWe_ewdC .fXaWe_cpmC{margin-left:calc(").concat(e.baseSpacingSmall||"inherit","*2);margin-right:0}\n\n[dir=rtl] .fXaWe_doqw.fXaWe_ewdC .fXaWe_cpmC{margin-left:0;margin-right:calc(").concat(e.baseSpacingSmall||"inherit","*2)}\n\n.fXaWe_ycrn.fXaWe_cIHp .fXaWe_cpmC{-webkit-margin-end:0;-webkit-margin-start:calc(").concat(e.baseSpacingMedium||"inherit","*3);margin-inline-end:0;margin-inline-start:calc(").concat(e.baseSpacingMedium||"inherit","*3)}\n\n[dir=ltr] .fXaWe_ycrn.fXaWe_cIHp .fXaWe_cpmC{margin-left:calc(").concat(e.baseSpacingMedium||"inherit","*3);margin-right:0}\n\n[dir=rtl] .fXaWe_ycrn.fXaWe_cIHp .fXaWe_cpmC{margin-left:0;margin-right:calc(").concat(e.baseSpacingMedium||"inherit","*3)}\n\n.fXaWe_ycrn.fXaWe_ewdC .fXaWe_cpmC{-webkit-margin-end:0;-webkit-margin-start:calc(").concat(e.baseSpacingMedium||"inherit","*2);margin-inline-end:0;margin-inline-start:calc(").concat(e.baseSpacingMedium||"inherit","*2);margin-top:calc(-1*").concat(e.baseSpacingMedium||"inherit",");padding-top:").concat(e.baseSpacingMedium||"inherit","}\n\n[dir=ltr] .fXaWe_ycrn.fXaWe_ewdC .fXaWe_cpmC{margin-left:calc(").concat(e.baseSpacingMedium||"inherit","*2);margin-right:0}\n\n[dir=rtl] .fXaWe_ycrn.fXaWe_ewdC .fXaWe_cpmC{margin-left:0;margin-right:calc(").concat(e.baseSpacingMedium||"inherit","*2)}\n\n.fXaWe_cMDj.fXaWe_cIHp .fXaWe_cpmC{-webkit-margin-end:0;-webkit-margin-start:calc(").concat(e.baseSpacingLarge||"inherit","*3);margin-inline-end:0;margin-inline-start:calc(").concat(e.baseSpacingLarge||"inherit","*3)}\n\n[dir=ltr] .fXaWe_cMDj.fXaWe_cIHp .fXaWe_cpmC{margin-left:calc(").concat(e.baseSpacingLarge||"inherit","*3);margin-right:0}\n\n[dir=rtl] .fXaWe_cMDj.fXaWe_cIHp .fXaWe_cpmC{margin-left:0;margin-right:calc(").concat(e.baseSpacingLarge||"inherit","*3)}\n\n.fXaWe_cMDj.fXaWe_ewdC .fXaWe_cpmC{-webkit-margin-end:0;-webkit-margin-start:calc(").concat(e.baseSpacingLarge||"inherit","*2);margin-inline-end:0;margin-inline-start:calc(").concat(e.baseSpacingLarge||"inherit","*2);margin-top:calc(-1*").concat(e.baseSpacingLarge||"inherit",");padding-top:").concat(e.baseSpacingLarge||"inherit","}\n\n[dir=ltr] .fXaWe_cMDj.fXaWe_ewdC .fXaWe_cpmC{margin-left:calc(").concat(e.baseSpacingLarge||"inherit","*2);margin-right:0}\n\n[dir=rtl] .fXaWe_cMDj.fXaWe_ewdC .fXaWe_cpmC{margin-left:0;margin-right:calc(").concat(e.baseSpacingLarge||"inherit","*2)}")},list:"fXaWe_cpmC",node:"fXaWe_fjNS",item:"fXaWe_ewEu",folderTree:"fXaWe_ewdC",edge:"fXaWe_bUWG",small:"fXaWe_doqw",indent:"fXaWe_cIHp",medium:"fXaWe_ycrn",large:"fXaWe_cMDj"}
var Z=(q=Object(j["a"])(),P=Object(C["themeable"])(G,Y),q(V=P(V=(K=J=function(e){Object(v["a"])(t,e)
function t(e){var n
Object(b["a"])(this,t)
n=Object(g["a"])(this,Object(_["a"])(t).call(this,e))
n.handleFocus=function(e,t){e.stopPropagation()
n.setState({focused:"".concat(t.type,"_").concat(t.id)})}
n.handleBlur=function(e,t){e.stopPropagation()
n.setState({focused:""})}
n.handleCollectionClick=function(e){var t=n.props,r=t.id,a=t.onCollectionClick,i=t.expanded
var o={id:r,expanded:!i,type:"collection"}
a&&"function"===typeof a&&a(e,o)}
n.handleCollectionKeyDown=function(e){var t=n.props,r=t.id,a=t.onKeyDown,i=t.expanded
var o={id:r,expanded:!i,type:"collection"}
a&&"function"===typeof a&&a(e,o)}
n.state={focused:""}
return n}Object(m["a"])(t,[{key:"renderChildren",value:function(){var e=this
var t=this.props,n=t.expanded,r=t.collections,a=t.items,i=t.name
return n&&this.childCount>0&&c.a.createElement("ul",{"aria-label":i,className:Y.list,role:"group"},r.map((function(t,n){return e.renderCollectionNode(t,n,e.childCount)})),a.map((function(t,n){return e.renderItemNode(t,n,e.childCount,e.collectionsCount)})))}},{key:"renderCollectionNode",value:function(e,n,r){return c.a.createElement(t,Object.assign({},this.props,{key:"c".concat(n),id:e.id,name:e.name,descriptor:e.descriptor,expanded:e.expanded,items:e.items,collections:e.collections,numChildren:r,level:this.props.level+1,position:n+1}))}},{key:"renderItemNode",value:function(e,t,n,r){var a=this
var i={}
this.props.selection&&(i["aria-selected"]=this.props.selection==="item_".concat(e.id))
var o={id:e.id,type:"item"}
return c.a.createElement("li",Object.assign({key:"i".concat(t),tabIndex:"-1",role:"treeitem","aria-label":e.name,className:Y.item,"aria-level":this.props.level+1,"aria-posinset":t+1+r,"aria-setsize":n,onClick:function(e,t){return a.props.onItemClick(e,o)},onKeyDown:function(e,t){return a.props.onKeyDown(e,o)},onFocus:function(e,t){return a.handleFocus(e,o)},onBlur:function(e,t){return a.handleBlur(e,o)}},i),c.a.createElement(U,Object.assign({},this.getCommonButtonProps(),{id:e.id,name:e.name,descriptor:e.descriptor,thumbnail:e.thumbnail,selected:this.props.selection==="item_".concat(e.id),focused:this.state.focused==="item_".concat(e.id),type:"item"})))}},{key:"getCommonButtonProps",value:function(){return{id:this.props.id,name:this.props.name,descriptor:this.props.descriptor,size:this.props.size,variant:this.props.variant,itemIcon:this.props.itemIcon}}},{key:"render",value:function(){var e,t=this
var n=this.props,r=n.id,a=n.size,i=n.variant,o=n.expanded,s=n.collectionIcon,l=n.collectionIconExpanded,d=n.level,u=n.position
var f=(e={},Object(z["a"])(e,Y.root,true),Object(z["a"])(e,Y.edge,E["a"]),Object(z["a"])(e,Y[a],true),Object(z["a"])(e,Y[i],true),Object(z["a"])(e,Y.expanded,o),Object(z["a"])(e,Y.node,true),e)
var h={}
this.props.selection&&(h["aria-selected"]=this.props.selection==="collection_".concat(r))
return c.a.createElement("li",Object.assign({className:M()(f),tabIndex:"-1",role:"treeitem","aria-label":this.props.name,"aria-level":d,"aria-posinset":u,"aria-setsize":this.props.numChildren,"aria-expanded":o,onClick:this.handleCollectionClick,onKeyDown:this.handleCollectionKeyDown,onFocus:function(e,n){return t.handleFocus(e,{id:r,type:"collection"})},onBlur:function(e,n){return t.handleBlur(e,{id:r,type:"collection"})}},h),c.a.createElement(U,Object.assign({},this.getCommonButtonProps(),{expanded:o,collectionIcon:s,collectionIconExpanded:l,type:"collection",selected:this.props.selection==="collection_".concat(r),focused:this.state.focused==="collection_".concat(r)})),this.renderChildren())}},{key:"collectionsCount",get:function(){var e=this.props.collections
return e&&e.length>0?e.length:0}},{key:"itemsCount",get:function(){var e=this.props.items
return e&&e.length>0?e.length:0}},{key:"childCount",get:function(){return this.collectionsCount+this.itemsCount}}])
t.displayName="TreeCollection"
return t}(o["Component"]),J.propTypes={id:y.a.oneOfType([y.a.string,y.a.number]),name:y.a.string,descriptor:y.a.string,items:y.a.array,collections:y.a.array,expanded:y.a.bool,selection:y.a.string,size:y.a.oneOf(["small","medium","large"]),variant:y.a.oneOf(["folderTree","indent"]),collectionIcon:y.a.func,collectionIconExpanded:y.a.func,itemIcon:y.a.func,onItemClick:y.a.func,onCollectionClick:y.a.func,onKeyDown:y.a.func,numChildren:y.a.number,level:y.a.number,position:y.a.number},J.defaultProps={collections:[],items:[],expanded:false,selection:"",size:"medium",variant:"folderTree",onItemClick:function(){},onCollectionClick:function(){},onKeyDown:function(){},id:void 0,name:void 0,descriptor:void 0,collectionIconExpanded:void 0,collectionIcon:void 0,itemIcon:void 0,numChildren:void 0,level:void 0,position:void 0},K))||V)||V)
var $=function(e){var t=e.colors,n=e.spacing,r=e.typography,a=e.borders
return{fontFamily:r.fontFamily,fontWeight:r.fontWeightNormal,fontSize:r.fontSizeSmall,controlsTopMargin:n.small,borderRadius:a.radiusMedium,focusOutlineWidth:a.widthMedium,focusOutlineColor:t.borderBrand,focusOutlineStyle:a.style}}
var Q,ee,te,ne,re
var ae={componentId:"DBzxS",template:function(e){return"\n\n.DBzxS_cBsQ{margin-top:".concat(e.controlsTopMargin||"inherit","}\n\n.DBzxS_cpmC{list-style-type:none;margin:0;outline:none;padding:0;position:relative}\n\n.DBzxS_cpmC,.DBzxS_cpmC:before{box-sizing:border-box}\n\n.DBzxS_cpmC:before{border:").concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:calc(").concat(e.borderRadius||"inherit",'*1.5);bottom:-0.25rem;content:"";display:block;left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.95);transition:all 0.2s}\n\n.DBzxS_cpmC:focus:before{opacity:1;transform:scale(1)}')},controls:"DBzxS_cBsQ",list:"DBzxS_cpmC"}
var ie=(Q=Object(j["a"])(),ee=Object(C["themeable"])($,ae),Q(te=ee(te=(re=ne=function(e){Object(v["a"])(t,e)
function t(e){var n
Object(b["a"])(this,t)
n=Object(g["a"])(this,Object(_["a"])(t).call(this,e))
n.handleCollectionClick=function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
e.stopPropagation()
var a=n.props.onCollectionClick
r&&n.expandOrCollapseNode(t)
a(t.id,t)
n.handleSelection(t.id,"collection")}
n.handleItemClick=function(e,t){e.stopPropagation()
var r=n.props.onItemClick
r(t)
n.handleSelection(t.id,"item")}
n.handleKeyDown=function(e,t){e.stopPropagation()
switch(e.keyCode){case B.a.codes.down:case B.a.codes.j:n.moveFocus(1)
break
case B.a.codes.up:case B.a.codes.k:n.moveFocus(-1)
break
case B.a.codes.home:case B.a.codes.end:n.homeOrEnd(e.keyCode)
break
case B.a.codes.left:case B.a.codes.right:n.handleLeftOrRightArrow(e.keyCode,t)
break
case B.a.codes.enter:case B.a.codes.space:n.handleActivation(e,t)
break
default:return}e.preventDefault()}
n.state={selection:""}
"undefined"===typeof n.props.expanded&&(n.state.expanded=e.defaultExpanded)
return n}Object(m["a"])(t,[{key:"getExpanded",value:function(e,t){return"undefined"===typeof t.expanded?e.expanded:t.expanded}},{key:"expandOrCollapseNode",value:function(e){var t=this
this.props.onCollectionToggle(e)
"undefined"===typeof this.props.expanded&&this.setState((function(n,r){var a=[].concat(t.getExpanded(n,r))
var i=t.getExpandedIndex(a,e.id)
e.expanded&&i<0?a.push(e.id):i>=0&&a.splice(i,1)
return{expanded:a}}))}},{key:"handleSelection",value:function(e,t){var n=this.props.selectionType
"single"===n&&this.setState((function(n){var r="".concat(t,"_").concat(e)
return n.selection!==r?{selection:r}:n}))}},{key:"getNavigableNodes",value:function(){return Array.from(this._root.querySelectorAll('[role="treeitem"]'))}},{key:"moveFocus",value:function(e){var t=this.getNavigableNodes()
var n=t.indexOf(window.document.activeElement)
var r=n+e
r<0?r=0:r>=t.length&&(r=t.length-1)
t.forEach((function(e){e.setAttribute("tabindex","-1")}))
t[r].setAttribute("tabindex","0")
t[r].focus()}},{key:"homeOrEnd",value:function(e){var t=this.getNavigableNodes().length
e===B.a.codes.home?this.moveFocus(1-t):this.moveFocus(t-1)}},{key:"handleLeftOrRightArrow",value:function(e,t){var n=!("rtl"===this._root.parentElement.dir||"rtl"===document.dir)
n&&e===B.a.codes.left||!n&&e==B.a.codes.right?this.handleCloseOrPrevious(t):this.handleOpenOrNext(t)}},{key:"handleOpenOrNext",value:function(e){e&&!this.expanded.includes(e.id)&&"collection"===e.type?this.expandOrCollapseNode(e):this.moveFocus(1)}},{key:"handleCloseOrPrevious",value:function(e){e&&this.expanded.includes(e.id)&&"collection"===e.type?this.expandOrCollapseNode(e):this.moveFocus(-1)}},{key:"handleActivation",value:function(e,t){if(null==t)return
"collection"===t.type?this.handleCollectionClick(e,t,"none"===this.props.selectionType):this.handleItemClick(e,t)}},{key:"getSubCollections",value:function(e){var t=this
var n=[].concat(e.collections||[])
return n.map((function(e){return t.getCollectionProps(t.props.collections[e])})).filter((function(e){return null!=e}))}},{key:"getItems",value:function(e){var t=this
if(e.items){var n=[].concat(e.items)
return n.map((function(e){return Object(a["a"])({},t.props.items[e])})).filter((function(e){return null!=e}))}return[]}},{key:"getCollectionProps",value:function(e){var t={id:e.id,name:e.name,descriptor:e.descriptor,expanded:this.getExpandedIndex(this.expanded,e.id)>=0,items:this.getItems(e),collections:this.getSubCollections(e)}
return t}},{key:"getExpandedIndex",value:function(e,t){return e.findIndex((function(e){return String(e)===String(t)}))}},{key:"renderRoot",value:function(){var e=this
return this.collections.map((function(t,n){return c.a.createElement(Z,Object.assign({key:n},Object(S["c"])(e.props,Z.propTypes),e.getCollectionProps(t),{selection:e.state.selection,onItemClick:e.handleItemClick,onCollectionClick:e.handleCollectionClick,onKeyDown:e.handleKeyDown,numChildren:e.collections.length,level:1,position:1}))}))}},{key:"render",value:function(){var e=this
return c.a.createElement("ul",{className:ae.list,tabIndex:0,role:"tree",onKeyDown:this.handleKeyDown,ref:function(t){e._root=t},"aria-label":this.props.treeLabel},this.renderRoot())}},{key:"collections",get:function(){var e=this.props,t=e.collections,n=e.rootId,r=e.showRootCollection
return"undefined"!==typeof n&&r?[t[n]]:"undefined"!==typeof n?t[n].collections.map((function(e){return t[e]})).filter((function(e){return null!=e})):Object.keys(t).map((function(e){return t[e]})).filter((function(e){return null!=e}))}},{key:"expanded",get:function(){return this.getExpanded(this.state,this.props)}}])
t.displayName="TreeBrowser"
return t}(o["Component"]),ne.propTypes={collections:y.a.object.isRequired,items:y.a.object.isRequired,rootId:y.a.number,expanded:Object(I["a"])(y.a.arrayOf(y.a.oneOfType([y.a.string,y.a.number])),"onCollectionToggle"),defaultExpanded:y.a.arrayOf(y.a.oneOfType([y.a.string,y.a.number])),selectionType:y.a.oneOf(["none","single"]),size:y.a.oneOf(["small","medium","large"]),variant:y.a.oneOf(["folderTree","indent"]),collectionIcon:y.a.func,collectionIconExpanded:y.a.func,itemIcon:y.a.func,showRootCollection:y.a.bool,onCollectionClick:y.a.func,onCollectionToggle:y.a.func,onItemClick:y.a.func,treeLabel:y.a.string},ne.defaultProps={size:"medium",variant:"folderTree",showRootCollection:true,collectionIcon:T["a"],collectionIconExpanded:T["a"],itemIcon:w["a"],defaultExpanded:[],selectionType:"none",onItemClick:function(e){},onCollectionClick:function(e,t){},onCollectionToggle:function(e){},rootId:void 0,expanded:void 0,treeLabel:void 0},re))||te)||te)
var oe=n("VTJ5")
var ce=n("5JRF")
var se=n("Xx/m")
var le=n("ysUD")
var de=n("WfMV")
var ue=n("Cf7h")
var fe=n("VDZY")
var he=n("7Lu0")
var pe=n("XHgw")
var be=n("IqBw")
const me={Accept:"application/json+canvas-string-ids"}
function ge(e,t){return f["a"].get("/api/v1/".concat(e,"/").concat(t,"/folders/root"),me)}function _e(e){const t=new FormData
Object.keys(e).forEach(n=>t.append(n,e[n]))
return t}function ve(e,t,n,r){const i=_e(Object(a["a"])({},t.upload_params,{file:e}))
const o=Object(a["a"])({"Content-Type":"multipart/form-data"},me)
f["a"].post(t.upload_url,i,o).then(e=>n(e.data)).catch(e=>r(e))}function Oe(e,t,n,r){f["a"].post("/api/v1/folders/".concat(t,"/files"),{name:e.name,size:e.size,parent_folder_id:t,on_duplicate:"rename"},me).then(t=>ve(e,t.data,n,r)).catch(e=>r(e))}var ye=n("XGn+")
var ke=n("dqQ7")
var Be=n("yE80")
class Te extends c.a.Component{constructor(e){var t
super(e)
t=this
this.populateCollectionsList=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const r=l.a.cloneDeep(t.state.collections)
e.forEach(e=>{const a=t.formatFolderInfo(e,n)
r[a.id]=a
const i=e.parent_folder_id||0
const o=r[i].collections
if(!o.includes(a.id)){o.push(a.id)
r[i].collections=t.orderedIdsFromList(r,o)}})
t.setState({collections:r})
e.forEach(e=>{t.state.openFolders.includes(e.parent_folder_id)&&t.getFolderData(e.id)})}
this.populateItemsList=e=>{const t=l.a.cloneDeep(this.state.items)
const n=l.a.cloneDeep(this.state.collections)
e.forEach(e=>{if(this.contentTypeIsAllowed(e["content-type"])){const r=this.formatFileInfo(e)
t[r.id]=r
const a=e.folder_id
const i=n[a].items
if(!i.includes(r.id)){i.push(r.id)
n[a].items=this.orderedIdsFromList(t,i)}}})
this.setState({items:t,collections:n})}
this.onFolderToggle=e=>this.onFolderClick(e.id,e)
this.onFolderClick=(e,t)=>{const n=this.state.collections[e]
let r=[]
const a=this.state.openFolders
if(!n.locked&&a.includes(e))r=r.concat(a.filter(t=>t!==e))
else if(!n.locked){r=r.concat(a)
r.push(e)
n.collections.forEach(e=>this.getFolderData(e))}return this.setState({openFolders:r,uploadFolder:e})}
this.onFileClick=e=>{const t=this.findFolderForFile(e)
this.setState({uploadFolder:t&&t.id})
this.props.selectFile(this.state.items[e.id])}
this.onInputChange=e=>{e&&this.submitFile(e[0])}
this.submitFile=e=>{this.setState({uploading:true})
Oe(e,this.state.uploadFolder,this.onUploadSucceed,this.onUploadFail)}
this.onUploadSucceed=e=>{this.populateItemsList([e])
this.clearUploadInfo()
const t=this.state.collections[e.folder_id]
this.setSuccessMessage(i["a"].t("Success: File uploaded"))
0===u()("button:contains('".concat(e.display_name,"')")).length&&u()("button:contains('".concat(t&&t.name,"')")).click()
const n=u()("button:contains('".concat(e.display_name,"')"))
u()(".file-browser__tree").scrollTo(n)
n.click()}
this.onUploadFail=()=>{this.clearUploadInfo()
this.setFailureMessage(i["a"].t("File upload failed"))}
this.setSuccessMessage=e=>{Object(ke["c"])(e)()}
this.setFailureMessage=e=>{Object(ke["b"])(e)()}
this.selectLocalFile=()=>{this.uploadInput.click()}
this.state={collections:{0:{collections:[]}},items:{},openFolders:[],uploadFolder:null,uploading:false,loadingCount:0}}componentDidMount(){this.getRootFolders()}getContextName(e){return"courses"===e?i["a"].t("Course files"):i["a"].t("Group files")}getContextInfo(e){const t=Object(ue["a"])(e)
if(t&&t[0]&&t[1]){const e=this.getContextName(t[0])
return{name:e,type:t[0],id:t[1]}}}getRootFolders(){this.props.useContextAssets&&this.getContextFolders()
this.getUserFolders()}getUserFolders(){this.getRootFolderData("users","self",{name:i["a"].t("My files")})}getContextFolders(){if(!ENV.context_asset_string)return
const e=this.getContextInfo(ENV.context_asset_string)
e&&e.type&&e.id&&this.getRootFolderData(e.type,e.id,{name:e.name})}increaseLoadingCount(){let e=this.state.loadingCount
e+=1
this.setState({loadingCount:e})}decreaseLoadingCount(){let e=this.state.loadingCount
e-=1
this.setState({loadingCount:e})}getRootFolderData(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
this.increaseLoadingCount()
ge(e,t).then(e=>this.populateRootFolder(e.data,n)).catch(e=>{this.decreaseLoadingCount()
e.response&&401!==e.response.status&&this.setFailureMessage(i["a"].t("Something went wrong"))})}populateRootFolder(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
this.decreaseLoadingCount()
this.populateCollectionsList([e],t)
this.getFolderData(e.id)}getFolderData(e){const t=this.state.collections
if(!t[e].locked){this.getPaginatedData(this.folderFileApiUrl(e,"folders"),this.populateCollectionsList)
this.getPaginatedData(this.folderFileApiUrl(e),this.populateItemsList)}}getPaginatedData(e,t){f["a"].get(e).then(e=>{t(e.data)
const n=Object(ye["a"])(e.headers.link).next
n&&this.getPaginatedData(n,t)})}folderFileApiUrl(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"files"
return"/api/v1/folders/".concat(e,"/").concat(t)}contentTypeIsAllowed(e){for(const t of this.props.contentTypes)if(p()(e,t))return true
return false}formatFolderInfo(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=e.locked_for_user?i["a"].t("Locked"):null
const r=Object(a["a"])({api:e,id:e.id,collections:[],items:[],name:e.name,context:"/".concat(e.context_type.toLowerCase(),"s/").concat(e.context_id),canUpload:e.can_upload,locked:e.locked_for_user,descriptor:n},t)
const o=this.state.collections[e.id]
Object.assign(r,o&&{collections:o.collections,items:o.items})
return r}formatFileInfo(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=this.state.collections
const r=n[e.folder_id].context
const i=Object(a["a"])({api:e,id:e.id,name:e.display_name,thumbnail:e.thumbnail_url,src:"".concat(r,"/files/").concat(e.id,"/preview").concat(r.includes("user")?"?verifier=".concat(e.uuid):""),alt:e.display_name},t)
return i}orderedIdsFromList(e,t){try{const n=t.sort((t,n)=>Be["a"].strings(e[t].name,e[n].name))
return n}catch(e){console.error(e)
return t}}findFolderForFile(e){const t=this.state.collections
const n=Object.keys(t).find(n=>{const r=t[n].items
if(r&&r.includes(e.id))return n})
return t[n]}clearUploadInfo(){this.setState({uploading:false})
this.uploadInput.value=""}renderUploadDialog(){if(!this.props.allowUpload)return null
const e=this.state.collections[this.state.uploadFolder]
const t=!e||e.locked||!e.canUpload
const n=t?Object(r["a"])(de["a"],{},void 0,i["a"].t("Upload not available for this folder")):""
const a=this.props.contentTypes.join(",")
return Object(r["a"])("div",{className:"image-upload__form"},void 0,c.a.createElement("input",{onChange:e=>this.onInputChange(e.target.files),ref:e=>{this.uploadInput=e},type:"file",accept:a,className:"hidden"}),Object(r["a"])(se["a"],{id:"image-upload__upload",onClick:this.selectLocalFile,disabled:t,variant:"ghost",icon:fe["a"]},void 0,i["a"].t("Upload File")," ",n))}renderMask(){return this.state.uploading?Object(r["a"])(le["a"],{},void 0,Object(r["a"])(oe["a"],{className:"file-browser__uploading",renderTitle:i["a"].t("File uploading")})):null}renderLoading(){return this.state.loadingCount>0?Object(r["a"])(oe["a"],{className:"file-browser__loading",renderTitle:i["a"].t("Loading folders"),size:"small"}):null}render(){const e=Object(r["a"])("div",{className:"file-browser__container"},void 0,Object(r["a"])(ce["a"],{},void 0,i["a"].t("Available folders")),Object(r["a"])("div",{className:"file-browser__tree"},void 0,Object(r["a"])(ie,{collections:this.state.collections,items:this.state.items,size:"medium",onCollectionToggle:this.onFolderToggle,onCollectionClick:this.onFolderClick,onItemClick:this.onFileClick,treeLabel:i["a"].t("Folder tree"),rootId:0,showRootCollection:false,defaultExpanded:this.state.openFolders,collectionIconExpanded:he["a"],collectionIcon:pe["a"],itemIcon:be["a"],selectionType:"single"}),this.renderMask(),this.renderLoading()),this.renderUploadDialog())
return e}}Te.defaultProps={allowUpload:true,contentTypes:["*/*"],useContextAssets:true}
t["default"]=Te},TuBq:function(e,t,n){var r=n("icBU")
var a=n("kbA8")
e.exports=p
var i="\0SLASH"+Math.random()+"\0"
var o="\0OPEN"+Math.random()+"\0"
var c="\0CLOSE"+Math.random()+"\0"
var s="\0COMMA"+Math.random()+"\0"
var l="\0PERIOD"+Math.random()+"\0"
function d(e){return parseInt(e,10)==e?parseInt(e,10):e.charCodeAt(0)}function u(e){return e.split("\\\\").join(i).split("\\{").join(o).split("\\}").join(c).split("\\,").join(s).split("\\.").join(l)}function f(e){return e.split(i).join("\\").split(o).join("{").split(c).join("}").split(s).join(",").split(l).join(".")}function h(e){if(!e)return[""]
var t=[]
var n=a("{","}",e)
if(!n)return e.split(",")
var r=n.pre
var i=n.body
var o=n.post
var c=r.split(",")
c[c.length-1]+="{"+i+"}"
var s=h(o)
if(o.length){c[c.length-1]+=s.shift()
c.push.apply(c,s)}t.push.apply(t,c)
return t}function p(e){if(!e)return[]
"{}"===e.substr(0,2)&&(e="\\{\\}"+e.substr(2))
return v(u(e),true).map(f)}function b(e){return"{"+e+"}"}function m(e){return/^-?0\d/.test(e)}function g(e,t){return e<=t}function _(e,t){return e>=t}function v(e,t){var n=[]
var i=a("{","}",e)
if(!i||/\$$/.test(i.pre))return[e]
var o=/^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(i.body)
var s=/^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(i.body)
var l=o||s
var u=i.body.indexOf(",")>=0
if(!l&&!u){if(i.post.match(/,.*\}/)){e=i.pre+"{"+i.body+c+i.post
return v(e)}return[e]}var f
if(l)f=i.body.split(/\.\./)
else{f=h(i.body)
if(1===f.length){f=v(f[0],false).map(b)
if(1===f.length){var p=i.post.length?v(i.post,false):[""]
return p.map((function(e){return i.pre+f[0]+e}))}}}var O=i.pre
p=i.post.length?v(i.post,false):[""]
var y
if(l){var k=d(f[0])
var B=d(f[1])
var T=Math.max(f[0].length,f[1].length)
var w=3==f.length?Math.abs(d(f[2])):1
var C=g
var S=B<k
if(S){w*=-1
C=_}var I=f.some(m)
y=[]
for(var j=k;C(j,B);j+=w){var z
if(s){z=String.fromCharCode(j)
"\\"===z&&(z="")}else{z=String(j)
if(I){var x=T-z.length
if(x>0){var M=new Array(x+1).join("0")
z=j<0?"-"+M+z.slice(1):M+z}}}y.push(z)}}else y=r(f,(function(e){return v(e,false)}))
for(var E=0;E<y.length;E++)for(var L=0;L<p.length;L++){var F=O+y[E]+p[L];(!t||l||F)&&n.push(F)}return n}},VDZY:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var r=n("VTBJ")
var a=n("1OyB")
var i=n("vuIU")
var o=n("md7G")
var c=n("foSv")
var s=n("Ji7U")
var l=n("q1tI")
var d=n.n(l)
var u=n("hPGw")
var f=d.a.createElement("path",{d:"M1467.552 1700.252l297.428-297.428 155.362 155.362L1558.527 1920H368.814L7 1558.186l155.361-155.362 297.429 297.428h1007.762zM965.902 0l517.175 517.176-155.361 155.361-251.941-251.94v1002.708H856.028V420.597l-251.941 251.94-155.362-155.361L965.901 0z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var h=function(e){Object(s["a"])(t,e)
function t(){Object(a["a"])(this,t)
return Object(o["a"])(this,Object(c["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){return d.a.createElement(u["a"],Object.assign({},this.props,{name:"IconUpload",viewBox:"0 0 1920 1920"}),f)}}])
t.displayName="IconUploadSolid"
return t}(l["Component"])
h.glyphName="upload"
h.variant="Solid"
h.propTypes=Object(r["a"])({},u["a"].propTypes)},"XGn+":function(e,t,n){"use strict"
t["a"]=function(e){if(!e)return[]
const t={}
e.split(",").map(e=>e.split("; ")).forEach(e=>{const n=e[0].substring(1,e[0].length-1)
let r=e[1].split("=")
r=r[1]
r=r.substring(1,r.length-1)
t[r]=n})
return t}},XHgw:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var r=n("VTBJ")
var a=n("1OyB")
var i=n("vuIU")
var o=n("md7G")
var c=n("foSv")
var s=n("Ji7U")
var l=n("q1tI")
var d=n.n(l)
var u=n("hPGw")
var f=d.a.createElement("path",{d:"M225.882 564.765V451.824h764.386L764.386 113H0v1524.706c0 93.402 76.01 169.412 169.412 169.412h1581.176c93.403 0 169.412-76.01 169.412-169.412V564.765H225.882z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var h=function(e){Object(s["a"])(t,e)
function t(){Object(a["a"])(this,t)
return Object(o["a"])(this,Object(c["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){return d.a.createElement(u["a"],Object.assign({},this.props,{name:"IconFolder",viewBox:"0 0 1920 1920",bidirectional:true}),f)}}])
t.displayName="IconFolderSolid"
return t}(l["Component"])
h.glyphName="folder"
h.variant="Solid"
h.propTypes=Object(r["a"])({},u["a"].propTypes)},icBU:function(e,t){e.exports=function(e,t){var r=[]
for(var a=0;a<e.length;a++){var i=t(e[a],a)
n(i)?r.push.apply(r,i):r.push(i)}return r}
var n=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},kbA8:function(e,t,n){"use strict"
e.exports=r
function r(e,t,n){e instanceof RegExp&&(e=a(e,n))
t instanceof RegExp&&(t=a(t,n))
var r=i(e,t,n)
return r&&{start:r[0],end:r[1],pre:n.slice(0,r[0]),body:n.slice(r[0]+e.length,r[1]),post:n.slice(r[1]+t.length)}}function a(e,t){var n=t.match(e)
return n?n[0]:null}r.range=i
function i(e,t,n){var r,a,i,o,c
var s=n.indexOf(e)
var l=n.indexOf(t,s+1)
var d=s
if(s>=0&&l>0){r=[]
i=n.length
while(d>=0&&!c){if(d==s){r.push(d)
s=n.indexOf(e,d+1)}else if(1==r.length)c=[r.pop(),l]
else{a=r.pop()
if(a<i){i=a
o=l}l=n.indexOf(t,d+1)}d=s<l&&s>=0?s:l}r.length&&(c=[i,o])}return c}},yE80:function(e,t,n){"use strict"
var r=n("pQTu")
t["a"]={strings(e,t){let n=r["default"].locale||"en-US"
const a={zh_Hant:"zh-Hant"}
n=a[n]||n
return e.localeCompare(t,n,{sensitivity:"variant",ignorePunctuation:false,numeric:true})},by(e){return(t,n)=>this.strings(e(t),e(n))},byKey(e){return this.by(t=>t[e])},byGet(e){return this.by(t=>t.get(e))}}},znKQ:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var r=n("VTBJ")
var a=n("1OyB")
var i=n("vuIU")
var o=n("md7G")
var c=n("foSv")
var s=n("Ji7U")
var l=n("q1tI")
var d=n.n(l)
var u=n("hPGw")
var f=d.a.createElement("g",{fillRule:"evenodd",stroke:"none",strokeWidth:"1"},d.a.createElement("path",{d:"M994.578 1436.356c-133.365 0-241.822 108.457-241.822 241.822S861.213 1920 994.578 1920s241.822-108.457 241.822-241.822-108.457-241.822-241.822-241.822zM1165.063 1315.444L1310.156 0H679l145.093 1315.444z"}))
var h=function(e){Object(s["a"])(t,e)
function t(){Object(a["a"])(this,t)
return Object(o["a"])(this,Object(c["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){return d.a.createElement(u["a"],Object.assign({},this.props,{name:"IconWarningBorderless",viewBox:"0 0 1920 1920"}),f)}}])
t.displayName="IconWarningBorderlessSolid"
return t}(l["Component"])
h.glyphName="warning-borderless"
h.variant="Solid"
h.propTypes=Object(r["a"])({},u["a"].propTypes)}}])

//# sourceMappingURL=94-c-1628de7749.js.map