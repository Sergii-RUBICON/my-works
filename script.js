let page = document.querySelector('.page');
let themButton = document.querySelector('.theme-button');
themButton.onclick = function () {
console.log ("onclick worked")
page.classList.toggle('dark-theme');
};