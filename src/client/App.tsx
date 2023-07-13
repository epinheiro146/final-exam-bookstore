import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute"

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Routes>

				</Routes>
			</div>
		</BrowserRouter>
	)
};

export default App;