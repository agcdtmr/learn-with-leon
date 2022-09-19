//Create a button that adds 1 to a botScore stored in localStorage
const STORAGE_KEY = "botScore";

if (!localStorage.getItem(STORAGE_KEY)) {
  localStorage.setItem(STORAGE_KEY, 0);
}

document.querySelector("button").addEventListener("click", addAnotherOne);

function addAnotherOne() {
  let botScoreVal = Number(localStorage.getItem(STORAGE_KEY));
  botScoreVal += 1;
  localStorage.setItem(STORAGE_KEY, botScoreVal);
}
