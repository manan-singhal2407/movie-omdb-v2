import HomeRepository from '../../domain/repositories/HomeRepository.js';
import Movie from '../model/Movie.js';

export default class HomeRepositoryImpl extends HomeRepository {
    async fetchMoviesByTextAndPage(text, page, year) {
        const response = await fetch(`https://www.omdbapi.com/?apikey=f1140859&s=${text}&page=${page}&y=${year}`);
        let movies = [];
        if (response.status === 200) {
            const data = await response.json();
            if (data.Response === 'True') {
                for (const movie of data.Search) {
                    movies.push(new Movie(movie));
                }
            }
        } else {
            alert("Request failed with status code: " + response.status);
        }
        return movies;
    }
}