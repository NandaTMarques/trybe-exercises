SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON a.actor_id = f.actor_id;

SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;
-- 1
SELECT a.actor_id, a.first_name, f.actor_id, f.film_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON a.actor_id = f.actor_id;
-- 2
SELECT s.first_name, s.last_name, s.address_id, a.address_id, a.address
FROM sakila.staff AS s
INNER JOIN sakila.address AS a
ON s.address_id = a.address_id;
-- 3
SELECT c.customer_id, c.first_name, c.email, c.address_id, a.address_id, a.address
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;
-- 4
SELECT c.first_name, c.email, c.address_id, a.address_id, a.address, a.district
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE a.district = 'California'
AND c.first_name LIKE '%rene%';
-- 5
SELECT c.first_name, COUNT(a.address) AS 'Quant_Address'
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE c.active = 1
GROUP BY c.first_name
-- having Quant_Address > 1
ORDER BY c.first_name DESC;
-- 6
SELECT s.first_name, s.last_name, AVG(p.amount)
FROM sakila.payment AS p
INNER JOIN sakila.staff AS s
ON p.staff_id = s.staff_id
WHERE YEAR(p.payment_date) = 2006
GROUP BY s.first_name, s.last_name;

SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;
SELECT * FROM sakila.film;
-- 7
SELECT DISTINCT a.actor_id, a.first_name, fa.film_id, f.title
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS fa
INNER JOIN sakila.film AS f
ON fa.film_id = f.film_id;
-- exemplos 1
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer c
LEFT JOIN sakila.actor a
ON c.last_name = a.last_name
ORDER BY c.last_name;
-- exemplos 2
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer c
RIGHT JOIN sakila.actor a
ON c.last_name = a.last_name
ORDER BY c.last_name;
-- exemplos 3
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer c
INNER JOIN sakila.actor a
ON c.last_name = a.last_name
ORDER BY c.last_name;
-- Self Join
/* buscar o título e o custo de substitução ( replacement_cost )
dos filmes que possuem a mesma duração, */ 
SELECT t1.title, t1.replacement_cost, t2.title, t2.replacement_cost
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.length = t2.length;

SELECT t1.title, t1.film_id, t1.replacement_cost, t2.title, t2.film_id, t2.replacement_cost
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.replacement_cost = t2.replacement_cost;

SELECT t1.title, t1.rental_duration, t2.title, t2.rental_duration
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.rental_duration = t2.rental_duration
HAVING t1.rental_duration BETWEEN 2 AND 4;

SELECT A.title, A.rental_duration, B.title, B.rental_duration
FROM sakila.film AS A, sakila.film AS B
WHERE A.rental_duration = B.rental_duration
HAVING A.rental_duration BETWEEN 2 AND 4;

-- Union
SELECT first_name, last_name
FROM sakila.actor
UNION ALL
SELECT first_name, last_name
FROM sakila.staff;

SELECT first_name FROM sakila.customer
where first_name like '%tracy%'
UNION
SELECT first_name FROM sakila.actor
where first_name like '%je%';

(SELECT first_name
FROM sakila.actor
ORDER BY actor_id DESC limit 5)
UNION
(SELECT first_name
FROM sakila.staff
ORDER BY staff_id limit 1)
UNION
(SELECT first_name
FROM sakila.customer
ORDER BY customer_id DESC limit 5 offset 15)
ORDER BY first_name;

SELECT * FROM sakila.film;
SELECT * FROM sakila.customer;
SELECT * FROM sakila.actor;

(SELECT first_name, last_name
FROM sakila.actor)
UNION ALL
(SELECT first_name, last_name
FROM sakila.customer)
ORDER BY first_name
limit 15 offset 45;

-- SUBQUERY

-- 1. Usando uma SUBQUERY como fonte de dados para o FROM
SELECT f.title, f.rating
FROM (
    SELECT *
    FROM sakila.film
    WHERE rating = 'R'
) AS f;
SELECT *
FROM sakila.film
WHERE rating = 'R';

-- 2. Preenchendo uma coluna de um SELECT por meio de uma SUBQUERY
SELECT
    address,
    district,
    (
        SELECT city
        FROM sakila.city
        WHERE city.city_id = sakila.address.city_id
    ) AS city
FROM sakila.address;

-- 3. Filtrando resultados com WHERE usando como base os dados
-- retornados de uma SUBQUERY
SELECT address, district
FROM sakila.address
WHERE city_id in (
    SELECT city_id
    FROM sakila.city
    WHERE city in ('Sasebo', 'San Bernardino', 'Athenai', 'Myingyan')
);

-- 4. Usando uma tabela externa, de fora da SUBQUERY , dentro dela.
SELECT
    first_name,
    (
        SELECT address
        FROM sakila.address
        WHERE address.address_id = tabela_externa.address_id
    ) AS address
FROM sakila.customer AS tabela_externa;

SELECT c.first_name, ad.address
FROM sakila.customer c
INNER JOIN sakila.address ad 
ON c.address_id = ad.address_id;





