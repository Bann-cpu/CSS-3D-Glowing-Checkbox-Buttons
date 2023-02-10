const buttonClass  = document.querySelector(".buttons");
const labelClass = document.querySelector(".label");
const inputClass = document.querySelector("input");
const spanClass = document.querySelector("span");
const iClass = document.querySelector("i");

const iTransition = [
    {transform: 'rotate(0deg)', },
    {transform: 'rotate(180deg)'},
]

spanClass.addEventListener('click', () => {
    iClass.animate(iTransition);
    inputClass.animate(iTransition)
});

console.log('Le js fonctionne');