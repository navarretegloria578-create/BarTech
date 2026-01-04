let total = 0;

function agregarPedido(nombre, precio) {
    const lista = document.getElementById("pedido");
    const totalSpan = document.getElementById("total");

    // Crear elemento del pedido
    const item = document.createElement("li");
    item.innerText = `${nombre} - $${precio} MXN`;
    lista.appendChild(item);

    // Asegurar suma numérica
    total = Number(total) + Number(precio);

    // Actualizar total en pantalla
    totalSpan.innerText = total;
}

function enviarPedido() {
    if (total <= 0) {
        alert("❌ No has agregado ningún producto");
        return;
    }

    alert(`✅ Pedido enviado correctamente 🍻\nTotal a pagar: $${total} MXN`);

    // Resetear pedido (opcional pero recomendado)
    document.getElementById("pedido").innerHTML = "";
    total = 0;
    document.getElementById("total").innerText = total;
}