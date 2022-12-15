import React, { useState } from 'react'

export default function SelectButton({chanelData, selectedChanels}) {
    const[suitPack, setSuitPack] = useState([])

    const clickHandler = () => {
        const arrOfPacks = [];
        chanelData.forEach(el => {
            const found = selectedChanels.every(ch=> el.channels.map(elem => elem.id).indexOf(ch) >= 0)
            found ? arrOfPacks.push(el) : console.log(`Пакет ${el.name} не подходит`);
        });
        setSuitPack(arrOfPacks)
    }


    return(
        <div>
            <button onClick={clickHandler}>Искать пакет с выбранными каналами!</button>
            <ul>
                {suitPack.sort((a,b) => Number(a.price) - Number(b.price)).map(el => <li key={el.name}>{el.name}</li>)}
            </ul>
        </div>
    )
}