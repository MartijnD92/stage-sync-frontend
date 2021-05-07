import { Switch, Route } from 'react-router-dom';
import NavBar from 'components/NavBar/NavBar';
import Home from 'pages/Home/Home';
import Dashboard from 'pages/Dashboard/Dashboard';
import './css/App.scss';

function App() {
	return (
		<>
			<header>
				<NavBar />
			</header>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/dashboard">
					<Dashboard />
				</Route>
			</Switch>
		</>
	);
}

export default App;
