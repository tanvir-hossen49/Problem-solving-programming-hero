//একটা ফাংশন বানাবে যেটি একটি অ্যারে অফ অবজেক্ট রিসিভ করে প্যারামিটার হিসেবে।প্রতিটি অবজেক্টে একটি মানুষের নাম  এবং বয়স থাকবে। এখন তোমার কাজ হচ্ছে এই অ্যারে থেকে সবচেয়ে ছোট যে person কে খুঁজে বের করা।

let personObj = [
  { name: "sakib", age: 30 },
  { name: "samiul", age: 20 },
  { name: "sahid", age: 5 },
  { name: "samin", age: 10 },
];

function findSmallPerson(person) {
  let smallPerson = person[0];
  for (let i = 0; i < person.length; i++) {
    if (smallPerson.age > person[i].age) {
      smallPerson = person[i];
    }
  }
  return smallPerson;
}
const result = findSmallPerson(personObj);
console.log(result);
