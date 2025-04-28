async function fetchSongs() {
    try {
        const response = await fetch('https://hm-news.co.il/audio-and-video/');
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');

        const posts = doc.querySelectorAll('.jeg_post_title a');
        songs = [];

        posts.forEach(post => {
            const title = post.innerText.trim();
            if (title) {
                songs.push({
                    title: title,
                    artist: "לא ידוע כרגע", // אפשר לשפר בניתוח יותר מתקדם
                    youtubeId: null
                });
            }
        });

        await searchAllOnYouTube();
        displaySongs();
    } catch (error) {
        console.error('בעיה בטעינת שירים', error);
    }
}

async function searchAllOnYouTube() {
    for (let i = 0; i < songs.length; i++) {
        const youtubeId = await searchYouTube(songs[i].title);
        if (youtubeId) {
            songs[i].youtubeId = youtubeId;
        }
    }
}

async function searchYouTube(query) {
    // כאן תצטרך API מפתח אמיתי של יוטיוב
    // כרגע סימולציה
    return "dQw4w9WgXcQ"; 
}
