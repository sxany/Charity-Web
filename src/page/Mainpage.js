import { Donasi } from './Donasi.js'
import { Relawan } from './Relawan.js'
import { Kampanye } from './Kampanye.js'
import { Login } from './Login.js'

console.log('Mainpage.js LOADED')
const routes = {
  donasi: Donasi,
  relawan: Relawan,
  kampanye: Kampanye,
  login: Login
}


const app = document.getElementById('main')
const page = new URLSearchParams(window.location.search).get('type')

const render = routes[page]
app.innerHTML = render ? render() : '<h1>Page tidak ditemukan</h1>'
