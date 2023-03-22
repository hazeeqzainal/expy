import { useEffect, useState } from 'react';

function App() {
  const [initialState, setState] = useState([]);
  const url = '/api/hello ';

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(console.log);
  }, []);
  return (
    <div>
      <h1>It works</h1>
    </div>
  );
}

export default App;
