import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'

// Example reducers - you can add your actual reducers here
const userSlice = {
  name: 'user',
  initialState: {
    currentUser: null,
    isAuthenticated: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.currentUser = null
      state.isAuthenticated = false
    },
  },
}

const cartSlice = {
  name: 'cart',
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload)
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    clearCart: (state) => {
      state.items = []
      state.total = 0
    },
  },
}

const rootReducer = combineReducers({
  user: (state = userSlice.initialState, action) => {
    switch (action.type) {
      case 'user/setUser':
        return { ...state, currentUser: action.payload, isAuthenticated: true }
      case 'user/logout':
        return { ...state, currentUser: null, isAuthenticated: false }
      default:
        return state
    }
  },
  cart: (state = cartSlice.initialState, action) => {
    switch (action.type) {
      case 'cart/addToCart':
        return { ...state, items: [...state.items, action.payload] }
      case 'cart/removeFromCart':
        return { ...state, items: state.items.filter(item => item.id !== action.payload) }
      case 'cart/clearCart':
        return { ...state, items: [], total: 0 }
      default:
        return state
    }
  },
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'cart'], // Only persist user and cart
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
})

export const persistor = persistStore(store)
