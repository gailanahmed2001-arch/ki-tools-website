let tools = [];

fetch('tools.json')
    .then(response => response.json())
    .then(data => {
        tools = data;
        displayTools(tools);
    });

function displayTools(list) {
    const container = document.getElementById('tools-container');
    container.innerHTML = '';
    list.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.innerHTML = `
            <h2>${tool.name}</h2>
            <p>${tool.description}</p>
            <a href="${tool.link}" target="_blank">Zum Tool</a>
        `;
        container.appendChild(card);
    });
}

function filterTools(type) {
    if(type === 'all') displayTools(tools);
    else displayTools(tools.filter(t => t.type === type));
}
