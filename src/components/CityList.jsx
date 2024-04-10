import React from 'react'
import styles from './CityList.module.css'
import Spinner from './Spinner'
import CityItem from './CityItem'

const CityList = ({cities , isloading}) => {
     if(isloading) return <Spinner />
  return (
    <div>
        <ul className={styles.CityList}>
            {cities.map(city => (
                <CityItem city={city} key={city.id} />

            ))}
        

        </ul>
      
    </div>
  )
}

export default CityList
