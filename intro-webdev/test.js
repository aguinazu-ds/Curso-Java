var precioCalzado = parseInt(prompt("Ingrese el precio del calzado"));

if (precioCalzado > 10000) {
    var descuento = precioCalzado * 0.30;
}
else if (precioCalzado > 5000 && precioCalzado <= 10000) {
    descuento = precioCalzado * 0.10;
}
else {
    descuento = 0;
}

var totalPagar = precioCalzado - descuento;

document.write("El total a pagar es: ", totalPagar);
