import mysql2 from "mysql2/promise";

const pool = mysql2.createPool({
    host: "localhost",
    user: "root",
    // password: nada/nothing/goornisht/null/fs,
    database: "soldiers",
    connectionLimit: 10,
});

export default pool











