const mysql = require("mysql");
const connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "kil9uzd3tgem3naa.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "ado784vd6vvm4khc",
    password: "lze5do1p3v9xikel",
    database: "tzbt2638r3hfho9y"
  });
}
connection.connect();
module.exports = connection;