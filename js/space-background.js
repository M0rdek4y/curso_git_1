const body = document.getElementById('bodybg');
const modal = document.getElementById('messageModal');
const modalMessage = document.getElementById('modalMessage');

body.addEventListener('submit', function(e) {
    e.preventDefault();
    
    fetch(body.action, {
        method: 'POST',
        body: new bodyData(body),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            showModal("Mensagem enviada com sucesso!");
            body.reset();
        } else {
            showModal("Ocorreu um erro. Por favor, tente novamente.");
        }
    })
    .catch(error => {
        showModal("Ocorreu um erro. Por favor, tente novamente.");
    });
});

function showModal(message) {
    modalMessage.textContent = message;
    modal.style.display = "block";
    
    // Oculta o modal após 3 segundos (3000 milissegundos)
    setTimeout(function() {
        modal.style.display = "none";
    }, 3000);
}