import './App.css'
import Navigation from './components/Navigation'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const client = new QueryClient();

  return (
    <div className="App">
      <header>
        <h1>Buffalo College</h1>
      </header>
      <QueryClientProvider client={client}>
        <Navigation />
      </QueryClientProvider>
      <footer>
        <p>Test</p>
      </footer>
    </div>
  )
}

export default App
