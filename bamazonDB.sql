CREATE DATABASE IF NOT EXISTS Bamazon;

CREATE TABLE IF NOT EXISTS Products (
	ItemId INTEGER AUTO_INCREMENT,
    primary key(ItemId),
    Product_Name VARCHAR(50),
    DepartmentName VARCHAR(50),
    Price Decimal(5,2),
    StockQuantity INTEGER
    );
  
USE Bamazon;

INSERT INTO Products (Product_Name, DepartmentName, Price, StockQuantity) VALUES ("Flute", "Music", 15.00, 7);
INSERT INTO Products (Product_Name, DepartmentName, Price, StockQuantity) VALUES ("Magical Sword", "Weaponry",  99.99, 2);
INSERT INTO Products (Product_Name, DepartmentName, Price, StockQuantity) VALUES ("Hammer", "Tools", 9.99, 10);
INSERT INTO Products (Product_Name, DepartmentName, Price, StockQuantity) VALUES ("Boots", "Clothing", 35.00, 5);
INSERT INTO Products (Product_Name, DepartmentName, Price, StockQuantity) VALUES ("Armor Tunic", "Clothing", 50.00, 5);
INSERT INTO Products (Product_Name, DepartmentName, Price, StockQuantity) VALUES ("Adamantium Shield", "Weaponry", 500.00, 1);
INSERT INTO Products (Product_Name, DepartmentName, Price, StockQuantity) VALUES ("Raft", "Sporting Goods", 85.00, 3);
INSERT INTO Products (Product_Name, DepartmentName, Price, StockQuantity) VALUES ("Bow", "Weaponry", 55.00, 6);
INSERT INTO Products (Product_Name, DepartmentName, Price, StockQuantity) VALUES ("Candy", "Food", 0.99, 200);
INSERT INTO Products (Product_Name, DepartmentName, Price, StockQuantity) VALUES ("Fairy", "Misc", 75.00, 3);
INSERT INTO Products (Product_Name, DepartmentName, Price, StockQuantity) VALUES ("Step Ladder", "Tools", 45.00, 5);

SELECT * FROM Products;

