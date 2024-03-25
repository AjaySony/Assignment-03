// Wait until the webpage is fully loaded.
document.addEventListener('DOMContentLoaded', function() {
    // Find the 'studentInfo' section and fill it with student's details.
    const studentInfoDiv = document.getElementById('studentInfo');
    studentInfoDiv.innerHTML = `<p>Student ID: 200552716 - Name: Ajay Sony </p>`;

    // Listen for when the pizza order form is submitted.
    document.getElementById('pizzaOrderForm').addEventListener('submit', function(event) {
        // Stop the form from being sent the usual way (no page reload).
        event.preventDefault();

        // Get the chosen pizza size, base, and toppings from the form.
        const size = document.getElementById('pizzaSize').value;
        const base = document.getElementById('pizzaBase').value;
        const toppings = Array.from(document.querySelectorAll('input[name="topping"]:checked')).map(el => el.value);

        // Put the pizza choices into an object.
        const pizzaOrder = {
            size: size,
            base: base,
            toppings: toppings,
        };

        // Show what was ordered in the 'orderSummary' section.
        displayOrderSummary(pizzaOrder);
    });

    // This function updates the 'orderSummary' section with the pizza order details.
    function displayOrderSummary(order) {
        const orderSummaryDiv = document.getElementById('orderSummary');
        orderSummaryDiv.innerHTML = `<h3>Your Artisan Pizza Order:</h3>
                                     <p>Size: ${order.size}</p>
                                     <p>Base: ${order.base}</p>
                                     <p>Toppings: ${order.toppings.join(', ') || 'None'}</p>`;
    }
});
