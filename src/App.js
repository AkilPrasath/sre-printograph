import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Base } from "./views/base";
import { Home } from "./views/home";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Base />}>
						<Route path="home" element={<Home />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
