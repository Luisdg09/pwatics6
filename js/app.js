const container = document.querySelector(".container");
const coffees = [{
        name: "Homero",
        Image: "images/homero.png"
    },
    {
        name: "Aleex",
        Image: "images/alex.png"
    },
    {
        name: "Son Goku",
        Image: "images/goku.png"
    },
    {
        name: "Risas",
        Image: "images/risas.png"
    },
    {
        name: "Pelon",
        Image: "images/pelon.png"
    },
    {
        name: "Capitan Price",
        Image: "images/capitan.png"
    },
    {
        name: "luisdg09",
        Image: "images/luis.png"
    },
    {
        name: "Paisaje",
        Image: "images/paisaje2.jpg"
    },
    {
        name: "Orilla del mar",
        Image: "images/paisaje1.jpg"
    }
];

const showCoffees = () => {
    let output = "";
    coffees.forEach(
        ({ name, Image }) =>
        (output += `
                        <div class="card">
                            <img class="card--avatar" src=${Image} />
                            <h1 class="card--title">${name}</h1>
                            <a class="card--link" href="#">Taste</a>
                            </div>
                            `)
    );
    container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registrado"))
            .catch(err => console.log("service worker no registrado", err));
    });
}