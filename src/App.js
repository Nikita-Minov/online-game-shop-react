import styles from './App.module.css';
import React from 'react';
import Header from './components/Header/Header.jsx';

function App() {
  return (
    <section className={styles.mainSection}>
      <div className={styles.wrapper}>
        <Header />
      </div>
    </section>
  );
}
export default App;
