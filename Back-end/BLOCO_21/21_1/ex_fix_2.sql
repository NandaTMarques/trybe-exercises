SELECT IF(15 MOD 2 = 0, 'É PAR', 'É IMPAR') AS 'PAR OU IMPAR?';
SELECT 220 DIV 12 AS 'QUANTOS GRUPOS DE 12 PESSOAS?';
SELECT 220 MOD 12 AS 'TEMOS QUANTOS LUGARES SOBRANDO?';

SELECT ROUND(15 +(RAND() * 5));
SELECT ROUND(15.75, 5);
SELECT FLOOR(39.494);
SELECT CEIL(85.234);

SELECT DATEDIFF('2030-01-20', '2021-04-15');
SELECT DATEDIFF('2030-01-20', NOW());
SELECT DATEDIFF('2030-01-20', CURRENT_DATE());
SELECT TIMEDIFF('10:25:45', '11:00:00');

SELECT * FROM sakila.film;
SELECT AVG(length) AS 'Média de duração' FROM sakila.film;
SELECT MIN(length) AS 'Média de Mínima' FROM sakila.film;
SELECT MAX(length) AS 'Média de Máxima' FROM sakila.film;
SELECT SUM(length) AS 'Exibição Total' FROM sakila.film;
SELECT COUNT(*) AS 'Filmes Registrados' FROM sakila.film;

SELECT AVG(length) AS 'Média de duração',
	MIN(length) AS 'Média de Mínima',
	MAX(length) AS 'Média de Máxima',
	SUM(length) AS 'Exibição Total',
	COUNT(*) AS 'Filmes Registrados'
FROM sakila.film;

SELECT * FROM sakila.customer;

SELECT active, COUNT(*) 
FROM sakila.customer
GROUP BY active;

SELECT store_id, active, COUNT(*) 
FROM sakila.customer
GROUP BY store_id, active;

SELECT * FROM sakila.film;

SELECT AVG(rental_duration) AS MEDIA_RENTAL, rating 
FROM sakila.film
GROUP BY rating
ORDER BY MEDIA_RENTAL DESC;

SELECT * FROM sakila.address;

SELECT district, COUNT(*) AS QUANTIDADE_DE_ENDEREÇOS 
FROM sakila.address
GROUP BY district
ORDER BY QUANTIDADE_DE_ENDEREÇOS DESC;

SELECT rating, AVG(length) AS DURACAO_MEDIA
FROM sakila.film
GROUP BY rating
HAVING DURACAO_MEDIA between 115.0 AND 121.50
ORDER BY DURACAO_MEDIA DESC;

SELECT rating, SUM(replacement_cost) AS total_substituição_custo
FROM sakila.film
GROUP by rating
HAVING total_substituição_custo > 3950.50
ORDER BY total_substituição_custo ASC;







