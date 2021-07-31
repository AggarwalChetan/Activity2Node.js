let fileSystem = require('fs');

function readFiles(props) {

    let isFileExists = fileSystem.existsSync(props);
    if (isFileExists == false) {
        console.log("File does not exists");
        return;
    }

    let content = fileSystem.readFileSync(props);
    return content;
}

module.exports = {
    readFiles: readFiles
}