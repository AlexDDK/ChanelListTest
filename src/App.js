import './App.css';
import chanelData from './24h.json'
import ChanelList from './components/ChanelList/ChanelList';
import { useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [selectedChanels, setSelectedChanels] = useState([])
  const [suitPack, setSuitPack] = useState([])

  return (
    <div className="App">
      <Header />
      <ChanelList 
      chanelData={chanelData} 
      setSelectedChanels={setSelectedChanels} 
      selectedChanels={selectedChanels} 
      setSuitPack={setSuitPack}
      />
      <Sidebar 
      selectedChanels={selectedChanels} 
      suitPack={suitPack}
      setSuitPack={setSuitPack}
      chanelData={chanelData}
      />
    </div>
  )
}

export default App;
