(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d215c67"],{c048:function(t,e,o){"use strict";o.r(e);o("b0c0");var r=o("7a23"),a={id:"product-page"},n={key:0},c=Object(r["g"])("Back to products page"),u={key:1},i=Object(r["h"])("br",null,null,-1),d={key:0,class:"alert"},s={key:0};function v(t,e,o,v,f,b){var p=Object(r["x"])("router-link"),l=Object(r["x"])("show-product");return Object(r["q"])(),Object(r["e"])("div",a,[b.productNotFound?(Object(r["q"])(),Object(r["e"])("div",n,[Object(r["h"])("p",null,"Product "+Object(r["z"])(o.id)+" not found.",1),Object(r["h"])(p,{to:"/products"},{default:Object(r["F"])((function(){return[c]})),_:1})])):b.product?(Object(r["q"])(),Object(r["e"])("div",u,[Object(r["h"])(l,{product:b.product,detailed:!0},null,8,["product"]),Object(r["h"])("button",{onClick:e[1]||(e[1]=function(){return b.addToCart&&b.addToCart.apply(b,arguments)}),"data-test":"add-to-cart-button"}," Add to cart"),i,Object(r["h"])(r["b"],{name:"fade"},{default:Object(r["F"])((function(){return[f.addConfirmation?(Object(r["q"])(),Object(r["e"])("div",d,Object(r["z"])(b.product.name)+" was added to your cart! ",1)):Object(r["f"])("",!0)]})),_:1}),b.user?(Object(r["q"])(),Object(r["e"])("div",s,[v.isFavorite?(Object(r["q"])(),Object(r["e"])("button",{key:0,onClick:e[2]||(e[2]=function(t){return v.removeFromFavorites()})}," Remove from favorites ")):(Object(r["q"])(),Object(r["e"])("button",{key:1,onClick:e[3]||(e[3]=function(t){return v.addToFavorites()})},"❤ Add to favorites"))])):Object(r["f"])("",!0)])):Object(r["f"])("",!0)])}var f=o("3e73"),b=o("0091"),p=o("ca8f");function l(t){var e=Object(r["v"])(!1),o=Object(r["v"])(null),a=Object(r["c"])((function(){return p["a"].state.user}));b["a"].get("/favorite/query?product_id="+t+"&user_id="+a.value.id).then((function(t){t.data.favorite.length>0&&(o.value=t.data.favorite[0].id,e.value=!0)}));var n=function(){b["a"].post("/favorite",{product_id:t,user_id:a.value.id}).then((function(t){t.data.success&&(e.value=!0,o.value=t.data.favorite.id)}))},c=function(){b["a"].delete("/favorite/"+o.value).then((function(t){t.data.success&&(e.value=!1,o.value=null)}))};return{isFavorite:e,addToFavorites:n,removeFromFavorites:c}}var j={components:{"show-product":f["a"]},props:{id:{type:String}},setup:function(t){var e=l(t.id),o=e.isFavorite,r=e.addToFavorites,a=e.removeFromFavorites;return{isFavorite:o,addToFavorites:r,removeFromFavorites:a}},data:function(){return{addConfirmation:!1,favoriteConfirmation:!1}},computed:{user:function(){return this.$store.state.user},product:function(){return this.$store.getters.getProductById(this.id)},productNotFound:function(){return null==this.product},products:function(){return this.$store.state.products}},methods:{addToCart:function(){var t=this;b["b"].add(this.product.id),this.$store.commit("setCartCount",b["b"].count()),this.addConfirmation=!0,setTimeout((function(){t.addConfirmation=!1}),3e3)},createUser:function(){var t=this;b["a"].post("register",this.registrationData).then((function(e){e.data.authenticated?t.$store.commit("setUser",e.data.user):t.errors=e.data.errors}))}}};j.render=v;e["default"]=j}}]);
//# sourceMappingURL=chunk-2d215c67.99a1486a.js.map