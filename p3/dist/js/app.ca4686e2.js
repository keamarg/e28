(function(e){function t(t){for(var r,u,a=t[0],i=t[1],s=t[2],f=0,d=[];f<a.length;f++)u=a[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var a=n[u];0!==o[a]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},u={app:0},o={app:0},c=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-05c74d33":"fceed13d","chunk-2d0aa9e3":"9c591d57","chunk-59fefdcd":"ed7b1c6e","chunk-ea1ab1ea":"93ef919c","chunk-ecaf2836":"7a24f6ae","chunk-b077e3f4":"35a56ed6","chunk-c1106a6a":"da1d5417"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-05c74d33":1,"chunk-ea1ab1ea":1,"chunk-ecaf2836":1,"chunk-b077e3f4":1,"chunk-c1106a6a":1};u[e]?t.push(u[e]):0!==u[e]&&n[e]&&t.push(u[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-05c74d33":"e061b54b","chunk-2d0aa9e3":"31d6cfe0","chunk-59fefdcd":"31d6cfe0","chunk-ea1ab1ea":"f6491871","chunk-ecaf2836":"d21f8102","chunk-b077e3f4":"e0e0eff7","chunk-c1106a6a":"19e036df"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),a=0;a<c.length;a++){var s=c[a],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===o))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){s=d[a],f=s.getAttribute("data-href");if(f===r||f===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete u[e],l.parentNode.removeChild(l),n(c)},l.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){u[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=a(e);var d=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",d.name="ChunkLoadError",d.type=r,d.request=u,n[1](d)}o[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=f;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0091":function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return u}));var u=n("bc3a").create({baseURL:null!==(r="https://e28api.hesdev.com")&&void 0!==r?r:"http://e28api.hesdev.loc",responseType:"json",withCredentials:!0})},"24b4":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),u=n("9d64"),o=n.n(u),c=Object(r["h"])("img",{id:"logo",alt:"logo",src:o.a},null,-1);function a(e,t,n,u,o,a){var i=Object(r["x"])("router-link"),s=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["e"])("div",null,[c,Object(r["h"])("nav",null,[Object(r["h"])("ul",null,[Object(r["h"])("li",null,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(o.links,(function(e){return Object(r["q"])(),Object(r["e"])(i,{key:e,to:o.paths[e]},{default:Object(r["D"])((function(){return[Object(r["g"])(Object(r["z"])(e),1)]})),_:2},1032,["to"])})),128))])])]),Object(r["h"])(s,{questions:a.questions,quiz:o.quiz,onUpdateQuiz:a.updateQuiz,onUpdateQuestions:a.loadQuestions},null,8,["questions","quiz","onUpdateQuiz","onUpdateQuestions"])])}var i={name:"App",data:function(){return{quiz:"",images:[],links:["home","quiz","create","account"],paths:{home:"/",quiz:"/quiz",create:"/create",account:"/account"}}},computed:{questions:function(){return this.$store.state.questions}},mounted:function(){this.loadQuestions()},methods:{updateQuiz:function(e){this.quiz=e},loadQuestions:function(){this.$store.dispatch("fetchQuestions")}}};n("6069");i.render=a;var s=i,f=n("1da1"),d=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),l=n("ca8f"),h=[{path:"/",component:function(){return n.e("chunk-b077e3f4").then(n.bind(null,"391e"))}},{path:"/create",component:function(){return Promise.all([n.e("chunk-59fefdcd"),n.e("chunk-ecaf2836")]).then(n.bind(null,"24e2"))},meta:{requiresAuth:!0}},{path:"/questions/:id",component:function(){return n.e("chunk-05c74d33").then(n.bind(null,"b128"))},props:!0},{path:"/quiz",component:function(){return n.e("chunk-c1106a6a").then(n.bind(null,"8783"))}},{path:"/account",component:function(){return Promise.all([n.e("chunk-59fefdcd"),n.e("chunk-ea1ab1ea")]).then(n.bind(null,"8fdc"))}},{path:"/denied",component:function(){return n.e("chunk-2d0aa9e3").then(n.bind(null,"127c"))}}],p=Object(d["a"])({history:Object(d["b"])(),routes:h});p.beforeEach(function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t){var n,r,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.matched.some((function(e){return e.meta.requiresAuth})),r=function(e){return!(n&&!e)||"/denied"},null!==l["a"].state.user){e.next=10;break}return e.next=5,l["a"].dispatch("authUser");case 5:if(u=e.sent,null===u){e.next=8;break}return e.abrupt("return",r(l["a"].state.user));case 8:e.next=11;break;case 10:return e.abrupt("return",r(l["a"].state.user));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Object(r["d"])(s).use(p).use(l["a"]).mount("#app")},6069:function(e,t,n){"use strict";n("24b4")},"9d64":function(e,t,n){e.exports=n.p+"img/logo.fd85eecb.png"},ca8f:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("159b"),n("d3b7"),n("4de4");var r=n("5502"),u=n("0091"),o=!1,c=o?[Object(r["a"])({})]:[],a=Object(r["b"])({plugins:c,state:function(){return{questions:[],user:null,loginForm:!1,registerForm:!0}},mutations:{setUser:function(e,t){e.user=t},setLoginForm:function(e,t){e.loginForm=t},setRegisterForm:function(e,t){e.registerForm=t},setQuestions:function(e,t){t.forEach((function(e){e.answers=[[e.answer1],[e.answer2],[e.answer3],[e.answer4]],e.answers.forEach((function(t,n){n+1==e.correct&&(e.answers[n][1]="true")})),delete e.answer1,delete e.answer2,delete e.answer3,delete e.answer4,delete e.correct})),e.questions=t}},actions:{fetchQuestions:function(e){u["a"].get("question").then((function(t){e.commit("setQuestions",t.data.question)}))},authUser:function(e){return new Promise((function(t){u["a"].post("auth").then((function(n){n.data.authenticated?e.commit("setUser",n.data.user):e.commit("setUser",!1),t()}))}))}},getters:{getQuestionById:function(e){return function(t){return e.questions.filter((function(e){return e.id==t}),t)[0]}}}})}});
//# sourceMappingURL=app.ca4686e2.js.map