{
    const formElement = document.querySelector(".js-form");
    const selectElement = document.querySelector(".js-select");
    const wartoscElement = document.querySelector(".js-wartosc");
    const kursElement = document.querySelector(".js-kurs");
    const wynikElement = document.querySelector(".js-wynik");

    const init = () => {
        wynikElement.innerText = "Wybierz walutę aby rozpocząć";
    };
    formElement.addEventListener("input", () => {
        if (selectElement.value === "euro") {
            euro(wartoscElement.value);
        }
        else if (selectElement.value === "usd") {
            usd(wartoscElement.value);
        }
        else if (selectElement.value === "funt") {
            funt(wartoscElement.value);
        }
        else if (selectElement.value === "peso") {
            peso(wartoscElement.value);
        }
        else if (selectElement.value === "szyling") {
            szyling(wartoscElement.value);
        }
    });

    const euro = () => {
        const kursEuro = 4.6421;

        kursElement.innerText = `Aktualny kurs: ${kursEuro}`;
        wynikElement.innerText = `Twoja wartość w przybliżeniu wynosi: ${(wartoscElement.value * kursEuro).toFixed(2)} złotych`;
        console.log("Wybrane Euro");

    };
    const usd = () => {
        const kursUsd = 4.3447;
        kursElement.innerText = `Aktualny kurs: ${kursUsd}`;
        wynikElement.innerText = `Twoja wartość w przybliżeniu wynosi: ${(wartoscElement.value * kursUsd).toFixed(2)} złotych`;
        console.log("Wybrane Usd");

    };
    const funt = () => {
        const kursFunt = 5.3807;
        kursElement.innerText = `Aktualny kurs: ${kursFunt}`;
        wynikElement.innerText = `Twoja wartość w przybliżeniu wynosi: ${(wartoscElement.value * kursFunt).toFixed(2)} złotych`;
        console.log("Wybrane Funty");

    };
    const peso = () => {
        const kursPeso = 0.2536;
        kursElement.innerText = `Aktualny kurs: ${kursPeso}`;
        wynikElement.innerText = `Twoja wartość w przybliżeniu wynosi: ${(wartoscElement.value * kursPeso).toFixed(2)} złotych`;
        console.log("Wybrane Peso");

    };

    const szyling = () => {
        const kursSzyling = 0.0017;
        kursElement.innerText = `Aktualny kurs: ${kursSzyling}`;
        wynikElement.innerText = `Twoja wartość w przybliżeniu wynosi: ${(wartoscElement.value * kursSzyling).toFixed(2)} złotych`;
        console.log("Wybrane Szyling");

    };

    init();

};