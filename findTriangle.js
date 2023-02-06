/* function triangleArea(a, b, c) {
  let s = (a + b + c) / 2;
  if (a + b <= c || b + c <= a || c + a <= b) {
    return;
  }
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}
const result = triangleArea(10, 10, 20);
console.log(result);
 */
function triangleArea(a, b, c) {
  let s = (a + b + c) / 2;
  if (s <= a || s <= b || s <= c) {
    return;
  }
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}
const result = triangleArea(19, 10, 19);
console.log(result);
