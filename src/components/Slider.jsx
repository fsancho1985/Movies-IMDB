import React, { useState, useEffect } from 'react'
import Carousel from 'react-elastic-carousel'
import Item from './Item'
import { Link } from 'react-router-dom'

import './Slider.css'

const moviesURl = import.meta.env.VITE_API_URL
const apiKey = import.meta.env.VITE_API_KEY
const imageUrl = import.meta.env.VITE_IMG

const Slider = ({ showLink = true }) => {
  const [upcoming, setUpcoming] = useState([])

  const getUpcomingMovies = async url => {
    const res = await fetch(url)
    const data = await res.json()
    setUpcoming(data.results)
  }

  useEffect(() => {
    const upcomingMoviesURL = `${moviesURl}upcoming?${apiKey}&language=pt-BR`
    getUpcomingMovies(upcomingMoviesURL)
    console.log(upcomingMoviesURL)
  }, [])
  return (
    <div >
      <Carousel
        
        itemsToShow={6}
        enableAutoPlay={false}
        autoPlaySpeed={10000}
        pagination={false}
        enableTilt={true}
        isRTL={false}
        showArrows={true}
      >
        {upcoming.map(upcoming => (
          <div key={upcoming.id.toString()} className='carousel-container'>
            {/* <div> */}
              <Item src={imageUrl + upcoming.poster_path} className="items" />
              <p className="carousel-link">
                {showLink && (
                  <Link to={`/movie/${upcoming.id}`} className="carousel">
                    Details
                  </Link>
                )}
              </p>
            </div>
          // </div>
        ))}
        <p></p>
      </Carousel>
    </div>
  )
}

export default Slider
