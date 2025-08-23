-- Active: 1755963012827@@192.168.80.13@5432@postgres

create table productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion TEXT,
    precio (10, 2),
    stock INT
);

