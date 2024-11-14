import { createContext, Dispatch, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Me from './components/main/myInfo/Me'
import Stack from './components/main/stack/Stack'
import MyProjects from './components/main/projects/MyProjects'
import Footer from './components/footer/footer'


type Context = {
  theme : string, 
  setTheme : Dispatch<React.SetStateAction<string>>
}

export const ThemeContext = createContext<Context | null>(null)
function App() {
  const[theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={`${theme}`}>
        <Header />
        <Me />
        <Stack />
        <MyProjects />
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
