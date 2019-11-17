initial_dices=document.querySelectorAll(".dice")
for (dice_image of initial_dices)
    {
        dice_image.style.display='none'
    }

//initialising the values 
var roundScore, scores, activePlayer
scores=[0,0]
activePlayer=0
roundScore=0
document.querySelector("#current-"+activePlayer).textContent=roundScore
document.querySelector("#score-"+activePlayer).textContent=0
document.querySelector("#score-"+(1-activePlayer)).textContent=0
//The active player's title is colored to recognize what player has the turn
document.querySelector("#name-"+activePlayer).style.backgroundColor="#FF00FF"

//As sson as the element on the web page with class btn-roll is clicked , the event is recognised by the event listener which calls the following callback function 
document.querySelector(".btn-roll").addEventListener("click", function(){
    
    //both the dices are rolled, and checked whether any of them contains the value one. If yes, the roundScore is updated to zero and activePlayer changes else roundScore is sum of both
    var dice1=Math.floor(Math.random()*6)+1
    var dice2=Math.floor(Math.random()*6)+1
    
    for (dice_image of document.querySelectorAll(".dice"))
        {
            dice_image.style.display="block"
        }
    
    document.querySelector("#dice-1").src="dice-"+dice1+".png"
    document.querySelector("#dice-2").src="dice-"+dice2+".png"
    
    if (dice1==1 || dice2==1)
        {
            alert("Player-"+(1+activePlayer)+" got one. Turn passes onto Player-"+(2-activePlayer))
            //would set the currentPlayer's features to bold and red dot to the active player's panel
            document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active")
            document.querySelector(".player-"+(1-activePlayer)+"-panel").classList.add("active")
            document.querySelector("#current-"+activePlayer).textContent=0
            //updates done wrt the current active player on getting one. Now turn is passed to 1-activePlayer
            
            for (dice_image of document.querySelectorAll(".dice"))   //Dices are hidden till roll button is pressed
                {
                    dice_image.style.display="none"
                }
            activePlayer=1-activePlayer
            roundScore=0
            document.querySelector("#name-"+activePlayer).style.background="#FF00FF"
            document.querySelector("#name-"+(1-activePlayer)).style.background="white"
            
            

           
        }
    else
        roundScore+=dice1+dice2
    document.querySelector("#current-"+activePlayer).textContent=roundScore
    
})


