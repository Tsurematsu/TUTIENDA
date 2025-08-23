async function main() {
    const productos = await fetch("http://192.168.80.14:3000/api/inventario").then(response => response.json());
    console.log(productos);
    console.log(productos.papasMargarita.costo);
    document.getElementById("precio-papas-margarita").innerText = productos.papasMargarita.costo;
}

main();