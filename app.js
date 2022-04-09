const reviews = document.querySelectorAll('.review')

reviews.forEach(review => {
  const readReplyBtn = review.querySelector('.read-reply-btn')
  const reply = review.querySelector('.reply')

  readReplyBtn.addEventListener('click', () => {
    readReplyBtn.classList.add('hide-reply-btn')
    reply.classList.add('show-reply')
  })
})

const dropdown = document.querySelector('.dropdown')
const dropdownMenu = document.querySelector('.dropdown-menu')
const hamburgerMenu = document.querySelector('.hamburger-menu')
const navLinks = document.querySelector('.nav-links')

document.addEventListener('click', e => {
  if (e.target.classList.contains('dropdown-btn')) {
    dropdownMenu.classList.toggle('show-dropdown')
  } else {
    dropdownMenu.classList.remove('show-dropdown')
  }
})

hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('show-nav')
})
