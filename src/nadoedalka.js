import BSN from "bootstrap.native/dist/bootstrap-native.esm.min.js";
let promtCounter = 0;
let hasSubscribed = false;
const MODAL_DELAY = 1000;
const MAX_PROMT_ATTEMPS = 3;
const modal = new BSN.Modal(".modal");
const refs = {
  closeBth: document.querySelector(".btn-secondary"),
  modalDiv: document.querySelector(".modal"),
  subscribedBtn: document.querySelector(".btn-primary"),
};
console.log(refs.subscribedBtn);
openModal();
refs.closeBth.addEventListener("click", (e) => {
  modal.hide();
});

refs.modalDiv.addEventListener("hide.bs.modal", openModal);
refs.subscribedBtn.addEventListener("click", onSubscribedBtnClick);
function openModal() {
  if (promtCounter === MAX_PROMT_ATTEMPS || hasSubscribed) {
    console.log("Max numbers or subsribed for ours");
    return;
  }
  setTimeout(() => {
    modal.show();
  }, MODAL_DELAY);
  promtCounter += 1;
  console.log("Открываем надоедалку");
}

function onSubscribedBtnClick() {
  hasSubscribed = true;
  modal.hide();
}
