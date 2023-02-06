// 10001, 10101

function countZeros(binary_num) {
  let count = 0;
  for (let i = 0; i < binary_num.length; i++) {
    let element = binary_num[i];
    // let element = binary_num.length[i]
    if (element == 0) {
      count++;
    }
  }
  return count;
}
const result = countZeros("1000101");
console.log(result);
