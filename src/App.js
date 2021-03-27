import styles from './App.module.css';
import React from 'react';
import Header from './components/Header/Header.jsx';
import Discount from './components/Discount/Discount.jsx';
import Login from './components/Login/Login.jsx';

function App() {
  return (
    <section className={styles.mainSection}>
      <div className={styles.wrapper}>
        <Header />
      </div>
      <div className={styles.discountAndLogin}>
        <div className={styles.wrapper}>
          <Discount />
          <Login />
        </div>
      </div>
    </section>
  );
}
export default App;
