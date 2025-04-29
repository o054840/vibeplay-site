let songs = [];

async function loadSongs() {
    const titles = await getCombinedSongs();
    for (let title of titles) {
        const youtubeId = await searchYouTube(title);
        if (youtubeId) {
            songs.push({ title, youtubeId });
        }
    }
    displaySongs();
}

function displaySongs() {
    const container = document.getElementById('songs-container');
    container.innerHTML = '';
    songs.forEach(song => {
        const div = document.createElement('div');
        div.className = 'song-card';
        div.innerHTML = `
            <h2>${song.title}</h2>
            <iframe src="https://www.youtube.com/embed/${song.youtubeId}" allowfullscreen></iframe>
        `;
        container.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadSongs();
});
