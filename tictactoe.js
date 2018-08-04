window.addEventListener("load", init);
var buttons ;
function init(){
    


    bindEvents();
    document.querySelector("#playagain").addEventListener("click", playAgain);
    
    
}
function bindEvents(){

    

    buttons = document.querySelectorAll("button");
    for(let i = 0; i< buttons.length; i++ ){
        buttons[i].addEventListener("click",printXorZero);
    }
    

}




var isXorZero = false;
var isGameEnd = false;
function printXorZero(){
    
    if(this.innerHTML.trim().length==0  && !isGameEnd){

        
        
            this.innerHTML = isXorZero?"0":"X";
            isXorZero = !isXorZero;
            if(gameOver()){
                //document.getElementById("replace").innerHTML = "Game Over "+this.innerHTML+" Wins";
                 document.querySelector('#replace').innerHTML = `Game Over ${this.innerHTML} Wins`;
                 document.querySelector('#replace').style.color = 'red';
                 
                 
                 isGameEnd = true;
                
            }
            
    }
}

function gameOver(){
   return isEquals(buttons[0], buttons[1], buttons[2]) ||
          isEquals(buttons[3], buttons[4], buttons[5]) ||
          isEquals(buttons[6], buttons[7], buttons[8]) ||
          isEquals(buttons[0], buttons[3], buttons[6]) ||
          isEquals(buttons[1], buttons[4], buttons[7]) ||
          isEquals(buttons[2], buttons[5], buttons[8]) ||
          isEquals(buttons[2], buttons[4], buttons[6]) ||
          isEquals(buttons[0], buttons[4], buttons[8])  
    
    ;
}
function buttonNotBlank(button){
    return button.innerHTML.trim().length==0?false:true;
}
function rowNotBlank(one, two ,three){
    return buttonNotBlank(one) && buttonNotBlank(two) && buttonNotBlank(three);
}

function isEquals(one,two,three){
    if(rowNotBlank(one,two,three)){
        return one.innerHTML==two.innerHTML && one.innerHTML==three.innerHTML;
    }
    else{
        return false;
    }
}



function playAgain(){

    var cleanButton = document.querySelectorAll("button");
    for( let button of cleanButton){

        button.innerHTML = " ";

    }
    isGameEnd = false;
    document.querySelector("#replace").innerHTML = "Tic Tac Toe Example"
    document.querySelector("#replace").style.color = 'black';
    
    
}




