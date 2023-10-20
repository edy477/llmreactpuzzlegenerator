import  {configureStore} from "@reduxjs/toolkit";
import gridReducer from "@/store/gridslice";

export const store = configureStore({
    reducer: {
        gridgame: gridReducer
    }
})

export type RootState =  ReturnType<typeof  store.getState>;
export type AppDispatch = typeof store.dispatch;
