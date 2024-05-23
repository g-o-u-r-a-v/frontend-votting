import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Reducer/AuthReducer'

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});