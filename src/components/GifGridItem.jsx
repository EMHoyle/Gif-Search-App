import React from 'react'
import PropTypes from 'prop-types'

import styles from '../components/css/GridItem.module.css'

const GifGridItem = ({ title, url }) => {
  return (
    <div className={styles.card}>
      <div className='animate__animated animate__fadeIn animate__slow'>
        <img src={url} alt={title} />
        <p>{title}</p>
      </div>
    </div>
  )
}

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default GifGridItem
