// const h2 = document.createElement("h2");
// h2.textContent = "this is new content";
// document.querySelector("body").appendChild(h2);

// select the button
const btnShow = document.getElementById("btn-show");

btnShow.addEventListener("click", function () {
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
      console.log(data);
      const cars = data;

      cars.forEach((car) => {
        const listItem = document.createElement("li");
        listItem.textContent = car.brand;
        document.querySelector("ul").appendChild(listItem);
      });
    });
});

document.querySelector("body").addEventListener("mousemove", function () {
  console.log("my mouse is moving");
});

document.querySelector("body").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    console.log(" you have pressed Enter");
  }
});
