import './App.css'
import galleryImages from './Data'
import WSPGallery from './components/WSPGallery'

function App() {
  return (
    <div className="App">
      <br />
      <div>
        <strong>
          Lorem-ipsum is a JavaScript module for generating passages of lorem
          ipsum text.
        </strong>
      </div>
      <br></br>
      <WSPGallery galleryImages={galleryImages} />
      <h3>
        lorem-ipsum is a JavaScript module for generating passages of lorem
        ipsum text. Lorem ipsum text is commonly used as placeholder text
      </h3>
    </div>
  )
}

export default App
