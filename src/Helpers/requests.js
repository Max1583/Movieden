
const APIKEY = "b92eb019ef38b75833dcf3ae7a395494";
const URL="https://api.themoviedb.org/3/"
const requests= {
    url:"https://api.themoviedb.org/3/",
    apiKey:"b92eb019ef38b75833dcf3ae7a395494",
    imgURL:"https://image.tmdb.org/t/p/w500",
fetchSearchResults:`${URL}search/multi?api_key=${APIKEY}&query=`,
//https://api.themoviedb.org/3/search/multi?api_key=b92eb019ef38b75833dcf3ae7a395494&language=en-US&query=marvel&page=1&include_adult=false
fetchMovieDescription:`${URL}movie/`,
fetchPopular:`/popular?api_key=${APIKEY}`,
fetchRecommendations: `${URL}movie/`,
fetchSimilar:`${URL}movie/`,
fetchCasts:`${URL}movie/`,
fetchCasts:`${URL}movie/`,


fetchNowPlaying:`${URL}movie/now_playing?api_key=b92eb019ef38b75833dcf3ae7a395494`,


}
//https://api.themoviedb.org/3/movie/550/credits?api_key=b92eb019ef38b75833dcf3ae7a395494&language=en-US

// https://api.themoviedb.org/3/movie/566525/recommendations?api_key=b92eb019ef38b75833dcf3ae7a395494
// ${URL}search/movie?api_key=b92eb019ef38b75833dcf3ae7a395494

// YOUTUBE TRAILER https://www.youtube.com/watch?v=

// ${URL}movie/157336?api_key=b92eb019ef38b75833dcf3ae7a395494&append_to_response=videos,images

// ${URL}movie/157336?api_key=b92eb019ef38b75833dcf3ae7a395494&append_to_response=videos,images

export default requests;