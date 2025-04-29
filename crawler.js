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
                    artist: "זמר לא ידוע", 
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
    const apiKey = 'AIzaSyAsY66eCS3pZ7tyh8a-JCT8my0SgVtFAak';
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&q=${encodeURIComponent(query)}&key=${apiKey}`);
    const data = await response.json();
    if (data.items && data.items.length > 0) {
        return data.items[0].id.videoId;
    }
    return null;
}
