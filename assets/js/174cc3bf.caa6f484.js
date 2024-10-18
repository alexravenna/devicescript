"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4690],{35318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),u=a,v=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return r?n.createElement(v,o(o({ref:t},s),{},{components:r})):n.createElement(v,o({ref:t},s))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},82180:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(25773),a=(r(27378),r(35318));const i={sidebar_position:2,description:"Learn how to collect usage telemetry of your DeviceScript using trackEvent, trackMetric, and trackException methods.",keywords:["DeviceScript","telemetry","trackEvent","trackMetric","trackException"]},o="Application Telemetry",c={unversionedId:"developer/development-gateway/telemetry",id:"developer/development-gateway/telemetry",title:"Application Telemetry",description:"Learn how to collect usage telemetry of your DeviceScript using trackEvent, trackMetric, and trackException methods.",source:"@site/docs/developer/development-gateway/telemetry.mdx",sourceDirName:"developer/development-gateway",slug:"/developer/development-gateway/telemetry",permalink:"/devicescript/developer/development-gateway/telemetry",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Learn how to collect usage telemetry of your DeviceScript using trackEvent, trackMetric, and trackException methods.",keywords:["DeviceScript","telemetry","trackEvent","trackMetric","trackException"]},sidebar:"tutorialSidebar",previous:{title:"Messages",permalink:"/devicescript/developer/development-gateway/messages"},next:{title:"Environment",permalink:"/devicescript/developer/development-gateway/environment"}},l={},p=[{value:"Exceptions",id:"exceptions",level:3},{value:"Events",id:"events",level:3},{value:"Metrics",id:"metrics",level:3}],s={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"application-telemetry"},"Application Telemetry"),(0,a.kt)("p",null,"You can collect usage telemetry of your DeviceScript using ",(0,a.kt)("inlineCode",{parentName:"p"},"trackEvent")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"trackMetric")),(0,a.kt)("p",null,"When connected to the gateway, the device is modelled as a user and the connection as a session.\nThe data is injected directly\nin ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview"},"Application Insights"),"\nand can be analyzed through the Azure portal."),(0,a.kt)("h3",{id:"exceptions"},"Exceptions"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"trackException")," method uploads an exception to Application Insights. The stacktrace information is expanded in the gateway."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { trackException } from "@devicescript/cloud"\n\ntry {\n    throw new Error("noes!")\n} catch (e) {\n    // highlight-next-line\n    await trackException(e as Error)\n}\n')),(0,a.kt)("h3",{id:"events"},"Events"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"trackEvent")," method creates custom events in application insights. The event may be buffered or sampled\nto reduce the network load."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { trackEvent } from "@devicescript/cloud"\n\n// highlight-next-line\nawait trackEvent("started")\n')),(0,a.kt)("h3",{id:"metrics"},"Metrics"),(0,a.kt)("p",null,"The metric aggregates a numerical value and upload the aggregate when requested."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Temperature } from "@devicescript/core"\nimport { createMetric } from "@devicescript/cloud"\n\nconst thermo = new Temperature()\n// highlight-next-line\nconst temp = createMetric("temp")\n// highlight-next-line\nthermo.reading.subscribe(async t => temp.add(t))\nsetInterval(async () => {\n    // highlight-next-line\n    await temp.upload()\n}, 30000)\n')))}m.isMDXComponent=!0}}]);