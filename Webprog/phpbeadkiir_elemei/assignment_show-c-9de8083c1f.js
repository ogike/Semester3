(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[205,581],{"0jNN":function(e,t,r){"use strict"
var n=Object.prototype.hasOwnProperty
var a=Array.isArray
var o=function(){var e=[]
for(var t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase())
return e}()
var i=function(e){while(e.length>1){var t=e.pop()
var r=t.obj[t.prop]
if(a(r)){var n=[]
for(var o=0;o<r.length;++o)"undefined"!==typeof r[o]&&n.push(r[o])
t.obj[t.prop]=n}}}
var s=function(e,t){var r=t&&t.plainObjects?Object.create(null):{}
for(var n=0;n<e.length;++n)"undefined"!==typeof e[n]&&(r[n]=e[n])
return r}
var l=function e(t,r,o){if(!r)return t
if("object"!==typeof r){if(a(t))t.push(r)
else{if(!t||"object"!==typeof t)return[t,r];(o&&(o.plainObjects||o.allowPrototypes)||!n.call(Object.prototype,r))&&(t[r]=true)}return t}if(!t||"object"!==typeof t)return[t].concat(r)
var i=t
a(t)&&!a(r)&&(i=s(t,o))
if(a(t)&&a(r)){r.forEach((function(r,a){if(n.call(t,a)){var i=t[a]
i&&"object"===typeof i&&r&&"object"===typeof r?t[a]=e(i,r,o):t.push(r)}else t[a]=r}))
return t}return Object.keys(r).reduce((function(t,a){var i=r[a]
n.call(t,a)?t[a]=e(t[a],i,o):t[a]=i
return t}),i)}
var c=function(e,t){return Object.keys(t).reduce((function(e,r){e[r]=t[r]
return e}),e)}
var d=function(e,t,r){var n=e.replace(/\+/g," ")
if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape)
try{return decodeURIComponent(n)}catch(e){return n}}
var u=function(e,t,r){if(0===e.length)return e
var n=e
"symbol"===typeof e?n=Symbol.prototype.toString.call(e):"string"!==typeof e&&(n=String(e))
if("iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}))
var a=""
for(var i=0;i<n.length;++i){var s=n.charCodeAt(i)
if(45===s||46===s||95===s||126===s||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122){a+=n.charAt(i)
continue}if(s<128){a+=o[s]
continue}if(s<2048){a+=o[192|s>>6]+o[128|63&s]
continue}if(s<55296||s>=57344){a+=o[224|s>>12]+o[128|s>>6&63]+o[128|63&s]
continue}i+=1
s=65536+((1023&s)<<10|1023&n.charCodeAt(i))
a+=o[240|s>>18]+o[128|s>>12&63]+o[128|s>>6&63]+o[128|63&s]}return a}
var f=function(e){var t=[{obj:{o:e},prop:"o"}]
var r=[]
for(var n=0;n<t.length;++n){var a=t[n]
var o=a.obj[a.prop]
var s=Object.keys(o)
for(var l=0;l<s.length;++l){var c=s[l]
var d=o[c]
if("object"===typeof d&&null!==d&&-1===r.indexOf(d)){t.push({obj:o,prop:c})
r.push(d)}}}i(t)
return e}
var p=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}
var _=function(e){if(!e||"object"!==typeof e)return false
return!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}
var m=function(e,t){return[].concat(e,t)}
e.exports={arrayToObject:s,assign:c,combine:m,compact:f,decode:d,encode:u,isBuffer:_,isRegExp:p,merge:l}},"6V2X":function(e,t,r){"use strict"
var n=r("An8g")
var a=r("Ff2n")
var o=r("pQTu")
var i=r("m0r6")
Object(i["a"])(JSON.parse('{"de":{"copy_to_64f8456b":"Kopieren nach ..."}}'))
r("jQeR")
r("0sPK")
var s=o["default"].scoped("direct_share_course_tray")
var l=r("q1tI")
var c=r.n(l)
var d=r("xGaD")
r.d(t,"a",(function(){return f}))
const u=Object(l["lazy"])(()=>Promise.all([r.e(5),r.e(6),r.e(8),r.e(23),r.e(106),r.e(513)]).then(r.bind(null,"mftS")))
function f(e){let t=e.sourceCourseId,r=e.contentSelection,o=e.onDismiss,i=Object(a["a"])(e,["sourceCourseId","contentSelection","onDismiss"])
return c.a.createElement(d["a"],Object.assign({label:s.t("Copy To..."),placement:"end",onDismiss:o,padding:"0 1.5rem"},i),Object(n["a"])(u,{sourceCourseId:t,contentSelection:r,onCancel:o}))}},EcmN:function(e,t,r){"use strict"
var n=r("pQTu")
var a=r("m0r6")
Object(a["a"])(JSON.parse('{"de":{"anonymous_grading_cannot_be_enabled_for_group_assi_faa33494":"Für Gruppenaufgaben kann anonyme Benotung nicht aktiviert werden.","assignment":{"assignment_group_must_have_group":"Wählen Sie eine Aufgabengruppe für diese Aufgabe aus.","at_least_one_file_type":"Geben Sie mindestens einen zulässigen Dateityp an.","at_least_one_submission_type":"Wählen Sie mindestens eine Abgabeart aus.","buttons":{"select_url":"Auswählen"},"gpa_scale_explainer":"Was versteht man unter GPA Scale Grading?","grading_type_options":{"gpa_scale":"GPA-Skala","letter_grade":"Buchstaben-Note","not_graded":"Unbenotet","pass_fail":"Vollständig/Unvollständig","percent":"Prozentsatz","points":"Punkte"},"name_is_required":"Name erforderlich!","points_possible_number":"Der Wert für die möglichen Punkte muss eine Zahl sein.","select_external_tool_dialog_title":"Externes Tool konfigurieren","titles":{"gpa_scale_explainer":"Was versteht man unter GPA Scale Grading?","grading_scheme_info":"Benotungssystem anzeigen/bearbeiten"},"vericite_submission_types_validation":"VeriCite unterstützt nur Dateiübermittlungen und Texteingabe"},"assignment_d8387b78":"Aufgabe","cannot_be_edited_for_assignments_in_closed_grading_792ef6c1":"Kann für Aufgaben in abgeschlossenen Benotungszeiträumen nicht geändert werden","external_tool_url_cannot_be_left_blank_a34b6bb2":"Externes Tool-URL darf nicht leer sein.","grader_count_cannot_be_0_9228afe4":"Benoterzahl kann nicht 0 sein.","grader_count_is_required_45b6c85b":"Benoterzahl ist erforderlich.","grader_is_required_62c88f67":"Benoter ist erforderlich.","group_assignments_cannot_be_enabled_for_anonymousl_ed896b1c":"Gruppenaufgaben nicht für anonym benotete Aufgaben aktiviert werden.","group_assignments_cannot_be_enabled_for_moderated__6b2faeef":"Gruppenaufgaben können für moderierte Aufgaben nicht aktiviert werden.","must_select_a_student_group_first_15c6a3cb":"Zuerst muss eine Studentengruppe ausgewählt werden","name_is_too_long_must_be_under_length_characters_b8dad44c":"Der Name muss kürzer als %{length} Zeichen sein.","number_of_attempts_must_be_a_number_greater_than_0_a915568c":"Die Anzahl der Versuche muss größer als 0 sein.","peer_reviews_cannot_be_enabled_for_moderated_assig_149d33c4":"Peer-Korrekturen können für moderierte Aufgaben nicht aktiviert werden.","please_create_a_group_set_8db6e8fe":"Bitte erstellen Sie ein Gruppenset.","please_select_a_group_set_for_this_assignment_e1da63d3":"Wählen Sie ein Gruppenset für diese Aufgabe aus.","please_upload_files_as_a_zip_5a2c799f":"Bitte laden Sie die Dateien im ZIP-Format hoch.","points_possible_must_be_0_or_more_for_selected_gra_f96a04e3":"Für den ausgewählten Benotungstyp muss der Wert für die möglichen Punkte 0 oder höher sein.","select_group_to_grade_6df28d80":"Zu benotende Gruppe auswählen","select_one_8e0af564":"Einen auswählen","speedgrader_tm_44688790":"SpeedGrader™"},"hu":{"assignment":{"assignment_group_must_have_group":"Kérjük, válasszon ki egy feladatcsoportot ehhez a feladathoz","at_least_one_file_type":"Kérjük, adjon meg legalább egy támogatott fájltípust","at_least_one_submission_type":"Kérjük, adjon meg legalább egy beadandó típust","buttons":{"select_url":"Kiválasztás"},"gpa_scale_explainer":"Mit jelent a GPA skála szerinti értékelés?","grading_type_options":{"gpa_scale":"GPA skála","letter_grade":"Betű alapú érdemjegy","not_graded":"Nem osztályozott","pass_fail":"Kész/Hiányos","percent":"Százalék","points":"Pontok"},"name_is_required":"A név megadása kötelező!","points_possible_number":"Az elérhető pontokat számként kell megadni","select_external_tool_dialog_title":"Külső eszköz konfigurálása","titles":{"gpa_scale_explainer":"Mit jelent a GPA skála szerinti osztályzás?","grading_scheme_info":"Osztályzási rendszer megtekintése/szerkesztése"}},"assignment_d8387b78":"feladat","external_tool_url_cannot_be_left_blank_a34b6bb2":"A külső eszköz URL nem maradhat üresen","group_assignments_cannot_be_enabled_for_moderated__6b2faeef":"A csoportos feladatok nem engedélyezhetők moderált feladatokhoz","name_is_too_long_must_be_under_length_characters_b8dad44c":"A név túl hosszú, %{length}karakternél rövidebbnek kell lennie.","peer_reviews_cannot_be_enabled_for_moderated_assig_149d33c4":"Társértékelés nem engedélyezhető moderált feladatokhoz","please_upload_files_as_a_zip_5a2c799f":"Kérjük, .zip tömörítéssel töltse fel a fájlokat","points_possible_must_be_0_or_more_for_selected_gra_f96a04e3":"Az elérhető pontok száma ennél az értékelési típusnál csak 0 vagy annál nagyobb lehet","select_one_8e0af564":"Válasszon egyet","speedgrader_tm_44688790":"Gyorsértékelő"}}'))
r("jQeR")
r("0sPK")
t["a"]=n["default"].scoped("assignment")},H4Sz:function(e,t,r){"use strict"
var n=r("An8g")
var a=r("ouhR")
var o=r.n(a)
var i=r("q1tI")
var s=r.n(i)
r("17x9")
var l=r("i8i4")
var c=r.n(l)
var d=r("P4VU")
r("MWZS")
var u=r("mykf")
var f=r("etQE")
var p=Object(n["a"])("div",{className:"ic-flash__icon","aria-hidden":"true"},void 0,Object(n["a"])("i",{className:"icon-info"}))
var _=Object(n["a"])("div",{className:"ic-flash__icon","aria-hidden":"true"},void 0,Object(n["a"])("i",{className:"icon-info"}))
var m=Object(n["a"])("div",{})
class h extends s.a.Component{constructor(e){super(e)
this.getMaxIFrameWidth=()=>{if(this.state.tools){let e=0
for(let t=0;t<this.state.tools.length;t++){const r=this.state.tools[t]
const n=this["tool_iframe_".concat(r.definition_id)].offsetWidth
n>e&&(e=n)}return e}return null}
this.handleAlertFocus=e=>{const t={iframeStyle:{border:"2px solid #008EE2",width:"".concat(this.getMaxIFrameWidth()-4,"px")}}
e.target.className.search("before")>-1?t.beforeExternalContentAlertClass="":e.target.className.search("after")>-1&&(t.afterExternalContentAlertClass="")
this.setState(t)}
this.handleAlertBlur=e=>{const t={iframeStyle:{border:"none",width:"100%"}}
e.target.className.search("before")>-1?t.beforeExternalContentAlertClass="screenreader-only":e.target.className.search("after")>-1&&(t.afterExternalContentAlertClass="screenreader-only")
this.setState(t)}
this.state={tools:[],beforeExternalContentAlertClass:"screenreader-only",afterExternalContentAlertClass:"screenreader-only",iframeStyle:{}}}componentWillMount(){this.getTools()}componentDidMount(){if(this.state.tools)for(let e=0;e<this.state.tools.length;e++){const t=this.state.tools[e]
this["tool_iframe_".concat(t.definition_id)].setAttribute("allow",Object(u["a"])())}}async getTools(){const e=encodeURI("".concat(this.getDefinitionsUrl(),"?placements[]=").concat(this.props.placement))
try{const t=Object(f["e"])(e)||fetch(e,f["d"])
const r=await Object(f["b"])(t)
r.forEach(e=>e.launch=this.getLaunch(e))
this.setState({tools:r})}catch(e){o.a.flashError(d["a"].t("Error retrieving assignment external tools"))}}getDefinitionsUrl(){return"/api/v1/courses/".concat(this.props.courseId,"/lti_apps/launch_definitions")}getLaunch(e){const t=e.placements[this.props.placement].url
let r="?borderless=true&url=".concat(encodeURIComponent(t),"&placement=").concat(this.props.placement)
this.props.assignmentId&&(r+="&assignment_id=".concat(this.props.assignmentId))
const n="/courses/".concat(this.props.courseId,"/external_tools/retrieve")
return n+r}renderTool(e){const t={}
o.a.extend(t,this.state.iframeStyle)
if(e.placements[this.props.placement].launch_height){t.height=e.placements[this.props.placement].launch_height
t.minHeight="unset"}e.placements[this.props.placement].launch_width&&(t.width=e.placements[this.props.placement].launch_width)
return s.a.createElement("iframe",{src:e.launch,className:"tool_launch",style:t,key:e.definition_id,title:d["a"].t("External Tool %{tool_id}",{tool_id:e.definition_id}),ref:t=>{this["tool_iframe_".concat(e.definition_id)]=t},"data-lti-launch":"true"})}renderToolsContainer(){const e="before_external_content_info_alert ".concat(this.state.beforeExternalContentAlertClass)
const t="after_external_content_info_alert ".concat(this.state.afterExternalContentAlertClass)
return Object(n["a"])("div",{style:{display:"about:blank"===this.state.toolLaunchUrl?"none":"block"}},void 0,Object(n["a"])("div",{onFocus:this.handleAlertFocus,onBlur:this.handleAlertBlur,className:e,tabIndex:"0"},void 0,Object(n["a"])("div",{className:"ic-flash-info",style:{width:"auto",margin:"20px"}},void 0,p,d["a"].t("The following content is partner provided"))),this.state.tools.map(e=>this.renderTool(e)),Object(n["a"])("div",{onFocus:this.handleAlertFocus,onBlur:this.handleAlertBlur,className:t,tabIndex:"0"},void 0,Object(n["a"])("div",{className:"ic-flash-info",style:{width:"auto",margin:"20px"}},void 0,_,d["a"].t("The preceding content is partner provided"))))}render(){if(0===this.state.tools.length)return m
return Object(n["a"])("div",{},void 0,Object(n["a"])("div",{className:"border border-trbl border-round"},void 0,this.renderToolsContainer()))}}h.defaultProps={assignmentId:void 0}
const v=function(e,t,r,a){const o=Object(n["a"])(h,{placement:t,courseId:r,assignmentId:a})
c.a.render(o,e)}
const g={configTools:h,attach:v}
t["a"]=g},KuFa:function(e,t,r){"use strict"
r.r(t)
var n=r("An8g")
var a=r("u7Gu")
var o=r("EcmN")
var i=r("ouhR")
var s=r.n(i)
r("q1tI")
var l=r("i8i4")
var c=r.n(l)
var d=r("x1Tw")
var u=r("Qyje")
var f=r.n(u)
var p=r("Et5h")
var _=r("7FZx")
var m=r("FIFq")
var h=r.n(m)
var v=function(e,t){return function(){return e.apply(t,arguments)}},g=function(e,t){for(var r in t)b.call(t,r)&&(e[r]=t[r])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},b={}.hasOwnProperty
var y=function(e){g(t,e)
function t(){this.toggleSpeedgraderLink=v(this.toggleSpeedgraderLink,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
return this.model.on("change:published",this.toggleSpeedgraderLink)}
t.prototype.toggleSpeedgraderLink=function(){return this.model.get("published")?this.$el.removeClass("hidden"):this.$el.addClass("hidden")}
return t}(h.a.View)
var j=r("goGJ")
var O=r("oMlh")
var k=r("GXQz")
r("Z+Ib")
var S=r("y8OA")
var w=r("H4Sz")
var x=r("mKSb")
var E=r("i+HM")
var N=r("ppA4")
var C=r("6V2X")
const A=new S["default"]
A.init({itemType:"assignment",page:"show"})
function I(e){if("0"!==e){d["a"].put("/api/v1/courses/".concat(ENV.COURSE_ID,"/gradebook_settings"),f.a.stringify({gradebook_settings:{filter_rows_by:{student_group_id:e}}}))
ENV.selected_student_group_id=e
D()
z()}}function z(){const e=ENV.SETTINGS.filter_speed_grader_by_student_group&&!ENV.selected_student_group_id
const t=document.getElementById("speed_grader_link_mount_point")
t&&c.a.render(Object(n["a"])(E["a"],{disabled:e,href:ENV.speed_grader_url,disabledTip:o["a"].t("Must select a student group first")}),t)}function D(){const e=document.getElementById("student_group_filter_mount_point")
e&&c.a.render(Object(n["a"])(x["a"],{categories:ENV.group_categories,label:o["a"].t("Select Group to Grade"),onChange:I,value:ENV.selected_student_group_id}),e)}const T=Promise.all([r.e(1),r.e(525)]).then(r.bind(null,"/j35"))
s()(()=>{const e=s()("#assignment_publish_button")
if(e.length>0){const t=new p["a"]({id:e.attr("data-id"),unpublishable:!e.hasClass("disabled"),published:e.hasClass("published")})
t.doNotParse()
new y({model:t,el:"#assignment-speedgrader-link"}).render()
const r=new _["a"]({model:t,el:e})
r.render()
r.on("publish",()=>s()("#moderated_grading_button").show())
r.on("unpublish",()=>s()("#moderated_grading_button").hide())}T.then(()=>{s()("#sequence_footer").moduleSequenceFooter({courseID:ENV.COURSE_ID,assetType:"Assignment",assetID:ENV.ASSIGNMENT_ID,location:window.location})})
return Object(j["a"])()})
s()(()=>s()("#content").on("click","#mark-as-done-checkbox",(function(){return O["a"].toggle(this)})))
function P(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
e&&e.preventDefault()
c.a.render(Object(n["a"])(N["a"],{open:t,sourceCourseId:ENV.COURSE_ID,contentShare:{content_type:"assignment",content_id:ENV.ASSIGNMENT_ID},onDismiss:()=>{P(null,false)
s()(".al-trigger").focus()}}),document.getElementById("direct-share-mount-point"))}function B(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
e&&e.preventDefault()
c.a.render(Object(n["a"])(C["a"],{open:t,sourceCourseId:ENV.COURSE_ID,contentSelection:{assignments:[ENV.ASSIGNMENT_ID]},onDismiss:()=>{B(null,false)
s()(".al-trigger").focus()}}),document.getElementById("direct-share-mount-point"))}s()(()=>{s()(".direct-share-send-to-menu-item").click(P)
s()(".direct-share-copy-to-menu-item").click(B)})
s()(()=>{if(ENV.speed_grader_url){ENV.SETTINGS.filter_speed_grader_by_student_group&&D()
z()}})
s()(()=>{s()(".upload_submissions_link").click(e=>{e.preventDefault()
s()("#re_upload_submissions_form").slideToggle()})
s()(".download_submissions_link").click((function(e){e.preventDefault()
a["a"].downloadSubmissions(s()(this).attr("href"))
s()(".upload_submissions_link").slideDown()}))
s()("#re_upload_submissions_form").submit((function(e){const t=s()(this).getFormData()
if(t.submissions_zip){if(!t.submissions_zip.match(/\.zip$/)){e.preventDefault()
e.stopPropagation()
s()(this).formErrors({submissions_zip:o["a"].t("Please upload files as a .zip")})}}else{e.preventDefault()
e.stopPropagation()}}))
s()("#edit_assignment_form").bind("assignment_updated",(e,t)=>{t.assignment&&t.assignment.peer_reviews?s()(".assignment_peer_reviews_link").slideDown():s()(".assignment_peer_reviews_link").slideUp()})})
s()(()=>{const e=document.getElementById("crs-graphs")
const t=document.getElementById("not_right_side")
k["default"].init(e,t)
document.getElementById("assignment_external_tools")&&w["a"].attach(document.getElementById("assignment_external_tools"),"assignment_view",parseInt(ENV.COURSE_ID,10),parseInt(ENV.ASSIGNMENT_ID,10))})},P4VU:function(e,t,r){"use strict"
var n=r("pQTu")
var a=r("m0r6")
Object(a["a"])(JSON.parse('{"de":{"error_retrieving_assignment_external_tools_9102d343":"Fehler beim Abrufen aufgabenexterner-Tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Fehler beim Abrufen der Similarity-Detection-Tools","external_tool_tool_id_6028b3b1":"Externes Tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Der folgende Content stammt von einem Partner.","the_preceding_content_is_partner_provided_d753928c":"Der vorhergehende Content stammt von einem Partner."}}'))
r("jQeR")
r("0sPK")
t["a"]=n["default"].scoped("moderated_grading")},QSc6:function(e,t,r){"use strict"
var n=r("0jNN")
var a=r("sxOR")
var o=Object.prototype.hasOwnProperty
var i={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}}
var s=Array.isArray
var l=Array.prototype.push
var c=function(e,t){l.apply(e,s(t)?t:[t])}
var d=Date.prototype.toISOString
var u=a["default"]
var f={addQueryPrefix:false,allowDots:false,charset:"utf-8",charsetSentinel:false,delimiter:"&",encode:true,encoder:n.encode,encodeValuesOnly:false,format:u,formatter:a.formatters[u],indices:false,serializeDate:function(e){return d.call(e)},skipNulls:false,strictNullHandling:false}
var p=function(e){return"string"===typeof e||"number"===typeof e||"boolean"===typeof e||"symbol"===typeof e||"bigint"===typeof e}
var _=function e(t,r,a,o,i,l,d,u,_,m,h,v,g){var b=t
"function"===typeof d?b=d(r,b):b instanceof Date?b=m(b):"comma"===a&&s(b)&&(b=b.join(","))
if(null===b){if(o)return l&&!v?l(r,f.encoder,g,"key"):r
b=""}if(p(b)||n.isBuffer(b)){if(l){var y=v?r:l(r,f.encoder,g,"key")
return[h(y)+"="+h(l(b,f.encoder,g,"value"))]}return[h(r)+"="+h(String(b))]}var j=[]
if("undefined"===typeof b)return j
var O
if(s(d))O=d
else{var k=Object.keys(b)
O=u?k.sort(u):k}for(var S=0;S<O.length;++S){var w=O[S]
if(i&&null===b[w])continue
s(b)?c(j,e(b[w],"function"===typeof a?a(r,w):r,a,o,i,l,d,u,_,m,h,v,g)):c(j,e(b[w],r+(_?"."+w:"["+w+"]"),a,o,i,l,d,u,_,m,h,v,g))}return j}
var m=function(e){if(!e)return f
if(null!==e.encoder&&void 0!==e.encoder&&"function"!==typeof e.encoder)throw new TypeError("Encoder has to be a function.")
var t=e.charset||f.charset
if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined")
var r=a["default"]
if("undefined"!==typeof e.format){if(!o.call(a.formatters,e.format))throw new TypeError("Unknown format option provided.")
r=e.format}var n=a.formatters[r]
var i=f.filter;("function"===typeof e.filter||s(e.filter))&&(i=e.filter)
return{addQueryPrefix:"boolean"===typeof e.addQueryPrefix?e.addQueryPrefix:f.addQueryPrefix,allowDots:"undefined"===typeof e.allowDots?f.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:f.charsetSentinel,delimiter:"undefined"===typeof e.delimiter?f.delimiter:e.delimiter,encode:"boolean"===typeof e.encode?e.encode:f.encode,encoder:"function"===typeof e.encoder?e.encoder:f.encoder,encodeValuesOnly:"boolean"===typeof e.encodeValuesOnly?e.encodeValuesOnly:f.encodeValuesOnly,filter:i,formatter:n,serializeDate:"function"===typeof e.serializeDate?e.serializeDate:f.serializeDate,skipNulls:"boolean"===typeof e.skipNulls?e.skipNulls:f.skipNulls,sort:"function"===typeof e.sort?e.sort:null,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:f.strictNullHandling}}
e.exports=function(e,t){var r=e
var n=m(t)
var a
var o
if("function"===typeof n.filter){o=n.filter
r=o("",r)}else if(s(n.filter)){o=n.filter
a=o}var l=[]
if("object"!==typeof r||null===r)return""
var d
d=t&&t.arrayFormat in i?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices"
var u=i[d]
a||(a=Object.keys(r))
n.sort&&a.sort(n.sort)
for(var f=0;f<a.length;++f){var p=a[f]
if(n.skipNulls&&null===r[p])continue
c(l,_(r[p],p,u,n.strictNullHandling,n.skipNulls,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.formatter,n.encodeValuesOnly,n.charset))}var h=l.join(n.delimiter)
var v=true===n.addQueryPrefix?"?":""
n.charsetSentinel&&("iso-8859-1"===n.charset?v+="utf8=%26%2310003%3B&":v+="utf8=%E2%9C%93&")
return h.length>0?v+h:""}},Qyje:function(e,t,r){"use strict"
var n=r("QSc6")
var a=r("nmq7")
var o=r("sxOR")
e.exports={formats:o,parse:a,stringify:n}},eAd9:function(e,t,r){(function(t){var r=false
var n
var a
function o(){if("undefined"!==typeof n)return n
var e=document.documentElement
var t=document.createElement("div")
t.setAttribute("style","width:99px;height:99px;position:absolute;top:-9999px;overflow:scroll;")
e.appendChild(t)
n=t.offsetWidth-t.clientWidth
e.removeChild(t)
return n}function i(){return document.documentElement.scrollHeight>window.innerHeight}function s(e){if("undefined"===typeof document||r)return
var t=document.documentElement
a=window.pageYOffset
i()?t.style.width="calc(100% - "+o()+"px)":t.style.width="100%"
t.style.position="fixed"
t.style.top=-a+"px"
t.style.overflow="hidden"
r=true}function l(){if("undefined"===typeof document||!r)return
var e=document.documentElement
e.style.width=""
e.style.position=""
e.style.top=""
e.style.overflow=""
window.scroll(0,a)
r=false}function c(){if(r){l()
return}s()}var d={on:s,off:l,toggle:c}
"undefined"!==typeof e.exports?e.exports=d:t.noScroll=d})(this)},"i+HM":function(e,t,r){"use strict"
var n=r("An8g")
var a=r("VTBJ")
var o=r("q1tI")
var i=r.n(o)
r("17x9")
var s=r("5Shj")
var l=r("EcmN")
function c(e){return i.a.createElement("a",Object.assign({rel:"noopener noreferrer",target:"_blank"},e),l["a"].t("SpeedGrader™"))}function d(e){const t=e.className?"icon-speed-grader ".concat(e.className):"icon-speed-grader"
let r={className:t,href:e.href}
e.disabled&&(r=Object(a["a"])({},r,{"aria-disabled":"true","aria-describedby":e.disabledTip,onClick:e=>{e.preventDefault()},role:"button",style:{opacity:.5}}))
return e.disabled?Object(n["a"])(s["a"],{placement:"bottom",tip:e.disabledTip,variant:"inverse"},void 0,c(r)):c(r)}t["a"]=d},mKSb:function(e,t,r){"use strict"
var n=r("An8g")
r("17x9")
var a=r("sTNg")
var o=r("EcmN")
r("q1tI")
function i(e){return Object(n["a"])("option",{value:e.id},e.id,e.name)}function s(e){return Object(n["a"])("optgroup",{label:e.name},"group_category_".concat(e.id),e.groups.map(e=>i(e)))}function l(e){return Object(n["a"])(a["FormField"],{id:"student-group-filter",label:e.label},void 0,Object(n["a"])("select",{onChange:t=>{e.onChange(t.target.value)},style:{margin:"0",width:"100%"},value:e.value||"0"},void 0,Object(n["a"])("option",{"aria-disabled":"true",disabled:"disabled",value:"0"},"0",o["a"].t("Select One")),e.categories.map(e=>s(e))))}t["a"]=l},mykf:function(e,t,r){"use strict"
const n=()=>{const e=ENV.LTI_LAUNCH_FRAME_ALLOWANCES||[]
return e.join("; ")}
t["a"]=n},nmq7:function(e,t,r){"use strict"
var n=r("0jNN")
var a=Object.prototype.hasOwnProperty
var o=Array.isArray
var i={allowDots:false,allowPrototypes:false,arrayLimit:20,charset:"utf-8",charsetSentinel:false,comma:false,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:false,interpretNumericEntities:false,parameterLimit:1e3,parseArrays:true,plainObjects:false,strictNullHandling:false}
var s=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))}
var l="utf8=%26%2310003%3B"
var c="utf8=%E2%9C%93"
var d=function(e,t){var r={}
var d=t.ignoreQueryPrefix?e.replace(/^\?/,""):e
var u=Infinity===t.parameterLimit?void 0:t.parameterLimit
var f=d.split(t.delimiter,u)
var p=-1
var _
var m=t.charset
if(t.charsetSentinel)for(_=0;_<f.length;++_)if(0===f[_].indexOf("utf8=")){f[_]===c?m="utf-8":f[_]===l&&(m="iso-8859-1")
p=_
_=f.length}for(_=0;_<f.length;++_){if(_===p)continue
var h=f[_]
var v=h.indexOf("]=")
var g=-1===v?h.indexOf("="):v+1
var b,y
if(-1===g){b=t.decoder(h,i.decoder,m,"key")
y=t.strictNullHandling?null:""}else{b=t.decoder(h.slice(0,g),i.decoder,m,"key")
y=t.decoder(h.slice(g+1),i.decoder,m,"value")}y&&t.interpretNumericEntities&&"iso-8859-1"===m&&(y=s(y))
y&&"string"===typeof y&&t.comma&&y.indexOf(",")>-1&&(y=y.split(","))
h.indexOf("[]=")>-1&&(y=o(y)?[y]:y)
a.call(r,b)?r[b]=n.combine(r[b],y):r[b]=y}return r}
var u=function(e,t,r){var n=t
for(var a=e.length-1;a>=0;--a){var o
var i=e[a]
if("[]"===i&&r.parseArrays)o=[].concat(n)
else{o=r.plainObjects?Object.create(null):{}
var s="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i
var l=parseInt(s,10)
if(r.parseArrays||""!==s)if(!isNaN(l)&&i!==s&&String(l)===s&&l>=0&&r.parseArrays&&l<=r.arrayLimit){o=[]
o[l]=n}else o[s]=n
else o={0:n}}n=o}return n}
var f=function(e,t,r){if(!e)return
var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e
var o=/(\[[^[\]]*])/
var i=/(\[[^[\]]*])/g
var s=r.depth>0&&o.exec(n)
var l=s?n.slice(0,s.index):n
var c=[]
if(l){if(!r.plainObjects&&a.call(Object.prototype,l)&&!r.allowPrototypes)return
c.push(l)}var d=0
while(r.depth>0&&null!==(s=i.exec(n))&&d<r.depth){d+=1
if(!r.plainObjects&&a.call(Object.prototype,s[1].slice(1,-1))&&!r.allowPrototypes)return
c.push(s[1])}s&&c.push("["+n.slice(s.index)+"]")
return u(c,t,r)}
var p=function(e){if(!e)return i
if(null!==e.decoder&&void 0!==e.decoder&&"function"!==typeof e.decoder)throw new TypeError("Decoder has to be a function.")
if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined")
var t="undefined"===typeof e.charset?i.charset:e.charset
return{allowDots:"undefined"===typeof e.allowDots?i.allowDots:!!e.allowDots,allowPrototypes:"boolean"===typeof e.allowPrototypes?e.allowPrototypes:i.allowPrototypes,arrayLimit:"number"===typeof e.arrayLimit?e.arrayLimit:i.arrayLimit,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:i.charsetSentinel,comma:"boolean"===typeof e.comma?e.comma:i.comma,decoder:"function"===typeof e.decoder?e.decoder:i.decoder,delimiter:"string"===typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:i.delimiter,depth:"number"===typeof e.depth||false===e.depth?+e.depth:i.depth,ignoreQueryPrefix:true===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"===typeof e.interpretNumericEntities?e.interpretNumericEntities:i.interpretNumericEntities,parameterLimit:"number"===typeof e.parameterLimit?e.parameterLimit:i.parameterLimit,parseArrays:false!==e.parseArrays,plainObjects:"boolean"===typeof e.plainObjects?e.plainObjects:i.plainObjects,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:i.strictNullHandling}}
e.exports=function(e,t){var r=p(t)
if(""===e||null===e||"undefined"===typeof e)return r.plainObjects?Object.create(null):{}
var a="string"===typeof e?d(e,r):e
var o=r.plainObjects?Object.create(null):{}
var i=Object.keys(a)
for(var s=0;s<i.length;++s){var l=i[s]
var c=f(l,a[l],r)
o=n.merge(o,c,r)}return n.compact(o)}},oMlh:function(e,t,r){"use strict"
var n=r("ouhR")
var a=r.n(n)
r("jYyc")
t["a"]={toggle(e){const t=a()(e).data.bind(a()(e))
return a.a.ajaxJSON(t("url"),t("isChecked")?"DELETE":"PUT",{},()=>{t("isChecked",!t("isChecked"))
a()(e).toggleClass("btn-success")
a()("i",e).toggleClass("icon-empty icon-complete")
a()(".mark-done-labels span",e).toggleClass("visible")})}}},ppA4:function(e,t,r){"use strict"
var n=r("An8g")
var a=r("VTBJ")
var o=r("ODXe")
var i=r("Ff2n")
var s=r("pQTu")
var l=r("m0r6")
Object(l["a"])(JSON.parse('{"de":{"cancel_caeb1e68":"Abbrechen","content_share_started_successfully_2c37fb79":"Inhaltsfreigabe erfolgreich gestartet","error_starting_content_share_18fb1532":"Fehler beim Starten der Inhaltsfreigabe","loading_25990131":"Wird geladen ...","send_e3bd0ed0":"Senden","send_to_b940900a":"Senden an ...","starting_content_share_2d8c2999":"Starten der Inhaltsfreigabe"},"hu":{"cancel_caeb1e68":"Mégse","loading_25990131":"Töltődik...","send_e3bd0ed0":"Küldés"}}'))
r("jQeR")
r("0sPK")
var c=s["default"].scoped("direct_share_user_modal")
var d=r("q1tI")
var u=r.n(d)
r("17x9")
var f=r("L+/K")
var p=r("Xx/m")
var _=r("VTJ5")
var m=r("S4Kx")
var h=r("BxIY")
r("qBwj")
var v=r("4Ogu")
r.d(t,"a",(function(){return y}))
const g=Object(d["lazy"])(()=>Promise.all([r.e(5),r.e(6),r.e(8),r.e(23),r.e(120),r.e(505)]).then(r.bind(null,"FB/m")))
var b=Object(n["a"])(_["a"],{renderTitle:"",size:"x-small"})
function y(e){let t=e.contentShare,r=e.courseId,s=Object(i["a"])(e,["contentShare","courseId"])
const l=Object(d["useState"])([]),y=Object(o["a"])(l,2),j=y[0],O=y[1]
const k=Object(d["useState"])(null),S=Object(o["a"])(k,2),w=S[0],x=S[1]
const E=Object(d["useRef"])(s.open)
function N(){O([])
x(null)}function C(e){j.find(t=>t.id===e.id)||O(j.concat([e]))}function A(e){O(j.filter(t=>t.id!==e.id))}function I(){return Object(v["a"])({method:"POST",path:"/api/v1/users/self/content_shares",body:Object(a["a"])({},t,{receiver_ids:j.map(e=>e.id)})})}function z(){x("info")
I().then(()=>x("success")).catch(e=>{console.error(e)
e.response&&console.error(e.response)
x("error")})}function D(){return u.a.createElement(u.a.Fragment,null,Object(n["a"])(p["a"],{onClick:s.onDismiss},void 0,c.t("Cancel")),Object(n["a"])(p["a"],{disabled:0===j.length||null!==w,variant:"primary",margin:"0 0 0 x-small",onClick:z},void 0,c.t("Send")))}const T=Object(n["a"])(m["a"],{as:"div",textAlign:"center"},void 0,Object(n["a"])(_["a"],{renderTitle:c.t("Loading...")}))
if(s.open!==E.current){E.current=s.open
N()}let P=""
"info"===w?P=c.t("Starting content share"):"success"===w?P=c.t("Content share started successfully"):"error"===w&&(P=c.t("Error starting content share"))
const B=P?Object(n["a"])(f["a"],{variant:w},void 0,Object(n["a"])("div",{role:"alert","aria-live":"assertive","aria-atomic":true},void 0,P),"info"===w?b:null):null
return u.a.createElement(h["a"],Object.assign({label:c.t("Send To..."),size:"medium"},s,{footer:Object(n["a"])(D,{})}),Object(n["a"])(d["Suspense"],{fallback:T},void 0,B,Object(n["a"])(g,{courseId:r,selectedUsers:j,onUserSelected:C,onUserRemoved:A})))}},"rf+m":function(e,t,r){"use strict"
r.d(t,"a",(function(){return p}))
var n=r("VTBJ")
var a=r("1OyB")
var o=r("vuIU")
var i=r("md7G")
var s=r("foSv")
var l=r("Ji7U")
var c=r("q1tI")
var d=r.n(c)
var u=r("hPGw")
var f=d.a.createElement("path",{d:"M568.13.012L392 176.142l783.864 783.989L392 1743.87 568.13 1920l960.118-959.87z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(l["a"])(t,e)
function t(){Object(a["a"])(this,t)
return Object(i["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(o["a"])(t,[{key:"render",value:function(){return d.a.createElement(u["a"],Object.assign({},this.props,{name:"IconArrowOpenEnd",viewBox:"0 0 1920 1920",bidirectional:true}),f)}}])
t.displayName="IconArrowOpenEndSolid"
return t}(c["Component"])
p.glyphName="arrow-open-end"
p.variant="Solid"
p.propTypes=Object(n["a"])({},u["a"].propTypes)},sxOR:function(e,t,r){"use strict"
var n=String.prototype.replace
var a=/%20/g
var o=r("0jNN")
var i={RFC1738:"RFC1738",RFC3986:"RFC3986"}
e.exports=o.assign({default:i.RFC3986,formatters:{RFC1738:function(e){return n.call(e,a,"+")},RFC3986:function(e){return String(e)}}},i)},ysUD:function(e,t,r){"use strict"
var n=r("VTBJ")
var a=r("rePB")
var o=r("1OyB")
var i=r("vuIU")
var s=r("md7G")
var l=r("foSv")
var c=r("Ji7U")
var d=r("q1tI")
var u=r.n(d)
var f=r("17x9")
var p=r.n(f)
var _=r("TSYQ")
var m=r.n(_)
var h=r("eAd9")
var v=r.n(h)
var g=r("J2CL")
var b=r("sQ3t")
var y=r("jtGx")
function j(e){var t=e.colors,r=e.borders,n=e.stacking
return{zIndex:n.topmost,background:"rgba(255, 255, 255, 0.75)",borderColor:"transparent",focusBorderColor:t.borderBrand,borderRadius:r.radiusMedium,borderWidth:r.widthSmall}}j.canvas=function(e){return{focusBorderColor:e["ic-brand-primary"]}}
r.d(t,"a",(function(){return E}))
var O,k,S,w
var x={componentId:"fvvQs",template:function(e){return"\n\n.fvvQs_bGBk{background:".concat(e.background||"inherit",";border:").concat(e.borderWidth||"inherit"," solid ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";bottom:0;box-sizing:border-box;display:flex;justify-content:center;left:0;outline:none;overflow:auto;position:absolute;right:0;top:0;z-index:").concat(e.zIndex||"inherit","}\n\n.fvvQs_bGBk:focus{border-color:").concat(e.focusBorderColor||"inherit","}\n\n.fvvQs_cMOR{position:fixed}\n\n.fvvQs_dacV{align-items:flex-start}\n\n.fvvQs_cwzs{align-items:center}\n\n.fvvQs_cGWj{align-items:flex-end}\n\n.fvvQs_eFiI{align-items:stretch}")},root:"fvvQs_bGBk",fullscreen:"fvvQs_cMOR",top:"fvvQs_dacV",center:"fvvQs_cwzs",bottom:"fvvQs_cGWj",stretch:"fvvQs_eFiI"}
var E=(O=Object(g["themeable"])(j,x),O(k=(w=S=function(e){Object(c["a"])(t,e)
function t(){var e
var r
Object(o["a"])(this,t)
for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i]
r=Object(s["a"])(this,(e=Object(l["a"])(t)).call.apply(e,[this].concat(a)))
r.handleElementRef=function(e){r.props.elementRef(e)}
r.contentRef=function(e){r._content=e}
return r}Object(i["a"])(t,[{key:"componentDidMount",value:function(){this.props.fullscreen&&v.a.on()}},{key:"componentWillUnmount",value:function(){this.props.fullscreen&&v.a.off()}},{key:"render",value:function(){var e
var r=Object(b["a"])(this.props.children,{ref:this.contentRef})
var o=m()((e={},Object(a["a"])(e,x.root,true),Object(a["a"])(e,x[this.props.placement],true),Object(a["a"])(e,x.fullscreen,this.props.fullscreen),e))
var i=Object(n["a"])({},Object(y["a"])(this.props,t.propTypes),{className:o,ref:this.handleElementRef})
if("function"===typeof this.props.onClick){i.onClick=this.props.onClick
i.tabIndex=-1}return u.a.createElement("span",i,r)}}])
t.displayName="Mask"
return t}(d["Component"]),S.propTypes={onDismiss:p.a.func,placement:p.a.oneOf(["top","center","bottom","stretch"]),fullscreen:p.a.bool,children:p.a.node,onClick:p.a.func,elementRef:p.a.func},S.defaultProps={placement:"center",fullscreen:false,onDismiss:void 0,children:null,onClick:void 0,elementRef:function(e){}},w))||k)}}])

//# sourceMappingURL=assignment_show-c-9de8083c1f.js.map