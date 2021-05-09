import { useState, useEffect } from 'react';
import { ReactComponent as PreviousIcon } from 'assets/icons/prevIcon.svg';
import { ReactComponent as NextIcon } from 'assets/icons/nextIcon.svg';
import styles from './css/Pagination.module.scss';

export default function Pagination({ results, pageLimit, resultsLimit }) {
	const [pages] = useState(Math.round(results.length / resultsLimit));
	const [currentPage, setCurrentPage] = useState(1);

	function goToNextPage() {
		setCurrentPage((page) => page + 1);
	}
	function goToPreviousPage() {
		setCurrentPage((page) => page - 1);
	}
	function changePage() {
		// const pageNumber = Number(event.target.textContent);
		// setCurrentPage(pageNumber);
	}
	const getPaginatedResults = () => {
		const startIndex = currentPage * resultsLimit - resultsLimit;
		const endIndex = startIndex + resultsLimit;
		return results.slice(startIndex, endIndex);
	};

	const getPaginationGroup = () => {
        const trueLimit = pages < pageLimit ? pages : pageLimit;
		let start = Math.floor((currentPage - 1) / trueLimit) * trueLimit;
		return new Array(trueLimit).fill().map((_, index) => start + index + 1);
	};
    
	return (
		<div className={styles.pagination}>
			<button
				onClick={goToPreviousPage}
				className={styles.arrow}
				disabled={currentPage === 1}
			>
				<PreviousIcon />
			</button>

			{getPaginationGroup().map((number, index) => (
				<button
					key={index}
					onClick={changePage}
					className={`${styles.number} ${
						currentPage === number ? styles.active : ''
					}`}
				>
					<span>{number}</span>
				</button>
			))}

			<button
				onClick={goToNextPage}
				className={styles.arrow}
				disabled={currentPage === pages}
			>
				<NextIcon />
			</button>
		</div>
	);
}
