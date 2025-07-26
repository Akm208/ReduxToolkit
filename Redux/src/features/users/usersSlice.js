import { createSlice } from "@reduxjs/toolkit";


const initialState=[
    {id:'0', name:'Abdullah'},
    {id:'1', name:'Hamza Yaseen'},
    {id:'2', name:'Abid badshah'},
]

const usersSlice=createSlice({
    name:'users',
    initialState,
    reducers:{}
})

export const selectAllUsers=(state)=>state.users
export default usersSlice.reducer