(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{3269:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return r(9144)}])},603:function(e,t,r){"use strict";r.d(t,{i:function(){return o},Pg:function(){return c}});var n=r(5893),i=r(1664),a=r(5675),s=r(8527),l=r(917),o=function(e){var t=e.children,r=e.id,l=e.title,o=e.thumbnail;return(0,n.jsx)(s.xu,{w:"100%",align:"center",children:(0,n.jsx)(i.default,{href:"/projects/".concat(r),passHref:!0,children:(0,n.jsxs)(s.fG,{cursor:"pointer",children:[(0,n.jsx)(a.default,{src:o,alt:l,className:"grid-item-thumbnail",width:"100%",height:"60%",layout:"responsive",objectFit:"contain"}),(0,n.jsx)(s.AB,{href:"/projects/".concat(r),children:(0,n.jsx)(s.xv,{mt:2,fontSize:24,children:l})}),(0,n.jsx)(s.xv,{fontSize:16,align:"justify",children:t})]})})})},c=function(){return(0,n.jsx)(l.Global,{styles:"\n    .grid-item-thumbnail {\n      border-radius: 24px;\n    }\n    "})}},2857:function(e,t,r){"use strict";var n=r(5893),i=r(8816),a=r(9008),s=r(603),l={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};t.Z=function(e){var t=e.children,r=e.title;return(0,n.jsx)(i.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:l,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,n.jsxs)(n.Fragment,{children:[r&&(0,n.jsx)(a.default,{children:(0,n.jsxs)("title",{children:[r," - Johnatas Henrique"]})}),t,(0,n.jsx)(s.Pg,{})]})})}},9144:function(e,t,r){"use strict";r.r(t);var n=r(5893),i=r(7294),a=r(9101),s=r(6455),l=r.n(s),o=r(949),c=r(8527),u=r(9762),h=r(4612),d=r(3441),f=r(4651),x=r(2857);t.default=function(){var e=(0,i.useRef)(),t=(0,i.useState)(""),r=t[0],s=t[1],m=(0,i.useState)(""),g=m[0],p=m[1],j=(0,i.useState)(""),v=j[0],y=j[1],w=""===r,_=""===g,b=""===v,A="/images/github".concat((0,o.ff)("","-dark"),".png");return(0,n.jsxs)(x.Z,{children:[(0,n.jsx)("form",{ref:e,onSubmit:function(e){e.preventDefault();var t={from_name:r,reply_to:g,message_html:v};a.ZP.send("","",t,"").then((function(){l().fire({title:"Mensagem enviada com sucesso",icon:"success",heightAuto:!1}),s(""),p(""),y("")})).catch((function(e){return console.error("Email Error:",e)}))},color:(0,o.ff)("gray200","whiteAlpha900"),children:(0,n.jsxs)(c.Kq,{spacing:3,flexWrap:"wrap",flexDirection:"row",justifyContent:"center",textAlign:"center",mt:4,children:[(0,n.jsxs)(u.NI,{mt:3,w:"100%",isInvalid:w,isRequired:!0,children:[(0,n.jsx)(u.lX,{htmlFor:"user_name",textAlign:"center",children:"Nome"}),(0,n.jsx)(h.II,{type:"text",id:"user_name",_autofill:"red",variant:"filled",onChange:function(e){return s(e.target.value)},value:r,placeholder:"Seu nome",color:(0,o.ff)("gray200","whiteAlpha900"),maxW:"container.xl",errorBorderColor:"glassTeal",required:!0})]}),(0,n.jsxs)(u.NI,{w:"100%",isInvalid:_,isRequired:!0,children:[(0,n.jsx)(u.lX,{htmlFor:"user_email",textAlign:"center",children:"E-Mail"}),(0,n.jsx)(h.II,{type:"email",id:"user_email",variant:"filled",onChange:function(e){return p(e.target.value)},value:g,placeholder:"Seu e-mail",color:(0,o.ff)("gray200","whiteAlpha900"),maxW:"container.xl",errorBorderColor:"glassTeal",required:!0})]}),(0,n.jsxs)(u.NI,{isInvalid:b,isRequired:!0,children:[(0,n.jsx)(u.lX,{htmlFor:"user_message",textAlign:"center",children:"Mensagem"}),(0,n.jsx)(d.g,{id:"user_message",variant:"filled",onChange:function(e){return y(e.target.value)},value:v,placeholder:"Escreva sua mensagem...",color:(0,o.ff)("gray200","whiteAlpha900"),maxW:"container.xl",errorBorderColor:"glassTeal",required:!0})]}),(0,n.jsx)(h.II,{type:"submit",disabled:""===r||""===g||""===v,value:"Enviar",color:(0,o.ff)("whiteAlpha900","gray200"),background:(0,o.ff)("orange","purple"),maxW:"container.xl",cursor:"pointer"})]})}),(0,n.jsxs)("div",{className:"text",children:[(0,n.jsx)(c.X6,{as:"h4",mt:8,mx:4,textAlign:"justify",children:"Se gostou do que viu ou deseja entrar em contato, fique \xe0 vontade que eu respondo o mais breve poss\xedvel."}),(0,n.jsx)(c.X6,{as:"h4",mt:4,mx:4,textAlign:"justify",children:"Caso ache melhor, pode me encontrar tamb\xe9m nas redes sociais:"}),(0,n.jsxs)(c.X6,{as:"h5",display:"flex",justifyContent:"space-evenly",mt:10,children:[(0,n.jsx)(c.rU,{target:"_blank",w:"10%",href:"https://tinyurl.com/y3udj3hr",children:(0,n.jsx)(f.Ee,{src:"/images/whatsapp.png",alt:"WhatsApp logo"})}),(0,n.jsx)(c.rU,{target:"_blank",w:"10%",href:"https://www.linkedin.com/in/johnatashenrique/",children:(0,n.jsx)(f.Ee,{src:"/images/linkedin.png",alt:"LinkedIn Logo"})}),(0,n.jsx)(c.rU,{target:"_blank",w:"10%",href:"https://github.com/johnatas-henrique",children:(0,n.jsx)(f.Ee,{src:A,width:100,height:100,alt:"GitHub Logo"})})]})]})]})}}},function(e){e.O(0,[675,987,774,888,179],(function(){return t=3269,e(e.s=t);var t}));var t=e.O();_N_E=t}]);