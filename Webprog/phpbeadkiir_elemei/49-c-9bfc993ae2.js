(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[49],{"36Bh":function(e,t,i){"use strict"
var s=i("btHx")
var n=i("pLki")
var a=function(e,t){for(var i in t)r.call(t,i)&&(e[i]=t[i])
function s(){this.constructor=e}s.prototype=t.prototype
e.prototype=new s
e.__super__=t.prototype
return e},r={}.hasOwnProperty
t["a"]=function(e){a(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.model=n["a"]
return t}(s["a"])},B0dq:function(e,t,i){"use strict"
var s=i("FIFq")
var n=i.n(s)
var a=i("36Bh")
var r=i("btHx")
var o,l,c=function(e,t){for(var i in t)u.call(t,i)&&(e[i]=t[i])
function s(){this.constructor=e}s.prototype=t.prototype
e.prototype=new s
e.__super__=t.prototype
return e},u={}.hasOwnProperty
o=function(e){c(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.initialize=function(e){this.setUpOutcomesAndGroupsIfNeeded()
return t.__super__.initialize.apply(this,arguments)}
t.prototype.name=function(){return this.get("title")}
t.prototype.isAbbreviated=function(){return!this.has("description")}
t.prototype.setUrlTo=function(e){return this.url=function(){switch(e){case"add":case"move":return this.get("parent_outcome_group").subgroups_url
case"edit":case"delete":return this.get("url")}}.call(this)}
t.prototype.setUpOutcomesAndGroupsIfNeeded=function(){this.outcomeGroups||(this.outcomeGroups=new l([],{parentGroup:this}))
if(!this.outcomes)return this.outcomes=new a["a"]([])}
t.prototype.getSubtrees=function(){return this.outcomeGroups}
t.prototype.getItems=function(){return this.outcomes}
t.prototype.expand=function(e,t){var i,s,n,a
null==e&&(e=false)
null==t&&(t={})
this.isExpanded=true
this.trigger("expanded")
if(this.expandDfd||e)return $.when()
this.isExpanding=true
this.trigger("beginexpanding")
this.expandDfd=$.Deferred().done((r=this,function(){r.isExpanding=false
return r.trigger("endexpanding")}))
var r
0!==this.get("outcomeGroups_count")&&(i=null!=(n=this.outcomeGroups)?n.fetch():void 0)
0===this.get("outcomes_count")||t.onlyShowSubtrees||(s=null!=(a=this.outcomes)?a.fetch():void 0)
return $.when(i,s).done(this.expandDfd.resolve)}
t.prototype.collapse=function(){this.isExpanded=false
return this.trigger("collapsed")}
t.prototype.toggle=function(e){return this.isExpanded?this.collapse():this.expand(false,e)}
return t}(n.a.Model)
l=function(e){c(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.optionProperty("parentGroup")
t.prototype.model=o
t.prototype.url=function(){return this.parentGroup.attributes.subgroups_url}
return t}(r["a"])
t["a"]=o},GCM4:function(e,t,i){"use strict"
var s=i("pQTu")
var n=i("m0r6")
Object(n["a"])(JSON.parse('{"de":{"model_is_already_located_in_newgroup_e5cea361":"%{model} befindet sich bereits in %{newGroup}","outcomesSidebarView":{"titles":{"find_outcomes":"Lernziele suchen"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"%{model} wurde erfolgreich in %{newGroup} verschoben."},"hu":{"model_is_already_located_in_newgroup_e5cea361":"%{model} már benne van ebben a csoportban: %{newGroup}","outcomesSidebarView":{"titles":{"find_outcomes":"Tanulási eredmény keresése"}},"successfully_moved_model_to_newgroup_f7b7aa5a":" %{model} sikeresen áthelyezve ide %{newGroup}"}}'))
i("jQeR")
i("0sPK")
var a=s["default"].scoped("outcomesSidebarView")
var r=i("ouhR")
var o=i.n(r)
var l=i("GLiE")
var c=i.n(l)
var u=i("FIFq")
var d=i.n(u)
var h=i("pLki")
var p=i("B0dq")
Object(n["a"])(JSON.parse('{"de":{"OutcomesDirectoryView":{"flash":{"error":"Ein Fehler ist aufgetreten. Bitte laden Sie die Seite erneut, und versuchen Sie es nochmal.","updateSuccess":"Aktualisierung erfolgreich"}},"loading_more_results_1d437202":"Weitere Ergebnisse laden"},"hu":{"OutcomesDirectoryView":{"flash":{"error":"Hiba történt! Kérjük, frissítse az oldalt, és próbálja újra!","updateSuccess":"A frissítés sikeres"}},"loading_more_results_1d437202":"További találatok betöltése"}}'))
var m=s["default"].scoped("OutcomesDirectoryView")
var _=i("5Ky4")
var f=i("ahuC")
var g=i("36Bh")
var v=i("btHx")
var b=function(e,t){for(var i in t)y.call(t,i)&&(e[i]=t[i])
function s(){this.constructor=e}s.prototype=t.prototype
e.prototype=new s
e.__super__=t.prototype
return e},y={}.hasOwnProperty
var w=function(e){b(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.model=p["a"]
t.prototype.parse=function(e){t.__super__.parse.apply(this,arguments)
return c.a.reject(e,(function(e){return e.id===ENV.COMMON_CORE_GROUP_ID}))}
return t}(v["a"])
var k=i("VTBJ")
i("VHne")
class x extends d.a.View{static initClass(){this.prototype.tagName="li"
this.prototype.attributes={tabindex:-1}
this.prototype.events={click:"triggerSelect",keydown:"onKeydown",focus:"onFocus"}
this.prototype.keyCodes={13:"Action",32:"Action",37:"LeftArrow",38:"UpArrow",39:"RightArrow",40:"DownArrow"}}initialize(e){super.initialize(...arguments)
this.readOnly=e.readOnly
this.dir=e.dir
return this.attachEvents()}attachEvents(){this.model.on("change:title",this.updateTitle,this)
this.model.on("remove",this.remove,this)
return this.model.on("select",this.triggerSelect,this)}triggerSelect(e){e&&e.preventDefault()
this.trigger("select",this)
return this.select()}onKeydown(e){const t=o()(e.target)
const i="on".concat(this.keyCodes[e.keyCode],"Key")
if(this[i])return this[i].call(this,e,t)&&e.preventDefault()}onUpArrowKey(e,t){return t.prev().focus()}onDownArrowKey(e,t){return t.next().focus()}onLeftArrowKey(e,t){if(!(t.parent().prev().length>0))return
return this.$el.parent().prev().find("[aria-expanded=true]").click().attr("aria-expanded",false).attr("tabindex",0).focus()}onActionKey(e,t){return t.hasClass("outcome-group")?this.onRightArrowKey(e,t):this.triggerSelect()}onFocus(e){const t=o()(e.target)
t.parents(".wrapper:first").find("[tabindex=0]").attr("tabindex",-1)
return t.attr("tabindex",0)}makeFocusable(){this.$el.parent().find("[tabindex=0]").attr("tabindex",-1)
return this.$el.attr("tabindex",0)}select(){this.makeFocusable()
return this.$el.addClass("selected")}unSelect(){return this.$el.removeClass("selected")}remove(){this.model.off("change:title",this.updateTitle,this)
this.model.off("remove",this.remove,this)
this.model.off("select",this.triggerSelect,this)
return super.remove(...arguments)}updateTitle(){this.$("span").text(this.model.get("title"))
return this.$("a").attr("title",Object(_["a"])(this.model.get("title")))}render(){this.readOnly||this.initDraggable()
this.$el.data("view",this)
return this}initDraggable(){return this.$el.draggable({scope:"outcomes",containment:".outcomes-sidebar",opacity:.7,helper:"clone",revert:"invalid",scroll:false,drag(e,t){const i=o()(this).data("draggable")
const s=i.options
let n=false
const a=i.relative_container
const r=a.offset().left
const l=a.width()
e.pageX-r<s.scrollSensitivity?a[0].scrollLeft=n=a[0].scrollLeft-s.scrollSpeed:r+l-e.pageX<s.scrollSensitivity&&(a[0].scrollLeft=n=a[0].scrollLeft+s.scrollSpeed)
if(false!==n&&o.a.ui.ddmanager&&!s.dropBehaviour)return o.a.ui.ddmanager.prepareOffsets(i,e)}})}}x.initClass()
i("vpJZ")
class O extends x{static initClass(){this.prototype.className="outcome-group"
this.prototype.attributes=Object(k["a"])({},this.attributes,{"aria-expanded":false})}onRightArrowKey(e,t){t.attr("aria-expanded",true).attr("tabindex",-1)
this.triggerSelect()
return setTimeout(()=>t.parent().next().find("li[tabindex=0]").focus(),1e3)}initDroppable(){return this.$el.droppable({scope:"outcomes",hoverClass:"droppable",greedy:true,drop:(e,t)=>{const i=t.draggable.data("view"),s=i.model
const n=s instanceof h["a"]?s.outcomeGroup:s
if(n.id===this.model.id)return
const a=this.dir.sidebar._findLastDir()
this.triggerSelect()
const r=new o.a.Deferred
this.dir.$el.disableWhileLoading(r)
return this.dir.sidebar.dirForGroup(this.model).promise().done(e=>e.moveModelHere(s,a).done(()=>r.resolve()))}})}render(){this.$el.attr("data-id",this.model.get("id"))
this.$el.html('<a href="#" class="ellipsis" title="'.concat(Object(_["a"])(this.model.get("title")),'">\n<i class="icon-folder"></i>\n<span>').concat(Object(_["a"])(this.model.get("title")),"</span>\n</a>"))
this.initDroppable()
return super.render(...arguments)}}O.initClass()
class z extends x{render(){this.$el.attr("data-id",this.model.get("id"))
this.$el.html('<a href="#" class="ellipsis" title="'.concat(Object(_["a"])(this.model.get("title")),'">\n<i class="icon-outcomes" aria-hidden="true"></i>\n<span>').concat(Object(_["a"])(this.model.get("title")),"</span>\n</a>"))
return super.render(...arguments)}}z.prototype.className="outcome-link"
var S=i("teYS")
i("SJWK")
i("MWZS")
class C extends f["a"]{static initClass(){this.prototype.tagName="ul"
this.prototype.className="outcome-level"}initialize(e){this.inFindDialog=e.inFindDialog
this.readOnly=e.readOnly
this.parent=e.parent
const t=e.outcomeGroup.attributes.title
const i="Listing of child outcomes for ".concat(t)
this.$el.attr("aria-label",i)
this.needsReset=false
if(this.outcomeGroup=e.outcomeGroup){if(!this.groups){this.groups=new w
this.groups.url=this.outcomeGroup.get("subgroups_url")}this.groups.on("add reset",this.reset,this)
this.groups.on("remove",this.removeGroup,this)
this.groups.on("fetched:last",this.fetchOutcomes,this)
if(!this.outcomes){this.outcomes=new g["a"]
this.outcomes.url=this.outcomeGroup.get("outcomes_url")+"?outcome_style=full"}this.outcomes.on("add remove reset",this.reset,this)}this.collection=this.groups
this.paginationScrollContainer=this.$el
super.initialize(e)
this.loadDfd=o.a.Deferred()
if(this.outcomeGroup){let e
this.$el.disableWhileLoading(e=this.groups.fetch())}if(e.selectFirstItem)return this.loadDfd.done(this.selectFirstOutcome.bind(this))}initDroppable(){return this.$el.droppable({scope:"outcomes",hoverClass:"outcome-level-hover",drop:(e,t)=>{if(t.draggable.parent().get(0)===e.target)return
const i=t.draggable.data("view"),s=i.model
return this.moveModelHere(s)}})}promise(){return this.loadDfd.promise()}moveModelHere(e,t){let i
e.collection.remove(e)
if(e instanceof p["a"]){this.groups.add(e)
i=this.moveGroup(e,this.outcomeGroup.toJSON())}else{this.outcomes.add(e)
i=this.changeLink(e,this.outcomeGroup.toJSON())}return i.done(()=>{e.trigger("select")
if(t)return t.needsReset=true})}changeLink(e,t){const i=new o.a.Deferred
this.$el.disableWhileLoading(i)
function s(e,t){i.reject()
return o.a.flashError(m.t("flash.error","An error occurred. Please refresh the page and try again."))}const n=e.outcomeGroup
e.outcomeGroup=t
e.setUrlTo("add")
o.a.ajaxJSON(e.url,"POST",{outcome_id:e.get("id"),move_from:n.id}).done(t=>{e.set(e.parse(t))
o.a.flashMessage(m.t("flash.updateSuccess","Update successful"))
return i.resolve()}).fail(s)
return i}moveGroup(e,t){const i=new o.a.Deferred
function s(e,t){i.reject()
return o.a.flashError(m.t("flash.error","An error occurred. Please refresh the page and try again."))}e.setUrlTo("edit")
o.a.ajaxJSON(e.url,"PUT",{parent_outcome_group_id:t.id}).done(t=>{e.set(e.parse(t))
o.a.flashMessage(m.t("flash.updateSuccess","Update successful"))
return i.resolve()}).fail(s)
this.$el.disableWhileLoading(i)
return i}makeFocusable(){if(this.$el.find("[tabindex=0]").length>0)return
if(this.views().length>0)return this.views()[0].makeFocusable()}selectFirstOutcome(){o()("ul.outcome-level li:first").click()}paginationLoaderTemplate(){return"<li><span class='loading-more'> ".concat(Object(_["a"])(m.t("Loading more results")),"</span></li>")}showPaginationLoader(){null==this.$paginationLoader&&(this.$paginationLoader=o()(this.paginationLoaderTemplate()))
return this.$el.append(this.$paginationLoader)}fetchOutcomes(){this.collection=this.outcomes
this.bindPaginationEvents()
this.outcomes.fetch({success:()=>this.loadDfd.resolve(this)})
this.startPaginationListener()
return this.showPaginationLoader()}triggerSelect(e){this.clearSelection()
this.selectedModel=e.model
e.select()
return this.trigger("select",this,e.model)}views(){if(this._views&&!c.a.isEmpty(this._views))return this._views
this._views=this._viewsFor(this.groups.models,O).concat(this._viewsFor(this.outcomes.models,z))
for(const e of this._views){e.on("select",this.triggerSelect.bind(this))
e.model===this.selectedModel&&e.select()}return this._views}reset(){this.needsReset=false
this._clearViews()
return this.render()}removeGroup(e){this.reset()
if(e===M(c.a.last(this.sidebar.directories),e=>e.outcomeGroup))return this.trigger("select",this,null)}remove(){this._clearViews()
this.selectedModel=null
return super.remove(...arguments)}clearSelection(e){null!=e&&e.preventDefault()
this.prevSelectedModel=this.selectedModel
this.selectedModel=null
return c.a.each(this.views(),e=>e.unSelect())}clearOutcomeSelection(){if(this.selectedModel instanceof Outcome)return this.clearSelection()}render(){this.$el.empty()
if(this.needsReset)return this.reset()
c.a.each(this.views(),e=>this.$el.append(e.render().el))
this.inFindDialog&&this.handleWarning()
this.readOnly||this.initDroppable()
this.startPaginationListener()
this.$("li:first").attr("tabindex",0)
this.$el.data("view",this)
return this}handleWarning(){return!this.parent&&c.a.isEmpty(this.groups.models)&&c.a.isEmpty(this.outcomes.models)&&c.a.isEmpty(this.views())?Object(S["publish"])("renderNoOutcomeWarning"):Object(S["publish"])("clearNoOutcomeWarning")}_viewsFor(e,t){return c.a.map(e,e=>new t({model:e,readOnly:this.readOnly,dir:this}))}_clearViews(){c.a.each(this._views,e=>e.remove())
return this._views=null}}C.initClass()
function M(e,t){return"undefined"!==typeof e&&null!==e?t(e):void 0}Object(n["a"])(JSON.parse('{"de":{"outcomesFindDirectoryVew":{"account_standards":"Kontostandards","account_standards_description":"Links sehen Sie die Standards, die Ihre Institution zur Verwendung in Ihren Kursen erstellt hat.","common_core":"Bildungsstandards","common_core_description":"Auf der linken Seite ist die bekannte Ergebnisordnerstruktur für jede Gruppe staatlicher Bildungsstandards. Dies erlaubt Ihnen, mühelos jeden beliebigen Bildungsstandards für die Bewertung Ihres Kurses hinzuzuziehen.","state_standards":"Bundesstaatsstandards","state_standards_description":"Links sehen Sie einen Ordner für jeden Bundesstaat mit seinen aktualisierten Standards. Auf diese Weise können Sie problemlos Bundesstaatsstandards für die Benotung in Ihrem Kurs hinzuziehen."}},"hu":{"outcomesFindDirectoryVew":{"account_standards":"Fiókszabványok","account_standards_description":"Balra találja azon szabványokat, amelyeket az intézménye hozott létre Önnek a kurzusaiban való használatra.","common_core":"Közös törzsanyagszabvány","common_core_description":"Bal oldalon a már ismerős eredmények mappaszerkezet található a közös állami alapszabványok minden csoportjához. Ennek segítségével könnyedén hozzáadhatja a kurzushoz a közös alapszabványok bármelyikét.","state_standards":"Állami szabványok","state_standards_description":"Bal oldalon mappákat talál, amelyben az állami szabványok lettek feltöltve. Ezeket a saját kurzusában is felhasználhatja az értékelések során."}}}'))
var E=s["default"].scoped("outcomesFindDirectoryVew")
class D extends C{initialize(e){this.outcomes=new g["a"]
this.groups=new w
this.groups.url=ENV.ACCOUNT_CHAIN_URL
return super.initialize(e)}fetchOutcomes(){}}class I extends C{initialize(e){this.outcomes=new g["a"]
return super.initialize(...arguments)}fetchOutcomes(){}}class L extends C{initialize(e){let t,i,s
this.readOnly=true
const n=new p["a"]({dontImport:true,id:-1,title:E.t("account_standards","Account Standards"),description:E.t("account_standards_description","To the left you'll notice the standards your institution has created for you to use in your courses."),directoryClass:D})
if(ENV.STATE_STANDARDS_URL){s=new p["a"]({dontImport:true,title:E.t("state_standards","State Standards"),description:E.t("state_standards_description","To the left you'll see a folder for each state with their updated state standards. This allows for you to painlessly include state standards for grading within your course."),directoryClass:I})
s.url=ENV.STATE_STANDARDS_URL}if(ENV.COMMON_CORE_GROUP_URL){t=new p["a"]({dontImport:true,title:E.t("common_core","Common Core Standards"),description:E.t("common_core_description","To the left is the familiar outcomes folder structure for each grouping of the Common Core State Standards. This will allow you to effortlessly include any of the Common Core Standards for grading within your course.")})
t.url=ENV.COMMON_CORE_GROUP_URL}e.courseGroup&&(i=e.courseGroup)
this.outcomes=new g["a"]
this.groups=new w(c.a.compact([n,s,t,i]))
this.collection=this.groups
const a=(()=>{const e=[]
for(const i of c.a.compact([s,t])){i.on("change",this.revertTitle)
e.push(i.fetch())}return e})()
return this.$el.disableWhileLoading(o.a.when(...Array.from(a||[])).done(()=>setTimeout(()=>{this.reset()
return this.$el.find("[tabindex=0]:first").focus()})))}revertTitle(e){return e.set({title:e.previous("title"),description:e.previous("description")},{silent:true})}}i.d(t,"a",(function(){return N}))
let T
class N extends d.a.View{static initClass(){this.prototype.directoryWidth=200
this.prototype.entryHeight=30
this.prototype.events={"click .outcome-level":"clickOutcomeLevel"}}initialize(e){super.initialize(...arguments)
this.inFindDialog=e.inFindDialog
this.readOnly=e.readOnly
this.selectFirstItem=e.selectFirstItem
this.directories=[]
this.cachedDirectories={}
this.$sidebar=this.$el.parent()
this.$sidebar.width(this.directoryWidth);(this.rootOutcomeGroup=e.rootOutcomeGroup)?this.addDirFor(this.rootOutcomeGroup,true):this.addDir(e.directoryView)
return this.render()}clickOutcomeLevel(e){const t=e.target===e.currentTarget
if(!t)return
const i=o()(e.target).data("view")
return this.selectDir(i)}resetSidebar(){c.a.each(this.directories,e=>e.remove())
this.directories=[]
this.cachedDirectories={}
return this.addDirFor(this.rootOutcomeGroup,true)}addDirFor(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
let i
if(this.cachedDirectories[e.id])i=this.cachedDirectories[e.id]
else{const s=c.a.last(this.directories)
const n=e.get("directoryClass")||C
const a=c.a.indexOf(this.directories,this.selectedDir())
i=new n({outcomeGroup:e,parent:s,readOnly:this.readOnly,selectFirstItem:t&&this.selectFirstItem,inFindDialog:this.inFindDialog,directoryDepth:a+1})
this.firstDir=false}return this.addDir(i)}addDir(e){e.outcomeGroup&&(this.cachedDirectories[e.outcomeGroup.id]=e)
e.off("select")
e.on("select",this.selectDir,this)
e.sidebar=this
e.clearSelection()
this.directories.push(e)
this.updateSidebarWidth()
this.renderDir(e)
return e}addAndSelect(e){e instanceof h["a"]?e.outcomeGroup=this.selectedGroup().toJSON():e.set("parent_outcome_group",this.selectedGroup().toJSON())
const t=this._findLastDir(e=>!e.selectedModel||e.selectedModel instanceof h["a"])
e instanceof h["a"]?t.outcomes.add(e):t.groups.add(e)
this._scrollToDir(c.a.indexOf(this.directories,t),e)
return e.trigger("select")}selectDir(e,t){const i=e||this.directories[0]
i&&!t&&i.clearSelection()
const s=c.a.indexOf(this.directories,i)
const n=this.directories.splice(s+1,this.directories.length-(s+1))
c.a.each(n,e=>e.remove())
const a=t instanceof p["a"]&&!t.isNew()
a&&this.addDirFor(t)
this.updateSidebarWidth()
const r=a?s+1:s
this._scrollToDir(r,t)
let o=t
this.goingBack&&(o=i.parent?i.outcomeGroup:null)
return this.trigger("select",o,this.directories)}refreshSelection(e){const t=this.selectedDir()
if(e===t.selectedModel){t.clearSelection()
return e.trigger("select")}}selectedDir(){return this._findLastDir(e=>e.selectedModel)}selectedModel(){return P(this.selectedDir(),e=>e.selectedModel)}selectedGroup(){let e=null
this._findLastDir(t=>{if(t.selectedModel instanceof p["a"])return e=t.selectedModel})
return e||this.rootOutcomeGroup}clearOutcomeSelection(){return c.a.last(this.directories).clearOutcomeSelection()}goBack(){this.goingBack=true
if(this.selectedModel()instanceof p["a"])this.selectDir(this.selectedDir())
else{const e=c.a.indexOf(this.directories,this.selectedDir())
this.selectDir(this.directories[e-1])}this.selectedDir().makeFocusable()
return this.goingBack=false}updateSidebarWidth(){const e=1===this.directories.length?this.directoryWidth:2*this.directoryWidth
this.$el.css({width:this.directoryWidth*this.directories.length})
return this.$sidebar.animate({width:e})}renderDir(e){return this.$el.append(e.render().el)}render(){this.$el.empty()
c.a.each(this.directories,e=>this.renderDir(e))
return this}findDialog(e){if(T)T.updateSelection(this.selectedGroup())
else{T=new e({title:a.t("titles.find_outcomes","Find Outcomes"),selectedGroup:this.selectedGroup(),directoryView:new L({outcomeGroup:this.selectedGroup()})})
T.on("import",this.addAndSelect,this)}return T.show()}dirForGroup(e){return c.a.find(this.directories,t=>t.outcomeGroup===e)||this.addDirFor(e)}moveItem(e,t){let i
const s=e.get("parent_outcome_group")||e.outcomeGroup
const n=this.cachedDirectories[s.id]
const r=this.cachedDirectories[t.id]
if(s.id===t.id){o.a.flashError(a.t("%{model} is already located in %{newGroup}",{model:e.get("title"),newGroup:t.get("title")}))
return}i=e instanceof p["a"]?n.moveGroup(e,t.toJSON()):n.changeLink(e,t.toJSON())
return i.done(()=>{const s=e instanceof p["a"]?"groups":"outcomes"
if(r){i=r[s].fetch()
i.done(()=>r.needsReset=true)}n[s].fetch()
const l=n.parent
l&&this.selectDir(l,l.selectedModel)
e.trigger("finishedMoving")
o()(".selected:last").focus()
return setTimeout(()=>o.a.flashMessage(a.t("Successfully moved %{model} to %{newGroup}",{model:e.get("title"),newGroup:t.get("title")})),1500)})}_scrollToDir(e,t){const i=this.directoryWidth*(t instanceof h["a"]?e-1:e)
this.$sidebar.animate({scrollLeft:i},{duration:200})
const s=(this.entryHeight+1)*c.a.indexOf(this.directories[e].views(),c.a.find(this.directories[e].views(),e=>e.model===t))
return this.directories[e].$el.animate({scrollTop:s},{duration:200})}_findLastDir(e){return c.a.find(c.a.clone(this.directories).reverse(),e)||c.a.last(this.directories)}}N.initClass()
function P(e,t){return"undefined"!==typeof e&&null!==e?t(e):void 0}},SJWK:function(e,t,i){"use strict"
var s=i("ouhR")
var n=i.n(s)
i("9Duh")
i("vTtS")
i("ZV2x")
i("VHne")
n.a.widget("ui.droppable",{version:"@VERSION",widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var e=this.options,t=e.accept
this.isover=0
this.isout=1
this.accept=n.a.isFunction(t)?t:function(e){return e.is(t)}
this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}
n.a.ui.ddmanager.droppables[e.scope]=n.a.ui.ddmanager.droppables[e.scope]||[]
n.a.ui.ddmanager.droppables[e.scope].push(this)
e.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){var e=n.a.ui.ddmanager.droppables[this.options.scope]
for(var t=0;t<e.length;t++)e[t]==this&&e.splice(t,1)
this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(e,t){"accept"==e&&(this.accept=n.a.isFunction(t)?t:function(e){return e.is(t)})
n.a.Widget.prototype._setOption.apply(this,arguments)},_activate:function(e){var t=n.a.ui.ddmanager.current
this.options.activeClass&&this.element.addClass(this.options.activeClass)
t&&this._trigger("activate",e,this.ui(t))},_deactivate:function(e){var t=n.a.ui.ddmanager.current
this.options.activeClass&&this.element.removeClass(this.options.activeClass)
t&&this._trigger("deactivate",e,this.ui(t))},_over:function(e){var t=n.a.ui.ddmanager.current
if(!t||(t.currentItem||t.element)[0]==this.element[0])return
if(this.accept.call(this.element[0],t.currentItem||t.element)){this.options.hoverClass&&this.element.addClass(this.options.hoverClass)
this._trigger("over",e,this.ui(t))}},_out:function(e){var t=n.a.ui.ddmanager.current
if(!t||(t.currentItem||t.element)[0]==this.element[0])return
if(this.accept.call(this.element[0],t.currentItem||t.element)){this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)
this._trigger("out",e,this.ui(t))}},_drop:function(e,t){var i=t||n.a.ui.ddmanager.current
if(!i||(i.currentItem||i.element)[0]==this.element[0])return false
var s=false
this.element.find(":data(droppable)").not(".ui-draggable-dragging").each((function(){var e=n.a.data(this,"droppable")
if(e.options.greedy&&!e.options.disabled&&e.options.scope==i.options.scope&&e.accept.call(e.element[0],i.currentItem||i.element)&&n.a.ui.intersect(i,n.a.extend(e,{offset:e.element.offset()}),e.options.tolerance)){s=true
return false}}))
if(s)return false
if(this.accept.call(this.element[0],i.currentItem||i.element)){this.options.activeClass&&this.element.removeClass(this.options.activeClass)
this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)
this._trigger("drop",e,this.ui(i))
return this.element}return false},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}})
n.a.ui.intersect=function(e,t,i){if(!t.offset)return false
var s=(e.positionAbs||e.position.absolute).left,a=s+e.helperProportions.width,r=(e.positionAbs||e.position.absolute).top,o=r+e.helperProportions.height
var l=t.offset.left,c=l+t.proportions.width,u=t.offset.top,d=u+t.proportions.height
switch(i){case"fit":return l<=s&&a<=c&&u<=r&&o<=d
case"intersect":return l<s+e.helperProportions.width/2&&a-e.helperProportions.width/2<c&&u<r+e.helperProportions.height/2&&o-e.helperProportions.height/2<d
case"pointer":var h=(e.positionAbs||e.position.absolute).left+(e.clickOffset||e.offset.click).left,p=(e.positionAbs||e.position.absolute).top+(e.clickOffset||e.offset.click).top,m=n.a.ui.isOver(p,h,u,l,t.proportions.height,t.proportions.width)
return m
case"touch":return(r>=u&&r<=d||o>=u&&o<=d||r<u&&o>d)&&(s>=l&&s<=c||a>=l&&a<=c||s<l&&a>c)
default:return false}}
n.a.ui.ddmanager={current:null,droppables:{default:[]},prepareOffsets:function(e,t){var i=n.a.ui.ddmanager.droppables[e.options.scope]||[]
var s=t?t.type:null
var a=(e.currentItem||e.element).find(":data(droppable)").andSelf()
e:for(var r=0;r<i.length;r++){if(i[r].options.disabled||e&&!i[r].accept.call(i[r].element[0],e.currentItem||e.element))continue
for(var o=0;o<a.length;o++)if(a[o]==i[r].element[0]){i[r].proportions.height=0
continue e}i[r].visible="none"!=i[r].element.css("display")
if(!i[r].visible)continue
"mousedown"==s&&i[r]._activate.call(i[r],t)
i[r].offset=i[r].element.offset()
i[r].proportions={width:i[r].element[0].offsetWidth,height:i[r].element[0].offsetHeight}}},drop:function(e,t){var i=false
n.a.each(n.a.ui.ddmanager.droppables[e.options.scope]||[],(function(){if(!this.options)return
!this.options.disabled&&this.visible&&n.a.ui.intersect(e,this,this.options.tolerance)&&(i=this._drop.call(this,t)||i)
if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)){this.isout=1
this.isover=0
this._deactivate.call(this,t)}}))
return i},dragStart:function(e,t){e.element.parentsUntil("body").bind("scroll.droppable",(function(){e.options.refreshPositions||n.a.ui.ddmanager.prepareOffsets(e,t)}))},drag:function(e,t){e.options.refreshPositions&&n.a.ui.ddmanager.prepareOffsets(e,t)
n.a.each(n.a.ui.ddmanager.droppables[e.options.scope]||[],(function(){if(this.options.disabled||this.greedyChild||!this.visible)return
var i=n.a.ui.intersect(e,this,this.options.tolerance)
var s=i||1!=this.isover?i&&0==this.isover?"isover":null:"isout"
if(!s)return
var a
if(this.options.greedy){var r=this.element.parents(":data(droppable):eq(0)")
if(r.length){a=n.a.data(r[0],"droppable")
a.greedyChild="isover"==s?1:0}}if(a&&"isover"==s){a["isover"]=0
a["isout"]=1
a._out.call(a,t)}this[s]=1
this["isout"==s?"isover":"isout"]=0
this["isover"==s?"_over":"_out"].call(this,t)
if(a&&"isout"==s){a["isout"]=0
a["isover"]=1
a._over.call(a,t)}}))},dragStop:function(e,t){e.element.parentsUntil("body").unbind("scroll.droppable")
e.options.refreshPositions||n.a.ui.ddmanager.prepareOffsets(e,t)}}},ahuC:function(e,t,i){"use strict"
var s=i("GLiE")
var n=i.n(s)
var a=i("ouhR")
var r=i.n(a)
var o=i("FIFq")
var l=i.n(o)
var c=i("3O+N")
var u=i.n(c)
var d=i("pQTu")
var h=i("m0r6")
Object(h["a"])(JSON.parse('{"de":{"paginated_view":{"loading_more_results":"Weitere Ergebnisse laden"}},"hu":{"paginated_view":{"loading_more_results":"További találatok betöltése"}}}'))
i("jQeR")
i("0sPK")
d["default"].scoped("paginated_view")
i("DfGn")
var p=i("EvX+")
var m=u.a.default
var _=m.template,f=m.templates=m.templates||{}
var g="PaginatedView"
f[g]=_((function(e,t,i,s,n){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
n=n||{}
var a,r,o="",l=i.helperMissing,c=this.escapeExpression
o+='<div class="paginatedView-loading" role="alert" aria-live="assertive">\n    <span>'+c((a=i.t||t&&t.t,r={hash:{scope:"paginated_view"},data:n},a?a.call(t,"loading_more_results","Loading more results",r):l.call(t,"t","loading_more_results","Loading more results",r)))+"</span>\n</div>\n"
return o}))
p["a"].loadStylesheet("jst/PaginatedView",{new_styles_normal_contrast:{combinedChecksum:"bf30c3a7d1"},new_styles_high_contrast:{combinedChecksum:"bf30c3a7d1"},responsive_layout_normal_contrast:{combinedChecksum:"bf30c3a7d1"},responsive_layout_high_contrast:{combinedChecksum:"bf30c3a7d1"},new_styles_normal_contrast_rtl:{combinedChecksum:"bf30c3a7d1"},new_styles_high_contrast_rtl:{combinedChecksum:"bf30c3a7d1"},responsive_layout_normal_contrast_rtl:{combinedChecksum:"bf30c3a7d1"},responsive_layout_high_contrast_rtl:{combinedChecksum:"bf30c3a7d1"}}[p["a"].getCssVariant()])
var v=f[g]
var b=function(e,t){for(var i in t)y.call(t,i)&&(e[i]=t[i])
function s(){this.constructor=e}s.prototype=t.prototype
e.prototype=new s
e.__super__=t.prototype
return e},y={}.hasOwnProperty
t["a"]=function(e){b(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.paginationLoaderTemplate=v
t.prototype.paginationScrollContainer=window
t.prototype.distanceTillFetchNextPage=100
t.prototype.initialize=function(e){var i
i=t.__super__.initialize.call(this,e)
this.fetchOptions=e.fetchOptions
this.bindPaginationEvents()
this.paginationStopped=false
return i}
t.prototype.render=function(){var e
e=t.__super__.render.apply(this,arguments)
this.collection.fetchingNextPage&&this.showPaginationLoader()
this.startPaginationListener()
return e}
t.prototype.showPaginationLoader=function(){null==this.$paginationLoader&&(this.$paginationLoader=r()(this.paginationLoaderTemplate()))
return this.placePaginationLoader()}
t.prototype.placePaginationLoader=function(){var e
return null!=(e=this.$paginationLoader)?e.insertAfter(this.el):void 0}
t.prototype.hidePaginationLoader=function(){var e
return null!=(e=this.$paginationLoader)?e.remove():void 0}
t.prototype.distanceToBottom=function(){var e,t
e=r()(this.paginationScrollContainer)
t=e[0]===window?r()(document).height():e[0].scrollHeight
return t-e.scrollTop()-e.height()}
t.prototype.startPaginationListener=function(){var e
if(this.paginationStopped)return
e=r.a.proxy(this.fetchNextPageIfNeeded,this)
r()(this.paginationScrollContainer).on("scroll.pagination:"+this.cid,e)
r()(this.paginationScrollContainer).on("resize.pagination:"+this.cid,e)
return this.fetchNextPageIfNeeded()}
t.prototype.stopPaginationListener=function(){this.paginationStopped=true
return r()(this.paginationScrollContainer).off(".pagination:"+this.cid)}
t.prototype.fetchNextPageIfNeeded=function(){return setTimeout((e=this,function(){var t
if(e.collection.fetchingNextPage)return
if(!e.collection.urls||!e.collection.urls.next){e.collection.length&&e.stopPaginationListener()
return}t=e.distanceToBottom()<e.distanceTillFetchNextPage||!e.collection.length
if(r()(e.paginationScrollContainer).is(":visible")&&t)return e.collection.fetch(n.a.extend({page:"next"},e.fetchOptions))}),0)
var e}
t.prototype.bindPaginationEvents=function(){this.collection.on("beforeFetch:next",this.showPaginationLoader,this)
this.collection.on("fetch:next",this.hidePaginationLoader,this)
return this.collection.on("all",this.fetchNextPageIfNeeded,this)}
return t}(l.a.View)},bIPM:function(e,t,i){"use strict"
var s=i("3O+N")
var n=i.n(s)
var a=i("pQTu")
var r=i("m0r6")
Object(r["a"])(JSON.parse('{"de":{"1_item_scores_5512cd03":"1- Punktzahlen für Elemente","2_final_score_7b0fd15e":"2- Gesamtpunktzahl","calculation_method_fe281f9":"Berechnungsmethode","example_84698b7d":"Beispiel","example_final_score_355aff0f":"Beispiel für Gesamtpunktzahl","example_item_scores_6726c689":"Beispiel für Punktzahlen für Elemente"},"hu":{"1_item_scores_5512cd03":"1. Elem pontszámok","2_final_score_7b0fd15e":"2. Végső pont","calculation_method_fe281f9":"Számítási módszer","example_84698b7d":"Példa","example_final_score_355aff0f":"Összpontszám példa","example_item_scores_6726c689":"Elem pontszám példa"}}'))
i("jQeR")
i("0sPK")
a["default"].scoped("outcomes.calculation_method_example")
i("DfGn")
var o=n.a.default
var l=o.template,c=o.templates=o.templates||{}
var u="outcomes/-calculationMethodExample"
c[u]=l((function(e,t,i,s,n){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
n=n||{}
var a,r,o,l="",c=i.helperMissing,u=this.escapeExpression,d="function"
l+='<dl class="dl-horizontal">\n  <dt>'+u((r=i.t||t&&t.t,o={hash:{i18n_inferred_key:true},data:n},r?r.call(t,"calculation_method_fe281f9","Calculation Method",o):c.call(t,"t","calculation_method_fe281f9","Calculation Method",o)))+":</dt>\n  <dd>"
if(r=i.method)a=r.call(t,{hash:{},data:n})
else{r=t&&t.method
a=typeof r===d?r.call(t,{hash:{},data:n}):r}l+=u(a)+'</dd>\n\n  <dt class="example">'+u((r=i.t||t&&t.t,o={hash:{i18n_inferred_key:true},data:n},r?r.call(t,"example_84698b7d","Example",o):c.call(t,"t","example_84698b7d","Example",o)))+': </dt>\n  <dd id="calculation_int_example" class="example">'
if(r=i.exampleText)a=r.call(t,{hash:{},data:n})
else{r=t&&t.exampleText
a=typeof r===d?r.call(t,{hash:{},data:n}):r}l+=u(a)+'</dd>\n\n  <dt class="example">\n    <span aria-hidden="true">'+u((r=i.t||t&&t.t,o={hash:{i18n_inferred_key:true},data:n},r?r.call(t,"1_item_scores_5512cd03","1- Item scores",o):c.call(t,"t","1_item_scores_5512cd03","1- Item scores",o)))+': </span>\n    <span class="screenreader-only">'+u((r=i.t||t&&t.t,o={hash:{i18n_inferred_key:true},data:n},r?r.call(t,"example_item_scores_6726c689","Example item scores",o):c.call(t,"t","example_item_scores_6726c689","Example item scores",o)))+': </span>\n  </dt>\n  <dd class="example">'
if(r=i.exampleScores)a=r.call(t,{hash:{},data:n})
else{r=t&&t.exampleScores
a=typeof r===d?r.call(t,{hash:{},data:n}):r}l+=u(a)+'</dd>\n\n  <dt class="example">\n    <span aria-hidden="true">'+u((r=i.t||t&&t.t,o={hash:{i18n_inferred_key:true},data:n},r?r.call(t,"2_final_score_7b0fd15e","2- Final score",o):c.call(t,"t","2_final_score_7b0fd15e","2- Final score",o)))+': </span>\n    <span class="screenreader-only">'+u((r=i.t||t&&t.t,o={hash:{i18n_inferred_key:true},data:n},r?r.call(t,"example_final_score_355aff0f","Example final score",o):c.call(t,"t","example_final_score_355aff0f","Example final score",o)))+'</span>\n  </dt>\n  <dd class="example">'+u((r=i.nf||t&&t.nf,o={hash:{format:"outcomeScore"},data:n},r?r.call(t,t&&t.exampleResult,o):c.call(t,"nf",t&&t.exampleResult,o)))+"</dd>\n</dl>\n"
return l}))
o.registerPartial("outcomes/calculationMethodExample",c["outcomes/-calculationMethodExample"])
c[u]},dSIe:function(e,t,i){"use strict"
var s=i("VTBJ")
var n=i("pQTu")
var a=i("m0r6")
Object(a["a"])(JSON.parse('{"de":{"buttons":{"cancel":"Abbrechen","import":"Importieren"},"outcomesFindDialog":{"confirm":{"import_group":"Gruppe „%{group}“ in Gruppe „%{target}“ importieren?","import_outcome":"Lernziel „%{outcome}“ in Gruppe „%{target}“ importieren?"},"dont_import":"Diese Gruppe kann nicht importiert werden.","flash":{"importError":"Fehler beim Import Versuchen Sie es später noch einmal.","importSuccess":"Import erfolgreich"},"top_level":"Oberste %{context}-Ebene"}},"hu":{"buttons":{"cancel":"Mégse","import":"Importálás"},"outcomesFindDialog":{"confirm":{"import_group":"\\"%{group}\\" csoport importálása ebbe a csoportba \\"%{target}\\"?","import_outcome":"Tanulási eredmény importálása \\"%{outcome}\\" ebbe a csoportba \\"%{target}\\"?"},"dont_import":"Ez a csoport nem importálható","flash":{"importError":"Hiba történt az importálás során! Kérjük, frissítse az oldalt, és próbálja újra!","importSuccess":"Az importálás sikeres"},"top_level":"%{context} Felső szint"}}}'))
i("jQeR")
i("0sPK")
var r=n["default"].scoped("outcomesFindDialog")
var o=i("ouhR")
var l=i.n(o)
var c=i("B0dq")
var u=i("As2g")
var d=i("yJLO")
var h=i("GCM4")
var p=i("k/iY")
var m=i("fPy4")
var _=i("3O+N")
var f=i.n(_)
Object(a["a"])(JSON.parse('{"de":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*Auf die von Ihrer Institution oder Ihrem Bundesland erstellten Lernziele kann hier zugegriffen werden. Wie bei Ihrem Kurs können Sie im linken Bereich zwischen den vorhandenen Lernzielen navigieren. Wenn Sie das gewünschte Lernziel oder die gewünschte Lernzielgruppe gefunden haben, klicken Sie unten auf die Schaltfläche „Importieren“, um das Lernziel bzw. die Lernzielgruppe zu Ihrem Kurs hinzuzufügen.*","title":"Nach Lernzielen suchen"}}}}},"hu":{"outcomes":{"find_instructions":{"instructions":{"find":{"title":"Tanulási eredmények keresése"}}}}}}'))
n["default"].scoped("outcomes.find_instructions")
i("DfGn")
var g=f.a.default
var v=g.template,b=g.templates=g.templates||{}
var y="outcomes/findInstructions"
b[y]=v((function(e,t,i,s,n){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
n=n||{}
var a,r,o="",l=i.helperMissing,c=this.escapeExpression
o+='<div class="wrapper">\n  <h2 class="title">\n    '+c((a=i.t||t&&t.t,r={hash:{scope:"outcomes.find_instructions"},data:n},a?a.call(t,"instructions.find.title","Finding Outcomes",r):l.call(t,"t","instructions.find.title","Finding Outcomes",r)))+'\n  </h2>\n  <div class="description">\n    '+c((a=i.t||t&&t.t,r={hash:{w0:"<p>$1</p>",scope:"outcomes.find_instructions"},data:n},a?a.call(t,"instructions.find.description","*Outcomes created by your institution, or state can be accessed here. Just like in your course, the panel to the left will allow you to navigate between existing outcomes. Once you have found the outcome or outcome group you wish to use, click the import button below to add it to your course.*",r):l.call(t,"t","instructions.find.description","*Outcomes created by your institution, or state can be accessed here. Just like in your course, the panel to the left will allow you to navigate between existing outcomes. Once you have found the outcome or outcome group you wish to use, click the import button below to add it to your course.*",r)))+"\n  </div>\n</div>\n"
return o}))
var w=b[y]
i("MWZS")
i("vpJZ")
i.d(t,"a",(function(){return k}))
class k extends d["a"]{dialogOptions(){return{id:"import_dialog",title:this.title,width:1e3,resizable:true,close(){l()(".find_outcome").focus()},buttons:[{text:r.t("#buttons.cancel","Cancel"),click:e=>this.cancel(e)},{text:r.t("#buttons.import","Import"),class:"btn-primary",click:e=>this.import(e)}]}}initialize(e){this.selectedGroup=e.selectedGroup
this.title=e.title
this.shouldImport=false!==e.shouldImport
this.disableGroupImport=e.disableGroupImport
super.initialize(...arguments)
this.render()
this.dialog.parent().find(".ui-dialog-buttonpane").css("margin-top",0)
this.sidebar=new h["a"]({el:this.$el.find(".outcomes-sidebar .wrapper"),directoryView:e.directoryView,rootOutcomeGroup:e.rootOutcomeGroup,readOnly:true,inFindDialog:true})
this.content=new p["a"]({el:this.$el.find(".outcomes-content"),instructionsTemplate:w,readOnly:true,setQuizMastery:e.setQuizMastery,useForScoring:e.useForScoring})
this.sidebar.on("select",this.content.show.bind(this.content))
this.sidebar.on("select",this.showOrHideImport.bind(this))
return this.showOrHideImport()}updateSelection(e){return this.selectedGroup=e}import(e){e.preventDefault()
const t=this.sidebar.selectedModel()
this.content.setQuizMastery&&(t.quizMasteryLevel=parseFloat(this.$el.find("#outcome_mastery_at").val())||0)
this.content.useForScoring&&(t.useForScoring=this.$el.find("#outcome_use_for_scoring").prop("checked"))
if(t.get("dontImport"))return alert(r.t("dont_import","This group cannot be imported."))
if(!this.shouldImport){this.trigger("import",t)
this.close()
return}if(confirm(this.confirmText(t))){let e,i
if(t instanceof c["a"]){i=this.selectedGroup.get("import_url")
const s=new u["a"]
e=l.a.ajaxJSON(i,"POST",{source_outcome_group_id:t.get("id"),async:true}).pipe(e=>{s.set("url",e.url)
s.poll()
return s.pollDfd}).pipe(()=>l.a.ajaxJSON(s.get("results").outcome_group_url,"GET"))}else{i=this.selectedGroup.get("outcomes_url")
e=l.a.ajaxJSON(i,"POST",{outcome_id:t.get("id")})}this.$el.disableWhileLoading(e)
return l.a.when(e).done((e,i,n)=>{const a=t.clone()
if(a instanceof c["a"])a.set(e)
else{a.outcomeLink=Object(s["a"])({},t.outcomeLink)
a.outcomeGroup=e.outcome_group
a.outcomeLink.url=e.url
a.set({context_id:e.context_id,context_type:e.context_type})}this.trigger("import",a)
this.close()
return l.a.flashMessage(r.t("flash.importSuccess","Import successful"))}).fail(()=>l.a.flashError(r.t("flash.importError","An error occurred while importing. Please try again later.")))}}render(){this.$el.html(Object(m["a"])({skipToolbar:true}))
return this}showOrHideImport(){const e=this.sidebar.selectedModel()
let t=true
!e||e.get("dontImport")?t=false:e&&e instanceof c["a"]&&this.disableGroupImport&&(t=false)
l()(".ui-dialog-buttonpane .btn-primary").toggle(t)}confirmText(e){const t=this.selectedGroup.get("title")||r.t("top_level","%{context} Top Level",{context:this.selectedGroup.get("context_type")})
return e instanceof c["a"]?r.t("confirm.import_group",'Import group "%{group}" to group "%{target}"?',{group:e.get("title"),target:t}):r.t("confirm.import_outcome",'Import outcome "%{outcome}" to group "%{target}"?',{outcome:e.get("title"),target:t})}}},fPy4:function(e,t,i){"use strict"
var s=i("3O+N")
var n=i.n(s)
var a=i("pQTu")
var r=i("m0r6")
Object(r["a"])(JSON.parse('{"de":{"add_a_new_outcome_cbdbe96c":"Ein neues Ergebnis hinzufügen","add_a_new_outcome_group_e3fab2fc":"Eine neue Ergebnisgruppe hinzufügen","back_2900f52a":"Zurück","find_8d605019":"Suchen","find_an_outcome_919328e6":"Ein Lernziel suchen","group_a8f5ed9c":"Gruppe","import_1b31507":"Importieren","import_a_set_of_outcomes_6b782192":"Importieren einer Reihe von Ergebnissen","manage_rubrics_5d274f6a":"Bewertungsschemata verwalten","outcome_da397d20":"Lernziel"},"hu":{"add_a_new_outcome_cbdbe96c":"Új tanulási eredmény hozzáadása","add_a_new_outcome_group_e3fab2fc":"Új tanulási eredménycsoport hozzáadása","back_2900f52a":"Vissza","find_8d605019":"Keresés","find_an_outcome_919328e6":"Tanulási eredmény keresése","group_a8f5ed9c":"Csoport","import_1b31507":"Importálás","manage_rubrics_5d274f6a":"Értékelőtáblák kezelése","outcome_da397d20":"Tanulási eredmény"}}'))
i("jQeR")
i("0sPK")
a["default"].scoped("outcomes.browser")
i("DfGn")
var o=n.a.default
var l=o.template,c=o.templates=o.templates||{}
var u="outcomes/browser"
c[u]=l((function(e,t,i,s,n){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
n=n||{}
var a,r="",o=i.helperMissing,l=this.escapeExpression,c="function",u=this
function d(e,t){var s,n,a,r=""
r+='\n  <div class="toolbar outcomes-toolbar">\n    <button class="go_back ui-button ui-widget ui-state-default ui-corner-all" style="display:none">\n      '+l((n=i.t||e&&e.t,a={hash:{i18n_inferred_key:true},data:t},n?n.call(e,"back_2900f52a","Back",a):o.call(e,"t","back_2900f52a","Back",a)))+"\n    </button>\n\n    "
s=i["if"].call(e,e&&e.canManageOutcomes,{hash:{},inverse:u.noop,fn:u.program(2,h,t),data:t});(s||0===s)&&(r+=s)
r+="\n    "
s=i["if"].call(e,e&&e.canManageRubrics,{hash:{},inverse:u.noop,fn:u.program(4,p,t),data:t});(s||0===s)&&(r+=s)
r+="\n  </div>\n  "
return r}function h(e,t){var s,n,a=""
a+='\n    <button class="add_outcome_link ui-button ui-widget ui-state-default ui-corner-all" aria-label="'+l((s=i.t||e&&e.t,n={hash:{i18n_inferred_key:true},data:t},s?s.call(e,"add_a_new_outcome_cbdbe96c","Add a New Outcome",n):o.call(e,"t","add_a_new_outcome_cbdbe96c","Add a New Outcome",n)))+'">\n      <i class="icon-plus"></i>\n      <span class="ui-button-text" aria-hidden="true">'+l((s=i.t||e&&e.t,n={hash:{i18n_inferred_key:true},data:t},s?s.call(e,"outcome_da397d20","Outcome",n):o.call(e,"t","outcome_da397d20","Outcome",n)))+'</span>\n    </button>\n    <button class="add_outcome_group ui-button ui-widget ui-state-default ui-corner-all" aria-label="'+l((s=i.t||e&&e.t,n={hash:{i18n_inferred_key:true},data:t},s?s.call(e,"add_a_new_outcome_group_e3fab2fc","Add a New Outcome Group",n):o.call(e,"t","add_a_new_outcome_group_e3fab2fc","Add a New Outcome Group",n)))+'">\n      <i class="icon-plus"></i>\n      <span class="ui-button-text" aria-hidden="true">'+l((s=i.t||e&&e.t,n={hash:{i18n_inferred_key:true},data:t},s?s.call(e,"group_a8f5ed9c","Group",n):o.call(e,"t","group_a8f5ed9c","Group",n)))+'</span>\n    </button>\n    <button class="import_outcomes ui-button ui-widget ui-state-default ui-corner-all" aria-label="'+l((s=i.t||e&&e.t,n={hash:{i18n_inferred_key:true},data:t},s?s.call(e,"import_a_set_of_outcomes_6b782192","Import a set of Outcomes",n):o.call(e,"t","import_a_set_of_outcomes_6b782192","Import a set of Outcomes",n)))+'">\n      <i class="icon-upload"></i>\n      <span class="ui-button-text" aria-hidden="true">'+l((s=i.t||e&&e.t,n={hash:{i18n_inferred_key:true},data:t},s?s.call(e,"import_1b31507","Import",n):o.call(e,"t","import_1b31507","Import",n)))+'</span>\n    </button>\n    <button class="find_outcome ui-button ui-widget ui-state-default ui-corner-all" aria-label="'+l((s=i.t||e&&e.t,n={hash:{i18n_inferred_key:true},data:t},s?s.call(e,"find_an_outcome_919328e6","Find an Outcome",n):o.call(e,"t","find_an_outcome_919328e6","Find an Outcome",n)))+'">\n      <i class="icon-search"></i>\n      <span class="ui-button-text" aria-hidden="true">'+l((s=i.t||e&&e.t,n={hash:{i18n_inferred_key:true},data:t},s?s.call(e,"find_8d605019","Find",n):o.call(e,"t","find_8d605019","Find",n)))+"</span>\n    </button>\n    "
return a}function p(e,t){var s,n,a,r=""
r+='\n      <a href="'
if(n=i.contextUrlRoot)s=n.call(e,{hash:{},data:t})
else{n=e&&e.contextUrlRoot
s=typeof n===c?n.call(e,{hash:{},data:t}):n}r+=l(s)+'/rubrics" class="manage_rubrics ui-button ui-widget ui-state-default ui-corner-all" role="button">\n        <i class="icon-rubric"></i>\n        <span class="ui-button-text">'+l((n=i.t||e&&e.t,a={hash:{i18n_inferred_key:true},data:t},n?n.call(e,"manage_rubrics_5d274f6a","Manage Rubrics",a):o.call(e,"t","manage_rubrics_5d274f6a","Manage Rubrics",a)))+"</span>\n      </a>\n    "
return r}r+='<div class="outcomes-browser content-box">\n\n  '
a=i.unless.call(t,t&&t.skipToolbar,{hash:{},inverse:u.noop,fn:u.program(1,d,n),data:n});(a||0===a)&&(r+=a)
r+='\n\n\n\n  <div class="outcomes-main">\n    <div class="outcomes-sidebar">\n      <div class="wrapper"></div>\n    </div>\n    <div class="outcomes-content">\n    </div>\n  </div>\n</div>\n'
return r}))
t["a"]=c[u]},"gW/U":function(e,t,i){"use strict"
i.d(t,"a",(function(){return p}))
var s=i("VTBJ")
var n=i("1OyB")
var a=i("vuIU")
var r=i("md7G")
var o=i("foSv")
var l=i("Ji7U")
var c=i("q1tI")
var u=i.n(c)
var d=i("hPGw")
var h=u.a.createElement("path",{d:"M960 1807.059c-467.125 0-847.059-379.934-847.059-847.059 0-467.125 379.934-847.059 847.059-847.059 467.125 0 847.059 379.934 847.059 847.059 0 467.125-379.934 847.059-847.059 847.059M960 0C430.645 0 0 430.645 0 960s430.645 960 960 960 960-430.645 960-960S1489.355 0 960 0m89.336 350.355c114.862 29.703 208.264 123.106 237.968 237.967 23.378 90.466 10.729 183.303-35.464 261.459-45.515 77.026-121.186 133.948-207.586 156.084-13.779 3.502-27.783 14.796-27.783 31.85v91.708H903.529v-91.708c0-66.07 46.306-124.123 112.716-141.29 57.6-14.682 107.971-52.63 138.353-104.018 30.833-52.292 39.19-114.749 23.378-175.85-19.651-75.67-81.204-137.223-156.875-156.875-70.927-18.184-143.548-3.953-199.341 39.303-55.68 43.144-87.642 108.311-87.642 178.673H621.176c0-105.6 47.888-203.294 131.464-268.01 83.69-64.714 191.661-86.4 296.696-59.293zm-89.28 1004.94v-.114l56.471.113h-56.47zm0-112.942c-62.343 0-112.94 50.71-112.94 112.941 0 62.23 50.597 112.941 112.94 112.941 62.231 0 112.942-50.71 112.942-112.94 0-62.231-50.71-112.942-112.942-112.942z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(l["a"])(t,e)
function t(){Object(n["a"])(this,t)
return Object(r["a"])(this,Object(o["a"])(t).apply(this,arguments))}Object(a["a"])(t,[{key:"render",value:function(){return u.a.createElement(d["a"],Object.assign({},this.props,{name:"IconQuestion",viewBox:"0 0 1920 1920"}),h)}}])
t.displayName="IconQuestionLine"
return t}(c["Component"])
p.glyphName="question"
p.variant="Line"
p.propTypes=Object(s["a"])({},d["a"].propTypes)},"k/iY":function(e,t,i){"use strict"
var s=i("VTBJ")
var n=i("ouhR")
var a=i.n(n)
var r=i("pQTu")
var o=i("m0r6")
Object(o["a"])(JSON.parse('{"de":{"no_directory_is_selected_please_select_a_directory_46ded46":"Es wurde kein Verzeichnis ausgewählt. Wählen Sie ein Verzeichnis aus, bevor Sie auf „Verschieben“ klicken.","where_would_you_like_to_move_title_fabd6e8f":"Wohin möchten Sie %{title} verschieben?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"Es liegen keine Lernziele für Sie vor. Klicken Sie hier, um zur Seite „Lernziele“ zu wechseln."},"hu":{"no_directory_is_selected_please_select_a_directory_46ded46":"Nem lett mappa kijelölve. Kérjük, válasszon egy mappát, mielőtt a \'mozgatásra\' kattint","where_would_you_like_to_move_title_fabd6e8f":"Hová szeretné áthelyezni ezt: %{title}?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"Nincsenek tanulási eredményei. Kattintson ide az eredmények oldalra navigáláshoz."}}'))
i("jQeR")
i("0sPK")
var l=r["default"].scoped("contentview")
var c=i("FIFq")
var u=i.n(c)
var d=i("pLki")
var h=i("B0dq")
Object(o["a"])(JSON.parse('{"de":{"OutcomeView":{"length_error":"Darf maximal 255 Zeichen lang sein","mastery_error":"Muss größer als oder gleich 0 sein"},"points_possible_points_fda3b111":"%{points_possible} Punkte"},"hu":{"OutcomeView":{"length_error":"Maximum 255 karakter hosszú lehet","mastery_error":"0-nál nagyobb vagy egyenlő lehet"},"points_possible_points_fda3b111":"%{points_possible} pont"}}'))
var p=r["default"].scoped("OutcomeView")
var m=i("HbFp")
var _=i("GLiE")
var f=i.n(_)
Object(o["a"])(JSON.parse('{"de":{"OutcomeContentBase":{"blank_error":"Darf nicht leer sein","confirm":{"delete":"Möchten Sie wirklich löschen?"},"flash":{"addSuccess":"Erstellung erfolgreich","deleteError":"Etwas ging schief. Konnte zu diesem Zeitpunkt nicht gelöscht werden","deleteSuccess":"Löschvorgang durchgeführt","error":"Ein Fehler ist aufgetreten. Bitte laden Sie die Seite erneut, und versuchen Sie es nochmal.","updateSuccess":"Aktualisierung erfolgreich"},"length_error":"Darf maximal 255 Zeichen lang sein"}},"hu":{"OutcomeContentBase":{"blank_error":"Nem hagyható üresen","confirm":{"delete":"Biztos benne, hogy törölni szeretné?"},"flash":{"addSuccess":"A létrehozás sikeres","deleteError":"Hiba történt! A törlés most nem lehetséges.","deleteSuccess":"A törlés sikeres","error":"Hiba történt! Kérjük, frissítse az oldalt, és próbálja újra!","updateSuccess":"A frissítés sikeres"},"length_error":"Maximum 255 karakter hosszú lehet"}}}'))
var g=r["default"].scoped("OutcomeContentBase")
var v=i("2BSC")
var b=i("/iD7")
var y=i("21i1")
i("MWZS")
i("vpJZ")
y["a"].preloadRemoteModule()
class w extends v["a"]{static initClass(){this.prototype.tagName="div"
this.prototype.className="wrapper"
this.prototype.events=f.a.extend({"click .edit_button":"edit","click .cancel_button":"cancel","click .delete_button":"delete","click .move_button":"move","keyup input.outcome_title":"updateTitle"},v["a"].prototype.events)
this.prototype.validations={title(e){if(f.a.isEmpty(e.title))return g.t("blank_error","Cannot be blank")
if(e.title.length>255)return g.t("length_error","Must be 255 characters or less")}}}isValid(){this.errors={}
const e=this.getFormData()
for(const i in this.validations){var t
const s=this.validations[i];(t=s(e))&&(this.errors[i]=[{message:t}])}return f.a.isEmpty(this.errors)}initialize(e){this.state=e.state
this._readOnly=e.readOnly
this.on("success",this.success,this)
this.on("fail",this.fail,this)
this.setModelUrl()
if(this.model.isAbbreviated()&&"add"!==this.state){this.state="loading"
this.$el.disableWhileLoading(this.model.fetch({success:()=>{this.state=e.state
return this.render()}}))}return super.initialize(...arguments)}_cleanUpTiny(){return y["a"].destroyRCE(this.$el.find('[name="description"]'))}submit(e){e.preventDefault()
this.setModelUrl()
this.getTinyMceCode()
if(!this.isValid())return this.showErrors(this.errors)
super.submit(e)
this._cleanUpTiny()
a()(".edit_button").focus()}success(){if("add"===this.state){this.trigger("addSuccess",this.model)
a.a.flashMessage(g.t("flash.addSuccess","Creation successful"))}else a.a.flashMessage(g.t("flash.updateSuccess","Update successful"))
this.state="show"
this.render()
a()(".edit_button").focus()
return this}fail(){return a.a.flashError(g.t("flash.error","An error occurred. Please refresh the page and try again."))}getTinyMceCode(){const e=this.$("textarea")
return e.val(y["a"].callOnRCE(e,"get_code"))}setModelUrl(){return this.model.setUrlTo((()=>{switch(this.state){case"add":return"add"
case"delete":return"delete"
case"move":return"move"
default:return"edit"}})())}getFormData(){return this.$("form").toJSON()}remove(){this.tinymceExists()&&this._cleanUpTiny()
this.$el.hideErrors()
"add"===this.state&&this.model.isNew()&&this.model.destroy()
return super.remove(...arguments)}cancel(e){e.preventDefault()
this.resetModel()
this._cleanUpTiny()
this.$el.hideErrors()
if("add"===this.state){this.$el.empty()
this.model.destroy()
this.state="show"
a()(".add_outcome_link").focus()}else{this.state="show"
this.render()
a()(".edit_button").focus()}return this}edit(e){e.preventDefault()
this.state="edit"
this._modelAttributes=this.model.toJSON()
return this.render()}delete(e){e.preventDefault()
if(!confirm(g.t("confirm.delete","Are you sure you want to delete?")))return
this.state="delete"
this.setModelUrl()
return this.$el.disableWhileLoading(this.model.destroy({success:()=>{a.a.flashMessage(g.t("flash.deleteSuccess","Deletion successful"))
this.trigger("deleteSuccess")
this.remove()
a()(".add_outcome_link").focus()},error:()=>a.a.flashError(g.t("flash.deleteError","Something went wrong. Unable to delete at this time."))}))}move(e){e.preventDefault()
return this.trigger("move",this.model)}resetModel(){return this.model.set(this._modelAttributes)}setupTinyMCEViewSwitcher(){a()(".rte_switch_views_link").click(e=>{e.preventDefault()
y["a"].callOnRCE(this.$("textarea"),"toggle")
a()(e.currentTarget).siblings(".rte_switch_views_link").andSelf().toggle().focus()})}addTinyMCEKeyboardShortcuts(){if(!ENV.use_rce_enhancements){const e=new b["a"]
return e.render().$el.insertBefore(a()(".rte_switch_views_link:first"))}}readyForm(){return setTimeout(()=>{y["a"].loadNewEditor(this.$("textarea"),{getRenderingTarget(e){const t=a()(e).wrap("<div id='parent-of-".concat(e.id,"'></div>")).get(0)
return t.parentNode}})
this.setupTinyMCEViewSwitcher()
this.addTinyMCEKeyboardShortcuts()
return this.$("input:first").focus()})}readOnly(){return this._readOnly}updateTitle(e){return this.model.set("title",e.currentTarget.value)}tinymceExists(){const e=this.$el.find('[name="description"]').length>0
const t=y["a"].callOnRCE(this.$el.find('[name="description"]'),"exists?")
return e&&t}}w.initClass()
var k=i("3O+N")
var x=i.n(k)
i("bIPM")
i("DfGn")
var O=x.a.default
var z=O.template,S=O.templates=O.templates||{}
var C="outcomes/outcomeCalculationMethodForm"
S[C]=z((function(e,t,i,s,n){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
s=this.merge(s,e.partials)
n=n||{}
var a,r,o,l="",c="function",u=this.escapeExpression,d=i.helperMissing,h=this
function p(e,t){var s,n,a=""
a+='\n          <input type="text" name="calculation_int" class="outcomes_narrow_text_input" id="calculation_int" value="'
if(n=i.calculation_int)s=n.call(e,{hash:{},data:t})
else{n=e&&e.calculation_int
s=typeof n===c?n.call(e,{hash:{},data:t}):n}a+=u(s)+'" />\n        '
return a}function m(e,t){var s,n,a=""
a+='\n          <span id="calculation_int">'
if(n=i.calculation_int)s=n.call(e,{hash:{},data:t})
else{n=e&&e.calculation_int
s=typeof n===c?n.call(e,{hash:{},data:t}):n}a+=u(s)+"</span>\n        "
return a}function _(e,t){return"8"}function f(e,t){return"12"}l+='<div class="content-box border border-trbl border-round">\n  <div class="grid-row">\n    <div id="calculation_int_left_side" style="'+u((r=i.hiddenUnlessExists||t&&t.hiddenUnlessExists,o={hash:{},data:n},r?r.call(t,t&&t.calculation_int,o):d.call(t,"hiddenUnlessExists",t&&t.calculation_int,o)))+'"\n      class="col-xs-4 border border-r">\n      <div>\n        <label for="calculation_int" id="calculation_int_label">\n          '
if(r=i.calculationIntLabel)a=r.call(t,{hash:{},data:n})
else{r=t&&t.calculationIntLabel
a=typeof r===c?r.call(t,{hash:{},data:n}):r}l+=u(a)+"\n        </label>\n        "
a=(r=i.ifIncludes||t&&t.ifIncludes,o={hash:{},inverse:h.program(3,m,n),fn:h.program(1,p,n),data:n},r?r.call(t,t&&t.writeStates,t&&t.state,o):d.call(t,"ifIncludes",t&&t.writeStates,t&&t.state,o));(a||0===a)&&(l+=a)
l+='\n      </div>\n      <div>\n        <span class="outcomes-calculation-int-italics">\n          '
if(r=i.calculationIntDescription)a=r.call(t,{hash:{},data:n})
else{r=t&&t.calculationIntDescription
a=typeof r===c?r.call(t,{hash:{},data:n}):r}l+=u(a)+'\n        </span>\n      </div>\n    </div>\n    <div class="col-xs-'
a=(r=i.ifExists||t&&t.ifExists,o={hash:{},inverse:h.program(7,f,n),fn:h.program(5,_,n),data:n},r?r.call(t,t&&t.calculation_int,o):d.call(t,"ifExists",t&&t.calculation_int,o));(a||0===a)&&(l+=a)
l+='">\n      '
a=h.invokePartial(s["outcomes/calculationMethodExample"],"outcomes/calculationMethodExample",t,i,s,n);(a||0===a)&&(l+=a)
l+="\n    </div>\n  </div>\n</div>\n\n"
return l}))
var M=S[C]
class E extends u.a.View{static initClass(){this.optionProperty("el")
this.optionProperty("model")
this.optionProperty("state")
this.prototype.template=M
this.prototype.els={"#calculation_int":"$calculation_int"}
this.prototype.events={"blur #calculation_int":"blur","keyup #calculation_int":"keyup"}}afterRender(){if(this.hadFocus){this.$calculation_int.focus().val(this.$calculation_int.val())
this.$calculation_int[0].selectionStart=this.selectionStart}return this.hadFocus=void 0}attach(){return this.model.on("change:calculation_method",this.render,this)}blur(e){this.timeout&&clearTimeout(this.timeout)
return this.change(e)}change(e){const t=parseInt(m["a"].parse($(e.target).val()))
if(f.a.isNaN(t))return
this.model.set({calculation_int:t})
return this.render()}keyup(e){this.timeout&&clearTimeout(this.timeout)
this.timeout=setTimeout(()=>this.change(e),500)}render(){this.hadFocus=!f.a.isEmpty(this.$calculation_int)&&document.activeElement===this.$calculation_int[0]
this.hadFocus&&(this.selectionStart=document.activeElement.selectionStart)
this.undelegateEvents()
super.render(...arguments)
return this.delegateEvents()}toJSON(){return f.a.extend(super.toJSON(...arguments),{state:this.state,writeStates:["add","edit"]})}}E.initClass()
Object(o["a"])(JSON.parse('{"de":{"calculation_method_fe281f9":"Berechnungsmethode","delete_outcome_cc6546f1":"Lernziel löschen","edit_outcome_867a0381":"Lernziel bearbeiten","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"Leistungsziel: %{n_mastery_points_precision_2_str} Punkte","move_abf00365":"Verschieben","move_outcome_ce497e6c":"Lernziel verschieben","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Punkte","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} Punkte","outcomes":{"outcome":{"links":{"delete_outcome":"Löschen","edit_outcome":"Ändern"},"mastery_at_label":"Leistungsziel festlegen für jede Punktzahl ab:","use_for_scoring":"Dieses Kriterium zur Bewertung verwenden"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"Dieses Ergebnis wurde verwendet, um einen Studenten zu beurteilen, und einige Änderungen werden Auswirkungen auf Studentenergebnisse haben.","total_points_44d76792":"Gesamtpunkte"},"hu":{"calculation_method_fe281f9":"Számítási módszer","delete_outcome_cc6546f1":"Tanulási eredmény törlése","edit_outcome_867a0381":"Tanulási eredmény szerkesztése","move_abf00365":"Áthelyezés","move_outcome_ce497e6c":"Tanulási eredmény áthelyezése","outcomes":{"outcome":{"links":{"delete_outcome":"Törlés","edit_outcome":"Szerkesztés"},"mastery_at_label":"Jártasság beállítása ezen a pontszámon vagy fölötte:","use_for_scoring":"Kritérium használata pontozáshoz"}},"total_points_44d76792":"Összpontszám"}}'))
r["default"].scoped("outcomes.outcome")
var D=x.a.default
var I=D.template,L=D.templates=D.templates||{}
var T="outcomes/outcome"
L[T]=I((function(e,t,i,s,n){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
n=n||{}
var a,r,o,l="",c="function",u=this.escapeExpression,d=i.helperMissing,h=this
function p(e,t){var s,n,a=""
a+="\n    <a href='"
if(n=i.html_url)s=n.call(e,{hash:{},data:t})
else{n=e&&e.html_url
s=typeof n===c?n.call(e,{hash:{},data:t}):n}a+=u(s)+"'>"
if(n=i.title)s=n.call(e,{hash:{},data:t})
else{n=e&&e.title
s=typeof n===c?n.call(e,{hash:{},data:t}):n}a+=u(s)+"</a>\n  "
return a}function m(e,t){var s,n,a=""
a+="\n    "
if(n=i.title)s=n.call(e,{hash:{},data:t})
else{n=e&&e.title
s=typeof n===c?n.call(e,{hash:{},data:t}):n}a+=u(s)+"\n  "
return a}function _(e,t){var s,n,a=""
a+='\n      <th class="rating" aria-label=\''
if(n=i.description)s=n.call(e,{hash:{},data:t})
else{n=e&&e.description
s=typeof n===c?n.call(e,{hash:{},data:t}):n}a+=u(s)+"'>\n        <h3>"
if(n=i.description)s=n.call(e,{hash:{},data:t})
else{n=e&&e.description
s=typeof n===c?n.call(e,{hash:{},data:t}):n}a+=u(s)+"</h3>\n      </th>\n      "
return a}function f(e,t){var s,n,a,r=""
r+='\n      <td class="rating">\n        '
s=(n=i.n||e&&e.n,a={hash:{precision:2,strip_insignificant_zeros:true},data:t},n?n.call(e,e&&e.points,a):d.call(e,"n",e&&e.points,a))
r+=u((n=i.t||e&&e.t,a={hash:{n_points_precision_2_strip_insig:s,i18n_inferred_key:true},data:t},n?n.call(e,"n_points_precision_2_strip_insig_points_60ad6f21","%{n_points_precision_2_strip_insig} Points",a):d.call(e,"t","n_points_precision_2_strip_insig_points_60ad6f21","%{n_points_precision_2_strip_insig} Points",a)))+"\n      </td>\n      "
return r}function g(e,t){var s,n,a=""
a+='\n  <label for="outcome_mastery_at">\n    '+u((s=i.t||e&&e.t,n={hash:{scope:"outcomes.outcome"},data:t},s?s.call(e,"mastery_at_label","Set mastery for any score at or above:",n):d.call(e,"t","mastery_at_label","Set mastery for any score at or above:",n)))+'\n    <input type="text" name="mastery_at" id="outcome_mastery_at" value="60" />\n    %\n  </label>\n'
return a}function v(e,t){var s,n=""
n+="\n  "
s=i["if"].call(e,e&&e.useForScoring,{hash:{},inverse:h.program(14,y,t),fn:h.program(12,b,t),data:t});(s||0===s)&&(n+=s)
n+="\n"
return n}function b(e,t){var s,n,a=""
a+='\n    <label for="outcome_use_for_scoring">\n      <input type="checkbox" id="outcome_use_for_scoring" class="criterion_for_scoring" checked />\n      '+u((s=i.t||e&&e.t,n={hash:{scope:"outcomes.outcome"},data:t},s?s.call(e,"use_for_scoring","Use this criterion for scoring",n):d.call(e,"t","use_for_scoring","Use this criterion for scoring",n)))+"\n    </label>\n  "
return a}function y(e,t){var s,n,a,r=""
r+="\n    <p>"
s=(n=i.n||e&&e.n,a={hash:{precision:2,strip_insignificant_zeros:true},data:t},n?n.call(e,e&&e.mastery_points,a):d.call(e,"n",e&&e.mastery_points,a))
r+=u((n=i.t||e&&e.t,a={hash:{n_mastery_points_precision_2_str:s,i18n_inferred_key:true},data:t},n?n.call(e,"mastery_n_mastery_points_precision_2_str_points_e0ed1b3b","Mastery: %{n_mastery_points_precision_2_str} Points",a):d.call(e,"t","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b","Mastery: %{n_mastery_points_precision_2_str} Points",a)))+"</p>\n  "
return r}function w(e,t){var s,n,a=""
a+='\n  <div id="assessed_info_banner" class="alert alert-info outcome-assessed-info-banner">\n    <span>\n      '+u((s=i.t||e&&e.t,n={hash:{i18n_inferred_key:true},data:t},s?s.call(e,"this_outcome_has_been_used_to_assess_a_student_and_a3a48511","This outcome has been used to assess a student and some edits will affect student results.",n):d.call(e,"t","this_outcome_has_been_used_to_assess_a_student_and_a3a48511","This outcome has been used to assess a student and some edits will affect student results.",n)))+"\n    </span>\n  </div>\n"
return a}function k(e,t){var s,n,a,r=""
r+='\n  <div class="pull-right">\n    <button class="move_button ui-button ui-widget ui-state-default ui-corner-all">\n      <span aria-hidden="true">'+u((n=i.t||e&&e.t,a={hash:{i18n_inferred_key:true},data:t},n?n.call(e,"move_abf00365","Move",a):d.call(e,"t","move_abf00365","Move",a)))+'</span>\n      <span class="screenreader-only">'+u((n=i.t||e&&e.t,a={hash:{i18n_inferred_key:true},data:t},n?n.call(e,"move_outcome_ce497e6c","Move Outcome",a):d.call(e,"t","move_outcome_ce497e6c","Move Outcome",a)))+"</span>\n    </button>\n    "
s=i["if"].call(e,e&&e.can_edit,{hash:{},inverse:h.noop,fn:h.program(19,x,t),data:t});(s||0===s)&&(r+=s)
r+="\n    "
s=i["if"].call(e,e&&e.can_unlink,{hash:{},inverse:h.noop,fn:h.program(21,O,t),data:t});(s||0===s)&&(r+=s)
r+="\n  </div>\n"
return r}function x(e,t){var s,n,a=""
a+='\n      <button class="edit_button ui-button ui-widget ui-state-default ui-corner-all">\n        <span aria-hidden="true">'+u((s=i.t||e&&e.t,n={hash:{scope:"outcomes.outcome"},data:t},s?s.call(e,"links.edit_outcome","Edit",n):d.call(e,"t","links.edit_outcome","Edit",n)))+'</span>\n        <span class="screenreader-only">'+u((s=i.t||e&&e.t,n={hash:{i18n_inferred_key:true},data:t},s?s.call(e,"edit_outcome_867a0381","Edit Outcome",n):d.call(e,"t","edit_outcome_867a0381","Edit Outcome",n)))+"</span>\n      </button>\n    "
return a}function O(e,t){var s,n,a,r=""
r+='\n      <button class="delete_button ui-button ui-widget ui-state-default ui-corner-all"\n        '
s=i["if"].call(e,e&&e.assessedInContext,{hash:{},inverse:h.noop,fn:h.program(22,z,t),data:t});(s||0===s)&&(r+=s)
r+='>\n        <span aria-hidden="true">'+u((n=i.t||e&&e.t,a={hash:{scope:"outcomes.outcome"},data:t},n?n.call(e,"links.delete_outcome","Delete",a):d.call(e,"t","links.delete_outcome","Delete",a)))+'</span>\n        <span class="screenreader-only">'+u((n=i.t||e&&e.t,a={hash:{i18n_inferred_key:true},data:t},n?n.call(e,"delete_outcome_cc6546f1","Delete Outcome",a):d.call(e,"t","delete_outcome_cc6546f1","Delete Outcome",a)))+"</span>\n      </button>\n    "
return r}function z(e,t){return" disabled "}l+='<h2 class="screenreader-outcome-title screenreader-only" tabindex="0">\n  '
if(r=i.title)a=r.call(t,{hash:{},data:n})
else{r=t&&t.title
a=typeof r===c?r.call(t,{hash:{},data:n}):r}l+=u(a)+'\n</h2>\n<h2 class="title" role="presentation">\n  <i class="icon-outcomes" aria-hidden="true"></i>\n  '
a=i.unless.call(t,t&&t.isLargeRoster,{hash:{},inverse:h.program(3,m,n),fn:h.program(1,p,n),data:n});(a||0===a)&&(l+=a)
l+='\n</h2>\n<div class="description">\n  '
if(r=i.description)a=r.call(t,{hash:{},data:n})
else{r=t&&t.description
a=typeof r===c?r.call(t,{hash:{},data:n}):r}(a||0===a)&&(l+=a)
l+='\n</div>\n<table class="criterion">\n  <thead>\n    <tr>\n      '
a=i.each.call(t,t&&t.ratings,{hash:{},inverse:h.noop,fn:h.program(5,_,n),data:n});(a||0===a)&&(l+=a)
l+='\n      <th class="total" aria-label=\''+u((r=i.t||t&&t.t,o={hash:{i18n_inferred_key:true},data:n},r?r.call(t,"total_points_44d76792","Total Points",o):d.call(t,"t","total_points_44d76792","Total Points",o)))+'\'>\n        <h3 class="total">'+u((r=i.t||t&&t.t,o={hash:{i18n_inferred_key:true},data:n},r?r.call(t,"total_points_44d76792","Total Points",o):d.call(t,"t","total_points_44d76792","Total Points",o)))+"</h3>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      "
a=i.each.call(t,t&&t.ratings,{hash:{},inverse:h.noop,fn:h.program(7,f,n),data:n});(a||0===a)&&(l+=a)
l+='\n      <td class="total">\n        '
a=(r=i.n||t&&t.n,o={hash:{precision:2,strip_insignificant_zeros:true},data:n},r?r.call(t,t&&t.points_possible,o):d.call(t,"n",t&&t.points_possible,o))
l+=u((r=i.t||t&&t.t,o={hash:{n_points_possible_precision_2_st:a,i18n_inferred_key:true},data:n},r?r.call(t,"n_points_possible_precision_2_st_points_bc3748df","%{n_points_possible_precision_2_st} Points",o):d.call(t,"t","n_points_possible_precision_2_st_points_bc3748df","%{n_points_possible_precision_2_st} Points",o)))+"\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n"
a=i["if"].call(t,t&&t.setQuizMastery,{hash:{},inverse:h.program(11,v,n),fn:h.program(9,g,n),data:n});(a||0===a)&&(l+=a)
l+='\n\n<div id="calculation_method" data-calculation-method="'
if(r=i.calculation_method)a=r.call(t,{hash:{},data:n})
else{r=t&&t.calculation_method
a=typeof r===c?r.call(t,{hash:{},data:n}):r}l+=u(a)+'">\n  '+u((r=i.t||t&&t.t,o={hash:{i18n_inferred_key:true},data:n},r?r.call(t,"calculation_method_fe281f9","Calculation Method",o):d.call(t,"t","calculation_method_fe281f9","Calculation Method",o)))+": "
if(r=i.friendlyCalculationMethod)a=r.call(t,{hash:{},data:n})
else{r=t&&t.friendlyCalculationMethod
a=typeof r===c?r.call(t,{hash:{},data:n}):r}l+=u(a)+'\n</div>\n\n<div class="content-box">\n  <div class="grid-row">\n    \x3c!-- Hook for OutcomeCalculationMethodFormView --\x3e\n    <div class="col-xs-12 outcome-calculation-method-form"></div>\n  </div>\n</div>\n\n'
a=i["if"].call(t,t&&t.assessedInContext,{hash:{},inverse:h.noop,fn:h.program(16,w,n),data:n});(a||0===a)&&(l+=a)
l+="\n\n"
a=i["if"].call(t,t&&t.can_manage,{hash:{},inverse:h.noop,fn:h.program(18,k,n),data:n});(a||0===a)&&(l+=a)
l+="\n"
return l}))
var N=L[T]
Object(o["a"])(JSON.parse('{"de":{"outcomes":{"criterion_header":{"insert_criterion_rating":"Kriterienbewertung einfügen","insert_rating":"Einfügen"}}},"hu":{"outcomes":{"criterion_header":{"insert_criterion_rating":"Kritériumértékelés beszúrása","insert_rating":"Beszúrás"}}}}'))
r["default"].scoped("outcomes.criterion_header")
var P=x.a.default
var j=P.template,F=P.templates=P.templates||{}
var G="outcomes/-criterionHeader"
F[G]=j((function(e,t,i,s,n){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
n=n||{}
var a,r,o,l="",c="function",u=this.escapeExpression,d=i.helperMissing
l+='<th class="rating-header" aria-label=\''
if(r=i.description)a=r.call(t,{hash:{},data:n})
else{r=t&&t.description
a=typeof r===c?r.call(t,{hash:{},data:n}):r}l+=u(a)+"'>\n  <div class='rating-wrap'>\n    <h5>"
if(r=i.description)a=r.call(t,{hash:{},data:n})
else{r=t&&t.description
a=typeof r===c?r.call(t,{hash:{},data:n}):r}l+=u(a)+'</h5>\n    <div class="insert">\n      <a href="#" class="insert_rating" title="'+u((r=i.t||t&&t.t,o={hash:{scope:"outcomes.criterion_header"},data:n},r?r.call(t,"insert_criterion_rating","Insert criterion rating",o):d.call(t,"t","insert_criterion_rating","Insert criterion rating",o)))+'" tabindex=0 role=button aria-label="'+u((r=i.t||t&&t.t,o={hash:{scope:"outcomes.criterion_header"},data:n},r?r.call(t,"insert_criterion_rating","Insert criterion rating",o):d.call(t,"t","insert_criterion_rating","Insert criterion rating",o)))+'">\n        '+u((r=i.t||t&&t.t,o={hash:{scope:"outcomes.criterion_header"},data:n},r?r.call(t,"insert_rating","Insert",o):d.call(t,"t","insert_rating","Insert",o)))+'\n        <span class="arrow-icon"></span>\n      </a>\n    </div>\n  </div>\n</th>\n'
return l}))
P.registerPartial("outcomes/criterionHeader",F["outcomes/-criterionHeader"])
var A=F[G]
Object(o["a"])(JSON.parse('{"de":{"outcomes":{"criterion":{"close_rating":"OK","criterion_rating_points":"Kriterienbewertungspunkte","delete_criterion":"Löschen","edit_criterion_rating_title":"„%{description}“ der Kriterieneinstufung ändern","points":"Punkte","pts":"Pkte.","rating_description":"Beschreibung der Kriterienbewertung"}}},"hu":{"outcomes":{"criterion":{"close_rating":"OK","criterion_rating_points":"Kritériumértékelési pontok","delete_criterion":"Törlés","edit_criterion_rating_title":"\\"%{description}\\" kritériumértékelés szerkesztése","points":"Pont","pts":"pont","rating_description":"Kritériumértékelés leírása"}}}}'))
r["default"].scoped("outcomes.criterion")
var V=x.a.default
var R=V.template,B=V.templates=V.templates||{}
var J="outcomes/-criterion"
B[J]=R((function(e,t,i,s,n){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
n=n||{}
var a,r,o,l="",c=i.helperMissing,u=this.escapeExpression,d="function"
l+='<td class="rating">\n  <div class="rating-wrap">\n    <div class="show" aria-expanded="true">\n      <span class="points">'+u((r=i.n||t&&t.n,o={hash:{precision:2,strip_insignificant_zeros:true},data:n},r?r.call(t,t&&t.points,o):c.call(t,"n",t&&t.points,o)))+"</span> "+u((r=i.t||t&&t.t,o={hash:{scope:"outcomes.criterion"},data:n},r?r.call(t,"points","Points",o):c.call(t,"t","points","Points",o)))+'\n      <a\n        href="#"\n        class="edit_rating active"\n        title=\''+u((r=i.t||t&&t.t,o={hash:{description:t&&t.description,scope:"outcomes.criterion"},data:n},r?r.call(t,"edit_criterion_rating_title",'Edit "%{description}" criterion rating',o):c.call(t,"t","edit_criterion_rating_title",'Edit "%{description}" criterion rating',o)))+"'\n        aria-label='"+u((r=i.t||t&&t.t,o={hash:{description:t&&t.description,scope:"outcomes.criterion"},data:n},r?r.call(t,"edit_criterion_rating_title",'Edit "%{description}" criterion rating',o):c.call(t,"t","edit_criterion_rating_title",'Edit "%{description}" criterion rating',o)))+"'\n        role=button\n        tabindex=0\n        aria-controls=\"edit_rating_"
if(r=i._index)a=r.call(t,{hash:{},data:n})
else{r=t&&t._index
a=typeof r===d?r.call(t,{hash:{},data:n}):r}l+=u(a)+'"><i class="icon-edit"></i></a>\n    </div>\n    <div\n      class="edit"\n      id="edit_rating_'
if(r=i._index)a=r.call(t,{hash:{},data:n})
else{r=t&&t._index
a=typeof r===d?r.call(t,{hash:{},data:n}):r}l+=u(a)+'"\n      role=region\n      aria-expanded="false"\n      tabindex=-1\n    >\n      <div class="row-fluid" class="outcomes-edit-row">\n        <div class="span7">\n          <input type="text" name="ratings['
if(r=i._index)a=r.call(t,{hash:{},data:n})
else{r=t&&t._index
a=typeof r===d?r.call(t,{hash:{},data:n}):r}l+=u(a)+'][description]" class="outcome_rating_description" value="'
if(r=i.description)a=r.call(t,{hash:{},data:n})
else{r=t&&t.description
a=typeof r===d?r.call(t,{hash:{},data:n}):r}l+=u(a)+'" aria-label="'+u((r=i.t||t&&t.t,o={hash:{scope:"outcomes.criterion"},data:n},r?r.call(t,"rating_description","Criterion rating description",o):c.call(t,"t","rating_description","Criterion rating description",o)))+'">\n        </div>\n        <div class="span4 offset1">\n          <input type="text" name="ratings['
if(r=i._index)a=r.call(t,{hash:{},data:n})
else{r=t&&t._index
a=typeof r===d?r.call(t,{hash:{},data:n}):r}l+=u(a)+'][points]" style="width: 20px;" class="outcome_rating_points" value="'+u((r=i.n||t&&t.n,o={hash:{precision:2,strip_insignificant_zeros:true},data:n},r?r.call(t,t&&t.points,o):c.call(t,"n",t&&t.points,o)))+'" aria-label="'+u((r=i.t||t&&t.t,o={hash:{scope:"outcomes.criterion"},data:n},r?r.call(t,"criterion_rating_points","Criterion rating points",o):c.call(t,"t","criterion_rating_points","Criterion rating points",o)))+'"> <span class="outcomes-points-label">'+u((r=i.t||t&&t.t,o={hash:{scope:"outcomes.criterion"},data:n},r?r.call(t,"pts","pts",o):c.call(t,"t","pts","pts",o)))+'</span>\n        </div>\n      </div>\n\n      <div class="buttons row-fluid">\n        <div class="span12">\n          <div class="button-container">\n            <button\n              class="btn btn-small delete_rating_link"\n              type="button"\n            >'+u((r=i.t||t&&t.t,o={hash:{scope:"outcomes.criterion"},data:n},r?r.call(t,"delete_criterion","Delete",o):c.call(t,"t","delete_criterion","Delete",o)))+'</button>\n            <button\n              class="btn btn-small btn-primary save_rating_link"\n              aria-controls="edit_rating_'
if(r=i._index)a=r.call(t,{hash:{},data:n})
else{r=t&&t._index
a=typeof r===d?r.call(t,{hash:{},data:n}):r}l+=u(a)+'"\n              type="button"\n            >'+u((r=i.t||t&&t.t,o={hash:{scope:"outcomes.criterion"},data:n},r?r.call(t,"close_rating","Ok",o):c.call(t,"t","close_rating","Ok",o)))+"</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</td>\n"
return l}))
V.registerPartial("outcomes/criterion",B["outcomes/-criterion"])
var W=B[J]
Object(o["a"])(JSON.parse('{"de":{"buttons":{"cancel":"Abbrechen","save":"Speichern"},"html_editor_fb2ab713":"HTML-Editor","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Punkte","new_outcome_7fba8c7d":"Neues Lernziel","outcomes":{"outcome_form":{"calculation_method":"Berechnungsmethode","criterion":"Kriterienbewertungen","description":"Dieses Lernziel beschreiben","display_name":"Anzeigename (optional)","mastery":"Leistungsziel erreicht bei","title":"Dieses Lernziel benennen"}},"rich_content_editor_2708ef21":"Rich-Content-Editor","total_points_44d76792":"Gesamtpunkte"},"hu":{"buttons":{"cancel":"Mégse","save":"Mentés"},"html_editor_fb2ab713":"HTML szerkesztő","new_outcome_7fba8c7d":"Új tanulási eredmény","outcomes":{"outcome_form":{"calculation_method":"Számítási módszer","criterion":"Kritériumértékelések","description":"A tanulási eredmény leírása","display_name":"Becenév (opcionális)","mastery":"Elfogadási szint:","title":"A tanulási eredmény neve"}},"rich_content_editor_2708ef21":"Vizuális szövegszerkesztő","total_points_44d76792":"Összpontszám"}}'))
r["default"].scoped("outcomes.outcome_form")
var K=x.a.default
var U=K.template,H=K.templates=K.templates||{}
var Q="outcomes/outcomeForm"
H[Q]=U((function(e,t,i,s,n){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
s=this.merge(s,e.partials)
n=n||{}
var a,r,o,l="",c=i.helperMissing,u=this.escapeExpression,d=this,h="function"
function p(e,t){var s,n,a=""
a+='\n    <div class="pull-right">\n      <a href="#" class="rte_switch_views_link">\n        '+u((s=i.t||e&&e.t,n={hash:{scope:"outcomes.outcome_form"},data:t},s?s.call(e,"HTML Editor",n):c.call(e,"t","HTML Editor",n)))+'\n      </a>\n      <a href="#" class="rte_switch_views_link" style="display:none;">\n        '+u((s=i.t||e&&e.t,n={hash:{scope:"outcomes.outcome_form"},data:t},s?s.call(e,"Rich Content Editor",n):c.call(e,"t","Rich Content Editor",n)))+'\n      </a>\n    </div>\n    <div style="clear:both;"></div>\n  '
return a}function m(e,t){var n,a=""
a+="\n          "
n=d.invokePartial(s["outcomes/criterionHeader"],"outcomes/criterionHeader",e,i,s,t);(n||0===n)&&(a+=n)
a+="\n        "
return a}function _(e,t){var n,a=""
a+="\n          "
n=d.invokePartial(s["outcomes/criterion"],"outcomes/criterion",e,i,s,t);(n||0===n)&&(a+=n)
a+="\n        "
return a}function f(e,t,s){var n,a,r,o=""
o+='\n        <option value="'+u((n=null==t||false===t?t:t.key,typeof n===h?n.apply(e):n))+'" '+u((a=i.selectedIf||s&&s.selectedIf,r={hash:{},data:t},a?a.call(e,null==t||false===t?t:t.key,s&&s.calculation_method,r):c.call(e,"selectedIf",null==t||false===t?t:t.key,s&&s.calculation_method,r)))+">\n          "
if(a=i.friendlyCalculationMethod)n=a.call(e,{hash:{},data:t})
else{a=e&&e.friendlyCalculationMethod
n=typeof a===h?a.call(e,{hash:{},data:t}):a}o+=u(n)+"\n        </option>\n      "
return o}l+='<form action="'
if(r=i.url)a=r.call(t,{hash:{},data:n})
else{r=t&&t.url
a=typeof r===h?r.call(t,{hash:{},data:n}):r}l+=u(a)+'" class="learning_outcome" method="post">\n\n  <label class="span3" for="title">'+u((r=i.t||t&&t.t,o={hash:{scope:"outcomes.outcome_form"},data:n},r?r.call(t,"title","Name this outcome",o):c.call(t,"t","title","Name this outcome",o)))+':</label>\n  <input class="outcome_title span3" name="title" id=title size="50" type="text" value="'
if(r=i.title)a=r.call(t,{hash:{},data:n})
else{r=t&&t.title
a=typeof r===h?r.call(t,{hash:{},data:n}):r}l+=u(a)+'" placeholder="'+u((r=i.t||t&&t.t,o={hash:{i18n_inferred_key:true},data:n},r?r.call(t,"new_outcome_7fba8c7d","New Outcome",o):c.call(t,"t","new_outcome_7fba8c7d","New Outcome",o)))+'">\n\n  <label class="span3" for="display_name">'+u((r=i.t||t&&t.t,o={hash:{scope:"outcomes.outcome_form"},data:n},r?r.call(t,"display_name","Friendly name (optional)",o):c.call(t,"t","display_name","Friendly name (optional)",o)))+':</label>\n  <input class="outcome_display_name span3" name="display_name" id=display_name size="50" type="text" value="'
if(r=i.display_name)a=r.call(t,{hash:{},data:n})
else{r=t&&t.display_name
a=typeof r===h?r.call(t,{hash:{},data:n}):r}l+=u(a)+'">\n\n  <label for="description">'+u((r=i.t||t&&t.t,o={hash:{scope:"outcomes.outcome_form"},data:n},r?r.call(t,"description","Describe this outcome",o):c.call(t,"t","description","Describe this outcome",o)))+":</label>\n\n  "
a=i.unless.call(t,t&&t.use_rce_enhancements,{hash:{},inverse:d.noop,fn:d.program(1,p,n),data:n});(a||0===a)&&(l+=a)
l+='\n\n  <textarea cols="40" name="description" id=description rows="20" style="display: none; width: 100%; height: 150px;">'
if(r=i.description)a=r.call(t,{hash:{},data:n})
else{r=t&&t.description
a=typeof r===h?r.call(t,{hash:{},data:n}):r}l+=u(a)+'</textarea>\n\n  <label>\n    <div style="display: flex">\n      <div id=\'criterion_rating_label\' style="margin-top: 0.65rem">'+u((r=i.t||t&&t.t,o={hash:{scope:"outcomes.outcome_form"},data:n},r?r.call(t,"criterion","Criterion ratings",o):c.call(t,"t","criterion","Criterion ratings",o)))+':</div>\n      <div id="react-info-link" />\n    </div>\n  </label>\n  <table class="criterion" aria-labelledby=\'criterion_rating_label\'>\n    <thead>\n      <tr>\n        '
a=(r=i.eachWithIndex||t&&t.eachWithIndex,o={hash:{},inverse:d.noop,fn:d.program(3,m,n),data:n},r?r.call(t,t&&t.ratings,o):c.call(t,"eachWithIndex",t&&t.ratings,o));(a||0===a)&&(l+=a)
l+='\n        <th class="total" aria-label=\''+u((r=i.t||t&&t.t,o={hash:{i18n_inferred_key:true},data:n},r?r.call(t,"total_points_44d76792","Total Points",o):c.call(t,"t","total_points_44d76792","Total Points",o)))+'\'>\n          <h5 class="total">'+u((r=i.t||t&&t.t,o={hash:{i18n_inferred_key:true},data:n},r?r.call(t,"total_points_44d76792","Total Points",o):c.call(t,"t","total_points_44d76792","Total Points",o)))+"</h5>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        "
a=(r=i.eachWithIndex||t&&t.eachWithIndex,o={hash:{},inverse:d.noop,fn:d.program(5,_,n),data:n},r?r.call(t,t&&t.ratings,o):c.call(t,"eachWithIndex",t&&t.ratings,o));(a||0===a)&&(l+=a)
l+='\n       <td class="total">\n         <div class="points_possible">\n           '
a=(r=i.n||t&&t.n,o={hash:{precision:2,strip_insignificant_zeros:true},data:n},r?r.call(t,t&&t.points_possible,o):c.call(t,"n",t&&t.points_possible,o))
l+=u((r=i.t||t&&t.t,o={hash:{n_points_possible_precision_2_st:a,i18n_inferred_key:true},data:n},r?r.call(t,"n_points_possible_precision_2_st_points_bc3748df","%{n_points_possible_precision_2_st} Points",o):c.call(t,"t","n_points_possible_precision_2_st_points_bc3748df","%{n_points_possible_precision_2_st} Points",o)))+'\n         </div>\n       </td>\n      </tr>\n    </tbody>\n  </table>\n  <div>\n    <label for="mastery_points" style="display: inline">'+u((r=i.t||t&&t.t,o={hash:{scope:"outcomes.outcome_form"},data:n},r?r.call(t,"mastery","Mastery at",o):c.call(t,"t","mastery","Mastery at",o)))+':</label>\n    <input type="text" name="mastery_points" style="width: 20px;" class="mastery_points" id="mastery_points" value="'+u((r=i.n||t&&t.n,o={hash:{precision:2,strip_insignificant_zeros:true},data:n},r?r.call(t,t&&t.mastery_points,o):c.call(t,"n",t&&t.mastery_points,o)))+'">\n  </div>\n  <div>\n    <label for="calculation_method" style="display: inline">'+u((r=i.t||t&&t.t,o={hash:{scope:"outcomes.outcome_form"},data:n},r?r.call(t,"calculation_method","Calculation Method",o):c.call(t,"t","calculation_method","Calculation Method",o)))+':</label>\n    <select name="calculation_method" class="calculation_method" id="calculation_method" data-calculation-method="'
if(r=i.calculation_method)a=r.call(t,{hash:{},data:n})
else{r=t&&t.calculation_method
a=typeof r===h?r.call(t,{hash:{},data:n}):r}l+=u(a)+'" value="'
if(r=i.calculation_method)a=r.call(t,{hash:{},data:n})
else{r=t&&t.calculation_method
a=typeof r===h?r.call(t,{hash:{},data:n}):r}l+=u(a)+'">\n      '
a=i.each.call(t,t&&t.calculationMethods,{hash:{},inverse:d.noop,fn:d.programWithDepth(7,f,n,t),data:n});(a||0===a)&&(l+=a)
l+='\n    </select>\n  </div>\n  <div class="content-box">\n    <div class="grid-row">\n      \x3c!-- Hook for OutcomeCalculationMethodFormView --\x3e\n      <div class="col-xs-12 outcome-calculation-method-form"></div>\n    </div>\n  </div>\n  <div class="align-right">\n    <button type="button" class="btn cancel_button">'+u((r=i.t||t&&t.t,o={hash:{scope:"outcomes.outcome_form"},data:n},r?r.call(t,"#buttons.cancel","Cancel",o):c.call(t,"t","#buttons.cancel","Cancel",o)))+'</button>\n    <button type="submit" class="btn btn-primary submit_button">'+u((r=i.t||t&&t.t,o={hash:{scope:"outcomes.outcome_form"},data:n},r?r.call(t,"#buttons.save","Save",o):c.call(t,"t","#buttons.save","Save",o)))+"</button>\n  </div>\n</form>\n"
return l}))
var q=H[Q]
var Z=i("An8g")
Object(o["a"])(JSON.parse('{"de":{"cancel_caeb1e68":"Abbrechen","confirm_edit_outcome_a9746c99":"Ergebnisänderung bestätigen","save_11a80ec3":"Speichern","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"Dies aktualisiert alle Rubriken mit diesem Ergebnis, die noch nicht bewertet wurden.","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"Sie haben die Bewertungskriterien aktualisiert; dies wirkt sich auf alle Studenten aus, die zuvor anhand dieses Ergebnis bewertet wurden."},"hu":{"cancel_caeb1e68":"Mégse","save_11a80ec3":"Mentés"}}'))
var Y=r["default"].scoped("confirmOutcomeEditModal")
var X=i("q1tI")
var ee=i.n(X)
var te=i("i8i4")
var ie=i.n(te)
i("17x9")
var se=i("Xx/m")
var ne=i("dTie")
const ae=e=>{let t=e.changed,i=e.hasUpdateableRubrics
return t&&i}
const re=e=>{let t=e.assessed,i=e.changed,s=e.modifiedFields
return i&&t&&(s.masteryPoints||s.scoringMethod)}
function oe(e){if(!ae(e)&&!re(e)){setTimeout(e.onConfirm)
return}const t=document.createElement("div")
t.setAttribute("class","confirm-outcome-edit-modal-container")
document.body.appendChild(t)
function i(e){e&&e.show()}ie.a.render(ee.a.createElement(le,Object.assign({},e,{parent:()=>t,ref:i})),t)}class le extends X["Component"]{constructor(){super(...arguments)
this.state={show:false}
this.onConfirm=()=>{setTimeout(this.props.onConfirm)
this.hide()}
this.onCancel=()=>{this.hide()}}show(){this.setState({show:true})}hide(){this.setState({show:false},()=>{const e=this.props.parent?this.props.parent():null
e&&ie.a.unmountComponentAtNode(e)})}render(){const e=this.props,t=e.assessed,i=e.changed,s=e.hasUpdateableRubrics,n=e.modifiedFields
return Object(Z["a"])(ne["a"],{label:Y.t("Confirm Edit Outcome"),open:this.state.show,onDismiss:this.onCancel,size:"small"},void 0,Object(Z["a"])(ne["a"].Body,{},void 0,Object(Z["a"])("div",{},void 0,Object(Z["a"])("ul",{},void 0,ae({changed:i,hasUpdateableRubrics:s})&&Object(Z["a"])("li",{},void 0,Y.t("This will update all rubrics using this outcome that have not yet been assessed")),re({assessed:t,changed:i,modifiedFields:n})&&Object(Z["a"])("li",{},void 0,Y.t("You’ve updated the scoring criteria; this will affect all students previously assessed using this outcome"))))),Object(Z["a"])(ne["a"].Footer,{},void 0,Object(Z["a"])(se["a"],{onClick:this.onCancel,id:"cancel-outcome-edit-modal"},void 0,Y.t("Cancel"))," ",Object(Z["a"])(se["a"],{onClick:this.onConfirm,id:"confirm-outcome-edit-modal",variant:"primary"},void 0,Y.t("Save"))))}}var ce=i("WfMV")
var ue=i("Mmr1")
var de=i("gSD+")
var he=i("5JRF")
var pe=i("gW/U")
var me=i("98st")
Object(o["a"])(JSON.parse('{"de":{"close_d634289d":"Schließen","criterion_ratings_3eed22e2":"Kriterienbewertungen","learning_outcomes_can_be_included_in_assignment_ru_a48bb903":"\\nLernziele können in das Bewertungsschema für Aufgaben einbezogen werden als einfache Möglichkeit zur Beurteilung der \\nBeherrschung der Lernziele, ausgerichtet an spezifischen Aufgaben.  Beim Definieren eines Lernziels \\nsollten Sie auch ein Kriterium definieren, das für das Einrichten des \\nBewertungsschemas für die Aufgabe verwendet werden kann.  Definieren Sie so viele Bewertungsschemaspalten, wie Sie benötigen, und geben Sie die \\nPunktzahl an, die benötigt wird, um das Lernziel zu erreichen.","more_information_about_ratings_57cdd446":"Weitere Informationen über Bewertungen"},"hu":{"close_d634289d":"Bezárás","criterion_ratings_3eed22e2":"Kritériumértékelések"}}'))
var _e=r["default"].scoped("outcomesCriterionInfo")
const fe=()=>_e.t("\nLearning outcomes can be included in assignment rubrics as an easy way to assess\nmastery of outcomes aligned to specific assignments.  When you define a learning\noutcome, you should also define a criterion that can be used when building\nassignment rubrics.  Define as many rubric columns as you need, and specify a\npoint threshold that will be used to define mastery of this outcome.\n")
var ge=Object(Z["a"])(pe["a"],{})
class ve extends ee.a.Component{constructor(e){super(e)
this.handleButtonClick=()=>{this.setState(e=>({open:!e.open}))}
this.state={open:false}}renderCloseButton(){return Object(Z["a"])(ue["a"],{placement:"end",offset:"medium",variant:"icon",onClick:this.handleButtonClick},void 0,_e.t("Close"))}renderModal(){if(this.state.open)return Object(Z["a"])(me["a"],{as:"form",open:this.state.open,onDismiss:()=>{this.setState({open:false})},size:"medium",label:_e.t("Criterion Ratings"),shouldCloseOnDocumentClick:true},void 0,Object(Z["a"])(me["a"].Header,{},void 0,this.renderCloseButton(),Object(Z["a"])(de["a"],{},void 0,_e.t("Criterion Ratings"))),Object(Z["a"])(me["a"].Body,{},void 0,Object(Z["a"])(he["a"],{lineHeight:"double"},void 0,fe())))}render(){return Object(Z["a"])("span",{},void 0,Object(Z["a"])(se["a"],{variant:"icon",icon:ge,onClick:this.handleButtonClick},void 0,Object(Z["a"])(ce["a"],{},void 0,_e.t("More Information About Ratings"))),this.renderModal())}}var be=Object(Z["a"])(ve,{})
const ye=e=>{ie.a.render(be,e)}
i("YGE8")
class we extends w{static initClass(){this.child("calculationMethodFormView","div.outcome-calculation-method-form")
this.prototype.events=f.a.extend({"click .edit_rating":"editRating","click .delete_rating_link":"deleteRating","click .save_rating_link":"saveRating","click .insert_rating":"insertRating","change .calculation_method":"updateCalcMethod","keyup .mastery_points":"changeMasteryPoints"},w.prototype.events)
this.prototype.validations=f.a.extend({display_name(e){if(e.display_name.length>255)return p.t("length_error","Must be 255 characters or less")},mastery_points(e){if(f.a.isNaN(e.mastery_points)||e.mastery_points<0)return p.t("mastery_error","Must be greater than or equal to 0")}},w.prototype.validations)}initialize(e){let t=e.setQuizMastery,i=e.useForScoring
this.setQuizMastery=t
this.useForScoring=i
this.calculationMethodFormView=new E({model:this.model})
this.originalConfirmableValues=this.getFormData()
super.initialize(...arguments)}submit(e){null!=e&&e.preventDefault()
const t=this.getFormData()
return oe({changed:!f.a.isEqual(t,this.originalConfirmableValues),assessed:this.model.get("assessed"),hasUpdateableRubrics:this.model.get("has_updateable_rubrics"),modifiedFields:this.getModifiedFields(t),onConfirm:t=>we.prototype.__proto__.submit.call(this,e)})}getModifiedFields(e){return{masteryPoints:e.mastery_points!==m["a"].parse(this.originalConfirmableValues.mastery_points),scoringMethod:!this.scoringMethodsEqual(e,this.originalConfirmableValues)}}scoringMethodsEqual(e,t){if(e.calculation_method!==t.calculation_method)return false
if(["highest","latest"].includes(e.calculation_method))return true
return m["a"].parse(e.calculation_int)===m["a"].parse(t.calculation_int)}edit(e){super.edit(e)
this.originalConfirmableValues=this.getFormData()
return setTimeout(()=>this.originalConfirmableValues=this.getFormData(),50)}getFormData(){const e=super.getFormData()
e.mastery_points=m["a"].parse(e.mastery_points)
e.ratings=f.a.map(e.ratings,e=>f.a.extend(e,{points:m["a"].parse(e.points)}));["highest","latest"].includes(e.calculation_method)?delete e.calculation_int:e.calculation_int=parseInt(m["a"].parse(e.calculation_int))
return e}editRating(e){e.preventDefault()
const t=a()(e.currentTarget).closest(".rating").index()
const i=a()(".criterion thead tr > th:nth-child(".concat(t+1,")"))
const s=a()(e.currentTarget).parents(".show:first")
const n=s.next()
s.attr("aria-expanded","false").hide()
n.attr("aria-expanded","true").show()
i.find("h5").attr("aria-expanded","false").hide()
return n.find(".outcome_rating_description").focus()}deleteRating(e){e.preventDefault()
if(this.$(".rating").length>1){const t=a()(e.currentTarget)
const i=t.closest(".rating").index()
const s=a()(".criterion thead tr > th:nth-child(".concat(i+1,")"))
let n=t.closest(".rating").prev().find(".insert_rating")
0===n.length&&(n=t.closest(".rating").next().find(".edit_rating"))
s.remove()
t.closest("td").remove()
n.focus()
return this.updateRatings()}}saveRating(e){e.preventDefault()
const t=a()(e.currentTarget).closest(".rating").index()
const i=a()(".criterion thead tr > th:nth-child(".concat(t+1,")"))
const s=a()(e.currentTarget).parents(".edit:first")
const n=s.prev()
i.find("h5").text(s.find("input.outcome_rating_description").val())
let r=m["a"].parse(s.find("input.outcome_rating_points").val())
r=f.a.isNaN(r)?0:p.n(r,{precision:2,strip_insignificant_zeros:true})
n.find(".points").text(r)
s.attr("aria-expanded","false").hide()
n.attr("aria-expanded","true").show()
i.find("h5").attr("aria-expanded","true").show()
n.find(".edit_rating").focus()
return this.updateRatings()}insertRating(e){e.preventDefault()
const t=a()(W({description:"",points:"",_index:99}))
const i=a()(e.currentTarget).closest(".rating-header").index()
const s=a()(A({description:"",_index:99}))
const n=a()(".criterion tbody tr")
a()(e.currentTarget).closest(".rating-header").after(s)
n.find("> td:nth-child(".concat(i+1,")")).after(t)
t.find(".show").hide().next().show(200)
s.hide().show(200)
t.find(".edit input:first").focus()
return this.updateRatings()}updateCalcMethod(e){null!=e&&e.preventDefault()
return this.model.set({calculation_method:a()(e.target).val()})}changeMasteryPoints(e){this.timeout&&clearTimeout(this.timeout)
return this.timeout=setTimeout(()=>{const t=m["a"].parse(a()(e.target).val())
if(f.a.isNaN(t))return
if(t>=0&&t<=this.model.get("points_possible")){this.model.set({mastery_points:t})
this.calculationMethodFormView&&this.calculationMethodFormView.render()}},500)}updateRatings(){let e=0
const t=this.$(".rating")
for(let i=0;i<t.length;i++){const s=t[i]
const n=a()(s).find(".outcome_rating_points").val()||0
e=f.a.max([e,m["a"].parse(n)])
for(const e of Array.from(a()(s).find("input")))a()(e).attr("name",e.name.replace(/\[[0-9]+\]/,"[".concat(i,"]")))}const i=this.$(".points_possible")
i.html(a.a.raw(p.t("%{points_possible} Points",{points_possible:p.n(e,{precision:2,strip_insignificant_zeros:true})})))
return this.model.set({points_possible:e})}screenreaderTitleFocus(){return this.$(".screenreader-outcome-title").focus()}render(){const e=this.model.present()
e.html_url="".concat(ENV.CONTEXT_URL_ROOT,"/outcomes/").concat(e.id)
this.calculationMethodFormView.state=this.state
switch(this.state){case"edit":case"add":this.$el.html(q(f.a.extend(e,{calculationMethods:this.model.calculationMethods(),use_rce_enhancements:ENV.use_rce_enhancements})))
ye(this.$el.find("#react-info-link")[0])
this.readyForm()
break
case"loading":this.$el.empty()
break
default:e.points_possible||(e.points_possible=0)
e.mastery_points||(e.mastery_points=0)
var t=!this.readOnly()&&this.model.canManage()
var i=t&&this.model.isNative()
var s=t&&this.model.outcomeLink.can_unlink
this.$el.html(N(f.a.extend(e,{can_manage:t,can_edit:i,can_unlink:s,setQuizMastery:this.setQuizMastery,useForScoring:this.useForScoring,isLargeRoster:ENV.IS_LARGE_ROSTER,assessedInContext:!this.readOnly()&&(this.model.outcomeLink.assessed||this.model.isNative()&&this.model.get("assessed"))})))}this.$("input:first").focus()
this.screenreaderTitleFocus()
this._afterRender()
return this}}we.initClass()
Object(o["a"])(JSON.parse('{"de":{"delete_outcome_group_6b399d34":"Lernzielgruppe löschen","edit_outcome_group_f82e0210":"Lernzielgruppe bearbeiten","move_abf00365":"Verschieben","move_outcome_group_cfa1a505":"Lernzielgruppe verschieben","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Löschen","edit_outcome_group":"Ändern"}}}},"hu":{"delete_outcome_group_6b399d34":"Tanulási eredménycsoport törlése","edit_outcome_group_f82e0210":"Tanulási eredménycsoport szerkesztése","move_abf00365":"Áthelyezés","move_outcome_group_cfa1a505":"Tanulási eredménycsoport áthelyezése","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Törlés","edit_outcome_group":"Szerkesztés"}}}}}'))
r["default"].scoped("outcomes.outcome_group")
var ke=x.a.default
var xe=ke.template,Oe=ke.templates=ke.templates||{}
var ze="outcomes/outcomeGroup"
Oe[ze]=xe((function(e,t,i,s,n){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
n=n||{}
var a,r,o="",l=i.helperMissing,c=this.escapeExpression,u="function",d=this
function h(e,t){var s,n,a=""
a+='\n  <a href="#" style="float:left" class="move_button move_group_button ui-button ui-widget ui-state-default ui-corner-all" role="button">\n    <span aria-hidden="true">'+c((s=i.t||e&&e.t,n={hash:{i18n_inferred_key:true},data:t},s?s.call(e,"move_abf00365","Move",n):l.call(e,"t","move_abf00365","Move",n)))+'</span>\n    <span class="screenreader-only">'+c((s=i.t||e&&e.t,n={hash:{i18n_inferred_key:true},data:t},s?s.call(e,"move_outcome_group_cfa1a505","Move Outcome Group",n):l.call(e,"t","move_outcome_group_cfa1a505","Move Outcome Group",n)))+'</span>\n  </a>\n  <a href="#" style="float:left" class="edit_button edit_group_button ui-button ui-widget ui-state-default ui-corner-all" role="button">\n    <span aria-hidden="true">'+c((s=i.t||e&&e.t,n={hash:{scope:"outcomes.outcome_group"},data:t},s?s.call(e,"links.edit_outcome_group","Edit",n):l.call(e,"t","links.edit_outcome_group","Edit",n)))+'</span>\n    <span class="screenreader-only">'+c((s=i.t||e&&e.t,n={hash:{i18n_inferred_key:true},data:t},s?s.call(e,"edit_outcome_group_f82e0210","Edit Outcome Group",n):l.call(e,"t","edit_outcome_group_f82e0210","Edit Outcome Group",n)))+'</span>\n  </a>\n  <a href="#" style="float:left" class="delete_button delete_group_button ui-button ui-widget ui-state-default ui-corner-all" role="button">\n    <span aria-hidden="true">'+c((s=i.t||e&&e.t,n={hash:{scope:"outcomes.outcome_group"},data:t},s?s.call(e,"links.delete_outcome_group","Delete",n):l.call(e,"t","links.delete_outcome_group","Delete",n)))+'</span>\n    <span class="screenreader-only">'+c((s=i.t||e&&e.t,n={hash:{i18n_inferred_key:true},data:t},s?s.call(e,"delete_outcome_group_6b399d34","Delete Outcome Group",n):l.call(e,"t","delete_outcome_group_6b399d34","Delete Outcome Group",n)))+"</span>\n  </a>\n"
return a}o+='<h2 class="title">\n  <i class="icon-folder"></i>\n  '
if(r=i.title)a=r.call(t,{hash:{},data:n})
else{r=t&&t.title
a=typeof r===u?r.call(t,{hash:{},data:n}):r}o+=c(a)+'\n</h2>\n<div class="description">\n  '
if(r=i.description)a=r.call(t,{hash:{},data:n})
else{r=t&&t.description
a=typeof r===u?r.call(t,{hash:{},data:n}):r}(a||0===a)&&(o+=a)
o+="\n</div>\n\n"
a=i["if"].call(t,t&&t.canManage,{hash:{},inverse:d.noop,fn:d.program(1,h,n),data:n});(a||0===a)&&(o+=a)
o+="\n"
return o}))
var Se=Oe[ze]
Object(o["a"])(JSON.parse('{"de":{"buttons":{"cancel":"Abbrechen","save":"Speichern"},"new_outcome_group_af59f145":"Neue Lernzielgruppe","outcomes":{"outcome_group_form":{"group_description":"Diese Gruppe beschreiben","title":"Diese Gruppe benennen"}}},"hu":{"buttons":{"cancel":"Mégse","save":"Mentés"},"new_outcome_group_af59f145":"Új tanulási eredménycsoport","outcomes":{"outcome_group_form":{"group_description":"A csoport leírása","title":"A csoport elnevezése"}}}}'))
r["default"].scoped("outcomes.outcome_group_form")
var Ce=x.a.default
var Me=Ce.template,Ee=Ce.templates=Ce.templates||{}
var De="outcomes/outcomeGroupForm"
Ee[De]=Me((function(e,t,i,s,n){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
n=n||{}
var a,r,o,l="",c="function",u=this.escapeExpression,d=i.helperMissing
l+='<form action="'
if(r=i.url)a=r.call(t,{hash:{},data:n})
else{r=t&&t.url
a=typeof r===c?r.call(t,{hash:{},data:n}):r}l+=u(a)+'" class="outcome_group" method="post">\n  <label for="outcome_group_title">'+u((r=i.t||t&&t.t,o={hash:{scope:"outcomes.outcome_group_form"},data:n},r?r.call(t,"title","Name this group",o):d.call(t,"t","title","Name this group",o)))+':</label>\n  <input id="outcome_group_title" class="outcome_title" name="title" size="50" type="text" placeholder="'+u((r=i.t||t&&t.t,o={hash:{i18n_inferred_key:true},data:n},r?r.call(t,"new_outcome_group_af59f145","New Outcome Group",o):d.call(t,"t","new_outcome_group_af59f145","New Outcome Group",o)))+'" value="'
if(r=i.title)a=r.call(t,{hash:{},data:n})
else{r=t&&t.title
a=typeof r===c?r.call(t,{hash:{},data:n}):r}l+=u(a)+'">\n  <label for="outcome_group_description">'+u((r=i.t||t&&t.t,o={hash:{scope:"outcomes.outcome_group_form"},data:n},r?r.call(t,"group_description","Describe this group",o):d.call(t,"t","group_description","Describe this group",o)))+':</label>\n  <textarea cols="40" id="outcome_group_description" name="description" rows="20" style="width: 100%; height: 150px;">'
if(r=i.description)a=r.call(t,{hash:{},data:n})
else{r=t&&t.description
a=typeof r===c?r.call(t,{hash:{},data:n}):r}l+=u(a)+'</textarea>\n  <div class="button-container pull-right">\n    <button type="button" class="btn cancel_button">'+u((r=i.t||t&&t.t,o={hash:{scope:"outcomes.outcome_group_form"},data:n},r?r.call(t,"#buttons.cancel","Cancel",o):d.call(t,"t","#buttons.cancel","Cancel",o)))+'</button>\n    <button type="submit" class="btn btn-primary submit_button">'+u((r=i.t||t&&t.t,o={hash:{scope:"outcomes.outcome_group_form"},data:n},r?r.call(t,"#buttons.save","Save",o):d.call(t,"t","#buttons.save","Save",o)))+"</button>\n  </div>\n</form>\n"
return l}))
var Ie=Ee[De]
class Le extends w{render(){const e=this.model.toJSON()
switch(this.state){case"edit":case"add":this.$el.html(Ie(e))
this.readyForm()
break
case"loading":this.$el.empty()
break
default:var t=!this.readOnly()&&this.model.get("can_edit")
this.$el.html(Se(f.a.extend(e,{canManage:t})))}this.$("input:first").focus()
return this}}var Te=i("VAoc")
var Ne=i("Cf7h")
var Pe=function(){function e(){}e.prototype.find=function(){var e,t
e=null
t=Object(Ne["a"])(ENV.context_asset_string||"")
e=new h["a"]
e.url="/api/v1/"+t[0]+"/"+t[1]+"/root_outcome_group"
e.fetch()
return[e]}
return e}()
var je=i("EvX+")
var Fe=x.a.default
var Ge=Fe.template,Ae=Fe.templates=Fe.templates||{}
var $e="MoveOutcomeDialog"
Ae[$e]=Ge((function(e,t,i,s,n){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
n=n||{}
return"<div>\n  <form class='form-dialog'>\n    <div class='form-dialog-content'>\n    </div>\n    <div class='form-controls'>\n      <input type='button' class='btn' value='Cancel'>\n      <input type='submit' class='btn btn-primary' value='Move'>\n    </div>\n  <form>\n</div>"}))
je["a"].loadStylesheet("jst/MoveOutcomeDialog",{new_styles_normal_contrast:{combinedChecksum:"9d1c3f4686"},new_styles_high_contrast:{combinedChecksum:"9d1c3f4686"},responsive_layout_normal_contrast:{combinedChecksum:"9d1c3f4686"},responsive_layout_high_contrast:{combinedChecksum:"9d1c3f4686"},new_styles_normal_contrast_rtl:{combinedChecksum:"9d1c3f4686"},new_styles_high_contrast_rtl:{combinedChecksum:"9d1c3f4686"},responsive_layout_normal_contrast_rtl:{combinedChecksum:"9d1c3f4686"},responsive_layout_high_contrast_rtl:{combinedChecksum:"9d1c3f4686"}}[je["a"].getCssVariant()])
var Ve=Ae[$e]
Object(o["a"])(JSON.parse('{"de":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"Es liegen keine Lernziele für Sie vor. *Klicken Sie hier*, um eines zu erstellen."},"hu":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"Nincs tanulási eredmény. *Kattintson ide* a létrehozáshoz."}}'))
r["default"].scoped("outcomes.no_outcomes_warning")
var Re=x.a.default
var Be=Re.template,Je=Re.templates=Re.templates||{}
var We="outcomes/noOutcomesWarning"
Je[We]=Be((function(e,t,i,s,n){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
n=n||{}
var a,r,o,l,c="",u=i.helperMissing,d=this.escapeExpression
c+='<div class="no-outcomes-warning">\n  <div class="alert" role="alert">\n    '
a=(o=i.__i18nliner_escape||t&&t.__i18nliner_escape,l={hash:{},data:n},o?o.call(t,t&&t.noOutcomesLinkLabel,l):u.call(t,"__i18nliner_escape",t&&t.noOutcomesLinkLabel,l))
r=(o=i.__i18nliner_escape||t&&t.__i18nliner_escape,l={hash:{},data:n},o?o.call(t,t&&t.addOutcomesUrl,l):u.call(t,"__i18nliner_escape",t&&t.addOutcomesUrl,l))
a=(o=i.__i18nliner_concat||t&&t.__i18nliner_concat,l={hash:{},data:n},o?o.call(t,'<a href="',r,'" aria-label="',a,'">$1</a>',l):u.call(t,"__i18nliner_concat",'<a href="',r,'" aria-label="',a,'">$1</a>',l))
c+=d((o=i.t||t&&t.t,l={hash:{w0:a,i18n_inferred_key:true},data:n},o?o.call(t,"you_have_no_outcomes_click_here_to_create_one_ebf262a3","You have no outcomes. *Click here* to create one.",l):u.call(t,"t","you_have_no_outcomes_click_here_to_create_one_ebf262a3","You have no outcomes. *Click here* to create one.",l)))+"\n  </div>\n</div>\n"
return c}))
var Ke=Je[We]
var Ue=i("fPNa")
var He=i("teYS")
i.d(t,"a",(function(){return Qe}))
class Qe extends u.a.View{initialize(e){let t=e.readOnly,i=e.setQuizMastery,s=e.useForScoring,n=e.instructionsTemplate,a=e.renderInstructions
this.readOnly=t
this.setQuizMastery=i
this.useForScoring=s
this.instructionsTemplate=n
this.renderInstructions=a
super.initialize(...arguments)
Object(He["subscribe"])("renderNoOutcomeWarning",this.renderNoOutcomeWarning.bind(this))
Object(He["subscribe"])("clearNoOutcomeWarning",this.clearNoOutcomeWarning.bind(this))
return this.render()}show(e){if(null!=e?e.isNew():void 0)return
return this._show({model:e})}add(e){this._show({model:e,state:"add"})
this.trigger("adding")
return this.innerView.on("addSuccess",e=>this.trigger("addSuccess",e))}_show(e){e=Object(s["a"])({},e,{readOnly:this.readOnly,setQuizMastery:this.setQuizMastery,useForScoring:this.useForScoring})
null!=this.innerView&&this.innerView.remove()
this.innerView=(()=>{if(e.model instanceof d["a"])return new we(e)
if(e.model instanceof h["a"])return new Le(e)})()
this.render()
if(this.innerView instanceof we)return this.innerView.screenreaderTitleFocus()}resetContent(){this.innerView=null
return this.render()}render(){this.attachEvents()
const e=(()=>{if(this.innerView)return this.innerView.render().el
if(this.renderInstructions)return this.instructionsTemplate()})()
this.$el.html(e)
return this}attachEvents(){if(null==this.innerView)return
this.innerView.on("deleteSuccess",()=>this.trigger("deleteSuccess"))
return this.innerView.on("move",e=>this.openDialog(e))}openDialog(e){const t=this.createTree()
const i=this.createDialog()
const s={tree:t,window:i,model:e}
a()(t.$el).appendTo(".form-dialog-content")
a()(".form-controls .btn[type=button]").bind("click",()=>i.dialog("close"))
a()(".form-controls .btn[type=submit]").bind("click",e=>{e.preventDefault()
if(t.activeTree){this.trigger("move",s.model,t.activeTree.model)
return s.model.on("finishedMoving",()=>i.dialog("close"))}return a.a.flashError(l.t("No directory is selected, please select a directory before clicking 'move'"))})
a()(s.window).dialog("option","title",l.t("Where would you like to move %{title}?",{title:e.get("title")}))
a()(".ui-dialog :button").blur()
setTimeout(()=>s.tree.focusOnOpen(),200)}createTree(){var e=new Te["a"]({rootModelsFinder:new Pe,focusStyleClass:"MoveDialog__folderItem--focused",selectedStyleClass:"MoveDialog__folderItem--selected",onlyShowSubtrees:true,onClick(){Te["a"].prototype.setActiveTree(this,e)}}).render()
return e}createDialog(){const e=a()(Ve()).dialog({dialogClass:"moveDialog",width:600,height:270,open(){a()(this).show()},close(e){a()(this).remove()}})
return e}remove(){return null!=this.innerView?this.innerView.off("addSuccess"):void 0}renderNoOutcomeWarning(){null!=this.$el&&this.$el.empty()
const e=l.t("You have no outcomes. Click here to go to the outcomes page.")
return null!=this.$el?this.$el.append(a.a.raw(Ke({addOutcomesUrl:"/".concat(this._contextPath(),"/outcomes"),noOutcomesLinkLabel:e}))):void 0}clearNoOutcomeWarning(){return null!=this.$el?this.$el.empty():void 0}}Qe.mixin(Ue["a"])},pLki:function(e,t,i){"use strict"
var s=i("pQTu")
var n=i("m0r6")
Object(n["a"])(JSON.parse('{"de":{"modelsOutcome":{"criteria":{"does_not_meet_expectations":"Erfüllt nicht die Erwartungen","exceeds_expectations":"Übertrifft die Erwartungen","meets_expectations":"Erfüllt die Erwartungen"}}},"hu":{"modelsOutcome":{"criteria":{"does_not_meet_expectations":"Nem teljesíti az elvárásokat","exceeds_expectations":"Elvárások felett teljesít","meets_expectations":"Megfelel az elvárásoknak"}}}}'))
i("jQeR")
i("0sPK")
var a=s["default"].scoped("modelsOutcome")
var r=i("GLiE")
var o=i.n(r)
var l=i("FIFq")
var c=i.n(l)
var u=i("xbLn")
var d=function(e,t){for(var i in t)h.call(t,i)&&(e[i]=t[i])
function s(){this.constructor=e}s.prototype=t.prototype
e.prototype=new s
e.__super__=t.prototype
return e},h={}.hasOwnProperty
t["a"]=function(e){d(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.defaults={mastery_points:3,points_possible:5,ratings:[{description:a.t("criteria.exceeds_expectations","Exceeds Expectations"),points:5},{description:a.t("criteria.meets_expectations","Meets Expectations"),points:3},{description:a.t("criteria.does_not_meet_expectations","Does Not Meet Expectations"),points:0}]}
t.prototype.defaultCalculiationInt=function(){return{n_mastery:5,decaying_average:65}[this.get("calculation_method")]}
t.prototype.initialize=function(){this.get("calculation_method")||this.setDefaultCalcSettings()
this.on("change:calculation_method",(e=this,function(t,i){return t.set({calculation_int:e.defaultCalculiationInt()})}))
var e
return t.__super__.initialize.apply(this,arguments)}
t.prototype.setDefaultCalcSettings=function(){return this.set({calculation_method:"decaying_average",calculation_int:"65"})}
t.prototype.calculationMethodContent=function(){return new u["a"](this)}
t.prototype.calculationMethods=function(){return this.calculationMethodContent().toJSON()}
t.prototype.name=function(){return this.get("title")}
t.prototype.canManage=function(){return this.get("can_edit")||this.canManageInContext()}
t.prototype.canManageInContext=function(){var e,t,i
return"Course"===(null!=(e=ENV.ROOT_OUTCOME_GROUP)?e.context_type:void 0)&&(null!=(t=ENV.PERMISSIONS)?t.manage_outcomes:void 0)&&(null!=(i=ENV.current_user_roles)?i.includes("admin"):void 0)}
t.prototype.isNative=function(){return this.outcomeLink&&this.get("context_id")===this.outcomeLink.context_id&&this.get("context_type")===this.outcomeLink.context_type}
t.prototype.isAbbreviated=function(){return!this.has("description")}
t.prototype.parse=function(e){if(e.outcome){this.outcomeLink=e
this.outcomeGroup=e.outcome_group
return e.outcome}return e}
t.prototype.present=function(){return o.a.extend({},this.toJSON(),this.calculationMethodContent().present())}
t.prototype.setUrlTo=function(e){return this.url=function(){switch(e){case"add":return this.outcomeGroup.outcomes_url
case"edit":return this.get("url")
case"delete":return this.outcomeLink.url}}.call(this)}
return t}(c.a.Model)},xbLn:function(e,t,i){"use strict"
var s=i("GLiE")
var n=i.n(s)
var a=i("pQTu")
var r=i("m0r6")
Object(r["a"])(JSON.parse('{"de":{"achieve_mastery_count_times_8c9bbcec":{"one":"Leistungsziel einmal erreichen","other":"Leistungsziel %{count}-mal erreichen"},"between_1_and_5_f2a74bcf":"Zwischen 1 und 5","between_1_and_99_d421a4c0":"Zwischen 1 % und 99 %","decaying_average_8bf6a0dd":"Abfallender Durchschnitt","highest_score_e080551e":"Höchste Punktzahl","items_299a7626":"Elemente: ","last_item_79583712":"Letztes Element: ","latest_score_905aa87b":"Letzte Punktzahl","mastery_score_reflects_the_highest_score_of_a_grad_fd426d1e":"Der Leistungsziel-Punktestand stellt das höchste Ergebnis einer benoteten Aufgabe oder eines Quiz dar.","mastery_score_reflects_the_most_recent_graded_assi_921f138f":"Die Leistungsziel-Punktzahl gibt die zuletzt benotete Aufgabe oder das zuletzt benotete Quiz wieder.","most_recent_result_counts_as_calculation_int_of_ma_d2fc1d19":"Jüngste Ergebniszahlen als %{calculation_int} der Leistungszielgewichtung, Durchschnitt aller anderen Ergebnisse zählt als %{remainder}-Gewichtung. Wenn es nur ein Ergebnis gibt, wird der einzelne Punktestand zurückgegeben.","most_recent_score_13a87e8c":"Letzter Punktestand","must_achieve_mastery_at_least_count_times_scores_a_628db168":{"one":"Das Leistungsziel muss mindestens einmal erreicht werden. Für Punktzahlen über dem Leistungsziel wird ein Mittelwert ermittelt, um die Gesamtpunktzahl zu berechnen.","other":"Das Leistungsziel muss mindestens %{count}-mal erreicht werden. Für Punktzahlen über dem Leistungsziel wird ein Mittelwert ermittelt, um die Gesamtpunktzahl zu berechnen."},"n_a_d6f6c42f":"k. A.","n_number_of_times_c2e78b72":"n-mal","recentint_remainderint_decaying_average_79bc09fb":"%{recentInt}/%{remainderInt} Abnehmender Durchschnitt"},"hu":{"achieve_mastery_count_times_8c9bbcec":{"one":"Érjen el jártasságot egy alkalommal","other":"Jártasságot szerzett %{count} alkalommal"},"between_1_and_5_f2a74bcf":"1 és 5 közötti","between_1_and_99_d421a4c0":"1% és 99% közötti","decaying_average_8bf6a0dd":"Súlyozott átlag","highest_score_e080551e":"Legmagasabb pontszám","items_299a7626":"Alkalmak:","last_item_79583712":"Legutóbbi elem:","latest_score_905aa87b":"Legutóbbi eredmény","mastery_score_reflects_the_highest_score_of_a_grad_fd426d1e":"A jártassági szint pontszám a legmagasabb pontszámot jelenti az értékelt feladatok vagy a kvízek vonatkozásában","mastery_score_reflects_the_most_recent_graded_assi_921f138f":"A jártassági szint pontszám a legfrissebb pontszámot jelenti az értékelt feladatok vagy a kvízek vonatkozásában","most_recent_score_13a87e8c":"Legutóbbi pontszám","must_achieve_mastery_at_least_count_times_scores_a_628db168":{"one":"El kell érnie a jártasságot legalább egy alkalommal. A végső eredményt azoknak a pontszámoknak az átlagolásával számoljuk ki, melyek elérik a jártasság értékét.","other":"El kell érnie a jártasságot legalább %{count} alkalommal. A végső eredményt azoknak a pontszámoknak az átlagolásával számoljuk ki, melyek elérik a jártasság értékét."},"n_a_d6f6c42f":"N/A","n_number_of_times_c2e78b72":"x alkalommal","recentint_remainderint_decaying_average_79bc09fb":"%{recentInt}/%{remainderInt} súlyozott átlag"}}'))
i("jQeR")
i("0sPK")
var o=a["default"].scoped("CalculationMethodContent")
var l=i("g1Ui")
i.d(t,"a",(function(){return d}))
n.a.mixin({sum(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0
return n.a.reduce(e,(e,i)=>(null!=t?t(i):i)+e,i)}})
class c{constructor(e,t){this.weight=e
this.range=t
this.rest=this.range.slice(0,-1)
this.last=n.a.last(this.range)}value(){const e=n.a.sum(this.rest)/this.rest.length*this.toPercentage(this.remainder())+this.last*this.toPercentage(this.weight)
return Math.round(100*e)/100}remainder(){return 100-this.weight}toPercentage(e){return e/100}}class u{constructor(e,t,i){this.n=e
this.mastery_points=t
this.range=i}aboveMastery(){return n.a.filter(this.range,e=>e>=this.mastery_points)}value(){return null!=this.mastery_points&&this.aboveMastery().length>=this.n?Math.round(n.a.sum(this.aboveMastery())/this.aboveMastery().length*100)/100:o.t("N/A")}}class d{constructor(e){n.a.each(["calculation_method","calculation_int","mastery_points"],t=>this[t]=null!=e.get?e.get(t):e[t])}decayingAverage(){return new c(this.calculation_int,this.exampleScoreIntegers()).value()}exampleScoreIntegers(){return[1,4,2,3,5,3,6]}nMastery(){return new u(this.calculation_int,this.mastery_points,this.exampleScoreIntegers()).value()}present(){return this.toJSON()[this.calculation_method]}toJSON(){return{decaying_average:{method:o.t("%{recentInt}/%{remainderInt} Decaying Average",{recentInt:this.calculation_int,remainderInt:100-this.calculation_int}),friendlyCalculationMethod:o.t("Decaying Average"),calculationIntLabel:o.t("Last Item: "),calculationIntDescription:o.t("Between 1% and 99%"),exampleText:o.t("Most recent result counts as %{calculation_int} of mastery weight, average of all other results count as %{remainder} of weight. If there is only one result, the single score will be returned.",{calculation_int:o.n(this.calculation_int,{percentage:true}),remainder:o.n(100-this.calculation_int,{percentage:true})}),exampleScores:this.exampleScoreIntegers().join(", "),exampleResult:l["a"].outcomeScore(this.decayingAverage())},n_mastery:{method:o.t({one:"Achieve mastery one time",other:"Achieve mastery %{count} times"},{count:this.calculation_int}),friendlyCalculationMethod:o.t("n Number of Times"),calculationIntLabel:o.t("Items: "),calculationIntDescription:o.t("Between 1 and 5"),exampleText:o.t({one:"Must achieve mastery at least one time. Scores above mastery will be averaged to calculate final score.",other:"Must achieve mastery at least %{count} times. Scores above mastery will be averaged to calculate final score."},{count:this.calculation_int}),exampleScores:this.exampleScoreIntegers().join(", "),exampleResult:l["a"].outcomeScore(this.nMastery())},latest:{method:o.t("Latest Score"),friendlyCalculationMethod:o.t("Most Recent Score"),exampleText:o.t("Mastery score reflects the most recent graded assignment or quiz."),exampleScores:this.exampleScoreIntegers().slice(0,4).join(", "),exampleResult:l["a"].outcomeScore(n.a.last(this.exampleScoreIntegers().slice(0,4)))},highest:{method:o.t("Highest Score"),friendlyCalculationMethod:o.t("Highest Score"),exampleText:o.t("Mastery score reflects the highest score of a graded assignment or quiz."),exampleScores:this.exampleScoreIntegers().slice(0,4).join(", "),exampleResult:l["a"].outcomeScore(n.a.max(this.exampleScoreIntegers().slice(0,4)))}}}}},yJLO:function(e,t,i){"use strict"
var s=i("pQTu")
var n=i("m0r6")
Object(n["a"])(JSON.parse('{"de":{"buttons":{"cancel":"Abbrechen","update":"Aktualisieren"}},"hu":{"buttons":{"cancel":"Mégse","update":"Frissítés"}}}'))
i("jQeR")
i("0sPK")
var a=s["default"].scoped("dialog")
var r=i("ouhR")
var o=i.n(r)
var l=i("GLiE")
var c=i.n(l)
var u=i("FIFq")
var d=i.n(u)
i("YGE8")
var h=function(e,t){return function(){return e.apply(t,arguments)}},p=function(e,t){for(var i in t)m.call(t,i)&&(e[i]=t[i])
function s(){this.constructor=e}s.prototype=t.prototype
e.prototype=new s
e.__super__=t.prototype
return e},m={}.hasOwnProperty
t["a"]=function(e){p(t,e)
function t(){this.cancel=h(this.cancel,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
this.initDialog()
return this.setElement(this.dialog)}
t.prototype.defaultOptions=function(){return{autoOpen:false,width:420,resizable:false,buttons:[],destroy:false}}
t.prototype.initDialog=function(){var e
e=c.a.extend({},this.defaultOptions(),{buttons:[{text:a.t("#buttons.cancel","Cancel"),class:"cancel_button",click:(t=this,function(e){return t.cancel(e)})},{text:a.t("#buttons.update","Update"),class:"btn-primary",click:function(e){return function(t){return e.update(t)}}(this)}]},c.a.result(this,"dialogOptions"))
var t
this.dialog=o()('<div id="'+e.id+'"></div>').appendTo("body").dialog(e)
e.containerId&&this.dialog.parent().attr("id",e.containerId)
o()(".ui-resizable-handle").attr("aria-hidden",true)
return this.dialog}
t.prototype.show=function(){return this.dialog.dialog("open")}
t.prototype.close=function(){return this.options.destroy?this.dialog.dialog("destroy"):this.dialog.dialog("close")}
t.prototype.update=function(e){throw"Not yet implemented"}
t.prototype.cancel=function(e){e.preventDefault()
return this.close()}
return t}(d.a.View)}}])

//# sourceMappingURL=49-c-9bfc993ae2.js.map