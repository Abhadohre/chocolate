document.addEventListener('input', function(event) {
    if (event.target.type === 'number') {
        updateTotals();
    }
});

function updateTotals() {
    const inputs = document.querySelectorAll('input[type="number"]');
    let totalItems = 0;
    let totalPrice = 0;

    inputs.forEach(input => {
        const count = parseInt(input.value) || 0;
        totalItems += count;
        totalPrice += count * parseFloat(input.dataset.price);
    });

    if (totalItems > 8) {
        alert('You cannot add more than 8 items in total.');
        event.target.value = 0;
        updateTotals();
        return;
    }

    document.getElementById('totalItems').textContent = totalItems;
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}

function calculate() {
    updateTotals();
}
