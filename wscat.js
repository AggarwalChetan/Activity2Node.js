let fileSystem = require('fs');
let path = require('path');
let readFilesObj = require('./commands/readFiles');
let appendFilesObj = require('./commands/appendFiles');
let linesBreaksObj = require('./commands/linesBreaks');
let numberFilesObj = require('./commands/numberFiles');

let inputArg = process.argv.slice(2);
let content = "";
switch (inputArg[0]) {
    case "-s":
        if (inputArg[1] == "-m") {
            for (let i = 2; i < inputArg.length; ++i) {
                let isFileExists = fileSystem.existsSync(inputArg[i]);
                
                // Check for file Existence
                if (isFileExists == false) {
                    console.log(`\n                            *****************************************************
                            Error : File does not exists | Path not Found ${inputArg[i]}
                                *****************************************************`);
                    continue;
                }

                content += linesBreaksObj.linesBreaks(inputArg[i]);
                content += i == inputArg.length - 1 ? "" : "\n";
            }
            fileSystem.writeFileSync("temp.txt", content);
            content = numberFilesObj.numberFiles("temp.txt");
            fileSystem.unlinkSync("temp.txt");
        } else if (inputArg[1] == "-n") {
            for (let i = 2; i < inputArg.length; ++i) {
                let isFileExists = fileSystem.existsSync(inputArg[i]);
                
                // Check for file Existence
                if (isFileExists == false) {
                    console.log(`\n                            *****************************************************
                            Error : File does not exists | Path not Found ${inputArg[i]}
                                *****************************************************`);
                    continue;
                }

                content += linesBreaksObj.linesBreaks(inputArg[i]);
                content += i == inputArg.length - 1 ? "" : "\n";
            }
            fileSystem.writeFileSync("temp.txt", content);
            content = appendFilesObj.appendFiles("temp.txt");
            fileSystem.unlinkSync("temp.txt");
        } else {
            for (let i = 1; i < inputArg.length; ++i) {
                let isFileExists = fileSystem.existsSync(inputArg[i]);
                
                // Check for file Existence
                if (isFileExists == false) {
                    console.log(`\n                            *****************************************************
                            Error : File does not exists | Path not Found ${inputArg[i]}
                                *****************************************************`);
                    continue;
                }

                content += linesBreaksObj.linesBreaks(inputArg[i]);
                content += i == inputArg.length - 1 ? "" : "\n";
            }
        }
        break;

    case "-n":
        if (inputArg[1] == '-m') {
            for (let i = 2; i < inputArg.length; ++i) {
                let isFileExists = fileSystem.existsSync(inputArg[i]);
                
                // Check for file Existence
                if (isFileExists == false) {
                    console.log(`\n                            *****************************************************
                            Error : File does not exists | Path not Found ${inputArg[i]}
                                *****************************************************`);
                    continue;
                }

                content += appendFilesObj.appendFiles(inputArg[i]);
                content += i == inputArg.length - 1 ? "" : "\n";
            }
        } else if (inputArg[1] == '-s') {
            for (let i = 2; i < inputArg.length; ++i) {
                let isFileExists = fileSystem.existsSync(inputArg[i]);
                
                // Check for file Existence
                if (isFileExists == false) {
                    console.log(`\n                            *****************************************************
                            Error : File does not exists | Path not Found ${inputArg[i]}
                                *****************************************************`);
                    continue;
                }

                content += linesBreaksObj.linesBreaks(inputArg[i]);
                content += i == inputArg.length - 1 ? "" : "\n";
            }
            fileSystem.writeFileSync("temp.txt", content);
            content = appendFilesObj.appendFiles("temp.txt");
            fileSystem.unlinkSync("temp.txt");
        } else {
            for (let i = 1; i < inputArg.length; ++i) {
                let isFileExists = fileSystem.existsSync(inputArg[i]);
                
                // Check for file Existence
                if (isFileExists == false) {
                    console.log(`\n                            *****************************************************
                            Error : File does not exists | Path not Found ${inputArg[i]}
                                *****************************************************`);
                    continue;
                }

                content += appendFilesObj.appendFiles(inputArg[i]);
                content += i == inputArg.length - 1 ? "" : "\n";
            }
        }
        break;

    case "-m":
        if (inputArg[1] == '-n') {
            for (let i = 2; i < inputArg.length; ++i) {
                let isFileExists = fileSystem.existsSync(inputArg[i]);

                // Check for file Existence
                if (isFileExists == false) {
                    console.log(`\n                            *****************************************************
                            Error : File does not exists | Path not Found ${inputArg[i]}
                                *****************************************************`);
                    continue;
                }

                content += numberFilesObj.numberFiles(inputArg[i]);
                content += i == inputArg.length - 1 ? "" : "\n";
            }
        } else if (inputArg[1] == '-s') {
            for (let i = 2; i < inputArg.length; ++i) {
                let isFileExists = fileSystem.existsSync(inputArg[i]);

                // Check for file Existence
                if (isFileExists == false) {
                    console.log(`\n                            *****************************************************
                            Error : File does not exists | Path not Found ${inputArg[i]}
                                *****************************************************`);
                    continue;
                }

                content += linesBreaksObj.linesBreaks(inputArg[i]);
                content += i == inputArg.length - 1 ? "" : "\n";
            }
            fileSystem.writeFileSync("temp.txt", content);
            content = numberFilesObj.numberFiles("temp.txt");
            fileSystem.unlinkSync("temp.txt");
        } else {
            for (let i = 1; i < inputArg.length; ++i) {
                let isFileExists = fileSystem.existsSync(inputArg[i]);

                // Check for file Existence
                if (isFileExists == false) {
                    console.log(`\n                            *****************************************************
                            Error : File does not exists | Path not Found ${inputArg[i]}
                                *****************************************************`);
                    continue;
                }
                
                content += fileContent;
                content += i == inputArg.length - 1 ? "" : "\n";
            }
        }
        break;

    default:
        for (let i = 0; i < inputArg.length; ++i) {
            let isFileExists = fileSystem.existsSync(inputArg[i]);

            // Check for file Existence
            if (isFileExists == false) {
                console.log(`\n                            *****************************************************
                        Error : File does not exists | Path not Found ${inputArg[i]}
                            *****************************************************`);
                continue;
            }

            content += readFilesObj.readFiles(inputArg[i]);
            content += i == inputArg.length - 1 ? "" : "\n";
        }
}

console.log(content);




