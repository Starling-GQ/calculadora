document.getElementById("calcular").addEventListener("click", function() {

    // Obtenemos los valores de los campos de entrada variabls
 var capital = parseFloat(document.getElementById("capital").value);
    var interes = parseFloat(document.getElementById("interes").value) / 100; // Convertimos el interés a decimal
    var plazo = parseInt(document.getElementById("plazo").value);

    // Verificamos que los valores sean válidos so mimo
    if (isNaN(capital) || isNaN(interes) || isNaN(plazo) || capital <= 0 || interes <= 0 || plazo <= 0) {
        alert("Por favor, ingresa valores válidos en todos los campos.");
        return;
    }

    //  la cuota del préstamo utilizando la fórmula
    var cuota = calcularCuotaPrestamo(capital, interes, plazo);

    //  total de intereses pagados klk
    var totalInteresPagado = cuota * plazo - capital;

    //  resultados en la alerta
    //replace(/\B(?=(\d{3})+(?!\d))/g, ",")  pone las comas en los numeros y el strong en negrita los numros 
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "Cuota mensual estimada: <strong> DOP " + cuota.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</strong><br>" +
                                "Total del interes pagado: <strong> DOP " + totalInteresPagado.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</strong>";

    // alerta
    resultadoElement.style.display = "block";
});

// Función para calcular la cuota del préstamo
function calcularCuotaPrestamo(capital, interes, plazo) {
    var tasaMensual = interes / 12;
    var cuota = (capital * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazo));
    return cuota;
}