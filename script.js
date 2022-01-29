function random(){
  const randomNumber=Math.round(Math.random() * 10000);
  const randomNumberText=randomNumber.toString().length;
  if(randomNumberText == 4){
    const pinInputField=document.getElementById('gpin-input');
    pinInputField.value=randomNumber;
  }
  else{
    random();
  }
}
function pinNumber(event){
  const checkNumber=event.target.innerText;
  const previousNumber=document.getElementById('previous-input');
  switch(checkNumber) {
    case 'C':
      previousNumber.value='';
      break;
    default:
      const previousNumberValue=previousNumber.value;
      const number= event.target.innerText;
      const newNumber=previousNumberValue + number;
      previousNumber.value=newNumber;
  }
  // if(checkNumber == isNaN){
  //   console.log('Try again');
  // }
  // else{
   
  // }
  
  
}
document.getElementById('gpin-button').addEventListener('click',function(){
    random();
})

document.getElementById('calc-body').addEventListener('click',function(event){
  pinNumber(event);
})

document.getElementById('submit-button').addEventListener('click',function(){
  const generatedInput=document.getElementById('gpin-input').value;
  const givenInput=document.getElementById('previous-input').value;
  if (generatedInput == givenInput){
    document.getElementById('success').style.display='block';
    document.getElementById('fail').style.display='none';
  }
  else{
    const tryNumber=document.getElementById('try');
    const tryNumberText=tryNumber.innerText; 
    if(parseInt(tryNumberText)>0){
      document.getElementById('fail').style.display='block';
      document.getElementById('success').style.display='none';
     newTry=parseInt(tryNumberText) -1;
     tryNumber.innerText=newTry;
    }
   else{
     alert('Out of try. Please Refresh !!');
   }

  }
})