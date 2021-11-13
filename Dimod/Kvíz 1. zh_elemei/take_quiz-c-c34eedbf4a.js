(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[472],{"/iD7":function(e,t,n){"use strict"
var i=n("pQTu")
var s=n("m0r6")
Object(s["a"])(JSON.parse('{"de":{"editor":{"keyboard_shortcuts":{"dialog_title":"Tastenkombinationen","keybindings":{"close_submenu":"Schließen des Menüs oder Dialogs bringt Sie ebenfalls in den Editor-Bereich zurück.","navigate_toolbar":"Links/rechts Navigation durch Menü/Symbolleiste","open_menubar":"Editor-Menüleiste öffnen","open_toolbar":"Symbolleiste des Editors öffnen"}}},"open_this_keyboard_shortcuts_dialog_9658b83a":"Diesen Tastenkombinationsdialog öffnen"},"hu":{"editor":{"keyboard_shortcuts":{"dialog_title":"Billentyűparancsok","keybindings":{"close_submenu":"Menü vagy párbeszédablak bezárása, visszavisz a szerkesztő felületre","navigate_toolbar":"Navigáljon balra/jobbra a menün/eszköztáron át","open_menubar":"Szerkesztői menüsor megnyitása","open_toolbar":"Szerkesztői eszköztár megnyitása"}}}}}'))
n("jQeR")
n("0sPK")
var a=i["default"].scoped("editor.keyboard_shortcuts")
var o=n("ouhR")
var r=n.n(o)
var l=n("FIFq")
var u=n.n(l)
var c=n("3O+N")
var d=n.n(c)
n("DfGn")
var h=n("EvX+")
var _=d.a.default
var p=_.template,f=_.templates=_.templates||{}
var m="editor/KeyboardShortcuts"
f[m]=p((function(e,t,n,i,s){this.compilerInfo=[4,">= 1.0.0"]
n=this.merge(n,e.helpers)
s=s||{}
var a,o="",r="function",l=this.escapeExpression,u=this
function c(e,t){var i,s,a=""
a+="\n    <li>\n      <code>"
if(s=n.key)i=s.call(e,{hash:{},data:t})
else{s=e&&e.key
i=typeof s===r?s.call(e,{hash:{},data:t}):s}a+=l(i)+"</code>\n      <span>"
if(s=n.description)i=s.call(e,{hash:{},data:t})
else{s=e&&e.description
i=typeof s===r?s.call(e,{hash:{},data:t}):s}a+=l(i)+"</span>\n    </li>\n  "
return a}o+='<ul class="tinymce-keyboard-shortcuts">\n  '
a=n.each.call(t,t&&t.keybindings,{hash:{},inverse:u.noop,fn:u.program(1,c,s),data:s});(a||0===a)&&(o+=a)
o+="\n</ul>\n"
return o}))
h["a"].loadStylesheet("jst/editor/KeyboardShortcuts",{new_styles_normal_contrast:{combinedChecksum:"f4493af988"},new_styles_high_contrast:{combinedChecksum:"f4493af988"},responsive_layout_normal_contrast:{combinedChecksum:"f4493af988"},responsive_layout_high_contrast:{combinedChecksum:"f4493af988"},new_styles_normal_contrast_rtl:{combinedChecksum:"9b568bbcaf"},new_styles_high_contrast_rtl:{combinedChecksum:"9b568bbcaf"},responsive_layout_normal_contrast_rtl:{combinedChecksum:"9b568bbcaf"},responsive_layout_high_contrast_rtl:{combinedChecksum:"9b568bbcaf"}}[h["a"].getCssVariant()])
var g=f[m]
var v,b
v=[48,119]
b=u.a.View.extend({className:"tinymce-keyboard-shortcuts-toggle",tagName:"a",events:{click:"openDialog"},keybindings:[{key:"ALT+F9",description:a.t("keybindings.open_menubar","Open the editor's menubar")},{key:"ALT+F10",description:a.t("keybindings.open_toolbar","Open the editor's toolbar")},{key:"ESC",description:a.t("keybindings.close_submenu","Close menu or dialog, also gets you back to editor area")},{key:"TAB/Arrows",description:a.t("keybindings.navigate_toolbar","Navigate left/right through menu/toolbar")},{key:"ALT+F8",description:a.t("Open this keyboard shortcuts dialog")}],template:g,initialize:function(){this.el.href="#"
r()(this.el).attr("title",a.t("dialog_title","Keyboard Shortcuts"))
r()('<i class="icon-keyboard-shortcuts" aria-hidden="true" />').appendTo(this.el)
return r()('<span class="screenreader-only" />').text(a.t("dialog_title","Keyboard Shortcuts")).appendTo(this.el)},render:function(){var e
e={keybindings:this.keybindings}
this.$dialog=r()(this.template(e)).dialog({title:a.t("dialog_title","Keyboard Shortcuts"),width:600,resizable:true,autoOpen:false})
this.bindEvents()
return this},bindEvents:function(){if(!ENV.use_rce_enhancements){r()(document).on("keyup.tinymce_keyboard_shortcuts",this.openDialogByKeybinding.bind(this))
return r()(document).on("editorKeyUp",function(e,t){return this.openDialogByKeybinding(t)}.bind(this))}},remove:function(){r()(document).off("keyup.tinymce_keyboard_shortcuts")
r()(document).off("editorKeyUp")
return this.$dialog.dialog("destroy")},openDialog:function(){if(!this.$dialog.dialog("isOpen"))return this.$dialog.dialog("open")},openDialogByKeybinding:function(e){if(v.indexOf(e.keyCode)>-1&&e.altKey)return this.openDialog()}})
t["a"]=b},"1xB4":function(e,t,n){"use strict"
var i={EVT_PAGE_FOCUSED:"page_focused",EVT_PAGE_BLURRED:"page_blurred",EVT_QUESTION_VIEWED:"question_viewed",EVT_QUESTION_FLAGGED:"question_flagged",EVT_SESSION_STARTED:"session_started",EVT_PRIORITY_LOW:0,EVT_PRIORITY_HIGH:100,EVT_STATE_PENDING_DELIVERY:"pending_delivery",EVT_STATE_IN_DELIVERY:"in_delivery",EVT_STATE_DELIVERED:"delivered",EVT_STORAGE_KEY:"qla_events",EVT_STORAGE_MEMORY:"memory",EVT_STORAGE_LOCAL_STORAGE:"localStorage"}
var s=n("GLiE")
function a(){let e=Date.now()
return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const n=(e+16*Math.random())%16|0
e=Math.floor(e/16)
const i="x"===t?n:7&n|8
return i.toString(16)})}class o{static fromJSON(e){const t=new o(e.event_type,e.event_data)
t.recordedAt=new Date(e.client_timestamp)
return t}constructor(e,t){if(!e)throw new Error("An event type must be specified.")
this._id=a()
this._state=i.EVT_STATE_PENDING_DELIVERY
this.type=e
this.data=Object(s["clone"])(t)
this.recordedAt=new Date}isPendingDelivery(){return this._state===i.EVT_STATE_PENDING_DELIVERY}isBeingDelivered(){return this._state===i.EVT_STATE_IN_DELIVERY}wasDelivered(){return this._state===i.EVT_STATE_DELIVERED}toJSON(){return{event_type:this.type,event_data:this.data,client_timestamp:this.recordedAt}}toString(){return JSON.stringify(this.toJSON())}}class r{constructor(e){this._events=e}isEmpty(){return 0===this._events.length}markPendingDelivery(){return this._events.forEach(e=>e._state=i.EVT_STATE_PENDING_DELIVERY)}markBeingDelivered(){return this._events.forEach(e=>e._state=i.EVT_STATE_IN_DELIVERY)}toJSON(){return this._events.map(e=>e.toJSON())}}var l=n("zrOs")
var u=n.n(l)
const c=[i.EVT_STORAGE_MEMORY,i.EVT_STORAGE_LOCAL_STORAGE]
class d{static setStorageAdapter(e){if(-1===c.indexOf(e))throw new Error('Unsupported storage adapter "'.concat(e,'". Available adapters are:\n').concat(c.join(", ")))
return d.STORAGE_ADAPTER=e}constructor(){this.useLocalStorage=d.STORAGE_ADAPTER===i.EVT_STORAGE_LOCAL_STORAGE
this._events=this._load()||[]
u.a.debug("EventBuffer: using",this.constructor.STORAGE_ADAPTER,"for storage")}push(e){this._events.push(e)
return this._save()}isEmpty(){return 0===this._events.length}getLength(){return this._events.length}filter(e){return new r(this._events.filter(e))}discard(e){const t=e._events.map(e=>e._id)
this._events=this._events.filter(e=>-1===t.indexOf(e._id))
this._save()
return}toJSON(){return this._events.map(e=>e.toJSON())}_save(){if(this.useLocalStorage)try{localStorage.setItem(i.EVT_STORAGE_KEY,JSON.stringify(this.toJSON()))}catch(e){u.a.warn("Unable to save to localStorage, likely because we're out of space.")}return}_load(){if(this.useLocalStorage){const e=JSON.parse(localStorage.getItem(i.EVT_STORAGE_KEY)||"[]")
return e.map(e=>o.fromJSON(e))}return}}d.STORAGE_ADAPTER=i.EVT_STORAGE_MEMORY
var h=n("ouhR")
var _=n.n(h)
var p=n("w8vW")
const f={Accept:"application/json; charset=UTF-8","Content-Type":"application/json; charset=UTF-8"}
class m{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
this.options=Object(s["extend"])({},m.options,e)
this._trackerFactories=[]
this._state={trackers:[],buffer:null,deliveryAgent:null,deliveries:[]}}registerTracker(e){return this._trackerFactories.push(e)}unregisterAllTrackers(){return this._trackerFactories=[]}start(){const e=this._state
e.buffer=new d
const t=this.options
const n=this._enqueue.bind(this)
function i(e,t){const i=new o(e.getEventType(),t)
return n(i,e.getDeliveryPriority())}e.trackers=this._trackerFactories.map(e=>{const t=new e
t.install(i.bind(null,t))
return t})
if(t.autoDeliver)return this._startDeliveryAgent()}isRunning(){return!!this._state.buffer}isDirty(){return this.isRunning()&&!this._state.buffer.isEmpty()}isDelivering(){return this._state.deliveries.length>0}deliver(){const e=this._state.buffer
const t=this._state.deliveries
const n=this.options
const i=e.filter(e=>e.isPendingDelivery())
if(i.isEmpty())return Object(h["when"])()
i.markBeingDelivered()
const s=Object(h["ajax"])({url:n.deliveryUrl,type:"POST",global:false,headers:f,data:JSON.stringify({quiz_submission_events:i.toJSON()})})
s.then(()=>e.discard(i),()=>i.markPendingDelivery())
const a=()=>Object(p["a"])(t,s)
s.then(a,a)
t.push(s)
return s}stop(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
const t=this._state
if(this.isDelivering()&&!e){console.warn("You are attempting to stop the QuizLogAuditing module while a delivery is in progress.")
return Object(h["when"])(t.deliveries).done(this.stop.bind(this,true))}t.buffer=null
t.deliveryAgent&&this._stopDeliveryAgent()
t.trackers.forEach(e=>e.uninstall())
t.trackers=[]
return Object(h["when"])()}_startDeliveryAgent(){return this._state.deliveryAgent=setInterval(this.deliver.bind(this),this.options.autoDeliveryFrequency)}_enqueue(e,t){this._state.buffer.push(e)
u.a.log("Enqueuing ".concat(e," for delivery."))
if(t===i.EVT_PRIORITY_HIGH)return this.isDelivering()?Object(h["when"])(this._state.deliveries).done(this.deliver.bind(this)):this.deliver()}_stopDeliveryAgent(){return this._state.deliveryAgent=clearInterval(this._state.deliveryAgent)}}m.options={autoDeliver:true,autoDeliveryFrequency:15e3,deliveryUrl:"/quiz_submission_events"}
class g{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
this.eventType||(this.eventType=null)
this.priority||(this.priority=i.EVT_PRIORITY_LOW)
this._options=Object(s["extend"])({},this.options,e)
this.uid="".concat(this.eventType,"_").concat(Object(s["uniqueId"])())}install(e){throw new Error("Not implemented!")}getEventType(){return this.eventType}getDeliveryPriority(){return this.priority}getOption(e){return this._options[e]}uninstall(){if(this._bindings){this._bindings.forEach(e=>_()(e.selector).off(e.eventName))
return this._bindings=null}}bind(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
this._bindings||(this._bindings=[])
this._bindings.push({selector:e,eventName:t})
const a=parseInt(i.throttle||0,10)
a>0&&(n=Object(s["throttle"])(n,a,{leading:true,trailing:false}))
_()(e).on("".concat(t,".").concat(this.eventType),n)}}class v extends g{install(e){return this.bind(window,"focus",()=>e(),{throttle:this.getOption("frequency")})}}v.prototype.eventType=i.EVT_PAGE_FOCUSED
v.prototype.options={frequency:5e3}
class b extends g{install(e){return this.bind(window,"blur",()=>{if("IFRAME"!==document.activeElement.tagName)return e()},{throttle:this.getOption("frequency")})}}b.prototype.eventType=i.EVT_PAGE_BLURRED
b.prototype.options={frequency:5e3}
const y=_()(window)
function k(e){const t=_()(e)
const n=y.scrollTop()
const i=n+y.height()
const s=t.offset().top
const a=s+t.height()
return n<s&&i>a}_.a.extend(_.a.expr[":"],{in_viewport:k})
var w=n("VTHg")
var E=n.n(w)
class z extends g{install(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window
let n=[]
return this.bind(t,"scroll",()=>{const t=this.identifyVisibleQuestions().filter(e=>-1===n.indexOf(e))
if(t.length>0){n=n.concat(t)
u.a.log("Student has just viewed the following questions: ".concat(t,". (Questions viewed up until now are: ").concat(n,")"))
return e(t)}},{throttle:this.getOption("frequency")})}identifyVisibleQuestions(){return _()(".question[id]:visible").filter(":in_viewport").toArray().map(E.a)}}z.prototype.eventType=i.EVT_QUESTION_VIEWED
z.prototype.options={frequency:2500}
class T extends g{install(e){_()(document.body).on("click.".concat(this.uid),this.getOption("buttonSelector"),t=>{const n=_()(t.target).closest(this.getOption("questionSelector"))
const i=n.hasClass(this.getOption("questionMarkedClass"))
const s=E()(n[0])
u.a.log("Question ".concat(s," ").concat(i?"is now flagged":"is no longer flagged","."))
return e({flagged:i,questionId:s})})}}T.prototype.eventType=i.EVT_QUESTION_FLAGGED
T.prototype.options={buttonSelector:".flag_question",questionSelector:".question",questionMarkedClass:"marked"}
class S extends g{install(e){const t=navigator,n=t.userAgent
u.a.log("I've been loaded by ".concat(n,"."))
if(-1===location.href.indexOf("question")&&location.href.indexOf("take")>0)return e({user_agent:n})}}S.prototype.eventType=i.EVT_SESSION_STARTED
S.prototype.options={}
const x=[v,b,z,T,S]
const D=new m
x.forEach(e=>D.registerTracker(e))
u.a.debug("QuizLogAuditing: will be using localStorage.")
d.setStorageAdapter(i.EVT_STORAGE_LOCAL_STORAGE)
D.options.deliveryUrl=ENV.QUIZ_SUBMISSION_EVENTS_URL
t["a"]=D},"86lW":function(e,t,n){"use strict"
n.r(t)
var i=n("VTBJ")
var s=n("FIFq")
var a=n.n(s)
var o=n("ouhR")
var r=n.n(o)
var l=n("3O+N")
var u=n.n(l)
var c=n("pQTu")
var d=n("m0r6")
Object(d["a"])(JSON.parse('{"de":{"buttons":{"choose_a_file":"Eine Datei auswählen","delete_file":"Datei %{name} löschen"}},"hu":{"buttons":{"choose_a_file":"Fájl kiválasztása","delete_file":"Ezen fájl törlése: %{name}"}}}'))
n("jQeR")
n("0sPK")
c["default"].scoped("quizzes.file_upload_question_state")
n("DfGn")
var h=u.a.default
var _=h.template,p=h.templates=h.templates||{}
var f="quizzes/fileUploadQuestionState"
p[f]=_((function(e,t,n,i,s){this.compilerInfo=[4,">= 1.0.0"]
n=this.merge(n,e.helpers)
s=s||{}
var a,o="",r="function",l=this.escapeExpression,u=n.helperMissing,c=this
function d(e,t){var i,s,a,o=""
o+="\n  "
if(s=n.display_name)i=s.call(e,{hash:{},data:t})
else{s=e&&e.display_name
i=typeof s===r?s.call(e,{hash:{},data:t}):s}o+=l(i)+'<a href="#" role=\'button\' class="pull-right icon-end delete-attachment" aria-label=\''+l((s=n.t||e&&e.t,a={hash:{name:e&&e.display_name,scope:"quizzes.file_upload_question_state"},data:t},s?s.call(e,"#buttons.delete_file","Delete file %{name}",a):u.call(e,"t","#buttons.delete_file","Delete file %{name}",a)))+"'></a>\n"
return o}function h(e,t){var i,s=""
s+="\n  "
i=n["if"].call(e,e&&e.isIE,{hash:{},inverse:c.program(6,p,t),fn:c.program(4,_,t),data:t});(i||0===i)&&(s+=i)
s+="\n"
return s}function _(e,t){return'\n    <input name=file class="file-upload" type=file />\n  '}function p(e,t){var i,s,a=""
a+='\n    <button class="btn file-upload-btn">\n      '+l((i=n.t||e&&e.t,s={hash:{scope:"quizzes.file_upload_question_state"},data:t},i?i.call(e,"#buttons.choose_a_file","Choose a File",s):u.call(e,"t","#buttons.choose_a_file","Choose a File",s)))+"\n    </button>\n  "
return a}a=n["if"].call(t,t&&t.display_name,{hash:{},inverse:c.program(3,h,s),fn:c.program(1,d,s),data:s});(a||0===a)&&(o+=a)
o+="\n"
return o}))
var m=p[f]
Object(d["a"])(JSON.parse('{"de":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Ihre Datei wurde hochgeladen.","files_removed":"%{display_name} wurde entfernt."}}}},"hu":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"A fájl feltöltése sikerült.","files_removed":"%{display_name} el lett távolítva."}}}}}'))
c["default"].scoped("quizzes.file_uploaded_or_removed")
var g=u.a.default
var v=g.template,b=g.templates=g.templates||{}
var y="quizzes/fileUploadedOrRemoved"
b[y]=v((function(e,t,n,i,s){this.compilerInfo=[4,">= 1.0.0"]
n=this.merge(n,e.helpers)
s=s||{}
var a,o="",r=n.helperMissing,l=this.escapeExpression,u=this
function c(e,t){var i,s,a=""
a+='\n\n  <div class="file-status file-uploaded">\n    <em>\n    '+l((i=n.t||e&&e.t,s={hash:{scope:"quizzes.file_uploaded_or_removed"},data:t},i?i.call(e,"quizzes.file_successfully_uploaded","Your file has been successfully uploaded.",s):r.call(e,"t","quizzes.file_successfully_uploaded","Your file has been successfully uploaded.",s)))+"\n    </em>\n  </div>\n"
return a}function d(e,t){var i,s,a=""
a+='\n  <div class="file-status file-removed">\n    <em>\n      '+l((i=n.t||e&&e.t,s={hash:{display_name:e&&e.display_name,scope:"quizzes.file_uploaded_or_removed"},data:t},i?i.call(e,"quizzes.files_removed","%{display_name} has been removed.",s):r.call(e,"t","quizzes.files_removed","%{display_name} has been removed.",s)))+"\n    </em>\n  </div>\n"
return a}a=n["if"].call(t,t&&t.fileUploaded,{hash:{},inverse:u.program(3,d,s),fn:u.program(1,c,s),data:s});(a||0===a)&&(o+=a)
o+="\n"
return o}))
var k=b[y]
n("Z+Ib")
n("vpJZ")
class w extends s["View"]{static initClass(){this.prototype.els={".file-upload":"$fileUpload",".file-upload-btn":"$fileDialogButton",".attachment-id":"$attachmentID",".file-upload-box":"$fileUploadBox"}
this.prototype.events={"change input[type=file]":"checkForFileChange","click .file-upload-btn":"openFileBrowser","click .delete-attachment":"deleteAttachment"}}checkForFileChange(e){let t
e.preventDefault()
e.stopPropagation()
if(t=this.$fileUpload.val()){this.removeFileStatusMessage()
this.model.set("file",this.$fileUpload[0])
const e=this.model.save(null,{success:this.processAttachment.bind(this)})
return this.$fileUploadBox.disableWhileLoading(e)}}openFileBrowser(e){e.preventDefault()
return this.$fileUpload.click()}render(){super.render(...arguments)
const e=!!r.a.browser.msie
this.$fileUploadBox.html(m(Object(i["a"])({},this.model.present(),{isIE:e})))
this.$fileUpload=this.$(".file-upload")
return this}removeFileStatusMessage(){return this.$fileUploadBox.siblings(".file-status").remove()}processAttachment(e){this.$attachmentID.val(this.model.id).trigger("change")
this.$fileUploadBox.addClass("file-upload-box-with-file")
this.render()
this.$fileUploadBox.parent().append(k(Object(i["a"])({},this.model.present(),{fileUploaded:true})))
return this.trigger("attachmentManipulationComplete")}deleteAttachment(e){e.preventDefault()
this.$attachmentID.val("").trigger("change")
this.$fileUploadBox.removeClass("file-upload-box-with-file")
this.$fileUpload.val(null)
const t=this.model.present()
this.model.clear()
this.removeFileStatusMessage()
this.render()
this.$fileUploadBox.parent().append(k(t))
return this.trigger("attachmentManipulationComplete")}}w.initClass()
var E=n("jFQ7")
Object(d["a"])(JSON.parse('{"de":{"buttons":{"cancel":"Abbrechen","login":"Anmelden"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"Wenn Sie auf „Weiter“ klicken, können Sie nicht mehr zu dieser Frage zurückkehren. Möchten Sie die Frage wirklich unbeantwortet lassen?","navigate_away":"Sie sind dabei, diese Seite zu verlassen. Möchten Sie trotzdem fortfahren?","unanswered_questions":{"one":"Sie haben 1 unbeantwortete Frage (siehe rechte Seitenleiste für Details). Trotzdem abgeben?","other":"Sie haben %{count} unbeantwortete Fragen (siehe rechte Seitenleiste für Details). Trotzdem abgeben?"},"unfinished_quiz":"Sie sind dabei, das nicht abgeschlossene Quiz zu verlassen. Möchten Sie trotzdem fortfahren?","unseen_questions":{"one":"Es ist noch 1 Frage vorhanden, die Sie noch nicht gesehen haben. Trotzdem absenden?","other":"Es sind noch %{count} Fragen vorhanden, die Sie noch nicht gesehen haben. Trotzdem abgeben?"}},"days_count":{"one":"1 Tag","other":"%{count} Tage"},"errors":{"connection_lost":"Die Verbindung mit %{host} ist abgebrochen. Bevor Sie fortfahren, vergewissern Sie sich, dass Ihre Internetverbindung korrekt funktioniert.","only_numerical_values":"nur numerische Werte sind zulässig"},"hide_time_link":"Ausblenden","hours_count":{"one":"1 Stunde","other":"%{count} Stunden"},"labels":{"time_elapsed":"Verstrichene Zeit"},"login_failed":"Anmeldung fehlgeschlagen","login_successful":"Anmeldung erfolgreich","minutes_count":{"one":"1 Minute","other":"%{count} Minuten"},"months_count":{"one":"1 Monat","other":"%{count} Monate"},"notices":{"due_date_five_minutes_left":"Es bleiben fünf Minuten, bevor dass Quiz als verspätet markiert wird.","due_date_one_minute_left":"Es bleibt eine Minute, bevor das Quiz als verspätet markiert wird.","due_date_thirty_minutes_left":"Es bleiben dreißig Minuten, bevor das Quiz als verspätet markiert wird.","submission_five_minutes_left":"Dieses Quiz wird in fünf Minuten abgegeben.","submission_one_minute_left":"Dieses Quiz wird in einer Minute abgegeben.","submission_thirty_minutes_left":"Dieses Quiz wird in dreißig Minuten abgegeben."},"question_answered":"Beantwortet","question_unanswered":"Haben noch nicht geantwortet","saved_at":"Quiz gespeichert um %{t}","saving":"Speichervorgang läuft ...","saving_not_needed":"Kein neues Datum zum Speichern. Letzte Überprüfung am %{t}","seconds_count":{"one":"1 Sekunde","other":"%{count} Sekunden"},"show_time_link":"Zeigen","titles":{"come_back_later":"Sie haben diese Frage für späteres Bearbeiten markiert.","times_up":"Die Zeit ist um!"},"years_count":{"one":"1 Jahr","other":"%{count} Jahre"}}},"saving_d55dd90e":"Wird gespeichert ...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"Ihr Zeitlimit für diesen Versuch wurde erweitert.","your_time_for_this_quiz_has_been_reduced_394652e9":"Ihre Zeit für dieses Quiz wurde reduziert."},"hu":{"buttons":{"cancel":"Mégse","login":"Belépés"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"Nem térhet vissza ehhez a kérdéshez, ha a következőre lép. Biztos benne, hogy üresen hagyja?","navigate_away":"Az oldal elhagyására készül. Biztos, hogy ezt akarja?","unanswered_questions":{"one":"Van még 1 megválaszolatlan kérdés (jobb oldalon látja a részleteket). Mégis beküldi?","other":"Van még %{count} megválaszolatlan kérdés (jobb oldalon látja a részleteket). Mégis beküldi?"},"unfinished_quiz":"Ön a kvíz elhagyására készül, anélkül, hogy beadná. Biztos benne?","unseen_questions":{"one":"Van még 1 kérdés, amit nem látott még. Mégis beküldi?","other":"Van még %{count} kérdés, amit nem látott még. Mégis beküldi?"}},"days_count":{"one":"1 nap","other":"%{count} nap"},"errors":{"connection_lost":"A kapcsolat a %{host} géppel megszakadt. Mielőtt továbblép, kérjük, ellenőrizze, hogy az internetkapcsolata rendben működik.","only_numerical_values":"csak számok fogadhatóak el"},"hide_time_link":"Elrejt","hours_count":{"one":"1 óra","other":"%{count} óra"},"labels":{"time_elapsed":"Eltelt idő"},"login_failed":"A bejelentkezés sikertelen.","login_successful":"Sikeres bejelentkezés.","minutes_count":{"one":"1 perc","other":"%{count} perc"},"months_count":{"one":"1 hónap","other":"%{count} hónap"},"notices":{"due_date_five_minutes_left":"Öt perc maradt, mielőtt a kvíz késedelmesként lesz megjelölve. ","due_date_one_minute_left":"Egy perc maradt, mielőtt a kvíz késedelmesként lesz megjelölve. ","due_date_thirty_minutes_left":"Harminc perc maradt, mielőtt a kvíz késedelmesként lesz megjelölve. ","submission_five_minutes_left":"Ez a kvíz öt perc múlva be lesz adva","submission_one_minute_left":"Ez a kvíz egy perc múlva be lesz adva","submission_thirty_minutes_left":"Ez a kvíz harminc perc múlva be lesz adva"},"question_answered":"Megválaszolt","question_unanswered":"Még nincs megválaszolva","saved_at":"Kvíz mentve ekkor: %{t}","saving":"Mentés...","saving_not_needed":"Nincs menthető új adat. Utolsó ellenőrzés ekkor: %{t}","seconds_count":{"one":"1 másodperc","other":"%{count} másodperc"},"show_time_link":"Megjelenítés","titles":{"come_back_later":"Ön ezt a kérdést úgy jelölte meg, hogy később visszatér rá","times_up":"Lejárt az idő! "},"years_count":{"one":"1 év","other":"%{count} év"}}},"saving_d55dd90e":"Mentés...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"Ön több időt kapott ehhez a próbálkozáshoz ","your_time_for_this_quiz_has_been_reduced_394652e9":"Az Ön ideje a kvíz kitöltésére csökkent."}}'))
var z=c["default"].scoped("quizzes.take_quiz")
var T=n("HbFp")
let S=false
let x=false
var D=function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0]
S=e
if(x)return
x=true
r()(window).bind({blur(e){S&&document.activeElement&&window===e.target&&r()(document.activeElement).filter(":input").change().triggerHandler("blur")},focus(e){S&&document.activeElement&&window===e.target&&r()(document.activeElement).filter(":input").triggerHandler("focus")}})}
var q=n("GLiE")
var O=n.n(q)
Object(d["a"])(JSON.parse('{"de":{"quizzes":{"ldb_login_popup":{"email":"E-Mail","log_in":"Anmeldung","logged_out_of_canvas":"*Sie wurden bei Canvas abgemeldet.* Melden Sie sich an, um fortzufahren.","password":"Kennwort","titles":{"log_in":"Bitte anmelden"}}}},"hu":{"quizzes":{"ldb_login_popup":{"email":"E-mail","log_in":"Bejelentkezés","password":"Jelszó","titles":{"log_in":"Kérjük, jelentkezzen be"}}}}}'))
c["default"].scoped("quizzes.ldb_login_popup")
var A=n("EvX+")
var C=u.a.default
var N=C.template,j=C.templates=C.templates||{}
var M="quizzes/LDBLoginPopup"
j[M]=N((function(e,t,n,i,s){this.compilerInfo=[4,">= 1.0.0"]
n=this.merge(n,e.helpers)
s=s||{}
var a,o,r="",l=n.helperMissing,u=this.escapeExpression
r+='<form id="ldb_deauthorized_dialog" class="hide">\n  <div id="unauthorized_message" class="ui-state-error">\n    <h2 class="">'+u((a=n.t||t&&t.t,o={hash:{scope:"quizzes.ldb_login_popup"},data:s},a?a.call(t,"titles.log_in","Please Log In",o):l.call(t,"t","titles.log_in","Please Log In",o)))+"</h2>\n    <p>"+u((a=n.t||t&&t.t,o={hash:{w0:"<strong>$1</strong>",scope:"quizzes.ldb_login_popup"},data:s},a?a.call(t,"logged_out_of_canvas","*You have been logged out of canvas.* To continue please log in.",o):l.call(t,"t","logged_out_of_canvas","*You have been logged out of canvas.* To continue please log in.",o)))+'\n    </p>\n  </div>\n\n  <h1>Canvas</h1>\n\n  <div>\n    <span class="field">\n      <label for="pseudonym_session_unique_id">'+u((a=n.t||t&&t.t,o={hash:{scope:"quizzes.ldb_login_popup"},data:s},a?a.call(t,"email","Email",o):l.call(t,"t","email","Email",o)))+'</label>\n      <input id="pseudonym_session_unique_id" type="text" name="pseudonym_session[unique_id]" class="text" placeholder="'+u((a=n.t||t&&t.t,o={hash:{scope:"quizzes.ldb_login_popup"},data:s},a?a.call(t,"email","Email",o):l.call(t,"t","email","Email",o)))+'" autocomplete="off" />\n    </span>\n\n    <span class="field">\n      <label for="pseudonym_session_password">'+u((a=n.t||t&&t.t,o={hash:{scope:"quizzes.ldb_login_popup"},data:s},a?a.call(t,"password","Password",o):l.call(t,"t","password","Password",o)))+'</label>\n      <input id="pseudonym_session_password" type="password" name="pseudonym_session[password]" class="text" placeholder="'+u((a=n.t||t&&t.t,o={hash:{scope:"quizzes.ldb_login_popup"},data:s},a?a.call(t,"password","Password",o):l.call(t,"t","password","Password",o)))+'" autocomplete="off" />\n    </span>\n  </div>\n\n  <div class="dialog-actions">\n    <span class="btn btn-primary">'+u((a=n.t||t&&t.t,o={hash:{scope:"quizzes.ldb_login_popup"},data:s},a?a.call(t,"log_in","Log In",o):l.call(t,"t","log_in","Log In",o)))+"</span>\n  </div>\n</form>"
return r}))
A["a"].loadStylesheet("jst/quizzes/LDBLoginPopup",{new_styles_normal_contrast:{combinedChecksum:"874c7812ef"},new_styles_high_contrast:{combinedChecksum:"874c7812ef"},responsive_layout_normal_contrast:{combinedChecksum:"874c7812ef"},responsive_layout_high_contrast:{combinedChecksum:"874c7812ef"},new_styles_normal_contrast_rtl:{combinedChecksum:"e3eab73198"},new_styles_high_contrast_rtl:{combinedChecksum:"e3eab73198"},responsive_layout_normal_contrast_rtl:{combinedChecksum:"e3eab73198"},responsive_layout_high_contrast_rtl:{combinedChecksum:"e3eab73198"}}[A["a"].getCssVariant()])
var I=j[M]
var V=n("5Ky4")
n("tVj+")
function L(e){if(!e)return
e.preventDefault&&e.preventDefault()
e.stopPropagation&&e.stopPropagation()
return false}class B extends a.a.View{static initClass(){this.prototype.url="/login/canvas"
this.prototype.template=I
this.prototype.options={sticky:true,window:{location:false,menubar:false,status:false,toolbar:false,fullscreen:false,width:480,height:480}}}initialize(e){let t
let n
const i=r()(this)
let s
O.a.extend(this.options,e)
const a=O.a.map(this.options.window,(e,t)=>[t,O.a.isBoolean(e)?e?"yes":"no":e].join("=")).join(",")
this.on=i.on.bind(i)
this.one=i.one.bind(i)
this.off=i.off.bind(i)
function o(){if(t)try{t.document}catch(e){if(/Permission/.test(e.message))return true}return false}function l(){d()
t=null
i.triggerHandler("close")
return null}function u(e){if(o()){l()
return true}try{t.document.focus()}catch(e){r()(t.document).focus()}return L(e)}const c=()=>s.appendTo(document.body)
var d=()=>s.detach()
const h=e=>{const n=L(e)
const s=r()(e.target).closest("form").toJSON()
const a=this.authenticate(s)
a.then(e=>{i.triggerHandler("login_success")
t.close()
l()
return e})
a.fail(e=>{i.triggerHandler("login_failure",e)
return e})
return n}
function _(){const e=r()(t.document)
const s=r()(t.document.head)
O()(n).each(e=>{s.append('<link rel="stylesheet" href="'.concat(Object(V["a"])(e),'" />'))})
e.find(".hide").removeClass("hide")
e.find(".btn-primary").on("click",h)
i.triggerHandler("open",t.document)}this.exec=()=>{o()&&l()
if(t){u()
return t}c()
t=window.open("about:blank","_blank",a,false)
t.document.write(this.template({}))
t.onbeforeunload=l
t.onload=_
t.document.close()
return t}
n=O()(document.styleSheets).chain().map(e=>e.href).compact().value()
s=r()("<div />").on("click",u).css({"z-index":1e3,position:"fixed",left:0,right:0,top:0,bottom:0})
if(this.options.sticky){let e
this.on("login_failure.sticky",()=>e=true)
this.on("login_success.sticky",()=>e=false)
return this.on("close.sticky",(function(){e&&setTimeout(this.exec,1)}))}}authenticate(e){return r.a.ajax({type:"POST",url:this.url,data:JSON.stringify(e),global:false,headers:{"Content-Type":"application/json",Accept:"application/json"}})}}B.initClass()
var R=n("eTVl")
var U=n.n(R)
var F=n("1xB4")
var P=n("gl9/")
var Q=n("/iD7")
var G=n("21i1")
n("jYyc")
n("UlQx")
n("YGE8")
n("MWZS")
n("s/PJ")
n("vwFW")
G["a"].preloadRemoteModule()
let J=null
let W=null
let $
var Y=function(){let e=0,t=r()(".end_at"),n=t.text()&&new Date(t.text()),i=r()(".due_at"),s=i.text()&&new Date(i.text()),a=r()(".started_at"),o=r()(".countdown_seconds"),l=r()(".time_running,.time_remaining"),u=r()("#last_saved_indicator")
const c=function(){if(l.length>0)return l
return l=r()(".time_running,.time_remaining")}
return{countDown:null,fiveMinuteDeadline:false,oneMinuteDeadline:false,submitting:false,dialogged:false,inBackground:false,contentBoxCounter:0,lastSubmissionUpdate:new Date,currentlyBackingUp:false,endAt:t,endAtParsed:n,startedAt:a,hasTimeLimit:!!ENV.QUIZ.time_limit,timeLeft:1e3*parseInt(r()(".time_left").text()),timeToDueDate:s-new Date,oneAtATime:r()("#submit_quiz_form").hasClass("one_question_at_a_time"),cantGoBack:r()("#submit_quiz_form").hasClass("cant_go_back"),finalSubmitButtonClicked:false,clockInterval:500,backupsDisabled:document.location.search.search(/backup=false/)>-1,clearAccessCode:true,updateSubmission(e,n){if(Y.backupsDisabled)return
if(Y.submitting&&!e)return
const i=new Date
if(!n&&i-Y.lastSubmissionUpdate<1e3)return
if(Y.currentlyBackingUp)return
Y.currentlyBackingUp=true
Y.lastSubmissionUpdate=new Date
const s=r()("#submit_quiz_form").getFormData()
r()(".question_holder .question").each((function(){const e=r()(this).hasClass("marked")?"1":""
s[r()(this).attr("id")+"_marked"]=e}))
u.text(z.t("saving","Saving..."))
const a=r()(".backup_quiz_submission_url").attr("href");(function(n){const i=O.a.clone(n)
if(!Y.inBackground&&e&&O.a.isEqual(n,W)){u.text(z.t("saving_not_needed","No new data to save. Last checked at %{t}",{t:r.a.friendlyDatetime(new Date)}))
Y.currentlyBackingUp=false
setTimeout(()=>{Y.updateSubmission(true,true)},3e4)
return}r.a.ajaxJSON(a,"PUT",n,n=>{W=i
u.text(z.t("saved_at","Quiz saved at %{t}",{t:r.a.friendlyDatetime(new Date)}))
Y.currentlyBackingUp=false
Y.inBackground=false
e&&setTimeout(()=>{Y.updateSubmission(true,true)},3e4)
if(n&&n.end_at){const e=Date.parse(n.end_at),i=Date.parse(t.text()),s=e.getTime(),a=i.getTime()
Y.timeLeft=1e3*n.time_left
if(s!==a){s>a?r.a.flashMessage(z.t("You have been given extra time on this attempt")):r.a.flashMessage(z.t("Your time for this quiz has been reduced."))
Y.endAt.text(n.end_at)
Y.endAtParsed=e}}},(t,n)=>{Y.currentlyBackingUp=false
if(401===n.status||"unauthorized"==t.status){$();-1===r.a.inArray(n,r.a.ajaxJSON.ignoredXHRs)&&r.a.ajaxJSON.ignoredXHRs.push(n)}else{const e=window.ENV.current_user_id||"none"
r.a.ajaxJSON(location.protocol+"//"+location.host+"/simple_response.json?user_id="+e+"&rnd="+Math.round(9999999*Math.random()),"GET",{},()=>{},()=>{r.a.flashError(z.t("errors.connection_lost","Connection to %{host} was lost.  Please make sure you're connected to the Internet before continuing.",{host:location.host}))})}e&&setTimeout(()=>{Y.updateSubmission(true)},3e4)},{timeout:15e3})})(s)},updateTime(){let t=Y.timeLeft-=Y.clockInterval
let n=null
Y.timeToDueDate>0&&(n=Y.timeToDueDate-=Y.clockInterval)
const i=new Date
const s=Y.endAt.text()
e=(e+1)%120
if(0==e&&!s&&!Y.twelveHourDeadline){Y.endAtParsed}t=Y.floorTimeLeft(t)
if(Y.countDown){const e=new Date(Y.countDown-i.getTime()).getUTCSeconds()
i.getTime()<Y.countDown&&o.text(e)
if(e<=0&&!Y.submitting){Y.submitting=true
Y.submitQuiz()}}if(Y.isTimeUp(t)&&!ENV.IS_PREVIEW)Y.showTimeUpDialog(i)
else if(null!=n&&t>n){Y.showDueDateWarnings(n)
Y.showWarnings(t)}else null==t?Y.showDueDateWarnings(n):Y.showWarnings(t)
Y.updateTimeDisplay(t)},floorTimeLeft(e){e<1e3&&(e=0)
return e},isTimeUp:e=>e<1e3&&!Y.dialogged,showDueDateWarnings(e){if(e>3e4&&e<6e4&&!Y.oneMinuteDueDateDeadline){Y.oneMinuteDueDateDeadline=true
r.a.flashMessage(z.t("notices.due_date_one_minute_left","One Minute Left Before Quiz Will Be Marked Late"))}else if(e>25e4&&e<3e5&&!Y.fiveMinuteDueDateDeadline){Y.fiveMinuteDueDateDeadline=true
r.a.flashMessage(z.t("notices.due_date_five_minutes_left","Five Minutes Left Before Quiz Will Be Marked Late"))}else if(e>177e4&&e<18e5&&!Y.thirtyMinuteDueDateDeadline){Y.thirtyMinuteDueDateDeadline=true
r.a.flashMessage(z.t("notices.due_date_thirty_minutes_left","Thirty Minutes Left Before Quiz Will Be Marked Late"))}},showWarnings(e){if(e>3e4&&e<6e4&&!Y.oneMinuteDeadline){Y.oneMinuteDeadline=true
r.a.flashWarning(z.t("notices.submission_one_minute_left","This Quiz Will Be Submitted In One Minute"),5e3)}else if(e>25e4&&e<3e5&&!Y.fiveMinuteDeadline){Y.fiveMinuteDeadline=true
r.a.flashWarning(z.t("notices.submission_five_minutes_left","This Quiz Will Be Submitted In Five Minutes"),5e3)}else if(e>177e4&&e<18e5&&!Y.thirtyMinuteDeadline){Y.thirtyMinuteDeadline=true
r.a.flashWarning(z.t("notices.submission_thirty_minutes_left","This Quiz Will Be Submitted In Thirty Minutes"),5e3)}},showTimeUpDialog(e){Y.dialogged=true
Y.countDown=new Date(e.getTime()+1e4)
r()("#times_up_dialog").show().dialog({title:z.t("titles.times_up","Time's Up!"),width:"auto",height:"auto",modal:true,overlay:{backgroundColor:"#000",opacity:.7},close(){if(!Y.submitting){Y.submitting=true
Y.submitQuiz()}}})},getTimeElapsed(){r()(".time_header").text(z.beforeLabel(z.t("labels.time_elapsed","Time Elapsed")))
const e=(new Date).getTime()
const t=Date.parse(Y.startedAt.text()).getTime()
return e-t},updateTimeDisplay(e){Y.hasTimeLimit?Y.updateTimeString(e):Y.updateTimeString(Y.getTimeElapsed())},updateTimeString(e){const t=new Date(Math.abs(e))
const n=t.getUTCFullYear()-1970
const i=t.getUTCMonth()
const s=t.getUTCDate()-1
const a=t.getUTCHours()
const o=t.getUTCMinutes()
const r=t.getUTCSeconds()
const l=[]
n&&l.push(z.t("years_count","Year",{count:n}))
i&&l.push(z.t("months_count","Month",{count:i}))
s&&l.push(z.t("days_count","Day",{count:s}))
a&&l.push(z.t("hours_count","Hour",{count:a}))
l.push(z.t("minutes_count","Minute",{count:o}))
l.push(z.t("seconds_count","Second",{count:r}))
c().text(l.join(", "))},updateFinalSubmitButtonState(){const e=0==r()("#question_list li:not(.answered, .text_only)").length
const t=r()("#submit_quiz_form").hasClass("last_page")
const n=r()("div.question.answered").length>0
const i=Y.oneAtATime
const s=i&&t&&n||e
Y.toggleActiveButtonState("#submit_quiz_button",s)},updateQuestionIndicators(e,t){const n="#list_"+t
const i="#"+t
const s=n+", "+i
const a=r()(n+" i.placeholder")
if(e){r()(s).addClass("answered")
a.addClass("icon-check").removeClass("icon-question")
a.find(".icon-text").text(z.t("question_answered","Answered"))}else{r()(s).removeClass("answered")
a.addClass("icon-question").removeClass("icon-check")
a.find(".icon-text").text(z.t("question_unanswered","Haven't Answered Yet"))}},updateNextButtonState(e){const t=r()("#"+e)
Y.toggleActiveButtonState("button.next-question",t.hasClass("answered"))},toggleActiveButtonState(e,t){const n=t?"btn-primary":"btn-secondary"
const i=t?"btn-secondary":"btn-primary"
r()(e).addClass(n).removeClass(i)},submitQuiz(){const e=r()("#submit_quiz_button").data("action")
r()("#submit_quiz_form").attr("action",e).submit()}}}()
r()(window).focus(e=>{Y.updateSubmission()})
r()(window).blur(e=>{Y.inBackground=true})
r()(document).mousedown(e=>{J=r()(e.target).parents(".answer")[0]}).keydown(()=>{J=null})
r()("a[href^='#']").not("a[href='#']").click((function(){r()(r()(this).attr("href")).attr("tabindex",-1).focus()}))
r()((function(){D()
if(0==r()("#preview_mode_link").length){let e=false
window.addEventListener("beforeunload",t=>{if(!Y.navigatingToRelogin&&!Y.submitting&&!Y.alreadyAcceptedNavigatingAway&&!e){Y.clearAccessCode=true
setTimeout(()=>{e=false},0)
e=true
t.returnValue=z.t("confirms.unfinished_quiz","You're about to leave the quiz unfinished.  Continue anyway?")
return t.returnValue}})
window.addEventListener("unload",e=>{const t=r()("#submit_quiz_form").getFormData()
const n=r()(".backup_quiz_submission_url").attr("href")
t.leaving=!!Y.clearAccessCode
r.a.flashMessage(z.t("Saving..."))
r.a.ajax({url:n,data:t,type:"POST",dataType:"json",async:false})
Y.currentlyBackingUp=false},false)
r()(document).delegate("a","click",(function(e){if(r()(this).closest(".ui-dialog,.mceToolbar,.ui-selectmenu").length>0)return
if(r()(this).hasClass("no-warning")){Y.alreadyAcceptedNavigatingAway=true
return}if(!e.isDefaultPrevented()){const t=r()(this).attr("href")||""
let n=location.href
n.indexOf("#")&&(n=n.substring(0,n.indexOf("#")))
if(0==t.indexOf("#")||0==t.indexOf(n+"#"))return
const i=confirm(z.t("confirms.navigate_away","You're about to navigate away from this page.  Continue anyway?"))
i?Y.alreadyAcceptedNavigatingAway=true:e.preventDefault()}}))}const e=r()("#questions")
r()("#question_list").delegate(".jump_to_question_link","click",(function(e){e.preventDefault()
const t=r()(r()(this).attr("href"))
const n=ENV.MOBILE_UI?"#content":"html,body"
r()(n).scrollTo(t.parent())
t.find(":input:first").focus().select()})).find(".list_question").bind({mouseenter(e){const t=r()(this),n=t.data()
if(!Y.oneAtATime){n.relatedQuestion||(n.relatedQuestion=r()("#"+t.attr("id").substring(5)))
n.relatedQuestion.addClass("related")}},mouseleave(e){if(!Y.oneAtATime){const e=r()(this).data("relatedQuestion")
e&&e.removeClass("related")}},click(e){Y.clearAccessCode=false}})
e.find(".group_top,.answer_select").bind({mouseenter(e){r()(this).addClass("hover")},mouseleave(e){r()(this).removeClass("hover")}})
r()(".file-upload-question-holder").each((e,t)=>{const n=r()(t)
const i=parseInt(n.find("input.attachment-id").val(),10)
const s=new E["a"](ENV.ATTACHMENTS[i],{preflightUrl:ENV.UPLOAD_URL})
const a=new w({el:t,model:s})
i&&0!==i&&n.find(".file-upload-box").addClass("file-upload-box-with-file")
a.on("attachmentManipulationComplete",()=>{Y.updateSubmission()})
a.render()})
e.delegate(":checkbox,:radio","change",(function(e){const t=r()(this).parents(".answer")
J==t[0]&&Y.updateSubmission()})).delegate("label.upload-label","mouseup",e=>{Y.updateSubmission()}).delegate(":text,textarea,select","change",(function(e,t){const n=r()(this)
if(n.hasClass("numerical_question_input")){var i=T["a"].parse(n.val())
n.val(isNaN(i)?"":z.n(i.toFixed(4),{strip_insignificant_zeros:true}))}if(n.hasClass("precision_question_input")){i=T["a"].parse(n.val())
n.val(isNaN(i)?"":z.n(i.toPrecision(16),{strip_insignificant_zeros:true}))}false!==t&&Y.updateSubmission()})).delegate(".numerical_question_input",{keyup(e){const t=r()(this)
const n=t.val()+""
const i=t.data("associated_error_box")
n.match(/^$|^-$/)||T["a"].validate(n)?i&&t.triggerHandler("click"):i||t.errorBox(z.t("errors.only_numerical_values","only numerical values are accepted"))}}).delegate(".flag_question","click",(function(e){e.preventDefault()
const t=r()(this).parents(".question")
t.toggleClass("marked")
r()(this).attr("aria-checked",t.hasClass("marked"))
r()("#list_"+t.attr("id")).toggleClass("marked")
let n
n=r()("#list_"+t.attr("id")).hasClass("marked")?z.t("titles.come_back_later","You marked this question to come back to later"):""
r()("#list_"+t.attr("id")).find(".marked-status").text(n)
Y.updateSubmission()})).delegate(".question_input","change",(function(e,t,n){let i=r()(this),s=this.tagName.toUpperCase(),a=i.parents(".question").attr("id"),o=""
if("A"==s)return
if(n){if(n[a])return
n[a]=true}if("TEXTAREA"==s){o=G["a"].callOnRCE(i,"get_code")
const e=i
i.siblings(".rce_links").find(".toggle_question_content_views_link").click((function(t){t.preventDefault()
G["a"].callOnRCE(e,"toggle")
r()(this).siblings(".toggle_question_content_views_link").andSelf().toggle()}))}else if("text"==i.attr("type")||"hidden"==i.attr("type"))o=i.val()
else if("SELECT"==s){const e=i.parents(".question").find("select.question_input")
o=!e.filter((function(){return!r()(this).val()})).length}else i.parents(".question").find(".question_input").each((function(){(r()(this).attr("checked")||r()(this).attr("selected"))&&(o=true)}))
Y.updateQuestionIndicators(o,a)
Y.updateFinalSubmitButtonState()
Y.updateNextButtonState(a)}))
e.find(".question_input").trigger("change",[false,{}])
r()(".hide_time_link").click((function(e){e.preventDefault()
if("hidden"!=r()(".time_running").css("visibility")){r()(".time_running").css("visibility","hidden")
r()(this).text(z.t("show_time_link","Show"))}else{r()(".time_running").css("visibility","visible")
r()(this).text(z.t("hide_time_link","Hide"))}}))
setTimeout((function(){r()("#question_list .list_question").each((function(){const e=r()(this)
"Spacer"==e.find(".jump_to_question_link").text()&&e.remove()}))}),1e3)
r()("#submit_quiz_form input[type=text]").keypress(e=>{if(13==e.keyCode)return false})
r()(".quiz_submit").click(e=>{Y.finalSubmitButtonClicked=true})
r()("#submit_quiz_form").submit((function(e){r()(".question_holder textarea.question_input").each((function(){r()(this).change()}))
let t
let n
Y.cantGoBack&&(r()(".question").hasClass("answered")||(n=z.t("confirms.cant_go_back_blank","You can't come back to this question once you hit next. Are you sure you want to leave it blank?")))
if(Y.finalSubmitButtonClicked){Y.finalSubmitButtonClicked=false
if(Y.cantGoBack){const e=r()("#question_list .list_question:not(.seen)").length
e>0&&(n=z.t("confirms.unseen_questions",{one:"There is still 1 question you haven't seen yet.  Submit anyway?",other:"There are still %{count} questions you haven't seen yet.  Submit anyway?"},{count:e}))}else{t=r()("#question_list .list_question:not(.answered):not(.text_only)").length
t>0&&(n=z.t("confirms.unanswered_questions",{one:"You have 1 unanswered question (see the right sidebar for details).  Submit anyway?",other:"You have %{count} unanswered questions (see the right sidebar for details).  Submit anyway?"},{count:t}))}}if(void 0!=n&&!Y.submitting){const t=confirm(n)
if(!t){e.preventDefault()
e.stopPropagation()
return false}}Y.submitting=true}))
r()(".submit_quiz_button").click(e=>{e.preventDefault()
r()("#times_up_dialog").dialog("close")})
setTimeout((function(){r()(".question_holder textarea.question_input").each((function(){r()(this).attr("id","question_input_"+Y.contentBoxCounter++)
G["a"].loadNewEditor(r()(this),{manageParent:true})}))}),2e3)
if(U.a){U.a.addEventListener("message",e=>{"stopwatchTick"===e.data&&Y.updateTime()})
U.a.postMessage({code:"startStopwatch",frequency:Y.clockInterval})}else setInterval(Y.updateTime,Y.clockInterval)
setTimeout(()=>{Y.updateSubmission(true)},15e3)
const t=r()("#submit_quiz_form button[type=submit]")
t.click((function(e){Y.clearAccessCode=false
const t=r()(this).data("action")
void 0!=t&&r()("#submit_quiz_form").attr("action",t)}))
t.removeAttr("disabled")}))
$=function(){r()("#deauthorized_dialog").dialog({modal:true,buttons:[{text:z.t("#buttons.cancel","Cancel"),class:"dialog_closer",click(){r()(this).dialog("close")}},{text:z.t("#buttons.login","Login"),class:"btn-primary relogin_button button_type_submit",click(){Y.navigatingToRelogin=true
r()("#deauthorized_dialog").submit()}}]})}
if(ENV.LOCKDOWN_BROWSER){let e
e=new B
e.on("login_success.take_quiz",()=>{r.a.flashMessage(z.t("login_successful","Login successful."))}).on("login_failure.take_quiz",()=>{r.a.flashError(z.t("login_failed","Login failed."))})
$=e.exec.bind(e)}r()(()=>{const e=84
const t=r()(".time_running,.time_remaining")
const n=r()("<div />",{class:"screenreader-only","aria-role":"note","aria-live":"assertive","aria-atomic":"true","aria-relevant":"additions"}).appendTo(document.body)
r()(document).on("keydown.timer_quickjump",(function(i){if(i.altKey&&(i.shiftKey||i.ctrlKey)&&i.which===e){i.preventDefault()
n.text(t.text())}}))
if(ENV.QUIZ_SUBMISSION_EVENTS_URL){F["a"].start()
Object(P["a"])(false)}})
r()(document).ready(()=>{r()(".loaded").show()
r()(".loading").hide()})
ENV.use_rce_enhancements||r()(".essay_question .answers .rce_links").append((new Q["a"]).render().el)},BYL3:function(e,t,n){"use strict"
var i=n("ouhR")
var s=n.n(i)
var a=n("xe+K")
const o=/^(?:select|textarea)/i
const r=/\r?\n/g
const l=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week|file)$/i
function u(){if(this.elements)return s.a.makeArray(this.elements)
{const e=s()(this).find(":input")
return e.length?e:this}}function c(){return this.name&&!this.disabled&&(this.checked||o.test(this.nodeName)||l.test(this.type))}function d(e,t){"string"===typeof t&&(t=t.replace(r,"\r\n"))
return{name:e,value:t}}function h(){const e=s()(this)
const t=(()=>{if("file"!==this.type)return e.hasClass("datetime_field_enabled")?""===e.val()?null:e.data("date")||null:e.data("rich_text")?Object(a["d"])(e,"get_code",false):e.val()
if(e.val())return this})()
return s.a.isArray(t)?t.map(e=>d(this.name,e)):d(this.name,t)}s.a.fn.serializeForm=function(){return this.map(u).filter(c).map(h).get()}},"EvX+":function(e,t,n){"use strict"
var i=n("HIhM")
const s={}
const a={getCssVariant(){const e=window.ENV.use_responsive_layout?"responsive_layout":"new_styles"
const t=window.ENV.use_high_contrast?"high_contrast":"normal_contrast"
const n=Object(i["c"])()?"_rtl":""
return"".concat(e,"_").concat(t).concat(n)},urlFor(e,t){let n=t.combinedChecksum,i=t.includesNoVariables
const s=i?"no_variables":a.getCssVariant()
return[window.ENV.ASSET_HOST||"","dist","brandable_css",s,"".concat(e,"-").concat(n,".css")].join("/")},loadStylesheet(e,t){if(e in s)return
const n=document.createElement("link")
n.rel="stylesheet"
n.href=a.urlFor(e,t)
n.setAttribute("data-loaded-by-brandableCss",true)
document.head.appendChild(n)
window.canvasCssVariablesPolyfill&&window.canvasCssVariablesPolyfill(n)}}
t["a"]=a},HbFp:function(e,t,n){"use strict"
var i=n("qJBq")
var s=n.n(i)
var a=n("pQTu")
const o={_parseNumber:s.a,parse(e){if(null==e)return NaN
if("number"===typeof e)return e
let t=o._parseNumber(e.toString(),{thousands:a["default"].lookup("number.format.delimiter"),decimal:a["default"].lookup("number.format.separator")})
isNaN(t)&&(t=o._parseNumber(e))
e.toString().match(/e/)&&isNaN(t)&&(t=parseFloat(e))
return t},validate:e=>!isNaN(o.parse(e))}
t["a"]=o},VTHg:function(e,t){e.exports=e=>e.id.replace(/^question_/,"")},dfg0:function(e,t,n){"use strict"
var i=n("FIFq")
var s=n.n(i)
var a=n("GLiE")
var o=n.n(a)
var r=n("Cf7h")
var l=function(e,t){for(var n in t)u.call(t,n)&&(e[n]=t[n])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},u={}.hasOwnProperty
t["a"]=function(e){l(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.displayName=function(){return this.get("display_name")||this.get("name")}
t.prototype.destinationIsSameContext=function(e){var t,n,i,s,a,o,l,u
l=(t=this.get("context_asset_string"))?Object(r["a"])(t,false):[null!=(s=this.collection.parentFolder)?s.get("context_type"):void 0,null!=(a=this.collection.parentFolder)&&null!=(o=a.get("context_id"))?o.toString():void 0],i=l[0],n=l[1]
return i&&n&&i.toLowerCase()===e.get("context_type").toLowerCase()&&n===(null!=(u=e.get("context_id"))?u.toString():void 0)}
t.prototype.moveTo=function(e,t){null==t&&(t={})
return this.destinationIsSameContext(e)?this.moveToFolder(e,t):this.copyToContext(e,t)}
t.prototype.moveToFolder=function(e,t){var n
null==t&&(t={})
n=this.setAttributes({parent_folder_id:e.id},t)
$.extend(n,{parent_folder_id:e.id})
return this.save({},{attrs:n}).then((i=this,function(){i.collection.remove(i)
return i.updateCollection(i,e,t)}))
var i}
t.prototype.copyToContext=function(e,t){var n,i,s,a,r,l
null==t&&(t={})
n=this.setAttributes($.extend({},this.attributes),t)
r=this.isFile?"file":"folder"
n["source_"+r+"_id"]=n.id
delete n.id
i=new this.constructor(o.a.omit(n,"id","parent_folder_id","parent_folder_path"))
s=this.updateCollection(i,e,t)
i.url=s.url
this.set("url",s.url)
a="copy_"+r
l="/api/v1/folders/"+e.attributes.id+"/"+a
return i.save(n,{url:l})}
t.prototype.setAttributes=function(e,t){null==e&&(e={})
null==t&&(t={})
"overwrite"===t.dup?$.extend(e,{on_duplicate:"overwrite"}):"rename"===t.dup&&(t.name?$.extend(e,{display_name:t.name,name:t.name,on_duplicate:"rename"}):$.extend(e,{on_duplicate:"rename"}))
return e}
t.prototype.updateCollection=function(e,t,n){var i,s
s=this.isFile?"files":"folders"
i=t[s]
"overwrite"===n.dup&&i.remove(i.where({display_name:e.get("display_name")}))
i.add(e,{merge:true})
return i}
return t}(s.a.Model)},eTVl:function(e,t,n){var i,s
i=[],s=function(){if(!window.Worker)return
function e(){let e
self.addEventListener("message",(function(t){const n=t.data||{}
switch(n.code){case"startStopwatch":e=setInterval((function(){self.postMessage("stopwatchTick")}),n.frequency||1e3)
break
case"stop":clearInterval(e)}}),false)}let t=e.toString()
t=t.substring(t.indexOf("{")+1,t.lastIndexOf("}"))
const n=new Blob([t],{type:"application/javascript"})
const i=new Worker(URL.createObjectURL(n))
return i}.apply(t,i),void 0!==s&&(e.exports=s)},"gl9/":function(e,t,n){"use strict"
var i=n("1xB4")
t["a"]=function(e){e&&i["a"].unregisterAllTrackers()
i["a"].isRunning()||i["a"].start()
if(i["a"].isDirty())return i["a"].deliver()}},jFQ7:function(e,t,n){"use strict"
var i=n("ouhR")
var s=n.n(i)
var a=n("GLiE")
var o=n.n(a)
var r=n("dfg0")
var l=n("60Hp")
n("jYyc")
var u=function(e,t){return function(){return e.apply(t,arguments)}},c=function(e,t){for(var n in t)d.call(t,n)&&(e[n]=t[n])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},d={}.hasOwnProperty,h=[].slice
t["a"]=function(e){c(t,e)
function t(){this.externalToolEnabled=u(this.externalToolEnabled,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.url=function(){return this.isNew()?t.__super__.url.apply(this,arguments):"/api/v1/files/"+this.id}
t.prototype.initialize=function(e,n){null==n&&(n={})
this.preflightUrl=n.preflightUrl
return t.__super__.initialize.apply(this,arguments)}
t.prototype.save=function(e,n){var i,a,o,r,u,c
null==e&&(e={})
null==n&&(n={})
if(!this.get("file"))return t.__super__.save.apply(this,arguments)
this.set(e)
i=s.a.Deferred()
u=(d=this,function(e){d.set(e)
i.resolve(e)
return"function"===typeof n.success?n.success(e):void 0})
var d
r=function(e){i.reject(e)
return"function"===typeof n.error?n.error(e):void 0}
a=this.get("file")
o=(a.value||a.name).split(/[\/\\]/).pop()
a=a.files[0]
c={name:o,on_duplicate:"rename"}
Object(l["uploadFile"])(this.preflightUrl,c,a).then(u)["catch"](r)
return i}
t.prototype.isFile=true
t.prototype.toJSON=function(){var e
if(!this.get("file"))return t.__super__.toJSON.apply(this,arguments)
return o.a.pick.apply(o.a,[this.attributes,"file"].concat(h.call(o.a.keys(null!=(e=this.uploadParams)?e:{}))))}
t.prototype.present=function(){return o.a.clone(this.attributes)}
t.prototype.externalToolEnabled=function(e){var t
if(e.accept_media_types&&e.accept_media_types.length>0){t=this.get("content-type")
return o.a.find(e.accept_media_types.split(","),(function(e){var n
n=new RegExp("^"+e.replace("*",".*")+"$")
return t.match(n)}))}return true}
return t}(r["a"])},ppAs:function(e,t,n){"use strict"
var i=n("ouhR")
var s=n.n(i)
var a=n("GLiE")
var o=n.n(a)
var r=n("5Ky4")
var l=n("pQTu")
var u=n("m0r6")
Object(u["a"])(JSON.parse('{"de":{"user_content_aaf0fb5a":"Benutzer-Content"},"hu":{"user_content_aaf0fb5a":"Felhasználói tartalom"}}'))
n("jQeR")
n("0sPK")
var c=l["default"].scoped("user_content")
const d={translateMathmlForScreenreaders(e){const t=s()("<div/>").html(e.attr("x-canvaslms-safe-mathml")).html()
const n=s()('<span class="hidden-readable"></span>')
n.html(t)
return n},toMediaCommentLink(e){const t=s()("<a\n        id='media_comment_".concat(Object(r["a"])(s()(e).data("media_comment_id")),"'\n        data-media_comment_type='").concat(Object(r["a"])(s()(e).data("media_comment_type")),"'\n        class='instructure_inline_media_comment ").concat(Object(r["a"])(e.nodeName.toLowerCase()),"_comment'\n        data-alt='").concat(Object(r["a"])(s()(e).attr("data-alt")),"'\n      />"))
t.html(s()(e).html())
return t},convert(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=s()("<div />").html(e)
n.find("video.instructure_inline_media_comment,audio.instructure_inline_media_comment").replaceWith((function(){return d.toMediaCommentLink(this)}))
n.find("object.instructure_user_content:not(#kaltura_player) embed").remove()
if(!t.forEditing){n.find("object.instructure_user_content,embed.instructure_user_content").replaceWith((function(){const e=s()(this)
if(!e.data("uc_snippet")||!e.data("uc_sig"))return this
const t=o.a.uniqueId("uc_")
let n="/object_snippet"
ENV.files_domain&&(n="//".concat(ENV.files_domain).concat(n))
const i=s()("<form\n            action='".concat(Object(r["a"])(n),"'\n            method='post'\n            class='user_content_post_form'\n            target='").concat(Object(r["a"])(t),"'\n            id='form-").concat(Object(r["a"])(t),"'\n          />"))
i.append(s()("<input type='hidden'/>").attr({name:"object_data",value:e.data("uc_snippet")}))
i.append(s()("<input type='hidden'/>").attr({name:"s",value:e.data("uc_sig")}))
s()("body").append(i)
setTimeout(()=>i.submit(),0)
return s()("<iframe\n            class='user_content_iframe'\n            name='".concat(Object(r["a"])(t),"'\n            style='width: ").concat(Object(r["a"])(e.data("uc_width")),"; height: ").concat(Object(r["a"])(e.data("uc_height")),";'\n            frameborder='0'\n            title='").concat(Object(r["a"])(c.t("User Content")),"'\n          />"))}))
n.find("img.equation_image").each((e,t)=>{const n=s()(t)
const i=d.translateMathmlForScreenreaders(n)
n.removeAttr("x-canvaslms-safe-mathml")
n.after(i)})}return n.html()}}
t["a"]=d},qJBq:function(e,t){(function(){var t,n,i
i=[]
t={}
e.exports=n=function(e,n,s){var a,o,r,l,u,c,d,h,_
null==s&&(s=true)
if("string"===typeof n){if(2!==n.length)throw{name:"ArgumentException",message:"The format for string options is '<thousands><decimal>' (exactly two characters)"}
_=n[0],a=n[1]}else if(Array.isArray(n)){if(2!==n.length)throw{name:"ArgumentException",message:"The format for array options is ['<thousands>','[<decimal>'] (exactly two elements)"}
_=n[0],a=n[1]}else{_=(null!=n?n.thousands:void 0)||(null!=n?n.group:void 0)||t.thousands
a=(null!=n?n.decimal:void 0)||t.decimal}d=""+_+a+s
c=i[d]
if(null==c){r=s?3:1
c=i[d]=new RegExp("^\\s*([+-]?(?:(?:\\d{1,3}(?:\\"+_+"\\d{"+r+",3})+)|\\d*))(?:\\"+a+"(\\d*))?\\s*$")}h=e.match(c)
if(!(null!=h&&3===h.length))return NaN
l=h[1].replace(new RegExp("\\"+_,"g"),"")
o=h[2]
u=parseFloat(l+"."+o)
return u}
e.exports.setOptions=function(e){var n,i
for(n in e){i=e[n]
t[n]=i}}
e.exports.factoryReset=function(){t={thousands:",",decimal:"."}}
e.exports.withOptions=function(e,t){null==t&&(t=true)
return function(i){return n(i,e,t)}}
e.exports.factoryReset()}).call(this)},"tVj+":function(e,t,n){"use strict"
var i=n("ouhR")
var s=n.n(i)
n("BYL3")
const a={validate:/^[a-zA-Z][a-zA-Z0-9_-]*(?:\[(?:\d*|[a-zA-Z0-9_-]+)\])*$/,key:/[a-zA-Z0-9_-]+|(?=\[\])/g,push:/^$/,fixed:/^\d+$/,named:/^[a-zA-Z0-9_-]+$/}
const o=function(e,t,n){e[t]=n
return e}
s.a.fn.toJSON=function(){let e={},t={}
const n=function(e,n){void 0===t[e]&&(t[e]=0)
if(void 0===n)return t[e]++
if(void 0!==n&&n>t[e])return t[e]=++n}
s.a.each(s()(this).serializeForm(),(function(){if(!a.validate.test(this.name))return
let t,i=this.name.match(a.key),r=this.value,l=this.name
while(void 0!==(t=i.pop())){l=l.replace(new RegExp("\\["+t+"\\]$"),"")
if(t.match(a.push))r=o([],n(l),r)
else if(t.match(a.fixed)){n(l,t)
r=o([],t,r)}else t.match(a.named)&&(r=o({},t,r))}e=s.a.extend(true,e,r)}))
return e}},vwFW:function(e,t,n){"use strict"
var i=n("ouhR")
var s=n.n(i)
s()(".question select").bind("mousewheel",e=>e.preventDefault())},w8vW:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
function i(e,t){for(let n=0;n<e.length;n++){const i=e[n]
if(i===t){e.splice(n,1)
break}}return e}},zrOs:function(e,t){if("".concat(location.search).match(/[?&]debug_js=1/))e.exports=console
else{function n(){}e.exports=["debug","info","log","warn","error"].reduce((e,t)=>{e[t]=n
return e},{})}}}])

//# sourceMappingURL=take_quiz-c-c34eedbf4a.js.map