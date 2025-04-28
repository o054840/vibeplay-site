const songs = [
    { title: "שיר חדש 1", artist: "זמר 1", youtubeId: "dQw4w9WgXcQ" },
    { title: "שיר חדש 2", artist: "זמר 2", youtubeId: "lY2yjAdbvdQ" },
    { title: "שיר חדש 3", artist: "זמר 3", youtubeId: "3GwjfUFyY6M" }
];

function displaySongs(filter = '') {
    const container = document.getElementById('songs-container');
    container.innerHTML = '';

    songs.filter(song => 
        (song.title + song.artist).includes(filter)
    ).forEach(song => {
        const div = document.createElement('div');
        div.className = 'song';
        div.innerHTML = `
            <h2>${song.title} - ${song.artist}</h2>
            <iframe src="https://www.youtube.com/embed/${song.youtubeId}" allowfullscreen></iframe>
        `;
        container.appendChild(div);
    });
}

document.getElementById('search').addEventListener('input', (e) => {
    displaySongs(e.target.value);
});

// טען ברגע שהדף נטען
displaySongs();
