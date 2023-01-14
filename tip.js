let tipAmountElement=document.querySelector('#tip-amount');
let totalAmountElement=document.querySelector('#total-amount');



let billInput =document.querySelector('.inp');
let peopleInput =document.querySelector('#people-input');
let tipButtons =document.querySelectorAll('.tipbutton');
let billValue=0;
let peopleValue=0;
let percentValue=0;
let tipAmount=0;
let totalAmount=0;



billInput.addEventListener('input',function(){
    let value= billInput.value
    billValue=Number(value)
    
})

peopleInput.addEventListener('input',function(){
    let value=peopleInput.value
    peopleValue=Number(value)
       
})


for (let i=0 ; i<tipButtons.length ; i++ ) {
    let btn=tipButtons[i];
    btn.addEventListener('click',function(){
        let value= btn.value ;
        percentValue=Number(value)
        calculate()
    })
}

function calculate () {
    tipAmount = billValue*percentValue/100/peopleValue;
    totalAmount = billValue/peopleValue +tipAmount;
    console.log(tipAmount,totalAmount);
    tipAmountElement.innerHTML='$'+tipAmount;
    totalAmountElement.innerHTML='$'+totalAmount;
    

     
    
}










