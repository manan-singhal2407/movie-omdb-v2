import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../screen/home/Home.js';
import Likes from '../screen/likes/Likes.js';
import MovieDetail from '../screen/movieDetail/MovieDetail.js';

function AppRoute() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/likes" element={<Likes />} />
				<Route path="/movieDetail/:imdbID" element={<MovieDetail />} />
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoute;