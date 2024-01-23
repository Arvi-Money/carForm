function isValidUrl(string) {
    try{
        new URL(string);
        return true;
    } catch(err){
        return false;
    }
}

function validate(data) {
    if (!data.name.value) {
        alert("Name must be entered!");
        data.name.focus();
        return false;
    }

    if (data.name.value.trim().length < 3) {
        alert("Name must be at least 4 characters long");
        data.name.focus();
        return false;
    }

    if (!data.price.value) {
        alert("Price must be entered");
        data.price.focus();
        return false;
    }

    if (data.price.value < 100) {
        alert("The price was low");
        data.price.focus();
        return false;
    }

    if (!Number(data.price.value )) {
        alert("The price must be entered in a number");
        data.price.focus();
        return false;
    }
    
    if (!data.color.value) {
        alert("The color must be select");
        data.color.focus();
        return false;
    }

    if (!data.img.value) {
        alert("Picture must be included");
        data.img.focus();
        return false;
    }

    if (data.type.value) {
        alert("Type must be entered");
        data.type.focus();
        return false;
    }
}

function getData() {
    let data = [];  
    if (localStorage.getItem("cars")) {
        data= JSON.parse(localStorage.getItem("cars"))
    }

    return data;
}

function createCard(car) {
    return`
    <div class="border row p-2 mb-2">
    <div class="col-2">
      <img width = "200"; height = "200"; src="${car.img}" alt="">
    </div>
    <div class="col-10">
      <div class="wrapper d-flex justify-content-between">
        <h3 class="fs-4">${car.name}</h3>
        <button class="btn btn-info text-white">More</button>
      </div>
      <h4>${car.price}</h4>
      <h4>${car.year}</h4>
      <h4>${car.color}</h4>
      <h4>${car.type}</h4>
      <p>${car.desc}</p>
    </div>
  </div>`
}

export {validate, getData, createCard}