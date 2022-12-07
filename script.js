let apiCars = [];

document.addEventListener("DOMContentLoaded", main);

// select all the inputs and form
const form = document.querySelector("form");
const carModel = document.querySelector("#car-model");
const carBrand = document.querySelector("#car-brand");
const carPrice = document.querySelector("#car-price");

// select search input
const search = document.querySelector(".search");

// adding event listener for search box
search.addEventListener("keypress", function (event) {

  const value = event.target.value;
  // tesla =TESLA
  // tes = TES
  const filteredCars = apiCars.filter(function (car) {
    if (car.brand.toUpperCase().includes(value.toUpperCase())) {
      return car;
    }
  });
  showCars(filteredCars);
});

form.addEventListener("submit", function (event) {
  event.preventDefault();


  const newCar = {
    model: carModel.value,
    brand: carBrand.value,
    price: carPrice.value,
  };

  fetch("http://localhost:3000/cars", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newCar),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
});


function main() {
  fetch("http://localhost:3000/cars/")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const cars = data;
      // keeping cars in global variable for later use
      apiCars = [...cars]; //spread operator
      showCars(cars);
    });
}

function showCars(cars) {
  let carsList = document.querySelector(".cars");
  carsList.innerHTML = "";

  cars.forEach((car) => {
    const listItem = document.createElement("li");
    listItem.textContent = car.brand;
    carsList.appendChild(listItem);
  });
}
