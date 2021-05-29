import axios from 'axios';

export default async function getGigs(setter, { query }, setError) {
	if (!query.query) return;
	setError(false);
	try {
		const response = await axios.get(
			`http://localhost:8080/api/gigs/${query.query}`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('JWT_token')}`,
				},
			}
		);
		const gigs = response.data[0].gigs;
		gigs &&
			setter(
				gigs.map((gig) => {
					return {
						...gig,
						select: false,
					};
				})
			);
		if (gigs.length === 0) setError(true);
	} catch (e) {
		console.error("Error: couldn't find resource");
		setError(true);
	}
}
