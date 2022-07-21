import { Link } from "react-router-dom"
import { BiCameraMovie } from "react-icons/bi"

import Form from "./Form"

import './Nav.css'

const Nav = () => {
  return (
    <nav id="navbar">
      <Link to="/"><BiCameraMovie/>Movies TMDB</Link>
      <Form />
    </nav>
  )
}

export default Nav