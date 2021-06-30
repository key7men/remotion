(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9662],{3905:function(e,a,n){"use strict";n.r(a),n.d(a,{MDXContext:function(){return p},MDXProvider:function(){return c},mdx:function(){return x},useMDXComponents:function(){return i},withMDXComponents:function(){return o}});var t=n(2784);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function m(){return(m=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},m=Object.keys(e);for(t=0;t<m.length;t++)n=m[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(t=0;t<m.length;t++)n=m[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),o=function(e){return function(a){var n=i(a.components);return t.createElement(e,m({},a,{components:n}))}},i=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):d(d({},a),e)),n},c=function(e){var a=i(e.components);return t.createElement(p.Provider,{value:a},e.children)},N={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},v=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,m=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),o=i(n),c=r,v=o["".concat(s,".").concat(c)]||o[c]||N[c]||m;return n?t.createElement(v,d(d({ref:a},p),{},{components:n})):t.createElement(v,d({ref:a},p))}));function x(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var m=n.length,s=new Array(m);s[0]=v;var d={};for(var l in a)hasOwnProperty.call(a,l)&&(d[l]=a[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,s[1]=d;for(var p=2;p<m;p++)s[p]=n[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}v.displayName="MDXCreateElement"},16800:function(e,a,n){"use strict";n.r(a),n.d(a,{frontMatter:function(){return d},metadata:function(){return l},toc:function(){return p},default:function(){return i}});var t=n(22122),r=n(19756),m=(n(2784),n(3905)),s=["components"],d={title:"useCurrentFrame()",id:"use-current-frame"},l={unversionedId:"use-current-frame",id:"use-current-frame",isDocsHomePage:!1,title:"useCurrentFrame()",description:"With this hook, you can retrieve the current frame of the video. Frames are 0-indexed, meaning the first frame is 0, the last frame is the duration of the composition in frames minus one. To learn more about how Remotion works with time, read the page about the fundamentals.",source:"@site/docs/use-current-frame.md",sourceDirName:".",slug:"/use-current-frame",permalink:"/docs/use-current-frame",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/use-current-frame.md",version:"current",frontMatter:{title:"useCurrentFrame()",id:"use-current-frame"},sidebar:"someSidebar",previous:{title:"spring()",permalink:"/docs/spring"},next:{title:"useVideoConfig()",permalink:"/docs/use-video-config"}},p=[{value:"See also",id:"see-also",children:[]}],o={toc:p};function i(e){var a=e.components,n=(0,r.default)(e,s);return(0,m.mdx)("wrapper",(0,t.default)({},o,n,{components:a,mdxType:"MDXLayout"}),(0,m.mdx)("p",null,"With this hook, you can retrieve the current frame of the video. Frames are 0-indexed, meaning the first frame is ",(0,m.mdx)("inlineCode",{parentName:"p"},"0"),", the last frame is the duration of the composition in frames minus one. To learn more about how Remotion works with time, read the page about ",(0,m.mdx)("a",{parentName:"p",href:"/docs/the-fundamentals"},"the fundamentals"),"."),(0,m.mdx)("p",null,"If the component you are writing is wrapped in a ",(0,m.mdx)("inlineCode",{parentName:"p"},"<Sequence>"),", ",(0,m.mdx)("inlineCode",{parentName:"p"},"useCurrentFrame")," will return the frame relative to when the Sequence starts."),(0,m.mdx)("p",null,"Say the timeline marker is positioned at frame 25. In the example below, ",(0,m.mdx)("inlineCode",{parentName:"p"},"useCurrentFrame")," will return ",(0,m.mdx)("inlineCode",{parentName:"p"},"20"),", except within the Subtitle component, where it will return ",(0,m.mdx)("inlineCode",{parentName:"p"},"15")," because it is within a sequence that starts at frame 10."),(0,m.mdx)("undefined",null,(0,m.mdx)("pre",{className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,m.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,m.mdx)("div",{parentName:"pre",className:"code-container"},(0,m.mdx)("code",{parentName:"div"},(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,m.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const useCurrentFrame: () => number\nimport useCurrentFrame"},"useCurrentFrame"),", ",(0,m.mdx)("data-lsp",{parentName:"span",lsp:'(alias) const Sequence: React.FC<{\n    children: React.ReactNode;\n    from: number;\n    durationInFrames: number;\n    name?: string | undefined;\n    layout?: "absolute-fill" | "none" | undefined;\n    showInTimeline?: boolean | undefined;\n}>\nimport Sequence'},"Sequence"),"} "),(0,m.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'remotion'"),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),"\n",(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"const Title: () => JSX.Element"},"Title")),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,m.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,m.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"const frame: number"},"frame")),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useCurrentFrame(): number\nimport useCurrentFrame"},"useCurrentFrame")),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"(); "),(0,m.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"// 25")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,m.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <"),(0,m.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},">{",(0,m.mdx)("data-lsp",{parentName:"span",lsp:"const frame: number"},"frame"),"}</"),(0,m.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  )")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),"\n",(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"const Subtitle: () => JSX.Element"},"Subtitle")),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,m.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,m.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"const frame: number"},"frame")),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useCurrentFrame(): number\nimport useCurrentFrame"},"useCurrentFrame")),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"(); "),(0,m.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"// 15")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,m.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <"),(0,m.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},">{",(0,m.mdx)("data-lsp",{parentName:"span",lsp:"const frame: number"},"frame"),"}</"),(0,m.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  )")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),"\n",(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"const MyVideo: () => JSX.Element"},"MyVideo")),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,m.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,m.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"const frame: number"},"frame")),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useCurrentFrame(): number\nimport useCurrentFrame"},"useCurrentFrame")),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"(); "),(0,m.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"// 25")),"\n",(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,m.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <"),(0,m.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"      <"),(0,m.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"const Title: () => JSX.Element"},"Title")),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," />")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"      <"),(0,m.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:'(alias) const Sequence: React.FC<{\n    children: React.ReactNode;\n    from: number;\n    durationInFrames: number;\n    name?: string | undefined;\n    layout?: "absolute-fill" | "none" | undefined;\n    showInTimeline?: boolean | undefined;\n}>\nimport Sequence'},"Sequence")),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) from: number"},"from")),(0,m.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,m.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"10"),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"} "),(0,m.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) durationInFrames: number"},"durationInFrames")),(0,m.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,m.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"var Infinity: number"},"Infinity")),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"}>")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"        <"),(0,m.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"const Subtitle: () => JSX.Element"},"Subtitle")),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," />")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"      </"),(0,m.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:'(alias) const Sequence: React.FC<{\n    children: React.ReactNode;\n    from: number;\n    durationInFrames: number;\n    name?: string | undefined;\n    layout?: "absolute-fill" | "none" | undefined;\n    showInTimeline?: boolean | undefined;\n}>\nimport Sequence'},"Sequence")),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"    </"),(0,m.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  );")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"}"))))),(0,m.mdx)("pre",{className:"shiki min-dark twoslash lsp",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,m.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,m.mdx)("div",{parentName:"pre",className:"code-container"},(0,m.mdx)("code",{parentName:"div"},(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," {",(0,m.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const useCurrentFrame: () => number\nimport useCurrentFrame"},"useCurrentFrame"),", ",(0,m.mdx)("data-lsp",{parentName:"span",lsp:'(alias) const Sequence: React.FC<{\n    children: React.ReactNode;\n    from: number;\n    durationInFrames: number;\n    name?: string | undefined;\n    layout?: "absolute-fill" | "none" | undefined;\n    showInTimeline?: boolean | undefined;\n}>\nimport Sequence'},"Sequence"),"} "),(0,m.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'remotion'"),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},";")),"\n",(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,m.mdx)("data-lsp",{parentName:"span",lsp:"const Title: () => JSX.Element"},"Title")," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," () "),(0,m.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," {")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  "),(0,m.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"const frame: number"},"frame")),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,m.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useCurrentFrame(): number\nimport useCurrentFrame"},"useCurrentFrame"),"(); "),(0,m.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"// 25")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  "),(0,m.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"return"),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," (")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"    <"),(0,m.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},">{",(0,m.mdx)("data-lsp",{parentName:"span",lsp:"const frame: number"},"frame"),"}</"),(0,m.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},">")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  )")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"}")),"\n",(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,m.mdx)("data-lsp",{parentName:"span",lsp:"const Subtitle: () => JSX.Element"},"Subtitle")," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," () "),(0,m.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," {")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  "),(0,m.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"const frame: number"},"frame")),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,m.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useCurrentFrame(): number\nimport useCurrentFrame"},"useCurrentFrame"),"(); "),(0,m.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"// 15")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  "),(0,m.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"return"),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," (")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"    <"),(0,m.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},">{",(0,m.mdx)("data-lsp",{parentName:"span",lsp:"const frame: number"},"frame"),"}</"),(0,m.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},">")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  )")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"}")),"\n",(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,m.mdx)("data-lsp",{parentName:"span",lsp:"const MyVideo: () => JSX.Element"},"MyVideo")," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," () "),(0,m.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," {")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  "),(0,m.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"const frame: number"},"frame")),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,m.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useCurrentFrame(): number\nimport useCurrentFrame"},"useCurrentFrame"),"(); "),(0,m.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"// 25")),"\n",(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  "),(0,m.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"return"),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," (")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"    <"),(0,m.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},">")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"      <"),(0,m.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"const Title: () => JSX.Element"},"Title")),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," />")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"      <"),(0,m.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:'(alias) const Sequence: React.FC<{\n    children: React.ReactNode;\n    from: number;\n    durationInFrames: number;\n    name?: string | undefined;\n    layout?: "absolute-fill" | "none" | undefined;\n    showInTimeline?: boolean | undefined;\n}>\nimport Sequence'},"Sequence")),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,m.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) from: number"},"from")),(0,m.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{"),(0,m.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"10"),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"} ",(0,m.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) durationInFrames: number"},"durationInFrames")),(0,m.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{"),(0,m.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"var Infinity: number"},"Infinity")),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"}>")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"        <"),(0,m.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"const Subtitle: () => JSX.Element"},"Subtitle")),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," />")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"      </"),(0,m.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:'(alias) const Sequence: React.FC<{\n    children: React.ReactNode;\n    from: number;\n    durationInFrames: number;\n    name?: string | undefined;\n    layout?: "absolute-fill" | "none" | undefined;\n    showInTimeline?: boolean | undefined;\n}>\nimport Sequence'},"Sequence")),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},">")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"    </"),(0,m.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},">")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  );")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"}")))))),(0,m.mdx)("h2",{id:"see-also"},"See also"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"/docs/use-video-config"},"useVideoConfig()"))))}i.isMDXComponent=!0}}]);