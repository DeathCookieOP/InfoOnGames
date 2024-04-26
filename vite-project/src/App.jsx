import { useEffect, useInsertionEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import LogInPage from './pages/LogIn'
import GamesPage from './pages/GamesPage'
import GameInfo from './pages/GameInfo'
import IndexPage from './pages/Index'
import Alert from './components/Alert/Alert'


function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/games_json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>

      <Navbar></Navbar>
      {/* Anything up here will show on all pages, so put navbar */}
      <div className="container">
        <BrowserRouter>
          <Routes>

            <Route index element={<IndexPage />} className="indexContainer"></Route>
            <Route path="/index" element={<IndexPage />}></Route>
            <Route path='/login' element={<LogInPage />}></Route>
            <Route path='/games' element={<GamesPage />}></Route>

            {/* Creating a game info route for all the games */}
            {data.map(game => <Route path={`/${game.game_title}`} element={<GameInfo game={game}/>}></Route>)}

          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
