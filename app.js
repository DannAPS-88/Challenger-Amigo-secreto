
alert("🎉 ¡Bienvenido al mejor juego de Amigo Secreto de la historia! 🎁");
alert("👥 Agrega los nombres de tus amigos haciendo clic en 'Añadir'.");
alert("🔀 Cuando todos estén listos, presiona 'Sortear Amigo' para descubrir quién regala a quién.");
alert("✨ ¡Diviértete y que comience la sorpresa! 🎊");

let listaDeAmigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById("listaAmigos");
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();

if (nombre === "") {
    alert("Por favor, inserte un nombre.")
    return;
}

if (listaDeAmigos.includes(nombre)) {
    alert("Este nombre ya está en la lista, agrega una nuevo")
    return;
}
    listaDeAmigos.push(nombre);
    nombreAmigo.innerHTML += `<li>${nombre}</li>`;
    inputAmigo.value = "";
}

function sortearAmigo () {

    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSecreto = listaDeAmigos [indiceAleatorio];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Tu amigo secreto es ${amigoSecreto}</li>`;
}


