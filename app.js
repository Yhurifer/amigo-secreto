// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
// añade amigos a la lista
function agregarAmigo() {

    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    if (!nombre) {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    amigos.push(nombre);
    input.value = '';
    
    actualizarListaAmigos();
}

// Actualizar la lista
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar lista
    
    for (let amigo of amigos) {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

