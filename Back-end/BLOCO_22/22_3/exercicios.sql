-- exercicio 1

USE sakila;
CREATE VIEW film_with_categories AS
SELECT F.title, C.category_id, C.name
FROM film AS F
INNER JOIN film_category AS FC
ON FC.film_id = F.film_id
INNER JOIN category AS C
ON C.category_id = FC.category_id
ORDER BY F.title;

SELECT * FROM film_with_categories;

-- exercicio 2
USE sakila;
CREATE VIEW film_info2 AS
SELECT 
fa.actor_id,
CONCAT(a.first_name, ' ', a.last_name) AS `actor`,
f.title
FROM actor AS a
INNER JOIN film_actor AS fa
ON fa.actor_id = a.actor_id
INNER JOIN film AS f
ON f.film_id = fa.film_id
ORDER BY `actor`;

SELECT * FROM film_info2;
drop view film_info;

-- exercicio 3
USE sakila;
CREATE VIEW address_info AS
SELECT 
a.address_id,
a.address,
a.district,
c.city_id,
c.city
FROM address AS a
INNER JOIN city AS c
ON c.city_id = a.city_id
ORDER BY c.city;

SELECT * FROM address_info;

-- exercicio 4
USE sakila;
CREATE VIEW movies_languages AS
SELECT 
f.title,
f.language_id,
l.name
FROM film AS f
INNER JOIN language AS l
ON l.language_id = f.language_id;

SELECT * FROM movies_languages;

/* 1. Verifique o impacto de um FULLTEXT INDEX na tabela 
ategory (banco de dados sakila ), adicionando-o na coluna name.*/ 

-- Após ter criado o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');

-- Após ter excluído o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE name LIKE '%action%';

/* 2. Verifique o impacto de um INDEX na tabela address (banco de 
dados sakila ) adicionando-o na coluna postal_code. */

-- Mensure o custo com a seguinte query:
SELECT *
FROM sakila.address
WHERE postal_code = '36693';