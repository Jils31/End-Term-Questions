import './App.css'
import { ThemeProvider } from './components/ThemeContext'
import Toggle from './components/Toggle'

function App() {

  return (
    <>
      <ThemeProvider>
      <Toggle />
      </ThemeProvider>
    </>
  )
}

export default App
