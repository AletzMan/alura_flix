import './App.css'
import { MainHeader } from './components/Header'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from './pages/Home/Home'
import { NewVideo } from './pages/NewVideo/NewVideo'
import { SnackbarProvider } from "notistack"
import { MenuMobile } from './components/MenuMobile'

function App() {


  return (
    <SnackbarProvider anchorOrigin={{ horizontal: "center", vertical: "top" }} transitionDuration={300} autoHideDuration={4000}>
      <BrowserRouter>
        <MainHeader />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new_video' element={<NewVideo />} />
          <Route path='*' element={<div>EMPTY</div>} />
        </Routes>
        <MenuMobile />
      </BrowserRouter>
    </SnackbarProvider>
  )
}

export default App
