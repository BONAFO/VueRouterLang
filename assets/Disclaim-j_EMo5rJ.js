import{_ as u,u as b,r as _,c as w,I as m,o as E,a as I,b as e,n as s,t as a,d as x,F as S,B as T}from"./index-DXm85-j1.js";async function $({lang:l}){return{...await(async()=>{switch(l.toLowerCase()){case"en":return u(()=>import("./Disclaim-D9VBmfW-.js"),[],import.meta.url);case"sp":return u(()=>import("./Disclaim-B1ecuSOl.js"),[],import.meta.url)}})()}}const A={__name:"Disclaim",setup(l){const r=b().params,t=_(m()),n=_({}),p=w(()=>{$({lang:r.lang}).then(c=>n.value=c)});window.onresize=()=>{t.value=m()};const i=sessionStorage.getItem("origin")||`/#/${r.lang}/`;console.log(i);const v=()=>{sessionStorage.setItem("disclaim",""),window.location.href=T+i},g=()=>{window.location.href="https://www.google.com/"};return(c,o)=>(E(),I(S,null,[e("h1",{class:s(`title-${t.value}`)},"DISCLAIM",2),e("p",{class:s(`text-${t.value} text-center`)},a(n.value.text),3),e("div",{class:s(`btn-cont-${t.value} text-center`)},[e("button",{onClick:o[0]||(o[0]=d=>v()),class:s(`btn btn-outline-success btn-page-${t.value}`)},a(n.value.yes_button),3),e("button",{onClick:o[1]||(o[1]=d=>g()),class:s(`btn btn-outline-danger btn-page-${t.value}`)},a(n.value.no_button),3)],2),x(" "+a(p.value),1)],64))}};export{A as default};
