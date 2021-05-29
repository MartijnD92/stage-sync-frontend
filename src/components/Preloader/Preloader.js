import { ReactComponent as AudioLoader } from 'assets/loader_audio.svg';
import styles from './css/Preloader.module.scss';

export default function Preloader() {
	return <AudioLoader className={styles.preloader} />;
}
