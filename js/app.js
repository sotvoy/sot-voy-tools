const tools=[["Word Counter","Text Tools","Count words, characters, sentences and reading time."],["Character Counter","Text Tools","Count characters."],["Case Converter","Text Tools","Transform writing cases."],["Reading Time Calculator","Text Tools","Estimate reading time."],["Percentage Calculator","Calculators","Calculate percentages and changes."],["Age Calculator","Calculators","Calculate an exact age."],["Average Calculator","Calculators","Find an average."],["Discount Calculator","Calculators","Calculate discounts."],["Date Difference Calculator","Calculators","Compare dates."],["JSON Formatter","Developer Tools","Format JSON."],["JSON Validator","Developer Tools","Validate JSON."],["Base64 Encoder","Developer Tools","Encode Base64."],["URL Encoder","Developer Tools","Encode URLs."],["Color Converter","Developer Tools","Convert color formats."],["QR Code Generator","Generators","Create QR codes."],["Password Generator","Generators","Generate passwords."],["Random Number Generator","Generators","Generate random numbers."],["Image Compressor","Image Tools","Compress images."],["Image Resizer","Image Tools","Resize images."],["Countdown Timer","Date & Time","Create countdowns."],["Unit Converter","Converters","Convert units."]];

const $=s=>document.querySelector(s);
const root=document.documentElement;
$("#theme").onclick=()=>{const t=root.dataset.theme==="light"?"dark":"light";root.dataset.theme=t;localStorage.setItem("sot-theme",t)};
root.dataset.theme=localStorage.getItem("sot-theme")||"dark";

const menu=$("#menu"),mobile=$("#mobile");
menu.onclick=()=>mobile.classList.toggle("open");
mobile.querySelectorAll("a").forEach(a=>a.onclick=()=>mobile.classList.remove("open"));

const input=$("#search"), results=$("#results");
function search(q){q=q.trim().toLowerCase();if(!q){results.style.display="none";return}const f=tools.filter(t=>t.join(" ").toLowerCase().includes(q)).slice(0,7);results.innerHTML=f.length?f.map(t=>`<a class="result" href="#" data-name="${t[0]}"><div><strong>${t[0]}</strong><small>${t[1]} · ${t[2]}</small></div>↗</a>`).join(""):`<div class="result"><div><strong>No matching tool yet</strong><small>Try text, JSON, image or percentage.</small></div></div>`;results.style.display="block";results.querySelectorAll("[data-name]").forEach(a=>a.onclick=e=>{e.preventDefault();input.value=a.dataset.name;results.style.display="none"})}
input.oninput=e=>search(e.target.value);
document.addEventListener("keydown",e=>{if(e.key==="/"&&document.activeElement!==input){e.preventDefault();input.focus()}if(e.key==="Escape"){results.style.display="none"}});
document.addEventListener("click",e=>{if(!e.target.closest("#searchbox"))results.style.display="none"});
document.querySelectorAll("[data-q]").forEach(b=>b.onclick=()=>{input.value=b.dataset.q;search(input.value);input.focus()});
document.querySelectorAll("[data-tool]").forEach(a=>a.onclick=e=>{e.preventDefault();input.value=a.dataset.tool;window.scrollTo({top:0,behavior:"smooth"});input.focus()});
$("#year").textContent=new Date().getFullYear();
