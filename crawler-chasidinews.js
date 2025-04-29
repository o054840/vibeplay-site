async function fetchFromChasidiNews() {
    const response = await fetch('https://www.chasidinews.com/category/singles/');
    const text = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');

    const items = [...doc.querySelectorAll('.post-title a')];
    const songs = [];

    items.forEach(link => {
        const title = link.textContent.trim();
        if (title.includes("חדש") || title.includes("סינגל")) {
            songs.push(title);
        }
    });

    return songs;
}
