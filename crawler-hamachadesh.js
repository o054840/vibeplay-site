async function fetchFromHamachadesh() {
    const response = await fetch('https://hm-news.co.il/audio-and-video/');
    const text = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');

    const items = [...doc.querySelectorAll('.jeg_post_title a')];
    const songs = [];

    items.forEach(link => {
        const title = link.textContent.trim();
        if (title.includes("שיר") || title.includes("סינגל") || title.includes("חדש")) {
            songs.push(title);
        }
    });

    return songs;
}
