import './App.css'
import { SideBarProvider } from './components/SideBarContext'
import SideBar from './components/SideBar'

function App() {

  return (
    <>
      <SideBarProvider>
        <SideBar />
      </SideBarProvider>
    </>
  )
}

export default App
