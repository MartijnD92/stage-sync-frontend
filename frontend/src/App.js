import { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthContext } from 'context/AuthContext';
import PrivateRoute from 'components/PrivateRoute';
import Home from 'pages/Home/Home';
import Dashboard from 'pages/Dashboard/Dashboard';
import Signup from 'pages/Signup/Signup';
import Login from 'pages/Login/Login';
import './css/App.scss';

function App() {
	const { user } = useContext(AuthContext);

	return (
		<>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/signup">
					<Signup />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				{/* <PrivateRoute path="/dashboard">
					<Dashboard />
				</PrivateRoute> */}
				<Route path="/dashboard">
					<Dashboard />
				</Route>
			</Switch>
		</>
	);
}

export default App;
