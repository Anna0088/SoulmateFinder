


const btn = document.querySelector(".btn");
btn.addEventListener("click", function(){
  const randomNumber = lscore();
  if(randomNumber<30){
    document.getElementById("score").textContent ="Your love score is"+"  " +randomNumber+ +"  "+" try to spend more time with each other";
}
else if(randomNumber>30 && randomNumber<80){
   document.getElementById("score").textContent ="Your love score is"+"  " +randomNumber+ +"  "+" nice going";
}
else{
  document.getElementById("score").textContent ="Your love score is"+"  " +randomNumber+ +"  "+" you love each other like pair of shoes";
}

// btn.textContent = lovescore();
})



function lscore(){
  return Math.floor(Math.random()* 100)
}
