let checkButton = document.querySelector('.check');
let guess = document.querySelector('.guess');
let message = document.querySelector('.message');
let randomNum = Math.floor(Math.random() * 25) + 1;
let point = 10;
let highScore = 0;
let highscore = document.getElementsByClassName('.label-score');
function score(){
  if(point == 13){
    highScore = highScore -1;
  }else {
    highScore = highScore +1
  }
};
console.log(score);
const ranGenNum = () => {
 return randomNum;
}
console.log(ranGenNum());
checkButton.onclick = () => {
console.log(randomNum, guess.value *1)
if(randomNum === Number(guess.value)){
  message.innerHTML = `You won!`;
  document.querySelector('body').style.backgroundColor = 'green';
document.querySelector('.number').innerHTML = guess.value *1;
}else if(randomNum < guess.value*1){
  document.querySelector('.score').innerHTML = point;
  point--;
  message.innerHTML = `it's high`;
}else if(point > 0 && randomNum > guess.value*1){
  document.querySelector('.score').innerHTML = point;
  point--;
  message.innerHTML = `it's low`;
}else if(point === 0){
    document.querySelector('.score').innerHTML = point;
    point--;
    message.innerHTML = `You are loser`;
}
}
console.log((document.querySelector('.score').innerHTML) * 1)
console.log(checkButton);
// againButton.addEventListener ("click", function() {
//   result.innerHTML="";
//   document.querySelector('.number').innerHTML = 0;
//   document.querySelector('.score').innerHTML = 0;
// });
let button = document.getElementByClassName('.again'); 
button.addEventListener('click',function(){
  document.getElementsByClassName('.score').reset();
  document.querySelector('.message').reset();
  document.querySelector('.number').reset();
  document.querySelector('.guess').reset();
  document.querySelector('body').style.backgroundColor.reset();
});
