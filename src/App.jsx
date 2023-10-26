import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './views/app-views/Login';
import Home from './views/app-views/Home';
import RequireLogin from './auth/requireLogin';
import Nav from './components/Nav';

function App() {
	const location = useLocation();
	return (
		<div>
			{location.pathname !== '/' && <Nav />}
			<Routes>
				<Route
					path="/"
					element={<Login />}
				/>
				<Route
					path="/home"
					element={
						<RequireLogin>
							<Home />
						</RequireLogin>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
