const mysql = require("mysql2");

const pool = mysql.createPool({
    host : '45.55.136.114',
    user : 'F2023_jrizo02',
    database : 'F2023_jrizo02',
    password: "GoliathHer0n!"
});

// const pool = mysql.createPool({
//     host : '45.55.136.114',
//     user : 'F2023_mmendiola01',
//     database : 'F2023_mmendiola0',
//     password: "BlueMarlin23!"
// });

module.exports = pool.promise();