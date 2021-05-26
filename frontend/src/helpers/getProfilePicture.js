import axios from 'axios';

export default async function getProfilePicture(user, setter) {

    const response = await axios.get(
        `http://localhost:8080/api/users/user/profilepicture`,
        {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        }
    );
    setter(response.data)
};