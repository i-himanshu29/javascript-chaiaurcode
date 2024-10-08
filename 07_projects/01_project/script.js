// use link-https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fstyle.css,1-colorChanger%2Fchaiaurcode.js
// backgroundchange according to the click on particular box
const buttons = document.querySelectorAll('.button');
console.log(buttons);

const body = document.querySelector("body")

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){ // you can also use mouseover
        console.log(e)
        console.log(e.target)
        if(e.target.id==='grey'){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='white'){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id
        }
    });
});