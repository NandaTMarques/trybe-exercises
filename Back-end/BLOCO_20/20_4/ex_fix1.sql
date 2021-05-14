INSERT INTO `sakila`.`staff`
    (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
    ('Fernanda', 'Teixeira', 2, 'nanda@gmail.com', 1, 1, 'Fernanda', 'fefe123');

INSERT INTO `sakila`.`staff`
    (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
    ('Jeff', 'Bezos', 2, 'jeffbezos@gmail.com', 1, 1, 'jeffb', 'ImTheChamp'),
    ('Sekiro', 'Okami', 2, 'sekirowolf@gmail.com', 1, 1, 'okami', 'SekiroTheSamurai');

INSERT INTO sakila.actor(first_name, last_name)
	SELECT sakila.customer.first_name, sakila.customer.last_name
    FROM sakila.customer
    LIMIT 5;

SELECT * FROM sakila.store;

INSERT INTO sakila.category(name)
VALUES
	('Adventure'),
	('Romantic Comedy'),
	('Thriller');

INSERT INTO sakila.store(manager_staff_id, address_id)
VALUES(3, 3);

SELECT * FROM sakila.staff;

