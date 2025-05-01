const apiKey = 'AIzaSyAsY66eCS3pZ7tyh8a-JCT8my0SgVtFAak';
let shownFriedSongs = [];

async function fetchFriedSongs() {
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    const publishedAfter = oneYearAgo.toISOString();

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=אברהם פריד&type=video&order=date&publishedAfter=${publishedAfter}&maxResults=10&key=${apiKey}`;
    const res = await fetch(url);
    const data = await res.json();

    const songs = [];
    if (data.items) {
        for (let item of data.items) {
            if (!shownFriedSongs.includes(item.id.videoId)) {
                shownFriedSongs.push(item.id.videoId);
                songs.push({
                    title: item.snippet.title,
                    videoId: item.id.videoId,
                    source: 'Avraham Fried'
                });
                showPopup(`🎶 שיר חדש של אברהם פריד: ${item.snippet.title}`);
            }
        }
    }
    return songs;
}
