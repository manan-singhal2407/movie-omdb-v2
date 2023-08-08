import React, { useEffect, useState } from 'react';
import HomeRepositoryImpl from '../../../data/repositories/HomeRepositoryImpl.js';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
    const { imdbID } = useParams();
    return (
        <div className='page_container'>
            <p>{imdbID}</p>
        </div>
    );
};

export default MovieDetail;