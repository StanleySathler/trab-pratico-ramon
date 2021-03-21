// exercicios 17, 18, 19, 20, 21

// 17
const arr = ["Rock", "Pagode"];

// 18
arr.push("Funk");

// 19
const midReplace = (arr, value) => {
  const mid = Math.round(arr.length / 2);
  arr[mid] = value;
};
midReplace(arr, "Axé");

// 20
console.log(arr.shift());

// 21
arr.unshift("Rap");
arr.unshift("Reggae");
