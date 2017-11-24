import Highlight from 'highlight.js/lib/highlight.js'
import 'highlight.js/styles/zenburn.css'

import Reveal from 'reveal.js'
import 'reveal.js/css/reveal.css'
import 'reveal.js/css/theme/black.css'

import './assets/sample-codes/tabs.css'
import './assets/sample-codes/tabs.js'

import ripplet from 'ripplet.js'

import 'mdi/css/materialdesignicons.css'
import './style.styl'

Highlight.registerLanguage('xml', require('highlight.js/lib/languages/xml'))
Highlight.initHighlightingOnLoad()

var elements = {
  currentSlideNumber: document.querySelector('.current-slide-number'),
  totalSlides:        document.querySelector('.last-slide-number'),
  navigatePrev:       document.querySelector('.slide-prev'),
  navigateNext:       document.querySelector('.slide-next'),
}

Reveal.initialize({ controls: false })
Reveal.addEventListener('ready', function (event) {
  elements.totalSlides.textContent = Reveal.getTotalSlides()
  updateSlideControls(event.indexh)
})
Reveal.addEventListener('slidechanged', function (event) {
  updateSlideControls(event.indexh)
})

function updateSlideControls(currentIndex) {
  elements.currentSlideNumber.textContent = currentIndex + 1
  currentIndex === 0                           ? elements.navigatePrev.setAttribute('disabled', '') : elements.navigatePrev.removeAttribute('disabled')
  currentIndex === Reveal.getTotalSlides() - 1 ? elements.navigateNext.setAttribute('disabled', '') : elements.navigateNext.removeAttribute('disabled')
}

document.querySelector('.slide-prev').addEventListener('mousedown', function (event) {
  ripplet(event, { color: 'rgba(66,175,250,.2)' })
  Reveal.prev()
})

document.querySelector('.slide-next').addEventListener('mousedown', function (event) {
  ripplet(event, { color: 'rgba(66,175,250,.2)' })
  Reveal.next()
})

document.querySelector('.icon-button').addEventListener('mousedown', ripplet)
