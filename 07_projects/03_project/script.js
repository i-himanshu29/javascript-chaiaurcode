//Digital Clock-

// use link -https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fstyle.css,3-DigitalClock%2Findex.html

const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')


// setInterval(() => { // control event
//
// }, interval);
setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
},1000)