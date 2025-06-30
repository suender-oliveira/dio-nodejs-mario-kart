const player1 = {
  NAME: "Mario",
  SPEED: 4,
  MANEUVERABILITY: 3,
  POWER: 3,
  SCORE: 0,
};

const player2 = {
  NAME: "Luigi",
  SPEED: 3,
  MANEUVERABILITY: 4,
  POWER: 4,
  SCORE: 0,
};

async function rollDice() {
  return Math.floor(Math.random() * 6 + 1);
}

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "STRAIGHT";
      break;
    case random < 0.66:
      result = "CURVE";
      break;
    default:
      result = "BATTLE";
  }
  return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolled a six-sided die of ${block} and its result is ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

function applyBattlePenalty(loser, type) {
  const penalty = type === "BOMB" ? 2 : 1;
  const previousScore = loser.SCORE;
  loser.SCORE = Math.max(0, loser.SCORE - penalty);
  console.log(
    `${loser.NAME} was hit by a ${
      type === "BOMB" ? "💣 Bomb (-2)" : "🐢 Shell (-1)"
    } and lost ${previousScore - loser.SCORE} point(s)!`
  );
}

function maybeApplyTurbo(winner) {
  if (Math.random() < 0.5) {
    winner.SCORE++;
    console.log(`${winner.NAME} activated a TURBO BOOST! 🚀 (+1 point)`);
  }
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Round ${round}`);

    let block = await getRandomBlock();

    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    let totalTestSkill = 0;
    let totalTestSkil2 = 0;

    if (block === "STRAIGHT") {
      totalTestSkill = diceResult1 + character1.SPEED;
      totalTestSkil2 = diceResult2 + character2.SPEED;

      await logRollResult(
        character1.NAME,
        "SPEED",
        diceResult1,
        character1.SPEED
      );
      await logRollResult(
        character2.NAME,
        "SPEED",
        diceResult2,
        character2.SPEED
      );
    }

    if (block === "CURVE") {
      totalTestSkill = diceResult1 + character1.MANEUVERABILITY;
      totalTestSkil2 = diceResult2 + character2.MANEUVERABILITY;

      await logRollResult(
        character1.NAME,
        "MANEUVERABILITY",
        diceResult1,
        character1.MANEUVERABILITY
      );
      await logRollResult(
        character2.NAME,
        "MANEUVERABILITY",
        diceResult2,
        character2.MANEUVERABILITY
      );
    }

    if (block === "BATTLE") {
      const powerResult1 = diceResult1 + character1.POWER;
      const powerResult2 = diceResult2 + character2.POWER;

      console.log(
        `${character1.NAME} challenged ${character2.NAME} to a BATTLE 🥊`
      );

      await logRollResult(
        character1.NAME,
        "BATTLE",
        diceResult1,
        character1.POWER
      );
      await logRollResult(
        character2.NAME,
        "BATTLE",
        diceResult2,
        character2.POWER
      );

      const penaltyType = Math.random() < 0.5 ? "SHELL" : "BOMB";
      if (powerResult1 > powerResult2) {
        applyBattlePenalty(character2, penaltyType);
        maybeApplyTurbo(character1);
      } else if (powerResult2 > powerResult1) {
        applyBattlePenalty(character1, penaltyType);
        maybeApplyTurbo(character2);
      } else {
        console.log("⚖️  Draw battle — no penalties or bonuses applied.");
      }
    }

    if (totalTestSkill > totalTestSkil2) {
      console.log(`${character1.NAME} scored a point!`);
      character1.SCORE++;
    } else if (totalTestSkil2 > totalTestSkill) {
      console.log(`${character2.NAME} scored a point!`);
      character2.SCORE++;
    }

    console.log(
      "-----------------------------------------------------------------------"
    );
  }
}

async function declareWinner(character1, character2) {
  console.log("Final result:");
  console.log(`${character1.NAME}: ${character1.SCORE} point(s)`);
  console.log(`${character2.NAME}: ${character2.SCORE} point(s)`);

  if (character1.SCORE > character2.SCORE) {
    console.log(`\n${character1.NAME} wins the race! 🏆`);
  } else if (character1.SCORE < character2.SCORE) {
    console.log(`\n${character2.NAME} wins the race! 🏆`);
  } else {
    console.log("\nIt's a draw.");
  }
}

(async function main() {
  console.log(
    `🏁🚨 Race between ${player1.NAME} and ${player2.NAME} starting ...\n`
  );
  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2);
})();
