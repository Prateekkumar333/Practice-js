# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});


```javascript


# project 2 solution


const form = document.querySelector('form');
// this usecase will give you empty value
// const heigth = parseInt(document.querySelector('#heigth').value)


form.addEventListener('submit', function(event){
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  
  results.innerHTML =""

  if( height === "" || height < 0 || isNaN(height)){
    results.innerHTML = `please give a valid height ${height}`;
  }
  if( weight === "" || weight < 0 || isNaN(weight)){
    results.innerHTML = `please give a valid weight ${weight}`;
  
  } 
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    //show the result
    results.innerHTML = `<span>${bmi}</span>`

    if (bmi < 18.6) {
      results.innerHTML +=" Underweight"
       
    } else if (bmi <= 24.9) {
      results.innerHTML +=" Normal Range";
    } else if (bmi > 24.9) {
      results.innerHTML += " Overweight";
    }
  
})


```javascript

## project 3 solution code

const clock = document.getElementById('clock')


setInterval(function(){
  const date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
} ,1000)