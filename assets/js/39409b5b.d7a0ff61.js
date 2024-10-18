"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[118],{35318:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=i,k=d["".concat(o,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[d]="string"==typeof e?e:i,l[1]=p;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(25773),i=(n(27378),n(35318));const r={pagination_prev:null,pagination_next:null,description:"DeviceScript client for Gamepad service"},l="Gamepad",p={unversionedId:"api/clients/gamepad",id:"api/clients/gamepad",title:"Gamepad",description:"DeviceScript client for Gamepad service",source:"@site/docs/api/clients/gamepad.md",sourceDirName:"api/clients",slug:"/api/clients/gamepad",permalink:"/devicescript/api/clients/gamepad",draft:!1,tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null,description:"DeviceScript client for Gamepad service"},sidebar:"tutorialSidebar"},o={},s=[{value:"Registers",id:"registers",level:2},{value:"axes",id:"ro:axes",level:3},{value:"button",id:"ro:button",level:3},{value:"reading",id:"ro:reading",level:3},{value:"variant",id:"const:variant",level:3},{value:"buttonsAvailable",id:"const:buttonsAvailable",level:3},{value:"Events",id:"events",level:2},{value:"change",id:"change",level:3}],m={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gamepad"},"Gamepad"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This service is rc and may change in the future.")),(0,i.kt)("p",null,"A two axis directional gamepad with optional buttons."),(0,i.kt)("p",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { Gamepad } from "@devicescript/core"\n\nconst gamepad = new Gamepad()\n')),(0,i.kt)("p",null),(0,i.kt)("h2",{id:"registers"},"Registers"),(0,i.kt)("h3",{id:"ro:axes"},"axes"),(0,i.kt)("p",null,"An array representing the controls with axes present on the device (e.g. analog thumb sticks),\nas ",(0,i.kt)("inlineCode",{parentName:"p"},"[x, y]"),". Each entry in the array is a floating point value in the range ",(0,i.kt)("inlineCode",{parentName:"p"},"-1.0 \u2013 1.0"),", representing the axis position from the lowest value (",(0,i.kt)("inlineCode",{parentName:"p"},"-1.0"),") to the highest value (",(0,i.kt)("inlineCode",{parentName:"p"},"1.0"),")."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ",(0,i.kt)("inlineCode",{parentName:"li"},"ClientRegister<{ x: number; y: number }>")," (packing format ",(0,i.kt)("inlineCode",{parentName:"li"},"i1.15 i1.15"),")")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { Gamepad } from "@devicescript/core"\n\nconst gamepad = new Gamepad()\n// ...\ngamepad.axes.subscribe(async ({ x, y }) => {\n    console.log({ x, y })\n})\n')),(0,i.kt)("h3",{id:"ro:button"},"button"),(0,i.kt)("p",null,"A client register for the requested button or combination of buttons. The value is ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if the button is pressed, ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ",(0,i.kt)("inlineCode",{parentName:"li"},"ClientRegister<GamepadButtons>"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { Gamepad, GamepadButtons } from "@devicescript/core"\n\nconst gamepad = new Gamepad()\n// ...\ngamepad.button(GamepadButtons.Down).subscribe(async pressed => {\n    console.log({ pressed })\n})\n')),(0,i.kt)("h3",{id:"ro:reading"},"reading"),(0,i.kt)("p",null,'If the gamepad is analog, the directional buttons should be "simulated", based on gamepad position\n(',(0,i.kt)("inlineCode",{parentName:"p"},"Left")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"{ x = -1, y = 0 }"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Up")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"{ x = 0, y = -1}"),").\nIf the gamepad is digital, then each direction will read as either ",(0,i.kt)("inlineCode",{parentName:"p"},"-1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," (in fixed representation).\nThe primary button on the gamepad is ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Register<any[]>")," (packing format ",(0,i.kt)("inlineCode",{parentName:"p"},"u32 i1.15 i1.15"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"track incoming values"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Gamepad } from "@devicescript/core"\n\nconst gamepad = new Gamepad()\n// ...\ngamepad.reading.subscribe(async (value) => {\n    ...\n})\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,i.kt)("h3",{id:"const:variant"},"variant"),(0,i.kt)("p",null,"The type of physical gamepad."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,i.kt)("inlineCode",{parentName:"p"},"u8"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"optional: this register may not be implemented")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"constant: the register value will not change (until the next reset)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"read only"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Gamepad } from "@devicescript/core"\n\nconst gamepad = new Gamepad()\n// ...\nconst value = await gamepad.variant.read()\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,i.kt)("h3",{id:"const:buttonsAvailable"},"buttonsAvailable"),(0,i.kt)("p",null,"Indicates a bitmask of the buttons that are mounted on the gamepad.\nIf the ",(0,i.kt)("inlineCode",{parentName:"p"},"Left"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"Up"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"Right"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"Down")," buttons are marked as available here, the gamepad is digital.\nEven when marked as not available, they will still be simulated based on the analog gamepad."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,i.kt)("inlineCode",{parentName:"p"},"u32"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"constant: the register value will not change (until the next reset)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"read only"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Gamepad } from "@devicescript/core"\n\nconst gamepad = new Gamepad()\n// ...\nconst value = await gamepad.buttonsAvailable.read()\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("h3",{id:"change"},"change"),(0,i.kt)("p",null,"Emitted whenever the state of buttons changes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip no-run",skip:!0,"no-run":!0},"gamepad.change.subscribe(() => {\n\n})\n")),(0,i.kt)("p",null))}c.isMDXComponent=!0}}]);