// store.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage
import productSlice from "./productSlice";
import userSlice from "./userSlice";

// объединяем редьюсеры
const rootReducer = combineReducers({
  product: productSlice,
  user: userSlice,
});

// конфиг для persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"], // сохраняем только userSlice
};

// создаём persist редьюсер
const persistedReducer = persistReducer(persistConfig, rootReducer);

// создаём store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // чтобы redux-persist не ругался на не-сериализуемые объекты
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
