import axios from 'axios';

export default async function updateUserDetails(requestDetails, user) {
    try {
        await axios.patch(
            `http://localhost:8080/api/users/user/${user.username}/update`,
            requestDetails,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`,
                },
            }
        );
    } catch (e) {
        console.error(e);
    }
}