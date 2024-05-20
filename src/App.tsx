import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { GaleryPage } from './pages/galery/galeryPage/GaleryPage'
import { Layout } from './pages/Layout/Layout'

function App() {

  return (
    <div className='main'>
      <Routes>
          <Route path='/' element={<Layout />}/>
          <Route path='/galery/:id' element={ <GaleryPage />}/>
        </Routes>        
    </div>
  )
}

export default App
