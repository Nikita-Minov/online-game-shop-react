import styles from './App.module.css';
import React from 'react';
import Header from './components/Header/Header.jsx';
import Discount from './components/Discount/Discount.jsx';
import Login from './components/Login/Login.jsx';
import GamesContainer from './components/Games/Games.jsx';
import Group from './components/Group/Group.jsx';
import UserInfo from './components/UserInfo/UserInfo.jsx';

function App() {
  return (
    <>
      <Header />
      <section className={styles.mainSection}>
        <div className={styles.wrapper}>
          <div className={styles.blocksWrapper}>
            <div className={styles.gamesWrapper}>
              <Discount />
              <GamesContainer />
            </div>
            <div className={styles.sidebarWrapper}>
              <Login />
              <Group />
              <UserInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default App;
