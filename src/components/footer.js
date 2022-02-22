import React from 'react'

import projectStyles from '../style.module.css'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['container1']}>
        <div className={styles['container2']}>
          <h1 className={` ${styles['text']} ${projectStyles['textXL']} `}>
            <span>Let&apos;s keep in touch</span>
          </h1>
          <span className={styles['text02']}>
            Message us on Discord for inquires
          </span>
          <div className={styles['container3']}></div>
        </div>
        <div className={styles['container4']}>
          <div className={styles['container5']}>
            <span
              className={` ${styles['text03']} ${projectStyles['textXS']} `}
            >
              USEFUL LINK
            </span>
            <span
              className={` ${styles['text04']} ${projectStyles['textSM']} `}
            >
              About Us
            </span>
            <span
              className={` ${styles['text05']} ${projectStyles['textSM']} `}
            >
              Blog
            </span>
            <span
              className={` ${styles['text06']} ${projectStyles['textSM']} `}
            >
              Github
            </span>
            <span
              className={` ${styles['text07']} ${projectStyles['textSM']} `}
            >
              Free Products
            </span>
          </div>
          <div className={styles['container6']}>
            <span
              className={` ${styles['text08']} ${projectStyles['textXS']} `}
            >
              OTHER RESOURCES
            </span>
            <span
              className={` ${styles['text09']} ${projectStyles['textSM']} `}
            >
              License
            </span>
            <span
              className={` ${styles['text10']} ${projectStyles['textSM']} `}
            >
              Terms &amp; Conditions
            </span>
            <span
              className={` ${styles['text11']} ${projectStyles['textSM']} `}
            >
              Privacy Policy
            </span>
            <span
              className={` ${styles['text12']} ${projectStyles['textSM']} `}
            >
              Contact Us
            </span>
          </div>
        </div>
      </div>
      <div className={styles['container7']}></div>
      <span className={` ${styles['text13']} ${projectStyles['textSM']} `}>
        Copyright Â© 2022 Spring Guys
      </span>
    </div>
  )
}

export default Footer
