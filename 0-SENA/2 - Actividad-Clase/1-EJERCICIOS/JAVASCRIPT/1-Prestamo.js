/*

    Un cliente ha adquirido un crédito de libre inversión por valor de $20.000.000 a un plazo
    de 3 años, a una tasa de interés mensual de 2.8%. La modalidad de pago es mensual.

    En la cuota nueve, el cliente tarda unos días en cancelar su cuota, por lo que le genera
    intereses moratorios del 3.9% adicional sobre el valor de la cuota.

    La casa de cobranzas le realiza cobro adicional de 5.3% del valor de la cuota ´vencida por
    gastos de cobranzas.

    Se desea conocer:

    ● Valor de la amortización a capital que debe pagar en cada cuota

        El valor de la amortización es el dinero que se da en cada cuota, sin contar los intereses

    ● Valor de intereses causados en la cuota

        El valor del interes en cada una de las cuotas

    ● Valor total cuota que debe pagar

        El valor de la amortalización mas el interes

    ● Valor a cancelar en la cuota numero 9

        El valor de la amortizacion mas el interes de mora mas el 5.3%

    ● Valor total del pago del crédito, al final de los tres años

        El valor total del pago del credito es el pago del mes en el cual se demoro en pagar la cuota
        mas el valor normal de los otros años


    Requerimientos

    1. Valor del credito
    2. Plazo de tiempo
    3. Tasa de interes
    4. Intereses moratorios
    5. Cobro casa de cobranza

*/

function calcularCuotas() {
    var prestamo = parseFloat(document.getElementById("prestamo").value);
    var years = parseInt(document.getElementById("years").value);
    
    var tasaInteresMensual = 0.028;
    var interesesMora = 0.039;
    var gastoAdministrativos = 0.053;
    var totalCuotas = years * 12;
    

}
  