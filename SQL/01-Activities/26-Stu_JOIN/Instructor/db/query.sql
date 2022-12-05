-- Add your code below and execute file in MySQL Shell --
SELECT * FROM 
book_prices JOIN favorite_books 
ON book_prices.id = favorite_books.book_price_id;

SELECT favorite_books.id, favorite_books.book_name, favorite_books.in_stock, book_prices.price FROM 
book_prices JOIN favorite_books 
ON book_prices.id = favorite_books.book_price_id;