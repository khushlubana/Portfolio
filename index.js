const burgermenu = () => {
    const burger = document.querySelector("#burger");
    const dropdownlinks = document.querySelector("#linksid");
    burger.addEventListener('click', () => {
        burger.classList.toggle("fa-times");
        dropdownlinks.classList.toggle("linkson");
    })
}
burgermenu();
