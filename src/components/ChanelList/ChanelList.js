import React from 'react'
import OneChanel from '../OneChanel/OneChanel';

export default function ChanelList({chanelData, setSelectedChanels, selectedChanels}) {
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
        <div>
            <ol>
                {array.map(el => (
                // <li>{JSON.parse(el).name}</li>
                <li key={JSON.parse(el).id}><OneChanel 
                    id={JSON.parse(el).id} 
                    name={JSON.parse(el).name} 
                    icon={JSON.parse(el).icon}
                    selectedChanels={selectedChanels}
                    setSelectedChanels={setSelectedChanels}
                    />
                </li>
                ))}
            </ol>
        </div>
    )
}
