const cityName = document.getElementById("name");
const temperature = document.getElementById("temperature");
const desc = document.getElementById("description");
const inputElement = document.getElementById("inputValue");
const button = document.getElementById("search");
const othrct = document.getElementById("outofcity");
const descr = document.getElementById("desc");

window.addEventListener("load", () => {
  let lon;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lon = position.coords.longitude;
      lat = position.coords.latitude;
      time = position.timestamp;
      console.log(lon, lat, time);
      const apiKey = "01e4297d8df5706b0deac6d55ef033bd";
      const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
      fetch(
        url //, {
        //     method: "GET",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //   }
      )
        .then((response) => {
          // console.log(response);
          return response.json();
        })
        .then((data) => {
          console.log(data);
          cityName.innerHTML = data.name;
          temperature.innerHTML = data.main.temp;
          desc.innerHTML = data.weather[0].description;
        });

      // .catch((err) => {
      //   console.log(err);
      // });
    });
  }

  //   api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
});

button.onclick = function (event) {
  const input = inputElement.value;
  const link = `http://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=01e4297d8df5706b0deac6d55ef033bd`;

  event.preventDefault();
  fetch(link)
    .then((res) => {
      //    console.log(res.json());
      return res.json();
    })
    .then((data) => {
      othrct.innerHTML = data.main.temp;
      descr.innerHTML = data.weather[0].description;
    })

    .catch((err) => console.log(err));
};
