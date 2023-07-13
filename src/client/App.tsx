import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute"
import Navbar from "./utils/Navbar";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Books from "./views/Books";
import BookDetails from "./views/BookDetails";
import New from "./views/New";
import Update from "./views/Update";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<div>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/books' element={<Books />} />
					<Route path='/books/:id' element={<BookDetails />} />
					<Route path='/books/:id/update' element={<Update />} />
					<Route path='/books/new' element={<PrivateRoute><New /></PrivateRoute>} />
				</Routes>
			</div>
		</BrowserRouter>
	)
};

export default App;