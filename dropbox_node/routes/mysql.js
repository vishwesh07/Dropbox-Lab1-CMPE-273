var mysql = require('mysql');

//Put your mysql configuration settings - user, password, database and port
function getConnection(){
    var connection = mysql.createPool({
        connecitonLimit : 20,
        host     : 'localhost',
        user     : 'root',
        password : '#VishwesH@07#',
        database : 'dropbox',
        port	 : 3306
    });
    return connection;
}

function dbOperation(callback,sqlQuery){

    console.log("\nSQL Query : "+sqlQuery);

    var connection=getConnection();

    connection.getConnection(function(err, connection) {
        connection.query(sqlQuery, function (err, rows, fields) {
            if (err) {
                console.log("\n ERROR: " + err.message);
                connection.release();
            }
            else {
                console.log("\n DB Results : " + rows.length);
                callback(err, rows);
            }
            console.log("\n Connection closed.");
        });
        connection.release();
    });
}

exports.dbOperation = dbOperation;