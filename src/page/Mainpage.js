import { PageLayout } from './Layout.js'
import { Donasi} from './Donasi.js'
import { Relawan } from './Relawan.js'
import { Login } from './Login.js'

const routes = {
  donasi: Donasi,
  relawan: Relawan,
  login: Login
}

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('main')
  const page = new URLSearchParams(window.location.search).get('type')

  const render = routes[page]
  app.innerHTML = render
    ? PageLayout(render())
    : '<h1>Page tidak ditemukan</h1>'
})
