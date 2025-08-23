import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
main();
async function main() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const app = express();
    const PORT = 3000;
    
    app.get('/api/productos', (req, res) => {
        res.json(["Manzana", "Banana", "Naranja"]);
    });

    app.get('/test', (req, res) => {
        res.json("Hola Jeremias el mas pro del html");
    });
    
    process.stdout.write('\x1Bc');
    app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
}
