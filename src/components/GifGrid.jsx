import React from 'react'
import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

import styles from '../components/css/GifGrid.module.css'

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category)

  return (
    <>
      <h3 className={styles.title}>{category}</h3>
      <div className={styles.container}>
        {loading && (
          <span className='animate__animated animate__flash animate__slower'>
            Loading...
          </span>
        )}

        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />
        })}
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}

export default GifGrid
