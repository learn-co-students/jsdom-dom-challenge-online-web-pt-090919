function incTimer() {
  let timer = document.getElementById("counter");
  for(i=0; i < 99999; i++){
    timer.textContent = i;
  }
  
}