(this["webpackJsonpgoodreads-frontend"]=this["webpackJsonpgoodreads-frontend"]||[]).push([[0],{20:function(n,e,t){"use strict";t.r(e);var r,o,i,a,c,d,s,b,h=t(0),l=t.n(h),j=t(9),x=t.n(j),p=t(5),g=t(2),u=t(3),f=t(1),O=u.a.div(r||(r=Object(g.a)(["\n  text-align: center;\n\n  h2 {\n    margin: 45px 0 0;\n  }\n"]))),m=Object(u.b)(o||(o=Object(g.a)(["\n  from {\n    width: 0px;\n  }\n  to {\n    width: 1.25em;\n  }\n"]))),v=u.a.div(i||(i=Object(g.a)(["\n  font-size: 30px;\n  height: 100vh;\n  line-height: 100vh;\n\n  &:after {\n    overflow: hidden;\n    display: inline-block;\n    vertical-align: bottom; \n    animation: ",' steps(4,end) 900ms infinite;\n    content: "\u2026"; /* ascii code for the ellipsis character */\n    width: 0px;\n  }\n'])),m),w=u.a.div(a||(a=Object(g.a)(["\n  font-size: 30px;\n  height: 100vh;\n  line-height: 100vh;\n"]))),k=u.a.a(c||(c=Object(g.a)(["\n  display: inline-block;\n  position: relative;\n\n  transition: transform .25s;\n  transform-origin: bottom center;\n\n  width: ","px;\n\n  margin: 40px 20px;\n\n  color: #000;\n  text-decoration: none;\n  &:hover {\n    text-decoration: underline;\n  }\n\n  p.read-date {\n    opacity: 0;\n    position: absolute;\n    box-sizing: border-box;\n\n    background: #FFF;\n    padding: 5px;\n    border-radius: 2px;\n    box-shadow: 2px 2px 5px rgba(0,0,0, 0.5);\n\n    width: ","px;\n    bottom: -20px;\n    left: 50%;\n    margin-left: -","px;\n\n    transition: opacity .25s, bottom .25s;\n  }\n\n  &:hover {\n    transform: scale(1.1);\n\n    p.read-date {\n      opacity: 1;\n      bottom: 10px;\n    }\n\n    img {\n      transform: perspective(1000px) rotateY(-20deg);\n    }\n\n    & div {\n      right: -5px;\n    }\n  }\n"])),150,112.5,56.25),F=u.a.img(d||(d=Object(g.a)(["\n  border: 1px solid #AAA;\n  border-radius: ",";\n  width: 100%;\n  margin-bottom: -4px;\n\n  transition: transform .25s;\n  transform-origin: center left;\n"])),"3px"),L=u.a.div(s||(s=Object(g.a)(["\n  z-index: -1;\n\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n\n  background-color: #FFF;\n  border: 1px solid #AAA;\n  border-radius: ",";\n  box-sizing: border-box;\n\n  transition: right .25s;\n"])),"3px"),y=function(n){var e=n.book;return Object(f.jsxs)(k,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[Object(f.jsx)(F,{src:e.cover_src,alt:""}),Object(f.jsx)(L,{}),e.read_date?Object(f.jsxs)("p",{className:"read-date",children:["Finished:",Object(f.jsx)("br",{}),e.read_date]}):null]})};!function(n){n[n.Loading=0]="Loading",n[n.Loaded=1]="Loaded",n[n.Error=2]="Error"}(b||(b={}));var A=function(){var n=Object(h.useState)(b.Loading),e=Object(p.a)(n,2),t=e[0],r=e[1],o=Object(h.useState)([[],[],[]]),i=Object(p.a)(o,2),a=i[0],c=i[1],d=Object(p.a)(a,3),s=d[0],l=d[1],j=d[2];return Object(h.useEffect)((function(){fetch("https://europe-west3-rugged-shell-330515.cloudfunctions.net/goodreads_node").then((function(n){return n.json()})).then((function(n){c(n),r(b.Loaded)})).catch((function(){return r(b.Error)}))}),[]),t===b.Loading?Object(f.jsx)(O,{children:Object(f.jsx)(v,{children:"Loading"})}):t===b.Error?Object(f.jsx)(O,{children:Object(f.jsx)(w,{children:"Ruh roh, something went wong!"})}):Object(f.jsxs)(O,{children:[Object(f.jsxs)("h2",{children:["Currently reading (",s.length,")"]}),Object(f.jsx)("div",{children:s.map((function(n,e){return Object(f.jsx)(y,{book:n},e)}))}),Object(f.jsxs)("h2",{children:["Read so far in ",(new Date).getFullYear()," (",l.length,")"]}),Object(f.jsx)("div",{children:l.map((function(n,e){return Object(f.jsx)(y,{book:n},e)}))}),Object(f.jsxs)("h2",{children:["All time favorites (",j.length,")"]}),Object(f.jsx)("div",{children:j.map((function(n,e){return Object(f.jsx)(y,{book:n},e)}))})]})};x.a.render(Object(f.jsx)(l.a.StrictMode,{children:Object(f.jsx)(A,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.c4658572.chunk.js.map