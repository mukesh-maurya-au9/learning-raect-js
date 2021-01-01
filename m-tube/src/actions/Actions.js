import React from 'react';
const turl = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCcKpXNa0cgcVROKCbuv27V_4sio3dNBuw&chart=mostPopular&maxResults=30";

export const TrendingVideoAct = () => {
    const output = fetch(turl, {method:"GET"})
    .then((res)=> res.json())
    // console.log("<<<>>>",output)
    
    return({
        type: "TRENDING_VIDEOS",
        payload: output
    })
}

// export function SearchVideo(userInput){
//     let usersearch = userInput?userInput:'IndiaTrending';
//     const output = fetch(`${base_url}&maxResults=10&q=${usersearch}`,{method:'GET'})
//     .then((data) =>  data.json())

//     return {
//         type:'SEARCH_VIDEOS',
//         payload:output
//     }
// }

// AIzaSyCcKpXNa0cgcVROKCbuv27V_4sio3dNBuw