import {persistReducer, persistStore} from "redux-persist";
import {checkBoxReducer} from "../reducer/reducer";
import {configureStore} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig,checkBoxReducer);

const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;


/*
const store = configureStore({
    reducer: checkBoxReducer,
    // Optionally, add additional middleware
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export default store;

 */