let life1 = 20;
let life2 = 20;
let inputPlayer1;
let playerName1;
let inputPlayer2;
let playerName2;

// let arrLifePlayer = [playerName, playerLife];

window.addEventListener("load", function () {
  if (this.localStorage.getItem("playerName1") == undefined) {
    playerName1 = "";
  } else {
    playerName1 = this.localStorage.getItem("playerName1");
  }

  if (this.localStorage.getItem("playerName2") == undefined) {
    playerName2 = "";
  } else {
    playerName2 = this.localStorage.getItem("playerName2");
  }

  generateHtml();
});

function generateHtml() {
  document.querySelector("body").innerHTML = ` 
    <h1>Multi Life Counter</h1>
        <div class="player reverse">
            <input type="text" id="player1" placeholder="Player" value="${playerName1}">
            <div class="life">
                <button id="p1m" class="minus">-</button>
                <p>${life1}</p>
                <button id="p1p" class="plus">+</button>
            </div>
        </div>
        <button id="reset">Reset</button>
        <div class="player">
            <input type="text" id="player2" placeholder="Player" value="${playerName2}">
            <div class="life">
                <button id="p2m" class="minus">-</button>
                <p>${life2}</p>
                <button id="p2p" class="plus">+</button>
            </div>
        </div>
    `;
  generateEventlistener();
}

function generateEventlistener() {
  let buttonP1Minus = document.querySelector("#p1m");
  let buttonP1Plus = document.querySelector("#p1p");
  let buttonP2Minus = document.querySelector("#p2m");
  let buttonP2Plus = document.querySelector("#p2p");
  let buttonReset = document.querySelector("#reset");

  inputPlayer1 = document.querySelector("#player1");
  inputPlayer1.addEventListener("input", changePlayerName);
  inputPlayer2 = document.querySelector("#player2");
  inputPlayer2.addEventListener("input", changePlayerName);

  buttonReset.addEventListener("click", Reset);
  buttonP1Minus.addEventListener("click", () => {
    minusLife(1);
  });
  buttonP1Plus.addEventListener("click", () => {
    plusLife(1);
  });
  buttonP2Minus.addEventListener("click", () => {
    minusLife(2);
  });
  buttonP2Plus.addEventListener("click", () => {
    plusLife(2);
  });
}

function Reset() {
  life1 = 20;
  life2 = 20;
  generateHtml();
}

function minusLife(i) {
  if (i == 1) {
    life1--;
  }

  if (i == 2) {
    life2--;
  }

  generateHtml();
}

function plusLife(i) {
  if (i == 1) {
    life1++;
  }

  if (i == 2) {
    life2++;
  }

  generateHtml();
}

function changePlayerName() {
  playerName1 = inputPlayer1.value;
  localStorage.setItem("playerName1", playerName1);
  playerName2 = inputPlayer2.value;
  localStorage.setItem("playerName2", playerName2);
}
