(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(0),r=Object(a.createContext)({isLoggedIn:!1,_id:"",userid:"",login:function(){},logout:function(){}})},22:function(e,n,t){"use strict";var a=t(1);function r(){var e=Object(a.a)(["\n  display: flex;\n  justify-context: center;\n  align-items: center;\n  text-align: center;\n  min-height: 90vh;\n  border-top: 3em;\n  box-sizing: border-box;\n"]);return r=function(){return e},e}var i=t(2).a.div(r());n.a=i},36:function(e,n,t){e.exports=t(63)},41:function(e,n,t){},63:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(12),l=t.n(i),c=(t(41),t(1)),o=t(9),u=t(3),m=t(11),d=t(2);function s(){var e=Object(c.a)(["\n    position: fixed;\n    left: 0;\n    top: 0;\n    z-index: 10;\n    height: 100vh;\n    width: 70%;\n    background: white;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26 );\n    @media (min-width: 768px) {\n      display: none;\n  "]);return s=function(){return e},e}var f=function(e){var n=d.a.aside(s());return l.a.createPortal(e.show&&r.a.createElement(n,{onClick:e.onClick},e.children),document.getElementById("side-hook"))};function h(){var e=Object(c.a)(["\n    display: flex;\n    justify-context: center;\n    align-items: center;\n    background-color: #720B99;\n    padding: 1em;\n    font-family: 'Berkshire Swash', cursive;\n    color: white;\n    width: 100%;\n    height: 2em;\n    position: fixed;\n    top: 0;\n    z-index: 5;\n    @media (min-width: 768px) {\n      justify-content: space-between;\n    }\n  "]);return h=function(){return e},e}var g=function(e){var n=d.a.header(h());return r.a.createElement(n,null,e.children)},b=t(16);function p(){var e=Object(c.a)(["\n  font-family: 'Impact', Verdana, sans-serif;\n  font-size: 1.3em;\n  font-weight: 200;\n  color: #A6165E;\n  text-decoration: none;\n  padding: 0.5em;\n  @media (min-width: 768px) {\n    color: white;\n  }\n  &:hover {\n    color: lightpink;\n  }\n"]);return p=function(){return e},e}function E(){var e=Object(c.a)(["\n  margin: 1em;\n  @media (min-width: 768px) {\n    margin: 0 0.5em\n  }\n"]);return E=function(){return e},e}function v(){var e=Object(c.a)(["\n  list-style: none;\n  margin: 0;\n  padding: 0 1em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  @media (min-width: 768px) {\n    flex-direction: row;\n  }\n"]);return v=function(){return e},e}var w=d.a.ul(v()),x=d.a.li(E()),k=Object(d.a)(m.c)(p()),j=function(e){var n=Object(a.useContext)(b.a);return r.a.createElement(w,null,n.isLoggedIn&&r.a.createElement(x,null,r.a.createElement(k,{to:"/new"},"New")),r.a.createElement(x,null,r.a.createElement(k,{to:"/all"},"Everyone")),n.isLoggedIn&&r.a.createElement(x,null,r.a.createElement(k,{to:"/user/".concat(n.userid)},"My moments")),!n.isLoggedIn&&r.a.createElement(x,null,r.a.createElement(k,{to:"/join"},"Start")),n.isLoggedIn&&r.a.createElement("li",null,r.a.createElement(k,{to:"/all",onClick:n.logout},"Log out")))};function O(){var e=Object(c.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100vh;\n    background: rgba(0, 0, 0, 0.75);\n    z-index: 7;\n  "]);return O=function(){return e},e}var y=function(e){var n=d.a.div(O());return l.a.createPortal(r.a.createElement(n,{onClick:e.onClick}),document.getElementById("backdrop-hook"))};function S(){var e=Object(c.a)(["\n    display: none;\n    @media (min-width: 768px) {\n      display: block;\n    }\n  "]);return S=function(){return e},e}function z(){var e=Object(c.a)(["\n    height: 100%\n  "]);return z=function(){return e},e}function I(){var e=Object(c.a)(["\n    font-family: 'Berkshire Swash', cursive;\n    color: white;\n    text-decoration: none;\n  "]);return I=function(){return e},e}function C(){var e=Object(c.a)(["\n    width: 2.5em;\n    height: 2px;\n    background: white;\n  "]);return C=function(){return e},e}function B(){var e=Object(c.a)(["\n    width: 2.5em;\n    height: 3em;\n    background: transparent;\n    border: none;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    margin-right: 2em;\n    curser: pointer;\n    @media (min-width: 768px) {\n      display: none;\n    }\n  "]);return B=function(){return e},e}var L=function(e){var n=d.a.button(B()),t=d.a.span(C()),i=d.a.h1(I()),l=d.a.nav(z()),c=d.a.nav(S()),u=Object(a.useState)(!1),s=Object(o.a)(u,2),h=s[0],b=s[1],p=function(){return b(!1)};return r.a.createElement(r.a.Fragment,null,h&&r.a.createElement(y,{onClick:p}),r.a.createElement(f,{show:h,onClick:p},r.a.createElement(l,null,r.a.createElement(j,null))),r.a.createElement(g,null,r.a.createElement(n,{onClick:function(){return b(!0)}},r.a.createElement(t,null),r.a.createElement(t,null),r.a.createElement(t,null)),r.a.createElement(m.b,{to:"/",style:{textDecoration:"none"}},r.a.createElement(i,null,"Greatful")),r.a.createElement(c,null,r.a.createElement(j,null))))},D=t(21),J=t.n(D),_=t(22);function N(){var e=Object(c.a)(["\n  font-family: 'Berkshire Swash', cursive;\n  color: white;\n  font-size: 3em;\n  letter-spacing: 0.1em;\n  color: white;\n  background-color: purple;\n  background-image: radial-gradient(circle at top right, #A6165E, #720B99 62.5%);\n  background-size: 100%;\n  background-repeat: repeat;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent; \n  -moz-background-clip: text;\n  -moz-text-fill-color: transparent;\n\n  @media (min-width: 768px) {\n    font-size: 5em;\n  }\n  @media (min-width: 576px) {\n    font-size: 4em;\n  }\n"]);return N=function(){return e},e}var P=d.a.h1(N()),T=function(){var e=Object(a.useState)(),n=Object(o.a)(e,2),t=n[0],i=n[1];return Object(a.useEffect)((function(){J.a.get("http://localhost:5000/api/post/one").then((function(e){return i(e.data.content)}))}),[]),r.a.createElement(_.a,null,t&&r.a.createElement(P,null,t))};function A(){var e=Object(c.a)(["\n  margin: 5em auto 0 auto;\n  max-width: 768px;\n"]);return A=function(){return e},e}var M=r.a.lazy((function(){return t.e(6).then(t.bind(null,67))})),W=r.a.lazy((function(){return t.e(3).then(t.bind(null,68))})),F=r.a.lazy((function(){return t.e(5).then(t.bind(null,70))})),G=r.a.lazy((function(){return t.e(4).then(t.bind(null,69))})),V=d.a.div(A()),$=function(){var e,n=Object(a.useState)(!1),t=Object(o.a)(n,2),i=t[0],l=t[1],c=Object(a.useState)(),d=Object(o.a)(c,2),s=d[0],f=d[1],h=Object(a.useState)(),g=Object(o.a)(h,2),p=g[0],E=g[1],v=Object(a.useCallback)((function(e,n,t,a){l(t),f(e),E(n);var r=a||new Date((new Date).getTime()+36e5);localStorage.setItem("user",JSON.stringify({_id:e,userid:n,token:t,exp:r}))}),[]),w=Object(a.useCallback)((function(){l(!1),f(null),E(null),localStorage.removeItem("user")}),[]);return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("user"));e&&e.token&&new Date(e.exp).getTime()>(new Date).getTime()&&v(e._id,e.userid,e.token,new Date(e.exp))}),[v]),e=i?r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0},r.a.createElement(T,null)),r.a.createElement(u.b,{path:"/new"},r.a.createElement(M,null)),r.a.createElement(u.b,{path:"/all"},r.a.createElement(W,null)),r.a.createElement(u.b,{path:"/user/:userid"},r.a.createElement(G,null)),r.a.createElement(u.a,{to:"/all"})):r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0},r.a.createElement(T,null)),r.a.createElement(u.b,{path:"/all"},r.a.createElement(W,null)),r.a.createElement(u.b,{path:"/join"},r.a.createElement(F,null)),r.a.createElement(u.b,{path:"/user/:userid"},r.a.createElement(G,{userid:p})),r.a.createElement(u.a,{to:"/"})),r.a.createElement(b.a.Provider,{value:{isLoggedIn:!!i,_id:s,userid:p,token:i,login:v,logout:w}},r.a.createElement(m.a,null,r.a.createElement(L,null),r.a.createElement(V,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null)},e))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.3a2e67b8.chunk.js.map