
const prompt = require("prompt-sync")({signit: true});
console.log()
console.log('Welcome to gone fishing. Try to maximize the value of your caught fish. You can fish for 6 hours and catch up to 10lbs of fish\n')  
console.log();


let firstFishAdjectives =[
    "slippery", 
    "slimy", 
    "flippery", 
    "squeaky", 
    "rowdy", 
    "curly", 
    "flaky", 
    "dreary", 
    "scary", 
    "flappy"
];

let secondfishAdjectives = [
    "scaly", 
    "enormous", 
    "big-mouthed", 
    "bubble-eyed", 
    "finned", 
    "deepsea", 
    "snappy", 
    "tiny", 
    "grey", 
    "yellow-tail"
];

let fishTypes = [
    "tuna", 
    "salmon", 
    "snapper", 
    "herring", 
    "blowfish", 
    "cuttlefish", 
    "goldfish", 
    "mahi", 
    "trout", 
    "grouper", 
    "bass"
];

function randInt(range) {
    let randomInteger = parseInt(Math.random() * range);
    return randomInteger;
}

function randFloat(range) {
    let randomFloat = parseFloat(Number(Math.random() * range).toFixed(2));
    return randomFloat;
}

function createFish() {
    const fish = {
        name: `${firstFishAdjectives[randInt(firstFishAdjectives.length - 1)]} ${secondfishAdjectives[randInt(secondfishAdjectives.length - 1)]} ${fishTypes[randInt(fishTypes.length - 1)]}`,
        weight: randFloat(5),
        value: randFloat(5)
    };

    return fish;
}

let fishesCaught = [];
function fishCalculation(fishes) {
    let totalFish = 0;
    let totalPound = 0;
    let totalValue = 0;

    for(let fish of fishes) {
        totalFish += 1;
        totalPound += fish.weight;
        totalValue += fish.value;
    }

    const fishCalculationReport = {
        totalFish: totalFish,
        totalPound: totalPound,
        totalValue: totalValue
    };

    return fishCalculationReport;
}


console.log();

let time = 6;
let pursue = true;
while(pursue) {
    if(time === 12) {
        console.log("==============================================================\n");
        console.log("Your time is up!");

        console.log(`You caugth ${fishesCaught.length} fish(es):`)
        for(let fishCaught of fishesCaught) {
            console.log(`* ${fishCaught.name}, ${fishCaught.weight}, $${fishCaught.value}`);
        }

        let report = fishCalculation(fishesCaught);

        console.log(`\nTotal weight: ${report.totalPound} lbs`);
        console.log(`Total value: $${report.totalValue}`);
        console.log("\n==============================================================\n");
        break;
    } 

    console.log("==============================================================");
    console.log(`The time is ${time}:00 am. So far you've caught:`);
    
    let report = fishCalculation(fishesCaught);
    console.log(`${report.totalFish} fish, ${report.totalPound} lbs, $${report.totalValue}`);

    console.log();
    let fishCaught = createFish();
    console.log(`You caught a ${fishCaught.name} weighing ${fishCaught.weight} lbs and valuated at $${fishCaught.value}`);
    console.log();

    do {
        console.log(`You action: ('[c]')}atch or ('[r]')}elease?`);
        let answer = prompt("> ");

        if(answer === "c") {
            if(report.totalPound + fishCaught.weight > 10) {
                console.log("This fish would put you over 10 lbs, so you release it.");
                fishCaught = null
            } else {
                console.log("You have chosen to catch the fish.");
                fishesCaught.push(fishCaught);
            }
            time += 1;
        } else if( answer === "r") {
            console.log("You have chosen to release the fish.");
            fishCaught = null;
            time += 1;
        } else {
            console.log("Please choose to [c]atch or [r]elease the fish!");
            continue;
        }
        break;
    } while(true);
}
