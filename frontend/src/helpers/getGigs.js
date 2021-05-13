import axios from 'axios';

export default async function getGigs(setter, query) {
    try {
        const response = await axios.get('http://localhost:3000/gigs/');
        const data = response.data.filter(
            (responseObj) => responseObj.artist === query
        );
        setter(data);
    } catch (e) {
        console.error(e);
    }
}