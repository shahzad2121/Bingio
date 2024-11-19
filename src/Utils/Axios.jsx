import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '31dae719cf8e621d694803cf663f9112' // Replace with your TMDb API key
    },
    headers: {
        accept: 'application/json',
    }
});

export default instance;

// const fetchPopularMovies = async () => {
//     try {
//         const response = await instance.get('movie/popular'); // Correct endpoint
//         console.log(response.data); // Log data to check if it's returning correctly
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching popular movies:", error.response ? error.response.data : error.message);
//     }
// }

// // fetchPopularMovies();
