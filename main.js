const h = document.getElementById("hamburger");
const c = document.getElementById("cancel");
const i = document.getElementById("item");

h.addEventListener('click', ()=>{
    h.style.display = "none";
    c.style.display = "inline-block";
    i.style.clipPath = "circle(200% at 100% 0%)"
});

c.addEventListener('click', ()=>{
    c.style.display = "none";
    h.style.display = "inline-block";
    i.style.clipPath = "circle(0% at 100% 0%)"
});
