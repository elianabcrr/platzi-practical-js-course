//  helpers or utils
    function isPar(element){

        return  ( (element % 2 ) === 0);
    }
// calculator mediam
    function mediamSalary(listSalaryCountry){

        const mediam = 0;
        const half = parseInt(listSalaryCountry.length/ 2);
        
        if(isPar(listSalaryCountry.length) == true){
            const person1 = listSalaryCountry[half];
            const person2 = listSalaryCountry[half-1];

            const mediam = calculateAverageArithmetic([person1,person2]);
            return mediam;

        }else{
        
            return  listSalaryCountry[half];
        }
    
    }
    function calculateAverageArithmetic(listA){

        const sumLis = listA.reduce(
            (valueAcum = 0, newElement) =>
                valueAcum + newElement
            
        );
        const AverageArithmeti = sumLis / listA.length;
        return AverageArithmeti;
    }

// calculate mediam general
        const salaryCol = colombia.map(
            function(person){
                return person.salary;
            }
        );

    const orderSalaryCol = salaryCol.sort(
        (salaryA, salaryB) => {
            return salaryA - salaryB;
        }
    );

    const mediamGeneralCol = mediamSalary(orderSalaryCol);

// mediam top 10 %
    const topS= 10;
    const spliceStart = ( ( orderSalaryCol.length * (100 - topS ) ) / 100);
    const spliceCount = orderSalaryCol.length - spliceStart;

    const salaraColTop10 = orderSalaryCol.splice(spliceStart,spliceCount );

    const mediamTopCol = mediamSalary(salaraColTop10);

console.log(
    mediamGeneralCol,
    mediamTopCol

);