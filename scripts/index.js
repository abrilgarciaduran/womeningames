const arrows = document.querySelectorAll('.flecha');
const navLinks = document.querySelectorAll('nav ul li a')

arrows.forEach(arrow => {
    arrow.addEventListener('click', (e) => {
        const target = e.target;
        const number = parseInt(target.id)
        const answer = document.querySelector(`#respuesta${number}`)
        if (target.style.transform == '') {
            target.style.transform = 'rotate(180deg)'
            answer.style.display = 'block'
        } else {
            target.style.transform = ''
            answer.style.display = 'none'
        }

    })
})

navLinks.forEach(navLink => {
    navLink.addEventListener('click', (e) => {
        e.preventDefault();
        const target = `${e.target.href}`
        const anchor = target.substr(target.indexOf('#') + 1, target.length)
        const container = document.getElementById(`${anchor}`)
        window.scrollBy({
            top: container.getBoundingClientRect().top - 80,
            left: 0,
            behaviour: 'smooth'
        })
    })
})