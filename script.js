const servers = [
    { name: "Survival Server (Java)", url: "medical-locked.gl.joinmc.link:25565", description: "The Survival Server for Java Edition! (Uses default ports for Minecraft Java)", infourl: "survivaljava" },
    { name: "Survival Server (Bedrock)", url: "spain-estate.gl.at.ply.gg:3988", description: "The Survival Server for Java Edition, but translated using GeyserMC! (Make sure that the port is 3988)", infourl: "survivalbedrock" },
    { name: "CamoCruise's Survival Server (Java)", url: "medical-locked.gl.joinmc.link:25565", description: "CamoCruise's Survival Server! (Uses default port for Minecraft Java)", infourl: "cc-survivaljava" },
    { name: "CamoCruise's Server (Bedrock)", url: "spain-estate.gl.at.ply.gg:3988", description: "CamoCruise's Survival Server! Translated to Bedrock using GeyserMC! (Make sure that the port is 3988)", infourl: "cc-survivalbedrock" },
];

function loadServers() {
    const serverList = document.getElementById('server-list');
    servers.forEach(server => {
        const serverCard = document.createElement('div');
        serverCard.className = 'server-card';

        serverCard.innerHTML = `
        <h2>${server.name}</h2>
        <p><strong>URL:</strong> <a href="servers/${server.infourl}/index.html" target="_blank">${server.url}</a></p>
        <p>${server.description}</p>
        `;

        serverList.appendChild(serverCard);
    });
}

document.addEventListener('DOMContentLoaded', loadServers);
// Define the last updated date string
const lastUpdatedDate = "02/14/2025";

// Update the "Last Updated" sections in the HTML
document.addEventListener("DOMContentLoaded", () => {
    // Update the header
    const headerUpdate = document.querySelector("header p");
    if (headerUpdate) {
        headerUpdate.textContent = `Last Updated ${lastUpdatedDate}`;
    }

    // Update the footer
    const footerUpdate = document.querySelector("footer p");
    if (footerUpdate) {
        footerUpdate.textContent = `SoleStorm567603's Minecraft Servers List (Last Updated ${lastUpdatedDate}) - Hosted using GitHub Pages!`;
    }
});

