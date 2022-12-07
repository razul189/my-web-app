// const h2 = document.createElement("h2");
// h2.textContent = "this is new content";
// document.querySelector("body").appendChild(h2);

let apiCars = [];

document.addEventListener("DOMContentLoaded", main);

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
