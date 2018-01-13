var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
  
    
    user: "root",
  
    
    password: "",
    database: "sql_hwkDB"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    
  });

  
function updateQuantity(){
    inquirer.prompt([
      {
        name: "id",
        message: "What item do you want to buy?: "
    }, 
    {
        name: "quantity",
        message: "How many would you like to buy?: "
    }
    
    // UPDATE `a75ting`.`username` SET `points` = '`points` - 5'
    
    ]).then(function(answers){
      var query = connection.query(
        "UPDATE products SET ?",
        {
         
          quantity: answers.quantity
        },
        function(err, res) {
            if (err) throw err;
            console.log(res);
        
        connection.end();
        }
      );
    })
  }







  updateQuantity();