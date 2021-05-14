CREATE DATABASE IF NOT EXISTS normalization;

USE normalization;
CREATE TABLE Funcionarios (
	Funcionario_id INT PRIMARY KEY auto_increment,
    Nome VARCHAR(50) NOT NULL,
    Sobrenome VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Telefone VARCHAR(100) NOT NULL,
    Data_de_cadastro TIMESTAMP NULL DEFAULT current_timestamp
) ENGINE=InnoDB;

USE normalization;
CREATE TABLE Setor (
	Setor_id INT PRIMARY KEY auto_increment,
    Nome_setor VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

USE normalization;
CREATE TABLE Funcionario_setor (
	Funcionario_id INT NOT NULL,
    Setor_id INT NOT NULL,
    FOREIGN KEY (Funcionario_id) REFERENCES Funcionarios(Funcionario_id),
    FOREIGN KEY (Setor_id) REFERENCES Setor(Setor_id)
) ENGINE=InnoDB;

INSERT INTO Funcionarios(Funcionario_id, Nome, Sobrenome, Email, Telefone, Data_de_cadastro)
VALUES
	(12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25'),
    (13, 'André', 'Freeman', 'andre1990@gmail.com',	'(47)99522-4996', '2020-02-05 00:00:00'),
    (14, 'Cíntia',	'Duval',	'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35'),
    (15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');

INSERT INTO Setor(Nome_setor) VALUES
('Vendas'),
('Administração'),
('Operacional'),
('Estrategico'),
('Marketing');

INSERT INTO Funcionario_setor(funcionario_id, Setor_id) VALUES
(12, 1),
(12, 2),
(13, 3),
(14, 4),
(14, 1),
(15, 5);




select * from normalization.Funcionario_setor;




