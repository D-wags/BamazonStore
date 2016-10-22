
// get dependencies
var mysql = require('mysql');
var inquirer = require('inquirer');
var sprintf = require("sprintf-js").sprintf;



// create SQL connection
var conn = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'hippo666',
	database: 'Bamazon'
});

conn.connect(function(err) {
	if (err) {
		console.log(err);
		// throw err;
	}

});

//SQL SELECT statement to display store inventory
var query = "SELECT * FROM Products;"
conn.query(query, function(err, res) {
	if (err) {
 		console.log(err);
		// throw err;
	}
	else {
		// console.log(res);
		var itemList = res;
		console.log("");
		

		
		console.log("Catalogue Number	Product 	  Department 	  Price     Quantity");
		console.log("");
		for (var i = 0; i < itemList.length; i++) {
			console.log(sprintf("%10.0i", itemList[i].ItemId), sprintf("%20s", itemList[i].Product_Name), sprintf("%20s", itemList[i].DepartmentName), sprintf("%10.2f", itemList[i].Price), sprintf("%10.0i", itemList[i].StockQuantity));
		}
		console.log("");

	}


// obtain customer input about desired product
inquirer.prompt([

	{
	name: "product",
	message: "What is the Catalogue Number of the item you would like to purchase: "
	},

	{
	name: "quantity",
	message: "What quantity would you like: "
	}

]).then(function(order) {
	var query = "SELECT * FROM Products WHERE ItemId=" + order.product + ";";
	conn.query(query, function(err, res){
		if (err) {
			console.log(err);
		}
		else {
			var item = res[0];
			
			if (item.StockQuantity >= Number(order.quantity)) {

				var newInv = item.StockQuantity - Number(order.quantity);
				console.log(newInv);

				// SQL update statement after transaction
				query = "UPDATE Products SET StockQuantity=" + newInv +  " WHERE ItemId = " + order.product; 
				
				conn.query(query, function(err, res){
					var total_price = parseInt(order.quantity) * item.Price;
					console.log("You have purchased " + order.quantity + " " + item.Product_Name + "(s) for a total price of $" + total_price);
				});


			}

			// conditional for insufficient quantity
			else {
				console.log("Insufficient Quantity");
			}
		}
	});
	});
});






