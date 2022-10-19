const lechButton = document.querySelector("#lech")
const somersbyButton = document.querySelector("#somersby")
const desperadosButton = document.querySelector("#desperados")
const harnasButton = document.querySelector("#harnas")

const spotlight = document.querySelector(".beer-box-spotlight")
const generalButton = document.querySelector(".beer-box-choice-holder-list-element-btn")

console.log(lechButton)
console.log(somersbyButton)
console.log(generalButton)

lechButton.addEventListener("click", lechFunction);
function lechFunction() {
    spotlight.classList.add("lech-bg")
    spotlight.classList.remove("somersby-bg", "desperados-bg", "harnas-bg")
}

somersbyButton.addEventListener("click", somersbyFunction)
function somersbyFunction() {
    spotlight.classList.add("somersby-bg")
    spotlight.classList.remove("lech-bg", "desperados-bg", "harnas-bg")
}

desperadosButton.addEventListener("click", desperadosFunction)
function desperadosFunction() {
    spotlight.classList.add("desperados-bg")
    spotlight.classList.remove("lech-bg", "harnas-bg", "somersby-bg")
}

harnasButton.addEventListener("click", harnasFunction)
function harnasFunction(){
    spotlight.classList.add("harnas-bg")
    spotlight.classList.remove("lech-bg", "desperados-bg", "somersby-bg")


}


