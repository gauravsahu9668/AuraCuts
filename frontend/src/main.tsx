
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import stepsReducer from "./Slices/StepsReducer.ts"
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
const store=configureStore({
    reducer:{
      step: stepsReducer,
    }
  })
createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <Provider store={store}>
         <App />
    </Provider>
    </BrowserRouter>
)
