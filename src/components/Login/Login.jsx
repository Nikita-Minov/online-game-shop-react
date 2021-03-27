import React from 'react';
import styles from './Login.module.css';
import vkLogo from '../../assets/img/vk.svg';
import steamLogo from '../../assets/img/steamLogo.svg';

const Login = () => {
  return (
    <div className={styles.loginBlock}>
      <h1 className={styles.loginMethod}>Авторизоваться через:</h1>
      <div className={styles.loginMethods}>
        <a href="#" className={styles.loginLinkVk}>
          <img src={vkLogo} alt="vkLogo" />
          Вконтакте
        </a>
        <a href="#" className={styles.loginLinkSteam}>
          <img src={steamLogo} alt="steamLogo" />
          Steam
        </a>
      </div>
    </div>
  );
};

export default Login;
