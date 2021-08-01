let fileSystem = require('fs');

function readFiles(props) {
    return fileSystem.readFileSync(props);
}

module.exports = {
    readFiles: readFiles
}