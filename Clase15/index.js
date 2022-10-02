async function newData() {
    console.log("Se esta ejecutando newData()");
    let dName = document.getElementById("name").value;
    let dTeam = document.getElementById("team").value;
    let dNumber = Number(document.getElementById("number").value);
    let dImage = document.getElementById("image").value;

    var data = {
        Name: dName,
        Team: dTeam,
        Number: dNumber,
        Image: dImage,
    };

    console.log(dImage);
    var url = 'https://631fb86958a1c0fe9f6e2fa4.mockapi.io/F1';

    await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())

    loadInfo();
}

/*      Funcion Eliminar         */
async function deleteData() {
    console.log("Se esta ejecutando deleteData()");
    let id = document.getElementById("driverDeleteId").value;

    await fetch('https://631fb86958a1c0fe9f6e2fa4.mockapi.io/F1/' + id, {
        method: 'DELETE',
    });

    loadInfo();

}

/*      Funcion Mostrar Informacion        */
async function loadInfo() {

    console.log("Se esta ejecutando loadInfo");
    fetch("https://631fb86958a1c0fe9f6e2fa4.mockapi.io/F1/")
        .then((r) => {
            return r.json()
        })
        .then((r) => {
            showInPage(r);
        })
}


function showInPage(array) {

    divDatos = document.getElementById("showInfo");
    divDatos.innerHTML = "";
    array.forEach(driver => {
        divDriver = document.createElement("div");
        divDriver.className = "piloto"
        createCard(driver);
        divDatos.appendChild(divDriver);
    });

}

function createCard(driver) {

    tr = document.createElement("div");
    th = document.createElement("th");
    td = document.createElement("td");
    img = document.createElement("img")

    let dImage = document.createElement("img");
    let dName = document.createElement("tr");
    let dTeam = document.createElement("tr");
    let dNumber = document.createElement("tr");
    let dId = document.createElement("tr");

    dImage.src = driver.Image;
    dImage.className = "imagenPiloto";
    dName.innerHTML += driver.Name;
    dName.className = "nombre";
    dTeam.innerHTML += "Equipo: " + driver.Team;
    dNumber.innerHTML += "Number: " + driver.Number;
    dId.innerHTML += "Id: " + driver.id;


    divDriver.appendChild(dImage);
    divDriver.appendChild(dName);
    divDriver.appendChild(dTeam);
    divDriver.appendChild(dNumber);
    divDriver.appendChild(dId);
}

/*      Funcion Modificar Informacion        */

async function modifyDriver() {

    let idModify = document.getElementById("modifyID").value;
    let newName = document.getElementById("modifyName").value;
    let newTeam = document.getElementById("modifyTeam").value;
    let newImage = document.getElementById("modifyImage").value;
    let newNumber = document.getElementById("modifyNumber").value;

    var newdata = {
        Name: newName,
        Team: newTeam,
        mage: newImage,
        Number: newNumber,
    };

    var url = 'https://631fb86958a1c0fe9f6e2fa4.mockapi.io/F1/' + idModify;
    console.log(url)
    console.log("Se esta modificando la info")
    var modify = await fetch(url, {
        method: "PUT",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            Name: newName,
            Team: newTeam,
            Image: newImage,
            Number: newNumber,}
        )
    });

    
    loadInfo();


}

/* Funciones mostrar menus */

function showAddmenu() {
    console.log("se esta ejecutando showAddMenu")
    let x = document.getElementById("addMenuDiv");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

function showDeleteMenu() {
    console.log("se esta ejecutando showDeleteMenu")
    let x = document.getElementById("dataDelete");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

function showModifyMenu() {
    console.log("Se esta ejecutando showModifyMenu");
    let x = document.getElementById("dataModify");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}



/* Listeners de Botones */ 
let btnEnviar = document.getElementById("btnEnviar");
btnEnviar.addEventListener("click", newData, true);

let btnDelete = document.getElementById("btnDelete");
btnDelete.addEventListener("click", deleteData, true);

let btnModify = document.getElementById("btnModify");
btnModify.addEventListener("click", modifyDriver, true);

let btnAddMenu = document.getElementById("btnAddMenu");
btnAddMenu.addEventListener("click", showAddmenu, true);

let btnAddMenuExit = document.getElementById("btnAddMenuExit");
btnAddMenuExit.addEventListener("click", showAddmenu, true);

let btnDeleteMenu = document.getElementById("btnDeleteMenu");
btnDeleteMenu.addEventListener("click", showDeleteMenu, true);

let btnDeleteMenuExit = document.getElementById("btnDeleteMenuExit");
btnDeleteMenuExit.addEventListener("click", showDeleteMenu, true);

let btnModifyMenu = document.getElementById("btnModifyMenu");
btnModifyMenu.addEventListener("click", showModifyMenu, true);

let btnModifyMenuExit = document.getElementById("btnModifyMenuExit");
btnModifyMenuExit.addEventListener("click", showModifyMenu, true);

loadInfo();

