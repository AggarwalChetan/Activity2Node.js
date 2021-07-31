let fileSystem = require('fs');

function linesBreaks(props) {

    let isFileExists = fileSystem.existsSync(props);
    if (isFileExists == false) {
        console.log("File does not exists");
        return;
    }

    let content = fileSystem.readFileSync(props).toString().split('\n');
    let i = 0;
    let spaces = 0;
    while (i < content.length) {
        if (content[i] == '') {
            if (spaces < 1) {
                console.log(content[i]);
                ++spaces;
            }
        } else {
            console.log(content[i]);
            spaces = 0;
        }
        ++i;
    }
}

module.exports = {
    linesBreaks: linesBreaks
}