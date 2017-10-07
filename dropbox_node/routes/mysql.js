var mysql = require('mysql');

//Put your mysql configuration settings - user, password, database and port
function getConnection(){
    var connection = mysql.createConnection({
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

    connection.query(sqlQuery, function(err, rows, fields) {
        if(err){
            console.log("\n ERROR: " + err.message);
        }
        else
        {
            // return err or result
<<<<<<< HEAD
            console.log("\n DB Results:"+rows);
=======
            console.log("\n DB Results : "+rows.length);
>>>>>>> master
            callback(err, rows);
        }
    });
    console.log("\n Connection closed.");
    connection.end();
}

exports.dbOperation = dbOperation;