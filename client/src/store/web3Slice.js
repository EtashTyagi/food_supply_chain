import {createSlice} from '@reduxjs/toolkit'

const web3Slice = createSlice({
    name: 'web3Slice',
    initialState: {},
    reducers: {
        setAccount(state, action) {
            const {payload} = action
            return {
                ...state,
                'account': payload
            }
        },
    }
})

export const {setAccount} = web3Slice.actions
export default web3Slice.reducer