import Link from 'next/link';
import styles from "../styles/footer.module.css";
export default function footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.copyright}>copyright &copy; FemiEvents 2021</p>
            <p className={styles.about}>
                <Link href="/about">about this project</Link>
            </p>
        </footer>
    );
}