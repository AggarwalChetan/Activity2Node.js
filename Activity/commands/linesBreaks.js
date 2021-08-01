let fileSystem = require('fs');

function linesBreaks(props) {
    let content = fileSystem.readFileSync(props).toString().split('\n');
    let i = 0;
    let spaces = 0;
    let res = "";
    while (i < content.length) {
        if (content[i] == '') {
            if (spaces < 1) {
                res += (i == content.length - 1 ? "" : '\n');
                ++spaces;
            }
        } else {
            res += content[i];
            res += (i == content.length - 1 ? "" : '\n');
            spaces = 0;
        }
        ++i;
    }
    return res;
}

module.exports = {
    linesBreaks: linesBreaks
}