(window.webpackJsonp=window.webpackJsonp||[]).push([[27,28],{470:function(e,r,t){"use strict";t(11),t(6),t(12),t(70),t(35),t(312),t(212),t(71),t(90);var o=t(0);var n,c=t(72);r.a=(n="container",o.a.extend({name:"v-".concat(n),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,r){var t=r.props,data=r.data,o=r.children;data.staticClass="".concat(n," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var d=Object.keys(c).filter((function(e){if("slot"===e)return!1;var r=c[e];return e.startsWith("data-")?(data.attrs[e]=r,!1):r||"string"==typeof r}));d.length&&(data.staticClass+=" ".concat(d.join(" ")))}return t.id&&(data.domProps=data.domProps||{},data.domProps.id=t.id),e(t.tag,data,o)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(e,r){var t,o=r.props,data=r.data,n=r.children,d=data.attrs;return d&&(data.attrs={},t=Object.keys(d).filter((function(e){if("slot"===e)return!1;var r=d[e];return e.startsWith("data-")?(data.attrs[e]=r,!1):r||"string"==typeof r}))),o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),e(o.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(t||[])}),n)}})},508:function(e,r,t){"use strict";t.r(r);var o={data:function(){return{headers:[{text:"#",value:"num"},{text:"Category",value:"category"},{text:"Device",value:"device"},{text:"Sensor",value:"sensor"},{text:"Position",value:"position"},{text:"Product",value:"product"}],items:[{num:1,category:"Vision",device:"kinect",sensor:"Depth",position:"Front View",product:"Azure Kinect DK",version:"v3.0.0",ignore:!1},{num:2,category:"Vision",device:"kinect",sensor:"Keypoints",position:"Front View",product:"Azure Kinect DK",version:"v3.0.0",ignore:!1},{num:3,category:"Vision",device:"rs02",sensor:"Depth",position:"Top View",product:"Intel® RealSense™ Depth Camera D435i",version:"v3.0.0",ignore:!1},{num:4,category:"Vision",device:"LiDAR",sensor:"Point Cloud",position:"Front View",product:"ULTRA PACK(VLP-32C)-Veloidne",version:"v3.0.0",ignore:!1},{num:5,category:"Wearable",device:"atr01",sensor:"Acc",position:"Right Wrist",product:"ATR TSND151",version:"v3.0.0",ignore:!1},{num:6,category:"Wearable",device:"atr01",sensor:"Gyro",position:"Right Wrist",product:"ATR TSND151",version:"v3.0.0",ignore:!1},{num:7,category:"Wearable",device:"atr01",sensor:"Quaternion",position:"Right Wrist",product:"ATR TSND151",version:"v3.0.0",ignore:!1},{num:8,category:"Wearable",device:"atr02",sensor:"Acc",position:"Left Wrist",product:"ATR TSND151",version:"v3.0.0",ignore:!1},{num:9,category:"Wearable",device:"atr02",sensor:"Gyro",position:"Left Wrist",product:"ATR TSND151",version:"v3.0.0",ignore:!1},{num:10,category:"Wearable",device:"atr02",sensor:"Quaternion",position:"Left Wrist",product:"ATR TSND151",version:"v3.0.0",ignore:!1},{num:11,category:"Wearable",device:"atr03",sensor:"Acc",position:"Right Upper Arm",product:"ATR TSND151",version:"v3.0.0",ignore:!1},{num:12,category:"Wearable",device:"atr03",sensor:"Gyro",position:"Right Upper Arm",product:"ATR TSND151",version:"v3.0.0",ignore:!1},{num:13,category:"Wearable",device:"atr03",sensor:"Quaternion",position:"Right Upper Arm",product:"ATR TSND151",version:"v3.0.0",ignore:!1},{num:14,category:"Wearable",device:"atr04",sensor:"Acc",position:"Left Upper Arm",product:"ATR TSND151",version:"v3.0.0",ignore:!1},{num:15,category:"Wearable",device:"atr04",sensor:"Gyro",position:"Left Upper Arm",product:"ATR TSND151",version:"v3.0.0",ignore:!1},{num:16,category:"Wearable",device:"atr04",sensor:"Quaternion",position:"Left Upper Arm",product:"ATR TSND151",version:"v3.0.0",ignore:!1},{num:17,category:"Wearable",device:"e4-1",sensor:"Acc",position:"Right Wrist",product:"E4 wristband",version:"v3.0.0",ignore:!1},{num:18,category:"Wearable",device:"e4-1",sensor:"BVP",position:"Right Wrist",product:"E4 wristband",version:"v3.0.0",ignore:!1},{num:19,category:"Wearable",device:"e4-1",sensor:"EDA",position:"Right Wrist",product:"E4 wristband",version:"v3.0.0",ignore:!1},{num:20,category:"Wearable",device:"e4-1",sensor:"Temperature",position:"Right Wrist",product:"E4 wristband",version:"v3.0.0",ignore:!1},{num:21,category:"Wearable",device:"e4-2",sensor:"Acc",position:"Left Wrist",product:"E4 wristband",version:"v3.0.0",ignore:!1},{num:22,category:"Wearable",device:"e4-2",sensor:"BVP",position:"Left Wrist",product:"E4 wristband",version:"v3.0.0",ignore:!1},{num:23,category:"Wearable",device:"e4-2",sensor:"EDA",position:"Left Wrist",product:"E4 wristband",version:"v3.0.0",ignore:!1},{num:24,category:"Wearable",device:"e4-2",sensor:"Temperature",position:"Left Wrist",product:"E4 wristband",version:"v3.0.0",ignore:!1},{num:25,category:"IoT Device",device:"ht(handheld scanner)",sensor:"log",position:"-",product:"8001-C Portable Terminal",version:"v3.0.0",ignore:!1},{num:26,category:"IoT Device",device:"label-printer",sensor:"log",position:"-",product:"pseudo log data",version:"v3.0.0",ignore:!1}]}}},n=t(61),c=t(78),d=t.n(c),v=t(464),l=t(641),m=t(466),component=Object(n.a)(o,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-row",[t("v-col",{attrs:{cols:"12"}},[t("v-data-table",{attrs:{headers:e.headers,items:e.items,"disable-pagination":"","hide-default-footer":""}})],1)],1)}),[],!1,null,"4fefb51c",null);r.default=component.exports;d()(component,{VCol:v.a,VDataTable:l.a,VRow:m.a})},558:function(e,r,t){"use strict";t.r(r);var o={name:"GalleryModalitySection"},n=t(61),c=t(78),d=t.n(c),v=t(464),l=t(470),m=t(466),component=Object(n.a)(o,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("section",{staticClass:"gnt-sec-3"},[t("v-container",[t("v-row",[t("v-col",{attrs:{cols:"12"}},[t("h3",{staticClass:"text-h4",attrs:{id:"gallery-modality-section"}},[e._v("Sensors")])])],1),e._v(" "),t("GalleryModalitySensorList")],1)],1)}),[],!1,null,"6e8cf259",null);r.default=component.exports;d()(component,{GalleryModalitySensorList:t(508).default}),d()(component,{VCol:v.a,VContainer:l.a,VRow:m.a})}}]);