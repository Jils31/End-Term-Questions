import './App.css'
import LazyImageComponent from './components/LazyImageComponent'

function App() {
  
  const images = ["Img1" , "Img2"] 
  return (
    <>
      {images.map((item,index)=>(
        <LazyImageComponent key = {index} imagePath={item} />
      ))}
    </>
  )
}

export default App
