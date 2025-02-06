(function(){var t={4496:function(t,n,e){"use strict";var r=e(3751),i=e(641);const o={class:"content"};function s(t,n,e,r,s,p){const c=(0,i.g2)("navbar-list"),u=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(c,{categories:s.categories},null,8,["categories"]),(0,i.Lk)("div",o,[(0,i.bF)(u,{products:s.products,cart:s.cart,cartTotal:s.cartTotal,"add-to-cart":p.addToCart,onUpdateCart:p.updateCart},null,8,["products","cart","cartTotal","add-to-cart","onUpdateCart"])])],64)}e(8992),e(2577),e(8872);var p=e(33),c=e.p+"img/shopping-high-resolution-logo-transparent.0a4f501c.png";const u={class:"nav-belt"},a={class:"logo"},g={class:"nav-main"},d={class:"nav-links"};function f(t,n,e,r,o,s){const f=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.Lk)("div",u,[(0,i.Lk)("div",a,[(0,i.bF)(f,{to:"/"},{default:(0,i.k6)((()=>n[0]||(n[0]=[(0,i.Lk)("img",{alt:"shopping logo",src:c},null,-1)]))),_:1})])]),(0,i.Lk)("div",g,[(0,i.Lk)("div",d,[(0,i.Lk)("ul",null,[(0,i.bF)(f,{to:"/"},{default:(0,i.k6)((()=>n[1]||(n[1]=[(0,i.eW)("Home")]))),_:1}),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.categories,(t=>((0,i.uX)(),(0,i.Wv)(f,{key:t.id,to:`/category/${t.id}`},{default:(0,i.k6)((()=>[(0,i.eW)((0,p.v_)(t.name),1)])),_:2},1032,["to"])))),128)),(0,i.bF)(f,{to:"/cart"},{default:(0,i.k6)((()=>n[2]||(n[2]=[(0,i.eW)("Cart")]))),_:1})])])])],64)}var l={props:{categories:{type:Array,required:!0}}},m=e(6262);const h=(0,m.A)(l,[["render",f],["__scopeId","data-v-33f97028"]]);var y=h,x={components:{NavbarList:y},data(){return{categories:[{id:"clothing",name:"Clothing"},{id:"electronics",name:"Electronics"},{id:"home-and-kitchen",name:"Home & Kitchen"},{id:"accessories",name:"Accessories"},{id:"shoes",name:"Shoes"},{id:"books",name:"Books"},{id:"furniture",name:"Furniture"},{id:"sports-and-outdoors",name:"Sports & Outdoors"}],products:[],cart:[],cartTotal:0}},methods:{addToCart(t,n){const e=this.products.find((n=>n.id===t));if(e){const r=this.cart.find((n=>n.id===t));if(r)r.quantity+=n;else{const t={id:e.id,name:e.name,price:e.price,quantity:n};this.cart.unshift(t)}this.updateCart(this.cart)}},updateCart(t){this.cart=t,this.cartTotal=this.cart.reduce(((t,n)=>t+n.price*n.quantity),0)}},mounted(){const t="/shopping-site";fetch(`${t}/products.json`).then((t=>{if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return t.json()})).then((t=>{this.products=t})).catch((t=>{console.error("Error fetching products:",t)}))}};const b=(0,m.A)(x,[["render",s]]);var k=b,v=e(5220);e(4114);const q={class:"products"},w=["onClick"],C=["src","alt"];function j(t,n,r,o,s,c){return(0,i.uX)(),(0,i.CE)("div",q,[(0,i.Lk)("ul",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.filteredProducts,(n=>((0,i.uX)(),(0,i.CE)("li",{key:n.id,onClick:e=>t.$router.push(`/product/${n.id}`)},[(0,i.Lk)("img",{src:e(1178)(`./${n.id}.png`),alt:n.name},null,8,C),(0,i.Lk)("h3",null,(0,p.v_)(n.name),1),(0,i.Lk)("p",null,"$ "+(0,p.v_)(n.price.toLocaleString()),1)],8,w)))),128))])])}e(4520);var L={props:{products:{type:Array,required:!0}},data(){return{filteredProducts:[]}},watch:{"$route.params.category":{immediate:!0,handler(t){this.filterProducts(t)}},products:{immediate:!0,handler(){this.filterProducts(this.$route.params.category)}}},methods:{filterProducts(t){this.filteredProducts=t?this.products.filter((n=>n.category.includes(t))):this.products}},mounted(){this.filterProducts(this.$route.params.category)}};const z=(0,m.A)(L,[["render",j],["__scopeId","data-v-927598f0"]]);var _=z;const T={key:0,class:"product-view"},E={class:"product-image"},$=["src","alt"],P={class:"product-details"},A={class:"price"},O={class:"description"},X={key:1,class:"is-loading"},F={key:2,class:"not-found"};function I(t,n,r,o,s,c){const u=(0,i.g2)("add-to-cart");return s.product?((0,i.uX)(),(0,i.CE)("div",T,[(0,i.Lk)("div",E,[(0,i.Lk)("img",{src:e(1178)(`./${s.product.id}.png`),alt:s.product.name},null,8,$)]),(0,i.Lk)("div",P,[(0,i.Lk)("h1",null,(0,p.v_)(s.product.name),1),(0,i.Lk)("p",A,"$ "+(0,p.v_)(s.product.price.toLocaleString()),1),(0,i.Lk)("p",O,(0,p.v_)(s.product.description),1),(0,i.bF)(u,{onAddToCart:c.handleAddToCart},null,8,["onAddToCart"])])])):s.isLoading?((0,i.uX)(),(0,i.CE)("div",X,n[0]||(n[0]=[(0,i.Lk)("p",null,"Loading...",-1)]))):s.isLoading||s.product?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("div",F,n[1]||(n[1]=[(0,i.Lk)("p",null,"404",-1),(0,i.Lk)("p",null,"Product not found",-1)])))}const Q={class:"quantity-control"};function S(t,n,e,o,s,p){return(0,i.uX)(),(0,i.CE)("form",null,[n[6]||(n[6]=(0,i.Lk)("label",{for:"quantity"},"Quantity",-1)),(0,i.Lk)("div",Q,[(0,i.Lk)("button",{type:"button",onClick:n[0]||(n[0]=(...t)=>p.decreaseQuantity&&p.decreaseQuantity(...t))},n[4]||(n[4]=[(0,i.Lk)("i",{class:"fas fa-minus"},null,-1)])),(0,i.bo)((0,i.Lk)("input",{type:"number",id:"quantity","onUpdate:modelValue":n[1]||(n[1]=t=>s.quantity=t)},null,512),[[r.Jo,s.quantity]]),(0,i.Lk)("button",{type:"button",onClick:n[2]||(n[2]=(...t)=>p.increaseQuantity&&p.increaseQuantity(...t))},n[5]||(n[5]=[(0,i.Lk)("i",{class:"fas fa-plus"},null,-1)]))]),(0,i.Lk)("button",{class:"add-to-cart-button",onClick:n[3]||(n[3]=(0,r.D$)(((...t)=>p.addToCart&&p.addToCart(...t)),["prevent"]))}," Add to Cart ")])}var U={emits:["add-to-cart"],data(){return{quantity:1}},methods:{addToCart(){this.$emit("add-to-cart",this.quantity)},decreaseQuantity(){this.quantity>1&&this.quantity--},increaseQuantity(){this.quantity++}}};const K=(0,m.A)(U,[["render",S],["__scopeId","data-v-dde25a8a"]]);var D=K,H={components:{AddToCart:D},props:{products:{type:Array,required:!0},addToCart:{type:Function,required:!0}},data(){return{product:null,isLoading:!0}},watch:{"$route.params.productId":{immediate:!0,handler(){this.updateProduct()}},products:{immediate:!0,handler(){this.updateProduct()}}},methods:{updateProduct(){this.products&&0!==this.products.length?(this.isLoading=!0,this.product=this.products.find((t=>t.id===this.$route.params.productId)),this.isLoading=!1,this.product||console.warn(`Product with id ${this.$route.params.productId} not found.`)):console.log("Products not yet loaded.  Deferring updateProduct.")},handleAddToCart(t){this.addToCart(this.product.id,t)}},mounted(){this.updateProduct()}};const N=(0,m.A)(H,[["render",I],["__scopeId","data-v-8430d74e"]]);var V=N;const W={class:"cart"},J={key:0,class:"cart-items"},B=["src","alt"],M={class:"cart-item-details"},Y={class:"quantity-control"},G=["onClick"],R=["onUpdate:modelValue"],Z=["onClick"],tt={class:"cart-total"},nt={key:1,class:"empty-cart"};function et(t,n,o,s,c,u){return(0,i.uX)(),(0,i.CE)("div",W,[n[3]||(n[3]=(0,i.Lk)("h1",null,"Shopping Cart",-1)),c.localCart.length>0?((0,i.uX)(),(0,i.CE)("div",J,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(c.localCart,(t=>((0,i.uX)(),(0,i.CE)("div",{key:t.id,class:"cart-item"},[(0,i.Lk)("img",{src:e(1178)(`./${t.id}.png`),alt:t.name,class:"cart-item-image"},null,8,B),(0,i.Lk)("div",M,[(0,i.Lk)("h2",null,(0,p.v_)(t.name),1),(0,i.Lk)("p",null,"Price: $ "+(0,p.v_)(t.price.toLocaleString()),1),(0,i.Lk)("div",Y,[(0,i.Lk)("button",{type:"button",onClick:n=>u.decreaseQuantity(t)},n[0]||(n[0]=[(0,i.Lk)("i",{class:"fas fa-minus"},null,-1)]),8,G),(0,i.bo)((0,i.Lk)("input",{type:"number","onUpdate:modelValue":n=>t.quantity=n,readonly:""},null,8,R),[[r.Jo,t.quantity]]),(0,i.Lk)("button",{type:"button",onClick:n=>u.increaseQuantity(t)},n[1]||(n[1]=[(0,i.Lk)("i",{class:"fas fa-plus"},null,-1)]),8,Z)])])])))),128)),(0,i.Lk)("div",tt,[(0,i.Lk)("h2",null,"Total: $ "+(0,p.v_)(o.cartTotal.toLocaleString()),1)])])):((0,i.uX)(),(0,i.CE)("div",nt,n[2]||(n[2]=[(0,i.Lk)("p",null,"Your cart is empty.",-1)])))])}var rt={props:{cart:{type:Array,required:!0},cartTotal:{type:Number,required:!0}},data(){return{localCart:[]}},watch:{cart:{immediate:!0,handler(t){this.localCart=[...t]},deep:!0}},methods:{decreaseQuantity(t){t.quantity>1?t.quantity--:this.localCart.splice(this.localCart.indexOf(t),1),this.updateCart()},increaseQuantity(t){t.quantity++,this.updateCart()},updateCart(){this.localCart=[...this.localCart],this.$emit("update-cart",this.localCart)}}};const it=(0,m.A)(rt,[["render",et],["__scopeId","data-v-8869c5dc"]]);var ot=it;const st=[{path:"/",name:"Home",component:_},{path:"/category/:category",name:"ProductsList",component:_,props:!0},{path:"/product/:productId",name:"ProductView",component:V,props:!0},{path:"/cart",name:"Cart",component:ot}],pt=(0,v.aE)({history:(0,v.LA)("/shopping-site/"),routes:st});var ct=pt;e(6044);const ut=(0,r.Ef)(k);ut.use(ct),ut.mount("#app")},1178:function(t,n,e){var r={"./aaqusgyz.png":234,"./aukeucbu.png":6760,"./avjtkgem.png":2482,"./azkctghh.png":7417,"./bexqvxwy.png":2073,"./bgyzrftu.png":5352,"./bscovhyw.png":2068,"./cfjehpaw.png":2669,"./cgoqmvtx.png":6546,"./cohhmayh.png":8442,"./ctfrhrut.png":6833,"./dcigbfoc.png":2684,"./dnoywyxu.png":3646,"./dsmuqysb.png":6033,"./eifsvvny.png":5053,"./erdnaumw.png":4616,"./esmyudlh.png":3036,"./fakxmece.png":7201,"./fcfbafyq.png":1479,"./fwaihamv.png":8206,"./gceclgtk.png":8931,"./grbonzwu.png":2463,"./gyfrqgdt.png":441,"./haeyvnpv.png":4744,"./hcbmrloh.png":4178,"./hcdtowfm.png":2291,"./hkybfspe.png":7763,"./hncfelym.png":1133,"./hpjqzjya.png":88,"./hrqvgiyj.png":1551,"./hwmawocl.png":6455,"./iigsxcvp.png":2396,"./impxvcbf.png":910,"./jbrllclu.png":7305,"./jlwemdor.png":2499,"./jpdktwke.png":7687,"./kcpzojik.png":6850,"./kdvddggy.png":809,"./kjjhhjpg.png":9833,"./ktoystfa.png":962,"./kyqlqjwz.png":3436,"./losdeipz.png":7907,"./lxhpjzmv.png":5516,"./mpdgehiu.png":2080,"./mxeuzgwh.png":6736,"./nenndfei.png":8370,"./nfqnivar.png":6052,"./nxanckkw.png":4126,"./nxyiswrb.png":4959,"./nykypafx.png":7833,"./oarocxsr.png":4634,"./oydumrig.png":9141,"./ozabtkcg.png":1282,"./pocsnydt.png":9107,"./ppqpctrg.png":4610,"./qiqbcmqy.png":956,"./qlaqxurm.png":1010,"./qoacggoh.png":5326,"./qzbbpnze.png":9701,"./qzfmpfkl.png":6320,"./rbhswkfe.png":4587,"./rdnsoypu.png":3563,"./rgtmjgqx.png":7195,"./rribuwkr.png":3887,"./rupdaggb.png":5305,"./seidwkhe.png":2761,"./sypuyiow.png":5232,"./tgssbnuc.png":3144,"./tnoffhlt.png":430,"./tnxuojix.png":70,"./trrjzumb.png":7885,"./uqqfmxja.png":2626,"./vfoopyhf.png":4740,"./vqjrkfoh.png":8508,"./vrcbdwxz.png":3783,"./vrmdbwwo.png":1521,"./wowzyjia.png":3503,"./wpnboqra.png":1687,"./xgajndzj.png":1489,"./xmuiiszx.png":332,"./xqrricex.png":6831,"./xzplmljp.png":4206,"./yefrqswp.png":606,"./yintzgyl.png":3407,"./ywrttkca.png":2280,"./zeysmive.png":8463,"./zgwjpbkq.png":4533,"./zpdlabpf.png":560};function i(t){var n=o(t);return e(n)}function o(t){if(!e.o(r,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=o,t.exports=i,i.id=1178},234:function(t,n,e){"use strict";t.exports=e.p+"img/aaqusgyz.42a37a75.png"},6760:function(t,n,e){"use strict";t.exports=e.p+"img/aukeucbu.c3ea01a6.png"},2482:function(t,n,e){"use strict";t.exports=e.p+"img/avjtkgem.289f6bdb.png"},7417:function(t,n,e){"use strict";t.exports=e.p+"img/azkctghh.1dcb4038.png"},2073:function(t,n,e){"use strict";t.exports=e.p+"img/bexqvxwy.e42383be.png"},5352:function(t,n,e){"use strict";t.exports=e.p+"img/bgyzrftu.b3b02034.png"},2068:function(t,n,e){"use strict";t.exports=e.p+"img/bscovhyw.e6b9a839.png"},2669:function(t,n,e){"use strict";t.exports=e.p+"img/cfjehpaw.13ecb92d.png"},6546:function(t,n,e){"use strict";t.exports=e.p+"img/cgoqmvtx.093925d7.png"},8442:function(t,n,e){"use strict";t.exports=e.p+"img/cohhmayh.d4a8a841.png"},6833:function(t,n,e){"use strict";t.exports=e.p+"img/ctfrhrut.6e7b1548.png"},2684:function(t,n,e){"use strict";t.exports=e.p+"img/dcigbfoc.c8f83620.png"},3646:function(t,n,e){"use strict";t.exports=e.p+"img/dnoywyxu.f46b2230.png"},6033:function(t,n,e){"use strict";t.exports=e.p+"img/dsmuqysb.9209da25.png"},5053:function(t,n,e){"use strict";t.exports=e.p+"img/eifsvvny.8025be75.png"},4616:function(t,n,e){"use strict";t.exports=e.p+"img/erdnaumw.9626e53a.png"},3036:function(t,n,e){"use strict";t.exports=e.p+"img/esmyudlh.fe5a7295.png"},7201:function(t,n,e){"use strict";t.exports=e.p+"img/fakxmece.9a8945d6.png"},1479:function(t,n,e){"use strict";t.exports=e.p+"img/fcfbafyq.1d723bd5.png"},8206:function(t,n,e){"use strict";t.exports=e.p+"img/fwaihamv.e4fba6c1.png"},8931:function(t,n,e){"use strict";t.exports=e.p+"img/gceclgtk.c96c2598.png"},2463:function(t,n,e){"use strict";t.exports=e.p+"img/grbonzwu.54e9c0db.png"},441:function(t,n,e){"use strict";t.exports=e.p+"img/gyfrqgdt.2e5d6b88.png"},4744:function(t,n,e){"use strict";t.exports=e.p+"img/haeyvnpv.69bea98e.png"},4178:function(t,n,e){"use strict";t.exports=e.p+"img/hcbmrloh.7f1fd98d.png"},2291:function(t,n,e){"use strict";t.exports=e.p+"img/hcdtowfm.1d7e3ce0.png"},7763:function(t,n,e){"use strict";t.exports=e.p+"img/hkybfspe.9b02123d.png"},1133:function(t,n,e){"use strict";t.exports=e.p+"img/hncfelym.8862a86d.png"},88:function(t,n,e){"use strict";t.exports=e.p+"img/hpjqzjya.2099b12a.png"},1551:function(t,n,e){"use strict";t.exports=e.p+"img/hrqvgiyj.92cb90e9.png"},6455:function(t,n,e){"use strict";t.exports=e.p+"img/hwmawocl.1389ac24.png"},2396:function(t,n,e){"use strict";t.exports=e.p+"img/iigsxcvp.771f86d9.png"},910:function(t,n,e){"use strict";t.exports=e.p+"img/impxvcbf.d8880f82.png"},7305:function(t,n,e){"use strict";t.exports=e.p+"img/jbrllclu.410edeec.png"},2499:function(t,n,e){"use strict";t.exports=e.p+"img/jlwemdor.b44f4971.png"},7687:function(t,n,e){"use strict";t.exports=e.p+"img/jpdktwke.a303468c.png"},6850:function(t,n,e){"use strict";t.exports=e.p+"img/kcpzojik.10183e46.png"},809:function(t,n,e){"use strict";t.exports=e.p+"img/kdvddggy.4a1a446c.png"},9833:function(t,n,e){"use strict";t.exports=e.p+"img/kjjhhjpg.c92c5c99.png"},962:function(t,n,e){"use strict";t.exports=e.p+"img/ktoystfa.80cd328e.png"},3436:function(t,n,e){"use strict";t.exports=e.p+"img/kyqlqjwz.227c2405.png"},7907:function(t,n,e){"use strict";t.exports=e.p+"img/losdeipz.5e4ee824.png"},5516:function(t,n,e){"use strict";t.exports=e.p+"img/lxhpjzmv.d5e44233.png"},2080:function(t,n,e){"use strict";t.exports=e.p+"img/mpdgehiu.a63c7d7f.png"},6736:function(t,n,e){"use strict";t.exports=e.p+"img/mxeuzgwh.922da3c8.png"},8370:function(t,n,e){"use strict";t.exports=e.p+"img/nenndfei.49ccae43.png"},6052:function(t,n,e){"use strict";t.exports=e.p+"img/nfqnivar.22bda8be.png"},4126:function(t,n,e){"use strict";t.exports=e.p+"img/nxanckkw.83d62efe.png"},4959:function(t,n,e){"use strict";t.exports=e.p+"img/nxyiswrb.578e9e6c.png"},7833:function(t,n,e){"use strict";t.exports=e.p+"img/nykypafx.c07d4358.png"},4634:function(t,n,e){"use strict";t.exports=e.p+"img/oarocxsr.ef6f7be9.png"},9141:function(t,n,e){"use strict";t.exports=e.p+"img/oydumrig.c8f2ad3d.png"},1282:function(t,n,e){"use strict";t.exports=e.p+"img/ozabtkcg.2f3e050c.png"},9107:function(t,n,e){"use strict";t.exports=e.p+"img/pocsnydt.f223977b.png"},4610:function(t,n,e){"use strict";t.exports=e.p+"img/ppqpctrg.8a3c1641.png"},956:function(t,n,e){"use strict";t.exports=e.p+"img/qiqbcmqy.e88a8229.png"},1010:function(t,n,e){"use strict";t.exports=e.p+"img/qlaqxurm.21af7b97.png"},5326:function(t,n,e){"use strict";t.exports=e.p+"img/qoacggoh.9f380d09.png"},9701:function(t,n,e){"use strict";t.exports=e.p+"img/qzbbpnze.5b571533.png"},6320:function(t,n,e){"use strict";t.exports=e.p+"img/qzfmpfkl.79674209.png"},4587:function(t,n,e){"use strict";t.exports=e.p+"img/rbhswkfe.859b39ad.png"},3563:function(t,n,e){"use strict";t.exports=e.p+"img/rdnsoypu.f9673f8e.png"},7195:function(t,n,e){"use strict";t.exports=e.p+"img/rgtmjgqx.5c8bd38d.png"},3887:function(t,n,e){"use strict";t.exports=e.p+"img/rribuwkr.543b42ca.png"},5305:function(t,n,e){"use strict";t.exports=e.p+"img/rupdaggb.3b5813b0.png"},2761:function(t,n,e){"use strict";t.exports=e.p+"img/seidwkhe.cbeef52a.png"},5232:function(t,n,e){"use strict";t.exports=e.p+"img/sypuyiow.7d425120.png"},3144:function(t,n,e){"use strict";t.exports=e.p+"img/tgssbnuc.d69e1628.png"},430:function(t,n,e){"use strict";t.exports=e.p+"img/tnoffhlt.d4efbd61.png"},70:function(t,n,e){"use strict";t.exports=e.p+"img/tnxuojix.113627c5.png"},7885:function(t,n,e){"use strict";t.exports=e.p+"img/trrjzumb.0103aa43.png"},2626:function(t,n,e){"use strict";t.exports=e.p+"img/uqqfmxja.9a503b7a.png"},4740:function(t,n,e){"use strict";t.exports=e.p+"img/vfoopyhf.3a1c5f36.png"},8508:function(t,n,e){"use strict";t.exports=e.p+"img/vqjrkfoh.41ad8d96.png"},3783:function(t,n,e){"use strict";t.exports=e.p+"img/vrcbdwxz.17825a6f.png"},1521:function(t,n,e){"use strict";t.exports=e.p+"img/vrmdbwwo.46bf12dc.png"},3503:function(t,n,e){"use strict";t.exports=e.p+"img/wowzyjia.7bc33cb5.png"},1687:function(t,n,e){"use strict";t.exports=e.p+"img/wpnboqra.f46f9d64.png"},1489:function(t,n,e){"use strict";t.exports=e.p+"img/xgajndzj.f25481ad.png"},332:function(t,n,e){"use strict";t.exports=e.p+"img/xmuiiszx.e40b1026.png"},6831:function(t,n,e){"use strict";t.exports=e.p+"img/xqrricex.952f6ac3.png"},4206:function(t,n,e){"use strict";t.exports=e.p+"img/xzplmljp.d6bcdc52.png"},606:function(t,n,e){"use strict";t.exports=e.p+"img/yefrqswp.6229adc8.png"},3407:function(t,n,e){"use strict";t.exports=e.p+"img/yintzgyl.c99edc9e.png"},2280:function(t,n,e){"use strict";t.exports=e.p+"img/ywrttkca.0aad4413.png"},8463:function(t,n,e){"use strict";t.exports=e.p+"img/zeysmive.016f5570.png"},4533:function(t,n,e){"use strict";t.exports=e.p+"img/zgwjpbkq.716be491.png"},560:function(t,n,e){"use strict";t.exports=e.p+"img/zpdlabpf.357ec93a.png"}},n={};function e(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={exports:{}};return t[r].call(o.exports,o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(n,r,i,o){if(!r){var s=1/0;for(a=0;a<t.length;a++){r=t[a][0],i=t[a][1],o=t[a][2];for(var p=!0,c=0;c<r.length;c++)(!1&o||s>=o)&&Object.keys(e.O).every((function(t){return e.O[t](r[c])}))?r.splice(c--,1):(p=!1,o<s&&(s=o));if(p){t.splice(a--,1);var u=i();void 0!==u&&(n=u)}}return n}o=o||0;for(var a=t.length;a>0&&t[a-1][2]>o;a--)t[a]=t[a-1];t[a]=[r,i,o]}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.p="/shopping-site/"}(),function(){var t={524:0};e.O.j=function(n){return 0===t[n]};var n=function(n,r){var i,o,s=r[0],p=r[1],c=r[2],u=0;if(s.some((function(n){return 0!==t[n]}))){for(i in p)e.o(p,i)&&(e.m[i]=p[i]);if(c)var a=c(e)}for(n&&n(r);u<s.length;u++)o=s[u],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(a)},r=self["webpackChunkshopping_site"]=self["webpackChunkshopping_site"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[504],(function(){return e(4496)}));r=e.O(r)})();
//# sourceMappingURL=app.fcf6975e.js.map