"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5886],{35318:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>f});var a=r(27378);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var o=a.createContext({}),d=function(t){var e=a.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):p(p({},e),t)),r},s=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),c=d(r),u=n,f=c["".concat(o,".").concat(u)]||c[u]||m[u]||i;return r?a.createElement(f,p(p({ref:e},s),{},{components:r})):a.createElement(f,p({ref:e},s))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,p=new Array(i);p[0]=u;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l[c]="string"==typeof t?t:n,p[1]=l;for(var d=2;d<i;d++)p[d]=r[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},56985:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=r(25773),n=(r(27378),r(35318));const i={description:"Adafruit QT Py ESP32-C3 WiFi"},p="Adafruit QT Py ESP32-C3 WiFi",l={unversionedId:"devices/esp32/adafruit-qt-py-c3",id:"devices/esp32/adafruit-qt-py-c3",title:"Adafruit QT Py ESP32-C3 WiFi",description:"Adafruit QT Py ESP32-C3 WiFi",source:"@site/docs/devices/esp32/adafruit-qt-py-c3.mdx",sourceDirName:"devices/esp32",slug:"/devices/esp32/adafruit-qt-py-c3",permalink:"/devicescript/devices/esp32/adafruit-qt-py-c3",draft:!1,tags:[],version:"current",frontMatter:{description:"Adafruit QT Py ESP32-C3 WiFi"},sidebar:"tutorialSidebar",previous:{title:"Adafruit Feather ESP32-S2",permalink:"/devicescript/devices/esp32/adafruit-feather-esp32-s2"},next:{title:"Espressif ESP32 (bare)",permalink:"/devicescript/devices/esp32/esp32-bare"}},o={},d=[{value:"Features",id:"features",level:2},{value:"Stores",id:"stores",level:2},{value:"Pins",id:"pins",level:2},{value:"DeviceScript import",id:"devicescript-import",level:2},{value:"Firmware update",id:"firmware-update",level:2},{value:"Configuration",id:"configuration",level:2}],s={toc:d},c="wrapper";function m(t){let{components:e,...r}=t;return(0,n.kt)(c,(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"adafruit-qt-py-esp32-c3-wifi"},"Adafruit QT Py ESP32-C3 WiFi"),(0,n.kt)("p",null,"A tiny ESP32-C3 board."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://microsoft.github.io/jacdac-docs/images/devices/adafruit/qtpyesp32c3wifidevboardv10.catalog.jpg",alt:"Adafruit QT Py ESP32-C3 WiFi picture"})),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"I2C on SDA_D4/SCL_D5 using Qwiic connector"),(0,n.kt)("li",{parentName:"ul"},"WS2812B RGB LED on pin 2  (use ",(0,n.kt)("a",{parentName:"li",href:"/developer/status-light"},"setStatusLight")," to control)"),(0,n.kt)("li",{parentName:"ul"},"Serial logging on pin TX_D6 at 115200 8N1")),(0,n.kt)("p",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Service: buttonBOOT (button)")),(0,n.kt)("p",null),(0,n.kt)("h2",{id:"stores"},"Stores"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.adafruit.com/product/5405"},"https://www.adafruit.com/product/5405"))),(0,n.kt)("h2",{id:"pins"},"Pins"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"pin name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"hardware id"),(0,n.kt)("th",{parentName:"tr",align:"right"},"features"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"A0_D0")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO4"),(0,n.kt)("td",{parentName:"tr",align:"right"},"analogIn,  debug,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"A1_D1")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO3"),(0,n.kt)("td",{parentName:"tr",align:"right"},"analogIn,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"A2_D2")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"analogIn,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"A3_D3")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"analogIn,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"MISO_D9")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO8"),(0,n.kt)("td",{parentName:"tr",align:"right"},"boot,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"MOSI_D10")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO7"),(0,n.kt)("td",{parentName:"tr",align:"right"},"debug,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"RX_D7")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO20"),(0,n.kt)("td",{parentName:"tr",align:"right"},"bootUart,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"SCK_D8")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO10"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"SCL_D5")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO6"),(0,n.kt)("td",{parentName:"tr",align:"right"},"i2c.pinSCL,  debug,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"SDA_D4")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO5"),(0,n.kt)("td",{parentName:"tr",align:"right"},"i2c.pinSDA,  debug,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"TX_D6")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO21"),(0,n.kt)("td",{parentName:"tr",align:"right"},"log.pinTX,  bootUart,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"$services.buttonBOOT","[0]",".pin")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO9"),(0,n.kt)("td",{parentName:"tr",align:"right"},"$services.buttonBOOT","[0]",".pin,  boot,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"led.pin")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"led.pin,  analogIn,  boot,  io")))),(0,n.kt)("h2",{id:"devicescript-import"},"DeviceScript import"),(0,n.kt)("p",null,"You must add this import statement to load\nthe pinout configuration for this device."),(0,n.kt)("p",null,"In ",(0,n.kt)("a",{parentName:"p",href:"/getting-started/vscode"},"Visual Studio Code"),",\nclick the ",(0,n.kt)("strong",{parentName:"p"},"wand"),' icon on the file menu and\nselect "Adafruit QT Py ESP32-C3 WiFi".'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { pins, board } from "@dsboard/adafruit_qt_py_c3"\n')),(0,n.kt)("p",null),(0,n.kt)("h2",{id:"firmware-update"},"Firmware update"),(0,n.kt)("p",null,"In Visual Studio Code,\nselect ",(0,n.kt)("strong",{parentName:"p"},"DeviceScript: Flash Firmware...")," from the command palette."),(0,n.kt)("p",null,"Run this ",(0,n.kt)("a",{parentName:"p",href:"/api/cli"},"command line")," command and follow the instructions."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"devicescript flash --board adafruit_qt_py_c3\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/microsoft/devicescript-esp32/releases/latest/download/devicescript-esp32c3-adafruit_qt_py_c3-0x0.bin"},"Firmware"))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="adafruit_qt_py_c3.json"',title:'"adafruit_qt_py_c3.json"'},'{\n    "$schema": "https://raw.githubusercontent.com/microsoft/devicescript-esp32/main/boards/esp32deviceconfig.schema.json",\n    "id": "adafruit_qt_py_c3",\n    "devName": "Adafruit QT Py ESP32-C3 WiFi",\n    "productId": "0x3693d40b",\n    "$description": "A tiny ESP32-C3 board.",\n    "archId": "esp32c3",\n    "url": "https://www.adafruit.com/product/5405",\n    "$services": [\n        {\n            "name": "buttonBOOT",\n            "pin": 9,\n            "service": "button"\n        }\n    ],\n    "i2c": {\n        "$connector": "Qwiic",\n        "pinSCL": "SCL_D5",\n        "pinSDA": "SDA_D4"\n    },\n    "led": {\n        "pin": 2,\n        "type": 1\n    },\n    "log": {\n        "pinTX": "TX_D6"\n    },\n    "pins": {\n        "A0_D0": 4,\n        "A1_D1": 3,\n        "A2_D2": 1,\n        "A3_D3": 0,\n        "MISO_D9": 8,\n        "MOSI_D10": 7,\n        "RX_D7": 20,\n        "SCK_D8": 10,\n        "SCL_D5": 6,\n        "SDA_D4": 5,\n        "TX_D6": 21\n    }\n}\n')))}m.isMDXComponent=!0}}]);