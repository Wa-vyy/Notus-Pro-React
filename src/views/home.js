import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import MemberDetails from '../components/member-details'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Notus Pro</title>
        <meta property="og:title" content="Notus Pro" />
      </Helmet>
      <div className={styles['Hero']}>
        <div className={styles['Bg']}></div>
        <Header></Header>
        <div className={styles['container01']}>
          <div className={styles['container02']}>
            <h1 className={styles['text']}>Spring Guys</h1>
            <span className={styles['text01']}>Welcome to Spring Guys</span>
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
        <div className={styles['container03']}>
          <div className={styles['Container04']}>
            <h6 className={styles['text02']}>Spring GUYS</h6>
            <h3 className={` ${styles['text03']} ${projectStyles['healine']} `}>
              About Us
            </h3>
            <span
              className={` ${styles['text04']} ${projectStyles['textXL']} `}
            >
              <span className={styles['text05']}>Spring Guys is a amazing</span>
              <br></br>
              <span>community founded in 2021.</span>
              <br></br>
              <span>We work hard each and every</span>
              <br></br>
              <span>day to the best of our abilities to</span>
              <br></br>
              <span>server and help you. Visit our</span>
              <br></br>
              <span>
                <span className={styles['text16']}>About Page</span>
              </span>
              <span> for more</span>
              <br></br>
              <span>information.</span>
              <br></br>
              <span></span>
              <br></br>
              <Link to="/news">
                <span className={styles['text23']}>NEWS PAGE</span>
              </Link>
              <span></span>
            </span>
          </div>
          <div className={styles['WorkWithUs']}>
            <div className={styles['container05']}>
              <div className={styles['container06']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                  <path d="M384 554q64 0 140 18t139 60 63 94v128h-684v-128q0-52 63-94t139-60 140-18zM640 512q-26 0-56-10 56-66 56-160 0-38-16-86t-40-76q30-10 56-10 70 0 120 51t50 121-50 120-120 50zM214 342q0-70 50-121t120-51 120 51 50 121-50 120-120 50-120-50-50-120zM712 560q106 16 188 59t82 107v128h-172v-128q0-98-98-166z"></path>
                </svg>
              </div>
              <h3
                className={` ${styles['text25']} ${projectStyles['healine']} `}
              >
                Join our Discord
              </h3>
              <span className={styles['text26']}></span>
              <img
                alt="image"
                src="/playground_assets/eeeeeeeeeeeeeeeeeeeeeeeeeer-400w.png"
                className={styles['image2']}
              />
            </div>
            <div className={styles['container07']}>
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
      <div className={styles['Section2']}>
        <h6 className={styles['text27']}>
          <span>THE TEAM</span>
        </h6>
        <h3 className={` ${styles['text29']} ${projectStyles['healine']} `}>
          MEET THE TEAM
        </h3>
        <div className={styles['Team']}>
          <div className={styles['container08']}>
            <div className={styles['container09']}>
              <MemberDetails image_src="/playground_assets/team1-200h.jpg"></MemberDetails>
            </div>
            <div className={styles['container10']}>
              <MemberDetails
                heading1="Jason"
                heading11="Founder"
                image_src="/playground_assets/team2-200h.jpg"
              ></MemberDetails>
            </div>
            <div className={styles['container11']}>
              <MemberDetails
                heading1="Jordan"
                heading11="Share Holder"
                image_src="/playground_assets/team6-200h.jpg"
              ></MemberDetails>
              <div className={styles['container12']}></div>
            </div>
            <div className={styles['container13']}>
              <MemberDetails
                heading1="Cooper"
                heading11="Chief Administrator"
                image_src="/playground_assets/team4-200h.png"
              ></MemberDetails>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['Section3']}>
        <div className={styles['container14']}>
          <h3 className={` ${styles['text30']} ${projectStyles['healine']} `}>
            We are waiting for you
          </h3>
          <span className={` ${styles['text31']} ${projectStyles['textXL']} `}>
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

export default Home
