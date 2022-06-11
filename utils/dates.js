var data = new Date();
var dia = data.getDate(); 
var mes= data.getMonth();  
var ano4 = data.getFullYear(); 
var hora = data.getHours();
var min = data.getMinutes(); 
var seg = data.getSeconds(); 
var dia_hoje = dia + '' + (mes+1) + '' + ano4;
var hora_agora = hora 

 var dataHora = {
   hoje : dia_hoje,
   agora : hora_agora
  };

module.exports = { dataHora }
