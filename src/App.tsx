import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { GaleryPage } from './pages/galery/galeryPage/GaleryPage'
import { Layout } from './Layout/Layout'
import { useEffect, useState } from 'react'
import { Context } from './Context'
import { getSelectLang } from './utils/GetSelectLang'
// import { getSelectLang } from './utils/GetSelectLang'

export type SelectLang = 'russian' | 'england'

export type ValueContext = {
  changeLang: string
  setChangeLang: (changeLang: SelectLang) => void
}

function App() {

  const [changeLang, setChangeLang] = useState<string>(getSelectLang('language', 'russian'))


  const value: ValueContext = {
    changeLang,
    setChangeLang
  }

  return (
    <div className='main'>
      <Context.Provider value={value}>
        <Routes>
            <Route path='/' element={<Layout />}/>
            <Route path='/galery/:id' element={ <GaleryPage />}/>
          </Routes> 
      </Context.Provider>
    </div>
  )
}

export default App
