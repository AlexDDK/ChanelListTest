import React from 'react'

export default function ChanelList({chanelData}) {
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
                <li>{JSON.parse(el).name}</li>
                ))}
            </ol>
        </div>
    )
}
