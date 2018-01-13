// Requiring my NPM packages
var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("console.table");



//Making my connection to mysql
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,


  user: "root",


  password: "",
  database: "sql_hwkDB"
});
//This function makes my list appear in the console
function makeList() {
  connection.query("SELECT * FROM products", function (err, res) {

    console.table(res);


  });

}


//This shows me that I'm connected 
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  //Here I am calling the make list and make purchase functions
  makeList();
  makePurchase();
});



//This function is making my inquirer prompt in the console 
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
//This is my promise to get the user answer back before calling checkQuanity
    .then(function (answers) {
      checkQuantity(answers.quantity, answers.id);

    })
}
//Here is where I am updating my quanity
function upDateQuantity(bobQuan, bobId) {

  var query = connection.query(
//This does my math to subtract 
    "UPDATE products SET quantity = quantity - ? WHERE id = ?", [bobQuan, bobId],

    function (err, res) {
      if (err) throw err;
      console.log(res);
      console.log("Expecting bobQuan: " + bobQuan);
      console.log("expecting bobId: " + bobId);

      makeList();

    
    }
  );
}
//This is checking my quantity and running logic to let the user know if there is enough product available
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





