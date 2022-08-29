let numbers = [];

function addNumbers() {
    let template = numbers.map(num => `<li>${num}</li>`).join('\n');
    document.querySelector('ul').innerHTML = template;
   

}

addNumbers();

let btnAdd = document.querySelector('button');
let input = document.querySelector('input');

btnAdd.addEventListener('click', () => {
    numbers.push(+input.value);
    input.value = '';
    addNumbers();
})

let btnSort = document.getElementById('btnSort');
let sortNumbers = document.getElementById('sortNumbers');

btnSort.addEventListener ('click', () => {
    for (number of numbers) {
        numbers.sort(function(a, b) {return a - b});
        sortNumbers.value = numbers;

        console.log(numbers);
    }
})

let btnSum = document.getElementById('btnSum');
let showSum = document.getElementById('sumNumbers');

btnSum.addEventListener ('click', () => {
    let sum = 0;
    for (let num of numbers) {
        sum +=num;
    }
    showSum.value = sum;
})