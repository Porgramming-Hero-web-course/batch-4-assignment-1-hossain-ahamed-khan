// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.


type Circle = {
    shape: "circle";
    radius: number;
}

type Rectangle = {
    shape: "rectangle";
    height: number;
    width: number;
}

type Shape = Circle | Rectangle;

function calculateShapeArea(shapeObj: Shape): number {
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