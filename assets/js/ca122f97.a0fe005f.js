(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1703],{3905:function(e,a,t){"use strict";t.r(a),t.d(a,{MDXContext:function(){return l},MDXProvider:function(){return c},mdx:function(){return x},useMDXComponents:function(){return p},withMDXComponents:function(){return s}});var n=t(2784);function d(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(){return(r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){d(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,d=function(e,a){if(null==e)return{};var t,n,d={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(d[t]=e[t]);return d}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d}var l=n.createContext({}),s=function(e){return function(a){var t=p(a.components);return n.createElement(e,r({},a,{components:t}))}},p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},v={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(e,a){var t=e.components,d=e.mdxType,r=e.originalType,o=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),s=p(t),c=d,N=s["".concat(o,".").concat(c)]||s[c]||v[c]||r;return t?n.createElement(N,i(i({ref:a},l),{},{components:t})):n.createElement(N,i({ref:a},l))}));function x(e,a){var t=arguments,d=a&&a.mdxType;if("string"==typeof e||d){var r=t.length,o=new Array(r);o[0]=N;var i={};for(var m in a)hasOwnProperty.call(a,m)&&(i[m]=a[m]);i.originalType=e,i.mdxType="string"==typeof e?e:d,o[1]=i;for(var l=2;l<r;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},90692:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return i},metadata:function(){return m},toc:function(){return l},default:function(){return p}});var n=t(22122),d=t(19756),r=(t(2784),t(3905)),o=["components"],i={title:"getVideoMetadata()",id:"get-video-metadata"},m={unversionedId:"get-video-metadata",id:"get-video-metadata",isDocsHomePage:!1,title:"getVideoMetadata()",description:"Part of the @remotion/media-utils package of helper functions.",source:"@site/docs/get-video-metadata.md",sourceDirName:".",slug:"/get-video-metadata",permalink:"/docs/get-video-metadata",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/get-video-metadata.md",version:"current",frontMatter:{title:"getVideoMetadata()",id:"get-video-metadata"},sidebar:"someSidebar",previous:{title:"getAudioDuration()",permalink:"/docs/get-audio-duration"},next:{title:"getWaveformPortion()",permalink:"/docs/get-waveform-portion"}},l=[{value:"Arguments",id:"arguments",children:[{value:"<code>src</code>",id:"src",children:[]}]},{value:"Return value",id:"return-value",children:[]},{value:"Example",id:"example",children:[]},{value:"Caching behavior",id:"caching-behavior",children:[]},{value:"See also",id:"see-also",children:[]}],s={toc:l};function p(e){var a=e.components,t=(0,d.default)(e,o);return(0,r.mdx)("wrapper",(0,n.default)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"Part of the ",(0,r.mdx)("inlineCode",{parentName:"em"},"@remotion/media-utils"))," package of helper functions."),(0,r.mdx)("p",null,"Takes a ",(0,r.mdx)("inlineCode",{parentName:"p"},"src")," to a video, loads it and returns metadata for the specified source."),(0,r.mdx)("h2",{id:"arguments"},"Arguments"),(0,r.mdx)("h3",{id:"src"},(0,r.mdx)("inlineCode",{parentName:"h3"},"src")),(0,r.mdx)("p",null,"A string pointing to an asset."),(0,r.mdx)("h2",{id:"return-value"},"Return value"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Promise<VideoMetadata>")," - object with information about the video data:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"durationInSeconds"),": ",(0,r.mdx)("inlineCode",{parentName:"li"},"number")," The duration of the video in seconds."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"width"),": ",(0,r.mdx)("inlineCode",{parentName:"li"},"number")," The width of the video in pixels."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"height"),": ",(0,r.mdx)("inlineCode",{parentName:"li"},"number")," The height of the video in pixels."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"aspectRatio"),": ",(0,r.mdx)("inlineCode",{parentName:"li"},"number")," Video width divided by video height."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"isRemote"),": ",(0,r.mdx)("inlineCode",{parentName:"li"},"boolean")," Whether the video was imported locally or from a different origin.")),(0,r.mdx)("h2",{id:"example"},"Example"),(0,r.mdx)("undefined",null,(0,r.mdx)("pre",{className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.mdx)("div",{parentName:"pre",className:"code-container"},(0,r.mdx)("code",{parentName:"div"},(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const getVideoMetadata: (src: string) => Promise<VideoMetadata>\nimport getVideoMetadata"},"getVideoMetadata"),"} "),(0,r.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'@remotion/media-utils'"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,r.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.mp4"\nimport video'},"video")," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'../video.mp4'"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),"\n",(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"await"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(alias) getVideoMetadata(src: string): Promise<VideoMetadata>\nimport getVideoMetadata"},"getVideoMetadata")),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"(",(0,r.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.mp4"\nimport video'},"video"),"); "),(0,r.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"/* {")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  durationInSeconds: 100.00,")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  width: 1280,")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  height: 720,")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  aspectRatio: 1.77777778,")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  isRemote: false")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"} */")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"await"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(alias) getVideoMetadata(src: string): Promise<VideoMetadata>\nimport getVideoMetadata"},"getVideoMetadata")),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,r.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'https://example.com/remote-audio.webm'"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"); "),(0,r.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"/* {")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  durationInSeconds: 40.213,")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  width: 1920,")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  height: 1080,")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  aspectRatio: 1.77777778,")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  isRemote: true")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"} */"))))),(0,r.mdx)("pre",{className:"shiki min-dark twoslash lsp",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,r.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.mdx)("div",{parentName:"pre",className:"code-container"},(0,r.mdx)("code",{parentName:"div"},(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," {",(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const getVideoMetadata: (src: string) => Promise<VideoMetadata>\nimport getVideoMetadata"},"getVideoMetadata"),"} "),(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'@remotion/media-utils'"),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},";")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,r.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.mp4"\nimport video'},"video")," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'../video.mp4'"),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},";")),"\n",(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"await"),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(alias) getVideoMetadata(src: string): Promise<VideoMetadata>\nimport getVideoMetadata"},"getVideoMetadata"),"(",(0,r.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.mp4"\nimport video'},"video"),"); "),(0,r.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"/* {")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"  durationInSeconds: 100.00,")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"  width: 1280,")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"  height: 720,")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"  aspectRatio: 1.77777778,")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"  isRemote: false")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"} */")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"await"),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(alias) getVideoMetadata(src: string): Promise<VideoMetadata>\nimport getVideoMetadata"},"getVideoMetadata"),"("),(0,r.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'https://example.com/remote-audio.webm'"),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"); "),(0,r.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"/* {")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"  durationInSeconds: 40.213,")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"  width: 1920,")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"  height: 1080,")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"  aspectRatio: 1.77777778,")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"  isRemote: true")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"} */")))))),(0,r.mdx)("h2",{id:"caching-behavior"},"Caching behavior"),(0,r.mdx)("p",null,"This function is memoizing the results it returns.\nIf you pass in the same argument to ",(0,r.mdx)("inlineCode",{parentName:"p"},"src")," multiple times, it will return a cached version from the second time on, regardless of if the file has changed. To clear the cache, you have to reload the page."),(0,r.mdx)("h2",{id:"see-also"},"See also"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/docs/assets#using-videos"},"Using videos")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/docs/video"},(0,r.mdx)("inlineCode",{parentName:"a"},"<Video/>")))))}p.isMDXComponent=!0}}]);