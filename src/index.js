//https://api.github.com/users/

import api from "./api";

var usersCont = document.getElementById("users");

var btnSearch = document.querySelector(".js-btn-search");

var userBox = document.querySelector(".js-userInfo");

var users = {
  fabio: {
    login: "fabioaleixo",
    name: "Fábio Aleixo",
    avatar_url: "#",
    bio: "Lorem ipsum"
  }
};

var user = {};

function loadusers() {
  var listItem = document.createElement("li");
  var listName = document.createElement("p");
  listName.innerHTML = users.fabio.name;
  listItem.appendChild(listName);
  usersCont.appendChild(listItem);
}

function loadUser() {
  var userName = document.createElement("span");
  var userLogin = document.createElement("span");
  userName.innerHTML = user.name;
  userLogin.innerHTML = user.login;
  userBox.appendChild(userName);
  userBox.appendChild(userLogin);
}

async function searchUser(user) {
  const { data } = await api.get(`/${user}`);
  user = {
    name: data.name,
    login: data.login,
    avatar: data.avatar_url,
    bio: data.bio
  };

  console.log(user);
}

btnSearch.addEventListener("click", async function () {
  let userName = document.querySelector(".js-input-user").value;
  await searchUser(userName);
  console.log(user);
  loadUser();
});

loadusers();
