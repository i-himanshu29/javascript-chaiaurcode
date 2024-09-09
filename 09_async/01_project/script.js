

// <!-- use link - https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fstyle.css,1-colorChanger%2Fchaiaurcode.js -->
//<!-- Unlimited color -->

// javascript code------------unlimited color
//generate a random color


const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color ='#'
    for(let i = 0;i<6;i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

//console.log(Math.random() * 16);
//console.log(Math.floor(Math.random() * 16));

let intervalID;
const startChangingColor = function(){
    if(!intervalID){
        intervalID = setInterval(changeBgColor,1000);
    }
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChangingColor = function(){
    clearInterval(intervalID)
    intervalID = null;
}

document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)

