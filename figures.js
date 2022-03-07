// Square

function perimeterSquare( sideSquare, unit ){
    return "The square perimeter is: " + (sideSquare*4) + unit;
}

function areaSquare( sideSquare, unit ){
    return "The squeare area is: " +(sideSquare * sideSquare) + unit+"^2";
}

// triangle

function perimeterTriangle(sideTriangle1, sideTriangle2, baseTriangle, unit){
    return "The triangle perimeter is: "+ (sideTriangle1 + sideTriangle2 + baseTriangle) + unit;
}

function areaTriangle(heightTriangle, baseTriangle, unit){
    return "The triangle area is: "+ ((heightTriangle* baseTriangle)/2) + unit+"^2";
}

// // circle

const pi = Math.PI;
function diameterCircle(radiusCircle){
    return radiusCircle*2;
}

function perimeterCircle( radiusCircle, unit){
    const diameter = diameterCircle(radiusCircle);
    return "The circle perimeter is: "+ (diameter*pi) + unit;
}

function areaCircle(radiusCircle, unit){
    return "The circle area is: "+ ((radiusCircle * radiusCircle) * pi) + unit+"^2";
}

