// LEON'S CODE
document.querySelector("button").addEventListener("click", getFetch);

const STORAGE_KEY = "books";

function getFetch() {
  const choice = document.querySelector("input").value;
  console.log(choice);
  const url = `https://openlibrary.org/isbn/${choice}.json`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      localStorage.setItem(STORAGE_KEY, data.title);

      document.querySelector("h2").innerText =
        localStorage.getItem(STORAGE_KEY);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

// BEN'S CODE
// const isbn = 9780980200447;
// const choice = document.querySelector("input");

// document.querySelector("button").addEventListener("click", (event) => {
//   getFetch(choice.value);
//   console.log(event);
// });

// function getFetch(num) {
//   const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${num}&jscmd=data&format=json`;

//   fetch(url)
//     .then((res) => res.json()) // parse response as JSON
//     .then((data) => {
//       console.log(data[`ISBN:${num}`]);
//       const { title } = data[`ISBN:${num}`];
//       document.querySelector("h2").innerText = title;
//     })
//     .catch((err) => {
//       console.log(`error ${err}`);
//     });
// }
