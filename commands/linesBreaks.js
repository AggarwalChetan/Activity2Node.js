let fileSystem = require('fs');

function linesBreaks (props){
    let content = fileSystem.readFileSync(props).toString().split('\n');
    let res = "";
    let i = 0;
    let spaces = 0;
    while(i < content.length){
        if(content[i] == '\r'){
            if(spaces < 1){
                console.log(content[i]);
                ++ spaces;
            }
        }else{
            console.log(content[i]);
            spaces = 0;
        }
        ++ i;
    }
}

module.exports = {
    linesBreaks : linesBreaks
}