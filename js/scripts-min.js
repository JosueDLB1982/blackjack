(()=>{"use strict";let e=[],t=["C","D","H","S"],l=["A","J","Q","K"],a=[],d=document.getElementById("btnAskCard"),s=document.getElementById("btnStop"),n=document.getElementById("btnNewGame"),r=document.querySelectorAll("small"),i=document.querySelectorAll(".display-cards"),o=()=>{e=[];for(let a=2;a<=10;a++)for(let d of t)e.push(`${a}${d}`);for(let s of t)for(let n of l)e.push(`${n}${s}`);return _.shuffle(e)},c=(t=2)=>{console.clear(),e=o(),a=[];for(let l=0;l<t;l++)a.push(0),r[l].innerText=0,i[l].innerHTML="";d.disabled=!1,s.disabled=!1},$=()=>0===e.length?alert("El deck esta vac\xedo"):e.pop(),g=e=>{let t=e.substring(0,e.length-1);return isNaN(t)?"A"==t?11:10:parseInt(t)},b=(e,t)=>(a[t]+=g(e),r[t].innerText=a[t],a[t]),u=(e,t)=>{let l=document.createElement("img");l.src=`assets/cards/${e}.webp`,l.classList.add("card"),i[t].append(l)},p=()=>{let[e,t]=a;setTimeout(()=>{e===t?(console.warn("No hay ganador"),alert("Nadie gana")):e>21||t<=21&&t>e?(console.warn("Perdiste el juego"),alert("Has perdido")):t>21&&(console.warn("Ganaste el juego"),alert("Has ganado"))},35)},f=e=>{let t=0;do{let l=$();t=b(l,a.length-1),u(l,a.length-1)}while(t<e&&e<=21);p()};d.addEventListener("click",()=>{let e=$(),t=b(e,0);u(e,0),t>21?(d.disabled=!0,s.disabled=!0,f(t)):21===t&&(d.disabled=!0,s.disabled=!0,f(t))}),s.addEventListener("click",()=>{d.disabled=!0,s.disabled=!0,f(a[0])}),n.addEventListener("click",()=>{c()})})();