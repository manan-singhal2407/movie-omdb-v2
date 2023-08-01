import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../screen/home/Home.js';
import Likes from '../screen/likes/Likes.js';

function AppRoute() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/likes" element={<Likes />} />
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoute;