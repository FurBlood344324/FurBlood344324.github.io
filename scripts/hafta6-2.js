const converterForm = document.getElementById("converter-form");
const converterError = document.getElementById("converter-error");
const convertedValue = document.getElementById("converted-value");
const conversionSummary = document.getElementById("conversion-summary");

function parseConversionValue(value) {
    return Number(String(value).replace(",", ".").trim());
}

function convertValue(type, input) {
    if (type === "c-to-f") return { value: input * 9 / 5 + 32, unit: "Fahrenheit" };
    if (type === "f-to-c") return { value: (input - 32) * 5 / 9, unit: "Celsius" };
    if (type === "m-to-km") return { value: input / 1000, unit: "Kilometre" };
    if (type === "km-to-m") return { value: input * 1000, unit: "Metre" };
    if (type === "kg-to-g") return { value: input * 1000, unit: "Gram" };
    return { value: input / 1000, unit: "Kilogram" };
}

converterForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const rawValue = document.getElementById("conversion-value").value;
    const conversionType = document.getElementById("conversion-type");
    const numericValue = parseConversionValue(rawValue);

    if (Number.isNaN(numericValue)) {
        converterError.textContent = "Lütfen geçerli bir sayı girin.";
        convertedValue.textContent = "-";
        conversionSummary.textContent = "Bir dönüşüm seçip hesaplayın.";
        return;
    }

    const result = convertValue(conversionType.value, numericValue);
    const selectedLabel = conversionType.options[conversionType.selectedIndex].text;

    converterError.textContent = "";
    convertedValue.textContent = result.value.toFixed(2) + " " + result.unit;
    conversionSummary.textContent = numericValue + " değeri için " + selectedLabel + " dönüşümü uygulandı.";
});
