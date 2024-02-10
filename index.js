let tip_display=document.querySelector('.val1');
let total_display=document.querySelector('.val2');

let bill=document.querySelector('#bill');
let people=document.querySelector('#number');

//reset button code
document.querySelector('.button').addEventListener('click', ()=>{

    if( !bill.value || !people.value){
        bill.value=0;
        people.value=0;
        console.log(bill.value,people.value)
    }else
    console.log(bill.value,people.value)

    tip_display.innerHTML='$0.00';
    total_display.innerHTML='$0.00';

    bill.value=0;
    people.value=0;
})


//getting tip value
let selectedVal=null;
let buttons=document.querySelectorAll('.tbut');
buttons.forEach(button =>{
 
   button.addEventListener('click', ()=>{
    const value=parseInt(button.getAttribute('data-value'))
        if(value!==selectedVal)
        selectedVal=value;
        console.log(selectedVal);
        display_result(selectedVal);
   })
})

//getting custom tip value
document.querySelector('.custom').addEventListener('input',()=>{
    const value=document.querySelector('.custom').value;
    if(value!==selectedVal)
        selectedVal=value;
        console.log(selectedVal);
        display_result(selectedVal);
        
})

//caluclate the tip fpr each individual
function display_result(val){
    
    console.log(val)


    if(!bill.value || bill.value == 0 || !people.value || people.value == 0)
    {
        alert("Can't be zero")
    } 
    else{
    
    let tip= (parseFloat(bill.value) * (val / 100)) / parseFloat(people.value) ;
    let total= (bill.value / people.value) + tip;

    console.log(tip)
    console.log(total)

    tip_display.innerHTML=`$${tip.toFixed(2)}`
    total_display.innerHTML=`$${total.toFixed(2)}`
    }
}



