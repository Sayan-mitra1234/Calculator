let screen=document.getElementById('input');
buttons=document.querySelectorAll('button');
let screenValue= '';
for(item of buttons){
    item.addEventListener('click',(e) =>{
        buttontext=e.target.innerText;
        
            if(buttontext =='X'){
                buttontext='*';
                screenValue += buttontext;
                screen.value = buttontext;
            }
            else if(buttontext=='%'){
                buttontext='*1/100';
                screenValue+=buttontext;
                screen.value=screenValue
            }
            else if(buttontext=='C'){
                screenValue= "";
                screen.value= screenValue
            }
            else if(buttontext =='='){
                screen.value = eval(screenValue)
            }
            else{
                screenValue += buttontext;
                screen.value = screenValue;
            }
       
        
    })
}

