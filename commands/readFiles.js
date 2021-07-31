let fileSystem = require('fs');

function readFiles(props) {

    let isFileExists = fileSystem.existsSync(props);
    if (isFileExists == false) {
        console.log("File does not exists");
        return;
    }

    return fileSystem.readFileSync(props);
}

module.exports = {
    readFiles: readFiles
}