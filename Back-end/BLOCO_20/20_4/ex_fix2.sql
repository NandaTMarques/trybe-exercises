SET SQL_SAFE_UPDATES = 0;

UPDATE sakila.actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

UPDATE sakila.category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';

UPDATE sakila.film
SET rental_rate = 25
WHERE length > 100 
AND rating IN('G', 'PG', 'PG-13')
AND replacement_cost > 20;

UPDATE sakila.film
SET rental_rate = (
CASE
	WHEN length BETWEEN 0 AND 100 THEN 10
	WHEN length > 100 THEN 20
END);

SELECT * FROM sakila.film_text;

DELETE FROM sakila.film_actor
where actor_id = 12;

DELETE FROM sakila.actor
WHERE first_name = 'KARL';

SELECT actor_id FROM sakila.actor
WHERE first_name = 'MATTHEW';

DELETE FROM sakila.film_actor
WHERE actor_id in(8, 103, 181);

DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW';

SELECT * FROM sakila.film_text
WHERE description LIKE '%saga%';

DELETE FROM sakila.film_text
WHERE description LIKE '%saga%';

TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;








