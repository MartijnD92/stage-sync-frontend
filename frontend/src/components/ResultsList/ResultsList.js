import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './css/ResultsList.module.scss';

export default function ResultsList({ results, settings }) {
	const [sortConfig, setSortConfig] = useState(null);
	let sortedResults = JSON.parse(JSON.stringify(results))

	if (sortConfig !== null) {
		sortedResults.sort((a, b) => {
			if (a[sortConfig] < b[sortConfig]) {
				return -1;
			}
			if (a[sortConfig] > b[sortConfig]) {
				return 1;
			}
			return 0;
		});
	}

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
		return sortedResults.map((r) => {
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
					{settings.room && (
						<td>
							<Link to={`/artists/${r.artist}`} className={styles.link}>
								{r.room}
							</Link>
						</td>
					)}
					<td>
						<Link to={`/artists/${r.artist}`} className={styles.link}>
							&euro;&nbsp;{r.pay}
						</Link>
					</td>
					{settings.gigType && (
						<td>
							<Link to={`/artists/${r.artist}`} className={styles.link}>
								{r.gigType}
							</Link>
						</td>
					)}
					{settings.ticketStats && (
						<td>
							<Link to={`/artists/${r.artist}`} className={styles.link}>
								{r.ticketsSold || 0}/{r.ticketsTotal || 0}
							</Link>
						</td>
					)}
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
					<th>
						<button
							type="button"
							className={styles.date}
							onClick={() => setSortConfig('date')}
						>
							Date
						</button>
					</th>
					<th>
						<button
							type="button"
							className={styles.date}
							onClick={() => setSortConfig('time')}
						>
							Time
						</button>
					</th>
					<th>
						<button
							type="button"
							className={styles.status}
							onClick={() => setSortConfig('status')}
						>
							Status
						</button>
					</th>
					<th>
						<button
							type="button"
							className={styles.status}
							onClick={() => setSortConfig('invoice')}
						>
							Invoice
						</button>
					</th>
					<th>
						<button
							type="button"
							className={styles.status}
							onClick={() => setSortConfig('artist')}
						>
							Artist
						</button>
					</th>
					<th>
						<button
							type="button"
							className={styles.status}
							onClick={() => setSortConfig('location')}
						>
							Location
						</button>
					</th>
					<th>
						<button
							type="button"
							className={styles.status}
							onClick={() => setSortConfig('venue')}
						>
							Venue
						</button>
					</th>
					{settings.room && (
						<th>
							<button
								type="button"
								className={styles.status}
								onClick={() => setSortConfig('room')}
							>
								Room
							</button>
						</th>
					)}
					<th>
						<button
							type="button"
							className={styles.status}
							onClick={() => setSortConfig('pay')}
						>
							Pay
						</button>
					</th>
					{settings.gigType && (
						<th>
							<button
								type="button"
								className={styles.status}
								onClick={() => setSortConfig('pay')}
							>
								Gig Type
							</button>
						</th>
					)}
					{settings.ticketStats && (
						<th>
							<button
								type="button"
								className={styles.status}
								onClick={() => setSortConfig('pay')}
							>
								Tickets
							</button>
						</th>
					)}
				</tr>
			</thead>
			<tbody className={settings.transparency ? styles.transparent : ''}>
				{results && showResults(results)}
			</tbody>
		</table>
	);
}
