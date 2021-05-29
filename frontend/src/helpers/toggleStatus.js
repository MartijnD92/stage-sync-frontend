import axios from 'axios';

export default async function toggleStatus(e, item, setUpdatedStatus, user) {
    const newStatus = { confirmationStatus: e.target.value };
    const response = await axios.patch(
        `http://localhost:8080/api/gigs/gig/${item.id}/update`,
        newStatus,
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.token}`,
            },
        }
    );
    response && setUpdatedStatus(e.target.value);
    return;
};