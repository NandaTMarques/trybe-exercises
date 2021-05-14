SELECT * FROM sakila.payment
WHERE amount = 0.99 OR amount = 2.99 AND staff_id = 2;
SELECT * FROM sakila.payment
WHERE (amount = 0.99 OR amount = 2.99) AND staff_id = 2;

SELECT * FROM sakila.customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT first_name FROM sakila.customer
WHERE store_id = 2 AND active = 0
ORDER BY first_name ASC;

SELECT title, description, release_year,replacement_cost  FROM sakila.film
WHERE rating <> 'NC-17'
AND replacement_cost > 18
ORDER BY replacement_cost DESC, title ASC
LIMIT 100;

SELECT COUNT(*) FROM sakila.customer
WHERE store_id = 1 AND active = 1;

SELECT * FROM sakila.customer
WHERE store_id = 1
AND active IS false;

SELECT * FROM sakila.film;
SELECT title FROM sakila.film
WHERE rating = 'R'
OR rating = 'NC-17'
ORDER BY rental_rate ASC, title ASC LIMIT 50;

SELECT * FROM sakila.film
WHERE title LIKE '%don';

SELECT * FROM sakila.actor
WHERE first_name IN ('PENELOPE','NICK','ED','JENNIFER');

SELECT title, length FROM sakila.film
WHERE length BETWEEN 50 AND 120;

SELECT * FROM sakila.language
WHERE name BETWEEN 'Italian' AND 'Mandarin'
ORDER BY name;

SELECT * FROM sakila.rental
WHERE customer_id in(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

SELECT * FROM sakila.rental
WHERE customer_id BETWEEN(1) AND (10);