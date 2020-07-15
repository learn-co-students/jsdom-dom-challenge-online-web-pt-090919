let timer = setInterval(setCount, 1000)
let counterText = document.querySelector("h1#counter");
let count = parseInt(counterText.textContent);
let minus = document.querySelector("button#minus");
let plus = document.querySelector("button#plus");
let heart = document.querySelector("button#heart");
let pause = document.querySelector("button#pause");
let likes = document.querySelector('ul.likes')
let clearBtn = document.querySelector('button#clear')
let comments = document.querySelector('div.comments')
let commentInput = document.querySelector('input#comment-input')
let commentForm = document.querySelector('form#comment-form')
let counter = {}

document.addEventListener("DOMContentLoaded", () => {


  minus.addEventListener("click", minusOneUponClick);
  plus.addEventListener("click", plusOneUponClick);
  pause.addEventListener("click", pauseAction);
  reset.addEventListener("click", resetAction);
  heart.addEventListener('click', getNumberLiked)
  clearBtn.addEventListener('click', clearAction)
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    commentAction();
  })
});

function setCount() {
  counterText.textContent++;
}

function minusOneUponClick() {
  counterText.textContent--;
}

function plusOneUponClick() {
  counterText.textContent++;
}

function getNumberLiked() {
  if (counter[counterText.textContent]) {
    counter[counterText.textContent]++
  } else {
    counter[counterText.textContent] = 1
  }

  likes.innerHTML += `
    <li class='like-count'>You liked the number ${counterText.textContent} ${counter[counterText.textContent]} time/s</li>
  `
}

function pauseAction() {
  minus.disabled = true;
  plus.disabled = true;
  heart.disabled = true;
  clearInterval(timer)
  this.textContent = "resume"
  this.classList.remove('pause')
  this.classList.add('resume')
}

function resetAction() {
  minus.disabled = false;
  plus.disabled = false;
  heart.disabled = false;
  pause.innerText = "pause";
  counterText.innerText = "0";
  count = 0;
}

function clearAction() {
  let likeCount = document.querySelectorAll('.like-count')
  likeCount.forEach(count => {
    count.remove();
  })
}

function commentAction() {
  let commentBlock = document.createElement('p')
  commentBlock.textContent = commentInput.value
  comments.appendChild(commentBlock)
  commentInput.value = '';
}