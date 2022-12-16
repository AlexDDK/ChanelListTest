import React, { useEffect, useState } from 'react'
import styles from './OneChanel.module.css'
import cn from 'classnames'

export default function OneChanel({id, name, icon, selectedChanels, setSelectedChanels}) {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
      checked ? setSelectedChanels([...selectedChanels, id]) : setSelectedChanels(selectedChanels.filter(el => el !== id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checked])
    
    function changeCheckbox() {
        setChecked(!checked);
    }

  return (
    <label>
      <div className={cn(styles.chanelContainer,{
        [styles.checked]: checked
      })}>
        <div className={styles.imgContainer}><img src={icon} alt={name}></img></div>
        <div className={styles.inputContainer}>
          <input type='checkbox' checked={checked} onChange={changeCheckbox}/>{name}
        </div>
      </div>
    </label>
  )
}
