import React from 'react'
import styles from './GameInfo.module.css'

function GameInfo(props) {

  return (
    <div className={styles.game_info_container}>
      <div className={styles.game_info_text}>
        <h3>Game Title:</h3>
        <p>{props.game.game_title}</p>

        <br />

        <h4>Game Publisher:</h4>
        <p>{props.game.game_publisher}</p>

        <br />

        <h4>Game Description:</h4>
        <p>{props.game.game_desc}</p>
        </div>

        <img className={styles.game_info_img} src={props.game.game_img} alt="" />
    </div>
  )
}

export default GameInfo
