import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './news.module.css'

const News = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>News - Notus Pro</title>
        <meta property="og:title" content="News - Notus Pro" />
      </Helmet>
      <div className={styles['Hero']}>
        <div className={styles['Bg']}></div>
        <Header></Header>
        <div className={styles['container1']}>
          <div className={styles['container2']}>
            <h1 className={styles['text']}>News</h1>
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
            <h6 className={styles['text01']}>Spring GUYS</h6>
            <h3 className={` ${styles['text02']} ${projectStyles['healine']} `}>
              News | Updated : 2/21/22 11:06 PM
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h3>
            <span
              className={` ${styles['text03']} ${projectStyles['textXL']} `}
            ></span>
          </div>
          <div className={styles['WorkWithUs']}>
            <h1>
              <span>Revamp Info</span>
              <br></br>
              <span></span>
              <br></br>
              <span>- Role Changes</span>
              <br></br>
              <span>- Channel Update</span>
              <br></br>
              <span>- New Logo</span>
            </h1>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/white-vector.svg"
          className={styles['image2']}
        />
      </div>
      <div className={styles['Section3']}>
        <div className={styles['container5']}>
          <h3 className={` ${styles['text14']} ${projectStyles['healine']} `}>
            We are waiting for you
          </h3>
          <span className={` ${styles['text15']} ${projectStyles['textXL']} `}>
            Come on and join us
          </span>
          <div className={styles['Contact']}></div>
        </div>
        <img
          alt="image"
          src="/playground_assets/gray-vector.svg"
          className={styles['image3']}
        />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default News
