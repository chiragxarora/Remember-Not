import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import reducers from "./Redux/Reducers";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ['credData', 'errors'],
  whitelist: ['auth', 'credentials']
};

const persistedReducer = persistReducer(persistConfig, reducers);

let store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);
export { store, persistor };