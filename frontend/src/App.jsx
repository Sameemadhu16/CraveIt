import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AppRoutes from './routes/AppRoutes'
import { store } from './store/store'
import { setNavigator } from './utils/navigator'
import Header from './components/home/Header'
import Footer from './components/home/Footer'

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    setNavigator(navigate);
  }, [navigate]);

  return (
    <Provider store={store}>
      <Header/>
      <AppRoutes />
      <ToastContainer theme="colored" />
      <Footer />
    </Provider>
  )
}
