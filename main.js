#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let enemies = ['Snaggle 🤡 ', 'Blaze 👺 ', 'Doomshade 👽 ', 'Night hunter 💀 ', 'Panther 👹'];
let maxHeroDemage = 25;
let maxEnemyHealth = 75;
let heroHealth = 100;
let numOfHealthUnits = 3;
let healthGainPerUnit = 30;
let healthUnitDropChance = 50;
let gameRunning = true;
console.log(chalk.yellowBright("Welcome To DeadZone 😈🔪 !\n"));
Game: while (gameRunning) {
    // let enemyHealth = Math.floor(Math.random() * maxEnemyHealth + 1)
    let enemyHealth = maxEnemyHealth;
    let enemyIndex = Math.floor(Math.random() * enemies.length);
    let enemy = enemies[enemyIndex];
    console.log(chalk.red(`** ${enemy} has appeared **\n`));
    while (enemyHealth > 0) {
        console.log(chalk.blue(`Your 🤵 Health: ${heroHealth}`));
        console.log(chalk.blue(`${enemy} Health: ${enemyHealth})`));
        let options = await inquirer.prompt({
            name: "ans",
            type: "list",
            message: "What your next move?",
            choices: ["1-Attack", "2-Recover Health", "3-Run",]
        });
        if (options.ans === "1-Attack") {
            let enemyDemage = 50;
            let demageEnemy = Math.floor(Math.random() * enemyDemage + 1);
            let demageHero = Math.floor(Math.random() * maxHeroDemage + 1);
            enemyHealth -= demageEnemy;
            heroHealth -= demageHero;
            console.log(chalk.green(`You 🤵 strike the ${enemy} for ${demageEnemy}`));
            console.log(chalk.red(`${enemy} strike you 🤵 for ${demageHero} demage`));
            if (heroHealth < 1) {
                console.log(chalk.redBright("You 🤵 have taken to much demage, You are too weak to continue❗."));
                break;
            }
        }
        else if (options.ans === "2-Recover Health") {
            if (numOfHealthUnits > 0) {
                heroHealth += healthGainPerUnit;
                numOfHealthUnits--;
                console.log(chalk.magenta(`You 🤵 use health units for ${healthGainPerUnit}`));
                console.log(chalk.yellow(`You 🤵 have now ${heroHealth} health`));
                console.log(chalk.magenta(`You 🤵 have ${numOfHealthUnits} health units left.`));
            }
            else {
                console.log(`You 🤵 have no health units left. Defeat enemy to get health units.`);
            }
        }
        else if (options.ans === "3-Run") {
            console.log(chalk.green(`You 🤵 run away from ${enemy}`));
            continue Game;
        }
    }
    if (heroHealth < 1) {
        console.log(chalk.grey(`You 🤵 are out because you are too weak🚫.`));
        break;
    }
    console.log(chalk.green(`${enemy} is defeated!`));
    console.log(chalk.magenta(`You 🤵 have ${heroHealth} health`));
    let randomNum = Math.floor(Math.random() * 100 + 1);
    if (randomNum < healthUnitDropChance) {
        numOfHealthUnits++;
        console.log(chalk.bgGreen `Enemy give you health units 🎉 `);
        console.log(chalk.green `Your  health is: 🔋 ${heroHealth}`);
        console.log(chalk.magenta `Your 🤵 health units is: 🔋 ${numOfHealthUnits}`);
    }
    let ask = await inquirer.prompt({
        name: "ans",
        type: "list",
        message: "Do you want to continue or Exit?",
        choices: ['1- Continue', '2- Exit']
    });
    if (ask.ans === '1- Continue') {
        console.log("You are continue this advanture.✔ \n");
    }
    else {
        console.log(chalk.yellow("You exit from DeadZone, Successfully! ✅ \n"));
        break;
    }
    console.log("THANKYOU FOR PLAYING✨\n");
}
