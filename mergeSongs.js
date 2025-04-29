async function getCombinedSongs() {
    const fromH = await fetchFromHamachadesh();
    const fromC = await fetchFromChasidiNews();
    const all = [...new Set([...fromH, ...fromC])]; // סינון כפילויות
    return all;
}
