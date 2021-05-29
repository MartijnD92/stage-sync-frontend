import axios from 'axios';
import getGigs from 'helpers/getGigs';

export default function deleteGigsById(
	gigResults,
	setGigResults,
	gigQuery,
	setError,
) {

	let arrayIds = [];
	gigResults.forEach((gig) => {
		if (gig.select) {
			arrayIds.push(gig.id);
		}
	});
	axios
		.delete(`http://localhost:8080/api/gigs/${arrayIds}/delete`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('JWT_token')}`,
			},
		})
		.then(() => {
			getGigs(setGigResults, gigQuery, setError);
		})
		.catch((err) => console.error(err));
}
