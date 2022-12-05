DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;

USE books_db;

CREATE TABLE book_prices (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, -- book_prices.id
  price INT NOT NULL
);

CREATE TABLE favorite_books (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, -- favorite_books.id
  book_name VARCHAR(30) NOT NULL,
  in_stock BOOLEAN,
  book_price_id INT, -- favorite_books.book_price_id
  FOREIGN KEY (book_price_id)
  REFERENCES book_prices(id)
  -- book_price column 
  -- is the same as the book_prices table's id column
  ON DELETE SET NULL
);

