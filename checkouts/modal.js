/* // Obter os elementos
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abre o modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Quando o usuário clicar no botão de fechar (x), fecha o modal
span.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal, fecha o modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} */

document.addEventListener('DOMContentLoaded', function () {
    const openModalBtn = document.getElementById('openModalBtn');
    const modal = document.getElementById('myModal');
    const closeModalBtn = modal.querySelector('.close');
    const purchaseForm = document.getElementById('purchaseForm');

    openModalBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    purchaseForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(purchaseForm);

        fetch(purchaseForm.action, {
            method: purchaseForm.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                window.location.href = 'https://www.google.com'; // Replace with your payment link
            } else {
                return response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        alert(data["errors"].map(error => error["message"]).join(", "));
                    } else {
                        alert('Oops! There was a problem submitting your form');
                    }
                });
            }
        }).catch(error => {
            alert('Oops! There was a problem submitting your form');
        });
    });
});