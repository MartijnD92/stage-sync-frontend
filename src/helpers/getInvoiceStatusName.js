export default function getInvoiceStatusName(invoiceStatusEnum) {
    switch (invoiceStatusEnum) {
        case 'NOT_SENT':
            return 'Not sent';
        case 'SENT':
            return 'Sent';
        case 'PAID':
            return 'Paid';
        default:
            return 'N/A';
    }
}