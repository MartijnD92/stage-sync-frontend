import { useContext, useState } from 'react';
import { AuthContext } from 'context/AuthContext';
import axios from 'axios';
import useSortableData from 'helpers/useSortableData';
import getClassNamesFor from 'helpers/getClassNamesFor';
import hasPermission, { actions } from 'user-permissions/permissions';
import Result from 'components/Result/Result';
import styles from './css/ResultsList.module.scss';

export default function ResultsList({ results, setGigStatus, settings }) {
	const { user } = useContext(AuthContext);
	const { items, requestSort, sortConfig } = useSortableData(results);

	function showResults(items) {
		return items.map((item) => {
			return (
				<Result
					key={item.id}
					results={results}
					item={item}
					setGigStatus={setGigStatus}
					user={user}
					settings={settings}
				/>
			);
		});
	}

	return (
		<table className={styles.table}>
			<thead>
				<tr>
					{hasPermission(user, actions.DELETE_RECORD) && (
						<th>
							<input
								type="checkbox"
								name="selectAll"
								id="selectAll"
								className={styles.checkbox}
								onChange={(e) => {
									setGigStatus(
										results.map((result) => {
											result.select = e.target.checked;
											return result;
										})
									);
								}}
							/>
						</th>
					)}
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
