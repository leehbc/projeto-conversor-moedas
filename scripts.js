
const button = document.getElementById("convert-button")
const select = document.getElementById("select-valor-resultado")

const dolar = 5.17
const euro = 5.15

const convertValues = () => {
    const inputReal = document.getElementById("input-real").value
    const valueTextReal = document.getElementById("valor")
    const valueCurrencyText = document.getElementById("valor-resultado")

    valueTextReal.innerHTML = Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputReal)

    if (select.value === "U$ Dólar Americano") {
        valueCurrencyText.innerHTML = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputReal / dolar)
    }

    if (select.value === "€ Euro") {
        valueCurrencyText.innerHTML = Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputReal / euro)

    }



}

changeCurrency = () => {
    const currencyText = document.getElementById("currency-text")
    const currencyImg = document.getElementById("dolar-img")


    if (select.value === "€ Euro") {
        currencyText.innerHTML = "Euro"
        currencyImg.src = ".//assets/euro.png"

    }

    if (select.value === "U$ Dólar Americano") {
        currencyText.innerHTML = "Dólar Americano"
        currencyImg.src = ".//assets/estados-unidos (1) 1.png"

    }

    convertValues()

}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency) 