const form = document.querySelector("#form");
const input = document.querySelector("#input");
const card = document.querySelector("#card");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // World wide weather Fake api

  axios(
    `https://api.weatherapi.com/v1/current.json?key=569c0fa5727f4e9387350542241406 &q=${input.value}&aqi=no`
  )
    .then((res) => {
      // Bootstrap card
      card.innerHTML += `
    <div class="bg-dark card align-items-center border border-light rounded " style="width: 20%;">
  <img src="${res.data.current.condition.icon}" class="card-img-top" id="image" alt="icon">
  <div class="card-body">
    <h5 class="card-title">City: ${res.data.location.name} </h5>
    <h6 class="card-title">Country:  ${res.data.location.country} </h6>
    <h6 class="card-title">Region:  ${res.data.location.region} </h6>
    <p class="card-text">Local-Time: ${res.data.location.localtime}</p>
    <p class="card-text">Weather: ${res.data.current.condition.text}</p>
    <p class="card-text">Temperature: ${res.data.current.temp_c}°C</p>
  </div>
</div>`;
      console.log(res.data);
    })
    .catch((err) => {
      card.innerHTML = `${err}`;
      console.log(err);
    });
});
