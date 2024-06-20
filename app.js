
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const card = document.querySelector("#card");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  axios(
    `https://api.weatherapi.com/v1/current.json?key=569c0fa5727f4e9387350542241406 &q=${input.value}&aqi=no`
  )
    .then((res) => {
         
        card.innerHTML = `
    <div class="bg-dark card align-items-center " style="width: 18rem;">
  <img src="${res.data.current.condition.icon}" class="card-img-top" alt="icon">
  <div class="card-body">
    <h5 class="card-title">${res.data.location.name}</h5>
    <p class="card-text">${res.data.location.localtime}</p>
    <p class="card-text">${res.data.location.country}</p>
  </div>
</div>`
      console.log(res.data);
    })
    .catch((err) => {
        card.innerHTML = `${err}`
      console.log(err);
    });
});
