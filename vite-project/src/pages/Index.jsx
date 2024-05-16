import React, { useEffect, useState } from 'react';
import styles from './Index.module.css';

function Index() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/games_json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className={styles.index_page_container}>
      <div>
        <h1 className={styles.indexText}>Game Information</h1>
        <p className={styles.mainText}>
          Explore the fascinating world of your favorite games.
        </p>
        <a href="/login"><button className={styles.getStartedButton}>Get Started</button></a>
      </div>
    </div>
  );
}

export default Index;