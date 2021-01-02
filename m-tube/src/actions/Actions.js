// import React from 'react'; 
const baseURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=";
const API_key = 'AIzaSyCcKpXNa0cgcVROKCbuv27V_4sio3dNBuw';

// const searchURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCCjjQ3hJdSDrqgX6CHLoK4R6TndJAxok4&maxResults=10&q=lovelyindia"

export const TrendingVideoAct = () => {
    const output = fetch(`${baseURL}${API_key}&chart=mostPopular&maxResults=30`, {method:"GET"})
    .then((res)=> res.json())   
    return({
        type: "TRENDING_VIDEOS",
        payload: output
    })
}
export const SearchVideo = (userInput) => {
    let userSearch = userInput?userInput:'lovelyindia'
    const output = fetch(`${baseURL}${API_key}&maxResults=10&q=${userSearch}`, {method:"GET"})
    .then((data)=> data.json())   
    return({
        type: "SEARCH_VIDEOS",
        payload: output
    })
}

