import React from 'react'
import Logo from 'components/Logo/Logo';
import styles from './css/Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.left}>
                <Logo extended={false}/>
            </div>
        </footer>
    )
}
