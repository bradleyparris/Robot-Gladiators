var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less



var fight = function(enemyName) {
  
  // Prompt fight
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  while(enemyHealth > 0) {

      // If Player chooses to Fight
      if (promptFight === "fight" || promptFight === "FIGHT") {

        // Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

        // Check enemy's health
        if (enemyHealth <= 0) {
          window.alert(enemyName + " has died!");
        } 
        else {
          window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        // Check player's health
        if (playerHealth <= 0) {
          window.alert(playerName + " has died!");
        } 
        else {
          window.alert(playerName + " still has " + playerHealth + " health left.");
        }
      }

      // If Player chooses to Skip
      else if (promptFight === "skip" || promptFight === "SKIP") {

        // Confirm Player wants to Skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // If yes, leave fight and penalize 10 money
        if (confirmSkip) {
          window.alert(playerName + " has chosen to skip the fight!");
          playerMoney = playerMoney - 2;
        }

        // If no, ask question again by running fight() again
        else {
          fight();
        }
      }

      // Neither Fight nor Skip
      else {
        window.alert("You need to choose a valid option. Try again!");
      }
  }
};

for(var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}