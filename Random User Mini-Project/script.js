const container = document.createElement("div");
container.className = "c-container";
const button = document.createElement("button");
button.className = "c-button";
button.textContent = "generate user";
const title = document.createElement("h2");
title.textContent = "random user generator";
title.className = "c-title";

const fetchUser = () => {
  fetch(`https://randomuser.me/api`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results[0]);
      renderCardGenerator(data.results[0]);
    });
};

function renderCardGenerator(user) {
  container.innerHTML = "";
  if (user.gender === "male") {
    document.body.style.backgroundColor = "rebeccapurple";
  } else {
    document.body.style.backgroundColor = "steelblue";
  }
  const smallContainer = document.createElement("div");
  smallContainer.className = "c-s-container";
  const img = document.createElement("img");
  img.src = ` ${user.picture.large}`;
  const name = document.createElement("p");
  name.textContent = `Name:${user.name.first} ${user.name.last}`;
  const email = document.createElement("p");
  email.textContent = `Email: ${user.email}`;
  const phone = document.createElement("p");
  phone.textContent = `Telephone Number: ${user.phone}`;
  const location = document.createElement("p");
  location.textContent = `Location: ${user.location.city} , ${user.location.state}`;
  const age = document.createElement("p");
  age.textContent = `Age: ${user.dob.age}`;
  appendChildren(smallContainer, [
    title,
    button,
    img,
    name,
    email,
    phone,
    location,
    age,
  ]);
  container.appendChild(smallContainer);
  document.body.appendChild(container);
}

function appendChildren(container, elements) {
  for (items of elements) {
    container.appendChild(items);
  }
}
button.addEventListener("click", fetchUser);
fetchUser();
