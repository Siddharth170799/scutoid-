import { configureStore } from '@reduxjs/toolkit'
// import Slice from './Slice'
import slice from './slice';

const store = configureStore({
    reducer: {
        users: slice.reducer // Ensure you're using the reducer from Slice
    }
});

export default store;
