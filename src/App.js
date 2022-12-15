import './App.css';
import chanelData from './24h.json'
import ChanelList from './components/ChanelList/ChanelList';
import { useState } from 'react';

function App() {
  const [selectedChanels, setSelectedChanels] = useState([])
  console.log(chanelData);
  console.log('SELECTED', selectedChanels);


  return (
    <div className="App">
<h1>форма выбора каналов</h1>
<p>Отметьте желательные каналы</p>
<ChanelList chanelData={chanelData} setSelectedChanels={setSelectedChanels} selectedChanels={selectedChanels}/>
    </div>
  );
}

export default App;
