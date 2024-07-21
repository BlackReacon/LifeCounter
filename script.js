let input = ["inputPlayer1", "inputPlayer2"];

let arrInfoPlayer = {
  "playerInfo": [
    {
      "playerName": "",
      "playerLife": 20,
    },
    {
      "playerName": "",
      "playerLife": 20,
    },
  ],
};

window.addEventListener("load", function () {
  if (this.localStorage.getItem("playerName1") == undefined) {
    arrInfoPlayer.playerInfo[0].playerName = "";
  } else {
    arrInfoPlayer.playerInfo[0].playerName = this.localStorage.getItem("playerName1");
  }

  if (this.localStorage.getItem("playerName2") == undefined) {
    arrInfoPlayer.playerInfo[1].playerName = "";
  } else {
    arrInfoPlayer.playerInfo[1].playerName = this.localStorage.getItem("playerName2");
  }

  generateHtml();
});

function generateHtml() {
  document.querySelector("#customContent").innerHTML = ` 
        <div class="player reverse">
            <input type="text" id="player1" placeholder="Player" value="${arrInfoPlayer.playerInfo[0].playerName}">
            <div class="life">
                <button id="p1m" class="minus"></button>
                <p>${arrInfoPlayer.playerInfo[0].playerLife}</p>
                <button id="p1p" class="plus"></button>
            </div>
        </div>
        <div class="player">
            <input type="text" id="player2" placeholder="Player" value="${arrInfoPlayer.playerInfo[1].playerName}">
            <div class="life">
                <button id="p2m" class="minus"></button>
                <p>${arrInfoPlayer.playerInfo[1].playerLife}</p>
                <button id="p2p" class="plus"></button>
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

  input[0] = document.querySelector("#player1");
  input[0].addEventListener("input", changePlayerName);
  input[1] = document.querySelector("#player2");
  input[1].addEventListener("input", changePlayerName);

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
  for (let i = 0; i < arrInfoPlayer.playerInfo.length; i++) {
    arrInfoPlayer.playerInfo[i].playerLife = 20;
  }
  generateHtml();
}

function minusLife(i) {
  if (i == 1) {
    arrInfoPlayer.playerInfo[0].playerLife--;
  }

  if (i == 2) {
    arrInfoPlayer.playerInfo[1].playerLife--;
  }

  generateHtml();
}

function plusLife(i) {
  if (i == 1) {
    arrInfoPlayer.playerInfo[0].playerLife++;
  }

  if (i == 2) {
    arrInfoPlayer.playerInfo[1].playerLife++;
  }

  generateHtml();
}

function changePlayerName() {
for (let i = 0; i < arrInfoPlayer.playerInfo.length; i++) {
  arrInfoPlayer.playerInfo[i].playerName = input[i].value;
  localStorage.setItem('playerName' + [i+1], input[i].value);
};
}
