// тут вариант первого практического задания, если вводить массив с инпута. сделано оно неправильно:
//  - я не разобралась, как остановить ввод, если это не число, пустая строка и тд, в общем, как получилось)

let numbers = [];

function addNumbers() {
    let template = numbers.map(num => `<li>${num}</li>`).join('\n');
    document.querySelector('ul').innerHTML = template;
   

}

addNumbers();

const btnAdd = document.querySelector('button');
const input = document.querySelector('input');

btnAdd.addEventListener('click', () => {
    numbers.push(+input.value);
    input.value = '';
    addNumbers();
})

//так как я не нашла, как остановить ввод с инпута, если введено не число, то на шаге ниже сортирую массив
const btnSort = document.getElementById('btnSort');
const sortNumbers = document.getElementById('sortNumbers');

btnSort.addEventListener ('click', () => {
    for (number of numbers) {
        numbers.sort(function(a, b) {return a - b});
        sortNumbers.value = numbers;

        console.log(numbers);
    }
})

//и вот тут, тоже так как я не нашла, как остановить ввод не чисел, отфильтровываю массив от не цифр
const btnFilter = document.getElementById('btnFilter');
const filtertNumbers = document.getElementById('filtertNumbers');

btnFilter.addEventListener ('click', () => {
    let result = numbers.filter((number) => number);
    filtertNumbers.value = result;
    console.log(result);
    numbers = result;
})

//тут суммирую то, что осталось после фильтрации
const btnSum = document.getElementById('btnSum');
const showSum = document.getElementById('sumNumbers');

btnSum.addEventListener ('click', () => {
    let sum = 0;
    for (let num of numbers) {
        sum +=num;
    }
    showSum.value = sum;
})