import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ children, isLoggedIn, ...rest }) {
	return (
		<Route {...rest}>
			{isLoggedIn ? children : <Redirect to={'/login'}/>}
		</Route>
	);
}

export default PrivateRoute;
