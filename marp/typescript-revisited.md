---
marp: true
---

# Array Methods

---

# Array Methods

- For loops are hardly used in modern JavaScript/React
- Array methods are used instead
- Improves readability in most cases

---

# Map
- Creates a new array
- Elements are the result of the callback function on each element of the array
- Most used function in React.js, so make sure you know this one by heart

---

# With a for loop

```typescript
let fruits: string[] = ["🍎", "🍇", "🍒", "🍓", "🍑"];
let newFruits: string[] = [];
for (let fruit of fruits) {
    newFruits.push(fruit + fruit);
}
```

---

# With the map function

```typescript
let fruits: string[] = ["🍎", "🍇", "🍒", "🍓", "🍑"];
let newArray: number[] = numbers.map(fruit => `${fruit}${fruit}`);
```

---

# Filter

- Creates a new array
- Callback function is used to filter out elements


---

# With a for loop

```tsx
let fruits: string[] = ["🍎", "🍇", "🍒", "🍓", "🍑"];
let newFruits: string[] = [];
for (let fruit of fruits) {
    if (fruit !== "🍇") {
        newFruits.push(fruit);
    }
}
```

---

# With the filter function

```tsx
let fruits: string[] = ["🍎", "🍇", "🍒", "🍓", "🍑"];
let newFruits: string[] = fruits.filter(fruit => fruit !== "🍇");
```

---

# Reduce

- Creates a single value
- Callback function is used to reduce the array to a single value

---

# With a for loop

```tsx
let fruits: string[] = ["🍎", "🍇", "🍒", "🍓", "🍑"];
let newFruits: string = "";
for (let fruit of fruits) {
    newFruits += fruit;
}
```

# With the reduce function

```tsx
let fruits: string[] = ["🍎", "🍇", "🍒", "🍓", "🍑"];
let newFruits: string = fruits.reduce((acc, fruit) => acc + fruit);
```

---

# Find

- Returns the first element that matches the callback function
- Returns undefined if no element is found

---

# With a for loop

```tsx
let fruits: string[] = ["🍎", "🍇", "🍒", "🍓", "🍑"];
let newFruits: string | undefined;
for (let fruit of fruits) {
    if (fruit === "🍇") {
        newFruits = fruit;
        break;
    }
}
```

---

# With the find function

```tsx
let fruits: string[] = ["🍎", "🍇", "🍒", "🍓", "🍑"];
let newFruits: string | undefined = fruits.find(fruit => fruit === "🍇");
```

---

# FindIndex

- Returns the index of the first element that matches the callback function
- Returns -1 if no element is found

---

# FindIndex

```tsx
let fruits: string[] = ["🍎", "🍇", "🍒", "🍓", "🍑"];
let newFruits: number = fruits.findIndex(fruit => fruit === "🍇"); // 1
```

---

# Destructuring

---

# Destructuring
- Destructuring is a way to extract data from arrays and objects

---
# Array Destructuring

```tsx
let fruits: string[] = ["🍎", "🍇", "🍒", "🍓", "🍑"];
let [firstFruit, secondFruit, ...rest] = fruits;
```

---

# Object Destructuring

```tsx
let person : Person = {
    name: "John",
    age: 30,
    address: {
        street: "Main Street",
        city: "New York"
    }
};

let { name, age, address } = person;
```
---
# Object Destructuring with default value

```tsx
let person : Person = {
    name: "John",
    address: {
        street: "Main Street",
        city: "New York"
    }
};

let { name, age = 30, address } = person;
```
---
# Destructuring in function parameters

- Objects can be directly destructured in function parameters:

```tsx
const greet = (person: Person) => {
    let {name, age = 30} = person;
    console.log(`Hello ${name}, you are ${age} years old`);
}
```

becomes

```tsx
const greet = ({ name, age = 30 }: Person) => {
    console.log(`Hello ${name}, you are ${age} years old`);
}
```

---

# Function parameters cleanup

- If you have a function with a lot of parameters, you can use destructuring to make it more readable.
- You pass an object containing the parameters to the function.

```tsx
const greet = (name: string, age: number, address: Address) => {
    console.log(`Hello ${name}, you are ${age} years old`);
}
```

wordt

```tsx
const greet = ({ name, age, address }: Person) => {
    console.log(`Hello ${name}, you are ${age} years old`);
}
```

---

# Optional chaining

- Optional chaining is a way to check if a property exists before you use it.
- If the property does not exist, the rest of the code will not be executed.

```tsx
let person : Person = {
    name: "John",
    age: 30
};

if (person.address) {}
    console.log(person.address.street);
}
```

becomes

```tsx
console.log(person.address?.street);
```

---
# Nullish coalescing

- Nullish coalescing returns the right side if the left side is null or undefined.

```tsx
const foo = null ?? "bar";

const baz = 0 ?? 42;

console.log(person.address?.street ?? "123 Fake Street");
```

---

# !. (non-null assertion)

- Forces the compiler to ignore the null or undefined check.
- Use with caution!

```tsx
console.log(person.address!.street);
```

---

# Spread operator

- The spread operator is used to copy an array or object.

```tsx
let fruits: string[] = ["🍎", "🍇", "🍒", "🍓", "🍑"];
let newFruits: string[] = [...fruits];
```

---

# Object spread operator

```tsx
let person : Person = {
    name: "John",
    age: 30,
    address: {
        street: "Main Street",
        city: "New York"
    }
};

let newPerson: Person = {
    ...person,
    age: 31
}
```

