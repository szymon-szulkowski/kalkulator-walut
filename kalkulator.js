let formElement = document.querySelector(".js-form");
let selectElement = document.querySelector(".js-select");
let kursElement = document.querySelector(".js-kurs");
let wartoscElement = document.querySelector(".js-wartosc")
let wynikElement = document.querySelector(".js-wynik");

let kursEuro = 4.6421;
let kursUsd = 4.3447;
let kursFunt = 5.3807;
let kursPeso = 0.2536;
let kursSzyling = 0.0017;

formElement.addEventListener("input", () => {
    if (selectElement.value === "euro") {
        kursElement.innerText = `Aktualny kurs: ${kursEuro}`;
        wynikElement.innerText = `Twoja wartość w przybliżeniu wynosi: ${(wartoscElement.value * kursEuro).toFixed(2)} złotych`;
        console.log("Wybrane Euro");
    }
    else if (selectElement.value === "usd") {
        kursElement.innerText = `Aktualny kurs: ${kursUsd}`;
        wynikElement.innerText = `Twoja wartość w przybliżeniu wynosi: ${(wartoscElement.value * kursUsd).toFixed(2)} złotych`;
        console.log("Wybrane Usd");
    }
    else if (selectElement.value === "funt") {
        kursElement.innerText = `Aktualny kurs: ${kursFunt}`;
        wynikElement.innerText = `Twoja wartość w przybliżeniu wynosi: ${(wartoscElement.value * kursFunt).toFixed(2)} złotych`;
        console.log("Wybrane Funty");
    }
    else if (selectElement.value === "peso") {
        kursElement.innerText = `Aktualny kurs: ${kursPeso}`;
        wynikElement.innerText = `Twoja wartość w przybliżeniu wynosi: ${(wartoscElement.value * kursPeso).toFixed(2)} złotych`;
        console.log("Wybrane Peso");
    }
    else if (selectElement.value === "szyling") {
        kursElement.innerText = `Aktualny kurs: ${kursSzyling}`;
        wynikElement.innerText = `Twoja wartość w przybliżeniu wynosi: ${(wartoscElement.value * kursSzyling).toFixed(2)} złotych`;
        console.log("Wybrane Szyling");
    }
});