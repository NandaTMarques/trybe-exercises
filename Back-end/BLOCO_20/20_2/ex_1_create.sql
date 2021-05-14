CREATE DATABASE `Escola`;
CREATE TABLE IF NOT EXISTS Escola.Alunos (
    `Nome` VARCHAR(7) CHARACTER SET utf8,
    `Idade` INT
);
INSERT INTO Escola.Alunos VALUES
    ('Rafael', 25),
    ('Amanda', 30),
    ('Roberto', 45),
    ('Carol', 19),
    ('Amanda', 25);
SELECT DISTINCT Nomes, idades FROM sakila.Alunos;
SELECT DISTINCT Nome, Idade FROM Escola.Alunos;
SELECT DISTINCT Nome FROM Escola.Alunos;
SELECT DISTINCT Idade FROM Escola.Alunos;