import React from 'react'
import styles from './Alert.module.css'

function Alert(props) {
  const [close, setClose] = useState();

  // types = [success, warning, error]
  // success_pic = 0
  // success_color = FFFFF

  return (
    <div className={styles.container}>
      <p>{props.message}</p>
      <button>✕</button>
    </div>
  )
}

export default Alert
