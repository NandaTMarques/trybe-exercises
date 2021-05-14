/*1. Monte uma procedure que exiba os 10 atores mais populares, baseado
em sua quantidade de filmes. Essa procedure não deve receber parâmetros
de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz
e a quantidade de filmes em que atuaram.*/
USE sakila;
DELIMITER $$

CREATE PROCEDURE MostarAtoresMaisPopulares()
BEGIN
	SELECT actor_id, COUNT(film_id) AS Quantidade_de_filmes
	FROM sakila.film_actor
	GROUP BY actor_id
	ORDER BY Quantidade_de_filmes DESC
	LIMIT 10;
END $$
DELIMITER ;

CALL MostarAtoresMaisPopulares();

/*2. Monte uma procedure que receba como parâmetro de entrada o nome da 
categoria desejada em uma string e que exiba o id do filme , seu titulo,
o id de sua categoria e o nome da categoria selecionada. Use as tabelas
film , film_category e category para montar essa procedure.*/

USE sakila;
DELIMITER $$

CREATE PROCEDURE TodasAsInformacoesDoFilme(IN categoria VARCHAR(50))
BEGIN
	SELECT f.film_id, f.title, fc.category_id, c.name
	FROM sakila.film f
	INNER JOIN sakila.film_category fc
	ON f.film_id = fc.film_id
	INNER JOIN sakila.category c
	ON c.category_id = fc.category_id
    WHERE categoria = c.name;
END $$

DELIMITER ;

CALL TodasAsInformacoesDoFilme('Drama');

/*3. Monte uma procedure que receba o email de um cliente como parâmetro
de entrada e diga se o cliente está ou não ativo, através de um parâmetro
de saída.*/

USE sakila;
DELIMITER $$

CREATE PROCEDURE MostrarAtividadeDoCliente(
    IN email_recebido VARCHAR(300),
    OUT atividade_do_cliente INT
)
BEGIN
    SELECT active INTO atividade_do_cliente
    FROM sakila.customer
    WHERE email = email_recebido;
END $$

DELIMITER ;
-- Usando
CALL MostrarAtividadeDoCliente('PATRICIA.JOHNSON@sakilacustomer.org', @atividade_do_cliente);
select @atividade_do_cliente;





