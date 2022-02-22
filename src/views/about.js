import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './about.module.css'

const About = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>About - Notus Pro</title>
        <meta property="og:title" content="About - Notus Pro" />
      </Helmet>
      <div className={styles['Hero']}>
        <div className={styles['Bg']}></div>
        <Header></Header>
        <div className={styles['container1']}>
          <div className={styles['container2']}>
            <h1 className={styles['text']}>
              <span>About Us</span>
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
              About Us
            </h3>
            <span
              className={` ${styles['text04']} ${projectStyles['textXL']} `}
            >
              <span className={styles['text05']}>
                Spring Guys is a amazingÂ 
              </span>
              <span>community founded in 2021.</span>
              <br></br>
              <span>We work hard each and every</span>
              <span>day to the best of our abilities to</span>
              <br></br>
              <span>
                server and help you.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                We have all kind of burgers and drinks! We host events from
                there to there and you can participate and we can do a partner
                ship with your business! And we have member ship cards that
                anyone can apply for! Also if you would like a job you can apply
                at any time and it&apos;s very easy!
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span>-- IMPORTANT LINKS --</span>
              <br></br>
              <span></span>
              <br></br>
              <span>
                Staff Application:
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a
                href="https://bit.ly/3LPygds"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className={styles['text21']}>
                  https://bit.ly/3LPygds
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </a>
              <a
                href="https://bit.ly/3LPygds"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className={styles['text22']}>https://bit.ly/3LPygds</span>
              </a>
              <br></br>
              <span></span>
              <br></br>
              <Link to="/news">
                <span className={styles['text26']}>NEWS PAGE</span>
              </Link>
              <span></span>
            </span>
          </div>
          <div className={styles['WorkWithUs']}>
            <div className={styles['container5']}>
              <div className={styles['container6']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                  <path d="M384 554q64 0 140 18t139 60 63 94v128h-684v-128q0-52 63-94t139-60 140-18zM640 512q-26 0-56-10 56-66 56-160 0-38-16-86t-40-76q30-10 56-10 70 0 120 51t50 121-50 120-120 50zM214 342q0-70 50-121t120-51 120 51 50 121-50 120-120 50-120-50-50-120zM712 560q106 16 188 59t82 107v128h-172v-128q0-98-98-166z"></path>
                </svg>
              </div>
              <h3
                className={` ${styles['text28']} ${projectStyles['healine']} `}
              >
                Join our Discord
              </h3>
              <img
                alt="image"
                src="/playground_assets/eeeeeeeeeeeeeeeeeeeeeeeeeer-400w.png"
                className={styles['image2']}
              />
            </div>
            <div className={styles['container7']}>
              <iframe
                id="914971028260798464"
                src="https://discord.com/widget?id=914971028260798464&amp;theme=dark"
                className={styles['iframe']}
              ></iframe>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/white-vector.svg"
          className={styles['image3']}
        />
      </div>
      <div className={styles['Section3']}>
        <div className={styles['container8']}>
          <h3 className={` ${styles['text29']} ${projectStyles['healine']} `}>
            We are waiting for you
          </h3>
          <span className={` ${styles['text30']} ${projectStyles['textXL']} `}>
            Come on and join us
          </span>
          <div className={styles['Contact']}></div>
        </div>
        <img
          alt="image"
          src="/playground_assets/gray-vector.svg"
          className={styles['image4']}
        />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default About
