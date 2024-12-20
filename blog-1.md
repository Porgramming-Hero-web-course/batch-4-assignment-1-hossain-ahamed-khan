<!------------ The significance of union and intersection types in Typescript.  ------------------->

TypeScript, a supercharged version of JavaScript crafted by Microsoft, brings a new level of reliability and scalability to web development. One of its most powerful features is its type system, which not only enhances tooling and detects errors early but also offers advanced tools for handling complex data structures. Among these tools, union and intersection types stand out, offering remarkable flexibility and clarity in code.

Union Types:
Union types enable us to define types that can hold different kinds of values. Imagine we’re creating a function that can accept either strings or numbers. With union types, TypeScript ensures that our function can handle both scenarios correctly. Let’s dive into an example:

function checkInputType(value: string | number) {
    if (typeof value === "string"){
        console.log("This is a string");
    }
    else {
        console.log("This is a number");
    }
}

checkInputType('hello'); // Output: This is a string
checkInputType(30);      // Output: This is a number

Here, checkInputType can take either a string or a numberas its argument. TypeScript guarantees that we handle both possibilities properly. If we try passing any other type, TypeScript will flag it as an error during compilation, ensuring type safety.


Intersection Types:
Intersection types, on the other hand, let us merge multiple types into a single one, incorporating all the properties and methods from each type. This proves invaluable when dealing with object types and creating composite types from existing ones. Let’s illustrate this with an example:

interface DeviceName {
  brand: string;
  model: string;
}

interface DeviceInfo {
  ram: number;
  rom: number;
  camera: string;
}

type DeviceDetails = DeviceName & DeviceInfo;

const samsungMobile: DeviceDetails = {
  brand: 'Samsung',
  model: 'S20',
  ram: 6,
  rom: 128,
  camera: '50 MP'
};

In this snippet, DeviceDetails combines the properties of both DeviceName and DeviceInfo interfaces. This allows us to create objects that fulfil the requirements of both interfaces, ensuring our data adheres to a specific structure.