async function searchYouTube(query) {
    const apiKey = 'AIzaSyAsY66eCS3pZ7tyh8a-JCT8my0SgVtFAak';
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&q=${encodeURIComponent(query)}&key=${apiKey}`;
    
    const res = await fetch(url);
    const data = await res.json();
    if (data.items && data.items.length > 0) {
        return data.items[0].id.videoId;
    }
    return null;
}
