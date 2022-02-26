const circularArrayRotation = (a, k, queries) => {
  // Write your code here
  Array.from({ length: k }).forEach(() => a.unshift(a.pop()));
  return queries.map((i) => a[i]);
};

const a = [1, 2, 3];
const k = 2;
const queries = [1, 2];

const result = circularArrayRotation(a, k, queries);
console.log(result);
