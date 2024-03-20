rulesBtn = document.getElementById('rules-btn')
rules = document.getElementById('rules')
closesBtn = document.getElemebtById('close-btn')


rulesBtn.addEventListener('click', () => {
    rules.classList.add('show')
})

closeBtn.addEventListener('click', () => {
    rules.classList.remove('show')
})