import { useState, useEffect } from 'react';
import { ReactComponent as PreviousIcon } from 'assets/icons/prevIcon.svg';
import { ReactComponent as NextIcon } from 'assets/icons/nextIcon.svg';
import styles from './css/Pagination.module.scss';

export default function Pagination({ pages, currentPage, setCurrentPage, pageLimit }) {
	function goToNextPage() {
		setCurrentPage((page) => page + 1);
	}
	function goToPreviousPage() {
		setCurrentPage((page) => page - 1);
	}
	function changePage(e) {
		const pageNumber = Number(e.target.textContent);
		setCurrentPage(pageNumber);
	}
	

	const getPaginationGroup = () => {
        pageLimit = pages < pageLimit ? pages : pageLimit;
		let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
		return new Array(pageLimit).fill().map((_, index) => start + index + 1);
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
