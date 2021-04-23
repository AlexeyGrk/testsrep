// const nClassin = new Class("Anakonda");

// const arrowFn = () => {
//   console.log("Hello Dist");
// };
// import Siema from "siema";
// const mySiema = new Siema({
//   duration: 1000,
//   perPage: 1,
//   startIndex: 0,
//   draggable: true,
//   multipleDrag: true,
//   threshold: 20,
// });
// document.querySelector(".prev").addEventListener("click", () => mySiema.prev());
// document.querySelector(".next").addEventListener("click", () => mySiema.next());
const namesObj = {
  name1: "Alexey",
  name2: "Bobby",
  name3: "Anna",
  name4: "Vlad",
};
const saveNamesUsers = JSON.stringify(namesObj);

const parseObjNamesUsers = JSON.parse(saveNamesUsers);
// console.log(parseObjNamesUsers);
localStorage.setItem("data", JSON.stringify(parseObjNamesUsers));

console.log(JSON.parse(localStorage.getItem("data")));
