import React, { useEffect, useState } from 'react'

export default function OneChanel({id, name, icon, selectedChanels, setSelectedChanels}) {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
      checked === true ? setSelectedChanels([...selectedChanels, id]) : setSelectedChanels(selectedChanels.filter(el => el !== id))
    }, [checked])
    


    function changeCheckbox() {
        setChecked(!checked);
    }

  return (
    <div>
      <label><input type='checkbox' checked={checked} onChange={changeCheckbox}/>{name}</label>
    </div>
  )
}
