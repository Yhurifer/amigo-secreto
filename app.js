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

// sorteando los amigos secretos
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('¡Debes agregar el nombre de al menos un amigo!');
        return;
    }
    
    const indice = Math.floor(Math.random() * amigos.length);
    const resultado = document.getElementById('resultado');
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.style.display = 'none';
    resultado.innerHTML = `
        <li class="resultado-item">
            🎉 ¡Tu amig@ secreto es: <strong>${amigos[indice]}</strong>!
        </li>
    `;
}

document.getElementById('amigo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') agregarAmigo();
});