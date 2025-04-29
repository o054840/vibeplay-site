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
            <div class="favorite" onclick="toggleFavorite('${song.title}')">
                <i class="fas fa-star"></i>
            </div>
            <h2>${song.title}</h2>
            ${song.youtubeId ? `<iframe src="https://www.youtube.com/embed/${song.youtubeId}" allowfullscreen></iframe>` : '<p>וידאו לא נמצא</p>'}
        `;
        container.appendChild(div);
    });
}

function toggleFavorite(title) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.includes(title)) {
        favorites = favorites.filter(fav => fav !== title);
    } else {
        favorites.push(title);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    displaySongs(document.getElementById('search').value);
}

document.getElementById('search').addEventListener('input', (e) => {
    displaySongs(e.target.value);
});

document.addEventListener('DOMContentLoaded', () => {
    fetchSongs();
});
