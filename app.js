const reviews = document.querySelectorAll('.review')

const dropdown = document.querySelector('.dropdown')
const dropdownMenu = document.querySelector('.dropdown-menu')
const hamburgerMenu = document.querySelector('.hamburger-menu')
const navLinks = document.querySelector('.nav-links')

const barOne = document.querySelector('.bar-1')
const barTwo = document.querySelector('.bar-2')
const barThree = document.querySelector('.bar-3')

reviews.forEach(review => {
  const readReplyBtn = review.querySelector('.read-reply-btn')
  const reply = review.querySelector('.reply')

  readReplyBtn.addEventListener('click', () => {
    readReplyBtn.classList.add('hide-reply-btn')
    reply.classList.add('show-reply')
  })
})

document.addEventListener('click', e => {
  if (
    e.target.classList.contains('dropdown-btn') ||
    e.target.classList.contains('dropdown-icon')
  ) {
    dropdownMenu.classList.toggle('show-dropdown')
  } else {
    dropdownMenu.classList.remove('show-dropdown')
  }
})

dropdown.addEventListener('mouseenter', e => {
  dropdownMenu.classList.add('show-dropdown')
})

dropdownMenu.addEventListener('mouseleave', e => {
  if (e.target.classList.contains('dropdown-link')) return
  else dropdownMenu.classList.remove('show-dropdown')
})

hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('show-nav')

  barOne.classList.toggle('rotate-45')
  barTwo.classList.toggle('op-0')
  barThree.classList.toggle('rotate--45')
})
