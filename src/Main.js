import { Navbar } from './components/Navbar'
import { Jumbotron } from './components/Jumbotron'
import { Application } from './components/Application'
import { Kampanye } from './components/Kampanye'
import { Reason } from './components/Reason'
import { Footer } from './components/Footer'
import { About } from './components/About'
import { Testi } from './components/Testi'
import { Mission } from './components/Mission'
import { Vision } from './components/Vision'



document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('app').innerHTML =
    Navbar() + Jumbotron() + About() + Testi() + Mission() + Vision() + Application()  + Kampanye() + Reason() + Footer()  

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
