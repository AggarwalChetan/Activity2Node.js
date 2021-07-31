let readFilesObj = require('./commands/readFiles');
let appendFilesObj = require('./commands/appendFiles');
let linesBreaksObj = require('./commands/linesBreaks');
let numberFilesObj = require('./commands/numberFiles');

let inputArg = process.argv.slice(2);
let content = "";
switch (inputArg[0]) {
    case "-s":
        for (let i = 1; i < inputArg.length; ++i) {
            content += linesBreaksObj.linesBreaks(inputArg[i]);
            content += i == inputArg.length - 1 ? "" : "\n";
        }
        break;

    case "-n":
        for (let i = 1; i < inputArg.length; ++i) {
            content += appendFilesObj.appendFiles(inputArg[i]);
            content += i == inputArg.length - 1 ? "" : "\n";
        }
        break;

    case "-m":
        for (let i = 1; i < inputArg.length; ++i) {
            content += numberFilesObj.numberFiles(inputArg[i]);
            content += i == inputArg.length - 1 ? "" : "\n";
        }
        break;

    default:
        for (let i = 0; i < inputArg.length; ++i) {
            content += readFilesObj.readFiles(inputArg[i]);
            content += i == inputArg.length - 1 ? "" : "\n";
        }
}

console.log(content);



