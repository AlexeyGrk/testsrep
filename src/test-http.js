async function gerFruits(name) {
  const fruits = {
    kivi: "kivi",
    mango: "mango",
    apple: "apple",
  };

  return Promise.resolve(fruits[name]);
}
gerFruits().then(console.log);
