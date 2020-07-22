var mysql = require('mysql');


var con  = mysql.createPool({
  connectionLimit : 10,
  host            : '146.83.216.224',
  user            : 'la2020',
  password        : 'la2020',
  database        : 'moodle'
});

module.exports=con;
