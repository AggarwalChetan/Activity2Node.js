let fileSystem = require('fs');

function appendFiles(props) {  
    let content = fileSystem.readFileSync(props).toString().split('\n');
    let res = "";
    for (let i = 1; i <= content.length; ++i) {
        res += i + " ";
        res += content[i - 1];
        res += (i == content.length ? "" : '\n');
    }
    return res;
}

module.exports = {
    appendFiles: appendFiles
}