"use strict";
// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
function calculateShapeArea(shapeObj) {
    if (shapeObj.shape === "circle") {
        return Math.PI * shapeObj.radius ** 2;
    }
    else if (shapeObj.shape === "rectangle") {
        return shapeObj.height * shapeObj.width;
    }
    else {
        throw new Error("Unknown shape type");
    }
}
console.log(calculateShapeArea({ shape: "circle", radius: 5 }));
console.log(calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
}));
