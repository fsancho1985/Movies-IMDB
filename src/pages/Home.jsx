import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import MovieCard from '../components/MovieCard'
import Slider from '../components/Slider'

import './MoviesGrid.css'

const moviesURl = import.meta.env.VITE_API_URL
const apiKey = import.meta.env.VITE_API_KEY
const imageUrl = import.meta.env.VITE_IMG

const Home = () => {
  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async url => {
    const res = await fetch(url)
    const data = await res.json()
    setTopMovies(data.results)
  }

  useEffect(() => {
    const topRatedUrl = `${moviesURl}now_playing?${apiKey}&language=pt-BR`
    getTopRatedMovies(topRatedUrl)
  }, [])

  return (
    <div className="container">
      <div className="upcoming-container">
        <h2>Em breve nos cinemas</h2>
        <Slider />
      </div>
      <h1 className="title">Atualmente nos Cinemas</h1>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Loading....</p>}
        {topMovies.length > 0 &&
          topMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}

export default Home
