import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute"
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
};

export default App;