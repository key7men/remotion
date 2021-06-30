(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5023],{3905:function(e,a,t){"use strict";t.r(a),t.d(a,{MDXContext:function(){return m},MDXProvider:function(){return c},mdx:function(){return v},useMDXComponents:function(){return i},withMDXComponents:function(){return p}});var n=t(2784);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function d(){return(d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},d=Object.keys(e);for(n=0;n<d.length;n++)t=d[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)t=d[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var m=n.createContext({}),p=function(e){return function(a){var t=i(a.components);return n.createElement(e,d({},a,{components:t}))}},i=function(e){var a=n.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=i(e.components);return n.createElement(m.Provider,{value:a},e.children)},N={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},x=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,d=e.originalType,r=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=i(t),c=s,x=p["".concat(r,".").concat(c)]||p[c]||N[c]||d;return t?n.createElement(x,l(l({ref:a},m),{},{components:t})):n.createElement(x,l({ref:a},m))}));function v(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var d=t.length,r=new Array(d);r[0]=x;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,r[1]=l;for(var m=2;m<d;m++)r[m]=t[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}x.displayName="MDXCreateElement"},53775:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return m},default:function(){return i}});var n=t(22122),s=t(19756),d=(t(2784),t(3905)),r=["components"],l={id:"data-fetching",title:"Data fetching"},o={unversionedId:"data-fetching",id:"data-fetching",isDocsHomePage:!1,title:"Data fetching",description:"One of the most groundbreaking things about Remotion is that you can fetch data from an API to display in your video like you would in a regular React project. It works almost like you are used to: You can use the fetch API to load the data in a useEffect and set a state.",source:"@site/docs/data-fetching.md",sourceDirName:".",slug:"/data-fetching",permalink:"/docs/data-fetching",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/data-fetching.md",version:"current",frontMatter:{id:"data-fetching",title:"Data fetching"},sidebar:"someSidebar",previous:{title:"Plain JavaScript",permalink:"/docs/javascript"},next:{title:"Encoding Guide",permalink:"/docs/encoding"}},m=[{value:"Telling Remotion to wait until the data is loaded",id:"telling-remotion-to-wait-until-the-data-is-loaded",children:[]},{value:"Caching",id:"caching",children:[]},{value:"Time limit",id:"time-limit",children:[]},{value:"Using <code>delayRender()</code> to calculate video metadata",id:"using-delayrender-to-calculate-video-metadata",children:[]},{value:"See also",id:"see-also",children:[]}],p={toc:m};function i(e){var a=e.components,t=(0,s.default)(e,r);return(0,d.mdx)("wrapper",(0,n.default)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,d.mdx)("p",null,"One of the most groundbreaking things about Remotion is that you can fetch data from an API to display in your video like you would in a regular React project. It works almost like you are used to: You can use the ",(0,d.mdx)("inlineCode",{parentName:"p"},"fetch")," API to load the data in a ",(0,d.mdx)("inlineCode",{parentName:"p"},"useEffect")," and set a state."),(0,d.mdx)("h2",{id:"telling-remotion-to-wait-until-the-data-is-loaded"},"Telling Remotion to wait until the data is loaded"),(0,d.mdx)("p",null,"There are two functions, ",(0,d.mdx)("a",{parentName:"p",href:"/docs/delay-render"},(0,d.mdx)("inlineCode",{parentName:"a"},"delayRender"))," and ",(0,d.mdx)("a",{parentName:"p",href:"/docs/continue-render"},(0,d.mdx)("inlineCode",{parentName:"a"},"continueRender")),", which you can use to tell Remotion to not yet render the frame. If you want to asynchronously render a frame, you should call ",(0,d.mdx)("inlineCode",{parentName:"p"},"delayRender()")," as soon as possible, before the window ",(0,d.mdx)("inlineCode",{parentName:"p"},"onload")," event is fired. The function returns a handle that you need to give Remotion the green light to render later using ",(0,d.mdx)("inlineCode",{parentName:"p"},"continueRender()"),"."),(0,d.mdx)("undefined",null,(0,d.mdx)("pre",{className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,d.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,d.mdx)("div",{parentName:"pre",className:"code-container"},(0,d.mdx)("code",{parentName:"div"},(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) function useEffect(effect: EffectCallback, deps?: DependencyList | undefined): void\nimport useEffect"},"useEffect"),", ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>] (+1 overload)\nimport useState"},"useState"),"} "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'react'"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const continueRender: (handle: number) => void\nimport continueRender"},"continueRender"),", ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const delayRender: () => number\nimport delayRender"},"delayRender"),"} "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'remotion'"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),"\n",(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"export"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const MyVideo: () => JSX.Element"},"MyVideo")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," ["),(0,d.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const data: null"},"data")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},", "),(0,d.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const setData: React.Dispatch<React.SetStateAction<null>>"},"setData")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"] "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useState<null>(initialState: (() => null) | null): [null, React.Dispatch<React.SetStateAction<null>>] (+1 overload)\nimport useState"},"useState")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,d.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"null"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},");")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," ["),(0,d.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const handle: number"},"handle")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"] "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useState<number>(initialState: number | (() => number)): [number, React.Dispatch<React.SetStateAction<number>>] (+1 overload)\nimport useState"},"useState")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"(() "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) delayRender(): number\nimport delayRender"},"delayRender")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"());")),"\n",(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const fetchData: () => Promise<void>"},"fetchData")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"async"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const response: Response"},"response")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"await"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"function fetch(input: RequestInfo, init?: RequestInit | undefined): Promise<Response>"},"fetch")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,d.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'http://example.com/api'"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},");")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const json: any"},"json")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"await"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const response: Response"},"response")),(0,d.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},".",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(method) Body.json(): Promise<any>"},"json")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"();")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,d.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const setData: (value: React.SetStateAction<null>) => void"},"setData")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"(",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const json: any"},"json"),");")),"\n",(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,d.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) continueRender(handle: number): void\nimport continueRender"},"continueRender")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"(",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const handle: number"},"handle"),");")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  }")),"\n",(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,d.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useEffect(effect: React.EffectCallback, deps?: React.DependencyList | undefined): void\nimport useEffect"},"useEffect")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"(() "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,d.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const fetchData: () => Promise<void>"},"fetchData")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"();")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  },\xa0[]);")),"\n",(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <"),(0,d.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"      {",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const data: null"},"data")," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"?"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"        <"),(0,d.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},">This video has data from an API! {"),(0,d.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"var JSON: JSON"},"JSON")),(0,d.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},".",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(method) JSON.stringify(value: any, replacer?: ((this: any, key: string, value: any) => any) | undefined, space?: string | number | undefined): string (+1 overload)"},"stringify")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"(",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const data: null"},"data"),")}</"),(0,d.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"      ) "),(0,d.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"null"),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"    </"),(0,d.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  );")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"}"))))),(0,d.mdx)("pre",{className:"shiki min-dark twoslash lsp",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,d.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,d.mdx)("div",{parentName:"pre",className:"code-container"},(0,d.mdx)("code",{parentName:"div"},(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," {",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) function useEffect(effect: EffectCallback, deps?: DependencyList | undefined): void\nimport useEffect"},"useEffect"),", ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>] (+1 overload)\nimport useState"},"useState"),"} "),(0,d.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'react'"),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},";")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," {",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const continueRender: (handle: number) => void\nimport continueRender"},"continueRender"),", ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const delayRender: () => number\nimport delayRender"},"delayRender"),"} "),(0,d.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'remotion'"),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},";")),"\n",(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"export"),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const MyVideo: () => JSX.Element"},"MyVideo")," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," () "),(0,d.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," {")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  "),(0,d.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ["),(0,d.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const data: null"},"data")),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},", "),(0,d.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const setData: React.Dispatch<React.SetStateAction<null>>"},"setData")),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"] "),(0,d.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useState<null>(initialState: (() => null) | null): [null, React.Dispatch<React.SetStateAction<null>>] (+1 overload)\nimport useState"},"useState"),"("),(0,d.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},"null"),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},");")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  "),(0,d.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ["),(0,d.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const handle: number"},"handle")),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"] "),(0,d.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useState<number>(initialState: number | (() => number)): [number, React.Dispatch<React.SetStateAction<number>>] (+1 overload)\nimport useState"},"useState"),"(() "),(0,d.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) delayRender(): number\nimport delayRender"},"delayRender"),"());")),"\n",(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  "),(0,d.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const fetchData: () => Promise<void>"},"fetchData")," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"async"),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," () "),(0,d.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," {")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"    "),(0,d.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const response: Response"},"response")),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"await"),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"function fetch(input: RequestInfo, init?: RequestInit | undefined): Promise<Response>"},"fetch"),"("),(0,d.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'http://example.com/api'"),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},");")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"    "),(0,d.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const json: any"},"json")),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"await"),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const response: Response"},"response")),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},".",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(method) Body.json(): Promise<any>"},"json"),"();")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"    ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const setData: (value: React.SetStateAction<null>) => void"},"setData"),"(",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const json: any"},"json"),");")),"\n",(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"    ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) continueRender(handle: number): void\nimport continueRender"},"continueRender"),"(",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const handle: number"},"handle"),");")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  }")),"\n",(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useEffect(effect: React.EffectCallback, deps?: React.DependencyList | undefined): void\nimport useEffect"},"useEffect"),"(() "),(0,d.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," {")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"    ",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const fetchData: () => Promise<void>"},"fetchData"),"();")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  },\xa0[]);")),"\n",(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  "),(0,d.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"return"),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," (")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"    <"),(0,d.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},">")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"      {",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const data: null"},"data")," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"?"),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," (")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"        <"),(0,d.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},">This video has data from an API! {"),(0,d.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"var JSON: JSON"},"JSON")),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},".",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(method) JSON.stringify(value: any, replacer?: ((this: any, key: string, value: any) => any) | undefined, space?: string | number | undefined): string (+1 overload)"},"stringify"),"(",(0,d.mdx)("data-lsp",{parentName:"span",lsp:"const data: null"},"data"),")}</"),(0,d.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},">")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"      ) "),(0,d.mdx)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,d.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},"null"),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"}")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"    </"),(0,d.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},(0,d.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},">")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  );")),(0,d.mdx)("div",{parentName:"code",className:"line"},(0,d.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"}")))))),(0,d.mdx)("h2",{id:"caching"},"Caching"),(0,d.mdx)("p",null,"It is important to know that in the render process, data fetching works on a per-frame basis, so for every frame, the page gets fully reloaded and screenshotted. You should consider caching the result of your API, to avoid rate-limits and also to speed up the render of your video. We have two suggestions on how to do that:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Use the ",(0,d.mdx)("inlineCode",{parentName:"p"},"localStorage")," API to persist data after a network request and make a request only if the local storage is empty.")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Fetch the data before the render, and store it as a JSON file, then import this JSON file."))),(0,d.mdx)("h2",{id:"time-limit"},"Time limit"),(0,d.mdx)("p",null,"You need to clear all handles created by ",(0,d.mdx)("inlineCode",{parentName:"p"},"delayRender")," within 30 seconds after the page is opened. This limit is imposed by Puppeteer, but makes a lot of sense as going over this limit would make the rendering process massively slow."),(0,d.mdx)("h2",{id:"using-delayrender-to-calculate-video-metadata"},"Using ",(0,d.mdx)("inlineCode",{parentName:"h2"},"delayRender()")," to calculate video metadata"),(0,d.mdx)("p",null,"You can also customize duration, frame rate and dimensions based on asynchronous data fetching:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("strong",{parentName:"li"},"See: ",(0,d.mdx)("a",{parentName:"strong",href:"dynamic-metadata"},"Dynamic duration, FPS & dimensions")))),(0,d.mdx)("h2",{id:"see-also"},"See also"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"/docs/delay-render"},"delayRender()"))))}i.isMDXComponent=!0}}]);