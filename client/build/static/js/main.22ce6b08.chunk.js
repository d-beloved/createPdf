(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(e){e.exports=JSON.parse('{"domain":"dev-v-dhy23g.auth0.com","clientId":"rbBfYhFH4fdrCMQ6pw5ciIPKssrDksj9"}')},38:function(e,t,n){e.exports=n(67)},39:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);n(39);var a=n(0),r=n.n(a),c=n(30),o=n.n(c),i=n(10),l=n.n(i),u=n(13),s=n(3),p=n.n(s),d=n(7),h=n(8),f=n(12),m=n(31),g=function(){return window.history.replaceState({},document.title,window.location.pathname)},b=r.a.createContext(),v=function(){return Object(a.useContext)(b)},E=function(e){var t=e.children,n=e.onRedirectCallback,c=void 0===n?g:n,o=Object(f.a)(e,["children","onRedirectCallback"]),i=Object(a.useState)(),l=Object(h.a)(i,2),u=l[0],s=l[1],v=Object(a.useState)(),E=Object(h.a)(v,2),w=E[0],O=E[1],k=Object(a.useState)(),j=Object(h.a)(k,2),x=j[0],y=j[1],C=Object(a.useState)(!0),A=Object(h.a)(C,2),S=A[0],W=A[1],P=Object(a.useState)(!1),R=Object(h.a)(P,2),T=R[0],D=R[1];Object(a.useEffect)((function(){(function(){var e=Object(d.a)(p.a.mark((function e(){var t,n,a,r,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.a)(o);case 2:if(t=e.sent,y(t),!window.location.search.includes("code=")||!window.location.search.includes("state=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:n=e.sent,a=n.appState,c(a);case 10:return e.next=12,t.isAuthenticated();case 12:if(r=e.sent,s(r),!r){e.next=19;break}return e.next=17,t.getUser();case 17:i=e.sent,O(i);case 19:W(!1);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var I=function(){var e=Object(d.a)(p.a.mark((function e(){var t,n,a=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},D(!0),e.prev=2,e.next=5,x.loginWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:return e.prev=10,D(!1),e.finish(10);case 13:return e.next=15,x.getUser();case 15:n=e.sent,O(n),s(!0);case 18:case"end":return e.stop()}}),e,null,[[2,7,10,13]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return W(!0),e.next=3,x.handleRedirectCallback();case 3:return e.next=5,x.getUser();case 5:t=e.sent,W(!1),s(!0),O(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(b.Provider,{value:{isAuthenticated:u,user:w,loading:S,popupOpen:T,loginWithPopup:I,handleRedirectCallback:N,getIdTokenClaims:function(){return x.getIdTokenClaims.apply(x,arguments)},loginWithRedirect:function(){return x.loginWithRedirect.apply(x,arguments)},getTokenSilently:function(){return x.getTokenSilently.apply(x,arguments)},getTokenWithPopup:function(){return x.getTokenWithPopup.apply(x,arguments)},logout:function(){return x.logout.apply(x,arguments)}}},t)},w=function(){var e=v(),t=e.isAuthenticated,n=e.loginWithRedirect,a=e.logout;return r.a.createElement("div",null,!t&&r.a.createElement("nav",{class:"container"},r.a.createElement("h1",null,"PDF GENERATE"),r.a.createElement("button",{onClick:function(){return n({})}},"Log in")),t&&r.a.createElement("span",null,r.a.createElement("nav",{class:"container"},r.a.createElement("h1",null,"PDF GENERATE"),r.a.createElement("button",{onClick:function(){return a({})}},"Log Out"))))},O=n(68),k=function(){var e=v(),t=e.loading,n=e.user;return t||!n?r.a.createElement("div",null,"Loading..."):r.a.createElement(a.Fragment,null,r.a.createElement("img",{src:n.picture,alt:"Profile"}),r.a.createElement("h2",null,n.name),r.a.createElement("p",null,n.email),r.a.createElement("code",null,JSON.stringify(n,null,2)))},j=n(6),x=Object(j.a)(),y=n(32),C=n(33),A=n(34),S=n(37),W=n(36),P=function(e){Object(S.a)(n,e);var t=Object(W.a)(n);function n(){var e;Object(C.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",description:""},e.handleChange=function(t){var n=t.target,a=n.value,r=n.name;return e.setState(Object(y.a)({},r,a))},e.createAndDownloadPdf=function(){l.a.post("/create-pdf",e.state).then((function(){return l.a.get("fetch-pdf",{responseType:"blob"})})).then((function(e){var t=new Blob([e.data],{type:"application/pdf"});Object(u.saveAs)(t,"WO.pdf")}))},e}return Object(A.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{class:"main"},r.a.createElement("p",{class:"sign",align:"center"},"Make A New Work Order"),r.a.createElement("textarea",{class:"un ",type:"text",placeholder:"Work Order Information",name:"wo",id:"wo",onChange:this.handleChange}),r.a.createElement("textarea",{class:"pass",type:"text",placeholder:"Description",name:"description",onChange:this.handleChange}),r.a.createElement("button",{class:"submit",onClick:this.createAndDownloadPdf},"Download PDF")))}}]),n}(a.Component),R=function(e){var t=e.component,n=e.path,c=Object(f.a)(e,["component","path"]),o=v(),i=o.loading,l=o.isAuthenticated,u=o.loginWithRedirect;Object(a.useEffect)((function(){i||l||function(){var e=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({appState:{targetUrl:window.location.pathname}});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[i,l,u,n]);return r.a.createElement(O.a,Object.assign({path:n,render:function(e){return!0===l?r.a.createElement(t,e):null}},c))};var T=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O.b,{history:x},r.a.createElement("header",null,r.a.createElement(w,null)),r.a.createElement(O.c,null,r.a.createElement(R,{path:"/",component:P}),r.a.createElement(O.a,{path:"/profile",component:k}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=n(16);o.a.render(r.a.createElement(E,{domain:D.domain,client_id:D.clientId,redirect_uri:window.location.origin,onRedirectCallback:function(e){x.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}},r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.22ce6b08.chunk.js.map