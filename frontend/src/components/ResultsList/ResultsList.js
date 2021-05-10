import { Link } from 'react-router-dom';
import styles from './css/ResultsList.module.scss';

export default function ResultsList({ results }) {
	function getStatusStyle(status) {
		let className = '';
		switch (status) {
			case 'Pending':
				return (className = 'pending');
			case 'Confirmed':
				return (className = 'confirmed');
			case 'Cancelled':
				return (className = 'cancelled');
			default:
				return className;
		}
	}

	function showResults(results) {
		return results.map((r) => {
			return (
				<tr key={r.id}>
					<td>
						<Link to={`/artists/${r.artist}`} className={styles.link}>
							<input
								type="checkbox"
								name={`select-${r.id}`}
								id={`select-${r.id}`}
								className={styles.checkbox}
							/>
						</Link>
					</td>
					<td>
						<Link to={`/artists/${r.artist}`} className={styles.link}>
							{r.date}
						</Link>
					</td>
					<td>
						<Link to={`/artists/${r.artist}`} className={styles.link}>
							{r.time}
						</Link>
					</td>
					<td className={styles[getStatusStyle(r.status)]}>
						<Link to={`/artists/${r.artist}`} className={styles.link}>
							{r.status}
						</Link>
					</td>
					<td>
						<Link to={`/artists/${r.artist}`} className={styles.link}>
							{r.invoice}
						</Link>
					</td>
					<td>
						<Link to={`/artists/${r.artist}`} className={styles.link}>
							{r.artist}
						</Link>
					</td>
					<td>
						<Link to={`/artists/${r.artist}`} className={styles.link}>
							{r.location}
						</Link>
					</td>
					<td>
						<Link to={`/artists/${r.artist}`} className={styles.link}>
							{r.venue}
						</Link>
					</td>
					<td>
						<Link to={`/artists/${r.artist}`} className={styles.link}>
							{r.room}
						</Link>
					</td>
					<td>
						<Link to={`/artists/${r.artist}`} className={styles.link}>
							&euro;&nbsp;{r.pay}
						</Link>
					</td>
					<td>
						<Link to={`/artists/${r.artist}`} className={styles.link}>
							{r.gigType}
						</Link>
					</td>
					<td>
						<Link to={`/artists/${r.artist}`} className={styles.link}>
							{r.ticketsSold || 0}/{r.ticketsTotal || 0}
						</Link>
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
