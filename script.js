// const h2 = document.createElement("h2");
// h2.textContent = "this is new content";
// document.querySelector("body").appendChild(h2);

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



form.addEventListener("submit", function (event) {
  event.preventDefault();

  const newCar = {
    model: carModel.value,
    brand: carBrand.value,
    carPrice: carPrice.value,
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
  fetch("http://localhost:3000/cars/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const cars = data;

      // keeping cars in global variable for later use
      apiCars = [...data];
      showCars(cars);
    });
}

function showCars(cars) {
  let carsList = document.querySelector(".cars");

  cars.forEach((car) => {
    const listItem = document.createElement("li");
    listItem.textContent = car.brand;
    carsList.appendChild(listItem);
  });
}
