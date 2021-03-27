import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <a href="#" className={styles.logoLink}>
            GameShop.Fun
          </a>
        </div>
        <div className={styles.navBarAndSearchWrapper}>
          <nav className={styles.navBar}>
            <div>
              <a href="#" className={styles.navBarLink}>
                Отзывы
              </a>
            </div>
            <div>
              <a href="#" className={styles.navBarLink}>
                Гарантии
              </a>
            </div>
          </nav>
          <div>
            <input className={styles.searchInput} type="text" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
