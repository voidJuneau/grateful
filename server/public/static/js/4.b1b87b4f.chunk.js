(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[4],{64:function(e,t,n){"use strict";var a=n(1),r=n(0),c=n.n(r),o=n(2);function i(){var e=Object(a.a)(["\n    padding: 1em;\n    margin: 0.5em auto;\n    border-radius: 5px;\n    border: 1px solid salmon;\n    background-color: white;\n    font-size: 1em;\n  "]);return i=function(){return e},e}t.a=function(e){var t=o.a.button(i());return c.a.createElement(t,{type:e.type,onClick:e.onClick},e.children)}},66:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(1),o=n(9),i=n(11),l=n(2),u=n(21),d=n.n(u),m=n(16),s=n(64);function f(){var e=Object(c.a)(["\n  color: black;\n  text-decoration: none;\n"]);return f=function(){return e},e}function p(){var e=Object(c.a)(["\n  width: 100%;\n"]);return p=function(){return e},e}function h(){var e=Object(c.a)(["\n  display: flex;\n  margin: 0 1em;\n  padding: 0.5em 1em;\n  align-items: center;\n  border-left: 2px dashed salmon;\n"]);return h=function(){return e},e}function b(){var e=Object(c.a)(["\n  margin: 0 1em;\n  padding: 0 1em;\n  ","\n  @media (min-width: 768px) {\n    min-width: 150px;\n    ","\n    text-align: right;\n  }\n"]);return b=function(){return e},e}function E(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 2em;\n  ","\n  @media (min-width: 768px) {\n    flex-direction: row;\n    margin: 4em 0;\n  }\n"]);return E=function(){return e},e}var j=l.a.div(E(),""),v=l.a.div(b(),"",""),O=l.a.div(h()),g=l.a.textarea(p()),w=Object(l.a)(i.b)(f()),x=function(e){var t=Object(a.useContext)(m.a),n=Object(a.useState)(e.data.content),c=Object(o.a)(n,2),i=c[0],l=c[1],u=Object(a.useState)(!1),f=Object(o.a)(u,2),p=f[0],h=f[1],b=Object(a.useState)(""),E=Object(o.a)(b,2),x=E[0],k=E[1];return r.a.createElement(j,null,r.a.createElement(v,null,r.a.createElement(w,{to:"/user/".concat(e.data.ownerUserid)},r.a.createElement("h3",null,e.data.ownerName)),r.a.createElement("p",null,e.data.date),t._id===e.data.owner_id&&r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fa fa-pencil",onClick:function(){k(e.data.content),h(!0)}}),"\xa0\xa0\xa0\xa0",r.a.createElement("i",{className:"fa fa-trash-o",onClick:function(){window.confirm("Sure to delete?")&&d.a.delete("http://localhost:5000/api/post/"+e.data._id,{headers:{Authorization:"Bearer "+t.token}}).then((function(){return window.location.reload(!1)})).catch((function(e){return alert(e.response.data.error)}))}}))),!p&&r.a.createElement(O,null,i),p&&r.a.createElement(O,null,r.a.createElement(g,{value:x,onChange:function(e){return k(e.target.value)}}),r.a.createElement(s.a,{onClick:function(){d.a.patch("http://localhost:5000/api/post/"+e.data._id,{content:x},{headers:{Authorization:"Bearer "+t.token}}).then((function(t){e.data.content=x,l(x)})).catch((function(e){return alert(e.response.data.error)})),h(!1)}},"Save"),r.a.createElement(s.a,{onClick:function(){return h(!1)}},"Cancel")))};t.a=function(e){return e.data?e.data.map((function(e){return r.a.createElement(x,{data:e,key:e._id})})):r.a.createElement("p",null,"No posts")}},69:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n(0),c=n.n(r),o=n(3),i=n(21),l=n.n(i),u=n(66),d=n(16);t.default=function(e){Object(r.useContext)(d.a);var t,n=Object(r.useState)(),i=Object(a.a)(n,2),m=i[0],s=i[1],f=Object(r.useState)(),p=Object(a.a)(f,2),h=p[0],b=p[1],E=Object(o.h)().userid;return Object(r.useEffect)((function(){l.a.get("http://localhost:5000/api/user/"+E).then((function(e){b(e.data.posts),s(e.data.user)}))}),[]),t=h?c.a.createElement(u.a,{data:h}):c.a.createElement("div",null,"Loading . . ."),c.a.createElement(c.a.Fragment,null,m&&c.a.createElement("div",null,c.a.createElement("h2",null,m.name),c.a.createElement("h3",null,"@",m.userid),c.a.createElement("h4",null,"Total of ",h.length," posts.")),t)}}}]);
//# sourceMappingURL=4.b1b87b4f.chunk.js.map