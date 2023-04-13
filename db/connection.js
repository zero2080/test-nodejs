const mysql = require('mysql2');
let pool = mysql.createPool({
  "host":"localhost",
  "user":"root",
  "password":"robotry",
  "database":"fitdo"  
});

module.exports = (callback)=>{
    pool.getConnection((err,conn)=>{
        if(!err){
            callback(conn);
        }
    });
}