import Link from 'next/link'
import Layout from '../components/Layout'
import styles from "../styles/404.module.css";

export default function NotFoundPage() {
    return (
        <div>
            <Layout title="page not found">
                <div classname={styles.error}>
                    </div>
                <div>
                    <h1>404</h1>
                    <h3>Sorry, there is nothing here</h3>
                    <Link href="/">Go to home page</Link>
                </div>
            </Layout>
        </div>
    );
}