import React from 'react'
import styles from './Form.module.css'
import Button from '../Button/Button'
import googleIcon from '../../assets/google_icon.png'
import facebookIcon from '../../assets/facebook_icon.png'
import twitterIcon from '../../assets/twitter_icon.png'
//import PropTypes from 'prop-types'

//text - above
//type - type of input
//placeholder - placeholder txt
function Form(props) {
  return (
    <div className="whole">
    <div className={styles.form}>
      <form action="">
        <h4>User Email</h4>
        <input type={props.type} name="email" id="userEmail" placeholder={props.placeholder} required/>

        <h4>Password</h4>
        <input type="password" name="password" id="userPassword" placeholder="Password" required/>

        <br /><br />

        <div className={styles.btn_container}>
          <Button />
        </div>
        </form>
        
        <hr />
        <div className="loginWith">
          <p>Or Login With</p>
          <div className={styles.loginSocials}>
            <button className={styles.socialButton}><a href="https://www.facebook.com"><img className={styles.socialImg} src={facebookIcon} alt="" /></a></button>
            <button className={styles.socialButton}><a href="https://www.google.com"><img className={styles.socialImg} src={googleIcon} alt="" /></a></button>
            <button className={styles.socialButton}><a href="https://www.twitter.com"><img className={styles.socialImg} src={twitterIcon} alt="" /></a></button>
          </div>
        </div>

        <p className={styles.signUp}>Don't have an account? <a href="/signup" className={styles.signUpLink}>Sign Up!</a></p>

        {props.formContent}

    </div>
    </div>
  )
}

// Form.propTypes = {
//   type: PropTypes.string,
//   placeholder: PropTypes.string
// }

export default Form
