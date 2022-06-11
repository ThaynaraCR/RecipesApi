const fs = require('fs')
const d = require('../utils/dates')
const fileLog = require('../utils/filesExists')

const pathDir = __dirname + `/../logs/${d.dataHora.hoje}`
var accessLogStream = null

const newStream =  () =>{
    
    if( fileLog.verifyFile(pathDir)){
        accessLogStream = fs.createWriteStream(pathDir + `/${d.dataHora.hoje}_${d.dataHora.agora}.txt`, 
             {flags: 'a'}
             )
        return accessLogStream
            
     }
}


module.exports = { newStream }