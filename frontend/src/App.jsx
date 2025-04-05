/** @format */
import { useState } from 'react';
import NavBar from './components/NavBar';
import GifContainer from './components/GifContainer';
import GifSearch from './components/GifSearch';

function App() {
  const [searchTerm, setInput] = useState('');

  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <div className="ui container">
        <GifSearch searchTerm={searchTerm} setInput={setInput} />
        <br></br>
        <GifContainer searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default App;
