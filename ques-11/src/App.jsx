import './App.css'
import { AuthProvider } from './components/AuthContext'
import User from './components/User'

function App() {

  return (
    <>
      <AuthProvider>
        <User />
      </AuthProvider>
    </>
  )
}

export default App
