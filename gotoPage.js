const maleBtn = document.querySelector(".maleSelect");
const femaleBtn = document.querySelector(".femaleSelect");
const neutralBtn = document.querySelector(".neutralSelect");


function gotoLink(){
    maleBtn.addEventListener("click", () => {window.location.href = "male.html";});
    femaleBtn.addEventListener("click", () => {window.location.href = "female.html";});
    neutralBtn.addEventListener("click", () => {window.location.href = "neutral.html";});
}

gotoLink()
