var scores, roundScore, activePlayer;
scores=[0,0];
roundScore=0;
activePlayer=0;
document.querySelector("#score-0").textContent=scores[0]
document.querySelector("#score-1").textContent=scores[1]
document.querySelector("#current-0").textContent=0
document.querySelector("#current-1").textContent=0

 document.querySelector("#name-"+activePlayer).style.background="limegreen"
 document.querySelector("#name-"+(1-activePlayer)).style.background="white"

dice1 = Math.floor(Math.random()*6+1);
dice2= Math.floor(Math.random()*6+1)
console.log(dice1)

//document.querySelector("#current-"+activePlayer).innerHTML="<em>"+(dice1+dice2)+"</em>"
//document.querySelector("#current-"+activePlayer).textContent=dice1+dice2
//document.querySelector("#dice-1").src="dice-"+dice1+".png"
//document.querySelector("#dice-2").src="dice-"+dice2+".png"

document.querySelector(".btn-roll").addEventListener("click", function(){
    
    dice1=Math.floor(Math.random()*6+1)
    dice2=Math.floor(Math.random()*6+1)
    
    document.querySelector("#dice-1").src="dice-"+dice1+".png"
    document.querySelector("#dice-2").src="dice-"+dice2+".png"
    
    if (dice1==1 || dice2==1)
        {
            document.querySelector("#current-"+activePlayer).textContent=0
            roundScore=0
            if (activePlayer==0)
                {activePlayer=1
                
                }
            else{
                activePlayer=0
            }
            document.querySelector("#name-"+activePlayer).style.background="limegreen"
            document.querySelector("#name-"+(1-activePlayer)).style.background="white"
            alert("Oops! Number 1 appeared on one of the dices in Player "+(1-activePlayer)+"'s turn. Now Player "+activePlayer+"'s turn")
        }
    else
        {
            roundScore=dice1+dice2
        }
    document.querySelector("#current-"+activePlayer).textContent=roundScore
   
    
})

document.querySelector(".btn-hold").addEventListener("click", function(){
    
    scores[activePlayer]+=roundScore
    document.querySelector("#score-"+activePlayer).innerText=scores[activePlayer]
    roundScore=0
    document.querySelector("#current-0").textContent=0
    document.querySelector("#current-1").textContent=0
    if (activePlayer==0)
                {activePlayer=1}
    else{
        activePlayer=0
    }
    
    document.querySelector("#name-"+activePlayer).style.background="limegreen"
    document.querySelector("#name-"+(1-activePlayer)).style.background="white"
})




