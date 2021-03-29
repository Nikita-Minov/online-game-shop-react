import React from 'react';
import styles from './UserInfo.module.css';
import userPhoto from '../../assets/img/userPhoto.png';

const UserInfo = () => {
  return (
    <div className={styles.userInfoWrapper}>
      <div className={styles.userPhotoWrapper}>
        <img src={userPhoto} alt="userPhoto" className={styles.userPhoto} />
      </div>
      <div className={styles.userDescription}>
        <h3 className={styles.userName}>Алексей Паутов</h3>
        <h4 className={styles.userBalance}>Баланс: 500 р.</h4>
        <a href="#" className={styles.officeLink}>
          Личный кабинет
        </a>
      </div>
    </div>
  );
};

export default UserInfo;
