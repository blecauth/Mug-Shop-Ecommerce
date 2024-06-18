document.getElementById('buy-button').addEventListener('click', function() {
    document.getElementById('purchase-form').classList.remove('hidden');
});

document.getElementById('purchaseForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'service_rzgilp5';
    const templateID = 'Blecauth';

    const templateParams = {
        name: document.getElementById('name').value,
        address: document.getElementById('address').value,
        phone: document.getElementById('phone').value,
        paymentMethod: document.getElementById('payment-method').value,
        itemCode: document.getElementById('item-code').value
    };

    emailjs.send(serviceID, templateID, templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Seu pedido foi enviado com sucesso!');
            window.location.href = 'https://www.google.com'; // Substitua pelo seu URL de redirecionamento
        }, function(error) {
            console.log('FAILED...', error);
            alert('Ocorreu um erro ao enviar seu pedido. Por favor, tente novamente.');
        });
});