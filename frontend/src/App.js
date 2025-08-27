import React from 'react';
import axios from 'axios';

const API_URL = 'BACKEND_URL'; // Railway backend URL buraya gelecek

function App() {
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    axios.get(`${API_URL}/`).then(res => {
      setMessage(res.data);
    }).catch(err => {
      setMessage('Backend bağlanamadı');
    });
  }, []);

  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <h1>AI Platform</h1>
      <p>{message.message || message}</p>
    </div>
  );
}

export default App;
