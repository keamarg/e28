(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05c74d33"],{"141f":function(e,t,n){},"2f86":function(e,t,n){e.exports=n.p+"img/image-not-available.8713e5da.png"},"4da8":function(e,t,n){"use strict";n("141f")},b128:function(e,t,n){"use strict";n.r(t);var s=n("7a23"),c={id:"question-page"},i={key:0},u=Object(s["g"])("Back to home page"),o={key:1};function r(e,t,n,r,a,b){var d=Object(s["x"])("router-link"),j=Object(s["x"])("show-question");return Object(s["q"])(),Object(s["e"])("div",c,[b.questionNotFound?(Object(s["q"])(),Object(s["e"])("div",i,[Object(s["h"])("p",null,"Question "+Object(s["z"])(n.id)+" not found.",1),Object(s["h"])(d,{to:"/"},{default:Object(s["D"])((function(){return[u]})),_:1})])):b.question?(Object(s["q"])(),Object(s["e"])("div",o,[Object(s["h"])(j,{question:b.question,detailed:!0},null,8,["question"])])):Object(s["f"])("",!0)])}var a=n("caa5"),b={components:{"show-question":a["a"]},props:{id:{type:String}},data:function(){return{}},computed:{question:function(){return this.$store.getters.getQuestionById(this.id)},questionNotFound:function(){return null==this.question},questions:function(){return this.$store.state.questions},category:function(){return this.$store.state.category}}};b.render=r;t["default"]=b},caa5:function(e,t,n){"use strict";var s=n("7a23"),c=Object(s["F"])("data-v-57cc7f48");Object(s["t"])("data-v-57cc7f48");var i={key:0,class:"questionWrapper"},u=Object(s["h"])("h4",{class:"redText"},"This is just a preview of the question.",-1),o=Object(s["h"])("br",null,null,-1),r={class:"question"},a={key:1,class:"show-question"},b={class:"question"},d=Object(s["g"])("Back to home page");Object(s["r"])();var j=c((function(e,t,n,j,O,l){var q=Object(s["x"])("router-link");return Object(s["q"])(),Object(s["e"])(s["a"],null,[n.detailed?(Object(s["q"])(),Object(s["e"])("div",i,[u,o,Object(s["h"])("div",r,Object(s["z"])(n.question.question),1),(Object(s["q"])(!0),Object(s["e"])(s["a"],null,Object(s["w"])(n.question.answers,(function(e,t){return Object(s["q"])(),Object(s["e"])("ul",{class:"question",key:t},[Object(s["h"])("li",null,Object(s["z"])(n.question.answers[t][0]),1)])})),128))])):(Object(s["q"])(),Object(s["e"])("div",a,[Object(s["h"])("div",b,Object(s["z"])(n.question.question),1),Object(s["h"])("div",{class:"questions",style:{backgroundImage:"url("+l.imgSrc+")"}},[(Object(s["q"])(!0),Object(s["e"])(s["a"],null,Object(s["w"])(n.question.answers,(function(e,t){return Object(s["q"])(),Object(s["e"])("div",{class:"question",key:t},[n.feedback?Object(s["f"])("",!0):(Object(s["q"])(),Object(s["e"])("button",{key:0,onClick:function(e){return l.testAnswer(t)},class:"btn"},Object(s["z"])(n.question.answers[t][0]),9,["onClick"]))])})),128))],4)])),n.detailed?(Object(s["q"])(),Object(s["e"])(q,{key:2,to:"/"},{default:c((function(){return[d]})),_:1})):Object(s["f"])("",!0)],64)})),O={props:{question:{type:Object},feedback:{type:Boolean},quiz:{type:String},detailed:{type:Boolean}},emits:["update-score"],data:function(){return{guessed:!1}},computed:{imgSrc:function(){try{return this.question.image}catch(e){return n("2f86")}}},methods:{testAnswer:function(e){this.guessed||(this.$emit("update-score",this.question.answers[e]),this.guessed=!0),this.guessed=!1}}};n("4da8");O.render=j,O.__scopeId="data-v-57cc7f48";t["a"]=O}}]);
//# sourceMappingURL=chunk-05c74d33.fceed13d.js.map