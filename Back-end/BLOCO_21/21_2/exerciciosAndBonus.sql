/* Exercício 1: Utilizando o INNER JOIN , encontre as
vendas nacionais ( domestic_sales ) e internacionais 
( internationa_sales ) de cada filme. */

SELECT t1.title, t2.domestic_sales, t2.international_sales
FROM Pixar.Movies AS t1
INNER JOIN Pixar.BoxOffice AS t2
ON t1.id = t2.movie_id;

/* Exercício 2: Utilizando o INNER JOIN , faça uma busca que
retorne o número de vendas para cada filme que possui um 
número maior de vendas internacionais ( internationa_sales )
do que vendas nacionais ( domestic_sales ). */

SELECT t1.title, t2.international_sales
FROM Pixar.Movies AS t1
INNER JOIN Pixar.BoxOffice AS t2
ON t1.id = t2.movie_id
WHERE t2.international_sales > t2.domestic_sales;

/* Exercício 3: Utilizando o INNER JOIN , faça uma busca que 
retorne os filmes e sua avaliação ( rating ) em ordem decrescente.*/

SELECT t1.title, t2.rating
FROM Pixar.Movies AS t1
INNER JOIN Pixar.BoxOffice AS t2
ON t1.id = t2.movie_id
ORDER BY t2.rating DESC;

/*Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne
todos os dados dos cinemas, mesmo os que não possuem filmes em 
cartaz e, adicionalmente, os dados dos filmes que estão em cartaz
nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.*/

SELECT
    T.name, 
    T.location, 
    M.title, 
    M.director, 
    M.year, 
    M.length_minutes
FROM Pixar.Theater AS T
LEFT JOIN Pixar.Movies AS M
ON T.id = M.theater_id
ORDER BY T.name asc;

/*Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne
todos os dados dos filmes, mesmo os que não estão em cartaz e, 
adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz.
 Retorne os nomes dos cinemas em ordem alfabética.*/
SELECT
    M.title, 
    M.director, 
    M.year, 
    M.length_minutes,
    T.name,
    T.location
FROM Pixar.Movies AS M
RIGHT JOIN Pixar.Theater AS T
ON T.id = M.theater_id
ORDER BY T.name asc;
 
/*Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra 
utilizando INNER JOIN , que retornem os títulos dos filmes que 
possuem avaliação maior que 7.5.*/
SELECT m.title
FROM Pixar.Movies m
INNER JOIN Pixar.BoxOffice b
ON m.id = b.movie_id
WHERE rating > 7.5;

SELECT title FROM Pixar.Movies
WHERE id IN(
	SELECT movie_id FROM Pixar.BoxOffice
    where rating > 7.5
);

/*Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra 
utilizando INNER JOIN , que retornem as avaliações dos filmes 
lançados depois de 2009.*/
SELECT b.rating, m.year, m.title
FROM Pixar.BoxOffice b
INNER JOIN Pixar.Movies m
ON m.id = b.movie_id
WHERE year > 2009;

SELECT rating FROM Pixar.BoxOffice
WHERE movie_id IN(
	SELECT id FROM Pixar.Movies
	WHERE year > 2009
);

/*Exercício 8: Utilizando o EXISTS , selecione o nome e localização
 dos cinemas que possuem filmes em cartaz.*/
SELECT name, location FROM Pixar.Theater AS t
WHERE EXISTS (
	SELECT * FROM Pixar.Movies AS m
    WHERE t.id = m.theater_id
);
 
/*Exercício 9: Utilizando o EXISTS , selecione o nome e localização
dos cinemas que não possuem filmes em cartaz.*/
SELECT name, location FROM Pixar.Theater AS t
WHERE NOT EXISTS (
	SELECT * FROM Pixar.Movies AS m
    WHERE t.id = m.theater_id
);

/*Exercício 10: Utilizando o INNER JOIN , selecione todas as informações
dos filmes com avaliação maior que 8.*/
SELECT *
FROM Pixar.Movies m
INNER JOIN Pixar.BoxOffice b
ON m.id = b.movie_id
WHERE rating > 8;

SELECT m.id, m.title, m.director, m.year, m.length_minutes, m.theater_id
FROM Pixar.Movies m
INNER JOIN Pixar.BoxOffice b
ON b.movie_id = m.id
WHERE b.rating > 8 AND m.theater_id IS NOT NULL; -- ???

/*Exercício 11: Utilizando o SELF JOIN , selecione os títulos e duração
dos filmes que possuem o mesmo diretor.*/
SELECT t1.title, t1.length_minutes, t2.title, t2.length_minutes
FROM Pixar.Movies AS t1, Pixar.Movies AS t2
WHERE t1.director = t2.director and t1.title <> t2.title;

/*Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando
INNER JOIN , que retornem o título dos filmes que arrecadaram 500 milhões
ou mais, e que possuem duração maior que 110 minutos.*/
SELECT m.title
FROM Pixar.Movies m
INNER JOIN Pixar.BoxOffice b
ON m.id = b.movie_id
WHERE (b.domestic_sales >= 500000000
OR b.international_sales >= 500000000) 
AND m.length_minutes > 110;

SELECT rating FROM Pixar.BoxOffice
WHERE movie_id IN(
	SELECT id FROM Pixar.Movies
	WHERE year > 2009
);
SELECT title FROM Pixar.Movies
WHERE id IN(
	SELECT movie_id FROM Pixar.BoxOffice
    WHERE domestic_sales >= 500000000
	OR international_sales >= 500000000
)
AND length_minutes > 110;


SELECT * FROM Pixar.BoxOffice;
SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.Theater;




