import React from 'react'
import { ReduxLogin } from './redux/ReduxLogin'
import { useSelector } from 'react-redux'
// import { useGetDataUser } from '../services/auth/get_user'

export const LoginRedux = () => {
  const Data = useSelector((state)=> state.dataMoviePopuler)
  const DataRedux = useSelector((state) => state.auth);

  console.log(DataRedux, "data")
  console.log(Data, "DataMovie")
  // const { data: datauser, isSuccess } = useGetDataUser({});

  // console.log(datauser)
  
  return (
    <div>
        <ReduxLogin/>
    </div>
  )
}
