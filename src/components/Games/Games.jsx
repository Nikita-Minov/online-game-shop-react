import React from 'react';
import styles from './Games.module.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Game from './Game/Game.jsx';

const Games = (props) => {
  const goods = props.games.map((value) => {
    return <Game alt={value.name} key={value.key} cover={value.cover} />;
  });

  return <div className={styles.games}>{goods}</div>;
};

Games.propTypes = {
  games: PropTypes.array,
};

const mapStateToProps = (state) => ({ games: state.game.games });

const GamesContainer = connect(mapStateToProps, null)(Games);

export default GamesContainer;
