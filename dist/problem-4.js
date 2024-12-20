"use strict";
// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
function calculateShapeArea(shapeObj) {
    if (shapeObj.shape === "circle") {
        const area = Math.PI * shapeObj.radius ** 2;
        return area;
    }
    else if (shapeObj.shape === "rectangle") {
        const area = shapeObj.height * shapeObj.width;
        return area;
    }
    else {
        throw new Error("Invalid shape");
    }
}
// console.log(calculateShapeArea({ shape: "circle", radius: 5 }));
// console.log(calculateShapeArea({
//     shape: "rectangle",
//     width: 4,
//     height: 6,
// }));
