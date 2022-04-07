const reviews = document.querySelectorAll('.review')

reviews.forEach(review => {
  const readReplyBtn = review.querySelector('.read-reply-btn')
  const reply = review.querySelector('.reply')

  readReplyBtn.addEventListener('click', () => {
    readReplyBtn.classList.add('hide-reply-btn')
    reply.classList.add('show-reply')
  })
})
