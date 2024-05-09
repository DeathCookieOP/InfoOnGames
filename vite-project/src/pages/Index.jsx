import React, { useEffect, useState } from 'react'
import styles from './Index.module.css'

function Index() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/games_json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
  }, [])



  return (
    <div className={styles.index_page_container}>
      {/* <p>{data[0].game_id}</p> */}
      {/* {data.length > 0 && data[0].game_id && <h1>Game Information</h1>} */}
      <h1 className={styles.mainText}>Game Information</h1>
      <h2 className={styles.indexText}>Look at some information on your favorite games</h2>
    </div>
  )
}

export default Index
