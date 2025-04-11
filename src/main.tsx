import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/style/global.module.css'
import Home from './components/screens/Home/Home'
import Store from './store/store';

const store = new Store();

export const Context = createContext({
  store,
})

createRoot(document.getElementById('root')!).render(
  <Context.Provider value={{
    store
  }}>
    <StrictMode>
      <Router />
    </StrictMode>,
  </Context.Provider>
)
