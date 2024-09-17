window.addEventListener('load', () => {
    fetchTicket();
        
    document.querySelector('.increment-button').addEventListener('click', incrementCounter);
    document.querySelector('.decrement-button').addEventListener('click', decrementCounter);
})

function fetchTicket() {
    fetch("https://api.2nite.ro/api/v2/tickets/blueprints/t/" + TICKET)
        .then(response =>  response.json())
        .then(data => {
            const ticketBlueprint = data.data;
            document.getElementById('title').textContent = ticketBlueprint.attributes.name;
            
            document.getElementById('description').textContent = ticketBlueprint.attributes.description;
            
            document.getElementById('price').textContent = (ticketBlueprint.attributes.price / 100) + "RON";

        }) 
        .catch (err => console.error(err))
}

function buyTicket() {
    window.location.href="https://2nite.ro/events/" + EVENT
}

function incrementCounter() {
    const counterElement = document.querySelector('.counter-value');
    let currentCount = parseInt(counterElement.textContent);
    counterElement.textContent = currentCount + 1;
}

function decrementCounter() {
    const counterElement = document.querySelector('.counter-value');
    let currentCount = parseInt(counterElement.textContent);
    if (currentCount > 0) {
        counterElement.textContent = currentCount - 1;
    }
}
