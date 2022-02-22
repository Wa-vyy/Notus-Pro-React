import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './help.module.css'

const Help = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Help - Notus Pro</title>
        <meta property="og:title" content="Help - Notus Pro" />
      </Helmet>
      <div className={styles['Hero']}>
        <div className={styles['Bg']}></div>
        <Header></Header>
        <div className={styles['container1']}>
          <div className={styles['container2']}>
            <h1 className={styles['text']}>
              <span>Help</span>
            </h1>
          </div>
          <img
            alt="image"
            src="/playground_assets/gray-vector.svg"
            className={styles['image']}
          />
          <img
            alt="image"
            src="/playground_assets/white-vector.svg"
            className={styles['image1']}
          />
        </div>
      </div>
      <div className={styles['Section1']}>
        <div className={styles['container3']}>
          <div className={styles['Container4']}>
            <h6 className={styles['text02']}>Spring GUYS</h6>
            <h3 className={` ${styles['text03']} ${projectStyles['healine']} `}>
              Support
            </h3>
            <span
              className={` ${styles['text04']} ${projectStyles['textXL']} `}
            >
              <span>Hello! All inquires or any questions you</span>
              <br></br>
              <span>may have, we ask that you join our</span>
              <br></br>
              <span>discord server. There you can make a</span>
              <br></br>
              <span>ticket for the fastest response time.</span>
              <br></br>
              <span>
                You may also
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a
                href="https://forms.gle/qTqaaRzLo25oN2W66"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className={styles['text14']}>fill out this form</span>
              </a>
              <span> if you like,</span>
              <br></br>
              <span>filling out the form may result in a delayed</span>
              <br></br>
              <span>response time. Thank you for choosing</span>
              <br></br>
              <span>Spring Guys.</span>
              <br></br>
              <span></span>
              <br></br>
              <Link to="/news">
                <span className={styles['text25']}>NEWS PAGE</span>
              </Link>
              <span></span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles['Section3']}>
        <div className={styles['container5']}>
          <h3 className={` ${styles['text27']} ${projectStyles['healine']} `}>
            We are waiting for you
          </h3>
          <span className={` ${styles['text28']} ${projectStyles['textXL']} `}>
            Come on and join us
          </span>
          <div className={styles['Contact']}></div>
        </div>
        <img
          alt="image"
          src="/playground_assets/gray-vector.svg"
          className={styles['image2']}
        />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Help
