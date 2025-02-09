const switchbutton = document.querySelector(".switchbutton")

const switchbackground = document.querySelector(".switchbackground")

const body = document.querySelector("body")

switchbackground.addEventListener("click", () => {
    body.classList.toggle("light");
    switchbackground.classList.toggle("on");
})