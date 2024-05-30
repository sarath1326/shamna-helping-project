


import React, { useState } from "react";
import "./App.css";
import Booking from "./components/Booking/Booking";
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home";

function App() {


	return (


		<div>

			<Routes>

				<Route element={<Home />} path="/" />

				<Route element={<Booking />} path="/movie-details" />




			</Routes>



		</div>










	);
}
export default App;
