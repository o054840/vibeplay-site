async function fetchSongs() {
    // סימולציה של משיכת נתונים מאתרי מוזיקה (המחדש וחסידי ניוז)
    const fetchedSongs = [
        { title: "שיר 1", artist: "זמר 1" },
        { title: "שיר 2", artist: "זמר 2" },
        { title: "שיר 3", artist: "זמר 3" }
    ];

    songs = [];

    for (const song of fetchedSongs) {
        const youtubeId = await searchYouTube(song.title + ' ' + song.artist);
        if (youtubeId) {
            songs.push({ ...song, youtubeId });
        }
    }

    displaySongs();
}

async function searchYouTube(query) {
    // פונקציה מדומה – צריך להכניס כאן קריאה אמיתית ל-YouTube API
    // כרגע מדמה החזרה של תוצאה מזויפת
    return "dQw4w9WgXcQ"; // יוחלף בעתיד באיידי האמיתי של יוטיוב
}
