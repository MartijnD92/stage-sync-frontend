import { Switch, Route } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';
import Home from 'pages/Home/Home';
import Dashboard from 'pages/Dashboard/Dashboard';
import Signup from 'pages/Signup/Signup';
import Login from 'pages/Login/Login';
import './css/App.scss';

function App() {

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
				<PrivateRoute exact path="/dashboard">
					<Dashboard />
				</PrivateRoute>
				<Route path="/dashboard/settings">
					<Dashboard settingsModal={true} />
				</Route>
				<Route path="/dashboard/add">
					<Dashboard AddModal={true} />
				</Route>
			</Switch>
		</>
	);
}

export default App;
