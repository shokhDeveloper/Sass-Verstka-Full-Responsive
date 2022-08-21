window.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", () => {
        let navbar = document.querySelector(".navbar")
        navbar.classList.toggle("stick", window.scrollY > 0 )
        console.log(navbar)
        
    })
})
let burgerToggle = () => {
    let burgerImg = document.getElementById("burger-Img")
    let navigation  = document.querySelector(".navigation")
    burgerImg.addEventListener("click", () => {
        navigation.classList.toggle("active")
    })
}
burgerToggle()