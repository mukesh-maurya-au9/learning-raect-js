const baseURL = "https://www.googleapis.com/youtube/v3";
const API_key = 'AIzaSyCcKpXNa0cgcVROKCbuv27V_4sio3dNBuw';

export const TrendingVideoAct = () => {
    const output = fetch(`${baseURL}/search?part=snippet&key=${API_key}&chart=mostPopular&maxResults=30`, { method: "GET" })
        .then((res) => res.json())
    return ({
        type: "TRENDING_VIDEOS",
        payload: output
    })
}
export const SearchVideo = (userInput) => {
    let userSearch = userInput ? userInput : 'lovelyindia'
    const output = fetch(`${baseURL}/search?part=snippet&key=${API_key}&maxResults=10&q=${userSearch}`, { method: "GET" })
        .then((data) => data.json())
    return ({
        type: "SEARCH_VIDEOS",
        payload: output
    })
}

export const CommentById = (cID) => {
    let comID = cID ? cID : "VW-nlwUXseE";
    const output = fetch(`${baseURL}/commentThreads?part=snippet,replies&videoId=${comID}&key=${API_key}`, { method: "GET" })
        .then((data) => data.json())
    return ({
        type: "COMMENT_BY_ID",
        payload: output
    })
}

export const VideoById = (vID) => {
    let viID = vID ? vID : "VW-nlwUXseE";
    const output = fetch(`${baseURL}/videos?part=snippet&id=${viID}&key=${API_key}`, { method: "GET" })
        .then((data) => data.json())
    return ({
        type: "VIDEO_BY_ID",
        payload: output
    })
}
