import './App.css'
import { MainHeader } from './components/Header'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from './pages/Home/Home'
import { NewVideo } from './pages/NewVideo/NewVideo'

function App() {


  return (
    <BrowserRouter>
      <MainHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new_video' element={<NewVideo />} />
        <Route path='*' element={<div>EMPTY</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
