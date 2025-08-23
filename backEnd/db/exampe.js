import { Client } from 'pg';

// Configuración de la conexión
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '',
    port: 5432,
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