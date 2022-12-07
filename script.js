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
      apiCars = [...data];

      cars.forEach((car) => {
        const listItem = document.createElement("li");
        listItem.textContent = car.brand;
        document.querySelector("ul").appendChild(listItem);
      });
    });
}

// document.querySelector("body").addEventListener("mousemove", function () {
//   console.log("my mouse is moving");
// });

// document.querySelector("body").addEventListener("keypress", function (event) {
//   if (event.key === "Enter") {
//     console.log(" you have pressed Enter");
//   }
// });
