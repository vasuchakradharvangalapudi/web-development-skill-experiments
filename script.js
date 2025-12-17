const container = document.getElementById("container");
const button = document.getElementById("loadBtn");

// Async function using await
async function fetchDestinations() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=6"
    );
    return response.json();
}

// Promise chaining
function loadDestinations() {
    fetchDestinations()
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            container.innerHTML = "<p>Error loading data</p>";
            console.error(error);
        });
}

// DOM manipulation
function displayData(destinations) {
    container.innerHTML = "";

    destinations.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${item.url}" alt="Destination">
            <div class="card-content">
                <h3>${item.title.slice(0, 20)}</h3>
                <p>Explore this destination</p>
            </div>
        `;

        container.appendChild(card);
    });
}

button.addEventListener("click", loadDestinations);
