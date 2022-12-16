import React from 'react'
import OneChanel from '../OneChanel/OneChanel';
import styles from './ChanelList.module.css'

export default function ChanelList({chanelData, setSelectedChanels, selectedChanels, setSuitPack}) {
    let set = new Set();

    chanelData.forEach(el => {
        el.channels.forEach(
            chanel => {
                const jsonCh = JSON.stringify({id: chanel.id, name: chanel.name, icon: chanel.icon})
                set.add(jsonCh)
            }
        )
    });

    const array = [...set]

    return (
        <div className={styles.chanelsContainer}>
            {array.map(el => <OneChanel 
                    id={JSON.parse(el).id} 
                    name={JSON.parse(el).name} 
                    icon={JSON.parse(el).icon}
                    selectedChanels={selectedChanels}
                    setSelectedChanels={setSelectedChanels}
                    chanelData={chanelData}
                    setSuitPack={setSuitPack}
                    />)}

        </div>
    )
}
