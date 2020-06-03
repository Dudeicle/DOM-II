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

function loadImage() {
    alert('Image is loaded')
}
window.addEventListener("load", loadImage)

// NEW TASK

const focusNav = document.querySelectorAll('a')[1]

function focus(event) {
    event.target.style.background = 'pink'
}

focusNav.addEventListener("focus", focus)

// NEW TASK

const allBody = document.body

function reportSize() {
    var w = window.outerWidth;
    var h = window.outerHeight;
    var txt = "Window size: width=" + w + ", height=" + h;
    document.getElementById("demo").innerHTML = txt;
  }

allBody.addEventListener("resize", reportSize)

// NEW TASK

window.addEventListener('scroll',(event) => {
    const x = document.querySelectorAll('a')[2]
    x.style.display = "none"
    console.log('Scrolling...');
});

// NEW TASK

// function logSelection(event) {
//     const log = document.getElementById("selectedText");
//     const selection =  event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
//     log.textContent = `You selected ${selection}`;
// }

// const input = document.getElementById('input')
// input.addEventListener('select', logSelection)

// NEW TASK

const hiddenImg = document.querySelectorAll('img')[1]
console.log(hiddenImg)

function hideImg (event) {
    hiddenImg.style.display = "none"
}

hiddenImg.addEventListener('dblclick', hideImg)

// TASK #2!!!

const big = document.querySelectorAll('img')[3]
console.log(big)

function hideBig (event) {
    big.style.display = "none"
}

window.addEventListener('dblclick', hideBig) 