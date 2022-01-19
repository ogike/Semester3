(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[46],{As2g:function(t,e,r){"use strict"
var n=r("FIFq")
var i=r("ouhR")
var o=r.n(i)
var s=function(t,e){return function(){return t.apply(e,arguments)}},l=function(t,e){for(var r in e)a.call(e,r)&&(t[r]=e[r])
function n(){this.constructor=t}n.prototype=e.prototype
t.prototype=new n
t.__super__=e.prototype
return t},a={}.hasOwnProperty,c=[].indexOf||function(t){for(var e=0,r=this.length;e<r;e++)if(e in this&&this[e]===t)return e
return-1}
e["a"]=function(t){l(e,t)
function e(){this.onPoll=s(this.onPoll,this)
this.poll=s(this.poll,this)
return e.__super__.constructor.apply(this,arguments)}e.prototype.defaults={completion:0,url:null,timeout:1e3}
e.prototype.pollStates=["queued","running"]
e.prototype.isPolling=function(){var t
return t=this.get("workflow_state"),c.call(this.pollStates,t)>=0}
e.prototype.isSuccess=function(){return"completed"===this.get("workflow_state")}
e.prototype.initialize=function(){this.pollDfd=new o.a.Deferred
this.on("change:url",(t=this,function(){if(t.isPolling())return t.poll()}))
var t
return o()(window).on("beforeunload",function(t){return function(){return clearTimeout(t.timeout)}}(this))}
e.prototype.url=function(){return this.get("url")}
e.prototype.poll=function(){this.fetch().then(this.onPoll,(t=this,function(){return t.pollDfd.rejectWith(t,arguments)}))
var t
return this.pollDfd}
e.prototype.onPoll=function(t){this.pollDfd.notify(t)
if(this.isPolling())return this.timeout=setTimeout(this.poll,this.get("timeout"))
this.pollDfd[this.isSuccess()?"resolve":"reject"](t)
return this.trigger("complete")}
return e}(n["Model"])},N40E:function(t,e,r){"use strict"
var n=r("ouhR")
var i=r.n(n)
var o=r("GLiE")
var s=r.n(o)
var l=r("pPlI")
var a=r("3O+N")
var c=r.n(a)
var h=r("pQTu")
var p=r("m0r6")
Object(p["a"])(JSON.parse('{"de":{"paginated_collection":{"no_items":"Keine Elemente"}},"hu":{"paginated_collection":{"no_items":"Nincsenek elemek."}}}'))
r("jQeR")
r("0sPK")
h["default"].scoped("paginated_collection")
r("DfGn")
var u=c.a.default
var d=u.template,f=u.templates=u.templates||{}
var m="paginatedCollection"
f[m]=d((function(t,e,r,n,i){this.compilerInfo=[4,">= 1.0.0"]
r=this.merge(r,t.helpers)
i=i||{}
var o,s="",l=r.helperMissing,a=this.escapeExpression,c=this
function h(t,e){return'\n<ul class="collectionViewItems"></ul>\n'}function p(t,e){var n,i,o=""
o+="\n<p>\n  "+a((n=r.t||t&&t.t,i={hash:{scope:"paginated_collection"},data:e},n?n.call(t,"no_items","No items.",i):l.call(t,"t","no_items","No items.",i)))+"\n</p>\n"
return o}o=r["if"].call(e,(o=e&&e.collection,null==o||false===o?o:o.length),{hash:{},inverse:c.program(3,p,i),fn:c.program(1,h,i),data:i});(o||0===o)&&(s+=o)
s+='\n\n<div class="paginatedLoadingIndicator">Loading</div>\n\n'
return s}))
var v=f[m]
var y=function(t,e){return function(){return t.apply(e,arguments)}},g=function(t,e){for(var r in e)_.call(e,r)&&(t[r]=e[r])
function n(){this.constructor=t}n.prototype=e.prototype
t.prototype=new n
t.__super__=e.prototype
return t},_={}.hasOwnProperty
e["a"]=function(t){g(e,t)
function e(){this.showLoadingIndicator=y(this.showLoadingIndicator,this)
this.hideLoadingIndicator=y(this.hideLoadingIndicator,this)
this.checkScroll=y(this.checkScroll,this)
this.detachScroll=y(this.detachScroll,this)
this.attachScroll=y(this.attachScroll,this)
this.resetScrollContainer=y(this.resetScrollContainer,this)
return e.__super__.constructor.apply(this,arguments)}e.prototype.defaults={buffer:500,scrollContainer:window}
e.prototype.els=s.a.extend({},l["a"].prototype.els,{".paginatedLoadingIndicator":"$loadingIndicator"})
e.optionProperty("scrollableElement")
e.optionProperty("scrollContainer")
e.optionProperty("autoFetch")
e.optionProperty("fetchItAll")
e.prototype.template=v
e.prototype.initialize=function(){e.__super__.initialize.apply(this,arguments)
return this.initScrollContainer()}
e.prototype.resetScrollContainer=function(t){this.detachScroll()
this.scrollContainer=t
this.initScrollContainer()
return this.attachScroll()}
e.prototype.attachCollection=function(){e.__super__.attachCollection.apply(this,arguments)
this.listenTo(this.collection,"reset",this.attachScroll)
this.listenTo(this.collection,"fetched:last",this.detachScroll)
this.listenTo(this.collection,"beforeFetch",this.showLoadingIndicator)
return this.autoFetch||this.fetchItAll?this.listenTo(this.collection,"fetch",(t=this,function(){return setTimeout(t.checkScroll)})):this.listenTo(this.collection,"fetch",this.hideLoadingIndicator)
var t}
e.prototype.initScrollContainer=function(){this.$scrollableElement=this.scrollableElement?i()(this.scrollableElement):this.$el
this.scrollContainer=i()(this.scrollContainer)
return this.heightContainer=this.scrollContainer[0]===window?i()(document.body):this.scrollContainer}
e.prototype.attachScroll=function(){var t,e
e="scroll.pagination:"+this.cid
t="resize.pagination:"+this.cid
this.scrollContainer.on(e,this.checkScroll)
return this.scrollContainer.on(t,this.checkScroll)}
e.prototype.detachScroll=function(){return this.scrollContainer.off(".pagination:"+this.cid)}
e.prototype.checkScroll=function(){var t,e,r,n
if(this.collection.fetchingPage||this.collection.fetchingNextPage||!this.$el.length)return
e=((null!=(r=this.$scrollableElement.position())?r.top:void 0)||0)+this.$scrollableElement.height()-(null!=(n=this.heightContainer.position())?n.top:void 0)
t=e-this.scrollContainer.scrollTop()-this.scrollContainer.height()
return(this.fetchItAll||t<this.options.buffer)&&this.collection.canFetch("next")?this.collection.fetch({page:"next"}):this.hideLoadingIndicator()}
e.prototype.remove=function(){this.detachScroll()
return e.__super__.remove.apply(this,arguments)}
e.prototype.afterRender=function(){e.__super__.afterRender.apply(this,arguments)
if(!this.collection.fetchingPage)return this.hideLoadingIndicator()}
e.prototype.hideLoadingIndicator=function(){var t
return null!=(t=this.$loadingIndicator)?t.hide():void 0}
e.prototype.showLoadingIndicator=function(){var t
return null!=(t=this.$loadingIndicator)?t.show():void 0}
return e}(l["a"])},VAoc:function(t,e,r){"use strict"
var n=r("pQTu")
var i=r("m0r6")
Object(i["a"])(JSON.parse('{"de":{"selected_subtree_a7693937":"Ausgewählter %{subtree}"},"hu":{"selected_subtree_a7693937":"%{subtree} kiválasztva"}}'))
r("jQeR")
r("0sPK")
var o=n["default"].scoped("treeBrowser")
var s=r("FIFq")
var l=r.n(s)
var a=r("GLiE")
var c=r.n(a)
var h=r("3O+N")
var p=r.n(h)
Object(i["a"])(JSON.parse('{"de":{"folder_browsing_tree_1f00a3ae":"Baumstruktur zum Durchsuchen von Ordnern"},"hu":{"folder_browsing_tree_1f00a3ae":"Mappaböngészés fanézetben"}}'))
n["default"].scoped("tree_browser")
r("DfGn")
var u=r("EvX+")
var d=p.a.default
var f=d.template,m=d.templates=d.templates||{}
var v="TreeBrowser"
m[v]=f((function(t,e,r,n,i){this.compilerInfo=[4,">= 1.0.0"]
r=this.merge(r,t.helpers)
i=i||{}
var o,s,l="",a=r.helperMissing,c=this.escapeExpression
l+='<ul role="tree" tabindex="0" activedescendent="" class="tree"\n  aria-label="'+c((o=r.t||e&&e.t,s={hash:{i18n_inferred_key:true},data:i},o?o.call(e,"folder_browsing_tree_1f00a3ae","Folder Browsing Tree",s):a.call(e,"t","folder_browsing_tree_1f00a3ae","Folder Browsing Tree",s)))+'"\n></ul>'
return l}))
u["a"].loadStylesheet("jst/TreeBrowser",{new_styles_normal_contrast:{combinedChecksum:"486bca8feb"},new_styles_high_contrast:{combinedChecksum:"3f80f1d2d4"},responsive_layout_normal_contrast:{combinedChecksum:"486bca8feb"},responsive_layout_high_contrast:{combinedChecksum:"3f80f1d2d4"},new_styles_normal_contrast_rtl:{combinedChecksum:"5733fe07d7"},new_styles_high_contrast_rtl:{combinedChecksum:"069ef64d42"},responsive_layout_normal_contrast_rtl:{combinedChecksum:"5733fe07d7"},responsive_layout_high_contrast_rtl:{combinedChecksum:"069ef64d42"}}[u["a"].getCssVariant()])
var y=m[v]
var g=r("ouhR")
var _=r.n(g)
var w=r("N40E")
var b=p.a.default
var C=b.template,I=b.templates=b.templates||{}
var S="TreeItem"
I[S]=C((function(t,e,r,n,i){this.compilerInfo=[4,">= 1.0.0"]
r=this.merge(r,t.helpers)
i=i||{}
var o,s,l="",a="function",c=this.escapeExpression,h=this
function p(t,e){var n,i,o=""
o+='\n    <span class="preview-thumbnail-holder">\n      <img class="preview-thumbnail" src="'
if(i=r.thumbnail_url)n=i.call(t,{hash:{},data:e})
else{i=t&&t.thumbnail_url
n=typeof i===a?i.call(t,{hash:{},data:e}):i}o+=c(n)+'">\n    </span>\n  '
return o}function u(t,e){return'\n    <i class="icon-document"></i>\n  '}l+='<a href="#" data-fullsize="'
if(s=r.rce_preview_url)o=s.call(e,{hash:{},data:i})
else{s=e&&e.rce_preview_url
o=typeof s===a?s.call(e,{hash:{},data:i}):s}l+=c(o)+'" role="presentation" tabindex="-1" class="treeFile ellipsis" title="'
if(s=r.display_name)o=s.call(e,{hash:{},data:i})
else{s=e&&e.display_name
o=typeof s===a?s.call(e,{hash:{},data:i}):s}l+=c(o)+'">\n  '
o=r["if"].call(e,e&&e.thumbnail_url,{hash:{},inverse:h.program(3,u,i),fn:h.program(1,p,i),data:i});(o||0===o)&&(l+=o)
l+="\n  "
if(s=r.display_name)o=s.call(e,{hash:{},data:i})
else{s=e&&e.display_name
o=typeof s===a?s.call(e,{hash:{},data:i}):s}l+=c(o)+"\n</a>\n"
return l}))
var P=I[S]
var O=function(t,e){for(var r in e)x.call(e,r)&&(t[r]=e[r])
function n(){this.constructor=t}n.prototype=e.prototype
t.prototype=new n
t.__super__=e.prototype
return t},x={}.hasOwnProperty
var k=function(t){O(e,t)
function e(){return e.__super__.constructor.apply(this,arguments)}e.prototype.tagName="li"
e.prototype.template=P
e.optionProperty("nestingLevel")
e.prototype.attributes=function(){return{role:"treeitem",id:c.a.uniqueId("treenode-")}}
e.prototype.afterRender=function(){return this.$el.attr("aria-level",this.nestingLevel)}
return e}(l.a.View)
var F=p.a.default
var V=F.template,L=F.templates=F.templates||{}
var N="TreeCollection"
L[N]=V((function(t,e,r,n,i){this.compilerInfo=[4,">= 1.0.0"]
r=this.merge(r,t.helpers)
i=i||{}
var o,s="",l=this
function a(t,e){return'\n<ul class="collectionViewItems"></ul>\n'}o=r["if"].call(e,(o=e&&e.collection,null==o||false===o?o:o.length),{hash:{},inverse:l.noop,fn:l.program(1,a,i),data:i});(o||0===o)&&(s+=o)
s+='\n\n<div class="paginatedLoadingIndicator">Loading</div>\n\n'
return s}))
var T=L[N]
var E=r("5Ky4")
var A=function(t,e){for(var r in e)R.call(e,r)&&(t[r]=e[r])
function n(){this.constructor=t}n.prototype=e.prototype
t.prototype=new n
t.__super__=e.prototype
return t},R={}.hasOwnProperty
var D=function(t){A(e,t)
function e(){return e.__super__.constructor.apply(this,arguments)}e.prototype.tagName="li"
e.optionProperty("nestingLevel")
e.optionProperty("onlyShowSubtrees")
e.optionProperty("onClick")
e.optionProperty("dndOptions")
e.optionProperty("href")
e.optionProperty("focusStyleClass")
e.optionProperty("selectedStyleClass")
e.optionProperty("autoFetch")
e.optionProperty("fetchItAll")
e.prototype.defaults={nestingLevel:1}
e.prototype.attributes=function(){return{role:"treeitem","data-id":this.model.id,"aria-expanded":""+!!this.model.isExpanded,"aria-level":this.nestingLevel,"aria-label":this.model.get("custom_name")||this.model.get("name")||this.model.get("title"),id:this.tagId}}
e.prototype.events={"click .treeLabel":"toggle","selectItem .treeFile, .treeLabel":"selectItem"}
e.prototype.initialize=function(){var t
this.tagId=c.a.uniqueId("treenode-")
this.render=c.a.debounce(this.render)
this.model.on("all",this.render,this)
this.model.getItems().on("all",this.render,this)
this.model.getSubtrees().on("all",this.render,this)
t=e.__super__.initialize.apply(this,arguments)
this.render()
return t}
e.prototype.render=function(){this.renderSelf()
return this.renderContents()}
e.prototype.toggle=function(t){t.preventDefault()
t.stopPropagation()
this.model.toggle({onlyShowSubtrees:this.onlyShowSubtrees})
return this.$el.attr(this.attributes())}
e.prototype.selectItem=function(t){var e
e=_()(t.target).find("span")
return e.trigger("click")}
e.prototype.title_text=function(){return this.model.get("custom_name")||this.model.get("name")||this.model.get("title")}
e.prototype.renderSelf=function(){if(this.model.isNew())return
this.$el.attr(this.attributes())
this.$label||(this.$label=(t=this,function(){var e,r,n
t.$labelInner=_()("<span>").click((function(e){if(t.selectedStyleClass){_()("."+t.selectedStyleClass).each((function(e,r){return _()(r).removeClass(t.selectedStyleClass)}))
_()(e.target).addClass(t.selectedStyleClass)}return"function"===typeof t.onClick?t.onClick(e,t.model):void 0}))
r=t.model.get("for_submissions")?"icon-folder-locked":"icon-folder"
e=_()('<a\n  class="treeLabel"\n  role="presentation"\n  tabindex="-1"\n>\n  <i class="icon-mini-arrow-right"></i>\n  <i class="'+Object(E["a"])(r)+'"></i>\n</a>').append(t.$labelInner).prependTo(t.$el)
if(t.dndOptions&&!t.model.get("for_submissions")){n=function(t){return function(){return e.toggleClass("activeDragTarget",t)}}
e.on({"dragenter dragover":function(e){return t.dndOptions.onItemDragEnterOrOver(e.originalEvent,n(true))},"dragleave dragend":function(e){return t.dndOptions.onItemDragLeaveOrEnd(e.originalEvent,n(false))},drop:function(e){return t.dndOptions.onItemDrop(e.originalEvent,t.model,n(false))}})}return e})())
var t
this.$labelInner.text(this.title_text())
this.$label.attr("href",("function"===typeof this.href?this.href(this.model):void 0)||"#").toggleClass("expanded",!!this.model.isExpanded).toggleClass("loading after",!!this.model.isExpanding)
if(this.selectedStyleClass)return this.$label.toggleClass(this.selectedStyleClass,window.location.pathname===("function"===typeof this.href?this.href(this.model):void 0))}
e.prototype.renderContents=function(){var t,r
if(this.model.isExpanded){if(!this.$treeContents){this.$treeContents=_()("<ul role='group' class='treeContents'/>").appendTo(this.$el)
r=new w["a"]({collection:this.model.getSubtrees(),itemView:e,itemViewOptions:{nestingLevel:this.nestingLevel+1,onlyShowSubtrees:this.onlyShowSubtrees,onClick:this.onClick,dndOptions:this.dndOptions,href:this.href,focusStyleClass:this.focusStyleClass,selectedStyleClass:this.selectedStyleClass,autoFetch:this.autoFetch,fetchItAll:this.fetchItAll},tagName:"li",className:"subtrees",template:T,scrollContainer:this.$treeContents.closest("div[role=tabpanel]"),autoFetch:this.autoFetch,fetchItAll:this.fetchItAll})
this.$treeContents.append(r.render().el)
if(!this.onlyShowSubtrees){t=new w["a"]({collection:this.model.getItems(),itemView:k,itemViewOptions:{nestingLevel:this.nestingLevel+1},tagName:"li",className:"items",template:T,scrollContainer:this.$treeContents.closest("div[role=tabpanel]")})
this.$treeContents.append(t.render().el)}}return this.$("> .treeContents").removeClass("hidden")}return this.$("> .treeContents").addClass("hidden")}
return e}(l.a.View)
var z=function(t,e){return function(){return t.apply(e,arguments)}},M=function(t,e){for(var r in e)j.call(e,r)&&(t[r]=e[r])
function n(){this.constructor=t}n.prototype=e.prototype
t.prototype=new n
t.__super__=e.prototype
return t},j={}.hasOwnProperty
e["a"]=function(t){M(e,t)
function e(){this.focusOnOpen=z(this.focusOnOpen,this)
return e.__super__.constructor.apply(this,arguments)}e.prototype.template=y
e.optionProperty("rootModelsFinder")
e.optionProperty("onlyShowSubtrees")
e.optionProperty("onClick")
e.optionProperty("dndOptions")
e.optionProperty("href")
e.optionProperty("focusStyleClass")
e.optionProperty("selectedStyleClass")
e.optionProperty("autoFetch")
e.optionProperty("fetchItAll")
e.prototype.events={"keydown .tree[role=tree]":function(t){var e,r,n
switch(t.which){case 35:n="end"
break
case 36:n="home"
break
case 37:n="left"
break
case 38:n="up"
break
case 39:n="right"
break
case 40:n="down"
break
case 13:case 32:n="enter"
break
default:return true}t.preventDefault()
t.stopPropagation()
r=this.$tree.attr("aria-activedescendant")
if(!r)return this.focusFirst()
e=this.$tree.find("#"+r)
switch(n){case"up":return this.focusPrev(e)
case"down":return this.focusNext(e)
case"left":return this.collapseCurrent(e)
case"right":return this.expandCurrent(e)
case"home":return this.focusFirst()
case"end":return this.focusLast(e)
case"enter":return this.activateCurrent(e)}}}
e.prototype.setActiveTree=function(t,e){return e.activeTree=t}
e.prototype.afterRender=function(){var t,r,n,i
this.$tree=this.$el.children(".tree")
n=this.rootModelsFinder.find()
for(t=0,r=n.length;t<r;t++){i=n[t]
i&&new D({model:i,onlyShowSubtrees:this.onlyShowSubtrees,onClick:this.onClick,dndOptions:this.dndOptions,href:this.href,selectedStyleClass:this.selectedStyleClass,autoFetch:this.autoFetch,fetchItAll:this.fetchItAll}).$el.appendTo(this.$tree)}return e.__super__.afterRender.apply(this,arguments)}
e.prototype.destroyView=function(){this.undelegateEvents()
this.$el.removeData().unbind()
this.remove()
return l.a.View.prototype.remove.call(this)}
e.prototype.setFocus=function(t,e){var r,n
if(!(null!=t?t.length:void 0)||(null!=e&&"function"===typeof e.is?e.is(t):void 0))return
this.$tree.find("[role=treeitem]").not(t).attr("aria-selected",false).removeClass(this.focusStyleClass)
t.attr("aria-selected",true)
t.addClass(this.focusStyleClass);(r=t.attr("aria-label"))&&$.screenReaderFlashMessageExclusive(r)
n=t.attr("id")
if(!n){n=c.a.uniqueId("treenode-")
t.attr("id",n)}this.$tree.attr("aria-activedescendant",n)
return t[0].scrollIntoViewIfNeeded?t[0].scrollIntoViewIfNeeded():t[0].scrollIntoView()}
e.prototype.focusFirst=function(){return this.setFocus(this.$tree.find("[role=treeitem]:first"))}
e.prototype.focusLast=function(t){var e,r
e=this.$tree.find("[role=treeitem][aria-level=1]")
r=1
while(this.ariaPropIsTrue(e,"aria-expanded")&&e.find("[role=treeitem]:first").length){r++
e=e.find("[role=treeitem][aria-level="+r+"]:last")}this.setFocus(e,t)
return this.setFocus(this.$tree.find("[role=treeitem]:first"))}
e.prototype.focusNext=function(t){var e,r,n,i
if(this.ariaPropIsTrue(t,"aria-expanded")){r=t.find("[role=treeitem]:first")
if(r.length)return this.setFocus(r,t)}r=null
e=t
n=parseInt(t.attr("aria-level"),10)
while(n>0){i="[role=treeitem][aria-level="+n+"]"
r=e.parentsUntil("[role=treeitem],[role=tree]").andSelf().nextAll().find(i).andSelf().filter(i).first()
if(null!=r?r.length:void 0)return this.setFocus(r,t)
n--
e=e.parent().closest("[role=treeitem][aria-level="+n+"]")}}
e.prototype.focusPrev=function(t){var e,r,n
r=parseInt(t.attr("aria-level"),10)
n="[role=treeitem][aria-level="+r+"]"
e=t.parentsUntil("[role=treeitem],[role=tree]").andSelf().prevAll().find(n).andSelf().filter(n).last()
if(!e.length){e=t.parent().closest("[role=treeitem]")
return this.setFocus(e,t)}while(this.ariaPropIsTrue(e,"aria-expanded")&&e.find("[role=treeitem]:first").length){r++
e=e.find("[role=treeitem][aria-level="+r+"]:last")}return this.setFocus(e,t)}
e.prototype.expandCurrent=function(t){if(this.ariaPropIsTrue(t,"aria-expanded"))return this.setFocus(t.find("[role=treeitem]:first"),t)
t.find(".treeLabel:first").click()
return this.$tree.focus()}
e.prototype.collapseCurrent=function(t){if(this.ariaPropIsTrue(t,"aria-expanded")){t.find(".treeLabel:first").click()
return this.$tree.focus()}return this.setFocus(t.parent().closest("[role=treeitem]"),t)}
e.prototype.activateCurrent=function(t){t.find("a:first").trigger("selectItem")
return $.screenReaderFlashMessage(o.t("Selected %{subtree}",{subtree:t.attr("aria-label")}))}
e.prototype.ariaPropIsTrue=function(t,e){var r
return"true"===(null!=(r=t.attr(e))&&"function"===typeof r.toLowerCase?r.toLowerCase():void 0)}
e.prototype.focusOnOpen=function(){return this.$tree.focus()}
return e}(l.a.View)},btHx:function(t,e,r){"use strict"
var n=r("ouhR")
var i=r.n(n)
var o=r("FIFq")
var s=r.n(o)
var l=r("GLiE")
var a=r.n(l)
var c,h=function(t,e){return function(){return t.apply(e,arguments)}},p=function(t,e){for(var r in e)u.call(e,r)&&(t[r]=e[r])
function n(){this.constructor=t}n.prototype=e.prototype
t.prototype=new n
t.__super__=e.prototype
return t},u={}.hasOwnProperty,d=[].slice,f=[].indexOf||function(t){for(var e=0,r=this.length;e<r;e++)if(e in this&&this[e]===t)return e
return-1}
c=function(t){null==t&&(t="")
return t.charAt(0).toUpperCase()+t.substring(1).toLowerCase()}
e["a"]=function(t){p(e,t)
function e(){this._setStateAfterFetch=h(this._setStateAfterFetch,this)
return e.__super__.constructor.apply(this,arguments)}e.prototype.nameRegex=/rel="([a-z]+)/
e.prototype.linkRegex=/^<([^>]+)/
e.prototype.pageRegex=/\Wpage=(\d+)/
e.prototype.perPageRegex=/\Wper_page=(\d+)/
e.prototype.initialize=function(){e.__super__.initialize.apply(this,arguments)
return this.urls={}}
e.prototype.fetch=function(t){var r,n,o,s
null==t&&(t={})
t=a.a.clone(t)
this.loadedAll=false
n="fetching"+c(t.page)+"Page"
this[n]=true
if(null!=t.page){null==t.remove&&(t.remove=false)
if(null!=(o=this.urls)?o[t.page]:void 0){t.url=this.urls[t.page]
t.data=""}}else null==t.reset&&(t.reset=true)
null!=t.fetchOptions&&(t.data=t.fetchOptions)
this.trigger("beforeFetch",this,t)
null!=t.page&&this.trigger("beforeFetch:"+t.page,this,t)
s=null
t.dataFilter=(l=this,function(e){l[n]=false
l._setStateAfterFetch(s,t)
return e})
var l
r=t.dfd||i.a.Deferred()
s=e.__super__.fetch.call(this,t).done(function(e){return function(n,i,o){var s
e.trigger("fetch",e,n,t)
null!=t.page&&e.trigger("fetch:"+t.page,e,n,t);(null!=(s=e.urls)?s.next:void 0)||e.trigger.apply(e,["fetched:last"].concat(d.call(arguments)))
return e.loadAll&&null!=e.urls.next?setTimeout((function(){return e.fetch({page:"next",dfd:r})})):r.resolve(n,i,o)}}(this))
r.abort=s.abort
r.success=r.done
r.error=r.fail
return r}
e.prototype.canFetch=function(t){return null!=this.urls&&null!=this.urls[t]}
e.prototype._setStateAfterFetch=function(t,e){var r,n,i,o,s,l,a,c,h,p,u,d,m,v
null==this._urlCache&&(this._urlCache=[])
v=(l=e.url,f.call(this._urlCache,l)<0)
v||this._urlCache.push(e.url)
n=!this.atLeastOnePageFetched
u=n||("next"===(a=e.page)||"bottom"===a)&&v
d=n||("prev"===(c=e.page)||"top"===c)&&v
o=this.urls
this.urls=this._parsePageLinks(t)
u&&null!=this.urls.next?this.urls.bottom=this.urls.next:this.urls.next?this.urls.bottom=o.bottom:delete this.urls.bottom
d&&null!=this.urls.prev?this.urls.top=this.urls.prev:this.urls.prev?this.urls.top=o.top:delete this.urls.top
m=null!=(h=this.urls.first)?h:this.urls.next
if(null!=m){s=parseInt(m.match(this.perPageRegex)[1],10);(null!=(r=null!=this.options?this.options:this.options={}).params?r.params:r.params={}).per_page=s}this.urls.last&&(i=this.urls.last.match(this.pageRegex))&&(this.totalPages=parseInt(i[1],10));(null!=(p=this.urls)?p.next:void 0)||(this.loadedAll=true)
return this.atLeastOnePageFetched=true}
e.prototype._parsePageLinks=function(t){var e,r
e=null!=(r=t.getResponseHeader("link"))?r.split(","):void 0
null==e&&(e=[])
return a.a.reduce(e,(n=this,function(t,e){var r,i
r=e.match(n.nameRegex)[1]
i=e.match(n.linkRegex)[1]
t[r]=i
return t}),{})
var n}
return e}(s.a.Collection)},pPlI:function(t,e,r){"use strict"
var n=r("pQTu")
var i=r("m0r6")
Object(i["a"])(JSON.parse('{"de":{"CollectionView":{"no_items":"Keine Elemente"}},"hu":{"CollectionView":{"no_items":"Nincsenek elemek."}}}'))
r("jQeR")
r("0sPK")
var o=n["default"].scoped("CollectionView")
var s=r("ouhR")
var l=r.n(s)
var a=r("GLiE")
var c=r.n(a)
var h=r("FIFq")
var p=r.n(h)
var u=r("3O+N")
var d=r.n(u)
r("DfGn")
var f=d.a.default
var m=f.template,v=f.templates=f.templates||{}
var y="collectionView"
v[y]=m((function(t,e,r,n,i){this.compilerInfo=[4,">= 1.0.0"]
r=this.merge(r,t.helpers)
i=i||{}
var o,s="",l="function",a=this.escapeExpression,c=this
function h(t,e){var n,i,o=""
o+='\n<ul class="collectionViewItems '
if(i=r.listClassName)n=i.call(t,{hash:{},data:e})
else{i=t&&t.listClassName
n=typeof i===l?i.call(t,{hash:{},data:e}):i}o+=a(n)+'"></ul>\n'
return o}function p(t,e){var n,i,o=""
o+='\n<p class="emptyMessage">'
if(i=r.emptyMessage)n=i.call(t,{hash:{},data:e})
else{i=t&&t.emptyMessage
n=typeof i===l?i.call(t,{hash:{},data:e}):i}o+=a(n)+"</p>\n"
return o}o=r["if"].call(e,(o=e&&e.collection,null==o||false===o?o:o.length),{hash:{},inverse:c.program(3,p,i),fn:c.program(1,h,i),data:i});(o||0===o)&&(s+=o)
s+="\n"
return s}))
var g=v[y]
var _=r("cbNQ")
var w=function(t,e){return function(){return t.apply(e,arguments)}},b=function(t,e){for(var r in e)C.call(e,r)&&(t[r]=e[r])
function n(){this.constructor=t}n.prototype=e.prototype
t.prototype=new n
t.__super__=e.prototype
return t},C={}.hasOwnProperty
e["a"]=function(t){b(e,t)
function e(){this.renderItem=w(this.renderItem,this)
this.renderOnAdd=w(this.renderOnAdd,this)
this.removeItem=w(this.removeItem,this)
this.renderOnReset=w(this.renderOnReset,this)
this.removePreviousItems=w(this.removePreviousItems,this)
this.reorder=w(this.reorder,this)
this.render=w(this.render,this)
return e.__super__.constructor.apply(this,arguments)}e.optionProperty("itemView")
e.optionProperty("itemViewOptions")
e.optionProperty("emptyMessage")
e.optionProperty("listClassName")
e.prototype.className="collectionView"
e.prototype.els={".collectionViewItems":"$list"}
e.prototype.defaults=Object(_["b"])({itemViewOptions:{}},{emptyMessage:function(){return o.t("no_items","No items.")}})
e.prototype.template=g
e.prototype.initialize=function(t){e.__super__.initialize.apply(this,arguments)
return this.attachCollection()}
e.prototype.render=function(){e.__super__.render.apply(this,arguments)
this.empty||this.renderItems()
return this}
e.prototype.toJSON=function(){return c.a.extend(this.options,{emptyMessage:this.emptyMessage,listClassName:this.listClassName,ENV:ENV})}
e.prototype.reorder=function(){var t,e,r
this.collection.sort()
this.$list.children().detach()
t=function(){var t,r,n,i
n=this.collection.models
i=[]
for(t=0,r=n.length;t<r;t++){e=n[t]
i.push(e.itemView.$el)}return i}.call(this)
return(r=this.$list).append.apply(r,t)}
e.prototype.attachCollection=function(){this.listenTo(this.collection,"reset",this.renderOnReset)
this.listenTo(this.collection,"add",this.renderOnAdd)
this.listenTo(this.collection,"remove",this.removeItem)
return this.empty=!this.collection.length}
e.prototype.detachCollection=function(){return this.stopListening(this.collection)}
e.prototype.switchCollection=function(t){this.detachCollection()
this.collection=t
return this.attachCollection()}
e.prototype.removePreviousItems=function(t){var e,r,n,i,o
o=[]
for(e=0,r=t.length;e<r;e++){n=t[e]
o.push(null!=(i=n.view)?i.remove():void 0)}return o}
e.prototype.renderOnReset=function(t,e){this.empty=!this.collection.length
this.removePreviousItems(e.previousModels)
return this.render()}
e.prototype.renderItems=function(){this.collection.each(this.renderItem.bind(this))
return this.trigger("renderedItems")}
e.prototype.removeItem=function(t){this.empty=!this.collection.length
return this.empty?this.render():t.view.remove()}
e.prototype.renderOnAdd=function(t){this.empty&&this.render()
this.empty=false
return this.renderItem(t)}
e.prototype.renderItem=function(t){var e
e=this.createItemView(t)
e.render()
"function"===typeof this.attachItemView&&this.attachItemView(t,e)
return this.insertView(e)}
e.prototype.createItemView=function(t){var e
e=new this.itemView(l.a.extend({},this.itemViewOptions||{},{model:t}))
t.itemView=e
return e}
e.prototype.insertView=function(t){var e
e=this.collection.indexOf(t.model)
return 0===e?this.prependView(t):e===this.collection.length-1?this.appendView(t):this.insertViewAtIndex(t,e)}
e.prototype.insertViewAtIndex=function(t,e){var r
r=this.$list.children().eq(e)
return r.length?r.before(t.el):this.$list.append(t.el)}
e.prototype.prependView=function(t){return this.$list.prepend(t.el)}
e.prototype.appendView=function(t){return this.$list.append(t.el)}
return e}(p.a.View)}}])

//# sourceMappingURL=46-c-a53f1af85c.js.map