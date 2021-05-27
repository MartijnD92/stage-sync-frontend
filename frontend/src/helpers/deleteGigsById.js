import axios from 'axios';
import getGigs from 'helpers/getGigs';

export default function deleteGigsById(
	gigResults,
	setGigResults,
	gigQuery,
	setError
) {
	let arrayids = [];
	gigResults.forEach((gig) => {
		if (gig.select) {
			arrayids.push(gig.id);
		}
	});
	axios
		.delete(`http://localhost:8080/api/gigs/${arrayids}`)
		.then(() => {
			getGigs(setGigResults, gigQuery, setError);
		})
		.catch((err) => console.error(err));
}
