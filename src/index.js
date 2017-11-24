import Highlight from 'highlight.js/lib/highlight.js'
import 'highlight.js/styles/zenburn.css'

import Reveal from 'reveal.js'
import 'reveal.js/css/reveal.css'
import 'reveal.js/css/theme/black.css'

import './assets/sample-codes/tabs.css'
import './assets/sample-codes/tabs.js'

import 'mdi/css/materialdesignicons.css'
import './style.styl'

Highlight.registerLanguage('xml', require('highlight.js/lib/languages/xml'))
Highlight.initHighlightingOnLoad()

Reveal.initialize({ slideNumber: 'c/t' })
