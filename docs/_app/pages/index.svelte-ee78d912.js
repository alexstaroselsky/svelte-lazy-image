import{S as ne,i as ie,s as ce,C as W,e as h,c as u,L as de,M as he,g as ue,N as ge,z as pe,O as me,K as X,d as f,P as fe,v as _e,Q as ve,R as be,t as D,k as z,w as Ie,a as p,h as M,m as x,x as Ee,b as V,J as t,y as ye,T as ze,q as xe,o as Le,B as Oe}from"../chunks/vendor-7dd6fb68.js";function Ce(o,{root:e=null,rootMargin:s="0px 0px 0px 0px",threshold:v=0}={}){if(window&&"IntersectionObserver"in window){const c=new IntersectionObserver(d=>{d.forEach(n=>{if(n.isIntersecting){const r=n.target;r.dataset.src&&(r.src=r.dataset.src),r.dataset.srcset&&(r.srcset=r.dataset.srcset),c.unobserve(r)}})},{root:e,rootMargin:s,threshold:v});return c.observe(o),{destroy(){c&&c.unobserve(o)}}}}function De(o){let e,s,v,c,d,n=[{src:s=o[2]},{alt:o[0]},o[6],{class:v="svelte-lazy-image "+o[4]}],r={};for(let a=0;a<n.length;a+=1)r=W(r,n[a]);return{c(){e=h("img"),this.h()},l(a){e=u(a,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){de(e,r),he(e,"svelte-lazy-image--loaded",o[3])},m(a,m){ue(a,e,m),o[11](e),c||(d=ge(e,"load",o[5]),c=!0)},p(a,[m]){de(e,r=pe(n,[m&4&&!me(e.src,s=a[2])&&{src:s},m&1&&{alt:a[0]},m&64&&a[6],m&16&&v!==(v="svelte-lazy-image "+a[4])&&{class:v}])),he(e,"svelte-lazy-image--loaded",a[3])},i:X,o:X,d(a){a&&f(e),o[11](null),c=!1,d()}}}function Me(o,e,s){let v;const c=["placeholder","src","alt","options"];let d=fe(e,c),{placeholder:n}=e,{src:r}=e,{alt:a}=e,{options:m={root:null,rootMargin:"0px 0px 0px 0px",threshold:0}}=e,g,L,I,_=!1,P=!1;_e(()=>(I=new IntersectionObserver((l,O)=>{l.forEach(S=>{S.isIntersecting&&(s(10,_=!0),O.unobserve(g))})},m),I.observe(g),()=>{I&&I.unobserve(g)}));function k(){!P&&L===r&&s(3,P=!0)}function w(l){be[l?"unshift":"push"](()=>{g=l,s(1,g)})}return o.$$set=l=>{s(13,e=W(W({},e),ve(l))),s(6,d=fe(e,c)),"placeholder"in l&&s(7,n=l.placeholder),"src"in l&&s(8,r=l.src),"alt"in l&&s(0,a=l.alt),"options"in l&&s(9,m=l.options)},o.$$.update=()=>{o.$$.dirty&1408&&s(2,L=_?r:n),s(4,v=e.class||"")},e=ve(e),[a,g,L,P,v,k,d,n,r,m,_,w]}class Pe extends ne{constructor(e){super();ie(this,e,Me,De,ce,{placeholder:7,src:8,alt:0,options:9})}}function Ve(o){let e,s,v,c,d,n,r,a,m,g,L,I,_,P="Lorem ipsum dolor sit amet consectetur adipisicing elit.".repeat(500)+"",k,w,l,O,S,A,q,E,Y,J,K,N,C,H,Q,T,R,y,B,F,Z;return y=new Pe({props:{src:"https://via.placeholder.com/250?text=src2",placeholder:"https://via.placeholder.com/250?text=placeholder2",alt:"Lorem Ipsum",options:{threshold:1}}}),y.$on("intersecting",o[0]),{c(){e=h("div"),s=h("h1"),v=D("svelte-lazy-image"),c=z(),d=h("p"),n=h("a"),r=D("use:action"),a=D(" and component to load image using IntersectionObserver."),m=z(),g=h("p"),L=D("Scroll down with dev tools open to see loading and event emit."),I=z(),_=h("p"),k=D(P),w=z(),l=h("div"),O=h("h2"),S=D("use:action"),A=z(),q=h("div"),E=h("img"),J=z(),K=h("br"),N=z(),C=h("div"),H=h("h2"),Q=D("Component"),T=z(),R=h("div"),Ie(y.$$.fragment),this.h()},l(b){e=u(b,"DIV",{});var i=p(e);s=u(i,"H1",{});var $=p(s);v=M($,"svelte-lazy-image"),$.forEach(f),c=x(i),d=u(i,"P",{class:!0});var U=p(d);n=u(U,"A",{href:!0,target:!0});var ee=p(n);r=M(ee,"use:action"),ee.forEach(f),a=M(U," and component to load image using IntersectionObserver."),U.forEach(f),m=x(i),g=u(i,"P",{});var te=p(g);L=M(te,"Scroll down with dev tools open to see loading and event emit."),te.forEach(f),I=x(i),_=u(i,"P",{});var se=p(_);k=M(se,P),se.forEach(f),w=x(i),l=u(i,"DIV",{});var G=p(l);O=u(G,"H2",{});var ae=p(O);S=M(ae,"use:action"),ae.forEach(f),A=x(G),q=u(G,"DIV",{});var le=p(q);E=u(le,"IMG",{src:!0,"data-src":!0,alt:!0}),le.forEach(f),G.forEach(f),J=x(i),K=u(i,"BR",{}),N=x(i),C=u(i,"DIV",{});var j=p(C);H=u(j,"H2",{});var re=p(H);Q=M(re,"Component"),re.forEach(f),T=x(j),R=u(j,"DIV",{});var oe=p(R);Ee(y.$$.fragment,oe),oe.forEach(f),j.forEach(f),i.forEach(f),this.h()},h(){V(n,"href","https://svelte.dev/docs#template-syntax-element-directives-use-action"),V(n,"target","blank"),V(d,"class","content"),me(E.src,Y="https://via.placeholder.com/250?text=placeholder1")||V(E,"src",Y),V(E,"data-src","https://via.placeholder.com/250?text=src1"),V(E,"alt","foobar")},m(b,i){ue(b,e,i),t(e,s),t(s,v),t(e,c),t(e,d),t(d,n),t(n,r),t(d,a),t(e,m),t(e,g),t(g,L),t(e,I),t(e,_),t(_,k),t(e,w),t(e,l),t(l,O),t(O,S),t(l,A),t(l,q),t(q,E),t(e,J),t(e,K),t(e,N),t(e,C),t(C,H),t(H,Q),t(C,T),t(C,R),ye(y,R,null),B=!0,F||(Z=ze(Ce.call(null,E,{threshold:1})),F=!0)},p:X,i(b){B||(xe(y.$$.fragment,b),B=!0)},o(b){Le(y.$$.fragment,b),B=!1},d(b){b&&f(e),Oe(y),F=!1,Z()}}}function ke(o){return[()=>console.log("intersecting2")]}class Se extends ne{constructor(e){super();ie(this,e,ke,Ve,ce,{})}}export{Se as default};
