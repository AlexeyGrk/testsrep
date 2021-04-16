// const nClassin = new Class("Anakonda");

// const arrowFn = () => {
//   console.log("Hello Dist");
// };
import Siema from "siema";
const mySiema = new Siema({
  duration: 1500,
  perPage: 1,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
});
document.querySelector(".prev").addEventListener("click", () => mySiema.prev());
document.querySelector(".next").addEventListener("click", () => mySiema.next());
