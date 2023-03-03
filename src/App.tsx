import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { InfinitePeople } from './components/Persons/InfinitePeople'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Infinite SWAPI</h1>
        <InfinitePeople />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
