(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{4651:function(n,e,r){"use strict";r.d(e,{Ee:function(){return f}});var i=r(6052),t=r(5031),a=r(7294),c=r(1561);function l(){return l=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])}return n},l.apply(this,arguments)}function o(n,e){if(null==n)return{};var r,i,t={},a=Object.keys(n);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||(t[r]=n[r]);return t}var s=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],d=a.forwardRef((function(n,e){var r=n.htmlWidth,i=n.htmlHeight,t=n.alt,c=o(n,s);return a.createElement("img",l({width:r,height:i,ref:e,alt:t},c))})),f=(0,i.Gp)((function(n,e){var r=n.fallbackSrc,s=n.fallback,f=n.src,h=n.srcSet,g=n.align,x=n.fit,m=n.loading,j=n.ignoreFallback,p=n.crossOrigin,v=o(n,u),b=null!=m||j||void 0===r&&void 0===s,y=function(n){var e=n.loading,r=n.src,i=n.srcSet,t=n.onLoad,l=n.onError,o=n.crossOrigin,s=n.sizes,u=n.ignoreFallback,d=(0,a.useState)("pending"),f=d[0],h=d[1];(0,a.useEffect)((function(){h(r?"loading":"pending")}),[r]);var g=(0,a.useRef)(),x=(0,a.useCallback)((function(){if(r){m();var n=new Image;n.src=r,o&&(n.crossOrigin=o),i&&(n.srcset=i),s&&(n.sizes=s),e&&(n.loading=e),n.onload=function(n){m(),h("loaded"),null==t||t(n)},n.onerror=function(n){m(),h("failed"),null==l||l(n)},g.current=n}}),[r,o,i,s,t,l,e]),m=function(){g.current&&(g.current.onload=null,g.current.onerror=null,g.current=null)};return(0,c.a)((function(){if(!u)return"loading"===f&&x(),function(){m()}}),[f,x,u]),u?"loaded":f}(l({},n,{ignoreFallback:b})),k=l({ref:e,objectFit:x,objectPosition:g},b?v:(0,t.CE)(v,["onError","onLoad"]));return"loaded"!==y?s||a.createElement(i.m$.img,l({as:d,className:"chakra-image__placeholder",src:r},k)):a.createElement(i.m$.img,l({as:d,src:f,srcSet:h,crossOrigin:p,loading:m,className:"chakra-image"},k))}));t.Ts&&(f.displayName="Image")},2448:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return r(1635)}])},603:function(n,e,r){"use strict";r.d(e,{i:function(){return o},Pg:function(){return s}});var i=r(5893),t=r(1664),a=r(5675),c=r(8527),l=r(917),o=function(n){var e=n.children,r=n.id,l=n.title,o=n.thumbnail;return(0,i.jsx)(c.xu,{w:"100%",align:"center",children:(0,i.jsx)(t.default,{href:"/projects/".concat(r),passHref:!0,children:(0,i.jsxs)(c.fG,{cursor:"pointer",children:[(0,i.jsx)(a.default,{src:o,alt:l,className:"grid-item-thumbnail",width:"100%",height:"60%",layout:"responsive",objectFit:"contain"}),(0,i.jsx)(c.AB,{href:"/projects/".concat(r),children:(0,i.jsx)(c.xv,{mt:2,fontSize:24,children:l})}),(0,i.jsx)(c.xv,{fontSize:16,align:"justify",children:e})]})})})},s=function(){return(0,i.jsx)(l.Global,{styles:"\n    .grid-item-thumbnail {\n      border-radius: 24px;\n    }\n    "})}},2857:function(n,e,r){"use strict";var i=r(5893),t=r(8816),a=r(9008),c=r(603),l={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};e.Z=function(n){var e=n.children,r=n.title;return(0,i.jsx)(t.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:l,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,i.jsxs)(i.Fragment,{children:[r&&(0,i.jsx)(a.default,{children:(0,i.jsxs)("title",{children:[r," - Johnatas Henrique"]})}),e,(0,i.jsx)(c.Pg,{})]})})}},1635:function(n,e,r){"use strict";r.r(e);var i=r(5893),t=r(1664),a=r(8527),c=r(4651),l=r(5113),o=r(2857);e.default=function(){return(0,i.jsx)(o.Z,{children:(0,i.jsxs)(a.W2,{children:[(0,i.jsx)(a.X6,{as:"h1",children:"N\xe3o encontrada"}),(0,i.jsx)(a.xv,{children:"A p\xe1gina que voc\xea procura n\xe3o foi encontrada."}),(0,i.jsx)(c.Ee,{display:"inline-block",src:"/images/caveman.gif",alt:"404 Caveman"}),(0,i.jsx)(a.iz,{my:6}),(0,i.jsx)(a.xu,{my:6,align:"center",children:(0,i.jsx)(t.default,{href:"/",passHref:!0,children:(0,i.jsx)(l.zx,{colorScheme:"teal",children:"Voltar ao in\xedcio"})})})]})})}}},function(n){n.O(0,[774,888,179],(function(){return e=2448,n(n.s=e);var e}));var e=n.O();_N_E=e}]);