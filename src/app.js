/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["My pet", "My grandma", "My couple", "My teacher"];
  let what = ["stole", "throw", "ate", "hide", "kept"];
  let object = ["my homework", "my car", "my lunch", "my fishes", "my kid"];
  let where = [
    "at home",
    "in the school",
    "in the library",
    "in my bedroom",
    "in the restaurant"
  ];

  let randomWho = () => {
    let randomNum = Math.floor(Math.random() * who.length);
    return who[randomNum];
  };
  let randomWhat = () => {
    let randomNum = Math.floor(Math.random() * what.length);
    return what[randomNum];
  };
  let randomObject = () => {
    let randomNum = Math.floor(Math.random() * object.length);
    return object[randomNum];
  };
  let randomWhere = () => {
    let randomNum = Math.floor(Math.random() * where.length);
    return where[randomNum];
  };

  let generateExcuse = () => {
    return `${randomWho()} ${randomWhat()} ${randomObject()} ${randomWhere()}!!`;
  };

  document.querySelector("h2").innerHTML = "You can't believe me but...";
  console.log(generateExcuse());

  document.querySelector(".excuse1").innerHTML = generateExcuse();
  let excuse = document.querySelector("button");
  excuse.addEventListener("click", function() {
    document.querySelector(".excuse1").innerHTML = generateExcuse();
  });
};
