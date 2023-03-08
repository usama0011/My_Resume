import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Admin.module.css'

const layout = ({children}) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>My Dashboard</title>
          </Head>
          <header>
          </header>
          <nav className={styles.sidebar}>
            <ul>
              <li>
                <Link href="/admin">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/admin/portfolioAdmin">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/admin/latestNewsAdmin">
                News
                </Link>
              </li>
              <li>
                <Link href="/admin/certificateAdmin">
                  Certification
                </Link>
              </li>
            </ul>
          </nav>
          <main className={styles.main}>
          {children}
          </main>
        </div>
      );
}

export default layout