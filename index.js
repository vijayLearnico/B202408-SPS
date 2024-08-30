// 1. function functionname(){}
// 2. const functionName = () => {}

const cpuPlay = () => {
    const options = ['stone','paper','scissor']
    const randomNum = Math.random() * 3;
    const convertToWHoleNum = Math.ceil(randomNum)
    return options[convertToWHoleNum - 1];
}


const userOption = (option) => {
   const playerTag = document.querySelector('#player-option');
   const cpuTag = document.querySelector('#cpu-option');
   const resultTag = document.querySelector('#result');


   playerTag.innerHTML = `<img src='./${option}.png'>`

   const cpuOption = cpuPlay()

   cpuTag.innerHTML = `<img src='./${cpuOption}.png'>`

   let result = '';

   if(option === cpuOption){
      result = 'Draw';
   } else if(cpuOption === 'stone' && option === 'scissor'){
      result = 'CPU wins'
   }else if(cpuOption === 'paper' && option === 'stone'){
    result = 'CPU wins'
 } else if(cpuOption === 'scissor' && option === 'paper'){
    result = 'CPU wins'
 } else {
    result = 'Player wins'
 }
 resultTag.textContent = result
}

window.onload = () => {
    const stoneTag = document.querySelector('#stone')
    const paperTag = document.querySelector('#paper')
    const scissorTag = document.querySelector('#scissor')

    stoneTag.addEventListener('click',()=>{
        userOption('stone')
    });

    paperTag.addEventListener('click',()=>{
        userOption('paper')
    })

    scissorTag.addEventListener('click',()=>{
        userOption('scissor')
    })
}