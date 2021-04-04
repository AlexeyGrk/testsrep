const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Просторная квартира в центре",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Генри",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Пиши код ниже этой строки

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// Пиши код выше этой строки
// console.log(ownerName);
// console.log(ownerEmail);
// console.log(ownerPhone);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

const buttonRef = document.querySelector(".button-js");
console.log(buttonRef);
buttonRef.addEventListener("click", () => {
  buttonRef.textContent = "запрос отправлен";
  buttonRef.src =
    "https://pipcat.ru/wp-content/uploads/2016/12/563ef3ddf9b90e12f4b495c81.jpg";
  console.log("запрос на добавление в друзья отправлен");
});
