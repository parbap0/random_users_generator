const displayUsers = function () {
  document.querySelector(".main").innerHTML = "";
  fetch("https://randomuser.me/api?results=10")
    .then((res) => res.json())
    .then((data) => {
      resultsArray = data.results;
      for (let i = 0; i < resultsArray.length; i++) {
        createUsers(resultsArray[i]);
      }
    });
};

const createUsers = function (ele) {
  let card = document.createElement("article");
  let userImage = document.createElement("img");
  userImage.src = `${ele.picture.large}`;
  let userName = document.createElement("h1");
  userName.innerText = `${
    ele.name.title + " " + ele.name.first + " " + ele.name.last
  }`;
  let userCity = document.createElement("p");
  userCity.innerText = `${ele.location.city}`;
  let userCountry = document.createElement("p");
  userCountry.innerText = `${ele.location.country}`;
  let userContact = document.createElement("p");
  userContact.innerText = `${ele.cell}`;

  card.appendChild(userImage);
  card.appendChild(userName);
  card.appendChild(userCity);
  card.appendChild(userCountry);
  card.appendChild(userContact);
  document.querySelector(".main").appendChild(card);
};
