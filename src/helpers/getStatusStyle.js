export default function getStatusStyle(status) {
    let className = '';
    switch (status) {
        case 'PENDING':
            return (className = 'pending');
        case 'CONFIRMED':
            return (className = 'confirmed');
        case 'CANCELLED':
            return (className = 'cancelled');
        default:
            return className;
    }
}