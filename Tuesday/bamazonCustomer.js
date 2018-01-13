var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("console.table");




var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,


  user: "root",


  password: "",
  database: "sql_hwkDB"
});

function makeList() {
  connection.query("SELECT * FROM products", function (err, res) {

    console.table(res);


  });

}



connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  makeList();
  makePurchase();
});




function makePurchase() {
  inquirer.prompt([
    {
      name: "id",
      message: "What item do you want to buy?: "
    },
    {
      name: "quantity",
      message: "How many would you like to buy?: "
    }



  ])

    .then(function (answers) {
      checkQuantity(answers.quantity, answers.id);

    })
}

function upDateQuantity(bobQuan, bobId) {

  var query = connection.query(

    "UPDATE products SET quantity = quantity - ? WHERE id = ?", [bobQuan, bobId],

    function (err, res) {
      if (err) throw err;
      console.log(res);
      console.log("Expecting bobQuan: " + bobQuan);
      console.log("expecting bobId: " + bobId);

      makeList();

      // connection.end();
    }
  );
}

function checkQuantity(bobQuan, bobId) {
  connection.query("SELECT quantity FROM products WHERE id = ?", [bobId], function (err, res) {
    if (err) throw err;
    console.log(res);

    if (parseInt(bobQuan) > parseInt(res.quantity)) {
      console.log("Not that many in stock, please be less greedy!!")

    }
    else {
      upDateQuantity(bobQuan, bobId);
    }


    connection.end();
  })



}




// checkQuantity();
