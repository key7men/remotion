(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3394],{3905:function(e,a,n){"use strict";n.r(a),n.d(a,{MDXContext:function(){return p},MDXProvider:function(){return c},mdx:function(){return v},useMDXComponents:function(){return i},withMDXComponents:function(){return l}});var t=n(2784);function m(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function d(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?d(Object(n),!0).forEach((function(a){m(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,m=function(e,a){if(null==e)return{};var n,t,m={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(m[n]=e[n]);return m}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(m[n]=e[n])}return m}var p=t.createContext({}),l=function(e){return function(a){var n=i(a.components);return t.createElement(e,o({},a,{components:n}))}},i=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},c=function(e){var a=i(e.components);return t.createElement(p.Provider,{value:a},e.children)},N={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},x=t.forwardRef((function(e,a){var n=e.components,m=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=i(n),c=m,x=l["".concat(d,".").concat(c)]||l[c]||N[c]||o;return n?t.createElement(x,r(r({ref:a},p),{},{components:n})):t.createElement(x,r({ref:a},p))}));function v(e,a){var n=arguments,m=a&&a.mdxType;if("string"==typeof e||m){var o=n.length,d=new Array(o);d[0]=x;var r={};for(var s in a)hasOwnProperty.call(a,s)&&(r[s]=a[s]);r.originalType=e,r.mdxType="string"==typeof e?e:m,d[1]=r;for(var p=2;p<o;p++)d[p]=n[p];return t.createElement.apply(null,d)}return t.createElement.apply(null,n)}x.displayName="MDXCreateElement"},84043:function(e,a,n){"use strict";n.r(a),n.d(a,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return p},default:function(){return i}});var t=n(22122),m=n(19756),o=(n(2784),n(3905)),d=["components"],r={id:"composition",title:"<Composition />"},s={unversionedId:"composition",id:"composition",isDocsHomePage:!1,title:"<Composition />",description:"This is the component to use to register a video to make it renderable and make it show up in the sidebar of the Remotion Player.",source:"@site/docs/composition.md",sourceDirName:".",slug:"/composition",permalink:"/docs/composition",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/composition.md",version:"current",frontMatter:{id:"composition",title:"<Composition />"},sidebar:"someSidebar",previous:{title:"<Audio />",permalink:"/docs/audio"},next:{title:"<Sequence />",permalink:"/docs/sequence"}},p=[{value:"API",id:"api",children:[]},{value:"Example using <code>component</code>",id:"example-using-component",children:[]},{value:"Example using <code>lazyComponent</code>",id:"example-using-lazycomponent",children:[]},{value:"See also",id:"see-also",children:[]}],l={toc:p};function i(e){var a=e.components,n=(0,m.default)(e,d);return(0,o.mdx)("wrapper",(0,t.default)({},l,n,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"This is the component to use to register a video to make it renderable and make it show up in the sidebar of the Remotion Player."),(0,o.mdx)("h2",{id:"api"},"API"),(0,o.mdx)("p",null,"A ",(0,o.mdx)("inlineCode",{parentName:"p"},"<Composition />")," should be placed within a fragment of the root component (which is registered using ",(0,o.mdx)("a",{parentName:"p",href:"/docs/register-root"},(0,o.mdx)("inlineCode",{parentName:"a"},"registerRoot()")),")."),(0,o.mdx)("p",null,"The component takes the following props:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"id"),": ID of the composition, as shown in the sidebar and also a unique identifier of the composition that you need to specify if you want to render it. The ID can only contain letters, numbers and ",(0,o.mdx)("inlineCode",{parentName:"p"},"-"),".")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"fps"),": At how many frames the composition should be rendered.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"durationInFrames"),": How many frames the composition should be long.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"height"),": Height of the composition in pixels.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"width"),": Width of the composition in pixels.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"component")," ",(0,o.mdx)("strong",{parentName:"p"},"or")," ",(0,o.mdx)("inlineCode",{parentName:"p"},"lazyComponent"),": Pass the component in directly ",(0,o.mdx)("strong",{parentName:"p"},"or")," pass a function that returns a dynamic import. Passing neither or both of the props is an error."))),(0,o.mdx)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"If you use ",(0,o.mdx)("inlineCode",{parentName:"p"},"lazyComponent"),", Remotion will use React Suspense to load the component. Components will be compiled by Webpack as they are needed, which will reduce startup time of Remotion."))),(0,o.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"If you use ",(0,o.mdx)("inlineCode",{parentName:"p"},"lazyComponent"),", you need to use a default export for your component. This is a restriction of React Suspense."))),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"defaultProps")," ",(0,o.mdx)("em",{parentName:"li"},"optional"),": Give your component default props that will be shown in the preview. You can override these props during render using a CLI flag.")),(0,o.mdx)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"Type your components using the ",(0,o.mdx)("inlineCode",{parentName:"p"},"React.FC<{}>")," type and the ",(0,o.mdx)("inlineCode",{parentName:"p"},"defaultProps")," prop will be typesafe."))),(0,o.mdx)("h2",{id:"example-using-component"},"Example using ",(0,o.mdx)("inlineCode",{parentName:"h2"},"component")),(0,o.mdx)("undefined",null,(0,o.mdx)("pre",{className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const Composition: <T>({ width, height, fps, durationInFrames, id, defaultProps: props, ...compProps }: Props<T>) => null\nimport Composition"},"Composition"),"} "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'remotion'"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const MyComp: () => JSX.Element\nimport MyComp"},"MyComp"),"} "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'./MyComp'"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),"\n",(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"export"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const MyVideo: () => JSX.Element"},"MyVideo")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <>")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"      <"),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const Composition: <T>({ width, height, fps, durationInFrames, id, defaultProps: props, ...compProps }: Props<T>) => null\nimport Composition"},"Composition"))),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) id: string"},"id")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#22863A"}},'"my-comp"')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) component: AnyComponent<unknown>"},"component")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const MyComp: () => JSX.Element\nimport MyComp"},"MyComp"),"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) width: number"},"width")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"1080"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) height: number"},"height")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"1080"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) fps: number"},"fps")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"30"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) durationInFrames: number"},"durationInFrames")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"3"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"*"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"30"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"      />")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"    </>")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  );")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"}"))))),(0,o.mdx)("pre",{className:"shiki min-dark twoslash lsp",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," {",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const Composition: <T>({ width, height, fps, durationInFrames, id, defaultProps: props, ...compProps }: Props<T>) => null\nimport Composition"},"Composition"),"} "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'remotion'"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},";")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," {",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const MyComp: () => JSX.Element\nimport MyComp"},"MyComp"),"} "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'./MyComp'"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},";")),"\n",(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"export"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const MyVideo: () => JSX.Element"},"MyVideo")," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," () "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," {")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"return"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," (")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"    <>")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"      <"),(0,o.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const Composition: <T>({ width, height, fps, durationInFrames, id, defaultProps: props, ...compProps }: Props<T>) => null\nimport Composition"},"Composition"))),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"        ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) id: string"},"id")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},'"my-comp"')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"        ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) component: AnyComponent<unknown>"},"component")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const MyComp: () => JSX.Element\nimport MyComp"},"MyComp"),"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"        ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) width: number"},"width")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{"),(0,o.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"1080"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"        ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) height: number"},"height")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{"),(0,o.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"1080"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"        ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) fps: number"},"fps")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{"),(0,o.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"30"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"        ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) durationInFrames: number"},"durationInFrames")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{"),(0,o.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"3"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"*"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"30"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"      />")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"    </>")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  );")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"}")))))),(0,o.mdx)("h2",{id:"example-using-lazycomponent"},"Example using ",(0,o.mdx)("inlineCode",{parentName:"h2"},"lazyComponent")),(0,o.mdx)("undefined",null,(0,o.mdx)("pre",{className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"export"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},"MyVideo"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <>")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"      <"),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"Composition")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},"id"),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#22863A"}},'"my-comp"')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},"lazyComponent"),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{() "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,o.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'./LazyComponent'"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},")}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},"width"),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"1080"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},"height"),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"1080"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},"fps"),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"30"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},"durationInFrames"),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"3"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"*"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"30"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"      />")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"    </>")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  );")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"}"))))),(0,o.mdx)("pre",{className:"shiki min-dark",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"export"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," MyVideo "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," () "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," {")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"return"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," (")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"    <>")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"      <"),(0,o.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},"Composition")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"        id"),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},'"my-comp"')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"        lazyComponent"),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{() "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"("),(0,o.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'./LazyComponent'"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},")}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"        width"),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{"),(0,o.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"1080"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"        height"),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{"),(0,o.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"1080"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"        fps"),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{"),(0,o.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"30"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"        durationInFrames"),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{"),(0,o.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"3"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"*"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"30"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"      />")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"    </>")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  );")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"}")))))),(0,o.mdx)("h2",{id:"see-also"},"See also"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/register-root"},"registerRoot()")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/the-fundamentals"},"The fundamentals")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/cli"},"CLI options"))))}i.isMDXComponent=!0}}]);