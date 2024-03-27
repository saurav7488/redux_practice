import { configureStore} from "@reduxjs/toolkit";

import userSlice from './slice'


const storeReducer = configureStore({
     reducer:{
          users : userSlice
     }
})


export default storeReducer

