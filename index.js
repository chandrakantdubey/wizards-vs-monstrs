import charData from "./data.js";
import Character from "./Character.js";

let monstersArray = ["orc", "demon", "goblin"];
function getNewMonster() {
  const nextMonsterData = charData[monstersArray.shift()];
  return nextMonsterData ? new Character(nextMonsterData) : {};
}

document.querySelector("#attack-button").addEventListener("click", attack);
function attack() {
  wizard.getDiceHtml();
  monster.getDiceHtml();
  wizard.takeDamage(monster.currentDiceScore);
  monster.takeDamage(wizard.currentDiceScore);
  renderCharacter();
  if (wizard.dead) {
    return endGame();
  }
  if (monster.dead) {
    document.querySelector("#attack-button").disabled = true;
    if (monstersArray.length > 0) {
      setTimeout(() => {
        monster = getNewMonster();
        renderCharacter();
        document.querySelector("#attack-button").disabled = false;
      }, 1000);
    } else {
      return endGame();
    }
  }
}

function renderCharacter() {
  document.getElementById(`hero`).innerHTML = wizard.getCharacterHtml();
  document.getElementById(`monster`).innerHTML = monster.getCharacterHtml();
}

function endGame() {
  const endMessage =
    wizard.health === 0 && monster.health === 0
      ? "No victors - all creatures are dead"
      : wizard.health > 0
      ? `The Wizard Wins`
      : `The ${monster.name} is Victorious`;
  const endEmoji = wizard.health ? "🔮" : "☠️";

  setTimeout(() => {
    document.body.innerHTML = `
        <div class="end-game">
            <h2>Game Over</h2>
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
        </div>
    `;
  }, 1000);
}

const wizard = new Character(charData.hero);
let monster = getNewMonster();
renderCharacter();

// returning a function from function
// we can chain methods on the returned method

// Array contructor: new Array(10) returns an array of 10 undefined

// .fill() converts the elements to static value
// new Array(10).join('🎊') fills the array with 🎊

// array.map returns an array(comma separated values)

// we use .join("delimeter") method to join the with a respective delimeter

// constructor functions => factory that creates object
// to refer to data we this in constructor
// methods are attached to the object

// Object.assign: copies properties of one object into other. Object.assign(target, source);

//to export a single thing from a file we use export default name
// to export multiple things we need to use named exports

// .reduce mthods: reduces to one single value
