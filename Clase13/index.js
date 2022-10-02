let equipos = [
    {
        name: "Mercedes-AMG Petronas", chasis: "Mercedes W13",
        motor: "Mercedes-AMG F1 M13", drivers: ["Lewis Hamilton", "George Russel"],
        nacionalidad: "Alemania"
    },

    {
        name: "Oracle Red Bull Racing", chasis: "Red Bull RB18",
        motor: "Red Bull RBPTH001", drivers: ["Max Verstappen", "Sergio Pérez"],
        nacionalidad: "Austria"
    },

    {
        name: "Scuderia Ferrari", chasis: "Ferrari F1-75",
        motor: "Ferrari 066/7", drivers: ["Charles Lecrec", "Carlos Sainz Jr."],
        nacionalidad: "Italia"
    },

    {
        name: "McLaren F1 Team", chasis: "McLaren MCL36",
        motor: "Mercedes-AMG F1 M13", drivers: ["Daniel Ricciardo", "Lando Norris"],
        nacionalidad: "Reino Unido"
    },

    {
        name: "BWT Alpine F1 Team", chasis: "Alpine A522",
        motor: "Renault E-Tech RE22", drivers: ["Fernando Alonso", "Esteban Ocon"],
        nacionalidad: "Francia"
    },
]

let tbody = document.getElementById("tablaTeams")

let tr;

function cargarTabla() {
    console.log("Se esta cargando la funcion")
    equipos.forEach(equipo => {
        tr = document.createElement("tr");
        createCard(equipo);
        tbody.appendChild(tr);
    });
}

function createCard(equipo) {
    let tdName = document.createElement("td");
    let tdChasis = document.createElement("td")
    let tdDrivers = document.createElement("td")
    tdName.innerHTML += equipo.name;
    tdChasis.innerHTML += equipo.chasis;
    tdDrivers.innerHTML += equipo.drivers;
    tr.appendChild(tdName);
    tr.appendChild(tdChasis);
    tr.appendChild(tdDrivers);
}

window.addEventListener("load", () => {
    cargarTabla();
})