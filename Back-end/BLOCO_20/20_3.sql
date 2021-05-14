SELECT * FROM sakila.film
WHERE title LIKE '%ace%';

SELECT * FROM sakila.film
WHERE description LIKE '%china';

SELECT * FROM sakila.film
WHERE description LIKE '%girl%' AND title LIKE '%lord';

SELECT * FROM sakila.film
WHERE title LIKE '___gon%' LIMIT 2;

SELECT * FROM sakila.film
WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';

SELECT * FROM sakila.film
WHERE title LIKE '%academy' OR title LIKE 'mosquito%';

SELECT * FROM sakila.film
WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';

SELECT first_name, last_name, email FROM sakila.customer
WHERE last_name 
IN('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name ASC;

SELECT email FROM sakila.customer
WHERE address_id in(172, 173, 174, 175, 176)
ORDER BY address_id ASC;

select count(*) from sakila.payment
where payment_date
between '2005-05-01' and '2005-08-01';

SELECT title, release_year, rental_duration FROM sakila.film
where rental_duration
between 3 and 6
order by rental_duration desc, title asc;

SELECT title, rating FROM sakila.film
where rating in('G', 'PG', 'PG-13')
order by title asc
limit 500;





