import { Client } from 'pg';
import dotenv from 'dotenv';

// Configuración de la conexión
dotenv.config();

const client = new Client({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
});

async function main() {
    try {
        await client.connect();

        // Crear tabla de ejemplo
        await client.query(`
            CREATE TABLE IF NOT EXISTS productos (
                id SERIAL PRIMARY KEY,
                nombre VARCHAR(100),
                precio NUMERIC
            );
        `);

        // Insertar un producto
        const insertText = 'INSERT INTO productos(nombre, precio) VALUES($1, $2) RETURNING *';
        const insertValues = ['Manzana', 1.5];
        const insertResult = await client.query(insertText, insertValues);
        console.log('Producto insertado:', insertResult.rows[0]);

        // Obtener todos los productos
        const selectResult = await client.query('SELECT * FROM productos');
        console.log('Productos:', selectResult.rows);
    } catch (err) {
        console.error('Error:', err);
    } finally {
        await client.end();
    }
}

main();