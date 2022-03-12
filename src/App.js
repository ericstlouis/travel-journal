import { useState } from 'react';
import Header from './components/Header';
import Place from './components/Place'
import Data from './data.json'

function App() {
  const [location, setLocation] = useState(Data);
  return (
    <div className="App">
      <Header />
      <Place item={location} />
    </div>
  );
}

export default App;
