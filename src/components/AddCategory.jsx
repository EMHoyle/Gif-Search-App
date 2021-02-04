import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styles from '../components/css/AddCategory.module.css'

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (inputValue.trim().length > 2) {
      setCategories((categories) => [inputValue, ...categories])
      setInputValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type='text'
        value={inputValue}
        onChange={handleChange}
        placeholder='find your ideal gif...'
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}

export default AddCategory
