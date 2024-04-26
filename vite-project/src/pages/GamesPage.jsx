import React, { useEffect, useState } from 'react'
import Game from '../components/Game/Game'
import styles from './GamesPage.module.css'

function GamesPage() {
  const [data, setData] = useState([])

  //grabbing the games
  useEffect(() => {
    fetch('http://localhost:5000/games_json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
  }, [])

  var n = data.length;

  return (
    <>
    <div className={styles.pageText}>
      <h2 className={styles.titleGames}>Games Page</h2>
      <h5>Click on any of the games to get more information about it.</h5>
    </div>
    
    <div className={styles.games_container}>
      
      {/* mapping each one of the games to create a Game component for each one*/}
      {data.map(game => <Game className={styles.game} game={game}> </Game>)}



    </div>
    </>
  )
}

export default GamesPage