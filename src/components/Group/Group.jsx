import React from 'react';
import styles from './Group.module.css';
import groupPhoto from '../../assets/img/group.png';

const Group = () => {
  return (
    <div className={styles.groupWrapper}>
      <img className={styles.groupPhoto} src={groupPhoto} alt="group" />
      <p className={styles.groupName}>GameShop.Fun</p>
      <p className={styles.groupDescription}>Магазин с лучшими ценами на рынке ✅</p>
      <a href="#" className={styles.groupLink}>
        Вступить
      </a>
    </div>
  );
};

export default Group;
