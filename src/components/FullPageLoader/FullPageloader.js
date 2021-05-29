import Preloader from 'components/Preloader/Preloader';
import styles from './css/FullPageLoader.module.scss'

export default function FullPageLoader() {
    return (
        <div className={styles.container}>
            <Preloader/>
        </div>
    )
}
