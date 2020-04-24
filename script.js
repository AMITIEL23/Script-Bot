var betted= false;
var fourBlack = 0;
var fourRed = 0;
var halfBet = 0;
var colorLastBet = "";
var colorRed = "link num_round red";
var colorBlack = "link num_round black";
var lastColorElement = document.getElementsByClassName("latest_games_links f0")[0];

function checkColors(){
  var lastColorFinal = lastColorElement.firstElementChild.className;
  if (lastColorFinal.localeCompare(colorBlack) == 0) {
    fourBlack = fourBlack + 1;
    fourRed = 0;
  }

  if (lastColorFinal.localeCompare(colorRed) == 0){
    fourRed = fourRed + 1;
    fourBlack = 0;
  }
}

function bettingRed() {
    document.getElementsByClassName('entry_btn red enabled')[0].click();
    betted = true;
    colorLastBet = "link num_round red";
}

function bettingBlack() {
    document.getElementsByClassName('entry_btn black enabled')[0].click();
    betted = true;
    colorLastBet = "link num_round black";
}

function winCheck(){
  var lastColorFinal = lastColorElement.firstElementChild.className;
  if ((lastColorFinal.localeCompare(colorLastBet) == 0) && (betted === true)){
    fourRed = 0;
    fourBlack = 0;
    betted = false;
    if (halfBet > 0){
      do{
        document.getElementsByClassName("bet_btn")[3].click();
        halfBet = halfBet - 1;
      }while(halfBet > 0);
    }
  }

  if ((lastColorFinal.localeCompare(colorLastBet) != 0) && (betted === true)) {
    betted = false;
    document.getElementsByClassName("bet_btn")[4].click();
    halfBet = halfBet +1;
  }
}

  function program(){
      console.log("Starting");
      console.log("Can bet");
      checkColors();
      winCheck();
      if (fourRed >= 4) {
        betingBlack();
        console.log("Beted black");
      }

      if (fourBlack >= 4) {
        betingRed();
        console.log("Beted red");
      }
  }

setInterval(program, 25000);
