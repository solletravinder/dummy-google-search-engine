import { useState } from 'react';
import './App.css'; // Include your styles here

function App() {
  const [freeText, setFreeText] = useState('');
  const url = `https://www.google.com/search?q=${encodeURIComponent(freeText)}`
  const searchText = (event, feelingLuckButton=false) => {
    // console.log(url);
    if (!feelingLuckButton) {
      window.location.href = freeText ? url : '/#/';
    } else {
      console.log(freeText);
      window.location.href = freeText ? url + '&btnI=I%27m+Feeling+Lucky': 'https://doodles.google/';
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Google text */}
      <h1 className="text-5xl font-bold mb-12">Google</h1>

      {/* Search input box */}
      <div className="relative w-full max-w-2xl">
        <input
          name="search"
          id="search"
          type="text"
          className="w-full px-10 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search Google or type a URL"
          value={freeText}
          onChange={(e) => setFreeText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && searchText(e)}
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <i className="fas fa-search text-gray-500"></i>
        </span>
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <i className="fas fa-microphone text-gray-500"></i>
        </span>
      </div>

      {/* Search and Lucky buttons */}
      <div className="mt-8">
        <button className="px-6 py-2 m-2 text-sm font-semibold text-black bg-slate-200 rounded-full shadow-md hover:bg-slate-200 outline hover:outline-offset-2" onClick={(e) => searchText(e)}>
          Google Search
        </button>
        <button className="px-6 py-2 m-2 text-sm font-semibold text-black bg-slate-200 rounded-full shadow-md hover:bg-slate-200 outline hover:outline-offset-2" onClick={(e) => searchText(e, true)} >
          {/* {window.location.href = 'https://doodles.google/'}}> */}
          I'm Feeling Lucky
        </button>
      </div>
    </div>
  );
}

export default App;
