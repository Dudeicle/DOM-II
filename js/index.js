// Your code goes here

const logo = document.querySelector('.logo-heading')

function mouseOver(event) {
    logo.style.color = 'green' 
}
logo.addEventListener('mouseover', mouseOver)

// NEW TASK

function keyDown(event) {
    if(event.key === 'p') {
        logo.style.color = 'black'
    }
}
document.addEventListener('keydown', keyDown)

// NEW TASK

function wheel(event) {
    logo.style.fontSize = '3rem'
}
logo.addEventListener('wheel', wheel)

// NEW TASK

const dragFade = document.querySelectorAll('a')[0]
function drag(event) {
    event.target.style.opacity = '0.5'
}
dragFade.addEventListener('drag', drag)

// NEW TASK

const busInSand = document.querySelectorAll('img')[0]

const holder = document.getElementsByClassName('intro')[0]

holder.addEventListener("dragover", dragover)
holder.addEventListener("dragenter", dragenter)
holder.addEventListener("drop", drop)


function dragover(event) {
    event.preventDefault()
  }
function dragenter(event) {
    event.preventDefault()
  }
function drop(event) {
    event.target.append(busInSand)
  }

// NEW TASK

// function loadImage() {
//     alert('Image is loaded')
// }

// document.addEventListener("onload", loadImage())

// NEW TASK

const focusNav = document.querySelectorAll('a')[1]

function focus(event) {
    event.target.style.background = 'pink'
}

focusNav.addEventListener("focus", focus)

// NEW TASK

const box = document.querySelectorAll('.intro')

box.addEventListener("onresize", reportSize)