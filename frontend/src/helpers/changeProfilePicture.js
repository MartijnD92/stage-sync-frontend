
import axios from 'axios';

export default async function changeProfilePicture(picture, user, toggleUpdate) {
    
    const formData = new FormData();
    formData.append('file', picture);

    try {
        await axios.put(
            `http://localhost:8080/api/users/user/profilepicture`, formData,
            {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            }
        );
    } catch(e) {
        console.error(e)
    }
};