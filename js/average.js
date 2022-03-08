// Average (media)
    const listAverage = [
        100,200,500,600,700,800
    ];

    function calculateAverageArithmetic(listA){
    
        const sumLis = listA.reduce(
            (valueAcum = 0, newElement) =>
                valueAcum + newElement
            
        );
        const AverageArithmeti = sumLis / listA.length;
        return AverageArithmeti;
    }


// mediam (mediana)

    // const listMediam = [
    //         100,200, 10000,500, 300, 1000,400000000
    //     ].sort((a, b) => {return a - b});

    // const halfListMediam = parseInt(listMediam.length / 2);

    // function isPar(numberMediam){
    //     if ( ( numberMediam % 2 ) === 0){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }

    // let mediam;

    // if(isPar(listMediam.length)){
    
    //     const element1 = listMediam[halfListMediam];
    //     const element2 = listMediam[halfListMediam-1];

    //     const mediamAritmetic12 =  calculateAverageArithmetic([element1,element2]);
    //     mediam = mediamAritmetic12;
    // }else{
    //     mediam = listMediam[halfListMediam];
    // }

// mode (moda)
    // function calculateMode(listMode){

    // // const listMode= [
    // //     1,2,3,4,2,3,1,5,1,2,1,1,4,6,2,9,3,7,2,4,4
    // // ];
    //     const list1Mode= {};

    //     listMode.map(
    //         function(element){
    //             if(list1Mode[element]){
    //                 list1Mode[element] += 1;
    //             }else{
    //                 list1Mode[element] = 1;
    //             }
    //         }
    //     );

    //     const list1Array = Object.entries(list1Mode).sort(function(a, b){
    //         return a[1]-b[1];
    //     });

    //     const mode= list1Array[list1Array.length-1];

    //     return "La moda es: "+mode[0]+ " se repite "+ mode[1] + " veces";
    // }

//  geometric mean

    // const listMeanGeo = [32.6,53.5,28.9,48.2,67.4];

    // function calculateMeanGeometric(listMeanGeo){
    
    //     let meanGeometric = listMeanGeo.reduce(
    //         (valueAcum = 0, element) =>
    //         valueAcum * element
    //     );

    //     let meanGeome = Math.pow(meanGeometric, 1/listMeanGeo.length);

    //     return meanGeome;
    
    // }