// const priceOriginal = 120;
// const discounts = 18;
// const percentagePriceDiscount = 100 - discounts;
// const priceDiscount = (priceOriginal * percentagePriceDiscount) / 100;

// console.log(
//     {
//         priceOriginal,
//         discounts,
//         percentagePriceDiscount,
//         priceDiscount
//     }
// );

function calculatePriceDiscount(){

    const price = document.getElementById("inputPrice");
    const discount = document.getElementById("inputDiscount")

    if(price.value!='' && discount.value!=''){

        const inputPrice = price.value;
        const inputDiscount = discount.value;
        const percentagePriceDiscount = 100 - inputDiscount;
        const priceDiscount = (inputPrice * percentagePriceDiscount) / 100;
        const result = document.getElementById("resultsPrice");
        result.innerText= "El precio con descuento es: $"+priceDiscount;
    }else{
        alert("Faltan valores para calcular el precio con el descuento");
    }

}

function calculatePriceDiscountCoupon(){

    let banCouponDiscount = -1;
    let couponDiscount = document.getElementById("inputCodeCoupon").value;
    const inputPrice = document.getElementById("inputPrice2").value;
    
    if(couponDiscount != ''){
        banCouponDiscount = coupon(couponDiscount);
    }
    
    if(banCouponDiscount> 0 && inputPrice!= ''){
        console.log("entra");
        const percentagePriceDiscount = 100 - banCouponDiscount;
        const priceDiscount = (inputPrice * percentagePriceDiscount) / 100;
        let resultsPriceCoupon = document.getElementById("resultsPriceCoupon");
        resultsPriceCoupon.innerText= "El precio con descuento es: $"+priceDiscount;

    }else if(banCouponDiscount==0 && inputPrice!= ''){
        alert("El cupón introducido es incorrecto");

    } else{
        alert("Faltan valores para calcular el precio con el descuento");
    }
  

}
function coupon(couponCode){
        
    var arrayCoupon = [
        { code: "code1coupon", percentage: 10},
        { code: "code2coupon", percentage: 20},
        { code: "code3coupon", percentage: 30},
        { code: "code4coupon", percentage: 40},
        { code: "code5coupon", percentage: 50},
        { code: "code6coupon", percentage: 60},
        { code: "code7coupon", percentage: 70},
        { code: "code8coupon", percentage: 80},
        { code: "code9coupon", percentage: 90},
    ];
    let result = 0;

        for( let coupon of arrayCoupon){
           
            if(coupon["code"] === couponCode){

                result= coupon["percentage"];
                break;
            }else  {
                result= 0;
                
            }
        }
    return result;
}

