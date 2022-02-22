import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './member-details.module.css'

const MemberDetails = (props) => {
  return (
    <div className={styles['container']}>
      <h1 className={` ${styles['text']} ${projectStyles['textXL']} `}>
        {props.heading1}
      </h1>
      <h1 className={` ${styles['text1']} ${projectStyles['textSM']} `}>
        {props.heading11}
      </h1>
    </div>
  )
}

MemberDetails.defaultProps = {
  heading11: 'LEADING WEB DEVELOPER',
  heading1: 'Chase',
}

MemberDetails.propTypes = {
  heading11: PropTypes.string,
  heading1: PropTypes.string,
}

export default MemberDetails
