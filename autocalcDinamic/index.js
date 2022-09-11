const bmwModels = ['BMW X1', 'BMW X2', 'BMW X3'];
const nissanModels = ['Qashkai', 'X-Trail', 'Pathfinder'];
const mazdaModels = ['Mazda 6', 'Mazda 3', 'Mazda 2'];

function selectBrand(sender) {
    if (sender.options[sender.selectedIndex].value == 'none')
    document.getElementById('model').style.display = 'none';
    else
    document.getElementById('model').style.display = 'block';

    let optionsString = '';
    if (sender.options[sender.selectedIndex].value == '100') {
        for (let model of bmwModels)
        optionsString +=`<option>${model}</option>`;
    }
    if (sender.options[sender.selectedIndex].value == '200') {
        for (let model of mazdaModels)
        optionsString +=`<option>${model}</option>`;
    }
    if (sender.options[sender.selectedIndex].value == '300') {
        for (let model of nissanModels)
        optionsString +=`<option>${model}</option>`;
    }
    document.getElementById('model').innerHTML = optionsString;
}

function calc() {

    const prices = document.querySelectorAll('.car_price');

    let finalPrice = 0;
    for (let price of prices) {
        console.log(price);
        let currentPrice;
        if (price.type == "checkbox" || price.type == "radio") {
            if (price.checked)
                currentPrice = +price.value;
            else currentPrice = 0;
        } else {
            currentPrice = +price.value;
        }

        finalPrice = finalPrice + currentPrice;
    }

    document.getElementById('result').innerText = "Стоимость вашего автомобиля " + finalPrice + " рублей";
}