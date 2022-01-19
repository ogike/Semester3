(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[102],{"3UD+":function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e)
t.children||(t.children=[])
Object.defineProperty(t,"loaded",{enumerable:true,get:function(){return t.l}})
Object.defineProperty(t,"id",{enumerable:true,get:function(){return t.i}})
Object.defineProperty(t,"exports",{enumerable:true})
t.webpackPolyfill=1}return t}},"5nFh":function(e,t,n){"use strict"
n.d(t,"a",(function(){return v}))
var a=n("VTBJ")
var r=n("1OyB")
var s=n("vuIU")
var i=n("md7G")
var o=n("foSv")
var d=n("Ji7U")
var c=n("q1tI")
var l=n("17x9")
var u=n.n(l)
var p=n("cClk")
var g=n("BTe1")
var _=n("9yTY")
var b=function(e){var t=e.expanded
return{expanded:!t}}
var v=function(e){Object(d["a"])(t,e)
function t(e){var n
Object(r["a"])(this,t)
n=Object(i["a"])(this,Object(o["a"])(t).call(this))
n.handleToggle=function(e){n.isControlled()||n.setState(b)
n.props.onToggle(e,!n.expanded)}
n.state={expanded:n.isControlled(e)?e.expanded:!!e.defaultExpanded}
n._contentId=Object(g["a"])("Expandable__content")
return n}Object(s["a"])(t,[{key:"isControlled",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props
return"boolean"===typeof e.expanded}},{key:"componentWillReceiveProps",value:function(e){this.isControlled()&&!this.isControlled(e)&&this.props.expanded!==this.state.expanded&&this.setState(b)}},{key:"render",value:function(){var e=this
var t=this.props,n=t.children,r=t.render,s=void 0===r?n:r
return"function"===typeof s?s({expanded:this.expanded,getToggleProps:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return Object(a["a"])({"aria-controls":e._contentId,"aria-expanded":e.expanded,onClick:Object(_["a"])(e.handleToggle,t.onClick)},t)},getDetailsProps:function(t){return{id:e._contentId}}}):null}},{key:"expanded",get:function(){return this.isControlled()?this.props.expanded:this.state.expanded}}])
t.displayName="Expandable"
return t}(c["Component"])
v.propTypes={expanded:Object(p["a"])(u.a.bool,"onToggle","defaultExpanded"),defaultExpanded:u.a.bool,onToggle:u.a.func,children:u.a.func,render:u.a.func}
v.defaultProps={defaultExpanded:false,onToggle:function(e,t){},expanded:void 0,children:null,render:void 0}},CyXg:function(e,t,n){"use strict"
n.d(t,"a",(function(){return g}))
var a=n("VTBJ")
var r=n("1OyB")
var s=n("vuIU")
var i=n("md7G")
var o=n("foSv")
var d=n("Ji7U")
var c=n("q1tI")
var l=n.n(c)
var u=n("hPGw")
var p=l.a.createElement("path",{d:"M994.034 1226.26c-18.796 27.296-49.269 27.3-68.067 0L574.893 716.424C556.096 689.128 567.713 667 600.852 667h718.297c33.133 0 44.757 22.125 25.959 49.424L994.034 1226.26z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var g=function(e){Object(d["a"])(t,e)
function t(){Object(r["a"])(this,t)
return Object(i["a"])(this,Object(o["a"])(t).apply(this,arguments))}Object(s["a"])(t,[{key:"render",value:function(){return l.a.createElement(u["a"],Object.assign({},this.props,{name:"IconMiniArrowDown",viewBox:"0 0 1920 1920"}),p)}}])
t.displayName="IconMiniArrowDownSolid"
return t}(c["Component"])
g.glyphName="mini-arrow-down"
g.variant="Solid"
g.propTypes=Object(a["a"])({},u["a"].propTypes)},GXQz:function(e,t,n){"use strict"
n.r(t)
var a=n("ANjH")
var r=n("An8g")
var s=n("q1tI")
var i=n.n(s)
var o=n("i8i4")
var d=n.n(o)
var c=n("/MKj")
var l=n("17x9")
var u=n.n(l)
var p=n("VTJ5")
var g=n("pQTu")
var _=n("m0r6")
Object(_["a"])(JSON.parse('{"de":{"loading_bde52856":"Wird geladen","loading_data_ecd89ba":"Daten werden geladen ...","mastery_paths_breakdown_6e0b5fce":"Übersicht der Leistungsziel-Pfade"},"hu":{"loading_bde52856":"Töltődik","loading_data_ecd89ba":"Adatok betöltése...","mastery_paths_breakdown_6e0b5fce":"Jártassági útvonal üzemzavar"}}'))
n("jQeR")
n("0sPK")
var b=g["default"].scoped("cyoe_assignment_sidebar_breakdown_graphs")
var v=n("MdYG")
Object(_["a"])(JSON.parse('{"de":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ bis %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} von %{totalStudents} Studenten","view_range_student_details_8116d68a":"Studentendetails nach Bereichen anzeigen"},"hu":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ - %{upperBound}"}}'))
var m=g["default"].scoped("cyoe_assignment_sidebar_breakdown_graph_bar")
u.a.string,u.a.number,u.a.func
var h=Object(r["a"])("div",{className:"crs-bar__horizontal-inside"})
class f extends i.a.Component{constructor(){super(...arguments)
this.selectRange=e=>{this.props.openSidebar(e.target)
this.props.selectRange(this.props.rangeIndex)}}renderInnerBar(){const e=Math.min(this.props.rangeStudents/this.props.totalStudents*100,100)
const t={width:e+"%"}
return e>0?Object(r["a"])("div",{style:t,className:"crs-bar__horizontal-inside-fill"}):null}render(){const e=this.props,t=e.rangeStudents,n=e.totalStudents
return Object(r["a"])("div",{className:"crs-bar__container"},void 0,Object(r["a"])("div",{className:"crs-bar__horizontal-outside"},void 0,h,this.renderInnerBar()),Object(r["a"])("div",{className:"crs-bar__bottom"},void 0,Object(r["a"])("span",{className:"crs-bar__info"},void 0,m.t("%{lowerBound}+ to %{upperBound}",{upperBound:this.props.upperBound,lowerBound:this.props.lowerBound})),Object(r["a"])("button",{className:"crs-link-button",onClick:this.selectRange,title:m.t("View range student details")},void 0,m.t("%{rangeStudents} out of %{totalStudents} students",{rangeStudents:t,totalStudents:n}))))}}var S=f
u.a.object,u.a.array,u.a.func,u.a.number,u.a.bool
class O extends i.a.Component{renderContent(){return this.props.isLoading?Object(r["a"])("div",{className:"crs-breakdown-graph__loading"},void 0,Object(r["a"])(p["a"],{renderTitle:b.t("Loading"),size:"small"}),Object(r["a"])("p",{},void 0,b.t("Loading Data.."))):this.renderBars()}renderBars(){const e=this.props,t=e.ranges,n=e.assignment,a=e.enrolled,s=e.openSidebar,i=e.selectRange
return t.map((e,t)=>{let o=e.size,d=e.scoring_range
return Object(r["a"])(S,{rangeIndex:t,rangeStudents:o,totalStudents:a,upperBound:Object(v["b"])(d.upper_bound,n,true),lowerBound:Object(v["b"])(d.lower_bound,n,false),openSidebar:s,selectRange:i},t)})}render(){return Object(r["a"])("div",{className:"crs-breakdown-graph"},void 0,Object(r["a"])("h2",{},void 0,b.t("Mastery Paths Breakdown")),this.renderContent())}}var y=O
var j=n("Xx/m")
var E=n("7Hz5")
var w=n("IRk9")
Object(_["a"])(JSON.parse('{"de":{"close_details_sidebar_ff8f663d":"Details-Seitenleiste schließen"}}'))
var T=g["default"].scoped("cyoe_assignment_sidebar_breakdown_details")
var N=n("KIj7")
var k=n("S4Kx")
var M=n("CyXg")
var I=n("HsON")
var D=n("TSYQ")
var A=n.n(D)
Object(_["a"])(JSON.parse('{"de":{"mastery_paths_breakdown_6e0b5fce":"Übersicht der Leistungsziel-Pfade"},"hu":{"mastery_paths_breakdown_6e0b5fce":"Jártassági útvonal üzemzavar"}}'))
var J=g["default"].scoped("cyoe_assignment_sidebar_student_ranges_view")
const x=u.a.shape,z=u.a.string
x({course_id:z.isRequired,trigger_assignment:z.isRequired})
const C=u.a.shape,B=u.a.arrayOf,P=u.a.string,L=u.a.number
C({course_id:L,name:P,title:P,grading_scheme:P,grading_type:P.isRequired,points_possible:L.isRequired,submission_types:B(P)})
const R=u.a.shape,U=u.a.number
R({range:U,student:U})
const G=u.a.shape,W=u.a.string,F=u.a.number
G({id:F.isRequired,name:W.isRequired,avatar_url:W})
Object(_["a"])(JSON.parse('{"de":{"select_student_name_caaff244":"Student auswählen %{name}"}}'))
var q=g["default"].scoped("cyoe_assignment_sidebar_student_range_itme")
class V extends i.a.Component{constructor(){super(...arguments)
this.selectStudent=()=>{this.props.selectStudent(this.props.studentIndex)}}render(){const e=this.props.student.user.avatar_image_url||"/images/messages/avatar-50.png"
const t=this.props.student.trend
const n=A()({"crs-student__trend-icon":true,"crs-student__trend-icon__positive":1===t,"crs-student__trend-icon__neutral":0===t,"crs-student__trend-icon__negative":-1===t})
const a=null!==t&&void 0!==t
return Object(r["a"])("div",{className:"crs-student-range__item"},void 0,Object(r["a"])("img",{src:e,className:"crs-student__avatar",onClick:this.selectStudent}),Object(r["a"])("button",{className:"crs-student__name crs-link-button",onClick:this.selectStudent,"aria-label":q.t("Select student %{name}",{name:this.props.student.user.name})},void 0,this.props.student.user.name),a&&Object(r["a"])("span",{className:n}))}}u.a.object,u.a.func
class H extends i.a.Component{render(){this.props.range.students
return Object(r["a"])("div",{className:"crs-student-range"},void 0,this.props.range.students.map((e,t)=>Object(r["a"])(V,{student:e,studentIndex:t,selectStudent:this.props.onStudentSelect},e.user.id)))}}u.a.array,u.a.func,u.a.object
class Q extends i.a.Component{constructor(e){super()
this.handleToggle=e=>{this.setState({selectedRange:e})}
this.state={selectedRange:e.selectedPath.range}}renderTabs(){return this.props.ranges.map((e,t)=>{const n=this.state.selectedRange===t
const a=Object(v["b"])(e.scoring_range.lower_bound,this.props.assignment,false)
const s=Object(v["b"])(e.scoring_range.upper_bound,this.props.assignment,true)
const i="> ".concat(a," - ").concat(s)
return Object(r["a"])(k["a"],{as:"div",padding:"xxx-small"},void 0,Object(r["a"])(N["a"],{variant:"filled",expanded:n,summary:i,onToggle:()=>this.handleToggle(t),size:"large",iconExpanded:M["a"],icon:I["a"]},t,Object(r["a"])(H,{range:e,onStudentSelect:this.props.selectStudent})))})}render(){const e=!!this.props.student
const t=A()({"crs-ranges-view":true,"crs-ranges-view__hidden":e})
return Object(r["a"])("div",{className:t},void 0,Object(r["a"])("header",{className:"crs-ranges-view__header"},void 0,Object(r["a"])("h4",{},void 0,J.t("Mastery Paths Breakdown"))),this.renderTabs())}}Object(_["a"])(JSON.parse('{"de":{"back_2900f52a":"Zurück","loading_bde52856":"Wird geladen","loading_data_ecd89ba":"Daten werden geladen ...","not_submitted_7d05fdb4":"Nicht abgegeben","send_message_6ccc90e8":"Nachricht senden","submitted_submitdate_bdd3bf09":"Abgegeben am: %{submitDate}","view_next_student_9fc72fef":"Nächsten Studenten anzeigen","view_previous_student_90000459":"Vorherigen Studenten anzeigen","view_submission_ff3da5d":"Abgabe anzeigen"},"hu":{"back_2900f52a":"Vissza","loading_bde52856":"Töltődik","loading_data_ecd89ba":"Adatok betöltése...","not_submitted_7d05fdb4":"Nincs beküldve","send_message_6ccc90e8":"Üzenetküldés","view_next_student_9fc72fef":"következő hallgató megtekintése","view_previous_student_90000459":"előző hallgató megtekintése","view_submission_ff3da5d":"Beadandó megtekintése"}}'))
var X=g["default"].scoped("cyoe_assignment_sidebar_student_details_view")
var K=n("Pm+R")
u.a.object,u.a.number
class Y extends i.a.Component{render(){const e=this.props.trend
const t=A()({"crs-student__trend-icon":true,"crs-student__trend-icon__positive":1===e,"crs-student__trend-icon__neutral":0===e,"crs-student__trend-icon__negative":-1===e})
const n=null!==e&&void 0!==e
const a=K["a"].getCategory(this.props.assignment).id
return Object(r["a"])("div",{className:"crs-student-details__assignment"},void 0,Object(r["a"])("i",{className:"icon-".concat(a," crs-student-details__assignment-icon crs-icon-").concat(a)}),Object(r["a"])("div",{className:"crs-student-details__assignment-name"},void 0,this.props.assignment.name),Object(r["a"])("div",{className:"crs-student-details__assignment-score"},void 0,Object(r["a"])("div",{},void 0,Object(v["b"])(this.props.assignment.score,this.props.assignment,true)),n&&Object(r["a"])("span",{className:t})))}}u.a.shape,u.a.string,u.a.number,u.a.arrayOf,u.a.func,u.a.bool
var Z=Object(r["a"])("i",{"aria-hidden":true,className:"icon-arrow-open-left"})
var $=Object(r["a"])("i",{"aria-hidden":true,className:"icon-arrow-open-left"})
var ee=Object(r["a"])("i",{"aria-hidden":true,className:"icon-email crs-icon-email"})
var te=Object(r["a"])("i",{"aria-hidden":true,className:"icon-arrow-open-right"})
class ne extends i.a.Component{componentDidUpdate(e){this.props.student&&!e.student&&setTimeout(()=>this.backButton.focus(),100)}renderHeader(){if(!this.props.student)return null
return Object(r["a"])("header",{className:"crs-student-details__header"},void 0,i.a.createElement("button",{className:"crs-breakdown__link crs-back-button",ref:e=>{this.backButton=e},onClick:this.props.unselectStudent},Z,X.t("Back")))}renderStudentProfile(){const e=this.props,t=e.student,n=e.triggerAssignment
const a=n.assignment
const s=t.avatar_image_url||"/images/messages/avatar-50.png"
const i="/conversations?context_id=course_".concat(a.course_id,"&user_id=").concat(t.id,"&user_name=").concat(t.name)
return Object(r["a"])("section",{className:"crs-student-details__profile-content"},void 0,Object(r["a"])("button",{className:"Button Button--icon-action student-details__prev-student","aria-label":X.t("view previous student"),onClick:this.props.selectPrevStudent,type:"button"},void 0,$),Object(r["a"])("div",{className:"crs-student-details__profile-inner-content"},void 0,Object(r["a"])("img",{src:s,"aria-hidden":true,className:"crs-student-details__profile-image"}),Object(r["a"])("h3",{className:"crs-student-details__name"},void 0,t.name),Object(r["a"])("a",{target:"_blank",rel:"noopener noreferrer",href:i,className:"crs-breakdown__link"},void 0,ee,X.t("Send Message"))),Object(r["a"])("button",{className:"Button Button--icon-action student-details__next-student","aria-label":X.t("view next student"),onClick:this.props.selectNextStudent,type:"button"},void 0,te))}renderTriggerAssignment(){const e=this.props,t=e.student,n=e.triggerAssignment
const a=n||{},s=a.assignment,i=a.submission
const o="/courses/".concat(s.course_id,"/assignments/").concat(s.id,"/submissions/").concat(t.id)
let d=null
d=i?i.submitted_at?X.l("date.formats.long",new Date(i.submitted_at)):null:X.t("Not Submitted")
return Object(r["a"])("section",{className:"crs-student-details__score-content"},void 0,Object(r["a"])("h3",{className:"crs-student-details__score-number"},void 0,Object(v["a"])(i.grade,s)),Object(r["a"])("div",{className:"crs-student-details__score-title"},void 0,s.name),d?Object(r["a"])("div",{className:"crs-student-details__score-date"},void 0,X.t("Submitted: %{submitDate}",{submitDate:d})):null,Object(r["a"])("a",{target:"_blank",rel:"noopener noreferrer",href:o,className:"crs-breakdown__link"},void 0,X.t("View Submission")))}renderFollowOnAssignments(){const e=this.props.followOnAssignments||[]
return Object(r["a"])("section",{},void 0,e.map((e,t)=>Object(r["a"])(Y,{assignment:e.assignment,score:e.score,trend:e.trend},t)))}renderContent(){if(this.props.isLoading)return Object(r["a"])("div",{className:"crs-student-details__loading"},void 0,Object(r["a"])(p["a"],{renderTitle:X.t("Loading"),size:"small"}),Object(r["a"])("p",{},void 0,X.t("Loading Data..")))
if(this.props.student)return Object(r["a"])("div",{},void 0,this.renderStudentProfile(),this.renderTriggerAssignment(),this.renderFollowOnAssignments())
return null}render(){const e=!this.props.student
const t=A()({"crs-student-details":true,"crs-student-details__hidden":e})
return Object(r["a"])("div",{className:t},void 0,this.renderHeader(),this.renderContent())}}u.a.array,u.a.object,u.a.func,u.a.bool
class ae extends i.a.Component{constructor(){super(...arguments)
this.unselectStudent=()=>{this.props.selectStudent(null)}
this.selectPrevStudent=()=>{let e=this.props.selectedPath.student
const t=this.props.ranges[this.props.selectedPath.range]
e>0?e-=1:e=t.size-1
this.props.selectStudent(e)}
this.selectNextStudent=()=>{let e=this.props.selectedPath.student
const t=this.props.ranges[this.props.selectedPath.range]
e<t.size-1?e+=1:e=0
this.props.selectStudent(e)}}render(){const e=this.props,t=e.selectedPath,n=e.ranges,a=e.students
const s=null!==t.student?n[t.range].students[t.student].user:null
const o=null!==t.student&&s?a[s.id]:null
return Object(r["a"])(E["a"],{open:this.props.showDetails,placement:"end",shouldContainFocus:true,defaultFocusElement:()=>this.closeButton},void 0,Object(r["a"])("div",{className:"crs-breakdown-details"},void 0,Object(r["a"])("div",{className:"crs-breakdown-details__content"},void 0,Object(r["a"])("span",{className:"crs-breakdown-details__closeButton"},void 0,i.a.createElement(j["a"],{variant:"icon",ref:e=>{this.closeButton=e},onClick:this.props.closeSidebar},Object(r["a"])("span",{className:"crs-breakdown-details__closeButtonIcon"},void 0,Object(r["a"])(w["a"],{title:T.t("Close details sidebar")})))),Object(r["a"])(Q,{assignment:this.props.assignment,ranges:n,selectedPath:t,selectStudent:this.props.selectStudent,student:s}),Object(r["a"])(ne,{isLoading:this.props.isStudentDetailsLoading,student:s,triggerAssignment:o&&o.triggerAssignment,followOnAssignments:o&&o.followOnAssignments,selectPrevStudent:this.selectPrevStudent,selectNextStudent:this.selectNextStudent,unselectStudent:this.unselectStudent}))))}}const re=Object(c["connect"])(e=>({assignment:e.assignment,ranges:e.ranges,enrolled:e.enrolled,isLoading:e.isInitialDataLoading}))(y)
const se=Object(c["connect"])(e=>({isStudentDetailsLoading:e.isStudentDetailsLoading,selectedPath:e.selectedPath,assignment:e.assignment,ranges:e.ranges,students:e.studentCache,showDetails:e.showDetails}))(ae)
class ie{constructor(e,t){this.store=e
this.actions=t}renderGraphs(e){const t={openSidebar:this.actions.openSidebar,selectRange:this.actions.selectRange}
d.a.render(Object(r["a"])(c["Provider"],{store:this.store},void 0,i.a.createElement(re,t)),e)}renderDetails(e){const t={selectRange:this.actions.selectRange,selectStudent:this.actions.selectStudent,closeSidebar:this.actions.closeSidebar}
d.a.render(Object(r["a"])(c["Provider"],{store:this.store},void 0,i.a.createElement(se,t)),e)}}var oe=n("sINF")
var de=n("VTBJ")
var ce=n("GLiE")
var le=n.n(ce)
const ue=(e,t)=>(n,a)=>{n=void 0===n?t:n
if(e[a.type]){let t=n
le.a.isObject(n)?t=Object(de["a"])({},n):Array.isArray(n)&&(t=n.slice())
return e[a.type](t,a)}return n}
const pe=(e,t)=>t.payload
const ge=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
return(t,n)=>void 0===t?e:t}
var _e=n("x1Tw")
const be={call(e,t){let n=e.apiUrl,a=e.jwt
return Object(_e["a"])({url:n+t,dataType:"json",headers:{Authorization:"Bearer "+a}}).then(e=>e.data)},loadInitialData(e){const t="/students_per_range?trigger_assignment=".concat(e.assignment.id)
return be.call(e,t)},loadStudent(e,t){const n="/student_details?trigger_assignment=".concat(e.assignment.id,"&student_id=").concat(t)
return be.call(e,n)}}
var ve=be
function me(e){const t=e.split("_")
return t.map((e,t)=>0!==t&&e.length?e.charAt(0).toUpperCase()+e.slice(1).toLowerCase():e.toLowerCase()).join("")}function he(e){const t=t=>({type:e,payload:t})
t.type=e
t.toString=()=>e
return t}function fe(e){const t={}
const n={}
e.forEach(e=>{const a=he(e)
const r=me(a.type)
n[r]=a
t[a.type]=a.type})
return{actionTypes:t,actions:n}}const Se=["SET_INITIAL_DATA","SET_SCORING_RANGES","SET_RULE","SET_ENROLLED","SET_ASSIGNMENT","SET_ERRORS","SET_STUDENT_DETAILS","SELECT_RANGE","ADD_STUDENT_TO_CACHE","SELECT_STUDENT","OPEN_SIDEBAR","CLOSE_SIDEBAR","LOAD_INITIAL_DATA_START","LOAD_INITIAL_DATA_END","LOAD_STUDENT_DETAILS_START","LOAD_STUDENT_DETAILS_END"]
const Oe=fe(Se),ye=Oe.actions,je=Oe.actionTypes
ye.closeSidebarFrd=ye.closeSidebar
ye.closeSidebar=()=>(e,t)=>{const n=t().sidebarTrigger
e(ye.closeSidebarFrd())
n.focus()}
ye.loadInitialData=e=>(e,t)=>{e(ye.loadInitialDataStart())
ve.loadInitialData(t()).then(t=>{e(ye.setInitialData(t))
e(ye.loadInitialDataEnd())}).catch(t=>{e(ye.setErrors(t))
e(ye.loadInitialDataEnd())})}
ye.loadStudent=e=>(t,n)=>{t(ye.loadStudentDetailsStart())
ve.loadStudent(n(),e).then(n=>{t(ye.addStudentToCache({studentId:e,data:n}))
t(ye.loadStudentDetailsEnd())}).catch(e=>{t(ye.loadStudentDetailsEnd())
t(ye.setErrors(e))})}
ye.selectStudent=e=>(t,n)=>{t({type:je.SELECT_STUDENT,payload:e})
const a=n(),r=a.studentCache,s=a.ranges,i=a.selectedPath
const o=s[i.range].students[e]
o&&!r[o.user.id.toString()]&&t(ye.loadStudent(o.user.id.toString()))}
const Ee=ue({[je.ADD_STUDENT_TO_CACHE]:(e,t)=>{const n=t.payload,a=n.studentId,r=n.data
e[a]={followOnAssignments:r.follow_on_assignments,triggerAssignment:r.trigger_assignment}
return e}},{})
const we=ue({[je.LOAD_INITIAL_DATA_START]:()=>true,[je.LOAD_INITIAL_DATA_END]:()=>false},false)
const Te=ue({[je.LOAD_STUDENT_DETAILS_START]:()=>true,[je.LOAD_STUDENT_DETAILS_END]:()=>false},false)
const Ne=ue({[je.SET_ERRORS]:(e,t)=>[...Array.from(t.payload),...Array.from(e)]},[])
const ke=ue({[je.SET_INITIAL_DATA]:(e,t)=>t.payload.ranges,[je.SET_SCORING_RANGES]:pe},[])
const Me=ue({[je.SET_ASSIGNMENT]:pe},{})
const Ie=ue({[je.SET_INITIAL_DATA]:(e,t)=>t.payload.rule,[je.SET_RULE]:pe},{course_id:"",trigger_assignment:""})
const De=ue({[je.SET_INITIAL_DATA]:(e,t)=>t.payload.enrolled,[je.SET_ENROLLED]:pe},0)
const Ae=ue({[je.OPEN_SIDEBAR]:(e,t)=>t.payload,[je.CLOSE_SIDEBAR]:()=>null},null)
const Je=ue({[je.OPEN_SIDEBAR]:()=>true,[je.CLOSE_SIDEBAR]:()=>false,[je.SELECT_RANGE]:(e,t)=>null!==t.payload},false)
const xe=ue({[je.SELECT_RANGE]:(e,t)=>{e.range=t.payload
return e},[je.SELECT_STUDENT]:(e,t)=>{e.student=t.payload
return e},[je.CLOSE_SIDEBAR]:e=>{e.student=null
return e}},{range:0,student:null})
var ze=Object(a["combineReducers"])({apiUrl:ge(),jwt:ge(),studentCache:Ee,isInitialDataLoading:we,isStudentDetailsLoading:Te,errors:Ne,ranges:ke,assignment:Me,rule:Ie,enrolled:De,sidebarTrigger:Ae,showDetails:Je,selectedPath:xe})
const Ce=Object(a["applyMiddleware"])(oe["default"])(a["createStore"])
function Be(e){return Ce(ze,e)}var Pe=Be
const Le={init:(e,t)=>{const n=window.ENV
if(null!=e&&n.CONDITIONAL_RELEASE_SERVICE_ENABLED&&null!=n.CONDITIONAL_RELEASE_ENV.rule){const r=n.CONDITIONAL_RELEASE_ENV,s=r.assignment,i=r.jwt,o=r.stats_url
const d=document.createElement("div")
d.setAttribute("id","crs-details")
t.appendChild(d)
s.submission_types=Array.isArray(s.submission_types)?s.submission_types:[s.submission_types]
const c={assignment:s,jwt:i,apiUrl:o}
const l=Pe(c)
const u=Object(a["bindActionCreators"])(ye,l.dispatch)
const p=new ie(l,u)
p.renderGraphs(e)
p.renderDetails(d)
u.loadInitialData()
return p}}}
t["default"]=Le},HsON:function(e,t,n){"use strict"
n.d(t,"a",(function(){return g}))
var a=n("VTBJ")
var r=n("1OyB")
var s=n("vuIU")
var i=n("md7G")
var o=n("foSv")
var d=n("Ji7U")
var c=n("q1tI")
var l=n.n(c)
var u=n("hPGw")
var p=l.a.createElement("path",{d:"M1225.982 926.244c27.296 18.796 27.3 49.268 0 68.067l-509.835 351.074c-27.297 18.796-49.425 7.18-49.425-25.96V601.13c0-33.133 22.125-44.758 49.425-25.96l509.835 351.075z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var g=function(e){Object(d["a"])(t,e)
function t(){Object(r["a"])(this,t)
return Object(i["a"])(this,Object(o["a"])(t).apply(this,arguments))}Object(s["a"])(t,[{key:"render",value:function(){return l.a.createElement(u["a"],Object.assign({},this.props,{name:"IconMiniArrowEnd",viewBox:"0 0 1920 1920",bidirectional:true}),p)}}])
t.displayName="IconMiniArrowEndSolid"
return t}(c["Component"])
g.glyphName="mini-arrow-end"
g.variant="Solid"
g.propTypes=Object(a["a"])({},u["a"].propTypes)},KIj7:function(e,t,n){"use strict"
var a=n("rePB")
var r=n("VTBJ")
var s=n("1OyB")
var i=n("vuIU")
var o=n("md7G")
var d=n("foSv")
var c=n("Ji7U")
var l=n("q1tI")
var u=n.n(l)
var p=n("17x9")
var g=n.n(p)
var _=n("TSYQ")
var b=n.n(_)
var v=n("Xx/m")
var m=n("rf+m")
var h=n("y2yB")
var f=n("5nFh")
var S=n("J2CL")
var O=n("cClk")
var y=n("jtGx")
var j=n("/UXv")
var E=n("oXx0")
function w(e){var t=e.colors,n=e.spacing,a=e.borders,r=e.typography
return{fontFamily:r.fontFamily,fontWeight:r.fontWeightNormal,lineHeight:r.lineHeight,textColor:t.textDarkest,fontSizeSmall:r.fontSizeSmall,fontSizeMedium:r.fontSizeMedium,fontSizeLarge:r.fontSizeLarge,smallIconSize:"0.5rem",mediumIconSize:"0.75rem",largeIconSize:"1rem",iconMargin:n.xxSmall,iconColor:t.textDarkest,togglePadding:n.xxSmall,toggleBorderRadius:a.radiusMedium,toggleBorderWidth:a.widthMedium,toggleBorderStyle:a.style,toggleFocusBorderColor:t.borderBrand,filledBackgroundColor:t.backgroundLight,filledBorderWidth:a.widthSmall,filledBorderStyle:a.style,filledBorderColor:t.borderMedium,filledBorderRadius:a.radiusMedium,filledPadding:n.small}}w["canvas"]=function(e){return{toggleFocusBorderColor:e["ic-brand-primary"],iconColor:e["ic-brand-font-color-dark"],textColor:e["ic-brand-font-color-dark"]}}
n.d(t,"a",(function(){return A}))
var T,N,k,M,I
var D={componentId:"MlJlv",template:function(e){return"\n\n.MlJlv_bGBk{font-family:".concat(e.fontFamily||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";line-height:").concat(e.lineHeight||"inherit","}\n\n.MlJlv_doqw .MlJlv_ebWM,.MlJlv_doqw .MlJlv_cjSw{font-size:").concat(e.fontSizeSmall||"inherit","}\n\n.MlJlv_doqw .MlJlv_dnnz{font-size:").concat(e.smallIconSize||"inherit","}\n\n.MlJlv_doqw .MlJlv_dUEG{-webkit-padding-end:0;-webkit-padding-start:calc(").concat(e.smallIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-inline-end:0;padding-inline-start:calc(").concat(e.smallIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n[dir=ltr] .MlJlv_doqw .MlJlv_dUEG{padding-left:calc(").concat(e.smallIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-right:0}\n\n[dir=rtl] .MlJlv_doqw .MlJlv_dUEG{padding-left:0;padding-right:calc(").concat(e.smallIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n.MlJlv_ycrn .MlJlv_ebWM,.MlJlv_ycrn .MlJlv_cjSw{font-size:").concat(e.fontSizeMedium||"inherit","}\n\n.MlJlv_ycrn .MlJlv_dnnz{font-size:").concat(e.mediumIconSize||"inherit","}\n\n.MlJlv_ycrn .MlJlv_dUEG{-webkit-padding-end:0;-webkit-padding-start:calc(").concat(e.mediumIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-inline-end:0;padding-inline-start:calc(").concat(e.mediumIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n[dir=ltr] .MlJlv_ycrn .MlJlv_dUEG{padding-left:calc(").concat(e.mediumIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-right:0}\n\n[dir=rtl] .MlJlv_ycrn .MlJlv_dUEG{padding-left:0;padding-right:calc(").concat(e.mediumIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n.MlJlv_cMDj .MlJlv_ebWM,.MlJlv_cMDj .MlJlv_cjSw{font-size:").concat(e.fontSizeLarge||"inherit","}\n\n.MlJlv_cMDj .MlJlv_dnnz{font-size:").concat(e.largeIconSize||"inherit","}\n\n.MlJlv_cMDj .MlJlv_dUEG{-webkit-padding-end:0;-webkit-padding-start:calc(").concat(e.largeIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-inline-end:0;padding-inline-start:calc(").concat(e.largeIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n[dir=ltr] .MlJlv_cMDj .MlJlv_dUEG{padding-left:calc(").concat(e.largeIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-right:0}\n\n[dir=rtl] .MlJlv_cMDj .MlJlv_dUEG{padding-left:0;padding-right:calc(").concat(e.largeIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n.MlJlv_cjSw{-moz-appearance:none;-moz-user-select:none;-ms-user-select:none;-webkit-appearance:none;-webkit-user-select:none;appearance:none;background:transparent;border:none;box-sizing:border-box;color:").concat(e.textColor||"inherit",";cursor:pointer;font-family:").concat(e.fontFamily||"inherit",";margin:0;outline:none;overflow:visible;padding:0;position:relative;text-decoration:none;touch-action:manipulation;user-select:none}\n\n.MlJlv_cjSw::-moz-focus-inner{margin:0;padding:0}\n\n.MlJlv_cjSw:before{border:").concat(e.toggleBorderWidth||"inherit"," ").concat(e.toggleBorderStyle||"inherit"," ").concat(e.toggleFocusBorderColor||"inherit",";border-radius:calc(").concat(e.toggleBorderRadius||"inherit",'*1.5);bottom:-0.375rem;content:"";left:-0.375rem;opacity:0;pointer-events:none;position:absolute;right:-0.375rem;top:-0.375rem}\n\n.MlJlv_cjSw:focus:before{opacity:1}\n\n.MlJlv_cjSw:active,.MlJlv_cjSw:focus,.MlJlv_cjSw:hover{color:').concat(e.textColor||"inherit",";text-decoration:none}\n\n.MlJlv_cvfe{display:block;width:100%}\n\n.MlJlv_doNn{align-items:center;box-sizing:border-box;display:flex;position:relative;text-align:start}\n\n[dir=ltr] .MlJlv_doNn{text-align:left}\n\n[dir=rtl] .MlJlv_doNn{text-align:right}\n\n.MlJlv_dnnz{color:").concat(e.iconColor||"inherit","}\n\n.MlJlv_dnnz>svg{display:block}\n\n.MlJlv_fuNk{-webkit-margin-end:").concat(e.iconMargin||"inherit",";-webkit-margin-start:0;margin-inline-end:").concat(e.iconMargin||"inherit",";margin-inline-start:0}\n\n[dir=ltr] .MlJlv_fuNk{margin-left:0;margin-right:").concat(e.iconMargin||"inherit","}\n\n[dir=rtl] .MlJlv_fuNk{margin-left:").concat(e.iconMargin||"inherit",";margin-right:0}\n\n.MlJlv_fhZl{-webkit-margin-end:0;-webkit-margin-start:").concat(e.iconMargin||"inherit",";margin-inline-end:0;margin-inline-start:").concat(e.iconMargin||"inherit","}\n\n[dir=ltr] .MlJlv_fhZl{margin-left:").concat(e.iconMargin||"inherit",";margin-right:0}\n\n[dir=rtl] .MlJlv_fhZl{margin-left:0;margin-right:").concat(e.iconMargin||"inherit","}\n\n.MlJlv_btWg{flex-grow:1;min-width:0.0625rem}\n\n.MlJlv_fFWz .MlJlv_btWg{flex:1}\n\n.MlJlv_ebWM{box-sizing:border-box;color:").concat(e.textColor||"inherit",";padding-top:").concat(e.togglePadding||"inherit","}\n\n.MlJlv_eFWP{display:none}\n\n.MlJlv_cMGi{display:block}\n\n@keyframes MlJlv_dFUU{to{opacity:1}}\n\n.MlJlv_caGd{animation-duration:0.3s;animation-fill-mode:forwards;animation-name:MlJlv_dFUU;opacity:0.01}")},root:"MlJlv_bGBk",small:"MlJlv_doqw",details:"MlJlv_ebWM",toggle:"MlJlv_cjSw",icon:"MlJlv_dnnz",indentDetails:"MlJlv_dUEG",medium:"MlJlv_ycrn",large:"MlJlv_cMDj",fluidWidth:"MlJlv_cvfe",summary:"MlJlv_doNn",iconStart:"MlJlv_fuNk",iconEnd:"MlJlv_fhZl",summaryText:"MlJlv_btWg",positionIconAtEnd:"MlJlv_fFWz",hiddenDetails:"MlJlv_eFWP",expandedDetails:"MlJlv_cMGi",content:"MlJlv_caGd",contentAnimation:"MlJlv_dFUU"}
var A=(T=Object(E["a"])(),N=Object(S["themeable"])(w,D),T(k=N(k=(I=M=function(e){Object(c["a"])(t,e)
function t(){var e
var n
Object(s["a"])(this,t)
for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i]
n=Object(o["a"])(this,(e=Object(d["a"])(t)).call.apply(e,[this].concat(r)))
n.shouldAnimateContent=false
n.getButtonRef=function(e){return n._button=e}
return n}Object(i["a"])(t,[{key:"focus",value:function(){this._button.focus()}},{key:"componentDidMount",value:function(){this.shouldAnimateContent=true}},{key:"renderSummary",value:function(e){var t=this.props,n=t.summary,a=t.iconPosition
return u.a.createElement("span",{className:D.summary},"start"===a&&this.renderIcon(e),u.a.createElement("span",{className:D.summaryText},n),"end"===a&&this.renderIcon(e))}},{key:"renderToggle",value:function(e,n){var s=this.props,i=s.variant,o=s.fluidWidth
var d=Object(r["a"])({},Object(y["a"])(this.props,t.propTypes),{},e,{children:this.renderSummary()})
var c=this.renderSummary(n)
return"filled"===i?u.a.createElement(v["a"],Object.assign({},d,{fluidWidth:true,buttonRef:this.getButtonRef}),c):d.href?u.a.createElement("a",Object.assign({},d,{className:b()(D.toggle,D[i],Object(a["a"])({},D.fluidWidth,o)),ref:this.getButtonRef}),c):u.a.createElement("button",Object.assign({},d,{type:"button",className:b()(D.toggle,D[i],Object(a["a"])({},D.fluidWidth,o)),ref:this.getButtonRef}),c)}},{key:"renderIcon",value:function(e){var t
var n=this.props.iconPosition
var r=e?this.props.iconExpanded:this.props.icon
return this.props.children?u.a.createElement("span",{className:b()(D.icon,(t={},Object(a["a"])(t,D.iconStart,"start"===n),Object(a["a"])(t,D.iconEnd,"end"===n),t))},u.a.createElement(r,null)):null}},{key:"renderDetails",value:function(e,t){var n
var r=this.props,s=r.children,i=r.size,o=r.iconPosition,d=r.fluidWidth
return u.a.createElement("div",Object.assign({},t,{className:b()(D.details,(n={},Object(a["a"])(n,D[i],i),Object(a["a"])(n,D.hiddenDetails,!e),Object(a["a"])(n,D.expandedDetails,e),Object(a["a"])(n,D.indentDetails,"start"===o&&!d),n))}),s&&e&&this.renderContent())}},{key:"renderContent",value:function(){return u.a.createElement("div",{className:b()(Object(a["a"])({},D.content,this.shouldAnimateContent))},this.props.children)}},{key:"render",value:function(){var e,t=this
var n=this.props,r=n.variant,s=n.iconPosition,i=n.fluidWidth
var o="end"===s&&("filled"===r||i)
var d=(e={},Object(a["a"])(e,D.root,true),Object(a["a"])(e,D[this.props.size],true),Object(a["a"])(e,D.positionIconAtEnd,o),e)
return u.a.createElement(f["a"],Object(y["c"])(this.props,f["a"].propTypes),(function(e){var n=e.expanded,a=e.getToggleProps,r=e.getDetailsProps
return u.a.createElement("div",{className:b()(d)},t.renderToggle(a(),n),t.renderDetails(n,r()))}))}},{key:"focused",get:function(){return Object(j["a"])(this._button)}}])
t.displayName="ToggleDetails"
return t}(l["Component"]),M.propTypes={variant:g.a.oneOf(["default","filled"]),summary:g.a.node.isRequired,expanded:Object(O["a"])(g.a.bool,"onToggle","defaultExpanded"),defaultExpanded:g.a.bool,onToggle:g.a.func,icon:g.a.func,iconExpanded:g.a.func,iconPosition:g.a.oneOf(["start","end"]),fluidWidth:g.a.bool,children:g.a.node,size:g.a.oneOf(["small","medium","large"])},M.defaultProps={variant:"default",size:"medium",fluidWidth:false,icon:m["a"],iconExpanded:h["a"],iconPosition:"start",defaultExpanded:false,onToggle:function(e,t){},children:null,expanded:void 0},I))||k)||k)},MdYG:function(e,t,n){"use strict"
var a=n("pQTu")
var r=n("m0r6")
Object(r["a"])(JSON.parse('{"de":{"gpa_scale_6710e2ee":"GPA-Skala","letter_grade_f00fedc4":"Buchstaben-Note","other_ddacb37d":"sonstige","percent_448ea947":"Prozent","points_bceb5005":"Punkte"},"hu":{"gpa_scale_6710e2ee":"GPA skála","letter_grade_f00fedc4":"Betű alapú érdemjegy ","other_ddacb37d":"Egyéb","percent_448ea947":"százalék","points_bceb5005":"pontszám"}}'))
n("jQeR")
n("0sPK")
var s=a["default"].scoped("cyoe_assignment_sidebar_grading_types")
const i={points:{get label(){return s.t("points")},key:"points"},percent:{get label(){return s.t("percent")},key:"percent"},letter_grade:{get label(){return s.t("letter grade")},key:"letter_grade"},gpa_scale:{get label(){return s.t("GPA scale")},key:"gpa_scale"},other:{get label(){return s.t("other")},key:"other"}}
var o=i
Object(r["a"])(JSON.parse('{"de":{"score_pts_adcb1af3":"%{score} Pkte."},"hu":{"score_pts_adcb1af3":"%{score} pont"}}'))
var d=a["default"].scoped("cyoe_assignment_sidebar_score")
var c=n("HbFp")
n.d(t,"b",(function(){return _}))
n.d(t,"a",(function(){return f}))
const l=e=>{const t=c["a"].parse(e)
return!isNaN(t)&&isFinite(t)}
const u=e=>!!e&&!!e.grading_scheme
const p=e=>{const t=e?e.grading_type:o.percent.key
if((t===o.letter_grade.key||t===o.gpa_scale.key)&&!u(e))return o.percent.key
return t}
const g=(e,t)=>{const n=p(t)
return n===o.points.key?v(e,t):n===o.letter_grade.key||n===o.gpa_scale.key?m(e,t):h(e)}
const _=(e,t,n)=>{e||(e=n?"1":"0")
return b(g(e,t),t)}
const b=(e,t)=>{const n=p(t)
return n===o.points.key?d.t("%{score} pts",{score:d.n(e,{precision:2,strip_insignificant_zeros:true})}):n===o.letter_grade.key||n===o.gpa_scale.key?e:d.n(e,{precision:2,percentage:true,strip_insignificant_zeros:true})}
const v=(e,t)=>{if(!l(e))return e
if(0===e)return"0"
const n=c["a"].parse(e)
const a=Number(t.points_possible)||100
return parseFloat((n*a).toFixed(2))}
const m=(e,t)=>{if(""===e)return""
const n=c["a"].parse(e)
const a={letter:null,score:-Infinity}
for(const e in t.grading_scheme){const r=c["a"].parse(t.grading_scheme[e])
if(r<=n&&r>a.score||0===r&&r>n){a.score=r
a.letter=e}}return a.letter?a.letter:n}
const h=e=>{if(!l(e))return e
return Math.floor(100*e)}
const f=(e,t)=>{if("string"===typeof e&&t.grading_type!==o.letter_grade.key&&t.grading_type!==o.gpa_scale.key){const n=c["a"].parse(e.replace(/%$/,""))
if(!isNaN(n))return b(n,t)}return e}},"Pm+R":function(e,t,n){"use strict"
var a=n("GLiE")
var r=n.n(a)
var s=n("pQTu")
var i=n("m0r6")
Object(i["a"])(JSON.parse('{"de":{"assignments_1e02582c":"Aufgaben","discussions_a5f96392":"Diskussionen","other_1c6d9c79":"Sonstige","quizzes_7e598f57":"Quizze","wiki_6603e81b":"Wiki"},"hu":{"assignments_1e02582c":"Feladatok","discussions_a5f96392":"Fórumok","other_1c6d9c79":"Egyéb","quizzes_7e598f57":"Kvízek","wiki_6603e81b":"Wiki"}}'))
n("jQeR")
n("0sPK")
var o=s["default"].scoped("assignment_categories")
const d={label:o.t("Other"),id:"other",submissionTypes:[""]}
const c={list:[{label:o.t("Assignments"),id:"assignment",contentTypeClass:"assignment",submissionTypes:["online_upload","online_text_entry","online_url","on_paper","external_tool","not_graded","media_recording","none"]},{label:o.t("Quizzes"),id:"quiz",contentTypeClass:"quiz",submissionTypes:["online_quiz"]},{label:o.t("Discussions"),id:"discussion",contentTypeClass:"discussion_topic",submissionTypes:["discussion_topic"]},{label:o.t("Wiki"),id:"document",contentTypeClass:"wiki_page",submissionTypes:["wiki_page"]},d]}
c.getCategory=e=>{const t=r.a.find(c.list,t=>e.submission_types.length&&r.a.find(e.submission_types,e=>-1!==t.submissionTypes.indexOf(e)))
return t||c.OTHER}
t["a"]=c},SLVX:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
function a(e){var t
var n=e.Symbol
if("function"===typeof n)if(n.observable)t=n.observable
else{t=n("observable")
n.observable=t}else t="@@observable"
return t}},bCCX:function(e,t,n){"use strict"
n.r(t);(function(e,a){var r=n("SLVX")
var s
if("undefined"!==typeof self)s=self
else if("undefined"!==typeof window)s=window
else if("undefined"!==typeof e)s=e
else{s=a}var i=Object(r["a"])(s)
t["default"]=i}).call(this,n("yLpj"),n("3UD+")(e))},y2yB:function(e,t,n){"use strict"
n.d(t,"a",(function(){return g}))
var a=n("VTBJ")
var r=n("1OyB")
var s=n("vuIU")
var i=n("md7G")
var o=n("foSv")
var d=n("Ji7U")
var c=n("q1tI")
var l=n.n(c)
var u=n("hPGw")
var p=l.a.createElement("path",{d:"M.08 568.062l176.13-176.13 783.988 783.865 783.74-783.864 176.13 176.13-959.87 960.118z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var g=function(e){Object(d["a"])(t,e)
function t(){Object(r["a"])(this,t)
return Object(i["a"])(this,Object(o["a"])(t).apply(this,arguments))}Object(s["a"])(t,[{key:"render",value:function(){return l.a.createElement(u["a"],Object.assign({},this.props,{name:"IconArrowOpenDown",viewBox:"0 0 1920 1920"}),p)}}])
t.displayName="IconArrowOpenDownSolid"
return t}(c["Component"])
g.glyphName="arrow-open-down"
g.variant="Solid"
g.propTypes=Object(a["a"])({},u["a"].propTypes)}}])

//# sourceMappingURL=102-c-2f03dfdbd5.js.map