drop database if exists DB_ahorcado;
Create database DB_ahorcado;
use DB_ahorcado;


create table palabras (
    id int auto_increment primary key,
    palabra varchar(50) not null,
    pista1 varchar(255) not null,
    pista2 varchar(255) not null,
    pista3 varchar(255) not null
);

Delimiter $$
create procedure insertarpalabra(
    in p_palabra varchar(50),
    in p_pista1 varchar(255),
    in p_pista2 varchar(255),
    in p_pista3 varchar(255)
)
begin
    insert into palabras (palabra, pista1, pista2, pista3)
    values (p_palabra, p_pista1, p_pista2, p_pista3);
end $$
Delimiter ;

Delimiter $$
create procedure obtener_palabras()
begin
    select id, palabra, pista1, pista2, pista3 from palabras;
end $$
Delimiter ;

Delimiter $$
Create procedure obtener_palabra_aleatoria()
begin
    select id, palabra, pista1, pista2, pista3 
    from palabras 
    order by RAND() 
    limit 1;
end $$
DELIMITER ;


call insertarpalabra(
    'PROGRAMACION',
    'Se usa para crear software y aplicaciones.',
    'Requiere lógica, algoritmos y sintaxis.',
    'Lenguajes populares: Java, Python, JavaScript.'
);

call insertarpalabra(
    'DESARROLLO',
    'Proceso de crear aplicaciones.',
    'Incluye diseño y codificación.',
    'Puede ser web o móvil.'
);

call insertarpalabra(
    'ALGORITMO',
    'Conjunto de pasos para resolver un problema.',
    'Se usa en informática.',
    'Debe ser eficiente.'
);

call insertarpalabra(
    'COMPUTADORA',
    'Dispositivo electrónico.',
    'Procesa información.',
    'Puede ser de escritorio o portátil.'
);

call insertarpalabra(
    'INTERNET',
    'Red global.',
    'Conecta millones de computadoras.',
    'Se usa para compartir información.'
);

