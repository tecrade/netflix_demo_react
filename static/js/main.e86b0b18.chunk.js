(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(49)},33:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(23),c=a.n(l),o=(a(33),a(4)),i=a(51),m=Object(n.createContext)(""),s=(a(35),a(10)),u=[{name:"Home",path:"/"},{name:"Trending",path:"/trending"},{name:"Action",path:"/action"},{name:"Comedy",path:"/comedy"},{name:"Romance",path:"/romance"},{name:"Horror",path:"/horror"},{name:"Documentary",path:"/documentary"}];var d=function(){return r.a.createElement("div",{className:"genresMenu"},r.a.createElement("ul",null,u.map(function(e,t){return console.log(e.path),r.a.createElement("li",{key:t},r.a.createElement(s.b,{className:"genresMenuNavbar",to:e.path},e.name))})))};a(37);var p=function(){var e=Object(n.useContext)(m),t=e.setAvatar,a=e.searchList,l=e.avatar,c=e.apikey,o=e.setBanner,u=e.setSearchList;return r.a.createElement("header",{className:"navbar"},r.a.createElement("img",{className:"logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png",alt:"Netflix"}),r.a.createElement(s.b,{className:"nav_btn",to:"/mylist"},"My List "),r.a.createElement(s.b,{className:"nav_btn home",to:"/"},r.a.createElement("i",{className:"fa fa-home"})," "),r.a.createElement("div",{className:"searchbar"},r.a.createElement("div",null,r.a.createElement("input",{className:"search",type:"search",placeholder:" search for movies",onChange:function(e){i.a.get("https://api.themoviedb.org/3/search/movie?query=".concat(e.target.value,"&api_key=").concat(c,"&page=1")).then(function(t){u(t.data.results),console.log(a,e.target.value)})}}),r.a.createElement("i",{className:"material-icons"},"search")),r.a.createElement("div",{className:"searchList"},a&&a.map(function(e,t){return r.a.createElement("div",{className:"searchitem",key:t,onClick:function(){o(e)}},e.title)}))),r.a.createElement("div",{className:"avatarContainer",onClick:function(){t(!l)}},r.a.createElement("img",{className:"avatar",src:"https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png",alt:"Avatar"})),l&&r.a.createElement(d,null))},v=a(0);a(43);function g(e,t,a){var n=new Date;n.setTime(n.getTime()+24*a*60*60*1e3);var r=n.toUTCString();t=JSON.stringify(t),document.cookie=e+"="+t+";expires="+r+";path=/;"}function h(){var e,t=document.cookie,a="";if(t){for(var n=6;n<=t.length;n++)if("="===t[n]){e=n;break}for(var r=e+1;r<t.length;r++)a+=t[r];return JSON.parse(a)}}var E=Math.floor(21*Math.random()),f=0,b=[];var y=function(){var e=Object(n.useContext)(m),t=e.banner,a=e.setBanner,l=e.setVideo,c=e.trendingurl,o=e.baseurl,s=e.apikey,u=e.imageurl,d=e.mylist,p=e.setMylist;return Object(n.useEffect)(function(){i.a.get(c).then(function(e){a(e.data.results[E]),console.log(e.data.results[E])})},[]),r.a.createElement("div",{className:"banner",style:{backgroundImage:"url(".concat(t?t.backdrop_path?u+t.backdrop_path:u+t.poster_path:"",")")}},r.a.createElement("div",{className:"banner_content"},r.a.createElement("div",{className:"nseries"},r.a.createElement("div",null,r.a.createElement("img",{className:"logo_n",src:"https://loodibee.com/wp-content/uploads/Netflix-N-Symbol-logo.png",alt:"N"})),r.a.createElement("div",{className:"nseries_series"},"SERIES")),r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,t?t.name?t.name:t.title:"")),r.a.createElement("div",{className:"banner_button"},r.a.createElement("button",{onClick:function(){i.a.get(o+"/movie/".concat(t.id,"/videos?api_key=").concat(s,"&language=en-US")).then(function(e){0!==e.data.results.length&&0===f?(l(e.data.results[0]),f=1,console.log("play clicked")):1===f?(l(null),f=0):console.log("array empty")})}},r.a.createElement("i",{className:"fa fa-play"}),"\xa0 Play"),r.a.createElement("button",{onClick:function(){d?(function(e){var t,a=document.cookie,n="",r=[];if(a){for(var l=6;l<a.length;l++)if("="===a[l]){t=l;break}for(var c=t+1;c<a.length;c++)n+=a[c];(r=JSON.parse(n)).map(function(t,a){t.id===e.id&&(console.log(t,e),r.splice(a,1))}),g("myList",r,30)}}(t),p(!1),console.log(h())):(document.cookie?function(e){var t,a,n=document.cookie,r="";if(console.log(n),n){for(var l=6;l<n.length;l++)if("="===n[l]){t=l;break}for(var c=t+1;c<n.length;c++)r+=n[c];(a=JSON.parse(r)).push(e),g("myList",a,30),console.log(document.cookie)}}(t):(b.push(t),g("myList",b,30)),p(!0))}},r.a.createElement("i",{className:d?"fa fa-minus":"fa fa-plus"}),"\xa0 ",d?"Remove List":"My List")),r.a.createElement("div",{className:"banner_rating"},r.a.createElement("i",{className:"fas fa-star"}),"\xa0",t.vote_average?t.vote_average:""),r.a.createElement("div",{className:"banner_discription"},r.a.createElement("h3",null,"Overview"),r.a.createElement("p",null,t?t.overview:""))),r.a.createElement("div",{className:"gradient"}),t?function(){if(document.cookie){for(var e=h(),a=0;a<e.length;a++){if(e[a].id===t.id){p(!0);break}p(!1)}console.log(d)}}():p(!1))};a(45);var N=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),l=a[0],c=a[1],s=Object(n.useContext)(m),u=s.setBanner,d=s.imageurl;return Object(n.useEffect)(function(){e.url?i.a.get(e.url).then(function(e){c(e?e.data.results:"")}):c(e.list)},[]),r.a.createElement("div",{className:"rowposter"},r.a.createElement("h3",{className:"typehead"},e.title),r.a.createElement("div",{className:"container"},l.map(function(e,t){return r.a.createElement("img",{key:t,className:"poster",src:d+e.poster_path,alt:"POSTER",onClick:function(){u(e),console.log("poster clicked"),console.log(e)}})})))};var k=function(){var e=Object(n.useContext)(m).comedyurl;return r.a.createElement("div",null,r.a.createElement(N,{url:e+"&page=1",title:"Comedy"}),r.a.createElement(N,{url:e+"&page=2",title:""}),r.a.createElement(N,{url:e+"&page=3",title:""}))};var w=function(){var e=Object(n.useContext)(m).horrorurl;return r.a.createElement("div",null,r.a.createElement(N,{url:e+"&page=1",title:"Horror"}),r.a.createElement(N,{url:e+"&page=2",title:""}),r.a.createElement(N,{url:e+"&page=3",title:""}))};var _=function(){var e=Object(n.useContext)(m).trendingurl;return r.a.createElement("div",null,r.a.createElement(N,{url:e+"&page=1",title:"Trending"}),r.a.createElement(N,{url:e+"&page=2",title:""}),r.a.createElement(N,{url:e+"&page=3",title:""}))};var O=function(){var e=Object(n.useContext)(m).actionurl;return r.a.createElement("div",null,r.a.createElement(N,{url:e+"&page=1",title:"Action"}),r.a.createElement(N,{url:e+"&page=2",title:""}),r.a.createElement(N,{url:e+"&page=3",title:""}))};var j=function(){var e=Object(n.useContext)(m).romanceurl;return r.a.createElement("div",null,r.a.createElement(N,{url:e+"&page=1",title:"Romance"}),r.a.createElement(N,{url:e+"&page=2",title:""}),r.a.createElement(N,{url:e+"&page=3",title:""}))};var C=function(){var e=Object(n.useContext)(m),t=e.originalurl,a=e.trendingurl,l=e.actionurl,c=e.comedyurl,o=e.romanceurl,i=e.horrorurl,s=e.documentaryurl;return r.a.createElement("div",{className:"homepage"},r.a.createElement(N,{url:t,title:"Netflix Originals"}),r.a.createElement(N,{url:a,title:"Trending Now"}),r.a.createElement(N,{url:l,title:"Action"}),r.a.createElement(N,{url:c,title:"Comedy"}),r.a.createElement(N,{url:o,title:"Romance"}),r.a.createElement(N,{url:i,title:"Horror"}),r.a.createElement(N,{url:s,title:"Documentary"}))},x=(a(47),"https://api.themoviedb.org/3"),S="d03799692be1c26faf0ade18a4205f9f",L="https://image.tmdb.org/t/p/original",M="https://api.themoviedb.org/3/discover/tv?api_key=".concat(S,"&with_networks=213"),T="https://api.themoviedb.org/3/trending/all/week?api_key=".concat(S,"&language=ml-IN"),A="https://api.themoviedb.org/3/discover/movie?api_key=".concat(S,"&with_genres=28"),R="https://api.themoviedb.org/3/discover/movie?api_key=".concat(S,"&with_genres=10749"),B="https://api.themoviedb.org/3/discover/movie?api_key=".concat(S,"&with_genres=35"),J="https://api.themoviedb.org/3/discover/movie?api_key=".concat(S,"&with_genres=27"),D="https://api.themoviedb.org/3/discover/movie?api_key=".concat(S,"&with_genres=99");var I=function(e){var t={height:e.height,width:e.width,videoSrc:"https://www.youtube-nocookie.com/embed/"+e.video+"?autoplay=1&mute=1&controls=1&showinfo=0&loop=1&playlist="+e.video};return r.a.createElement("div",{className:"player"},r.a.createElement("iframe",{type:"text/html",src:t.videoSrc,height:t.height,width:t.width,frameborder:"0 "}))};var P=function(){var e=Object(n.useContext)(m).documentaryurl;return r.a.createElement("div",null,r.a.createElement(N,{url:e+"&page=1",title:"Documentary"}),r.a.createElement(N,{url:e+"&page=2",title:""}),r.a.createElement(N,{url:e+"&page=3",title:""}))};var F=function(){return console.log(h()),r.a.createElement("div",null,r.a.createElement(N,{list:h(),title:"My List"}),r.a.createElement("p",{className:"disclaimer",style:{color:"white",margin:"auto",fontWeight:"bold"}},"Your My List will lost if you not visit this site for more than 30 days"))};var H=function(){var e=Object(n.useState)({}),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(),i=Object(o.a)(c,2),u=i[0],d=i[1],g=Object(n.useState)(),h=Object(o.a)(g,2),E=h[0],f=h[1],b=Object(n.useState)(!1),N=Object(o.a)(b,2),H=N[0],U=N[1],V=Object(n.useState)(!1),q=Object(o.a)(V,2),W=q[0],Y=q[1];return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null,r.a.createElement(m.Provider,{value:{banner:a,avatar:H,mylist:W,setAvatar:U,video:u,searchList:E,setBanner:l,setVideo:d,setSearchList:f,setMylist:Y,originalurl:M,trendingurl:T,actionurl:A,comedyurl:B,romanceurl:R,documentaryurl:D,imageurl:L,horrorurl:J,apikey:S,baseurl:x}},r.a.createElement(p,null),r.a.createElement(y,null),u&&r.a.createElement(I,{video:u.key,height:"315px",width:"100%",autoplay:"1"}),r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/",exact:!0,element:r.a.createElement(C,null)}),r.a.createElement(v.a,{path:"/action",element:r.a.createElement(O,null)}),r.a.createElement(v.a,{path:"/comedy",element:r.a.createElement(k,null)}),r.a.createElement(v.a,{path:"/romance",element:r.a.createElement(j,null)}),r.a.createElement(v.a,{path:"/trending",element:r.a.createElement(_,null)}),r.a.createElement(v.a,{path:"/documentary",element:r.a.createElement(P,null)}),r.a.createElement(v.a,{path:"/horror",element:r.a.createElement(w,null)}),r.a.createElement(v.a,{path:"/mylist",element:r.a.createElement(F,null)})))))},U=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,50)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),l(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null))),U()}},[[24,3,2]]]);
//# sourceMappingURL=main.e86b0b18.chunk.js.map