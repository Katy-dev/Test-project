(this["webpackJsonptest-projest"]=this["webpackJsonptest-projest"]||[]).push([[0],{29:function(e,t,n){},39:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r,a,s,l=n(0),c=n.n(l),i=n(32),o=n.n(i),d=(n(39),n(29),n(6)),u=n(1),b=Object(u.jsxs)("svg",{height:"20px",viewBox:"0 0 512 512.00004",width:"20px",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[Object(u.jsxs)("linearGradient",{id:"a",gradientUnits:"userSpaceOnUse",x1:"255.5664972986",x2:"255.5664972986",y1:".000039",y2:"512.0003355972",children:[Object(u.jsx)("stop",{offset:"0",stopColor:"#2af598"}),Object(u.jsx)("stop",{offset:"1",stopColor:"#009efd"})]}),Object(u.jsx)("path",{d:"m511.132812 79.929688c-.019531-21.390626-8.367187-41.488282-23.507812-56.59375-31.226562-31.15625-81.992188-31.113282-113.183594.117187l-322.207031 323.503906c-10.480469 10.472657-18.480469 23.4375-23.136719 37.496094l-.300781.914063-28.796875 126.632812 126.984375-28.429688.945313-.3125c14.0625-4.65625 27.035156-12.648437 37.542968-23.152343l322.25-323.542969c15.113282-15.132812 23.429688-35.246094 23.410156-56.632812zm-440.714843 375.34375-13.464844-13.472657 9.722656-42.765625 46.613281 46.640625zm389.003906-346.9375-312.847656 314.105468-56.652344-56.6875 214.300781-215.160156 32.632813 32.632812 28.261719-28.261718-32.691407-32.691406 30.402344-30.519532 32.75 32.75 28.261719-28.261718-32.808594-32.808594 11.707031-11.753906c15.605469-15.625 41.023438-15.648438 56.65625-.050782 7.578125 7.5625 11.757813 17.625 11.769531 28.332032.007813 10.710937-4.152343 20.777343-11.742187 28.375zm-249.164063 363.261718h300.875v39.96875h-340.707031zm0 0",fill:"url(#a)"})]}),j=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("table",{className:"table w-full",children:[Object(u.jsx)("thead",{className:"table-row-group",children:Object(u.jsxs)("tr",{className:"table-row",children:[Object(u.jsx)("th",{className:"table-cell p-5 border-b-1 text-left",children:"First Name"}),Object(u.jsx)("th",{className:"table-cell p-5 border-b-1 text-left",children:"Last Name"}),Object(u.jsx)("th",{className:"table-cell p-5 border-b-1 text-left",children:"Phone"}),Object(u.jsx)("th",{className:"table-cell p-5 border-b-1 text-left",children:"AvatarUrl"})]})}),Object(u.jsx)("tbody",{children:e.clients?e.clients.map((function(t){var n,r;return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"table-cell p-5 border-b border-green-400",children:t.firstName}),Object(u.jsx)("td",{className:"table-cell p-5 border-b border-green-400",children:t.lastName}),Object(u.jsx)("td",{className:"table-cell p-5 border-b border-green-400",children:null===(n=t.phone)||void 0===n?void 0:n.substr(0,13)}),Object(u.jsx)("td",{className:"table-cell p-5 border-b border-green-400",children:null===(r=t.avatarUrl)||void 0===r?void 0:r.substr(0,15)}),Object(u.jsx)("td",{className:"table-cell border-b border-green-400",children:Object(u.jsx)("button",{className:"outline-none focus:outline-none p-1",onClick:function(){e.editRow(t)},children:b})})]},t.id)})):Object(u.jsx)("tr",{children:Object(u.jsx)("td",{className:"text-center",colSpan:4,children:"None customers"})})})]})})},m=n(22),f=n(7),p=n.n(f),h=n(10),x=n(23),O=n(28),N=n(51),v=n(52),g=n(24),w=n.n(g),y=w()(r||(r=Object(x.a)(["\n        query{\n            getClients {\n                id\n                firstName\n                lastName\n                phone\n                avatarUrl\n            }\n        }\n "]))),S=w()(a||(a=Object(x.a)(["\nmutation addClient($firstName: String!, $lastName: String!, $phone: String, $avatarUrl: String) {\n    addClient(firstName: $firstName, lastName: $lastName, phone: $phone, avatarUrl: $avatarUrl) {\n    id, firstName, lastName, phone, avatarUrl             \n    }\n}\n"]))),U=w()(s||(s=Object(x.a)(["\n  mutation updateClient($id: ID!, $firstName: String!, $lastName: String!, $phone: String,$avatarUrl: String) {\n    updateClient(id: $id, firstName: $firstName, lastName: $lastName, phone: $phone, avatarUrl: $avatarUrl) {\n    id, firstName, lastName, phone, avatarUrl             \n    }\n}\n"]))),k=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r="https://test-task.expane.pro/api/graphql",a=new O.GraphQLClient(r,{headers:{authorization:"Bearer MY_TOKEN"}}),s=function(){var n=Object(h.a)(p.a.mark((function n(){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.request(e,t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(v.a)(s,n)},C=Object(u.jsxs)("svg",{height:"50px",viewBox:"0 0 512 512",width:"50px",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[Object(u.jsxs)("linearGradient",{id:"a",gradientUnits:"userSpaceOnUse",x1:"256",x2:"256",y1:"0",y2:"512",children:[Object(u.jsx)("stop",{offset:"0",stopColor:"#2af598"}),Object(u.jsx)("stop",{offset:"1",stopColor:"#009efd"})]}),Object(u.jsx)("path",{d:"m437.019531 74.980469c-48.351562-48.351563-112.640625-74.980469-181.019531-74.980469s-132.667969 26.628906-181.019531 74.980469c-48.351563 48.351562-74.980469 112.640625-74.980469 181.019531s26.628906 132.667969 74.980469 181.019531c48.351562 48.351563 112.640625 74.980469 181.019531 74.980469s132.667969-26.628906 181.019531-74.980469c48.351563-48.351562 74.980469-112.640625 74.980469-181.019531s-26.628906-132.667969-74.980469-181.019531zm-181.019531 397.019531c-119.101562 0-216-96.898438-216-216s96.898438-216 216-216 216 96.898438 216 216-96.898438 216-216 216zm20-236.019531h90v40h-90v90h-40v-90h-90v-40h90v-90h40zm0 0",fill:"url(#a)"})]}),$=function(e){var t=Object(m.a)(),n=t.register,r=t.handleSubmit,a=t.errors,s=Object(l.useState)(!1),c=Object(d.a)(s,2),i=c[0],o=c[1],b=Object(l.useRef)(null),j=Object(l.useState)(""),f=Object(d.a)(j,2),p=f[0],h=f[1],x=Object(l.useState)(""),O=Object(d.a)(x,2),N=O[0],v=O[1],g=Object(l.useState)(""),w=Object(d.a)(g,2),y=w[0],U=w[1],$=Object(l.useState)(""),z=Object(d.a)($,2),L=z[0],E=z[1],q=k(S,{firstName:p,lastName:N,phone:y,avatarUrl:L},{onSuccess:function(){e.refetch()}}).mutate,A=function(e){b.current&&!b.current.contains(e.target)&&o(!1)};return Object(l.useEffect)((function(){return document.addEventListener("click",A,!0),function(){document.removeEventListener("click",A,!0)}}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"float-right p-10 outline-none focus:outline-none",type:"button",onClick:function(e){e.preventDefault(),o((function(){return!i}))},style:{transition:"all .15s ease"},children:C}),i&&Object(u.jsx)("div",{className:"bg-gray-900 w-full h-full",children:Object(u.jsx)("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed bg-gray-900 inset-0 z-50 outline-none focus:outline-none",children:Object(u.jsx)("div",{ref:b,className:"relative w-auto my-6 mx-auto max-w-sm",children:Object(u.jsx)("div",{className:"border-0 rounded-lg p-10 bg-gray-800 relative w-full flex flex-col outline-none focus:outline-none",children:Object(u.jsxs)("div",{className:"flex flex-col items-start justify-between p-5 rounded-t",children:[Object(u.jsx)("h2",{className:"text-3xl pb-2 mb-3 text-center border-b border-green-400 w-full",children:"Add Customer"}),Object(u.jsxs)("form",{className:"border-0 relative flex flex-col w-full outline-none focus:outline-none",onSubmit:r((function(e){var t=e.firstName,n=e.lastName,r=e.phone,a=e.avatarUrl;h(t),v(n),U(String(r)),E(String(a)),q(),o(!1)})),children:[Object(u.jsx)("label",{className:"pt-5 pb-1",children:"First Name"}),Object(u.jsx)("input",{className:"pl-2 text-black border-0 rounded-md p-1 w-64 outline-none focus:outline-none",name:"firstName",ref:n({required:!0,pattern:/^[A-Za-z]+$/i})}),Object(u.jsx)("p",{className:"text-red-700 pt-1",children:a.firstName&&"First name is required. Please, enter letters only"}),Object(u.jsx)("label",{className:"pt-5 pb-1",children:"Last Name"}),Object(u.jsx)("input",{className:"pl-2 text-black border-0 rounded-md p-1 w-64 outline-none focus:outline-none",name:"lastName",ref:n({required:!0,pattern:/^[A-Za-z]+$/i})}),Object(u.jsx)("p",{className:"text-red-700",children:a.lastName&&"Last name is required. Please, enter letters only"}),Object(u.jsx)("label",{className:"pt-5 pb-1",children:"Phone"}),Object(u.jsx)("input",{className:"pl-2 text-black border-0 rounded-md p-1 w-64 outline-none focus:outline-none",name:"phone",ref:n({minLength:10,maxLength:12,pattern:/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/})}),Object(u.jsx)("p",{className:"text-red-700",children:a.phone&&"The phone's number has to start with 380.."}),Object(u.jsx)("label",{className:"pt-5 pb-1",children:"AvatarUrl"}),Object(u.jsx)("input",{className:"pl-2 text-black border-0 rounded-md p-1 w-64 outline-none focus:outline-none",type:"url",name:"avatarUrl",ref:n({pattern:/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/})}),Object(u.jsx)("p",{className:"text-red-700",children:a.avatarUrl&&"Please enter the URL of your avatar"}),Object(u.jsxs)("div",{className:"flex flex-row justify-between",children:[Object(u.jsx)("button",{className:"mt-8 w-28 py-1 border-0 rounded-md  border border-green-400 hover:bg-green-600 outline-none focus:outline-none",type:"submit",children:"Add"}),Object(u.jsx)("button",{className:"mt-8 w-28 py-1 border-0 rounded-md  border border-green-400 hover:bg-green-600 outline-none focus:outline-none",onClick:function(){return o(!1)},children:"Cancel"})]})]})]})})})})})]})},z=function(e){var t=Object(l.useState)(e.currentClient),n=Object(d.a)(t,2),r=n[0],a=n[1],s=Object(m.a)(),c=s.register,i=s.errors,o=s.handleSubmit,b=Object(l.useRef)(null);Object(l.useEffect)((function(){a(e.currentClient)}),[e]);var j=function(t){b.current&&!b.current.contains(t.target)&&e.setEditing(!1)};return Object(l.useEffect)((function(){return document.addEventListener("click",j,!0),function(){document.removeEventListener("click",j,!0)}}),[]),Object(u.jsx)("div",{className:"bg-gray-900 w-full h-full",children:Object(u.jsx)("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed bg-gray-900 inset-0 z-50 outline-none focus:outline-none",children:Object(u.jsx)("div",{ref:b,className:"relative w-auto my-6 mx-auto max-w-sm",children:Object(u.jsx)("div",{className:"border-0 rounded-lg p-10 bg-gray-800 relative w-full flex flex-col outline-none focus:outline-none",children:Object(u.jsxs)("div",{className:"flex flex-col items-start justify-between p-5 rounded-t",children:[Object(u.jsx)("h2",{className:"text-3xl pb-2 mb-3 text-center border-b border-green-400 w-full",children:"Edit Customer"}),Object(u.jsxs)("form",{className:"border-0 relative flex flex-col w-full outline-none focus:outline-none",onSubmit:o((function(t){e.updateClient(t)})),children:[Object(u.jsx)("label",{className:"pt-5 pb-1",children:"First Name"}),Object(u.jsx)("input",{className:"pl-2 text-black border-0 rounded-md p-1 w-64 outline-none focus:outline-none",name:"firstName",defaultValue:r.firstName,ref:c({required:!0,maxLength:20})}),Object(u.jsx)("p",{className:"text-red-700 pt-1",children:i.firstName&&"First name is required. Please, enter letters only"}),Object(u.jsx)("label",{className:"pt-5 pb-1",children:"Last Name"}),Object(u.jsx)("input",{className:"pl-2 text-black border-0 rounded-md p-1 w-64 outline-none focus:outline-none",name:"lastName",defaultValue:r.lastName,ref:c({required:!0,pattern:/^[A-Za-z]+$/i})}),Object(u.jsx)("p",{className:"text-red-700",children:i.lastName&&"Last name is required. Please, enter letters only"}),Object(u.jsx)("label",{className:"pt-5 pb-1",children:"Phone"}),Object(u.jsx)("input",{className:"pl-2 text-black border-0 rounded-md p-1 w-64 outline-none focus:outline-none",name:"phone",defaultValue:r.phone,ref:c({minLength:10,maxLength:12,pattern:/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/})}),Object(u.jsx)("p",{className:"text-red-700",children:i.phone&&"The phone's number has to start with 380.."}),Object(u.jsx)("label",{className:"pt-5 pb-1",children:"AvatarUrl"}),Object(u.jsx)("input",{className:"pl-2 text-black border-0 rounded-md p-1 w-64 outline-none focus:outline-none",name:"avatarUrl",type:"url",defaultValue:r.avatarUrl,ref:c({pattern:/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/})}),Object(u.jsx)("p",{className:"text-red-700",children:i.avatarUrl&&"Please enter the URL of your avatar"}),Object(u.jsxs)("div",{className:"flex flex-row justify-between",children:[Object(u.jsx)("button",{className:"mt-8 w-28 py-1 border-0 rounded-md  border border-green-400 hover:bg-green-600 outline-none focus:outline-none",type:"submit",children:"Update"}),Object(u.jsx)("button",{className:"mt-8 w-28 py-1 border-0 rounded-md  border border-green-400 hover:bg-green-600 outline-none focus:outline-none",onClick:function(){return e.setEditing(!1)},children:"Cancel"})]})]})]})})})})})};var L=function(){var e=Object(l.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(l.useState)({id:null,firstName:"",lastName:"",phone:"",avatarUrl:""}),s=Object(d.a)(a,2),c=s[0],i=s[1],o=Object(l.useState)(null),b=Object(d.a)(o,2),m=b[0],f=b[1],x=Object(l.useState)(""),v=Object(d.a)(x,2),g=v[0],w=v[1],S=Object(l.useState)(""),C=Object(d.a)(S,2),L=C[0],E=C[1],q=Object(l.useState)(""),A=Object(d.a)(q,2),P=A[0],Z=A[1],F=Object(l.useState)(""),R=Object(d.a)(F,2),B=R[0],V=R[1],G=c.id,I=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r="https://test-task.expane.pro/api/graphql",a=function(){var e=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.request)(r,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(N.a)(e,a,n)}("getClients",y,{poolInterval:500,onSuccess:function(e){var t=e.getClients;f(t)}}),T=(I.data,I.refetch),D=k(U,{id:G,firstName:g,lastName:L,phone:P,avatarUrl:B},{onSuccess:function(){T()}}).mutate;return Object(u.jsxs)("div",{className:"md:container md:mx-auto relative",children:[Object(u.jsx)("h1",{className:"text-4xl text-center p-10",children:"Customer's list"}),Object(u.jsxs)("div",{className:"bg-gray-800 p-5 border-0 rounded-lg",children:[Object(u.jsx)(j,{editRow:function(e){r(!0),i({id:e.id,firstName:e.firstName,lastName:e.lastName,phone:e.phone,avatarUrl:e.avatarUrl})},clients:m}),n?Object(u.jsx)("div",{children:Object(u.jsx)(z,{editing:n,setEditing:r,currentClient:c,updateClient:function(e){r(!1);var t=e.firstName,n=e.lastName,a=e.phone,s=e.avatarUrl;w(t),E(n),Z(String(a)),V(String(s)),D(e)}})}):Object(u.jsx)("div",{children:Object(u.jsx)($,{setEditing:r,refetch:T})})]})]})},E=n(50),q=n(20),A=new E.a;o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(q.a,{client:A,children:Object(u.jsx)(L,{})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.5e4f20a1.chunk.js.map