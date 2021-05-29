import axios from 'axios';

export default async function getProfilePicture(user, setter) {
	try {
		const response = await axios.get(
			`http://localhost:8080/api/users/user/profilepicture`,
			{
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			}
		);
		setter(response.data);
	} catch (e) {
		console.error(e);
	}
}
