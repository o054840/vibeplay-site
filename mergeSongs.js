async function getCombinedSongs() {
    const fromH = await fetchFromHamachadesh();
    const fromC = await fetchFromChasidiNews();
    const fried = await fetchFriedSongs();

    const combined = [...fromH, ...fromC, ...fried];
    const unique = [];
    const seen = new Set();

    for (let song of combined) {
        const key = song.title || song;
        if (!seen.has(key)) {
            seen.add(key);
            unique.push(song);
        }
    }

    return unique;
}
