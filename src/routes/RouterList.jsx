import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { HomePage } from '../pages/HomePage'
import { MovieList } from '../pages/MovieList'
import { PopulerMovie } from '../pages/PopulerMovie'
import { DetailMovie } from '../pages/DetailMovie'
import { HasilSearch } from '../pages/HasilSearch'

export const RouterList = () => {
  return (
    <BrowserRouter>
    <Routes>
        {/* <Route path='/' element={<HomePage/>}/> */}
        <Route path='/' element={<MovieList/>}/>
        <Route path='/PopulerMovie' element={<PopulerMovie/>}/>
        <Route path='/DetailMovie/:id' element={<DetailMovie/>}/>
        <Route path='/HasilSearch' element={<HasilSearch/>}/>
    </Routes>
    </BrowserRouter>
  )
}
