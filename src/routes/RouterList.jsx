import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { HomePage } from '../pages/HomePage'
import { MovieList } from '../pages/MovieList'
import { PopulerMovie } from '../pages/PopulerMovie'
import { DetailMovie } from '../pages/DetailMovie'
import { HasilSearch } from '../pages/HasilSearch'
import { Register } from '../pages/auth/Register'
import { LoginPage } from '../pages/auth/LoginPage'
import { Dashboard } from '../pages/auth/Dashboard'
import { Render } from '../pages/Render'
import { Background } from '../assets/components/Background'
import { HomePage } from '../pages/HomePage'
// import { Carasuel2 } from '../assets/components/Carasuel2'

export const RouterList = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        {/* <Route path='/' element={<Carasuel2/>}/> */}
        {/* <Route path='/MovieList' element={<MovieList/>}/> */}
        <Route path='/register' element={<Register/>}/>
        {/* <Route path='/' element={<Tes/>}/> */}
        <Route path='/Login' element={<LoginPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/PopulerMovie' element={<PopulerMovie/>}/>
        {/* <Route path='/DetailMovie/:id' element={<DetailMovie/>}/> */}
        <Route path='/HasilSearch' element={<HasilSearch/>}/>
        <Route path='/Render/:id' element={<Render/>}/>
        <Route path='/Background' element={<Background/>}/>
    </Routes>
    </BrowserRouter>
  )
}
