import Link from 'next/link';
import styles from './styles.module.sass';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.copyright}>Created by <Link href="https://github.com/Daniel-Developement">Daniel Silva</Link></p>
        </footer>
    )
}