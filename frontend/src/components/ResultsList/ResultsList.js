import useSortableData from 'helpers/useSortableData';
import { Link } from 'react-router-dom';
import styles from './css/ResultsList.module.scss';

export default function ResultsList({ results, settings }) {

	const { items, requestSort, sortConfig } = useSortableData(results);

	function getClassNamesFor(name) {
		if (!sortConfig) {
			return;
		}
		return sortConfig.key === name ? styles[sortConfig.direction] : undefined;
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

	function showResults(items) {
		return items.map((r) => {
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
					{settings.invoiceStatus && (
						<td>
							<Link to={`/artists/${r.artist}`} className={styles.link}>
								{r.invoice}
							</Link>
						</td>
					)}
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
							onClick={() => requestSort('date')}
							className={getClassNamesFor('date')}
						>
							Date
						</button>
					</th>
					<th>
						<button
							type="button"
							onClick={() => requestSort('time')}
							className={getClassNamesFor('time')}
						>
							Time
						</button>
					</th>
					<th>
						<button
							type="button"
							onClick={() => requestSort('status')}
							className={getClassNamesFor('status')}
						>
							Status
						</button>
					</th>
					{settings.invoiceStatus && (
						<th>
							<button
								type="button"
								onClick={() => requestSort('invoice')}
								className={getClassNamesFor('invoice')}
							>
								Invoice
							</button>
						</th>
					)}
					<th>
						<button
							type="button"
							onClick={() => requestSort('artist')}
							className={getClassNamesFor('artist')}
						>
							Artist
						</button>
					</th>
					<th>
						<button
							type="button"
							onClick={() => requestSort('location')}
							className={getClassNamesFor('location')}
						>
							Location
						</button>
					</th>
					<th>
						<button
							type="button"
							onClick={() => requestSort('venue')}
							className={getClassNamesFor('venue')}
						>
							Venue
						</button>
					</th>
					{settings.room && (
						<th>
							<button
								type="button"
								onClick={() => requestSort('room')}
								className={getClassNamesFor('room')}
							>
								Room
							</button>
						</th>
					)}
					<th>
						<button
							type="button"
							onClick={() => requestSort('pay')}
							className={getClassNamesFor('pay')}
						>
							Pay
						</button>
					</th>
					{settings.gigType && (
						<th>
							<button
								type="button"
								onClick={() => requestSort('gigType')}
								className={getClassNamesFor('gigType')}
							>
								Gig Type
							</button>
						</th>
					)}
					{settings.ticketStats && (
						<th>
							<button
								type="button"
								onClick={() => requestSort('ticketsSold')}
								className={getClassNamesFor('ticketsSold')}
							>
								Tickets
							</button>
						</th>
					)}
				</tr>
			</thead>
			<tbody className={settings.transparency ? styles.transparent : ''}>
				{results && showResults(items)}
			</tbody>
		</table>
	);
}
