export default function getClassNamesFor(name, sortConfig, styles) {
    if (!sortConfig) {
        return;
    }
    return sortConfig.key === name ? styles[sortConfig.direction] : undefined;
}