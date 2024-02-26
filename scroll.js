const svg= document.querySelector('svg.squiggle')
const path = svg.querySelector('path')

const scroll = () => {
    const distance = window.scrollY
    const pathLength = path.getTotalLength()
    const totalDistance = svg.clientHeight - window.innerHeight
    // the total distance to be covered - the browser height

    const percentage = distance / totalDistance

    path.style.strokeDasharray= `${pathLength}`
    path.style.strokeDashoffset = `${pathLength * (1-percentage)}`
    // svg path is drawn backwards so 1- makes it the right direction
}

scroll()
window.addEventListener(`scroll`,scroll)