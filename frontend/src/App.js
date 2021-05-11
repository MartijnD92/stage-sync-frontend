import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Dashboard from 'pages/Dashboard/Dashboard';
import './css/App.scss';

function App() {
	return (
		<>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/dashboard">
					<Dashboard />
				</Route>
				<Route path="/dashboard/settings">
					<Dashboard settingsModal={true} />
				</Route>
			</Switch>
		</>
	);
}

export default App;
