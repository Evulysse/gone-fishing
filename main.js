const prompt = require("prompt-sync")({signit: true});
console.log()
console.log('Welcome to gone fishing. Try to maximize the value of your caught fish. You can fish for 6 hours and catch up to 10lbs of fish\n')  

let goneFishing = [];

// function createGoneFishing(fishLabel, fishStatus) {
//     return {
//         label: fishLabel,
//         status: fishStatus
//     };
// }
function main() {
    console.log("=============================================================");
    console.log();

    let numOfFish = goneFishing.length;

    if(numOfFish === 0) {
        console.log("You have no fish! Let's catch some\!!!\n");
    } else {
        console.log(`There are ${numOfFish} item(s) in your bucket:\n`);
    }

}
// ======Generate random fish============================

// [slippery, slimy, flippery, squeaky, rowdy, curly, flaky, dreary, scary, flappy]
// [scaly, enormous, big-mouthed, bubble-eyed, finned, deepsea, snappy, tiny, grey, yellow-tail ]
// [tuna, salmon, snapper, herring, blowfish, cuttlefish, goldfish, mahi, trout, grouper]


/* roll the dice example  ----...--..
const dice =Math.ceil(Math.random()*6);

console.log(dice);   ---------  */



// exit================================================================
let exit = false;
while(exit === false) {
    main();    

    do {
        console.log();
        let answer = prompt(" Do you want to exit?(Y/n):");
        console.log();
        if(answer === "Y" || answer === "y") {
            console.log("Have a great day, thanks for playing.")
            exit = true;
            break;
        } else if(answer === "N" || answer === "n") {
            console.log("Keep on fishing!!!")
            exit = false;
            break;
        } else {
            console.log("Please choose 'y' or 'n'");
            continue;
        }

    } while(true);
}


