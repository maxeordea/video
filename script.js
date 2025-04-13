// script.js
document.addEventListener('DOMContentLoaded', () => {
    const videos = [
        {
            id: 'ubuJaxUrJwc',
            title: 'RELOAD 2025 - Aftermovie',
            description: 'Lingotto Fiere - Torino (TO)'
        },
        {
            id: 'UDRhT1d61rI',
            title: 'TUNISIA AFTERMOVIE 2025',
            description: 'Viaggio dal 17/01/25 al 24/01/25 - Volo da Nizza a Tunisi Citta: Biserta, Susa, Sfax, Tunisi & Hammamet'
        },
        {
            id: 'oQmJ1FOLO8A',
            title: 'Olanda / Qlimax 2024',
            description: 'Viaggio in auto dall Italia fino ai Paesi Bassi. Partenza 14/11/2024 Arrivo 20/11/2024'
        },
        {
            id: 'EDCL_KQIbBI',
            title: 'TITANIUM FESTIVAL 2024',
            description: 'BKJN Festival'
        },
        {
            id: 'Ozg3Nzx9h-U',
            title: 'LEADERZ 2024',
            description: 'Aftermovie Privato del Leaderz Festival 2024 - Number One Disco (BS)'
        },
        {
            id: '3kNJjgULrc8',
            title: 'E-motions 2024',
            description: 'Aftermovie Privato - DISCOTECA FLORIDA'
        }
    ];

    const videoContainer = document.getElementById('videoContainer');

    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        
        videoCard.innerHTML = `
            <div class="thumbnail">
                <a href="https://youtu.be/${video.id}" target="_blank" rel="noopener">
                    <img src="https://img.youtube.com/vi/${video.id}/maxresdefault.jpg" alt="${video.title}">
                    <div class="play-icon"></div>
                </a>
            </div>
            <div class="video-info">
                <h3 class="video-title">${video.title}</h3>
                <p class="video-description">${video.description}</p>
            </div>
        `;

        videoContainer.appendChild(videoCard);
    });
});