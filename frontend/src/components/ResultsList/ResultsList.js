import styles from './css/ResultsList.module.scss';

export default function ResultsList({ results }) {

	function showResults(results) {
		return results.map((r) => {
			return (
				<tr key={r.id}>
					<td>{r.date}</td>
					<td>{r.time}</td>
					<td>{r.status}</td>
					<td>{r.invoice}</td>
					<td>{r.artist}</td>
					<td>{r.location}</td>
					<td>{r.venue}</td>
					<td>{r.room}</td>
					<td>{r.pay}</td>
					<td>{r.showType}</td>
					<td>{r.ticketsSold || 0}/{r.ticketsTotal || 0}</td>
				</tr>
			);
		});
	}

	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th>Date</th>
					<th>Time</th>
					<th>Status</th>
					<th>Invoice</th>
					<th>Artist</th>
					<th>Location</th>
					<th>Venue</th>
					<th>Room</th>
					<th>Pay</th>
					<th>Show Type</th>
					<th>Tickets</th>
				</tr>
			</thead>
			<tbody>{results && showResults(results)}</tbody>
		</table>
	);
}
