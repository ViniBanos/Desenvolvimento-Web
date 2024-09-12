//Feito por: Vinicius Baños

function CalcularTemperatura() {
    const temp = parseFloat(document.getElementById("temp").value);
    const resultado = document.getElementById("resultado");
    const conversionType = document.querySelector('input[name="conversionType"]:checked');

    if (!conversionType || isNaN(temp)) {
        resultado.textContent = "Por favor, selecione uma conversão e insira um valor válido.";
        return;
    }

    let convertedTemp;
    if (conversionType.value === "celsiusToFahrenheit") {
        convertedTemp = (temp * 9/5) + 32;
        resultado.textContent = `${temp}°C é igual a ${convertedTemp.toFixed(2)}°F.`;
    } else if (conversionType.value === "fahrenheitToCelsius") {
        convertedTemp = (temp - 32) * 5/9;
        resultado.textContent = `${temp}°F é igual a ${convertedTemp.toFixed(2)}°C.`;
    }
}

function LimparCampos() {
    document.getElementById("formTemperatura").reset();
    document.getElementById("resultado").textContent = "";
}
