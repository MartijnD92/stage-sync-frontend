import { useState } from 'react';
import hasPermission, { actions } from 'user-permissions/permissions';
import { Link } from 'react-router-dom';
import getDateAndTime from 'helpers/getDateAndTime';
import getInvoiceStatusName from 'helpers/getInvoiceStatusName';
import toggleStatus from 'helpers/toggleStatus';
import getStatusStyle from 'helpers/getStatusStyle';

import styles from '../ResultsList/css/ResultsList.module.scss';

export default function Result({
	results,
	item,
	setGigStatus,
	user,
	settings,
}) {
	const statuses = ['CONFIRMED', 'PENDING', 'CANCELLED'];
	const [updatedStatus, setUpdatedStatus] = useState('');
	const dateAndTime = getDateAndTime(item.date);

	return (
		<tr>
			{hasPermission(user, actions.DELETE_RECORD) && (
				<td>
					<input
						type="checkbox"
						checked={item.select}
						name={`select-${item.id}`}
						id={`select-${item.id}`}
						className={styles.checkbox}
						onChange={(e) => {
							setGigStatus(
								results.map((result) => {
									if (result.id === item.id) {
										result.select = e.target.checked;
									}
									return result;
								})
							);
						}}
					/>
				</td>
			)}
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
			<td>
				<select
					name="status"
					id="status"
					className={`${styles.statusSelect} ${
						styles[getStatusStyle(updatedStatus || item.confirmationStatus)]
					}`}
					onChange={(e) => toggleStatus(e, item, setUpdatedStatus, user)}
				>
					{item.confirmationStatus && (
						<option value={item.confirmationStatus}>
							{item.confirmationStatus}
						</option>
					)}
					{statuses.map((status) => {
						return (
							status !== item.confirmationStatus && (
								<option key={status} value={status}>
									{status}
								</option>
							)
						);
					})}
				</select>
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
					&euro;&nbsp;{item.fee?.toLocaleString('en-UK')}
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
}
