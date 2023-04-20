const firstNum = document.querySelector('#firstNum');
const secondNum = document.querySelector('#secondNum');
const plus = document.querySelector('#plus');
const reduce = document.querySelector('#reduce');
const multiplication = document.querySelector('#multiplication');
const division = document.querySelector('#division');
const answer = document.querySelector('#answer');
const btn = document.querySelector('#btn');
const operator = document.querySelector('#operator');



btn.addEventListener('click',function(){
let ans;
    switch(operator.value){
        case'+':
         ans=  parseInt(firstNum.value)+parseInt(secondNum.value) ;
        break;
        case'-':
         ans=  parseInt(firstNum.value)-parseInt(secondNum.value) ;
        break;
        case'*':
         ans=  parseInt(firstNum.value)*parseInt(secondNum.value) ;
        break;
        case'÷':
         ans=  parseInt(firstNum.value)/parseInt(secondNum.value) ;
        break;
        default:
            ans='';
            break;
        
    }


    // let ans=  parseInt(firstNum.value)+parseInt(secondNum.value) ;

    answer.innerText=  ans;

})

