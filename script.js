let life1 = 20;
let life2 = 20;

window.addEventListener("load", function () {
  generateHtml();
});

function generateHtml() {
  document.querySelector("body").innerHTML = ` 
    <h1>Multi Life Counter</h1>
        <div class="player reverse">
            <h2>Player</h2>
            <div class="life">
                <button id="p1m" class="minus">-</button>
                <p>${life1}</p>
                <button id="p1p" class="plus">+</button>
            </div>
        </div>
        <button id="reset">Reset</button>
        <div class="player">
            <h2>Player</h2>
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
