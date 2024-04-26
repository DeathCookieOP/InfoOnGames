import React, { useEffect, useState } from 'react'
import styles from './Game.module.css'

function Game(props) {

  console.log(props.game.game_id)

  return (
    <div className={styles.games}>
      <a className={styles.gameAnchor} href={`/${props.game.game_title}`}> 
        {/* {data.length > 0 && data[props.id-1].game_id && <p>{data[0].game_id}</p>} */}
        <img src={props.game.game_img} alt="" className={styles.gameImage} />
        <p>{props.game.game_title}</p>
      </a>
    </div>
  )
}

export default Game
