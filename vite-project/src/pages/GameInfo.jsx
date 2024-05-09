import React from 'react'
import styles from './GameInfo.module.css'

function GameInfo(props) {

  return (
    <div className={styles.game_info_container}>
      <div className={styles.game_info_text}>
        <h2 className={styles.gameInfoh2}>Game Title:</h2>
        <p>{props.game.game_title}</p>

        <br />

        <h3>Game Publisher:</h3>
        <p>{props.game.game_publisher}</p>

        <br />

        <h3>Game Description:</h3>
        <p>{props.game.game_desc}</p>
      </div>

      <img className={styles.game_info_img} src={props.game.game_img} alt="" />
    </div>
  )
}

export default GameInfo
