// Square

function perimeterSquare( sideSquare, unit ){
    return  (sideSquare*4) + unit;
}

function areaSquare( sideSquare, unit ){
    return (sideSquare * sideSquare) + unit+"^2";
}
function calculatePerimeterSquare(){
    const input = document.getElementById("inputSideSquare");
    const inputValue = input.value;

    if(inputValue != ''){
        const perimeter = perimeterSquare(inputValue, "cm");
        alert("El perímetro del cuadrado es: "+perimeter);
        
    }else{
        alert("No has ingresado cuánto mide cada lado de tu cuadrado");
    }
}
function calculateAreaSquare(){
    const input = document.getElementById("inputSideSquare");
    const inputValue = input.value;
    
    if(inputValue != ''){
        const area = areaSquare(inputValue, "cm");
        alert("El área del cuadrado es: "+area);
        
    }else{
        alert("No has ingresado cuánto mide cada lado de tu cuadrado");
    }
}

// triangle


function perimeterTriangle(sideTriangle1, sideTriangle2, baseTriangle, unit){
    return (sideTriangle1 + sideTriangle2 + baseTriangle) + unit;
}

function areaTriangle(heightTriangle, baseTriangle, unit){
    return ((heightTriangle* baseTriangle)/2) + unit+"^2";
}

function calculatePerimeterTriangle(){

    const input1 = parseInt(document.getElementById("inputSideTriangle1").value);
    const input2 = parseInt(document.getElementById("inputSideTriangle2").value);
    const input3 = parseInt(document.getElementById("inputBaseTriangle").value);

    if(input1 != '' && input2 != '' && input3 != ''){
        const perimeter = perimeterTriangle(input1, input2, input3, "cm");
        alert("El perímetro del triángulo es: "+perimeter);
        
    }else{
        alert("No has ingresado cuánto mide los lados del triángulo");
    }
}
function calculateAreaTriangle(){

    const input1 = document.getElementById("inputBaseTriangle").value;
    const input2 = document.getElementById("inputHeightTriangle").value;

    if(input1 != '' && input2 != '' ){
        const area = areaTriangle(input1, input2, "cm");
        alert("El área del triángulo es: "+area);
        
    }else{
        alert("No has ingresado cuánto mide los lados del triángulo");
    }
}
// // circle

const pi = Math.PI;
function diameterCircle(radiusCircle){
    return radiusCircle*2;
}

function perimeterCircle( radiusCircle, unit){
    const diameter = diameterCircle(radiusCircle);
    return  (diameter*pi) + unit;
}

function areaCircle(radiusCircle, unit){
    return  ((radiusCircle * radiusCircle) * pi) + unit+"^2";
}

function calculatePerimeterCircle(){
    const input1 = document.getElementById("inputRadiusCircle").value;

    if(input1 != ''  ){
        const perimeter = perimeterCircle(input1, "cm");
        alert("El perímetro del círculo es: "+perimeter);
        
    }else{
        alert("No has ingresado cuánto mide los lados del circulo");
    }
}
function calculateAreaCircle() {
    const input1 = document.getElementById("inputRadiusCircle").value;
    if(input1 != ''  ){
        const area = areaCircle(input1, "cm");
        alert("El área del círculo es: "+area);
        
    }else{
        alert("No has ingresado cuánto mide los lados del circulo");
    }
}

//isosel triangle 
function triangleIsosel(sideTriangle1, sideTriangle2, baseTriangle){
    console.log();
    if(sideTriangle1 == sideTriangle2){
        return true;
    }else if(sideTriangle1 == baseTriangle){
        return true;
    }else if(baseTriangle == sideTriangle2){
        return true;
    }else{
        return false;
    }
}
function heightTriangle(sideTriangle1, sideTriangle2, baseTriangle, unit){

    const answer = Math.sqrt((sideTriangle1*sideTriangle1) - ((baseTriangle * baseTriangle)/4));
    return answer+ unit+"^2";
}
function calculateHeightTriangle(){
    const input1 = parseInt(document.getElementById("inputTriangleIsos1").value);
    const input2 = parseInt(document.getElementById("inputTriangleIsos2").value);
    const input3 = parseInt(document.getElementById("inputBaseTriangleIsos").value);

    if(triangleIsosel(input1, input2, input3)){
        const heTriangle = heightTriangle(input1, input2, input3, "cm");
        alert(heTriangle);
    }else{
        alert("no es un triángulo isóscele, ya que dos de sus lados debe ser iguales");
    }
}
