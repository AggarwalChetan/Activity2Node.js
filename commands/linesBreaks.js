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
    let res = "";
    while (i < content.length) {
        if (content[i] == '') {
            if (spaces < 1) {
                res += '\n';
                ++spaces;
            }
        } else {
            res += content[i];
            res += '\n';
            spaces = 0;
        }
        ++i;
    }
    return res;
}

module.exports = {
    linesBreaks: linesBreaks
}