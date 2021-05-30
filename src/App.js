import { useContext } from 'react';
import { AuthContext } from 'context/AuthContext';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';
import Home from 'pages/Home/Home';
import Dashboard from 'pages/Dashboard/Dashboard';
import Signup from 'pages/Signup/Signup';
import Login from 'pages/Login/Login';
import PageNotFound from 'pages/PageNotFound/PageNotFound';
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
				<PrivateRoute path="/dashboard">
					<Dashboard />
				</PrivateRoute>
				{user === null ? <Route path="/login" component={Login}/> : <Redirect to="/dashboard" />}
				<Route path="/404" component={PageNotFound} />
				<Redirect to="/404" />
			</Switch>
		</>
	);
}

export default App;
