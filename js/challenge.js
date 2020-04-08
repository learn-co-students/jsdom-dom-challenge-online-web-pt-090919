let theNumber = document.querySelector('#counter');
let numMinus = document.querySelector('#minus');
let numPlus = document.querySelector('#plus');
let heart = document.querySelector('#heart');
let pause = document.querySelector('#pause');
let likes = document.querySelector('.likes');
let submit = document.querySelector('#submit');
let list = document.querySelector('#list');
let count;


document.addEventListener('DOMContentLoaded', (event) => {
    count = setInterval(function(){ 
    theNumber.innerText++;
    // theNumber.innerText = parseInt(theNumber.innerText) + 1;
    }, 1000);
});

numPlus.addEventListener('click', function(e) {
    theNumber.innerText++;
});  

numMinus.addEventListener('click', function(){
    theNumber.innerText--;
});

pause.addEventListener('click', function(e) {
    if (pause.innerText === 'pause') {
        pause.innerText = 'resume';
        clearInterval(count);
        
        numPlus.disabled = true;
        numMinus.disabled = true;
        heart.disabled = true;
        submit.disabled = true;

    } else {
        setInterval(function() {
            theNumber.innerText++;
        }, 1000);
        pause.innerText = 'pause';
        
        numPlus.disabled = false;
        numMinus.disabled = false;
        heart.disabled = false;
        submit.disabled = false;
        }
    });

heart.addEventListener('click', function(e) {
    let element = document.getElementById(`${theNumber.innerText}`);
element ? element.children[0].innerText++ : likes.innerHTML += `<li id = ${theNumber.innerText}> ${theNumber.innerText} is liked <span id = ${theNumber.innerText}> 1 </span> times.</li>`
});

submit.addEventListener('click', function(e) {
    e.preventDefault();
    let comment = document.querySelector('#comment-form > input[type=text]').value
    list.innerHTML += `<li> ${comment} </li>`
    document.querySelector('#comment-form').reset();
});


