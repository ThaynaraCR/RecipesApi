const fs = require('fs')
const d = require('../utils/dates')
const fileLog = require('../utils/filesExists')

const pathDir = __dirname + `/../logs/${d.datahour.today}`
var accessLogStream = null

const newStream =  () =>{
    
    if( fileLog.verifyFile(pathDir)){
        accessLogStream = fs.createWriteStream(pathDir + `/${d.datahour.today}_${d.datahour.now}.txt`, 
             {flags: 'a'}
             )
        return accessLogStream
            
     }
}


module.exports = { newStream }