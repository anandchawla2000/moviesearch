import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/home'
import About from './Pages/About'
import Error from './Pages/error'
import Single from './Pages/Single'

function App(){
  return(
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<Error/>}/>
      <Route path='/movie/:id' element={<Single/>}/>
     </Routes>
     </BrowserRouter>
  )
}

export default App