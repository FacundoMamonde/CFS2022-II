let btnEnviar = document.getElementById("btn-consulta");
btnEnviar.addEventListener("click", checkInfo)

function checkInfo() {

  let name = document.getElementById("input-nombre").value;
  let mail = document.getElementById("input-mail").value;
  let consulta = document.getElementById("textarea-consulta").value;

  if (checkName(name) && checkMail(mail) && checkConsulta(consulta)) {

    printMessage("Consulta enviada con exito!")
  }
}

function printMessage(message) {
  let spanText = document.getElementById("message")

  spanText.innerHTML = message;

}

function checkName(n) {
  let nameRegex = /[A-Z]/i;

  if (n.length <= 2) {
    printMessage("ERROR: Nombre o Apellido tiene menos de 3 caracteres");
    return false;
  } else if (n.length >= 21) {
    printMessage("ERROR: Nombre o Apellido tiene mas de 20 caracteres");
    return false;
  } else if (nameRegex.test(n)) {
    return true;
  } else {
    printMessage("ERROR: Solo se permiten letras en el Nombre");
    return false;
  }
}

function checkMail(mail) {
  let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if (emailRegex.test(mail)) {
    return true;
  } else {
    printMessage("ERROR: El mail ingresado no es correcto");
    return false;
  }
}

function checkConsulta(consulta) {
  if (consulta === "") {
    printMessage("ERROR: Consulta no puede estar vacio");
    return false;
  } else {
    return true;
  }
}


// Cambio de tema

let btnTheme = document.getElementById("btn-modo");

btnTheme.addEventListener("click", function () {
  let theme = document.getElementById("theme-mode");
  let btnModo = document.getElementById("btn-modo");
  if (theme.getAttribute("href") == "css/style-light.css") {
    theme.href = "css/style-dark.css";
    btnModo.innerText = "Modo: Dark";
  } else {
    theme.href = "css/style-light.css";
    btnModo.innerText = "Modo: Light";
  }
});

// Cambio de Idioma

let btnLang = document.getElementById("btn-lang");

btnLang.addEventListener("click", function () {
  let lang = document.getElementById("btn-lang");
  alert(lang.innerText);

  if (lang.innerText == "Change to English") {
    hideShowEs("none");
    hideShowEn("block");
    lang.innerText = "Cambiar a Español";
  } else if (lang.innerText == "Cambiar a Español") {
    hideShowEn("none");
    hideShowEs("block");
    lang.innerText = "Change to English";
  }
});


function hideShowEn(action){
  let hideEn = document.getElementsByClassName("en");
  for (var i = 0; i < hideEn.length; i++) {
    hideEn[i].style.display = action; 
  }
}

function hideShowEs(action){
  let hideEs = document.getElementsByClassName("es"); //
  for (var i = 0; i < hideEs.length; i++) {
    hideEs[i].style.display = action;
  }
}
