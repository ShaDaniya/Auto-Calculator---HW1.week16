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