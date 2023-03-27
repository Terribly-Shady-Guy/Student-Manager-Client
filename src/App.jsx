import './css/App.css'
import React, { useEffect } from "react"
import { Provider } from 'react-redux';
import { store } from './store/store'
import Nav from './components/Nav';

function App() {
  useEffect(() => {
    const intervalId = setInterval(async() => await refreshTokens(), 5 * 1000 * 60);
    return () => clearInterval(intervalId);
  }, [])

  async function refreshTokens() {
    const token = window.localStorage.getItem("accessToken");

    if (token === null) {
      return;
    }

    const response = await fetch("http://localhost:5119/api/authentication/refreshtokens", {
      method: "POST",
      credentials: "include",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(token)
    });

    if (response.ok) {
      const newToken = await response.text();
      window.localStorage.setItem("accessToken", newToken);
    }
  }


  return (
    <div className="App">
      <Provider store={store}>
        <Nav />
      </Provider>
    </div>
  )
}

export default App
