import{_ as u,u as b,r,c as _,I as d,o as f,a as v,b as l,t as o,n as s,d as g,e as w,F as x}from"./index-D943J5eR.js";async function h({lang:t}){return{...await(async()=>{switch(t.toLowerCase()){case"en":return u(()=>import("./Home-3AqPNgTo.js"),[],import.meta.url);case"sp":return u(()=>import("./Home-BXLqvP8x.js"),[],import.meta.url)}})()}}let p;const B=t=>{Swal.fire({title:t.title,showConfirmButton:!0,showCancelButton:!0,confirmButtonText:t.acp_btn,cancelButtonText:t.ccl_btn,html:`
    <div>
    <label class="basic-label">${t.label}</label>
    <br/>
    <input type="file" class="input-modal input-hidden" id="file-input" accept=".txt">
    <button class="input-modal btn btn-info" id="search-btn">${t.file_inp}</button>
    <br/>
    <input placeholder="${t.txt_inp_ph}" type="text" class="input-modal basic-input" id="txt-input">

    
    </div>
    


            
            `,customClass:{title:"txt-sw2",popup:"pop-sw2",confirmButton:"btn-sw2-confirm",cancelButton:"btn-sw2-cancel"}}).then(a=>{a.isConfirmed&&console.log(p)}),document.getElementById("search-btn").onclick=I},I=()=>{document.getElementById("file-input").onchange=t=>{const a=t.target.files[0];if(a){const e=new FileReader;e.onload=function(n){p=n.target.result,document.getElementById("txt-input").value=n.target.result},e.readAsText(a)}},document.getElementById("file-input").click()},y=l("br",null,null,-1),$={__name:"Home",setup(t){const a=b().params,e=r(d()),n=r({}),m=_(()=>{h({lang:a.lang}).then(i=>n.value=i)});return window.onresize=()=>{e.value=d()},(i,c)=>(f(),v(x,null,[l("h1",{class:s(`title-${e.value}`)},o(n.value.title),3),l("div",{class:s(`btn-cont-${e.value} text-center`)},[l("button",{class:s(`btn btn btn-outline-success btn-page-${e.value}`)},o(n.value.nwbtn),3),y,l("button",{onClick:c[0]||(c[0]=E=>g(B)(n.value.modals.load_modal)),class:s(`btn btn btn-outline-warning btn-page-${e.value}`)},o(n.value.loadbtn),3)],2),w(" "+o(m.value),1)],64))}};export{$ as default};
