// code of toggle

var toggled = false;
var body = document.getElementById('calculator');
var container = document.getElementById('toggle-container');
var toggle = document.getElementById('toggle-button');
var displayContainer = document.getElementById('display-container');
var buttons = document.getElementsByClassName('button'); //this will return an array of butotns because we have a lot of buttons
var operators = document.getElementsByClassName('operator');

toggle.addEventListener("click", function(){
    
    if(toggled == false){

        toggle.style.left = "68%";
        body.style.backgroundColor = "black";
        displayContainer.style.border = "2px solid white";
        displayContainer.style.color = "white";
        displayContainer.style.width = "98.56%";
        for(var i = 0; i < buttons.length; i++){
            buttons[i].style.backgroundColor = "rgb(48, 47, 47)";
            buttons[i].style.color = "white";
            
        }
        for(var i = 0; i < operators.length; i++){
            operators[i].style.backgroundColor = "rgb(0, 78, 146)";
            operators[i].style.color = "white";

        }
        toggled = true;
        
    } else {

        toggle.style.left = "0%";
        body.style.backgroundColor = "white";
        displayContainer.style.border = "2px solid black"
        displayContainer.style.color = "black";
        for(var i = 0; i < buttons.length; i++){
            buttons[i].style.backgroundColor = "rgb(197, 207, 216)";
            buttons[i].style.color = "black";
        }
        for(var i = 0; i < operators.length; i++){
            operators[i].style.backgroundColor = "rgb(0, 78, 146)";
            operators[i].style.color = "white";
        }

        toggled = false;
    }
});


// code of calculator

var display = document.getElementById('display');
var operand = null;
var sign = true; // sign == true represents the value till now is +ve and false indicates value till now is -ve
var isDecimal = false;
var first = true;

for(var i = 0; i < buttons.length; i++){

    buttons[i].addEventListener('click', function(){

        var value = this.getAttribute('data-value');

        if(value == '+'){

            isDecimal = false;
            display.innerHTML += " " + value + " ";

        }else if(value == '-'){

            isDecimal = false;
            display.innerHTML += " " + value + " ";
            
        }else if(value == '*'){

            isDecimal = false;
            display.innerHTML += " " + value + " ";

        }else if(value == '/'){

            isDecimal = false;
            display.innerHTML += " " + value + " ";

        }else if(value == '='){

            operand = display.innerHTML;
            var ans = eval(operand);
            if(ans == Infinity){
                display.innerHTML = "Error";
            } else {
                display.innerHTML = eval(operand);
            }
            isDecimal = false;
            first = true;
            
        }else if(value == 'AC'){ // clear the display area

            display.innerHTML = "";
        
        }else if(value == '+-'){

            if(sign){
                if(first){
                    display.innerHTML = '-'; 
                    first = false;
                } else {
                    display.innerHTML = eval(-1 * display.innerHTML);
                    sign = false;
                }
            } else {
                display.innerHTML = eval(-1 * display.innerHTML);
                sign = true;
            }
            
        }else if(value == '%'){

            display.innerHTML = display.innerHTML/100;

        }else if(value == '.'){ 

            if(!isDecimal){ // apply the decimal point only if there is no decimal point prior
                display.innerHTML += '.';
                isDecimal = true;
            }

        }else { // it is num
            display.innerHTML += value;
        }
    })
}

