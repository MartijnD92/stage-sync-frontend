import axios from 'axios';

export default async function getGigs(setter, query, setError) {
	setError(false);
	try {
		const response = await axios.get(
			`http://localhost:8080/api/artists/artist/${query}`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('JWT_token')}`,
				},
			}
		);
		const gigs = response.data[0].gigs;
		setter(gigs);
	} catch (e) {
		console.error(e);
		setError(true);
	}
}
