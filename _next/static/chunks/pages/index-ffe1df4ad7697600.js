(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4651:function(e,n,r){"use strict";r.d(n,{Ee:function(){return h}});var t=r(6052),i=r(5031),a=r(7294),o=r(1561);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},s.apply(this,arguments)}function l(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}var c=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],d=a.forwardRef((function(e,n){var r=e.htmlWidth,t=e.htmlHeight,i=e.alt,o=l(e,c);return a.createElement("img",s({width:r,height:t,ref:n,alt:i},o))})),h=(0,t.Gp)((function(e,n){var r=e.fallbackSrc,c=e.fallback,h=e.src,f=e.srcSet,m=e.align,x=e.fit,j=e.loading,g=e.ignoreFallback,p=e.crossOrigin,b=l(e,u),v=null!=j||g||void 0===r&&void 0===c,y=function(e){var n=e.loading,r=e.src,t=e.srcSet,i=e.onLoad,s=e.onError,l=e.crossOrigin,c=e.sizes,u=e.ignoreFallback,d=(0,a.useState)("pending"),h=d[0],f=d[1];(0,a.useEffect)((function(){f(r?"loading":"pending")}),[r]);var m=(0,a.useRef)(),x=(0,a.useCallback)((function(){if(r){j();var e=new Image;e.src=r,l&&(e.crossOrigin=l),t&&(e.srcset=t),c&&(e.sizes=c),n&&(e.loading=n),e.onload=function(e){j(),f("loaded"),null==i||i(e)},e.onerror=function(e){j(),f("failed"),null==s||s(e)},m.current=e}}),[r,l,t,c,i,s,n]),j=function(){m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,o.a)((function(){if(!u)return"loading"===h&&x(),function(){j()}}),[h,x,u]),u?"loaded":h}(s({},e,{ignoreFallback:v})),w=s({ref:n,objectFit:x,objectPosition:m},v?b:(0,i.CE)(b,["onError","onLoad"]));return"loaded"!==y?c||a.createElement(t.m$.img,s({as:d,className:"chakra-image__placeholder",src:r},w)):a.createElement(t.m$.img,s({as:d,src:h,srcSet:f,crossOrigin:p,loading:j,className:"chakra-image"},w))}));i.Ts&&(h.displayName="Image")},8581:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3884)}])},603:function(e,n,r){"use strict";r.d(n,{i:function(){return l},Pg:function(){return c}});var t=r(5893),i=r(1664),a=r(5675),o=r(8527),s=r(917),l=function(e){var n=e.children,r=e.id,s=e.title,l=e.thumbnail;return(0,t.jsx)(o.xu,{w:"100%",align:"center",children:(0,t.jsx)(i.default,{href:"/projects/".concat(r),passHref:!0,children:(0,t.jsxs)(o.fG,{cursor:"pointer",children:[(0,t.jsx)(a.default,{src:l,alt:s,className:"grid-item-thumbnail",width:"100%",height:"60%",layout:"responsive",objectFit:"contain"}),(0,t.jsx)(o.AB,{href:"/projects/".concat(r),children:(0,t.jsx)(o.xv,{mt:2,fontSize:24,children:s})}),(0,t.jsx)(o.xv,{fontSize:16,align:"justify",children:n})]})})})},c=function(){return(0,t.jsx)(s.Global,{styles:"\n    .grid-item-thumbnail {\n      border-radius: 24px;\n    }\n    "})}},2857:function(e,n,r){"use strict";var t=r(5893),i=r(8816),a=r(9008),o=r(603),s={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};n.Z=function(e){var n=e.children,r=e.title;return(0,t.jsx)(i.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:s,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,t.jsxs)(t.Fragment,{children:[r&&(0,t.jsx)(a.default,{children:(0,t.jsxs)("title",{children:[r," - Johnatas Henrique"]})}),n,(0,t.jsx)(o.Pg,{})]})})}},3562:function(e,n,r){"use strict";function t(){var e,n,r=(e=["\n  text-align: justify;\n  /* text-indent: 1em; */\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return t=function(){return r},r}var i=r(5934).Z.p(t());n.Z=i},7578:function(e,n,r){"use strict";var t=r(5893),i=r(8816),a=r(6052),o=(0,a.m$)(i.E.div,{shouldForwardProp:function(e){return(0,a.x9)(e)||"transition"===e}});n.Z=function(e){var n=e.children,r=e.delay,i=void 0===r?0:r;return(0,t.jsx)(o,{initial:{y:10,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8,delay:i},mb:6,children:n})}},3884:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return y}});var t=r(5893),i=r(1664),a=r(8527),o=r(949),s=r(4651),l=r(5113),c=r(894),u=r(9876),d=r(2857),h=r(7578),f=r(3562),m=r(5934);function x(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function j(){var e=x(["\n  padding-left: 3.4em;\n  text-indent: -3.4em;\n"]);return j=function(){return e},e}function g(){var e=x(["\n  font-weight: bold;\n  margin-right: 1em;\n"]);return g=function(){return e},e}var p=(0,m.Z)(a.xu)(j()),b=m.Z.span(g()),v=r(155),y=function(){return(0,t.jsx)(d.Z,{children:(0,t.jsxs)(a.W2,{maxW:"container.lg",children:[(0,t.jsx)(a.xu,{borderRadius:"lg",bg:(0,o.ff)("whiteAlpha.500","whiteAlpha.200"),p:3,mb:6,textAlign:"center",children:"Ol\xe1, eu sou um desenvolvedor full-stack brasileiro!"}),(0,t.jsxs)(a.xu,{display:{md:"flex"},children:[(0,t.jsxs)(a.xu,{flexGrow:1,children:[(0,t.jsx)(a.X6,{as:"h2",variant:"page-title",children:"Johnatas Henrique"}),(0,t.jsx)("p",{children:"Desenvolvedor Web"})]}),(0,t.jsx)(a.xu,{flexShrink:0,mt:{base:4,md:0},ml:{md:6},align:"center",children:(0,t.jsx)(s.Ee,{borderColor:"whiteAlpha.800",borderWidth:2,borderStyle:"solid",maxWidth:"100px",display:"inline-block",borderRadius:"full",src:"/images/myself.jpg",alt:"Profile Image"})})]}),(0,t.jsxs)(h.Z,{delay:.1,children:[(0,t.jsx)(a.X6,{as:"h3",variant:"section-title",children:"Quem eu sou"}),(0,t.jsxs)(f.Z,{children:["Trabalhando como pessoa instrutora na Trybe, ajudando outras pessoas a se tornarem desenvolvedoras de software full-stack.",(0,t.jsx)("br",{}),"Fiz recentemente uma transi\xe7\xe3o de carreira, trabalhei por anos em outra \xe1rea de tecnologia, a de suporte a TI.",(0,t.jsx)("br",{}),"Quando n\xe3o estou online, gosto muito de pilotar minha moto e adoro trabalhar nos consertos da mec\xe2nica dela, \xe9 um de meus hobbies.",(0,t.jsx)("br",{}),"Como projeto pessoal, estou desenvolvendo o"," ",(0,t.jsx)(a.rU,{href:"https://johnatas-henrique.github.io/fake-racer/",target:"_blank",children:"Fake-Racer"})," ","que \xe9 um jogo de corridas inspirado nos cl\xe1ssicos da era 16 bit."]}),(0,t.jsx)(a.xu,{align:"center",my:4,children:(0,t.jsx)(i.default,{href:"/projects",passHref:!0,children:(0,t.jsx)(l.zx,{rightIcon:(0,t.jsx)(u.XC,{}),colorScheme:"teal",children:"Meus projetos"})})})]}),(0,t.jsxs)(h.Z,{delay:.2,children:[(0,t.jsx)(a.X6,{as:"h3",variant:"section-title",children:"Bio"}),(0,t.jsxs)(p,{children:[(0,t.jsx)(b,{children:"2020"}),"Iniciei como pessoa instrutora na Trybe, onde estou at\xe9 hoje."]}),(0,t.jsxs)(p,{children:[(0,t.jsx)(b,{children:"2020"}),"Finalizei minha forma\xe7\xe3o em desenvolvimento Web na Trybe."]}),(0,t.jsxs)(p,{children:[(0,t.jsx)(b,{children:"2019"}),"Iniciei minha mudan\xe7a de carreira para a \xe1rea de desenvolvimento web."]}),(0,t.jsxs)(p,{children:[(0,t.jsx)(b,{children:"2004"}),"Finalizei o t\xe9cnologo de redes de computadores na Faculdade Drummond."]}),(0,t.jsxs)(p,{children:[(0,t.jsx)(b,{children:"1988"}),"Nasci em S\xe3o Paulo, Brasil."]})]}),(0,t.jsxs)(h.Z,{delay:.2,children:[(0,t.jsx)(a.X6,{as:"h3",variant:"section-title",children:"Eu \u2665"}),(0,t.jsx)(f.Z,{children:"Videogames, Mec\xe2nica, Animes, F\xf3rmula 1"})]}),(0,t.jsxs)(h.Z,{delay:.3,children:[(0,t.jsx)(a.X6,{as:"h3",variant:"section-title",children:"Na web"}),(0,t.jsxs)(a.aV,{children:[(0,t.jsx)(a.HC,{children:(0,t.jsx)(a.rU,{href:"https://github.com/johnatas-henrique",target:"_blank",children:(0,t.jsx)(l.zx,{variant:"ghost",colorScheme:"teal",leftIcon:(0,t.jsx)(c.JO,{as:v.JOq}),children:"johnatas-henrique"})})}),(0,t.jsx)(a.HC,{children:(0,t.jsx)(a.rU,{href:"https://www.linkedin.com/in/johnatas-henrique/",target:"_blank",children:(0,t.jsx)(l.zx,{variant:"ghost",colorScheme:"teal",leftIcon:(0,t.jsx)(c.JO,{as:v.gXb}),children:"johnatas-henrique"})})}),(0,t.jsx)(a.HC,{children:(0,t.jsx)(a.rU,{href:"https://www.instagram.com/johnatashenrique/",target:"_blank",children:(0,t.jsx)(l.zx,{variant:"ghost",colorScheme:"teal",leftIcon:(0,t.jsx)(c.JO,{as:v.oVe}),children:"johnatashenrique"})})})]})]})]})})}},8357:function(e,n,r){"use strict";r.d(n,{w_:function(){return c}});var t=r(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=t.createContext&&t.createContext(i),o=function(){return o=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var i in n=arguments[r])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},o.apply(this,arguments)},s=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]])}return r};function l(e){return e&&e.map((function(e,n){return t.createElement(e.tag,o({key:n},e.attr),l(e.child))}))}function c(e){return function(n){return t.createElement(u,o({attr:o({},e.attr)},n),l(e.child))}}function u(e){var n=function(n){var r,i=e.attr,a=e.size,l=e.title,c=s(e,["attr","size","title"]),u=a||n.size||"1em";return n.className&&(r=n.className),e.className&&(r=(r?r+" ":"")+e.className),t.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,c,{className:r,style:o(o({color:e.color||n.color},n.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&t.createElement("title",null,l),e.children)};return void 0!==a?t.createElement(a.Consumer,null,(function(e){return n(e)})):n(i)}}},function(e){e.O(0,[260,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);