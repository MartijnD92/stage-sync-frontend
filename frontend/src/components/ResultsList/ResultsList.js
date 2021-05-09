import styles from './css/ResultsList.module.scss';

export default function ResultsList({ results }) {
	function showResults(results) {
		return results.map((r) => {
			return (
				<tr key={r.id}>
						<th>
						<input
							type="checkbox"
							name={`select-${r.id}`}
							id={`select-${r.id}`}
							className={styles.checkbox}
						/>
					</th>
					<td>{r.date}</td>
					<td>{r.time}</td>
					<td>{r.status}</td>
					<td>{r.invoice}</td>
					<td>{r.artist}</td>
					<td>{r.location}</td>
					<td>{r.venue}</td>
					<td>{r.room}</td>
					<td>{r.pay}</td>
					<td>{r.gigType}</td>
					<td>
						{r.ticketsSold || 0}/{r.ticketsTotal || 0}
					</td>
				</tr>
			);
		});
	}

	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th>
						<input
							type="checkbox"
							name="selectAll"
							id="selectAll"
							className={styles.checkbox}
						/>
					</th>
					<th>Date</th>
					<th>Time</th>
					<th>Status</th>
					<th>Invoice</th>
					<th>Artist</th>
					<th>Location</th>
					<th>Venue</th>
					<th>Room</th>
					<th>Pay</th>
					<th>Gig Type</th>
					<th>Tickets</th>
				</tr>
			</thead>
			<tbody>{results && showResults(results)}</tbody>
		</table>
	);
}
