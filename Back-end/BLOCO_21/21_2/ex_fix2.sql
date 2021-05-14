SELECT * FROM hotel.Reservations;
SELECT * FROM hotel.Customers;

SELECT * FROM hotel.Customers AS C
WHERE EXISTS (
	SELECT * FROM hotel.Reservations as ReservationS
    WHERE Reservations.CustomerId = C.CustomerId
);

SELECT * FROM hotel.Customers AS C
WHERE NOT EXISTS (
	SELECT * FROM hotel.Reservations as Reservations
    WHERE Reservations.CustomerId = C.CustomerId
);

SELECT * FROM praticando.manufacturers;
SELECT * FROM praticando.products;
SELECT count(`Name`) FROM praticando.manufacturers AS M
WHERE NOT EXISTS (
	SELECT * FROM praticando.products AS P
    WHERE P.Manufacturer = M.Code
);





