-- desafio 1 - Escreva uma query SQL para alterar o nome da coluna 
-- street_address para address , mantendo o mesmo tipo e tamanho de dados.
use hr;
ALTER TABLE locations 
CHANGE STREET_ADDRESS ADDRESS VARCHAR(1000) NOT NULL;

-- desafio 2 - Escreva uma query SQL para alterar o nome da coluna 
-- region_name para region , mantendo o mesmo tipo e tamanho de dados.
use hr;
ALTER TABLE regions 
CHANGE REGION_NAME REGION VARCHAR(25);

select * from hr.regions;

-- desafio 3 - Escreva uma query SQL para alterar o nome da coluna 
-- country_name para country , mantendo o mesmo tipo e tamanho de dados.
use hr;
ALTER TABLE countries 
CHANGE COUNTRY_NAME COUNTRY varchar(40) DEFAULT NULL;

select * from hr.countries;



