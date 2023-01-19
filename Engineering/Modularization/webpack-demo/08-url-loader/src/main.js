import createHeading from './heading.js'
import './main.css'
import hc from './hc.png'

const heading = createHeading()
document.body.append(heading)

const img = new Image()
img.src = hc
document.body.append(img)
