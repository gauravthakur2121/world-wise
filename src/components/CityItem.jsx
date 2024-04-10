import React from 'react'
import styles from './CityItem.module.css'

const CityItem = ({ city }) => {
  return (
    <div>
    <li className={styles.CityItem}>
        <span className={styles.emoji}></span>

    </li>
    </div>
  )
}

export default CityItem
