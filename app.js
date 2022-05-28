//case plus
function plusMinus(isIncreasing){
    const caseInput = document.getElementById('case-number');
    let caseNum = caseInput.value;
    // const casePlus = parseFloat(caseNum) ;

    if(isIncreasing == true){
        // caseInput.value = casePlus + 1;
        caseNum = parseInt(caseNum) + 1;
    }
    else if(caseNum > 0){
        caseNum = parseInt(caseNum) - 1;
        // caseInput.value = casePlus - 1;
    }
    caseInput.value = caseNum;
// update price
    const priceIncrease = document.getElementById('price-increase');
    priceIncrease.innerText = caseNum * 59; 
    calculateTotal();
}


document.getElementById('case-plus').addEventListener('click',function(){
    plusMinus(true);
    // const caseInput = document.getElementById('case-number');
    // const caseNum = caseInput.value;
    // const casePlus = parseFloat(caseNum) ;
    // caseInput.value = casePlus + 1;

     //iphone price increase
    // const priceIncrease = document.getElementById('price-increase');
    // priceIncrease.innerText = caseNum * 59;  
      // const priceIncreased = priceIncrease.innerText;
    // const priceIncreases = parseInt(priceIncreased);
    //  increasePrice.innerText = priceIncreases + 1;
});
    
   



//case minus
document.getElementById('case-minus').addEventListener('click',function(){
    plusMinus(false);
    // const caseInput = document.getElementById('case-number');
    // const caseNum = caseInput.value;
    // const casePlus = parseFloat(caseNum) ;
    // caseInput.value = casePlus - 1;
});
 // plusMinus(false);


 //phone handle
 //case plus
function phonePlusMinus(isIncreasing){
    const phoneInput = document.getElementById('phone-number');
    let phoneNum = phoneInput.value;
    // const casePlus = parseFloat(caseNum) ;

    if(isIncreasing == true){
        // caseInput.value = casePlus + 1;
        phoneNum = parseInt(phoneNum) + 1;
    }
    else if(phoneNum > 0){
        phoneNum = parseInt(phoneNum) - 1;
        // caseInput.value = casePlus - 1;
    }
    phoneInput.value = phoneNum;
// update price
    const phonePriceIncrease = document.getElementById('phone-price-increase');
    phonePriceIncrease.innerText = phoneNum * 1219; 
    calculateTotal();

}

//phone plus
document.getElementById('phone-plus').addEventListener('click',function(){
    phonePlusMinus(true);
   
});
    
//phone minus
document.getElementById('phone-minus').addEventListener('click',function(){
    phonePlusMinus(false);
   
});

//calculate subtotal
function getInputValue(product){
    const productInput = document.getElementById(product +'-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal(isIncreasing){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
  
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal /10;
    const totalPrice = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-total').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
    
   
   



}
