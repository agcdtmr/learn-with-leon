//Example fetch using DnD5eAPI - place subclasses in ul

// https://www.dnd5eapi.co/api/spells/

document.querySelector("button").addEventListener("click", getFetch);

const classUl = document.querySelector("#class");
const subclassUl = document.querySelector("#subclasses");

function getFetch() {
  const choice = document.querySelector("input").value;
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      //NAME
      document.querySelector("h2").innerText = data.name;
      //CLASSES
      classUl.innerHTML = "";
      data.classes.forEach((objt) => {
        console.log(objt.name);
        const li = document.createElement("li");
        li.textContent = objt.name;
        classUl.appendChild(li);
      });
      //SUBCLASSES
      subclassUl.innerHTML = "";
      data.subclasses.forEach((obj) => {
        console.log(obj.name);
        const li = document.createElement("li");
        li.textContent = obj.name;
        subclassUl.appendChild(li);
      });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
