let fileSystem = require('fs');

function numberFiles(props) {

    let isFileExists = fileSystem.existsSync(props);
    if (isFileExists == false) {
        console.log("File does not exists");
        return;
    }

    let content = fileSystem.readFileSync(props).toString().split('\n');
    let res = "";
    let number = 1;
    for (let i = 0; i < content.length; ++i) {
        if (content[i] != '') {
            res += number + " ";
            res += content[i];
            res += '\n';
            ++number;
        }else{
            res += content[i];
            res += '\n';
        }
    }

    fileSystem.writeFileSync(props, res);
}

module.exports = {
    numberFiles: numberFiles
}