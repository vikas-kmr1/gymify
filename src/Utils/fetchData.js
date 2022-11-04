export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7897e0cc5dmsh71aa6606221f86ep15255ejsn7c51dd7a7a5a',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    },
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7897e0cc5dmsh71aa6606221f86ep15255ejsn7c51dd7a7a5a',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    },
};

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};