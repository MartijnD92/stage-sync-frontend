import axios from 'axios'

	export default async function getUserDetails(user, setter) {
        if (!user) return;
		try {
			const response = await axios.get(`http://localhost:8080/api/users/user/${user.username}/details`, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            })
			setter(response.data)
		} catch(e) {
			console.error(e)
		}
	}