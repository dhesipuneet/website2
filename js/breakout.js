rulesBtn = document.getElementById('rules-btn')
rules = document.getElementById('rules')
closesBtn = document.getElemebtById('close-btn')
canvas = document.getElementById('canvas')
ctx = canvas.getContext('2d')

ball = {
    x: canvas.width / 2,
    y: canvas.height /2,
    size: 10,
    speed: 4,
    dx: 4;
    dy; -4;
}




rulesBtn.addEventListener('click', () => {
    rules.classList.add('show')
})

closeBtn.addEventListener('click', () => {
    rules.classList.remove('show')
})