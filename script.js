var ownCoins = 30000;
var won = false;
var fourBlack = 0;
var fourRed = 0;
var bet = 20;
var betThisRound = false;
var colorLastBet = "";
var colorRed = "link num_round red";
var colorBlack = "link num_round black";
var canBet = document.getElementsByClassName("btn_bg")[0].className;
var posibleBet = "entry_btn red enabled";
var lastColor = document.getElementsByClassName("latest_games_links f0")[0].className;

function checkColors(fourRed, fourBlack, lastColor){
  if (lastColor.localeCompare(colorBlack)) {
    fourBlack += 1;
    console.log("perfect");
  }

  else {
    fourBlack = 0;
  }

  if (lastColor.localeCompare(colorRed)) {
    fourRed += 1;
  }

  else {
    fourRed = 0;
  }

  return fourRed, fourBlack;
}


function betingRed(colorLastBet) {
    document.getElementsByClassName('entry_btn red enabled')[0].click();
    colorLastBet = "link num_round red";
    return colorLastBet;
}

function betingBlack(colorLastBet) {
    document.getElementsByClassName('entry_btn black enabled')[0].click();
    colorLastBet = "link num_round black";
    return colorLastBet;
}

function winCheck(won){
  if (lastColor.localeCompare(colorLastBet)){
    ownCoins += bet;
    bet = 20;
    fourRed = 0;
    fourBlack = 0;
    won = true;
    return won;
  }

  else {
    ownCoins -= bet;
    bet = bet*2.10;
    document.getElementsByClassName("has-input")[0].value = bet;
  }
}


if (canBet.localeCompare(posibleBet)) {
  do{
    checkColors(fourRed, fourBlack, lastColor);
    if (fourRed >= 0) {
      betingRed();
    }

    if (fourBlack >= 4) {
      betingBlack();
    }

    winCheck(won);
  } while (won === false);
}
