// 1. Concatenate multiple strings
const concatenateStrings = (...strings) => strings.join(" ");

console.log(concatenateStrings("Hello", "world", "!"));
console.log(concatenateStrings("JavaScript", "is", "fun", "to", "learn."));

// 2. Merge two arrays
const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays(["a", "b"], ["c", "d", "e"]));

// 3. Concatenate strings with a separator
const concatenateWithSeparator = (separator, ...strings) =>
  strings.join(separator);

console.log(concatenateWithSeparator("-", "apple", "orange", "banana"));
console.log(concatenateWithSeparator(", ", "red", "green", "blue", "yellow"));

// 4. Extract object properties using destructuring
const extractObjectValues = ({ name, age }) => `Name: ${name}, Age: ${age}`;

console.log(extractObjectValues({ name: "Alice", age: 25 }));
console.log(extractObjectValues({ name: "Bob", age: 30 }));

// 5. Extract array elements using destructuring
const extractArrayValues = ([first, second, third]) =>
  `Values: ${first}, ${second}, ${third}`;

console.log(extractArrayValues([1, 2, "Hello", 3]));
console.log(extractArrayValues(["apple", "orange", "banana"]));

// 6. Extract values from a nested object
const extractNestedValues = ({ data: { firstName, lastName, age } }) =>
  `${firstName} ${lastName} will be ${age + 5} years old in five years.`;

console.log(
  extractNestedValues({
    data: { firstName: "Priya", lastName: "Gupta", age: 20 },
  })
);
console.log(
  extractNestedValues({ data: { firstName: "John", lastName: "Doe", age: 25 } })
);

// 7. Restructure and rename object properties
const printInfo = ({ name: { firstName, lastName }, department }) =>
  `${firstName} ${lastName} works in ${department} department.`;

console.log(
  printInfo({ name: { firstName: "John", lastName: "Doe" }, department: "IT" })
);
console.log(
  printInfo({
    name: { firstName: "Alice", lastName: "Smith" },
    department: "Legal",
  })
);

// 8. Provide default values and extract object properties
const printUserDetails = ({
  name = "anonymous",
  username = "anonymous",
  post = "Hello World!",
}) => `${username} posted "${post}"`;

console.log(
  printUserDetails({
    name: "John",
    username: "john",
    post: "Hello this is John. I am from England.",
  })
);
console.log(printUserDetails({}));

// 9. Check if a number is even or odd
const checkEvenOdd = (num) =>
  `${num} is ${num % 2 === 0 ? "an even" : "an odd"} number.`;

console.log(checkEvenOdd(8));
console.log(checkEvenOdd(15));

// 10. Check discount eligibility
const checkDiscountEligibility = (amount, isPremium) =>
  `You are eligible for a ${
    amount > 100 && isPremium ? "10%" : "5%"
  } discount.`;

console.log(checkDiscountEligibility(120, true));
console.log(checkDiscountEligibility(90, false));

// 11. Merge two objects using spread operator
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

const object1 = { name: "Alice", age: 30 };
const object2 = { city: "London", country: "UK" };
console.log(mergeObjects(object1, object2));

// 12. Add a new key-value pair without modifying the original object
const addKeyValuePair = (obj, key, value) => ({ ...obj, [key]: value });

const object = { name: "Dave", age: 25 };
console.log(addKeyValuePair(object, "city", "New York"));
