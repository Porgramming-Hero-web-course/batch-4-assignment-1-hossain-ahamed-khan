// Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.
// Hints: Use keyof 


function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
    return obj[key];

}



// const person = { name: "Alice", age: 30 };
// console.log(getProperty(person, "name"));