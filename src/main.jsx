  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import './index.css'
  import App from './App.jsx'
  import { createStore } from 'redux'
  import NavReducer from './components/reducer/NavReducer.jsx'
  localStorage.setItem("un","null")
  localStorage.setItem("role",0)
  localStorage.setItem("cl",JSON.stringify([]))
  const store = createStore(NavReducer)

  const customer = () => createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App store={store} />
    </StrictMode>,
  )

  customer()
  store.subscribe(customer)
