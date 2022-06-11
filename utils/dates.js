var data = new Date();
var day = data.getDate(); 
var month= data.getMonth();  
var year = data.getFullYear(); 
var hour = data.getHours();
var today = day + '' + (month+1) + '' + year;
var now = hour 

 var datahour = {
   today ,
   now 
  };

module.exports = { datahour }
