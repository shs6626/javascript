const user = {
  name: "ozil",
  number: 10,
};

localStorage.setItem("user", JSON.stringify(user));
console.log(JSON.parse(localStorage.getItem("user")));
