(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Singer"],{"20d0":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r=Object(c["O"])("data-v-225332bc");Object(c["x"])("data-v-225332bc");var u={class:"singer"};Object(c["v"])();var a=r((function(e,t,n,a,o,i){var l=Object(c["C"])("index-list"),s=Object(c["C"])("router-view"),f=Object(c["D"])("loading");return Object(c["M"])((Object(c["u"])(),Object(c["h"])("div",u,[Object(c["j"])(l,{data:o.singers,onSelect:i.selectSinger},null,8,["data","onSelect"]),Object(c["j"])(s,null,{default:r((function(e){var t=e.Component;return[Object(c["j"])(c["d"],{appear:"",name:"slide"},{default:r((function(){return[(Object(c["u"])(),Object(c["h"])(Object(c["E"])(t),{singer:o.selectedSinger},null,8,["singer"]))]})),_:2},1024)]})),_:1})],512)),[[f,!o.singers.length]])})),o=n("1da1"),i=(n("96cf"),n("ae58")),l=(n("b0c0"),Object(c["O"])("data-v-7e70881e"));Object(c["x"])("data-v-7e70881e");var s={ref:"groupRef"},f={class:"title"},j={class:"avatar"},b={class:"name"},d={class:"fixed-title"};Object(c["v"])();var O=l((function(e,t,n,r,u,a){var o=Object(c["C"])("scroll"),i=Object(c["D"])("lazy");return Object(c["u"])(),Object(c["h"])(o,{class:"index-list","probe-type":3,onScroll:r.onScroll,ref:"scrollRef",click:!0},{default:l((function(){return[Object(c["j"])("ul",s,[(Object(c["u"])(!0),Object(c["h"])(c["a"],null,Object(c["A"])(n.data,(function(e){return Object(c["u"])(),Object(c["h"])("li",{key:e.title,class:"group"},[Object(c["j"])("h2",f,Object(c["G"])(e.title),1),Object(c["j"])("ul",null,[(Object(c["u"])(!0),Object(c["h"])(c["a"],null,Object(c["A"])(e.list,(function(e){return Object(c["u"])(),Object(c["h"])("li",{key:e.id,class:"item",onClick:function(t){return r.onItemClick(e)}},[Object(c["M"])(Object(c["j"])("img",j,null,512),[[i,e.pic]]),Object(c["j"])("span",b,Object(c["G"])(e.name),1)],8,["onClick"])})),128))])])})),128))],512),Object(c["M"])(Object(c["j"])("div",{class:"fixed",style:r.fixedStyle},[Object(c["j"])("div",d,Object(c["G"])(r.fixedTitle),1)],4),[[c["J"],r.fixedTitle]]),Object(c["j"])("div",{class:"shortcut",onTouchstart:t[1]||(t[1]=Object(c["N"])((function(){return r.onShortcutTouchStart&&r.onShortcutTouchStart.apply(r,arguments)}),["stop","prevent"])),onTouchmove:t[2]||(t[2]=Object(c["N"])((function(){return r.onShortcutTouchMove&&r.onShortcutTouchMove.apply(r,arguments)}),["stop","prevent"])),onTouchend:t[3]||(t[3]=Object(c["N"])((function(){}),["stop","prevent"]))},[Object(c["j"])("ul",null,[(Object(c["u"])(!0),Object(c["h"])(c["a"],null,Object(c["A"])(r.shortcutList,(function(e,t){return Object(c["u"])(),Object(c["h"])("li",{key:e,"data-index":t,class:["item",{current:r.currentIndex===t}]},Object(c["G"])(e),11,["data-index"])})),128))])],32)]})),_:1},8,["onScroll"])})),h=n("70d8");function v(e){var t=30,n=Object(c["z"])(null),r=Object(c["z"])([]),u=Object(c["z"])(0),a=Object(c["z"])(0),i=Object(c["z"])(0),l=Object(c["f"])((function(){if(u.value<0)return"";var t=e.data[a.value];return t?t.title:""})),s=Object(c["f"])((function(){var e=i.value,n=e>0&&e<t?e-t:0;return{transform:"translate3d(0,".concat(n,"px,0)")}}));function f(){var e=n.value.children,t=r.value,c=0;t.length=0,t.push(c);for(var u=0;u<e.length;u++)c+=e[u].clientHeight,t.push(c)}function j(e){u.value=-e.y}return Object(c["K"])((function(){return e.data}),Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["p"])();case 2:f();case 3:case"end":return e.stop()}}),e)})))),Object(c["K"])(u,(function(e){for(var t=r.value,n=0;n<t.length-1;n++){var c=t[n],u=t[n+1];e>=c&&e<=u&&(a.value=n,i.value=u-e)}})),{groupRef:n,onScroll:j,fixedTitle:l,fixedStyle:s,currentIndex:a}}n("d81d");function p(e,t){var n=18,r=Object(c["z"])(null),u=Object(c["f"])((function(){return e.data.map((function(e){return e.title}))})),a={};function o(e){var t=parseInt(e.target.dataset.index);a.y1=e.touches[0].pageY,a.anchorIndex=t,l(t)}function i(e){a.y2=e.touches[0].pageY;var t=(a.y2-a.y1)/n|0,c=a.anchorIndex+t;l(c)}function l(e){if(!isNaN(e)){e=Math.max(0,Math.min(u.value.length-1,e));var n=t.value.children[e],c=r.value.scroll;c.scrollToElement(n,0)}}return{shortcutList:u,scrollRef:r,onShortcutTouchStart:o,onShortcutTouchMove:i}}var g={name:"index-list",components:{Scroll:h["a"]},props:{data:{type:Array,default:function(){return[]}}},emits:["select"],setup:function(e,t){var n=t.emit,c=v(e),r=c.groupRef,u=c.onScroll,a=c.fixedTitle,o=c.fixedStyle,i=c.currentIndex,l=p(e,r),s=l.shortcutList,f=l.scrollRef,j=l.onShortcutTouchStart,b=l.onShortcutTouchMove;function d(e){n("select",e)}return{onItemClick:d,groupRef:r,onScroll:u,fixedTitle:a,fixedStyle:o,currentIndex:i,shortcutList:s,scrollRef:f,onShortcutTouchStart:j,onShortcutTouchMove:b}}};n("94f1");g.render=O,g.__scopeId="data-v-7e70881e";var m=g,S=n("335a"),x=n("aaef"),y={name:"singer",components:{IndexList:m},data:function(){return{singers:[],selectedSinger:null}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["b"])();case 2:n=t.sent,e.singers=n.singers;case 4:case"end":return t.stop()}}),t)})))()},methods:{selectSinger:function(e){this.selectedSinger=e,this.cacheSinger(e),this.$router.push({path:"/singer/".concat(e.mid)})},cacheSinger:function(e){S["a"].session.set(x["f"],e)}}};n("64cd");y.render=a,y.__scopeId="data-v-225332bc";t["default"]=y},5337:function(e,t,n){},5977:function(e,t,n){},"64cd":function(e,t,n){"use strict";n("5337")},"70d8":function(e,t,n){"use strict";var c=n("1da1"),r=(n("96cf"),n("7a23")),u=n("bba4"),a=n("5502");t["a"]={name:"wrap-scroll",props:u["a"].props,emits:u["a"].emits,render:function(e){return Object(r["m"])(u["a"],Object(r["o"])({ref:"scrollRef"},e.$props,{onScroll:function(t){e.$emit("scroll",t)}}),{default:Object(r["L"])((function(){return[Object(r["B"])(e.$slots,"default")]}))})},setup:function(){var e=Object(r["z"])(null),t=Object(r["f"])((function(){return e.value.scroll})),n=Object(a["e"])(),u=Object(r["f"])((function(){return n.state.playlist}));return Object(r["K"])(u,Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(r["p"])();case 2:t.value.refresh();case 3:case"end":return e.stop()}}),e)})))),{scrollRef:e,scroll:t}}}},"94f1":function(e,t,n){"use strict";n("5977")},ae58:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return u}));var c=n("58ff");function r(){return Object(c["a"])("/api/getSingerList")}function u(e){return Object(c["a"])("/api/getSingerDetail",{mid:e.mid})}}}]);