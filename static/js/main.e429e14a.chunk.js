(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(9),s=c.n(a),n=c(4),i=(c(14),c(15),c(16),c(2)),b=c(6),j=c.n(b),l=c(1),r=function(e){var t=e.link,c=e.text;return Object(l.jsx)(n.c,{to:t,className:function(e){var t=e.isActive;return j()("navbar-item",{"is-active":t})},children:c})},d=function(e){var t,c=e.tabs,a=Object(i.h)().tabId;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"Tabs page"}),Object(l.jsx)("div",{className:"tabs is-boxed",children:Object(l.jsx)("ul",{children:c.map((function(e){return Object(l.jsx)("li",{"data-cy":"Tab",className:j()({"is-active":e.id===a}),children:Object(l.jsx)(n.b,{to:"../".concat(e.id),children:e.title})},e.id)}))})}),Object(l.jsx)("div",{className:"block","data-cy":"TabContent",children:(null===(t=c.find((function(e){return e.id===a})))||void 0===t?void 0:t.content)||"Please select a tab"})]})},o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],x=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(r,{link:"/",text:"Home"}),Object(l.jsx)(r,{link:"/tabs",text:"Tabs"})]})})}),Object(l.jsx)("div",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{path:"/",element:Object(l.jsx)("h1",{className:"title",children:"Home page"})}),Object(l.jsx)(i.b,{path:"/home",element:Object(l.jsx)(i.a,{to:"/",replace:!0})}),Object(l.jsxs)(i.b,{path:"tabs",children:[Object(l.jsx)(i.b,{index:!0,element:Object(l.jsx)(d,{tabs:o})}),Object(l.jsx)(i.b,{path:":tabId",element:Object(l.jsx)(d,{tabs:o})})]}),Object(l.jsx)(i.b,{path:"*",element:Object(l.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};s.a.render(Object(l.jsx)(n.a,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.e429e14a.chunk.js.map