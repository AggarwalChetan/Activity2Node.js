let readFilesObj = require('./commands/readFiles');
let appendFilesObj = require('./commands/appendFiles');
let linesBreaksObj = require('./commands/linesBreaks');
let numberFilesObj = require('./commands/numberFiles');

let inputArg = process.argv.slice(2);
let content = "";
switch (inputArg[0]) {
    case "-s":
        content = linesBreaksObj.linesBreaks(inputArg[1]);
        break;

    case "-n":
        content = appendFilesObj.appendFiles(inputArg[1]);
        break;

    case "-m":
        content = numberFilesObj.numberFiles(inputArg[1]);
        break;

    default:
        for (let i = 0; i < inputArg.length; ++i) {
            content += readFilesObj.readFiles(inputArg[i]);
            content += i == inputArg.length - 1 ? "" : "\n";
        }
}
console.log(content);



