import  {configureStore} from '@reduxjs/toolkit'
import authReducer from './authSlice.js'

const store = configureStore({
    reducer : {
        logData : authReducer
    }
})


export default store;