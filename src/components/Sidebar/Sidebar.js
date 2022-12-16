import React, {useEffect} from 'react'
import cn from 'classnames'
import styles from './Sidebar.module.css'
import OnePack from '../OnePack/OnePack';

export default function Sidebar({selectedChanels, suitPack, setSuitPack, chanelData}) {
    console.log('SIDEBAR selectedChanels>>>', selectedChanels);

  useEffect(() => {
    const arrOfPacks = [];
     (selectedChanels.length > 0) &&
      chanelData.forEach(el => {
          const found = selectedChanels.every(ch=> el.channels.map(elem => elem.id).indexOf(ch) >= 0)
          found && arrOfPacks.push(el);
      });
    setSuitPack(arrOfPacks)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedChanels])


  return (
    <aside className={cn(styles.sidebar, {
        [styles.visible] : selectedChanels.length > 0
    })}>
      <div className={styles.packsContainer}>
      { (suitPack.length > 0) && <h2>Вам подойдут пакеты:</h2>}

      { (suitPack.length > 0) && 
        suitPack.sort((a,b) => Number(a.price) - Number(b.price)).map(el => (
          <OnePack pack={el}/>
        ))
      }

      </div>
    </aside>
  )
}
