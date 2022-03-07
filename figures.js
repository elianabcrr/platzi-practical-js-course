// Square
const sideSquare = 5;
    const perimeterSquare = sideSquare * 4;
    const areaSquare = sideSquare * sideSquare;

console.group("Square");
    console.log("The square sides measure: "+ sideSquare + " cm");
    console.log("The square perimeter is: "+ perimeterSquare+ " cm");
    console.log("The squeare area is: "+ areaSquare+ " cm^2");
console.groupEnd();

// triangle
const sideTriangle1 = 6;
const sideTriangle2 = 6;
const baseTriangle = 4;
const heightTriangle = 5.5;
const perimeterTriangle = sideTriangle1 + sideTriangle2 + baseTriangle;
const areaTriangle = (baseTriangle*heightTriangle) /2;

console.group("Triangle");
    console.log("The side of triangle measures: "
    + sideTriangle1 + "cm, "
    + sideTriangle2 + "cm, "
    + baseTriangle + "cm");
    console.log("The height of triangle is: "+heightTriangle);
    console.log("The triangle perimeter is: "+ perimeterTriangle+ " cm");
    console.log("The triangle area is: "+ areaTriangle+ " cm^2");
console.groupEnd();

// circle
const pi = Math.PI;
const radiusCircle = 4;
const diameterCircle = radiusCircle* 2;
const perimeterCircle = diameterCircle * pi;
const areaCircle = (radiusCircle * radiusCircle) * pi;

console.group("Circles");
    console.log("The circle perimeter is: "+ perimeterCircle+ " cm");
    console.log("The circle area is: "+ areaCircle+ " cm^2");
    console.log("The value PI: "+ pi);
console.groupEnd();

