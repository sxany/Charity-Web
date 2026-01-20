import { Donasi } from './Donasi.js'
import { Relawan } from './Relawan.js'
import { Kampanye } from './Kampanye.js'

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('main')
  const page = new URLSearchParams(window.location.search).get('type')

  switch (page) {
    case 'donasi':
      app.innerHTML = Donasi()
      break
    case 'relawan':
      app.innerHTML = Relawan()
      break
    case 'kampanye':
      app.innerHTML = Kampanye()
      break
    default:
      app.innerHTML = '<h1>Page kosong</h1>'
  }
})
