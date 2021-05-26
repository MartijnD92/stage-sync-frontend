import useSortableData from 'helpers/useSortableData';
import { Link } from 'react-router-dom';
import getStatusStyle from 'helpers/getStatusStyle';
import getClassNamesFor from 'helpers/getClassNamesFor';
import getInvoiceStatusName from 'helpers/getInvoiceStatusName';
import getDateAndTime from 'helpers/getDateAndTime';
import styles from './css/ResultsList.module.scss';

export default function ResultsList({ results, settings }) {
	const { items, requestSort, sortConfig } = useSortableData(results);

	function showResults(items) {
		return items.map((item) => {

			const dateAndTime = getDateAndTime(item.date);
			return (
				<tr key={item.id}>
					<td>
						<Link to={`/artists/${item.artistName}`} className={styles.link}>
							<input
								type="checkbox"
								name={`select-${item.id}`}
								id={`select-${item.id}`}
								className={styles.checkbox}
							/>
						</Link>
					</td>
					<td>
						<Link to={`/artists/${item.artistName}`} className={styles.link}>
							{dateAndTime?.date}
						</Link>
					</td>
					<td>
						<Link to={`/artists/${item.artistName}`} className={styles.link}>
							{dateAndTime?.time}
						</Link>
					</td>
					<td className={styles[getStatusStyle(item.confirmationStatus)]}>
						<Link to={`/artists/${item.artistName}`} className={styles.link}>
							{item.confirmationStatus}
						</Link>
					</td>
					{settings.invoiceStatus && (
						<td>
							<Link to={`/artists/${item.artistName}`} className={styles.link}>
								{getInvoiceStatusName(item.invoiceStatus)}
							</Link>
						</td>
					)}
					<td>
						<Link to={`/artists/${item.artistName}`} className={styles.link}>
							{item.artistName}
						</Link>
					</td>
					<td>
						<Link to={`/artists/${item.artistName}`} className={styles.link}>
							{item.name}
						</Link>
					</td>
					<td>
						<Link to={`/artists/${item.artistName}`} className={styles.link}>
							{item.location}
						</Link>
					</td>
					<td>
						<Link to={`/artists/${item.artistName}`} className={styles.link}>
							{item.venue}
						</Link>
					</td>
					{settings.room && (
						<td>
							<Link to={`/artists/${item.artistName}`} className={styles.link}>
								{item.room}
							</Link>
						</td>
					)}
					<td>
						<Link to={`/artists/${item.artistName}`} className={styles.link}>
							&euro;&nbsp;{item.fee}
						</Link>
					</td>
					{settings.gigType && (
						<td>
							<Link to={`/artists/${item.artistName}`} className={styles.link}>
								{item.gigType}
							</Link>
						</td>
					)}
					{settings.ticketStats && (
						<td>
							<Link to={`/artists/${item.artistName}`} className={styles.link}>
								{item.ticketsSold || 0}/{item.ticketsTotal || 0}
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
							className={getClassNamesFor('date', sortConfig, styles)}
						>
							Date
						</button>
					</th>
					<th>
						<button
							type="button"
							onClick={() => requestSort('time')}
							className={getClassNamesFor('time', sortConfig, styles)}
						>
							Time
						</button>
					</th>
					<th>
						<button
							type="button"
							onClick={() => requestSort('status')}
							className={getClassNamesFor('status', sortConfig, styles)}
						>
							Status
						</button>
					</th>
					{settings.invoiceStatus && (
						<th>
							<button
								type="button"
								onClick={() => requestSort('invoice')}
								className={getClassNamesFor('invoice', sortConfig, styles)}
							>
								Invoice
							</button>
						</th>
					)}
					<th>
						<button
							type="button"
							onClick={() => requestSort('artist')}
							className={getClassNamesFor('artist', sortConfig, styles)}
						>
							Artist
						</button>
					</th>
					<th>
						<button
							type="button"
							onClick={() => requestSort('artist')}
							className={getClassNamesFor('artist', sortConfig, styles)}
						>
							Gig Name
						</button>
					</th>
					<th>
						<button
							type="button"
							onClick={() => requestSort('location')}
							className={getClassNamesFor('location', sortConfig, styles)}
						>
							Location
						</button>
					</th>
					<th>
						<button
							type="button"
							onClick={() => requestSort('venue')}
							className={getClassNamesFor('venue', sortConfig, styles)}
						>
							Venue
						</button>
					</th>
					{settings.room && (
						<th>
							<button
								type="button"
								onClick={() => requestSort('room')}
								className={getClassNamesFor('room', sortConfig, styles)}
							>
								Room
							</button>
						</th>
					)}
					<th>
						<button
							type="button"
							onClick={() => requestSort('pay')}
							className={getClassNamesFor('pay', sortConfig, styles)}
						>
							Fee
						</button>
					</th>
					{settings.gigType && (
						<th>
							<button
								type="button"
								onClick={() => requestSort('gigType')}
								className={getClassNamesFor('gigType', sortConfig, styles)}
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
								className={getClassNamesFor('ticketsSold', sortConfig, styles)}
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
