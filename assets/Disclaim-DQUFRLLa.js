import{_ as i,u as E,r as _,c as I,I as m,o as w,a as x,b as e,n as o,t as a,d as S,F as T,B as g}from"./index-Bic5Panh.js";async function $({lang:r}){return{...await(async()=>{switch(r.toLowerCase()){case"en":return i(()=>import("./Disclaim-D9VBmfW-.js"),[],import.meta.url);case"sp":return i(()=>import("./Disclaim-B1ecuSOl.js"),[],import.meta.url)}})()}}const A={__name:"Disclaim",setup(r){const l=E().params,t=_(m()),s=_({}),p=I(()=>{$({lang:l.lang}).then(u=>s.value=u)});window.onresize=()=>{t.value=m()};const c=sessionStorage.getItem("origin")||`/#/${l.lang}/`;console.log(c);const v=()=>{sessionStorage.setItem("disclaim",""),console.log(g+c),console.log(g)},d=()=>{window.location.href="https://www.google.com/"};return(u,n)=>(w(),x(T,null,[e("h1",{class:o(`title-${t.value}`)},"DISCLAIM",2),e("p",{class:o(`text-${t.value} text-center`)},a(s.value.text),3),e("div",{class:o(`btn-cont-${t.value} text-center`)},[e("button",{onClick:n[0]||(n[0]=b=>v()),class:o(`btn btn-outline-success btn-page-${t.value}`)},a(s.value.yes_button),3),e("button",{onClick:n[1]||(n[1]=b=>d()),class:o(`btn btn-outline-danger btn-page-${t.value}`)},a(s.value.no_button),3)],2),S(" "+a(p.value),1)],64))}};export{A as default};
