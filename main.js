// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!



let hearts = document.querySelectorAll('.like-glyph')

hearts.forEach(function(heart){
  heart.addEventListener('click', function(){
    mimicServerCall()
      .then(function(){
        if (heart.classList.contains('activated-heart')) {
            heart.textContent = EMPTY_HEART
            heart.classList.remove('activated-heart')
        } else {
        heart.textContent = FULL_HEART
        heart.classList.add('activated-heart')
        }
    })
      .catch(function(){
        let modal = document.querySelector('#modal')
        modal.classList.remove('hidden')
        setTimeout(clearError, 5000)
      })
  })
})




function clearError(){
  let modal = document.querySelector('#modal')
  modal.classList.add('hidden')
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
