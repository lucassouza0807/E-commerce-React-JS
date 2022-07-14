import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import UserReducer from "./userSlice.js";


const persistConfig = {
    key: "root",
    storage,
}

const persistedReducer = persistReducer(persistConfig, UserReducer);

const store = configureStore({
    reducer: {
        user: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

let persirtor = persistStore(store)

export { store, persirtor }