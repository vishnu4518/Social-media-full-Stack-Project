(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,s,t){},101:function(e,s,t){},121:function(e,s,t){},122:function(e,s,t){},123:function(e,s,t){},124:function(e,s,t){},125:function(e,s,t){},126:function(e,s,t){},127:function(e,s,t){},128:function(e,s,t){},129:function(e,s,t){},130:function(e,s,t){},131:function(e,s,t){},132:function(e,s,t){},137:function(e,s,t){"use strict";t.r(s);var a=t(1),c=t.n(a),r=t(75),n=t.n(r),i=(t(88),t(159)),l=t(160),o=t(161),j=t(162),d=t(27);var b=(e,s)=>{switch(s.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":return{user:s.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:!0};case"FOLLOW":return{...e,user:{...e.user,followings:[...e.user.followings,s.payload]}};case"UNFOLLOW":return{...e,user:{...e.user,followings:e.user.followings.filter((e=>e!==s.payload))}};default:return e}},m=t(0);const h={user:JSON.parse(localStorage.getItem("user"))||null,isFetching:!1,error:!1},u=Object(a.createContext)(h),O=e=>{let{children:s}=e;const[t,c]=Object(a.useReducer)(b,h);return Object(a.useEffect)((()=>{localStorage.setItem("user",JSON.stringify(t.user))}),[t.user]),Object(m.jsx)(u.Provider,{value:{user:t.user,isFetching:t.isFetching,error:t.error,dispatch:c},children:s})};function p(){const{user:e}=Object(a.useContext)(u),s="http://localhost:3000/assets/";return Object(m.jsxs)("div",{className:"topbarContainer",children:[Object(m.jsx)("div",{className:"topbarLeft",children:Object(m.jsx)(d.b,{to:"/",style:{textDecoration:"none"},children:Object(m.jsx)("span",{className:"logo",children:"OneWorld"})})}),Object(m.jsx)("div",{className:"topbarCenter",children:Object(m.jsxs)("div",{className:"searchbar",children:[Object(m.jsx)(i.a,{className:"searchIcon"}),Object(m.jsx)("input",{placeholder:"Search for friend, post or video",className:"searchInput"})]})}),Object(m.jsxs)("div",{className:"topbarRight",children:[Object(m.jsxs)("div",{className:"topbarLinks",children:[Object(m.jsx)("span",{className:"topbarLink",children:"Homepage"}),Object(m.jsx)("span",{className:"topbarLink",children:"Timeline"})]}),Object(m.jsxs)("div",{className:"topbarIcons",children:[Object(m.jsxs)("div",{className:"topbarIconItem",children:[Object(m.jsx)(l.a,{}),Object(m.jsx)("span",{className:"topbarIconBadge",children:"1"})]}),Object(m.jsxs)("div",{className:"topbarIconItem",children:[Object(m.jsx)(o.a,{}),Object(m.jsx)("span",{className:"topbarIconBadge",children:"2"})]}),Object(m.jsxs)("div",{className:"topbarIconItem",children:[Object(m.jsx)(j.a,{}),Object(m.jsx)("span",{className:"topbarIconBadge",children:"1"})]})]}),Object(m.jsx)(d.b,{to:"/profile/".concat(e.username),children:Object(m.jsx)("img",{src:e.profilePicture?s+e.profilePicture:s+"person/noAvatar.png",alt:"",className:"topbarImg"})})]})]})}t(99);var x=t(163),g=t(164),N=t(165),f=t(166),v=t(167),I=t(168),y=t(169),w=t(170);const L=[{id:1,profilePicture:"person/1.jpeg",username:"Safak Kocaoglu"},{id:2,profilePicture:"person/2.jpeg",username:"Janell Shrum"},{id:3,profilePicture:"person/3.jpeg",username:"Alex Durden"},{id:4,profilePicture:"person/4.jpeg",username:"Dora Hawks"},{id:5,profilePicture:"person/5.jpeg",username:"Thomas Holden"},{id:6,profilePicture:"person/6.jpeg",username:"Shirley Beauchamp"},{id:7,profilePicture:"person/7.jpeg",username:"Travis Bennett"},{id:8,profilePicture:"person/8.jpeg",username:"Kristen Thomas"},{id:9,profilePicture:"person/9.jpeg",username:"Gary Duty"},{id:10,profilePicture:"person/10.jpeg",username:"Safak Kocaoglu"}];t(100);function C(e){let{user:s}=e;return Object(m.jsxs)("li",{className:"sidebarFriend",children:[Object(m.jsx)("img",{className:"sidebarFriendImg",src:"http://localhost:3000/assets/"+s.profilePicture,alt:""}),Object(m.jsx)("span",{className:"sidebarFriendName",children:s.username})]})}function S(){return Object(m.jsx)("div",{className:"sidebar",children:Object(m.jsxs)("div",{className:"sidebarWrapper",children:[Object(m.jsxs)("ul",{className:"sidebarList",children:[Object(m.jsxs)("li",{className:"sidebarListItem",children:[Object(m.jsx)(x.a,{className:"sidebarIcon"}),Object(m.jsx)("span",{className:"sidebarListItemText",children:"Feed"})]}),Object(m.jsxs)("li",{className:"sidebarListItem",children:[Object(m.jsx)(o.a,{className:"sidebarIcon"}),Object(m.jsx)("span",{className:"sidebarListItemText",children:"Chats"})]}),Object(m.jsxs)("li",{className:"sidebarListItem",children:[Object(m.jsx)(g.a,{className:"sidebarIcon"}),Object(m.jsx)("span",{className:"sidebarListItemText",children:"Videos"})]}),Object(m.jsxs)("li",{className:"sidebarListItem",children:[Object(m.jsx)(N.a,{className:"sidebarIcon"}),Object(m.jsx)("span",{className:"sidebarListItemText",children:"Groups"})]}),Object(m.jsxs)("li",{className:"sidebarListItem",children:[Object(m.jsx)(f.a,{className:"sidebarIcon"}),Object(m.jsx)("span",{className:"sidebarListItemText",children:"Bookmarks"})]}),Object(m.jsxs)("li",{className:"sidebarListItem",children:[Object(m.jsx)(v.a,{className:"sidebarIcon"}),Object(m.jsx)("span",{className:"sidebarListItemText",children:"Questions"})]}),Object(m.jsxs)("li",{className:"sidebarListItem",children:[Object(m.jsx)(I.a,{className:"sidebarIcon"}),Object(m.jsx)("span",{className:"sidebarListItemText",children:"Jobs"})]}),Object(m.jsxs)("li",{className:"sidebarListItem",children:[Object(m.jsx)(y.a,{className:"sidebarIcon"}),Object(m.jsx)("span",{className:"sidebarListItemText",children:"Events"})]}),Object(m.jsxs)("li",{className:"sidebarListItem",children:[Object(m.jsx)(w.a,{className:"sidebarIcon"}),Object(m.jsx)("span",{className:"sidebarListItemText",children:"Courses"})]})]}),Object(m.jsx)("button",{className:"sidebarButton",children:"Show More"}),Object(m.jsx)("hr",{className:"sidebarHr"}),Object(m.jsx)("ul",{className:"sidebarFriendList",children:L.map((e=>Object(m.jsx)(C,{user:e},e.id)))})]})})}t(101);var F=t(171),P=t(5),T=t.n(P),_=t(49);function B(e){let{post:s}=e;const[t,c]=Object(a.useState)(s.likes.length),[r,n]=Object(a.useState)(!1),[i,l]=Object(a.useState)({}),o="http://localhost:3000/assets/",{user:j}=Object(a.useContext)(u);Object(a.useEffect)((()=>{n(s.likes.includes(j._id))}),[j._id,s.likes]),Object(a.useEffect)((()=>{(async()=>{const e=await T.a.get("/users?userId=".concat(s.userId));l(e.data)})()}),[s.userId]);const b=()=>{try{T.a.put("/posts/"+s._id+"/like",{userId:j._id})}catch(e){}c(r?t-1:t+1),n(!r)};return Object(m.jsx)("div",{className:"post",children:Object(m.jsxs)("div",{className:"postWrapper",children:[Object(m.jsxs)("div",{className:"postTop",children:[Object(m.jsxs)("div",{className:"postTopLeft",children:[Object(m.jsx)(d.b,{to:"/profile/".concat(i.username),children:Object(m.jsx)("img",{className:"postProfileImg",src:i.profilePicture?o+i.profilePicture:o+"person/noAvatar.png",alt:""})}),Object(m.jsx)("span",{className:"postUsername",children:i.username}),Object(m.jsx)("span",{className:"postDate",children:Object(_.a)(s.createdAt)})]}),Object(m.jsx)("div",{className:"postTopRight",children:Object(m.jsx)(F.a,{})})]}),Object(m.jsxs)("div",{className:"postCenter",children:[Object(m.jsx)("span",{className:"postText",children:null===s||void 0===s?void 0:s.desc}),Object(m.jsx)("img",{className:"postImg",src:o+s.img,alt:""})]}),Object(m.jsxs)("div",{className:"postBottom",children:[Object(m.jsxs)("div",{className:"postBottomLeft",children:[Object(m.jsx)("img",{className:"likeIcon",src:"".concat(o,"like.png"),onClick:b,alt:""}),Object(m.jsx)("img",{className:"likeIcon",src:"".concat(o,"heart.png"),onClick:b,alt:""}),Object(m.jsxs)("span",{className:"postLikeCounter",children:[t," people like it"]})]}),Object(m.jsx)("div",{className:"postBottomRight",children:Object(m.jsxs)("span",{className:"postCommentText",children:[s.comment," comments"]})})]})]})})}t(121);var k=t(172),R=t(173),E=t(174),U=t(175),A=t(176);function D(){const{user:e}=Object(a.useContext)(u),s="http://localhost:3000/assets/",t=Object(a.useRef)(),[c,r]=Object(a.useState)(null);return Object(m.jsx)("div",{className:"share",children:Object(m.jsxs)("div",{className:"shareWrapper",children:[Object(m.jsxs)("div",{className:"shareTop",children:[Object(m.jsx)("img",{className:"shareProfileImg",src:e.profilePicture?s+e.profilePicture:s+"person/noAvatar.png",alt:""}),Object(m.jsx)("input",{placeholder:"What's in your mind "+e.username+"?",className:"shareInput",ref:t})]}),Object(m.jsx)("hr",{className:"shareHr"}),c&&Object(m.jsxs)("div",{className:"shareImgContainer",children:[Object(m.jsx)("img",{className:"shareImg",src:URL.createObjectURL(c),alt:""}),Object(m.jsx)(k.a,{className:"shareCancelImg",onClick:()=>r(null)})]}),Object(m.jsxs)("form",{className:"shareBottom",onSubmit:async s=>{s.preventDefault();const a={userId:e._id,desc:t.current.value};if(c){const e=new FormData,s=Date.now()+c.name;e.append("name",s),e.append("file",c),a.img=s,console.log(a);try{await T.a.post("/upload",e)}catch(r){}}try{await T.a.post("/posts",a),window.location.reload()}catch(r){}},children:[Object(m.jsxs)("div",{className:"shareOptions",children:[Object(m.jsxs)("label",{htmlFor:"file",className:"shareOption",children:[Object(m.jsx)(R.a,{htmlColor:"tomato",className:"shareIcon"}),Object(m.jsx)("span",{className:"shareOptionText",children:"Photo or Video"}),Object(m.jsx)("input",{style:{display:"none"},type:"file",id:"file",accept:".png,.jpeg,.jpg",onChange:e=>r(e.target.files[0])})]}),Object(m.jsxs)("div",{className:"shareOption",children:[Object(m.jsx)(E.a,{htmlColor:"blue",className:"shareIcon"}),Object(m.jsx)("span",{className:"shareOptionText",children:"Tag"})]}),Object(m.jsxs)("div",{className:"shareOption",children:[Object(m.jsx)(U.a,{htmlColor:"green",className:"shareIcon"}),Object(m.jsx)("span",{className:"shareOptionText",children:"Location"})]}),Object(m.jsxs)("div",{className:"shareOption",children:[Object(m.jsx)(A.a,{htmlColor:"goldenrod",className:"shareIcon"}),Object(m.jsx)("span",{className:"shareOptionText",children:"Feelings"})]})]}),Object(m.jsx)("button",{className:"shareButton",type:"submit",children:"Share"})]})]})})}t(122);function W(e){let{username:s}=e;const[t,c]=Object(a.useState)([]),{user:r}=Object(a.useContext)(u);return Object(a.useEffect)((()=>{(async()=>{const e=s?await T.a.get("/posts/profile/"+s):await T.a.get("posts/timeline/"+r._id);c(e.data.sort(((e,s)=>new Date(s.createdAt)-new Date(e.createdAt))))})()}),[s,r._id]),Object(m.jsx)("div",{className:"feed",children:Object(m.jsxs)("div",{className:"feedWrapper",children:[(!s||s===r.username)&&Object(m.jsx)(D,{}),t.map((e=>Object(m.jsx)(B,{post:e},e._id)))]})})}t(123),t(124);function M(e){let{user:s}=e;return Object(m.jsxs)("li",{className:"rightbarFriend",children:[Object(m.jsxs)("div",{className:"rightbarProfileImgContainer",children:[Object(m.jsx)("img",{className:"rightbarProfileImg",src:"http://localhost:3000/assets/"+s.profilePicture,alt:""}),Object(m.jsx)("span",{className:"rightbarOnline"})]}),Object(m.jsx)("span",{className:"rightbarUsername",children:s.username})]})}var G=t(177),V=t(178);function q(e){let{user:s}=e;const t="http://localhost:3000/assets/",[c,r]=Object(a.useState)([]),{user:n,dispatch:i}=Object(a.useContext)(u),[l,o]=Object(a.useState)(n.followings.includes(null===s||void 0===s?void 0:s.id));Object(a.useEffect)((()=>{(async()=>{try{const e=await T.a.get("/users/friends/"+s._id);r(e.data)}catch(e){console.log(e)}})()}),[s]);const j=async()=>{try{l?(await T.a.put("/users/".concat(s._id,"/unfollow"),{userId:n._id}),i({type:"UNFOLLOW",payload:s._id})):(await T.a.put("/users/".concat(s._id,"/follow"),{userId:n._id}),i({type:"FOLLOW",payload:s._id})),o(!l)}catch(e){}},b=()=>Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"birthdayContainer",children:[Object(m.jsx)("img",{className:"birthdayImg",src:"assets/gift.png",alt:""}),Object(m.jsxs)("span",{className:"birthdayText",children:[Object(m.jsx)("b",{children:"Pola Foster"})," and ",Object(m.jsx)("b",{children:"3 other friends"})," have a birhday today."]})]}),Object(m.jsx)("img",{className:"rightbarAd",src:"assets/ad.png",alt:""}),Object(m.jsx)("h4",{className:"rightbarTitle",children:"Online Friends"}),Object(m.jsx)("ul",{className:"rightbarFriendList",children:L.map((e=>Object(m.jsx)(M,{user:e},e.id)))})]}),h=()=>Object(m.jsxs)(m.Fragment,{children:[s.username!==n.username&&Object(m.jsxs)("button",{className:"rightbarFollowButton",onClick:j,children:[l?"Unfollow":"Follow",l?Object(m.jsx)(G.a,{}):Object(m.jsx)(V.a,{})]}),Object(m.jsx)("h4",{className:"rightbarTitle",children:"User information"}),Object(m.jsxs)("div",{className:"rightbarInfo",children:[Object(m.jsxs)("div",{className:"rightbarInfoItem",children:[Object(m.jsx)("span",{className:"rightbarInfoKey",children:"City:"}),Object(m.jsx)("span",{className:"rightbarInfoValue",children:s.city})]}),Object(m.jsxs)("div",{className:"rightbarInfoItem",children:[Object(m.jsx)("span",{className:"rightbarInfoKey",children:"From:"}),Object(m.jsx)("span",{className:"rightbarInfoValue",children:s.from})]}),Object(m.jsxs)("div",{className:"rightbarInfoItem",children:[Object(m.jsx)("span",{className:"rightbarInfoKey",children:"Relationship:"}),Object(m.jsx)("span",{className:"rightbarInfoValue",children:1===s.relationship?"Single":1===s.relationship?"Married":"-"})]})]}),Object(m.jsx)("h4",{className:"rightbarTitle",children:"User friends"}),Object(m.jsx)("div",{className:"rightbarFollowings",children:c.map((e=>Object(m.jsx)(d.b,{to:"/profile/"+e.username,style:{textDecoration:"none"},children:Object(m.jsxs)("div",{className:"rightbarFollowing",children:[Object(m.jsx)("img",{src:e.profilePicture?t+e.profilePicture:t+"person/noAvatar.png",alt:"",className:"rightbarFollowingImg"}),Object(m.jsx)("span",{className:"rightbarFollowingName",children:e.username})]})})))})]});return Object(m.jsx)("div",{className:"rightbar",children:Object(m.jsx)("div",{className:"rightbarWrapper",children:s?Object(m.jsx)(h,{}):Object(m.jsx)(b,{})})})}t(125);function J(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p,{}),Object(m.jsxs)("div",{className:"homeContainer",children:[Object(m.jsx)(S,{}),Object(m.jsx)(W,{}),Object(m.jsx)(q,{})]})]})}t(126);const K=async(e,s)=>{s({type:"LOGIN_START"});try{s({type:"LOGIN_SUCCESS",payload:(await T.a.post("/auth/login",e)).data})}catch(t){s({type:"LOGIN_FAILURE",payload:t})}};var H=t(179);function z(){const e=Object(a.useRef)(),s=Object(a.useRef)(),{isFetching:t,dispatch:c}=Object(a.useContext)(u);return Object(m.jsx)("div",{className:"login",children:Object(m.jsxs)("div",{className:"loginWrapper",children:[Object(m.jsxs)("div",{className:"loginLeft",children:[Object(m.jsx)("h3",{className:"loginLogo",children:"Lamasocial"}),Object(m.jsx)("span",{className:"loginDesc",children:"Connect with friends and the world around you on Lamasocial."})]}),Object(m.jsx)("div",{className:"loginRight",children:Object(m.jsxs)("form",{className:"loginBox",onSubmit:t=>{t.preventDefault(),K({email:e.current.value,password:s.current.value},c)},children:[Object(m.jsx)("input",{placeholder:"Email",type:"email",required:!0,className:"loginInput",ref:e}),Object(m.jsx)("input",{placeholder:"Password",type:"password",required:!0,minLength:"6",className:"loginInput",ref:s}),Object(m.jsx)("button",{className:"loginButton",type:"submit",disabled:t,children:t?Object(m.jsx)(H.a,{color:"white",size:"20px"}):"Log In"}),Object(m.jsx)("span",{className:"loginForgot",children:"Forgot Password?"}),Object(m.jsx)("button",{className:"loginRegisterButton",children:t?Object(m.jsx)(H.a,{color:"white",size:"20px"}):"Create a New Account"})]})})]})})}t(127);var Q=t(7);function X(){const e="http://localhost:3000/assets/",[s,t]=Object(a.useState)({}),c=Object(Q.h)().username;return Object(a.useEffect)((()=>{(async()=>{const e=await T.a.get("/users?username=".concat(c));t(e.data)})()}),[c]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p,{}),Object(m.jsxs)("div",{className:"profile",children:[Object(m.jsx)(S,{}),Object(m.jsxs)("div",{className:"profileRight",children:[Object(m.jsxs)("div",{className:"profileRightTop",children:[Object(m.jsxs)("div",{className:"profileCover",children:[Object(m.jsx)("img",{className:"profileCoverImg",src:s.coverPicture?e+s.coverPicture:e+"person/noCover.png",alt:""}),Object(m.jsx)("img",{className:"profileUserImg",src:s.profilePicture?e+s.profilePicture:e+"person/noAvatar.png",alt:""})]}),Object(m.jsxs)("div",{className:"profileInfo",children:[Object(m.jsx)("h4",{className:"profileInfoName",children:s.username}),Object(m.jsx)("span",{className:"profileInfoDesc",children:s.desc})]})]}),Object(m.jsxs)("div",{className:"profileRightBottom",children:[Object(m.jsx)(W,{username:c}),Object(m.jsx)(q,{user:s})]})]})]})]})}t(128);function Y(){const e=Object(a.useRef)(),s=Object(a.useRef)(),t=Object(a.useRef)(),c=Object(a.useRef)(),r=Object(Q.g)();return Object(m.jsx)("div",{className:"login",children:Object(m.jsxs)("div",{className:"loginWrapper",children:[Object(m.jsxs)("div",{className:"loginLeft",children:[Object(m.jsx)("h3",{className:"loginLogo",children:"OneWorld"}),Object(m.jsx)("span",{className:"loginDesc",children:"Connect with friends and the world around you on OneWorld."})]}),Object(m.jsx)("div",{className:"loginRight",children:Object(m.jsxs)("form",{className:"loginBox",onSubmit:async a=>{if(a.preventDefault(),c.current.value!==t.current.value)c.current.setCustomValidity("Passwords don't match!");else{c.current.setCustomValidity("");const a={username:e.current.value,email:s.current.value,password:t.current.value};try{await T.a.post("http://localhost:8800/api/auth/register",a),r.push("/login")}catch(n){console.log(n)}}},children:[Object(m.jsx)("input",{placeholder:"Username",required:!0,ref:e,className:"loginInput"}),Object(m.jsx)("input",{placeholder:"Email",required:!0,ref:s,className:"loginInput",type:"email"}),Object(m.jsx)("input",{placeholder:"Password",required:!0,ref:t,className:"loginInput",type:"password",minLength:"6"}),Object(m.jsx)("input",{placeholder:"Password Again",required:!0,ref:c,className:"loginInput",type:"password"}),Object(m.jsx)("button",{className:"loginButton",type:"submit",children:"Sign Up"}),Object(m.jsx)("button",{className:"loginRegisterButton",onClick:()=>{r.push("/login")},children:"Log into Account"})]})})]})})}t(129),t(130);function Z(e){let{conversation:s,currentUser:t}=e;const[c,r]=Object(a.useState)(null),n="http://localhost:3000/assets/";return Object(a.useEffect)((()=>{const e=s.members.find((e=>e!==t._id));(async()=>{try{const s=await T()("/users?userId="+e);r(s.data)}catch(s){console.log(s)}})()}),[t,s]),Object(m.jsxs)("div",{className:"conversation",children:[Object(m.jsx)("img",{className:"conversationImg",src:null!==c&&void 0!==c&&c.profilePicture?n+c.profilePicture:n+"person/noAvatar.png",alt:""}),Object(m.jsx)("span",{className:"conversationName",children:null===c||void 0===c?void 0:c.username})]})}t(131);function $(e){let{message:s,own:t}=e;return Object(m.jsxs)("div",{className:t?"message own":"message",children:[Object(m.jsxs)("div",{className:"messageTop",children:[Object(m.jsx)("img",{className:"messageImg",src:"https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",alt:""}),Object(m.jsx)("p",{className:"messageText",children:s.text})]}),Object(m.jsx)("div",{className:"messageBottom",children:Object(_.a)(s.createdAt)})]})}t(132);function ee(e){let{onlineUsers:s,currentId:t,setCurrentChat:c}=e;const[r,n]=Object(a.useState)([]),[i,l]=Object(a.useState)([]),o="http://localhost:3000/assets/";Object(a.useEffect)((()=>{(async()=>{const e=await T.a.get("/users/friends/"+t);n(e.data)})()}),[t]),Object(a.useEffect)((()=>{l(r.filter((e=>s.includes(e._id))))}),[r,s]);return Object(m.jsx)("div",{className:"chatOnline",children:i.map((e=>Object(m.jsxs)("div",{className:"chatOnlineFriend",onClick:()=>(async e=>{try{const s=await T.a.get("/conversations/find/".concat(t,"/").concat(e._id));c(s.data)}catch(s){console.log(s)}})(e),children:[Object(m.jsxs)("div",{className:"chatOnlineImgContainer",children:[Object(m.jsx)("img",{className:"chatOnlineImg",src:null!==e&&void 0!==e&&e.profilePicture?o+e.profilePicture:o+"person/noAvatar.png",alt:""}),Object(m.jsx)("div",{className:"chatOnlineBadge"})]}),Object(m.jsx)("span",{className:"chatOnlineName",children:null===e||void 0===e?void 0:e.username})]})))})}var se=t(82);function te(){const[e,s]=Object(a.useState)([]),[t,c]=Object(a.useState)(null),[r,n]=Object(a.useState)([]),[i,l]=Object(a.useState)(""),[o,j]=Object(a.useState)(null),[d,b]=Object(a.useState)([]),h=Object(a.useRef)(),{user:O}=Object(a.useContext)(u),x=Object(a.useRef)();Object(a.useEffect)((()=>{h.current=Object(se.a)("ws://localhost:8900"),h.current.on("getMessage",(e=>{j({sender:e.senderId,text:e.text,createdAt:Date.now()})}))}),[]),Object(a.useEffect)((()=>{o&&(null===t||void 0===t?void 0:t.members.includes(o.sender))&&n((e=>[...e,o]))}),[o,t]),Object(a.useEffect)((()=>{h.current.emit("addUser",O._id),h.current.on("getUsers",(e=>{b(O.followings.filter((s=>e.some((e=>e.userId===s)))))}))}),[O]),Object(a.useEffect)((()=>{(async()=>{try{const e=await T.a.get("/conversations/"+O._id);s(e.data)}catch(e){console.log(e)}})()}),[O._id]),Object(a.useEffect)((()=>{(async()=>{try{const e=await T.a.get("/messages/"+(null===t||void 0===t?void 0:t._id));n(e.data)}catch(e){console.log(e)}})()}),[t]);return Object(a.useEffect)((()=>{var e;null===(e=x.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[r]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p,{}),Object(m.jsxs)("div",{className:"messenger",children:[Object(m.jsx)("div",{className:"chatMenu",children:Object(m.jsxs)("div",{className:"chatMenuWrapper",children:[Object(m.jsx)("input",{placeholder:"Search for friends",className:"chatMenuInput"}),e.map((e=>Object(m.jsx)("div",{onClick:()=>c(e),children:Object(m.jsx)(Z,{conversation:e,currentUser:O})})))]})}),Object(m.jsx)("div",{className:"chatBox",children:Object(m.jsx)("div",{className:"chatBoxWrapper",children:t?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"chatBoxTop",children:r.map((e=>Object(m.jsx)("div",{ref:x,children:Object(m.jsx)($,{message:e,own:e.sender===O._id})})))}),Object(m.jsxs)("div",{className:"chatBoxBottom",children:[Object(m.jsx)("textarea",{className:"chatMessageInput",placeholder:"write something...",onChange:e=>l(e.target.value),value:i}),Object(m.jsx)("button",{className:"chatSubmitButton",onClick:async e=>{e.preventDefault();const s={sender:O._id,text:i,conversationId:t._id},a=t.members.find((e=>e!==O._id));h.current.emit("sendMessage",{senderId:O._id,receiverId:a,text:i});try{const e=await T.a.post("/messages",s);n([...r,e.data]),l("")}catch(c){console.log(c)}},children:"Send"})]})]}):Object(m.jsx)("span",{className:"noConversationText",children:"Open a conversation to start a chat."})})}),Object(m.jsx)("div",{className:"chatOnline",children:Object(m.jsx)("div",{className:"chatOnlineWrapper",children:Object(m.jsx)(ee,{onlineUsers:d,currentId:O._id,setCurrentChat:c})})})]})]})}var ae=function(){const{user:e}=Object(a.useContext)(u);return Object(m.jsx)(d.a,{children:Object(m.jsxs)(Q.d,{children:[Object(m.jsx)(Q.b,{exact:!0,path:"/",children:e?Object(m.jsx)(J,{}):Object(m.jsx)(Y,{})}),Object(m.jsx)(Q.b,{path:"/login",children:e?Object(m.jsx)(Q.a,{to:"/"}):Object(m.jsx)(z,{})}),Object(m.jsx)(Q.b,{path:"/register",children:e?Object(m.jsx)(Q.a,{to:"/"}):Object(m.jsx)(Y,{})}),Object(m.jsx)(Q.b,{path:"/messenger",children:e?Object(m.jsx)(te,{}):Object(m.jsx)(Q.a,{to:"/"})}),Object(m.jsx)(Q.b,{path:"/profile/:username",children:Object(m.jsx)(X,{})})]})})};n.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(O,{children:Object(m.jsx)(ae,{})})}),document.getElementById("root"))},88:function(e,s,t){},99:function(e,s,t){}},[[137,1,2]]]);
//# sourceMappingURL=main.f13631cb.chunk.js.map