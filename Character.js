import {
  rolledDiceArr,
  getDicePlaceHolderHtml,
  getPercentageHealth,
} from "./utils.js";

function Character(data) {
  Object.assign(this, data);
  console.log(this);

  this.diceArray = getDicePlaceHolderHtml(this.diceCount);

  this.maxHealth = this.health;

  this.getDiceHtml = function () {
    this.currentDiceScore = rolledDiceArr(this.diceCount);
    this.diceArray = this.currentDiceScore
      .map((dice) => {
        return `<div class="dice">${dice}</div>`;
      })
      .join("");
  };

  this.takeDamage = function (attackScoreArray) {
    this.health -= attackScoreArray.reduce((num1, num2) => num1 + num2);
    console.log(this.health);

    if (this.health <= 0) {
      this.dead = true;
      this.health = 0;
    }
  };

  this.getCharacterHtml = function () {
    const healthBar = this.getHealthbarHtml();
    return `
       <div class="character-card">
            <h4 class="name">${this.name}</h4>
            <img src="./${this.avatar}" alt="${this.avatar}" class="avatar" />
            <p class="health">health: <b>${this.health}</b></p>
            ${healthBar}
            <div class="dice-container">
                ${this.diceArray}
            </div>
        </div>
       `;
  };

  this.getHealthbarHtml = function () {
    const percent = getPercentageHealth(this.health, this.maxHealth);
    return `
      <div class="health-bar-outer">
        <div class="health-bar-inner ${percent < 25 ? "danger" : ""} " 
        style="width: ${percent} %;">
        </div>
      </div>
`;
  };
}

export default Character;
