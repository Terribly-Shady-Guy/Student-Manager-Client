import './css/App.css'
import React, { useEffect } from "react"
import { Provider } from 'react-redux';
import { store } from './store/store'
import Nav from './components/Nav';

import { refreshTokens, setRefreshInterval } from './Functions/RefreshTokens';

function App() {
  useEffect(() => {
    refreshTokens()
    const token = window.localStorage.getItem("accessToken");

    if (token === null) {
      return;
    }

    let refreshIntervalId = setRefreshInterval();

    return () => clearInterval(refreshIntervalId)
  }, [])

  return (
    <div className="App">
      <Provider store={store}>
        <Nav />
      </Provider>
    </div>
  )
}

export default App
