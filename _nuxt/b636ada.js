(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{467:function(t,r,n){"use strict";n(11),n(6),n(12),n(70),n(35),n(313),n(213),n(71),n(90);var e=n(0);var o,c=n(72);r.a=(o="container",e.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,r){var n=r.props,data=r.data,e=r.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var r=c[t];return t.startsWith("data-")?(data.attrs[t]=r,!1):r||"string"==typeof r}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,e)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,r){var n,e=r.props,data=r.data,o=r.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(t){if("slot"===t)return!1;var r=l[t];return t.startsWith("data-")?(data.attrs[t]=r,!1):r||"string"==typeof r}))),e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),t(e.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(n||[])}),o)}})},524:function(t,r,n){"use strict";n.r(r);var e={name:"ChallengeTaskOverview",data:function(){return{}}},o=n(61),c=n(78),l=n.n(c),d=n(461),v=n(467),f=n(463),component=Object(o.a)(e,(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("section",{staticClass:"gnt-sec-3"},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h2",{attrs:{id:"challenge-task-section-overview"}},[t._v("Overview")])])],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h3",[t._v("Background")]),t._v(" "),n("p",[t._v("\n           (TBD) \n        ")])])],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h3",[t._v("Challenge")]),t._v(" "),n("p",[t._v("\n           (TBD) \n        ")])])],1)],1)],1)}),[],!1,null,"ad32744e",null);r.default=component.exports;l()(component,{VCol:d.a,VContainer:v.a,VRow:f.a})}}]);