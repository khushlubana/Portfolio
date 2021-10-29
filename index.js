const burgermenu = () => {
    const burger = document.querySelector("#burger");
    const dropdownlinks = document.querySelector("#linksid");
    burger.addEventListener('click', () => {
        burger.classList.toggle("fa-times");
        dropdownlinks.classList.toggle("links-active");
    })
    window.addEventListener('scroll', () => {
                burger.classList.remove("fa-times");
        dropdownlinks.classList.remove("links-active");
    })
}
const contactmenu = () => {
    const contactbutton = document.querySelector("#contactmenubutton");
    const contactform = document.querySelector(".contactform");
    contactbutton.addEventListener('click', () => {
        contactform.classList.toggle("contactform-show");
        contactbutton.classList.toggle("contactbutton-change");
    })
}
burgermenu()
contactmenu()
