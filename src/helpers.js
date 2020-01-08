export function calcularTotal(cantidad, plazo) {
    /**
     * Cantidades
     * 0 - 1000 = 25%
     * 1001 - 5000 = 20%
     * 5001 - 10000 = 15%
     * +10000 = 10%
     */
    let totalCantidad;
    if (cantidad <= 1000) {
        totalCantidad = cantidad * .25;
    } else if (cantidad > 1000 && cantidad <= 5000) {
        totalCantidad = cantidad * .2;
    } else if (cantidad > 5000 && cantidad <= 10000) {
        totalCantidad = cantidad * .15;
    } else {
        totalCantidad = cantidad * .1;
    }
    console.log(totalCantidad);
}