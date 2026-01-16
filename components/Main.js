import 'flowbite'
import { Navbar } from './navbar.js'
import { Jumbotron } from './Jumbotron.js'

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("app").innerHTML =
    Navbar() + Jumbotron()
})
