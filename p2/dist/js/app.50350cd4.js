(function(e){function t(t){for(var o,s,u=t[0],c=t[1],a=t[2],d=0,b=[];d<u.length;d++)s=u[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&b.push(i[s][0]),i[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(b.length)b.shift()();return r.push.apply(r,a||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,u=1;u<n.length;u++){var c=n[u];0!==i[c]&&(o=!1)}o&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},r=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var a=0;a<u.length;a++)t(u[a]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0de0":function(e,t,n){"use strict";n("e1ca")},"2a87":function(e,t,n){},"2f86":function(e,t,n){e.exports=n.p+"img/image-not-available.8713e5da.png"},"4e8f":function(e,t,n){"use strict";n("b31b")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),i=n("9d64"),r=n.n(i),s=Object(o["g"])("img",{id:"logo",alt:"logo",src:r.a},null,-1);function u(e,t,n,i,r,u){var c=Object(o["w"])("router-link"),a=Object(o["w"])("router-view");return Object(o["p"])(),Object(o["d"])("div",null,[s,Object(o["g"])("nav",null,[Object(o["g"])("ul",null,[Object(o["g"])("li",null,[(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(r.links,(function(e){return Object(o["p"])(),Object(o["d"])(c,{key:e,to:r.paths[e]},{default:Object(o["C"])((function(){return[Object(o["f"])(Object(o["y"])(e),1)]})),_:2},1032,["to"])})),128))])])]),Object(o["g"])(a,{questions:r.questions,quiz:r.quiz,onUpdateQuiz:u.updateQuiz,onUpdateQuestions:u.loadQuestions},null,8,["questions","quiz","onUpdateQuiz","onUpdateQuestions"])])}n("159b");var c,a=n("bc3a").create({baseURL:null!==(c=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL)&&void 0!==c?c:"http://e28api.hesdev.loc",responseType:"json"}),l={name:"App",data:function(){return{quiz:"",questions:[],images:[],links:["home","quiz","create"],paths:{home:"/",quiz:"/quiz",create:"/create"}}},mounted:function(){this.loadQuestions()},methods:{updateQuiz:function(e){this.quiz=e},loadQuestions:function(){var e=this;a.get("question").then((function(t){e.questions=t.data.question,e.remodelData()}))},remodelData:function(){console.log("remodelling data"),this.questions.forEach((function(e){e.answers=[[e.answer1],[e.answer2],[e.answer3],[e.answer4]],e.answers.forEach((function(t,n){n+1==e.correct&&(e.answers[n][1]="true")})),delete e.answer1,delete e.answer2,delete e.answer3,delete e.answer4,delete e.correct}))}}};n("6069");l.render=u;var d=l,b=n("6c02"),p={id:"home-page"},f=Object(o["g"])("h1",null,"Pick a quiz",-1),O=Object(o["g"])("p",null,[Object(o["f"])(" This is a platform for creating your own quizzes. "),Object(o["g"])("br"),Object(o["f"])("There is a premade quiz about wine, but create whatever you like! ")],-1),j={class:"clean-list"},h=Object(o["g"])("br",null,null,-1),q=Object(o["g"])("img",{alt:"logo",src:"https://source.unsplash.com/400x300/?quiz"},null,-1);function g(e,t,n,i,r,s){var u=Object(o["w"])("router-link");return Object(o["p"])(),Object(o["d"])("div",p,[f,O,Object(o["g"])("ul",j,[(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(s.categories,(function(t,n){return Object(o["p"])(),Object(o["d"])("div",{key:n},[Object(o["g"])(u,{to:"/quiz"},{default:Object(o["C"])((function(){return[Object(o["g"])("button",{class:["btn",t],onClick:function(n){return e.$emit("update-quiz",t)}},Object(o["y"])(t)+" quiz ",11,["onClick"])]})),_:2},1024),h,Object(o["g"])("button",{class:[t,"deleteBtn"],onClick:function(e){return s.deleteQuiz(t)}}," Delete "+Object(o["y"])(t)+" quiz ",11,["onClick"])])})),128))]),q])}var w=n("2909"),m=(n("07ac"),n("d81d"),n("1276"),n("ac1f"),n("99af"),n("6062"),n("d3b7"),n("3ca3"),n("ddb0"),{props:{questions:{type:Array,default:null}},data:function(){return{errors:null,removeCategory:" "}},methods:{deleteQuiz:function(e){var t=this,n="";this.questions.forEach((function(o){o.quiz==e&&(n=o,a.delete("/question/"+n.id).then((function(e){e.data.errors?(t.errors=Object.values(e.data.errors)[0][0],t.showConfirmation=!1):(t.$emit("update-products"),t.removeCategory=n.quiz,console.log(t.removeCategory))})))}))}},computed:{categories:function(){var e=this.questions.map((function(e){return e.quiz.split(",")})),t=[].concat.apply([],e);return Object(w["a"])(new Set(t)).sort()}}});m.render=g;var y=m,v={id:"quiz-page"},z={key:1},k={key:2},Q=Object(o["g"])("h2",{class:"incorrect"},"Game over",-1),C=Object(o["g"])("img",{alt:"logo",src:"https://source.unsplash.com/400x300/?quiz"},null,-1),x=Object(o["g"])("br",null,null,-1),A=Object(o["f"])("Back to selection page"),U={key:3,class:"feedback"},_={key:4,class:"feedback"},S=Object(o["f"])(" Correct, "),D={key:1,class:"{ incorrect }"},P=Object(o["f"])(" Sorry, ");function R(e,t,n,i,r,s){var u=Object(o["w"])("show-question"),c=Object(o["w"])("router-link");return Object(o["p"])(),Object(o["d"])("div",v,[Object(o["g"])("h1",null,Object(o["y"])(n.quiz)+" quiz",1),s.question?(Object(o["p"])(),Object(o["d"])(u,{key:0,onUpdateScore:s.updateScore,question:s.question,feedback:r.feedback},null,8,["onUpdateScore","question","feedback"])):""==n.quiz?(Object(o["p"])(),Object(o["d"])("p",z,"Pick a quiz on the home tab")):(Object(o["p"])(),Object(o["d"])("div",k,[Q,C,x,Object(o["g"])(c,{to:"/"},{default:Object(o["C"])((function(){return[A]})),_:1})])),""==!n.quiz?(Object(o["p"])(),Object(o["d"])("p",U,"Score:"+Object(o["y"])(this.score),1)):Object(o["e"])("",!0),r.feedback?(Object(o["p"])(),Object(o["d"])("div",_,[r.correct?(Object(o["p"])(),Object(o["d"])("p",{key:0,class:{correct:r.correct}},[S,Object(o["g"])("i",null,'"'+Object(o["y"])(this.answer)+'"',1),Object(o["f"])(" is "+Object(o["y"])(this.correct)+" well done! ",1)],2)):(Object(o["p"])(),Object(o["d"])("p",D,[P,Object(o["g"])("i",null,'"'+Object(o["y"])(this.answer)+'"',1),Object(o["f"])(" is "+Object(o["y"])(this.correct)+". ",1)])),Object(o["g"])("button",{class:"btn",onClick:t[1]||(t[1]=function(){return s.nextQuestion&&s.nextQuestion.apply(s,arguments)})},"Next question")])):Object(o["e"])("",!0)])}var E=Object(o["E"])("data-v-8385199e");Object(o["s"])("data-v-8385199e");var V={class:"show-question"},T={class:"question"};Object(o["q"])();var I=E((function(e,t,n,i,r,s){return Object(o["p"])(),Object(o["d"])("div",V,[Object(o["g"])("div",T,Object(o["y"])(n.question.question),1),Object(o["g"])("div",{class:"questions",style:{backgroundImage:"url("+s.imgSrc+")"}},[(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(n.question.answers,(function(e,t){return Object(o["p"])(),Object(o["d"])("div",{class:"question",key:t},[n.feedback?Object(o["e"])("",!0):(Object(o["p"])(),Object(o["d"])("button",{key:0,onClick:function(e){return s.testAnswer(t)},class:"btn"},Object(o["y"])(n.question.answers[t][0]),9,["onClick"]))])})),128))],4)])})),M={props:{question:{type:Object},feedback:{type:Boolean},quiz:{type:String}},data:function(){return{guessed:!1}},methods:{testAnswer:function(e){this.guessed||(this.$emit("update-score",this.question.answers[e]),this.guessed=!0),this.guessed=!1}},computed:{imgSrc:function(){try{return this.question.image}catch(e){return n("2f86")}}}};n("0de0");M.render=I,M.__scopeId="data-v-8385199e";var B=M,L={components:{"show-question":B},props:{questions:{type:Array,default:null},quiz:{type:String}},data:function(){return{specificQuestions:[],correct:null,answer:"",score:"0",round:"0",feedback:!1}},mounted:function(){this.createQuestions(this.quiz)},computed:{question:function(){return this.round==this.specificQuestions.length?void 0:this.specificQuestions[this.round]}},methods:{createQuestions:function(e){var t=[];this.questions.forEach((function(n){n.quiz==e&&t.push(n)})),this.specificQuestions=t},updateScore:function(e){this.feedback=!0,this.answer=e[0],e[1]?(this.correct=!0,this.score++):this.correct=!1},nextQuestion:function(){this.feedback=!1,this.round++}}};n("9162");L.render=R;var $=L,N=Object(o["E"])("data-v-5bc432cc");Object(o["s"])("data-v-5bc432cc");var J={id:"create-page"},G=Object(o["g"])("h1",null,"Create your own quiz",-1),K=Object(o["g"])("h2",null,"Add a question",-1),W={id:"inputs"},Y=Object(o["g"])("label",{for:"quiz"},"Question category",-1),F=Object(o["g"])("label",{for:"image"},"Image keyword",-1),H=Object(o["g"])("label",{for:"question"},"Question",-1),X=Object(o["g"])("label",{for:"answer1"},"Answer 1",-1),Z=Object(o["g"])("label",{for:"answer2"},"Answer 2",-1),ee=Object(o["g"])("label",{for:"answer3"},"Answer 3",-1),te=Object(o["g"])("label",{for:"answer4"},"Answer 4",-1),ne=Object(o["g"])("label",{for:"correct"},"Correct answer?",-1),oe={key:0,id:"addsucceed"},ie={key:1,id:"addfail"};Object(o["q"])();var re=N((function(e,t,n,i,r,s){return Object(o["p"])(),Object(o["d"])("div",J,[G,K,Object(o["g"])("div",W,[Y,Object(o["D"])(Object(o["g"])("input",{type:"text",id:"quiz","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.question.quiz=e}),placeholder:"Required 3-12 letters"},null,512),[[o["A"],r.question.quiz]]),F,Object(o["D"])(Object(o["g"])("input",{type:"text",id:"image","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.question.image=e}),placeholder:"Required 3-12 letters"},null,512),[[o["A"],r.question.image]]),H,Object(o["D"])(Object(o["g"])("input",{type:"text",id:"question","onUpdate:modelValue":t[3]||(t[3]=function(e){return r.question.question=e}),placeholder:"Required 3-100 letters"},null,512),[[o["A"],r.question.question]]),X,Object(o["D"])(Object(o["g"])("input",{type:"text",id:"answer1","onUpdate:modelValue":t[4]||(t[4]=function(e){return r.question.answer1=e}),placeholder:"Required 3-50 letters"},null,512),[[o["A"],r.question.answer1]]),Z,Object(o["D"])(Object(o["g"])("input",{type:"text",id:"answer2","onUpdate:modelValue":t[5]||(t[5]=function(e){return r.question.answer2=e}),placeholder:"Required 3-50 letters"},null,512),[[o["A"],r.question.answer2]]),ee,Object(o["D"])(Object(o["g"])("input",{type:"text",id:"answer3","onUpdate:modelValue":t[6]||(t[6]=function(e){return r.question.answer3=e}),placeholder:"Required 3-50 letters"},null,512),[[o["A"],r.question.answer3]]),te,Object(o["D"])(Object(o["g"])("input",{type:"text",id:"answer4","onUpdate:modelValue":t[7]||(t[7]=function(e){return r.question.answer4=e}),placeholder:"Required 3-50 letters"},null,512),[[o["A"],r.question.answer4]]),ne,Object(o["D"])(Object(o["g"])("input",{type:"text",id:"correct","onUpdate:modelValue":t[8]||(t[8]=function(e){return r.question.correct=e}),placeholder:"Required number from 1-4"},null,512),[[o["A"],r.question.correct]]),Object(o["g"])("button",{class:"btn",onClick:t[9]||(t[9]=function(){return s.addQuestion&&s.addQuestion.apply(s,arguments)})},"Add Question"),r.showConfirmation?(Object(o["p"])(),Object(o["d"])("div",oe,"Your question was added")):Object(o["e"])("",!0),r.showConfirmation?Object(o["e"])("",!0):(Object(o["p"])(),Object(o["d"])("div",ie,Object(o["y"])(r.errors),1)),Object(o["g"])("button",{class:"btn",onClick:t[10]||(t[10]=function(){return s.addTestQuestion&&s.addTestQuestion.apply(s,arguments)})}," Add Test Question ")])])})),se=n("3835"),ue=(n("4fad"),{data:function(){return{showConfirmation:!1,errors:null,question:{quiz:"",image:"",question:"",answer1:"",answer2:"",answer3:"",answer4:"",correct:""},testQuestion:{quiz:"toys",image:"sled",question:"What was the name of Citizen Kane's beloved sled",answer1:"Rosebud",answer2:"Mayflower",answer3:"Dandelion",answer4:"Lightning",correct:1}}},methods:{addQuestion:function(){var e=this;this.question.image="https://source.unsplash.com/400x300/?"+this.question.image,a.post("/question",this.question).then((function(t){if(t.data.errors)e.errors=Object.values(t.data.errors)[0][0],e.showConfirmation=!1;else{e.$emit("update-questions");for(var n=0,o=Object.entries(e.question);n<o.length;n++){var i=Object(se["a"])(o[n],1),r=i[0];e.question[r]=""}e.showConfirmation=!0}}))},addTestQuestion:function(){this.question.quiz=this.testQuestion.quiz,this.question.image=this.testQuestion.image,this.question.question=this.testQuestion.question,this.question.answer1=this.testQuestion.answer1,this.question.answer2=this.testQuestion.answer2,this.question.answer3=this.testQuestion.answer3,this.question.answer4=this.testQuestion.answer4,this.question.correct=this.testQuestion.correct}}});n("4e8f");ue.render=re,ue.__scopeId="data-v-5bc432cc";var ce=ue,ae=Object(b["a"])({history:Object(b["b"])(),routes:[{path:"/",component:y},{path:"/create",component:ce},{path:"/quiz",component:$}]});Object(o["c"])(d).use(ae).mount("#app")},6069:function(e,t,n){"use strict";n("2a87")},9162:function(e,t,n){"use strict";n("f230")},"9d64":function(e,t,n){e.exports=n.p+"img/logo.fd85eecb.png"},b31b:function(e,t,n){},e1ca:function(e,t,n){},f230:function(e,t,n){}});
//# sourceMappingURL=app.50350cd4.js.map