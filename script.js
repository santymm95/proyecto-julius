const hambuger = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");
const hero = document.querySelector(".hero");

hambuger.addEventListener("click",() =>{
    hambuger.classList.toggle("active");
    navMenu.classList.toggle("active");
    hero.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=>{
    hambuger.classList.remove("active");
    navMenu.classList.remove("active");
    hero.classList.remove("active");
}))


