const reviews = document.querySelectorAll('.review')

reviews.forEach(review => {
  const readReplyBtn = review.querySelector('.read-reply-btn')
  const reply = review.querySelector('.reply')

  readReplyBtn.addEventListener('click', () => {
    console.log(readReplyBtn)
    console.log(reply)

    readReplyBtn.classList.add('hide-reply-btn')
    reply.classList.add('show-reply')
  })
})
