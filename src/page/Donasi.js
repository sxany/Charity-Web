import { Navbar } from '../components/Navbar.js'
import { Footer } from '../components/Footer.js'

export function Donasi() {
  document.getElementById('app').innerHTML = `
    ${Navbar()}
    <section class="p-10">
      <h1 class="text-3xl font-bold">Halaman Donasi</h1>
    </section>
    ${Footer()}
  `
}
