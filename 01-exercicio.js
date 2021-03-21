const grades = [68, 75, 19];
const avg = (array) =>
  array.reduce((prev, curr) => prev + curr, 0) / array.length;

console.log(avg(grades));
