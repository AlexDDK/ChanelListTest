import './App.css';
import chanelData from './24h.json'
import ChanelList from './components/ChanelList/ChanelList';

function App() {
  console.log(chanelData);
  return (
    <div className="App">
<h1>форма выбора каналов</h1>
<p>Отметьте желательные каналы</p>
<ChanelList chanelData={chanelData} />
    </div>
  );
}

export default App;
