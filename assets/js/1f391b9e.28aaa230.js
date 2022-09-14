"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[3085],{4247:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var n=o(7294),a=o(6010),c=o(1944),l=o(5281),s=o(2164),i=o(9903),d=o(9407);const r="mdxPageWrapper_j9I6";function m(e){const{content:t}=e,{metadata:{title:o,description:m,frontMatter:u}}=t,{wrapperClassName:p,hide_table_of_contents:g}=u;return n.createElement(c.FG,{className:(0,a.Z)(null!=p?p:l.k.wrapper.mdxPages,l.k.page.mdxPage)},n.createElement(c.d,{title:o,description:m}),n.createElement(s.Z,null,n.createElement("main",{className:"container container--fluid margin-vert--lg"},n.createElement("div",{className:(0,a.Z)("row",r)},n.createElement("div",{className:(0,a.Z)("col",!g&&"col--8")},n.createElement("article",null,n.createElement(i.Z,null,n.createElement(t,null)))),!g&&t.toc.length>0&&n.createElement("div",{className:"col col--2"},n.createElement(d.Z,{toc:t.toc,minHeadingLevel:u.toc_min_heading_level,maxHeadingLevel:u.toc_max_heading_level}))))))}},1978:(e,t,o)=>{o.d(t,{ZP:()=>r,cR:()=>i,UH:()=>d});var n=o(7294),a=o(6010),c=o(8084);const l="copyButtonIcons_om_X",s="copyButtonIcon_NN7I",i=e=>{let t=/codesandbox=({.*})/g.exec(e);return JSON.parse(t[1])},d=e=>{let{code:t,template:o,filename:n,setSandboxId:a}=e;const{templates:l}=(0,c.eZ)("codesandbox-plugin");return[async()=>{let e=l[o];t&&(e.files[n]={content:t});const c=await fetch("https://codesandbox.io/api/v1/sandboxes/define?json=1",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)}),{sandbox_id:s}=await c.json();a(s)}]};function r(e){let{code:t,className:o,metastring:c,setSandboxId:r}=e,{template:m,filename:u}=i(c);const[p]=d({code:t,template:m,filename:u,setSandboxId:r});return n.createElement("button",{type:"button",title:"CodeSandbox",className:(0,a.Z)("clean-btn"),onClick:p},n.createElement("span",{className:l,"aria-hidden":"true"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",className:s,viewBox:"0 0 16 16"}," ",n.createElement("path",{d:"m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"})," ")))}},7362:(e,t,o)=>{o.d(t,{Z:()=>s});var n=o(7294),a=o(6010),c=o(6505),l=o(9500);function s(e){let{children:t,className:o}=e;return n.createElement(c.Z,{as:"pre",tabIndex:0,className:(0,a.Z)(l.Z.codeBlockStandalone,"thin-scrollbar",o)},n.createElement("code",{className:l.Z.codeBlockLines},t))}},3413:(e,t,o)=>{o.d(t,{Z:()=>Z});var n=o(7462),a=o(7294),c=o(6010),l=o(6668),s=o(6412),i=o(7016),d=o(5448),r=o(3746),m=o(8397),u=o(195),p=o(5999);const g={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function h(e){let{code:t,className:o}=e;const[n,l]=(0,a.useState)(!1),s=(0,a.useRef)(void 0),i=(0,a.useCallback)((()=>{(0,u.Z)(t),l(!0),s.current=window.setTimeout((()=>{l(!1)}),1e3)}),[t]);return(0,a.useEffect)((()=>()=>window.clearTimeout(s.current)),[]),a.createElement("button",{type:"button","aria-label":n?(0,p.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,p.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,p.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.Z)("clean-btn",o,g.copyButton,n&&g.copyButtonCopied),onClick:i},a.createElement("span",{className:g.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:g.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:g.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}var b=o(1978),B=o(2601),E=o(6505),N=o(9500);function Z(e){var t;let{children:o,className:u="",metastring:p,title:g,showLineNumbers:Z,language:k}=e;const[y,v]=(0,a.useState)(""),{prism:{defaultLanguage:w,magicComments:x}}=(0,l.L)(),_=null!=(t=null!=k?k:(0,i.Vo)(u))?t:w,f=(0,s.p)(),I=(0,d.F)(),C=(0,i.bc)(p)||g,{lineClassNames:L,code:S}=(0,i.nZ)(o,{metastring:p,language:_,magicComments:x}),T=null!=Z?Z:(0,i.nt)(p);let P="";const A=/codesandbox=({.*})/g;let H=!1;if(p&&p.match(A)&&p.match(A)[0]){H=!0,P=(0,b.cR)(p).filename}let G=S.replace(/\/\/hide-start\n/g,"").replace(/\/\/hide-end/g,"").replace(/\/\/hide-start/g,"").replace(/\/\/hide-end\n/g,""),V=S.replace(/(\/\/hide-start)[\w\W]*?(\/\/hide-end)\n/g,"").replace(/(\/\/hide-start)[\w\W]*?(\/\/hide-end)/g,"").replace(/\n+$/,"");return a.createElement("div",null,""!==y&&a.createElement("div",{className:N.Z.codeBlockContent},a.createElement(E.Z,{as:"div",className:(0,c.Z)(u,_&&!u.includes("language-"+_)&&"language-"+_)},a.createElement("iframe",{style:{width:"100%",height:"500px"},src:"https://codesandbox.io/embed/"+y+"?fontsize=14&hidenavigation=1&theme=light&view=preview&autoresize=1&expanddevtools=1&module=/"+P,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),a.createElement("div",{className:N.Z.buttonGroup},a.createElement("button",{type:"button",title:"CodeSandbox",className:(0,c.Z)("clean-btn"),onClick:()=>v("")},a.createElement("span",{className:N.Z.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 24 24","data-testid":"CodeIcon",className:N.Z.copyButtonIcon},a.createElement("path",{d:"M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}))))))),a.createElement("div",{style:{display:""===y?"inherit":"none"}},a.createElement(E.Z,{as:"div",className:(0,c.Z)(u,_&&!u.includes("language-"+_)&&"language-"+_)},C&&a.createElement("div",{className:N.Z.codeBlockTitle},C),a.createElement("div",{className:N.Z.codeBlockContent},a.createElement(r.ZP,(0,n.Z)({},r.lG,{theme:f,code:V,language:null!=_?_:"text"}),(e=>{let{className:t,tokens:o,getLineProps:n,getTokenProps:l}=e;return a.createElement("pre",{tabIndex:0,ref:I.codeBlockRef,className:(0,c.Z)(t,N.Z.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,c.Z)(N.Z.codeBlockLines,T&&N.Z.codeBlockLinesWithNumbering)},o.map(((e,t)=>a.createElement(m.Z,{key:t,line:e,getLineProps:n,getTokenProps:l,classNames:L[t],showLineNumbers:T})))))})),a.createElement("div",{className:N.Z.buttonGroup},(I.isEnabled||I.isCodeScrollable)&&a.createElement(B.Z,{className:N.Z.codeButton,onClick:()=>I.toggle(),isEnabled:I.isEnabled}),a.createElement(h,{className:N.Z.codeButton,code:S}),H&&a.createElement(b.ZP,{className:N.Z.codeButton,code:G,metastring:p,setSandboxId:v}))))))}},9500:(e,t,o)=>{o.d(t,{Z:()=>n});const n={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",closeSandbox:"closeSandbox_R6Gh",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT",copyButtonIcons:"copyButtonIcons_TjAD",copyButtonIcon:"copyButtonIcon_aoDh",copyButtonSuccessIcon:"copyButtonSuccessIcon_sXYC"}}}]);