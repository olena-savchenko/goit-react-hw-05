import axios from "axios";


const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

const options = {
  headers: {
	// Замість api_read_access_token вставте свій токен
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTJhYjEyNWVkN2ViZDg0NGE2OTIyMzg2M2IzMWQyYiIsInN1YiI6IjY0NmRmY2ZjYTUwNDZlMDEyNDY5ZGQ4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2T9vMxipkd2uznlye6LSF9Csk51lT8VzhImm8aiSftA'
  }
};



export const fetchTrendingMovies = async () => {
    const response = await axios.get(url, options);
    console.log('Відповідь: ', response.data.results);
    return response.data.results;
}

