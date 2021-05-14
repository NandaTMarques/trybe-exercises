CREATE DATABASE IF NOT EXISTS zoo;

USE zoo;
CREATE TABLE especies (
	Especie_id INT PRIMARY KEY auto_increment,
    Nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE gerentes (
	Gerente_id INT PRIMARY KEY auto_increment,
	Nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE cuidadores (
	Cuidador_id INT PRIMARY KEY auto_increment,
	Nome VARCHAR(50) NOT NULL,
	Gerente_id INT NOT NULL,
	FOREIGN KEY (Gerente_id) REFERENCES gerentes(Gerente_id)
) ENGINE=InnoDB;

CREATE TABLE animais (
	Animal_id INT PRIMARY KEY auto_increment,
    Nome VARCHAR(50) NOT NULL,
    Especie INT NOT NULL,
    Sexo VARCHAR(10) NOT NULL,
    Idade INT NOT NULL,
    Localizacao VARCHAR(50) NOT NULL,
    Cuidador INT NOT NULL,
    FOREIGN KEY (Especie) REFERENCES especies(Especie_id),
    FOREIGN KEY (Cuidador) REFERENCES cuidadores(Cuidador_id)
) ENGINE=InnoDB;


