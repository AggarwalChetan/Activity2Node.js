let fileSystem = require('fs');

function readFiles (props){
    let content = fileSystem.readFileSync(props);
    return content;
}

module.exports = {
    readFiles : readFiles
}