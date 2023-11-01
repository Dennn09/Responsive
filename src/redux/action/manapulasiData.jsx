import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'makup',
  initialState: {
    jumlahmakeup : 10,
    namaBrand : "lato lato",
    Penerbit : "sari roti",
    listBedak : ["bedak tabur " , "bedak foundation " , "bedak halus"]
  },
  reducers: {
    kurangMakup : (state) => {state.jumlahmakeup = state.jumlahmakeup - 1},
    tambahMakup : (state) => {state.jumlahmakeup = state.jumlahmakeup + 1},
    gantinamaBrand : (state, action) =>{
        state.namaBrand = action.payload.namaBrand
        state.Penerbit = action.payload.Penerbit
    } ,
    tambahbedak : (state, action) =>{
      state.listBedak.push(action.payload)
    },
    mengurangibedak :(state, action) =>{
      state.listBedak.pop(action.payload)
    }
  }

})


export const { kurangMakup, tambahMakup, gantinamaBrand, tambahbedak, mengurangibedak } = counterSlice.actions

export default counterSlice.reducer