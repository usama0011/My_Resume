import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Admin.module.css'
const Layout = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Dashboard</title>
      </Head>
      <header>
        <h1>My Dashboard</h1>
      </header>
      <nav className={styles.sidebar}>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a>Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="/news">
              <a>News</a>
            </Link>
          </li>
          <li>
            <Link href="/certification">
              <a>Certification</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main className={styles.main}>
        Main is here
      </main>
    </div>
  );
};

export default Layout;
