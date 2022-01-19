(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[40],{"13m+":function(e,t,s){"use strict"
var i=s("17x9")
var n=s.n(i)
var a=s("v0Tn")
const r=n.a.shape,o=n.a.string,c=n.a.arrayOf,d=n.a.oneOf,u=n.a.bool,l=n.a.instanceOf
const p={}
p.migrationState=d(a["a"].statesList)
p.term=r({id:o.isRequired,name:o.isRequired})
p.termList=c(p.term)
p.account=r({id:o.isRequired,name:o.isRequired})
p.accountList=c(p.account)
p.course=r({id:o.isRequired,name:o.isRequired,course_code:o.isRequired,term:p.term.isRequired,teachers:c(r({display_name:o.isRequired})).isRequired,sis_course_id:o})
p.courseList=c(p.course)
p.courseInfo=r({id:o.isRequired,name:o.isRequired,enrollment_term_id:o.isRequired,sis_course_id:o})
p.lockableAttribute=d(["points","content","due_dates","availability_dates","settings","deleted"])
p.lockableAttributeList=c(p.lockableAttribute)
p.migrationException=r({course_id:o.isRequired,conflicting_changes:p.lockableAttributeList})
p.migrationExceptionList=c(p.migrationException)
p.migrationChange=r({asset_id:o.isRequired,asset_type:d(["assignment","quiz","discussion_topic","wiki_page","attachment","context_module","learning_outcome","learning_outcome_group","announcement","rubric","syllabus"]).isRequired,asset_name:o.isRequired,change_type:d(["created","updated","deleted"]).isRequired,htnl_url:o,exceptions:p.migrationExceptionList})
p.migrationChangeList=c(p.migrationChange)
p.migration=r({id:o.isRequired,workflow_state:p.migrationState.isRequired,comment:o,created_at:o.isRequired,exports_started_at:o,imports_queued_at:o,imports_completed_at:o,changes:p.migrationChangeList})
p.migrationList=c(p.migration)
p.unsyncedChange=r({asset_id:o.isRequired,asset_type:o.isRequired,asset_name:o.isRequired,change_type:o.isRequired,html_url:o.isRequired,locked:u.isRequired})
p.unsyncedChanges=c(p.unsyncedChange)
p.notification=r({id:o.isRequired,message:o.isRequired,err:l(Error)})
p.notificationList=c(p.notification)
p.itemLocks=r({content:u,points:u,due_dates:u,availability_dates:u})
p.itemLocksByObject=r({assignment:p.itemLocks,discussion_topic:p.itemLocks,wiki_page:p.itemLocks,quiz:p.itemLocks,attachment:p.itemLocks})},"3sT6":function(e,t,s){"use strict"
var i=s("pQTu")
var n=s("m0r6")
Object(n["a"])(JSON.parse('{"de":{"announcement_fb4cb645":"Ankündigung","assignment_976578a8":"Aufgabe","assignment_group_1a781505":"Aufgabengruppe","assignments_1e02582c":"Aufgaben","availability_dates_438d71e0":"Verfügbarkeitstermine","availability_dates_changed_exceptions_465ba375":"Verfügbarkeitstermine geändert – Ausnahmen:","content_1440204b":"Content","content_changed_exceptions_e8bff81e":"Inhalt geändert – Ausnahmen:","created_58b8a75a":"Erstellt","deleted_1be5ed1":"Gelöscht","deleted_content_exceptions_237e809d":"Gelöschte Content-Ausnahmen:","discussion_6719c51d":"Diskussion","discussions_a5f96392":"Diskussionen","due_dates_520a6c08":"Abgabetermine","due_dates_changed_exceptions_ddb028":"Fälligkeitstermine geändert – Ausnahmen:","event_fe9ba3fe":"Event","external_tool_c5a6410a":"Externes Tool","file_c851020d":"Datei","files_c300e900":"Dateien","folder_705fd2d7":"Ordner","locked_762f138b":"Gesperrt","module_90d9fd32":"Modul","outcome_da397d20":"Lernziel","outcome_group_39fae76f":"Ergebnisgruppe","page_50c4823d":"Seite","pages_e5414c2c":"Seiten","points_bb475533":"Punkte","points_changed_exceptions_b0c771f7":"Punkte geändert – Ausnahmen:","question_bank_f6c44d62":"Fragenpool","quiz_e0dcce8f":"Quiz","quizzes_7e598f57":"Quizze","rubric_fc39da76":"Bewertungsschema","settings_5aa0fd0c":"Einstellungen","settings_changed_exceptions_e5247936":"Einstellungen geändert – Ausnahmen:","syllabus_f191f65b":"Kursplan","unlocked_beee43de":"Entsperrt","updated_2c1e8615":"Aktualisiert"},"hu":{"announcement_fb4cb645":"Hirdetmény","assignment_976578a8":"Feladat","assignment_group_1a781505":"Feladatcsoport","assignments_1e02582c":"Feladatok","availability_dates_438d71e0":"Elérhetőségi dátumok","content_1440204b":"Tartalom","created_58b8a75a":"Létrehozva","deleted_1be5ed1":"Törölt","discussion_6719c51d":"Fórum","discussions_a5f96392":"Fórumok","due_dates_520a6c08":"Határidők","event_fe9ba3fe":"Esemény","external_tool_c5a6410a":"Külső eszköz","file_c851020d":"Fájl","files_c300e900":"Fájlok","folder_705fd2d7":"Mappa","locked_762f138b":"Zárolt","module_90d9fd32":"Modul","outcome_da397d20":"Tanulási eredmény","page_50c4823d":"Oldal","pages_e5414c2c":"Oldalak","points_bb475533":"Pont","question_bank_f6c44d62":"Kérdésbank","quiz_e0dcce8f":"Kvíz","quizzes_7e598f57":"Kvízek","rubric_fc39da76":"Értékelőtábla","settings_5aa0fd0c":"Beállítások","syllabus_f191f65b":"Tematika","updated_2c1e8615":"Frissített"}}'))
s("jQeR")
s("0sPK")
var a=i["default"].scoped("blueprint_settings_labels")
s.d(t,"d",(function(){return r}))
s.d(t,"a",(function(){return c}))
s.d(t,"b",(function(){return d}))
s.d(t,"e",(function(){return u}))
s.d(t,"c",(function(){return o}))
const r={get assignment(){return a.t("Assignment")},get assignment_group(){return a.t("Assignment Group")},get quiz(){return a.t("Quiz")},get discussion_topic(){return a.t("Discussion")},get wiki_page(){return a.t("Page")},get attachment(){return a.t("File")},get context_module(){return a.t("Module")},get announcement(){return a.t("Announcement")},get assessment_question_bank(){return a.t("Question Bank")},get calendar_event(){return a.t("Event")},get learning_outcome(){return a.t("Outcome")},get learning_outcome_group(){return a.t("Outcome Group")},get rubric(){return a.t("Rubric")},get context_external_tool(){return a.t("External Tool")},get folder(){return a.t("Folder")},get syllabus(){return a.t("Syllabus")},get settings(){return a.t("Settings")}}
const o={get assignment(){return a.t("Assignments")},get quiz(){return a.t("Quizzes")},get discussion_topic(){return a.t("Discussions")},get wiki_page(){return a.t("Pages")},get attachment(){return a.t("Files")}}
const c={get created(){return a.t("Created")},get updated(){return a.t("Updated")},get deleted(){return a.t("Deleted")}}
const d={get points(){return a.t("Points changed exceptions:")},get content(){return a.t("Content changed exceptions:")},get due_dates(){return a.t("Due Dates changed exceptions:")},get availability_dates(){return a.t("Availability Dates changed exceptions:")},get settings(){return a.t("Settings changed exceptions:")},get deleted(){return a.t("Deleted content exceptions:")}}
const u={get content(){return a.t("Content")},get points(){return a.t("Points")},get settings(){return a.t("Settings")},get due_dates(){return a.t("Due Dates")},get availability_dates(){return a.t("Availability Dates")}}},OAMf:function(e,t,s){"use strict"
var i=s("pQTu")
var n=s("m0r6")
Object(n["a"])(JSON.parse('{"de":{"no_attributes_locked_611c5cc":"Keine Attribute gesperrt"}}'))
s("jQeR")
s("0sPK")
var a=i["default"].scoped("blueprint_LockItemFormat")
var r=s("3sT6")
s.d(t,"a",(function(){return c}))
function o(e){const t=e.map(e=>r["e"][e])
switch(t.length){case 0:return a.t("no attributes locked")
case 1:return t[0]
default:return"".concat(t.slice(0,-1).join(", ")," & ").concat(t.slice(-1)[0])}}function c(e){const t=Object.keys(e).filter(t=>e[t])
return o(t)}},kC3k:function(e,t,s){"use strict"
s.d(t,"a",(function(){return g}))
var i=s("VTBJ")
var n=s("1OyB")
var a=s("vuIU")
var r=s("md7G")
var o=s("foSv")
var c=s("Ji7U")
var d=s("q1tI")
var u=s.n(d)
var l=s("hPGw")
var p=u.a.createElement("path",{d:"M564.706 1581.177H338.824V338.824h1242.353v225.882h-112.942V451.765H451.765v1016.47h112.941v112.942zM0 0h1242.353v225.882h-112.941v-112.94H112.941v1016.47h112.941v112.94H0V0zm847.059 1920H677.647v-169.412h112.942v56.471h56.47V1920zm180.662 0v-112.941h180.662V1920h-180.662zm361.433 0v-112.941h180.662V1920h-180.662zm530.846 0h-169.412v-112.941h56.471v-56.471H1920V1920zm-112.941-711.508v-180.661H1920v180.661h-112.941zm0 361.435v-180.662H1920v180.662h-112.941zM1920 847.059h-112.941v-56.47h-56.471V677.647H1920v169.412zm-892.169-56.471V677.647h180.661v112.941h-180.661zm361.434 0V677.647h180.662v112.941h-180.662zm-598.677 56.47h-112.94V677.648h169.41v112.942h-56.47v56.47zm-112.941 361.325v-180.662h112.941v180.662H677.647zm0 361.433v-180.662h112.941v180.662H677.647z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var g=function(e){Object(c["a"])(t,e)
function t(){Object(n["a"])(this,t)
return Object(r["a"])(this,Object(o["a"])(t).apply(this,arguments))}Object(a["a"])(t,[{key:"render",value:function(){return u.a.createElement(l["a"],Object.assign({},this.props,{name:"IconBlueprint",viewBox:"0 0 1920 1920"}),p)}}])
t.displayName="IconBlueprintSolid"
return t}(d["Component"])
g.glyphName="blueprint"
g.variant="Solid"
g.propTypes=Object(i["a"])({},l["a"].propTypes)},lubD:function(e,t,s){"use strict"
var i=s("x1Tw")
var n=s("pREb")
var a=s("v0Tn")
const r={_depaginate(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Infinity
let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]
return i["a"].get(e).then(e=>{const i=s.concat(e.data)
const a=t-1
if(e.headers.link&&a>0){const t=Object(n["a"])(e)
if(t.next)return this._depaginate(t.next,a,i)}e.data=i
return e})},_queryString:e=>e.map(e=>{const t=Object.keys(e)[0]
const s=e[t]
return s?"".concat(t,"=").concat(s):null}).filter(e=>!!e).join("&"),getCourses(e){let t=e.accountId
let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=s.search,n=void 0===i?"":i,a=s.term,r=void 0===a?"":a,o=s.subAccount,c=void 0===o?"":o
const d=this._queryString([{per_page:"100"},{blueprint:"false"},{blueprint_associated:"false"},{"include[]":"term"},{"include[]":"teachers"},{search_term:n},{enrollment_term_id:r}])
return this._depaginate("/api/v1/accounts/".concat(c||t,"/courses?").concat(d),1)},getAssociations(e){let t=e.masterCourse
const s=this._queryString([{per_page:"100"}])
return this._depaginate("/api/v1/courses/".concat(t.id,"/blueprint_templates/default/associated_courses?").concat(s))},saveAssociations(e){let t=e.masterCourse,s=e.addedAssociations,n=e.removedAssociations
return i["a"].put("/api/v1/courses/".concat(t.id,"/blueprint_templates/default/update_associations"),{course_ids_to_add:s.map(e=>e.id),course_ids_to_remove:n.map(e=>e.id)})},getMigrations(e){let t=e.masterCourse
return i["a"].get("/api/v1/courses/".concat(t.id,"/blueprint_templates/default/migrations"))},beginMigration(e){let t=e.masterCourse,s=e.willSendNotification,n=e.willIncludeCustomNotificationMessage,a=e.notificationMessage,r=e.willIncludeCourseSettings
const o={send_notification:s}
r&&(o.copy_settings=true)
n&&a&&(o.comment=a)
return i["a"].post("/api/v1/courses/".concat(t.id,"/blueprint_templates/default/migrations"),o)},checkMigration(e){return this.getMigrations(e).then(e=>{let t=a["a"].void
e.data[0]&&(t=e.data[0].workflow_state)
e.data=t
return e})},getMigration(e,t){let s=e.course
let n=t.blueprintType,a=void 0===n?"blueprint_templates":n,r=t.templateId,o=void 0===r?"default":r,c=t.changeId
return i["a"].get("/api/v1/courses/".concat(s.id,"/").concat(a,"/").concat(o,"/migrations/").concat(c))},getMigrationDetails(e,t){let s=e.course
let n=t.blueprintType,a=void 0===n?"blueprint_templates":n,r=t.templateId,o=void 0===r?"default":r,c=t.changeId
return i["a"].get("/api/v1/courses/".concat(s.id,"/").concat(a,"/").concat(o,"/migrations/").concat(c,"/details"))},getFullMigration(e,t){let s=e.course
return this.getMigration({course:s},t).then(e=>{let i=e.data
return this.getMigrationDetails({course:s},t).then(e=>Object.assign(i,{changeId:t.changeId,changes:e.data}))})},getSyncHistory(e){let t=e.masterCourse
return this.getMigrations({masterCourse:t}).then(e=>{let s=e.data
return Promise.all(s.slice(0,5).map(e=>this.getMigrationDetails({course:t},{changeId:e.id}).then(t=>Object.assign(e,{changes:t.data}))))})},toggleLocked(e){let t=e.courseId,s=e.itemType,n=e.itemId,a=e.isLocked
return i["a"].put("/api/v1/courses/".concat(t,"/blueprint_templates/default/restrict_item"),{content_type:s,content_id:n,restricted:a})},loadUnsyncedChanges(e){let t=e.masterCourse
return i["a"].get("/api/v1/courses/".concat(t.id,"/blueprint_templates/default/unsynced_changes"))}}
t["a"]=r},"o/ft":function(e,t,s){"use strict"
s.d(t,"a",(function(){return g}))
var i=s("VTBJ")
var n=s("1OyB")
var a=s("vuIU")
var r=s("md7G")
var o=s("foSv")
var c=s("Ji7U")
var d=s("q1tI")
var u=s.n(d)
var l=s("hPGw")
var p=u.a.createElement("path",{d:"M564.706 1581.176H338.824V338.823h1242.353v225.882h-112.942v-112.94H451.765v1016.47h112.941v112.941zM0 0h1242.353v225.882h-112.941V112.941H112.941v1016.471h112.941v112.94H0V0zm1636.515 1247h142.5v514.632c0 87.354-71.03 158.383-158.383 158.383h-641.25c-87.353 0-158.382-71.03-158.382-158.383V1247h142.5v-233.493C963.5 827.937 1114.492 677 1300.007 677c185.514 0 336.508 150.938 336.508 336.507V1247zm-570-233.493V1247H1533.5v-233.493c0-128.713-104.779-233.492-233.493-233.492-128.713 0-233.492 104.779-233.492 233.492z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var g=function(e){Object(c["a"])(t,e)
function t(){Object(n["a"])(this,t)
return Object(r["a"])(this,Object(o["a"])(t).apply(this,arguments))}Object(a["a"])(t,[{key:"render",value:function(){return u.a.createElement(l["a"],Object.assign({},this.props,{name:"IconBlueprintLock",viewBox:"0 0 1920 1920"}),p)}}])
t.displayName="IconBlueprintLockSolid"
return t}(d["Component"])
g.glyphName="blueprint-lock"
g.variant="Solid"
g.propTypes=Object(i["a"])({},l["a"].propTypes)},pREb:function(e,t,s){"use strict"
const i=/<(http.*?)>; rel="([a-z]*)"/g
const n=e=>{const t={}
const s=e.headers?e.headers.link:null
if(!s)return t
let n=i.exec(s)
while(n){t[n[2]]=n[1]
n=i.exec(s)}return t}
t["a"]=n},v0Tn:function(e,t,s){"use strict"
const i=["queued","exporting","imports_queued"]
const n=["completed","exports_failed","imports_failed"]
const a=["void","unknown",...i,...n]
const r={statesList:a,states:a.reduce((e,t)=>Object.assign(e,{[t]:t}),{})}
r.isEndState=e=>n.includes(e)
r.isLoadingState=e=>i.includes(e)
r.getLoadingValue=e=>i.indexOf(e)+1
r.isSuccessful=e=>"completed"===e
r.maxLoadingValue=i.length+1
t["a"]=r},y8OA:function(e,t,s){"use strict"
s.r(t)
var i=s("An8g")
var n=s("VTBJ")
var a=s("pQTu")
var r=s("m0r6")
Object(r["a"])(JSON.parse('{"de":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Es gab ein Problem beim Umschalten der Content-Sperre."}}'))
s("jQeR")
s("0sPK")
var o=a["default"].scoped("blueprint_coursesLockManageer")
var c=s("ouhR")
var d=s.n(c)
var u=s("q1tI")
var l=s("i8i4")
var p=s.n(l)
s("p6Wi")
var g=s("mwIZ")
var _=s.n(g)
const h=e=>Object.assign({assignment:{toggleWrapperSelector:{show:".assignment-buttons",edit:".header-bar .header-bar-right .header-group-left"}[e.page],itemIdPath:{show:"ASSIGNMENT_ID",edit:"ASSIGNMENT.id"}[e.page]},quiz:{toggleWrapperSelector:{show:".header-group-left",edit:".header-bar .header-bar-right .header-group-left"}[e.page],toggleWrapperChildIndex:{edit:2}[e.page],itemIdPath:"QUIZ.id"},discussion_topic:{toggleWrapperSelector:{show:".form-inline .pull-right",edit:".discussion-edit-header .text-right"}[e.page],itemIdPath:{show:"DISCUSSION.TOPIC.ID",edit:"DISCUSSION_TOPIC.ATTRIBUTES.id"}[e.page]},wiki_page:{toggleWrapperSelector:{show:".header-bar .header-bar-right"}[e.page],itemIdPath:"WIKI_PAGE.page_id"}}[e.itemType],e)
var m=h
var b=s("lubD")
Object(r["a"])(JSON.parse('{"de":{"attributes_locked_1a1a0f46":"%{attributes} gesperrt","locked_796957c7":"Gesperrt:"},"hu":{"attributes_locked_1a1a0f46":"%{attributes}zárolva"}}'))
var v=a["default"].scoped("blueprint_coursesLockBanner")
s("17x9")
var f=s("L+/K")
var k=s("5JRF")
s("MWZS")
var L=s("OAMf")
s("13m+")
class O extends u["Component"]{static setupRootNode(){const e=document.createElement("div")
e.id="blueprint-lock-banner"
e.setAttribute("style","margin-bottom: 2em")
const t=document.querySelector("#content")
return t.insertBefore(e,t.firstChild)}componentDidUpdate(e){this.props.isLocked&&!e.isLocked&&d.a.screenReaderFlashMessage(v.t("%{attributes} locked",{attributes:Object(L["a"])(this.props.itemLocks)}))}render(){if(this.props.isLocked)return Object(i["a"])(f["a"],{},void 0,Object(i["a"])(k["a"],{weight:"bold",size:"small"},void 0,v.t("Locked:")," "),Object(i["a"])(k["a"],{size:"small"},void 0,Object(L["a"])(this.props.itemLocks)))
return null}}O.defaultProps={itemLocks:{content:false,points:false,settings:false,due_dates:false,availability_dates:false}}
Object(r["a"])(JSON.parse('{"de":{"blueprint_5cca2ef":"Muster","lock_c341af13":"Sperre","locked_762f138b":"Gesperrt","locked_click_to_unlock_50747e11":"Gesperrt. Zum Entsperren klicken","unlock_f6196bf5":"Entsperren","unlocked_click_to_lock_53262ce7":"Entsperrt Zum Sperren klicken"},"hu":{"blueprint_5cca2ef":"Blueprint","locked_762f138b":"Zárolt","unlock_f6196bf5":"Zárolás feloldása"}}'))
var E=a["default"].scoped("blueprint_coursesLockToggle")
var C=s("Xx/m")
var S=s("5Shj")
var A=s("4Pkj")
var I=s("WfMV")
var T=s("o/ft")
var y=s("kC3k")
const R={ADMIN_LOCKED:{label:E.t("Locked"),icon:T["a"],tooltip:E.t("Unlock"),variant:"primary"},ADMIN_UNLOCKED:{label:E.t("Blueprint"),icon:y["a"],tooltip:E.t("Lock"),variant:"default"},ADMIN_WILLUNLOCK:{label:E.t("Blueprint"),icon:y["a"],tooltip:E.t("Unlock"),variant:"default"},ADMIN_WILLLOCK:{label:E.t("Locked"),icon:T["a"],tooltip:E.t("Lock"),variant:"primary"},TEACH_LOCKED:{label:E.t("Locked"),icon:T["a"]},TEACH_UNLOCKED:{label:E.t("Blueprint"),icon:y["a"]}}
class N extends u["Component"]{static setupRootNode(e,t,s){const i=document.createElement("span")
const n=setInterval(()=>{const a=document.querySelector(e)
if(a){clearInterval(n)
a.insertBefore(i,a.childNodes[t])
s(i)}},200)}constructor(e){super(e)
this.onEnter=()=>{this.props.isToggleable&&this.setState({mode:this.props.isLocked?R.ADMIN_WILLUNLOCK:R.ADMIN_WILLLOCK})}
this.onExit=()=>{this.props.isToggleable&&this.setState({mode:this.props.isLocked?R.ADMIN_LOCKED:R.ADMIN_UNLOCKED})}
this.state={}
e.isToggleable?this.state.mode=e.isLocked?R.ADMIN_LOCKED:R.ADMIN_UNLOCKED:this.state.mode=e.isLocked?R.TEACH_LOCKED:R.TEACH_UNLOCKED}render(){const e=this.state.mode.icon
const t=Object(i["a"])("span",{className:"bpc-lock-toggle__label"},void 0,this.state.mode.label||"-")
let s=null
if(this.props.isToggleable){const n=this.state.mode.variant
const a=this.state.mode.tooltip
const r=this.props.isLocked?E.t("Locked. Click to unlock."):E.t("Unlocked. Click to lock.")
s=Object(i["a"])(S["a"],{tip:a,placement:"top",variant:"inverse",on:["hover","focus"]},void 0,Object(i["a"])(C["a"],{variant:n,onClick:this.props.onClick,onFocus:this.onEnter,onBlur:this.onExit,onMouseEnter:this.onEnter,onMouseLeave:this.onExit,"aria-pressed":this.props.isLocked},void 0,Object(i["a"])(e,{}),Object(i["a"])(A["a"],{},void 0,t),Object(i["a"])(I["a"],{},void 0,r)))}else s=Object(i["a"])("span",{className:"bpc__lock-no__toggle"},void 0,Object(i["a"])("span",{className:"bpc__lock-no__toggle-icon"},void 0,Object(i["a"])(e,{})),Object(i["a"])(k["a"],{size:"small"},void 0,t))
return Object(i["a"])("span",{className:"bpc-lock-toggle"},void 0,s)}}N.defaultProps={isToggleable:false,onClick:()=>{}}
s.d(t,"default",(function(){return j}))
class j{constructor(){this.toggleLocked=()=>{const e=this.props.itemType
const t=this.state,s=t.courseId,i=t.isLocked,n=t.itemId
b["a"].toggleLocked({courseId:s,itemType:e,itemId:n,isLocked:!i}).then(e=>{e.data.success?this.setState({isLocked:!i}):this.showToggleError()}).catch(()=>{this.showToggleError()})}
this.state={isLocked:false,itemLocks:[],isMasterContent:false,isChildContent:false,itemId:""}}init(e){if(!this.shouldInit())return
this.props=m(e)
this.setupState()
void 0!==this.state.itemId&&this.render()}shouldInit(){return ENV.MASTER_COURSE_DATA&&(ENV.MASTER_COURSE_DATA.is_master_course_master_content||ENV.MASTER_COURSE_DATA.is_master_course_child_content)}setupState(){this.state={isLocked:ENV.MASTER_COURSE_DATA.restricted_by_master_course,itemLocks:ENV.MASTER_COURSE_DATA.master_course_restrictions||ENV.MASTER_COURSE_DATA.default_restrictions,isMasterContent:ENV.MASTER_COURSE_DATA.is_master_course_master_content,isChildContent:ENV.MASTER_COURSE_DATA.is_master_course_child_content,courseId:ENV.COURSE_ID,itemId:_()(ENV,this.props.itemIdPath)}}setState(e){this.state=Object.assign(this.state,e)
this.render()}getItemLocks(){return Object(n["a"])({},this.state.itemLocks)}isMasterContent(){return this.state.isMasterContent}isChildContent(){return this.state.isChildContent}showToggleError(){d.a.flashError(o.t("There was a problem toggling the content lock."))}setupToggle(e){if(!this.props.toggleWrapperSelector)return
this.toggleNode?e():N.setupRootNode(this.props.toggleWrapperSelector,this.props.toggleWrapperChildIndex||0,t=>{this.toggleNode=t
e()})}renderLockToggle(){if(!this.props.toggleWrapperSelector)return
this.setupToggle(()=>{p.a.render(Object(i["a"])(N,{isLocked:this.state.isLocked,isToggleable:"show"===this.props.page&&this.state.isMasterContent,onClick:this.toggleLocked}),this.toggleNode)})}renderBanner(){this.bannerNode||(this.bannerNode=O.setupRootNode())
p.a.render(Object(i["a"])(O,{isLocked:this.state.isLocked,itemLocks:this.state.itemLocks}),this.bannerNode)}render(){this.renderBanner()
this.renderLockToggle()}}}}])

//# sourceMappingURL=40-c-14e09fd3df.js.map