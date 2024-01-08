//String 문자열

arsenal = "      arsenal champion      ";
console.log(arsenal);

const result = arsenal.indexOf("champion");
console.log(result);

const replace = arsenal.replace("champion", "winner");
console.log(replace);

const trim = arsenal.trim();
console.log(trim);

//숫자 math

const pi = 3.14159265358979;

const toFixed = pi.toFixed(2);
console.log(typeof toFixed);

const integer = parseInt(toFixed);
console.log(integer);

//배열
const arsenalName = ["rice", "saka", "arteta"];

const forEach = arsenalName.forEach((arsenalName, i) => {
  console.log(arsenalName, i);
});
console.log(forEach);

const map = arsenalName.map((name, index) => ({
  id: index,
  name: name,
}));

console.log(map);

const numbers = [1, 2, 3, 4, 5];

const a = numbers.map((number) => {
  return number < 3;
});
console.log(a);

const b = numbers.filter((number) => {
  return number < 3;
});
console.log(b);

//push : 뒤에 추가 unshift : 앞에 추가 reverse

//Object
const henry = {
  name: "henry",
  number: 4,
};

const keys = Object.keys(henry);
console.log(henry);

console.log(henry["number"]);

const values = keys.map((key) => henry[key]);
console.log(values);
