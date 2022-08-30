//прочитала в комментариях в группе, что можно первое задание сделать через prompt, вот тут оно

function sumInput() {
    const arrNumbers = [];

    while (true) {
        let number = prompt('Введите какое-нибудь число');

        if (number === '' || number === null || !isFinite(number)) break;

        arrNumbers.push(+number);
        console.log(arrNumbers);
    }

    const btnSort = document.getElementById('btnSort');
    const sortNumbers = document.getElementById('sortNumbers');

btnSort.addEventListener ('click', () => {
    for (number of arrNumbers) {
        arrNumbers.sort(function(a, b) {return a - b});
        sortNumbers.value = arrNumbers;

        console.log(arrNumbers);
    }
})

const btnSum = document.getElementById('btnSum');
const showSum = document.getElementById('sumNumbers');

btnSum.addEventListener ('click', () => {
    let sum = 0;
    for (let num of arrNumbers) {
        sum +=num;
    }
    showSum.value = sum;
})

}

alert(sumInput());