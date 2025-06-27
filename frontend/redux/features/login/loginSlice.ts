import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    name: '',
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state, action) => {
            state.name = action.payload
        },
        logout: (state) => {
            state.name = ''
        }
    }
})

export const { login, logout } = loginSlice.actions
export default loginSlice.reducer