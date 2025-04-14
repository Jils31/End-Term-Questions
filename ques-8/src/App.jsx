import { Suspense, lazy } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
const Dashboard = lazy(()=> import("./components/Dashboard"))
const Home = lazy(()=> import("./components/Home"))

function App() {

  return (
    <>
     <BrowserRouter>
     <Suspense fallback ={<div>Loading...</div>}>
     <Routes>
     <Route path ='/' element = {<Home />}></Route>
     <Route path = '/dashboard' element = {<Dashboard />}></Route>
     </Routes>
     </Suspense>
     </BrowserRouter>
    </>
  )
}

export default App
