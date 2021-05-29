import { Link } from 'react-router-dom';
import NavBar from 'components/NavBar/NavBar';
import Footer from 'components/Footer/Footer';
import styles from './css/PageNotFound.module.scss';

export default function PageNotFound() {
	return (
		<div className={styles.content}>
			<NavBar />
			<main className={styles.main}>
				<div className={styles.textbox}>
                    <h1 className={styles.title}>404 Not Found</h1>
                    <p className={styles.large}>
                        Oops! We couldn't find the page you were looking for...
                    </p>
                    <p className={styles.small}>
                        We suggest you return to <Link className={styles.link} to="/">our homepage</Link>
                    </p>
                </div>
			</main>
			<Footer/>
		</div>
	);
}
