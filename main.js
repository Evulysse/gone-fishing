const prompt = require("prompt-sync")({signit: true});
console.log()
console.log('Welcome to gone fishing. Try to maximize the value of your caught fish. You can fish for 6 hours and catch up to 10lbs of fish\n')  

let goneFishing = [];

function createTodoItem(fishLabel, fishStatus) {
    return {
        label: fishLabel,
        status: fishStatus
    };
}
function main() {
    console.log("=============================================================");
    console.log();

    let numOfFish = goneFishing.length;

    if(numOfFish === 0) {
        console.log("You have no fish! Let's catch some\n");
    } else {
        console.log(`There are ${numOfFish} item(s) in your bucket:\n`);
    }










}
