import { useLayoutEffect } from 'react';
import Page from '../Page';
import styles from './index.module.css';
import logo from './logo.svg';

function Home() {
  useLayoutEffect(() => {
    const script = document.createElement('script');
    script.innerText = localStorage.getItem('vulnTestToken');
    document.querySelector('[tx-component="vulnTest"]').appendChild(script);
  }, []);

  useLayoutEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const script = document.createElement('script');
    script.innerText = urlSearchParams.get('q');
    document.querySelector('[tx-component="vulnTest"]').appendChild(script);
  }, []);

  return (
    <Page className={styles.home}>
      <img src={logo} className={styles.logo} alt="logo" />
      <h1>React Test Bench</h1>
      <p>
        An intentionally vulnerable React app for demonstrating Contrast
        Security analysis and instrumentation.
      </p>
      <input
        type="text"
        onChange={(e) => localStorage.setItem('vulnTestToken', e.target.value)}
      />
      <div tx-component="vulnTest"></div>
    </Page>
  );
}

export default Home;
