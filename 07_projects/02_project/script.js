//-> use link-https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fstyle.css,2-BMICalculator%2Findex.html
// BMI calculator
const form = document.querySelector('form')

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height).value)// form ke bahar likhne par null value ayegi

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    //checks 
    if(height === ''|| height<0 ||isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }
    // results.innerHTML = `${height}`;
    else if(weight === ''|| weight<0 ||isNaN(weight)){
        results.innerHTML = `Please give a valid height ${weight}`;
    }else{
        const BMI = (weight/((height*height)/10000)).toFixed(2)
        // show the result
        results.innerHTML = `<span>${BMI}</span>`
    }
})