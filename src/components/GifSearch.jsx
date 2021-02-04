import React, { useState } from 'react'

import AddCategory from './AddCategory'
import GifGrid from './GifGrid'

import styles from '../components/css/GifSearch.module.css'

const GifSearch = () => {
  const [categories, setCategories] = useState([])

  return (
    <div>
      <h1 className={styles.title}>GifSearch App</h1>
      <AddCategory setCategories={setCategories} />
      <hr className={styles.divider} />

      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />
        })}
      </ol>
    </div>
  )
}

export default GifSearch
