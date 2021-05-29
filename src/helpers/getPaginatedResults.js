
export default function getPaginatedResults(results, resultsLimit, currentPage) {
    const startIndex = currentPage * resultsLimit - resultsLimit;
    const endIndex = startIndex + resultsLimit;
    return results.slice(startIndex, endIndex);
}
