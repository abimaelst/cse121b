/* LESSON 3 - Programming Tasks */

/* Profile Object  */

window.onload = () => {
  const myProfile = {};

  /* Populate Profile Object with placesLive objects */

  myProfile.name = "Abimael S. Tavares";
  myProfile.photo = "images/me.JPG";
  myProfile.favoriteFoods = ["pasta", "banana", "orange", "apple", "bread"];
  myProfile.hobbies = ["study", "jiu-jitsu", "swimming"];
  myProfile.placesLived = [];

  myProfile.placesLived.push({ place: "Fortaleza, CE", length: "35 Years" });
  myProfile.placesLived.push({ place: "Iguatu, CE", length: "3 Years" });

  /* DOM Manipulation - Output */

  const { name, photo, favoriteFoods, hobbies, placesLived } = myProfile;

  /* Name */

  document.querySelector("#name").textContent = name;

  /* Photo with attributes */

  const photoElement = document.querySelector("#photo");

  photoElement.setAttribute("src", photo);
  photoElement.setAttribute("alt", name);

  /* Favorite Foods List*/

  const favoriteFoodsUl = document.querySelector("#favorite-foods");

  favoriteFoods.forEach((food) => {
    const li = document.createElement("li");
    li.textContent = food;
    favoriteFoodsUl.appendChild(li);
  });

  /* Hobbies List */

  const hobbiesUl = document.querySelector("#hobbies");

  hobbies.forEach((hobbie) => {
    const li = document.createElement("li");
    li.textContent = hobbie;
    hobbiesUl.appendChild(li);
  });

  /* Places Lived DataList */
  const placesLivedEl = document.querySelector("#places-lived");

  placesLived.forEach(({ place, length }) => {
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");

    dt.textContent = place;
    dd.textContent = length;

    placesLivedEl.appendChild(dt);
    placesLivedEl.appendChild(dd);
  });
};
