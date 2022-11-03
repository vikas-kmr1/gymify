export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': 'e111f72ad0msh7f1b0fa10c532c6p1ee5cbjsn26e6694968b4',
    },
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e111f72ad0msh7f1b0fa10c532c6p1ee5cbjsn26e6694968b4',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    },
};

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};