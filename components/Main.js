import { Navbar } from './navbar'
import { Jumbotron } from './Jumbotron'
import { Application } from './Application'
import { Cardfav } from './Cardfav'

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('app').innerHTML =
    Navbar() + Jumbotron() + Application() + Cardfav()

  const slider = document.getElementById('slider')
  const slides = slider.children
  const total = slides.length

  let index = 0

  function updateSlide() {
    slider.style.transform = `translateX(-${index * 100}%)`
  }

  function nextSlide() {
    index = (index + 1) % total
    updateSlide()
  }

  function prevSlide() {
    index = (index - 1 + total) % total
    updateSlide()
  }

  document.getElementById('next').addEventListener('click', nextSlide)
  document.getElementById('prev').addEventListener('click', prevSlide)

  
  setInterval(nextSlide, 4000)
})
