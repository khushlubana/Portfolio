let circleshapevar = document.querySelector("#circleshape");
let sidepanelvar = document.querySelector(".sidepanel");
//onlick
let counter = 0;
circleshapevar.addEventListener("click", function () {
    console.log(counter);
    if (counter == 0) {
        sidepanelvar.style.width = "15vw";
        circleshapevar.style.marginRight = "15vw";
        circleshapevar.style.backgroundColor = "blue";
        counter++;
    }
    else{
        sidepanelvar.style.width = "0";
        circleshapevar.style.marginRight = "0";
        circleshapevar.style.backgroundColor = "pink";
        counter--;
    }
});