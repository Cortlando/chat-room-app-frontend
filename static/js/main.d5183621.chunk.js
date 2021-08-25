(this["webpackJsonpchat-room-app"]=this["webpackJsonpchat-room-app"]||[]).push([[0],{123:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){},149:function(e,t,n){},150:function(e,t,n){},151:function(e,t,n){},152:function(e,t,n){},153:function(e,t,n){},154:function(e,t,n){},155:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(13),o=n.n(a),r=n(28),i=n(9),j=n(32),l=n(15),u=n(46),d=n.n(u),m=(n(123),n(184)),b=n(178),O=n(179),x=n(180),h=n(174),f=n(86),g=n.n(f),p=n(182),v=n(177),N=n(181),C=n(2);function k(){return Math.round(20*Math.random())-10}function R(){var e=50+k(),t=50+k();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var B=Object(h.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),L=function(e){e.rooms,e.setRooms;var t=e.open,n=(e.setOpen,e.handleOpen,e.handleClose),a=B(),o=s.a.useState(R),i=Object(l.a)(o,1)[0],j=Object(c.useState)(""),u=Object(l.a)(j,2),d=u[0],m=u[1],b=Object(C.jsxs)("div",{style:i,className:a.paper,children:[Object(C.jsx)("div",{className:"ModalHeader",children:"Enter Room Name:"}),Object(C.jsx)("div",{className:"RoomEntryField",children:Object(C.jsx)(p.a,{type:"text",value:d,onChange:function(e){return m(e.target.value)}})}),Object(C.jsx)("div",{className:"RoomNameSubmitButton",children:Object(C.jsx)(r.b,{onClick:function(e){return d?null:e.preventDefault()},to:"/room?roomName=".concat(d),children:Object(C.jsx)(v.a,{type:"submit",children:"Create"})})})]});return Object(C.jsx)(N.a,{open:t,onClose:n,children:b})},w=n(17),S=function(){var e=Object(w.b)(),t=(e.loginWithRedirect,e.loginWithPopup);return Object(C.jsx)(v.a,{onClick:function(){return t()},children:"Log In"})},M=function(){var e=Object(w.b)().logout;return Object(C.jsx)(v.a,{onClick:function(){return e({returnTo:window.location.origin})},children:"Log Out"})},y=n(183),E=function(){var e=Object(w.b)(),t=e.user,n=e.isAuthenticated;return e.isLoading?Object(C.jsx)("div",{children:"Loading ..."}):n?Object(C.jsx)("div",{children:Object(C.jsx)(y.a,{src:t.picture})}):Object(C.jsx)("div",{children:Object(C.jsx)(y.a,{})})},P=Object(h.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),H=function(e){e.rooms,e.setRooms;var t=P(),n=s.a.useState(!1),c=Object(l.a)(n,2),a=c[0],o=c[1],r=Object(w.b)().isAuthenticated,i=function(){o(!0)};return Object(C.jsx)("div",{className:t.root,children:Object(C.jsx)(m.a,{position:"static",children:Object(C.jsxs)(b.a,{children:[Object(C.jsx)(O.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",onClick:i,children:Object(C.jsx)(g.a,{})}),Object(C.jsx)(x.a,{variant:"h6",className:t.title,children:"Click to create a room(Refresh to see rooms)"}),Object(C.jsx)(L,{open:a,setOpen:o,handleOpen:i,handleClose:function(){o(!1)}}),r?Object(C.jsx)(M,{}):Object(C.jsx)(S,{}),Object(C.jsx)(E,{})]})})})},T=(n(138),s.a.createContext()),A=function(e){var t=e.roomName,n=Object(c.useContext)(T);return Object(C.jsx)(r.b,{onClick:function(){return function(e){n.emit("join room",e,(function(){}))}(t)},to:"/room?roomName=".concat(t),children:Object(C.jsx)(v.a,{className:"Room",children:Object(C.jsx)("p",{id:"roomName",children:t})})})},G=(n(139),function(e){var t=e.cleanedRoomList;return t!==[]?Object(C.jsx)("div",{className:"roomListingsList",children:t.map((function(e,t){return Object(C.jsx)("div",{className:"RoomListing",children:Object(C.jsx)(A,{roomName:e})},t)}))}):Object(C.jsx)("div",{children:"Hel"})}),I=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)([]),o=Object(l.a)(a,2),r=o[0],i=o[1],u=Object(c.useState)(!0),d=Object(l.a)(u,2),m=d[0],b=d[1],O=Object(c.useContext)(T);return Object(c.useEffect)((function(){O.on("sentRooms",(function(e){s(e.roomList)})),b(!1)}),[O,n]),Object(c.useEffect)((function(){""!==n&&function(){for(var e=JSON.parse(n),t=function(t){e[t][0].includes("+")&&i((function(n){return[].concat(Object(j.a)(n),[e[t][0].slice(0,e[t][0].length-1)])}))},c=0;c<e.length;c++)t(c)}()}),[n]),m?Object(C.jsx)("div",{children:"Loading...."}):Object(C.jsxs)("div",{className:"RoomLandingPage",children:[Object(C.jsx)("div",{className:"RoomLandingPageHeader",children:Object(C.jsx)(H,{})}),Object(C.jsx)("div",{className:"RoomListings",children:Object(C.jsx)(G,{cleanedRoomList:r})})]})},J=n(87),F=n.n(J),U=(n(149),Object(h.a)((function(e){return{root:{flexGrow:1},exitButton:{textAlign:"end"},roomName:{flexGrow:1,textAlign:"center"},appBar:{backgroundColor:"#008598",position:"static"}}}))),W=s.a.memo((function(e){var t=e.roomName,n=U();return Object(C.jsx)("div",{className:n.root,children:Object(C.jsx)(m.a,{className:n.appBar,children:Object(C.jsxs)(b.a,{children:[Object(C.jsx)("div",{className:n.roomName,children:t}),Object(C.jsx)("div",{children:Object(C.jsx)(r.b,{Link:!0,to:"/",children:Object(C.jsx)(v.a,{edge:"start",className:n.exitButton,children:"Leave Room"})})})]})})})})),q=(n(150),s.a.memo((function(e){var t=e.message,n=" ",c=!1;return t.includes("+-+")?(n=t.split("+-+"),t=n[0]):c=!0,c?Object(C.jsx)("div",{className:"messageContainer",children:Object(C.jsx)("div",{className:"messageBox",children:Object(C.jsx)("p",{className:"messageTextHomeBackground",children:Object(C.jsx)("span",{id:"messageTextHome",children:t})})})}):Object(C.jsxs)("div",{className:"messageContainer",children:[Object(C.jsx)("div",{className:"messageNameBox",children:Object(C.jsx)("p",{className:"messageNameBackground",children:Object(C.jsx)("span",{id:"messageName",children:n[1]})})}),Object(C.jsx)("div",{className:"messageBox",children:Object(C.jsx)("p",{className:"messageTextForeignBackground",children:Object(C.jsx)("span",{id:"messageTextForeign",children:t})})})]})}))),z=(n(151),s.a.memo((function(e){var t=e.messages,n=e.user;return t&&n?Object(C.jsx)("div",{className:"message",children:t.map((function(e,t){return Object(C.jsx)("div",{children:Object(C.jsx)(q,{message:e,user:n})},t)}))}):t&&void 0===n?Object(C.jsx)("div",{className:"chatBox",children:t.map((function(e,t){return Object(C.jsx)("div",{children:Object(C.jsx)(q,{message:e})},t)}))}):Object(C.jsx)("div",{children:"adwad"})}))),D=(n(152),s.a.memo((function(e){var t=e.message,n=e.setMessage,s=e.setMessages,a=e.user,o=e.roomName,r=Object(c.useContext)(T),i=Object(c.useCallback)((function(e){e&&a?(r.emit("sendMessage",{message:e,user:a,roomName:o},(function(){return n("")})),s((function(t){return[].concat(Object(j.a)(t),[e])}))):e&&void 0===a&&(r.emit("sendMessage",{message:e,roomName:o},(function(){return n("")})),s((function(t){return[].concat(Object(j.a)(t),[e])}))),n("")}),[o,n,s,r,a]);return Object(C.jsxs)("div",{className:"inputBar",children:[Object(C.jsx)("input",{type:"text",name:"name",value:t,placeholder:"Type a message...",onChange:function(e){return n(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?i(t):null}}),Object(C.jsx)("button",{onClick:function(){return i(t)},children:" Send"})]})}))),K=(n(153),s.a.memo((function(e){var t=e.location,n=Object(c.useState)(""),s=Object(l.a)(n,2),a=s[0],o=s[1],r=Object(c.useState)(""),i=Object(l.a)(r,2),u=i[0],d=i[1],m=Object(c.useState)([]),b=Object(l.a)(m,2),O=b[0],x=b[1],h=Object(w.b)().user,f=Object(c.useContext)(T);return Object(c.useEffect)((function(){var e=F.a.parse(t.search).roomName;o(e),f.emit("create","".concat(e))}),[]),Object(c.useEffect)((function(){f.on("recieveMessage",(function(e){x((function(t){return[].concat(Object(j.a)(t),[e.message+"+-+".concat(e.nickname)])}))}))}),[f]),console.log(O),Object(C.jsxs)("div",{className:"RoomPage",children:[Object(C.jsx)("div",{className:"RoomPageHeader",children:Object(C.jsx)(W,{roomName:a})}),Object(C.jsx)("div",{className:"ChatBox",children:Object(C.jsx)(z,{messages:O,user:h})}),Object(C.jsx)("div",{className:"MessageInput",children:Object(C.jsx)(D,{message:u,setMessage:d,socket:f,messages:O,setMessages:x,user:h,roomName:a})})]})}))),Y=d()("https://cortlando-chat-room-app.herokuapp.com/");var Q=function(){return Object(C.jsx)("div",{className:"App",children:Object(C.jsx)(T.Provider,{value:Y,children:Object(C.jsx)(r.a,{children:Object(C.jsx)("div",{children:Object(C.jsxs)(i.c,{children:[Object(C.jsx)(i.a,{exact:!0,path:"/",component:I}),Object(C.jsx)(i.a,{path:"/room",component:K})]})})})})})};n(154);o.a.render(Object(C.jsx)(w.a,{domain:"dev-nlvqxf6y.us.auth0.com",clientId:"r1G0n8EYBmhazRHNk2fOPUteJbRleISB",redirectUri:window.location.origin,children:Object(C.jsx)(Q,{})}),document.getElementById("root"))}},[[155,1,2]]]);
//# sourceMappingURL=main.d5183621.chunk.js.map