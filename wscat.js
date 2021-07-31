let readFilesObj = require('./commands/readFiles');
let appendFilesObj = require('./commands/appendFiles');
let linesBreaksObj = require('./commands/linesBreaks');
let inputArg = process.argv.slice(2);


switch (inputArg[0]) {
    case "-s":
        linesBreaksObj.linesBreaks(inputArg[1]);
        break;

    case "-n":
        appendFilesObj.appendFiles(inputArg[1]);
        break;

    default:
        let content = ""
        for (let i = 0; i < inputArg.length; ++i) {
            content += readFilesObj.readFiles(inputArg[i]);
            content += i == inputArg.length - 1 ? "" : "\n";
        }
        console.log(content);
}



