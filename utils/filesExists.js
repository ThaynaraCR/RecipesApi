const fs = require("fs");
  
const verifyFile = async (path) =>{

  await  fs.access(path, (fileNotExist) => {
    
        if (fileNotExist) {
          fs.mkdir(path, (errorToCreate) => {
            if (errorToCreate) {
              console.log(errorToCreate);
              return false
            } else {
             return true
            }
          });
        } else {
         return true
        }
      });

}

module.exports = {verifyFile}