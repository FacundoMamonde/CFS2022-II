function loadAllPages(){

    for(let i=1;i<42;i++){
        let link = 'https://rickandmortyapi.com/api/character?page='+i;
        loadInfo(link);
    }

}

function loadInfo(linkAPI) {

    fetch(linkAPI)
        .then((r) => {
            return r.json()})
        .then((r) => {
            showInPage(r.results);
        })
}

function showInPage(array) {
    divDatos = document.getElementById("showInfo");
    array.forEach(character => {
        divCharacter = document.createElement("div");
        divCharacter.className = "personaje"
        createCard(character);
       
        divDatos.appendChild(divCharacter);
    });
}

function createCard(character) {

    
    tr = document.createElement("div");
    th = document.createElement("th");
    td = document.createElement("td");
    img = document.createElement("img")

    let cImage = document.createElement("img");
    let cName = document.createElement("tr");
    let cStatus = document.createElement("tr");
    let cSpecies = document.createElement("tr");
    let cGender = document.createElement("tr");
    let cOrigin = document.createElement("tr");

    cImage.src = character.image
    cName.innerHTML += character.name;
    cName.className = "nombre";
    cStatus.innerHTML += "Status: "+character.status;
    cSpecies.innerHTML += "Species: "+character.species;
    cGender.innerHTML += "Gender:"+character.gender;
    cOrigin.innerHTML += "Origin: "+character.origin.name;

    divCharacter.appendChild(cImage);
    divCharacter.appendChild(cName);
    divCharacter.appendChild(cStatus);
    divCharacter.appendChild(cSpecies);
    divCharacter.appendChild(cGender);
    divCharacter.appendChild(cOrigin);
}

loadAllPages();