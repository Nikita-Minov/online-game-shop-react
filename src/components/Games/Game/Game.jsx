import React from 'react';
import * as PropTypes from 'prop-types';
import styles from './Game.module.css';

const Game = (props) => {
  return (
    <div key={props.key} className={styles.game}>
      <img src={props.cover} alt={props.alt} />
    </div>
  );
};

Game.propTypes = {
  key: PropTypes.number,
  cover: PropTypes.string,
  alt: PropTypes.string,
};

export default Game;
