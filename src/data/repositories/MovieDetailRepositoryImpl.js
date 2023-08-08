import MovieDetailRepository from '../../domain/repositories/MovieDetailRepository.js';
import Movie from '../model/Movie.js';

export default class MovieDetailRepositoryImpl extends MovieDetailRepository {
    async fetchMoviesById(id) {
        // todo fetch data from localstorage
        const response = await fetch(`https://www.omdbapi.com/?apikey=f1140859&i=${id}`);
        let movie;
        if (response.status === 200) {
            const data = await response.json();
            movie = new Movie(data);
        } else {
            alert("Request failed with status code: " + response.status);
        }
        return movie;
    }
}