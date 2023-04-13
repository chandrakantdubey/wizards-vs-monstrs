function rolledDiceArr(diceCount) {
  return new Array(diceCount)
    .fill(0)
    .map(() => Math.floor(Math.random() * 6 + 1));
}

function getDicePlaceHolderHtml(diceCount) {
  return new Array(diceCount)
    .fill(0)
    .map(() => {
      return `<div class="placeholder-dice"></div>`;
    })
    .join(" ");
}

const getPercentageHealth = (currenthealth, maxHealth) =>
  ((currenthealth / maxHealth) * 100).toFixed(1);

export { rolledDiceArr, getDicePlaceHolderHtml, getPercentageHealth };
