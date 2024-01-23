import {validate, getData, createCard} from"./function.js";


const button = document.getElementById("button");
const name = document.getElementById("name");
const price = document.getElementById("price");
const year = document.getElementById("year");
const color = document.getElementById("color");
const type = document.getElementById("type");
const desc = document.getElementById("desc");
const img = document.getElementById("img");
const form = document.getElementById("form");
const dataWrapper = document.getElementById("data-wrapper");


button && button.addEventListener('click', function (e) {
    e.preventDefault();
    if (validate({name, price, color, type, img, desc, year})) {
        let car = {
            name: name.value,
            price: price.value,
            year: year.value,
            color: color.value,
            img: img.value,
            desc: desc.value,
            type: type.value,
            status: "active",
            id: Date.now()
        }

        let data = getData();
        data.push(car);
        localStorage.setItem("cars", JSON.stringify(data));
         
        form.reset();
    } else {
        console.log("Validatsiyadan o'tmadi");
    }
})

document.addEventListener('DOMContentLoaded', function (params) {
    let cars = getData();
    cars.length && cars.forEach (car =>{
        let card = createCard(car);
        dataWrapper.innerHTML += card;
    })
})
