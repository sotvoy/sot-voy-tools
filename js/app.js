const tools=[
{name:"Word Counter",category:"Text Tools",description:"Count words, characters, sentences and reading time."},
{name:"Character Counter",category:"Text Tools",description:"Count characters with or without spaces."},
{name:"Case Converter",category:"Text Tools",description:"Convert text between useful writing cases."},
{name:"Reading Time Calculator",category:"Text Tools",description:"Estimate how long text takes to read."},
{name:"Remove Duplicate Lines",category:"Text Tools",description:"Clean repeated lines from a list."},
{name:"Percentage Calculator",category:"Calculators",description:"Calculate percentages, increases and decreases."},
{name:"Age Calculator",category:"Calculators",description:"Calculate an exact age from a birth date."},
{name:"Discount Calculator",category:"Calculators",description:"Calculate discounts and final prices."},
{name:"Average Calculator",category:"Calculators",description:"Calculate the average of a set of numbers."},
{name:"Date Difference Calculator",category:"Calculators",description:"Find the time between two dates."},
{name:"JSON Formatter",category:"Developer Tools",description:"Format JSON into clean readable structure."},
{name:"JSON Validator",category:"Developer Tools",description:"Check whether JSON is valid."},
{name:"Base64 Encoder",category:"Developer Tools",description:"Encode text using Base64."},
{name:"URL Encoder",category:"Developer Tools",description:"Encode and decode URL components."},
{name:"Color Converter",category:"Developer Tools",description:"Convert common color formats."},
{name:"QR Code Generator",category:"Generators",description:"Create a QR code from text or a URL."},
{name:"Password Generator",category:"Generators",description:"Generate strong random passwords locally."},
{name:"Random Number Generator",category:"Generators",description:"Generate random numbers in a range."},
{name:"Image Compressor",category:"Image Tools",description:"Reduce image size in your browser."},
{name:"Image Resizer",category:"Image Tools",description:"Resize images to chosen dimensions."},
{name:"Countdown Timer",category:"Date & Time",description:"Create a simple countdown."},
{name:"Unit Converter",category:"Converters",description:"Convert common units quickly."}
];

const root=document.documentElement;
const themeToggle=document.getElementById("theme-toggle");
const themeIcon=document.getElementById("theme-icon");

function systemTheme(){return matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light";}
function renderThemeIcon(theme){
  themeIcon.innerHTML=theme==="light"
    ? '<circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.8"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>'
    : '<path d="M20 15.5A8 8 0 0 1 8.5 4 8.2 8.2 0 1 0 20 15.5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>';
}
function applyTheme(choice){
  const actual=choice==="system"?systemTheme():choice;
  root.dataset.theme=actual;
  localStorage.setItem("sot-voy-theme",choice);
  renderThemeIcon(actual);
}
function cycleTheme(){
  const current=localStorage.getItem("sot-voy-theme")||"system";
  applyTheme({system:"dark",dark:"light",light:"system"}[current]);
}
applyTheme(localStorage.getItem("sot-voy-theme")||"system");
themeToggle?.addEventListener("click",cycleTheme);
matchMedia("(prefers-color-scheme:dark)").addEventListener("change",()=>{if((localStorage.getItem("sot-voy-theme")||"system")==="system")applyTheme("system")});

const menuButton=document.getElementById("menu-button");
const mobileNav=document.getElementById("mobile-nav");
menuButton?.addEventListener("click",()=>{
  const open=mobileNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded",String(open));
});
mobileNav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
  mobileNav.classList.remove("open");menuButton.setAttribute("aria-expanded","false");
}));

const input=document.getElementById("tool-search");
const results=document.getElementById("search-results");

function selectTool(name){
  input.value=name;
  results.classList.remove("visible");
  input.focus();
  console.log("Selected tool:",name);
}
function searchTools(value){
  const q=value.trim().toLowerCase();
  if(!q){results.classList.remove("visible");results.innerHTML="";return;}
  const matches=tools.filter(t=>(t.name+" "+t.category+" "+t.description).toLowerCase().includes(q)).slice(0,7);
  results.innerHTML=matches.length?matches.map(t=>`<a class="search-result" href="#" data-tool-search="${t.name}"><div><strong>${t.name}</strong><small>${t.category} · ${t.description}</small></div><span>↗</span></a>`).join(""):`<div class="search-result"><div><strong>No tools found</strong><small>Try a different word.</small></div></div>`;
  results.classList.add("visible");
  results.querySelectorAll("[data-tool-search]").forEach(el=>el.addEventListener("click",e=>{e.preventDefault();selectTool(el.dataset.toolSearch)}));
}
input?.addEventListener("input",e=>searchTools(e.target.value));
document.addEventListener("keydown",e=>{
  const typing=["INPUT","TEXTAREA"].includes(document.activeElement?.tagName);
  if(e.key==="/"&&!typing){e.preventDefault();input?.focus();}
  if(e.key==="Escape"){results?.classList.remove("visible");input?.blur();}
});
document.addEventListener("click",e=>{if(!e.target.closest("#hero-search"))results?.classList.remove("visible")});

document.querySelectorAll("[data-tool]").forEach(card=>card.addEventListener("click",e=>{
  e.preventDefault();selectTool(card.dataset.tool);window.scrollTo({top:0,behavior:"smooth"});
}));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);}});
},{threshold:.12});
document.querySelectorAll(".reveal-on-scroll").forEach(el=>observer.observe(el));

document.querySelectorAll(".spotlight-card").forEach(card=>{
  card.addEventListener("pointermove",e=>{
    const r=card.getBoundingClientRect();
    card.style.setProperty("--mx",`${e.clientX-r.left}px`);
    card.style.setProperty("--my",`${e.clientY-r.top}px`);
  });
});

document.getElementById("current-year").textContent=new Date().getFullYear();
