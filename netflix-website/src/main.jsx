import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Inline style to reset body margin/padding for the entire website
const style = document.createElement('style');
style.innerHTML = `
  body {
    margin: 0;
    padding: 0;
    background-color: #111;
    overflow-x: hidden;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;
document.head.appendChild(style);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
