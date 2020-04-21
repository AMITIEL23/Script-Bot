var ownCoins = 30000;
var fourBlack = 0;
var fourRed = 0;
var bet = 10;
var lost = false;
var colorLastBet = "";
var colorRed = "link num_round red";
var colorBlack = "link num_round black";
var canBet = document.getElementsByClassName("btn_bg")[0].className;
var posibleBetRed = "entry_btn red enabled";
var posibleBetBlack = "entry_btn black enabled";
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

function betingRed() {
    document.getElementsByClassName('entry_btn red enabled')[0].click();
    colorLastBet = "link num_round red";
}

function betingBlack() {
    document.getElementsByClassName('entry_btn black enabled')[0].click();
    colorLastBet = "link num_round black";
}

function winCheck(){
  var lastColorFinal = lastColorElement.firstElementChild.className;
  if (lastColorFinal.localeCompare(colorLastBet) == 0){
    ownCoins += bet;
    bet = 10;
    document.getElementsByClassName("has-input")[0].innerHTML = '<input class="has-input" value= 'bet'>';

    fourRed = 0;
    fourBlack = 0;
    lost = false;
  }

  else {
    lost = true;
    ownCoins -= bet;
    bet = bet*2;
    document.getElementsByClassName("has-input")[0].value = bet;
  }
}


  function program(){
    var canBet = document.getElementsByClassName("btn_bg")[0].firstElementChild.className;
    if ((canBet.localeCompare(posibleBetRed) == 0) || (canBet.localeCompare(posibleBetBlack) == 0)) {
      if(lost === false){
        checkColors();
      }

      if (fourRed >= 3) {
        betingBlack();
      }

      if (fourBlack >= 3) {
        betingRed();
      }
      winCheck();
    }
  }

setInterval(betingRed, 20000);
