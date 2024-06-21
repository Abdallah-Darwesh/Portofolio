const button = document.querySelector("button");
const body =document.querySelector("body");
const color =['red','green','black','white'];

body.style.backgroundColor='black';

button.addEventListener('click',changeB);

function changeB(){
    const colorindex=parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[colorindex];
}