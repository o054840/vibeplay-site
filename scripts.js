let songs = [];

function displaySongs(filter = '') {
    const container = document.getElementById('songs-container');
    container.innerHTML = '';

    songs.filter(song => 
        (song.title + song.artist).includes(filter)
    ).forEach(song => {
        const div = document.createElement('div');
        div.className = 'song-card';
        div.innerHTML = `
            <h2>${song.title}</h2>
            ${song.youtubeId ? `<iframe src="https://www.youtube.com/embed/${song.youtubeId}" allowfullscreen></iframe>` : '<p>לא נמצא וידאו</p>'}
        `;
        container.appendChild(div);
    });
}

document.getElementById('search').addEventListener('input', (e) => {
    displaySongs(e.target.value);
});

document.addEventListener('DOMContentLoaded', () => {
    fetchSongs();
});
