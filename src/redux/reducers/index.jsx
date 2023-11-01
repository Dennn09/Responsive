
import { combineReducers } from '@reduxjs/toolkit'
import authLogin from './auth/authLogin'
import MoviePopuler from './movie/DataMoviePopuler'
export default combineReducers({
    auth: authLogin,
    dataMoviePopuler: MoviePopuler,
})