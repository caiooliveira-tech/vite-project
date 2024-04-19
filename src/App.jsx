import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0) 
  const [timer, setTimer] = useState(0)
  const [photos, setPhotos] = useState([]);

  useEffect( () => {
    setTimeout(() => {
      setTimer(count => count+1)
    }, 1000);
  },[])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json => setPhotos(json))}

  )

  console.log(photos)

  function aumentar(){
    setCount(count+1)

  }
  function diminuir(){
    setCount(count-1)

  }

  function zerar(){
    setCount(0)
  }
  

  return (
    <>
     <p> Contador : {count} </p>
     <button onClick={aumentar}>Aumentar</button>
     <button onClick={diminuir}>Diminuir</button>
     <button onClick={zerar}>Zerar</button>

     <h1> Contagem regressiva </h1>
     <p>{timer}</p>
    <div>
      <h2> Fotos </h2>
     {photos.map(photo => (
       <img key={photo.id} src={photo.url} alt={photo.title} width={100} />
     ))}
     </div>
    </>
  )
}

export default App
