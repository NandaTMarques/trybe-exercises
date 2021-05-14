select * from Scientists.Scientists
where Name like '%e%';

select * from Scientists.Projects
where Name like 'A%'
order by Name asc;

select Name, Code from Scientists.Projects
where Code like '%3%'
order by Name asc;

select * from Scientists.AssignedTo
where Project in('AeH3' , 'Ast3', 'Che1');

select * from Scientists.Projects
where Hours > 500;

select * from Scientists.Projects
where Hours > 250 and Hours < 800;
USE Scientists;
SELECT * FROM Projects WHERE Hours BETWEEN 250 AND 800;

select Name, Code from Scientists.Projects
where Name not like 'A%';

select Name from Scientists.Projects
where Code like '%H%';



