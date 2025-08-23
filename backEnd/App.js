import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

main();

async function main() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const app = express();
    const PORT = 3000;

    // Permitir CORS para cualquier origen
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        next();
    });

    app.get('/api/productos', (req, res) => {
        res.json(["Manzana", "Banana", "Naranja"]);
    });

app.get('/api/inventario', (req, res) => {
        res.json({
            "papasMargarita" :{
                cantidad: 20,
                costo: 3000
            },
            "Gancitos": {
                cantidad: 30,
                costo: 1200
            },
            "CocaCola": {
                cantidad: 15,
                costo: 3500
            }

        });
    });
    
    app.get('/test', (req, res) => {
        res.json("Hola Jeremias el mas pro del html");
    });

    process.stdout.write('\x1Bc');
    app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
}
