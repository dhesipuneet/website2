rulesBtn = document.getElementById('rules-btn')
rules = document.getElementById('rules')
closesBtn = document.getElemebtById('close-btn')
canvas = document.getElementById('canvas')
ctx = canvas.getContext('2d')

ctx.fillStyle = "green"
ctx.fillRect(10, 10, 150, 100);


rulesBtn.addEventListener('click', () => {
    rules.classList.add('show')
})

closeBtn.addEventListener('click', () => {
    rules.classList.remove('show')
})