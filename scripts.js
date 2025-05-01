function showPopup(message) {
    const popup = document.getElementById('popup');
    popup.innerText = message;
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 5000);
}
async function loadSongs() {
    const songs = await getCombinedSongs();
    const container = document.getElementById('songs-container');
    container.innerHTML = '';

    songs.forEach(song => {
        const videoId = song.videoId || song.youtubeId;
        if (videoId) {
            const div = document.createElement('div');
            div.className = 'song-card';
            div.innerHTML = `
                <h3>${song.title}</h3>
                <iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>
            `;
            container.appendChild(div);
        }
    });
}
