import { useState, useEffect } from 'react';
import Form from '../components/Form/Form';
import styles from './LogIn.module.css';
import backgroundImage from '../assets/blob-scene-haikei.svg';

function LogInPage() {
  const [count, setCount] = useState(0);
  let v = '';

//   // Use useEffect to set the background styles when the component mounts
//   useEffect(() => {
//     document.body.style.backgroundRepeat = 'no-repeat';
//     document.body.style.backgroundSize = 'cover';
//     document.body.style.backgroundPosition = 'center';
//     document.body.style.backgroundImage = "url('./assets/blob-scene-haikei.svg')";

//     // Cleanup function to remove styles when the component unmounts
//     return () => {
//       document.body.style.background = 'none';
//     };
//   }, []); // Empty dependency array to execute only once when the component mounts

  return ( 
    <div className={styles.login_page_container}> {/* style={{ backgroundImage: `url(${backgroundImage})` }} */}
      <Form type="email" placeholder="Email" formContent={v} />
      </div>
  );
}

export default LogInPage;