document.addEventListener("DOMContentLoaded", function(){

    const counterNum = document.getElementById('counterNum');
    const minus = document.getElementById('minus');
    const plus = document.getElementById('plus');
    const heart = document.getElementById('heart');
    const submit = document.getElementById('submit');
    const pause = document.getElementById('pause');
    const buttons = [minus,plus,heart,submit];

    //The Incrementer 
    let counter = 0
    let isPaused = false;
    let interval = setInterval(function(){
        if(isPaused){
            counter += 1;
            let myCounter = counterNum.innerHTML = counter;
        }
    }, 1000);

    //Incrementer Button Control
    let plusBtn = plus.addEventListener("click", function(){
        counter += 1;
    });

    let minusBtn = minus.addEventListener("click", function(){
        counter -= 1;
    });

    //Comments Control
    let newComment = submit.addEventListener("click", function(event){
        event.preventDefault();
        comment = document.querySelector("#comment-input").value;
        addComment = document.getElementById("list").innerHTML += `<p>${comment}</p>`;
    });

    //Pause Control
    let pauseBtn = pause.addEventListener("click", function(event){
        event.preventDefault();
        if (pause.innerText === 'pause'){
            pause.innerText = 'resume';
            buttons.forEach(function(el){
                el.disabled = true;
            });
            isPaused = false;
        } else {
            pause.innerText = 'pause';
            buttons.forEach(function(el){
                el.disabled = false;
            });
            isPaused = true;
        }
    });
});
