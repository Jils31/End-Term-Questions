import './App.css'
import ComplexSort from './components/ComplexSort'

function App() {
  const data = ["Zebra", "Apple", "Mango", "Banana", "Cherry"]
  return (
    <>
      <ComplexSort data = {data} />
    </>
  )
}

export default App
