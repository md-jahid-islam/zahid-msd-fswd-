import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Layout from './Components/layout/Layout'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import ExperienceComponents from './Components/Experience/ExperienceComponents'
import AchievementsComponents from './Components/Achievements/AchievementsComponents'
import ContactComponents from './Components/Contact/ContactComponents'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element = {<Layout/>}>
    <Route path='/' element = {<Home/>}/>
    <Route path='/About' element = {<About/>}/>
    <Route path='/Skills' element = {<Skills/>}/>
    <Route path='/Projects' element = {<Projects/>}/>
    <Route path='/Experience' element = {<ExperienceComponents/>}/>
    <Route path='/Achievements' element = {<AchievementsComponents/>}/>
    <Route path='/Contact' element = {<ContactComponents/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
