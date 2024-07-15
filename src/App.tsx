import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { lazy, Suspense, useState } from 'react'
import { Context } from './Context'
import { getSelectLang } from './utils/GetSelectLang'

export type SelectLang = 'russian' | 'england'

export type ValueContext = {
  changeLang: string
  setChangeLang: (changeLang: SelectLang) => void
}

function App() {

  const [ changeLang, setChangeLang ] = useState<string>(getSelectLang('language', 'russian'))

  const Layout = lazy(() => import ('./Layout/Layout'))

  const GaleryPage = lazy(() => import ('./pages/galery/galeryPage/GaleryPage'))

  const value: ValueContext = {
    changeLang,
    setChangeLang
  }

  return (
    <div className='main'>
      <Context.Provider value={value}>
        <Routes>
            <Route path='/portfolio-photographer' element={<Suspense fallback={<h1 color='red'>LOADING...</h1>}><Layout /></Suspense>} />
            <Route path='/portfolio-photographer/galery/:id' element={<Suspense fallback={<h1 color='red'>LOADING...</h1>}><GaleryPage /></Suspense>}/>
          </Routes> 
      </Context.Provider>
    </div>
  )
}

export default App
