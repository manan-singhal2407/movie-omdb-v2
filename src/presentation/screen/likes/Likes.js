import React, { useEffect, useState } from 'react';
import HomeRepositoryImpl from '../../../data/repositories/HomeRepositoryImpl.js';

const Likes = () => {
    const [moviesList, setMoviesList] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [pageCount, setPageCount] = useState(1);
    const [filterYear, setFilterYear] = useState('');

    const generateYearOptions = () => {
        const years = [];
        for (let i = new Date().getFullYear(); i >= 1970; i--) {
            years.push(<option value={i}>{i}</option>);
        }
        return years;
    };

    const updatePaginationNumber = () => {
        const paginationUI = [];
        for (let i=-2; i<=2; i++) {
            if (i === 0) {
                paginationUI.push(<span>{pageCount}</span>);
            } else if (i < 0) {
                if (pageCount + i >= 1) {
                    paginationUI.push(<a onClick={() => setPageCount(pageCount+i)}>{pageCount+i}</a>);
                }
            } else {
                if (pageCount + i <= 100 && moviesList.length === 10) {
                    paginationUI.push(<a onClick={() => setPageCount(pageCount+i)}>{pageCount+i}</a>);
                }
            }
        }
        return paginationUI;
    };

    const fetchMoviesWithTextAndPage = async () => {
        const homeRepository = new HomeRepositoryImpl();
        const movies = await homeRepository.fetchMoviesByTextAndPage(searchText === '' ? 'Harry' : searchText, pageCount, filterYear === '' ? null : filterYear);
        setMoviesList(movies);
    };

    const onClickPreviousButton = () => {
        if (pageCount !== 1) {
            setPageCount(pageCount - 1);
        }
    };

    const onClickNextButton = () => {
        if (moviesList.length === 10) {
            setPageCount(pageCount + 1);
        }
    };

    useEffect(() => {
        fetchMoviesWithTextAndPage();
    }, [pageCount, filterYear]);

    return (
        <div className='page_container'>
            <div className='nav_container'>
                <select value={filterYear} onChange={(e) => { setFilterYear(e.target.value); fetchMoviesWithTextAndPage(); }}>
                    <option value={''}>Year</option>
                    {generateYearOptions()}
                </select>
                <div className='nav_container_search_box'>
                    <input type='text' placeholder='Search movies...' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button onClick={() => setPageCount(1)}>Search</button>
                </div>
            </div>
            <ul className='movie_grid_container'>
                {moviesList.map((movie) => (
                    <li className='movie_grid_card_container'>
                        <a role='presentation'>
                            <img src={movie.Poster} alt='' />
                            <h3>{movie.Title}</h3>
                        </a>
                    </li>
                ))}
            </ul>
            <div className='movie_pagination'>
                <button onClick={onClickPreviousButton}>Previous</button>
                <span className='movie_pagination_numbers'>{updatePaginationNumber()}</span>
                <button onClick={onClickNextButton}>Next</button>
            </div>
        </div>
    );
};

export default Likes;