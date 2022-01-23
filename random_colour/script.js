const colour = document.querySelector('#colour')
const button = document.querySelector('button')

function randomHex(){
  return ('0'+(~~(Math.random()*256)).toString(16)).slice(-2)
}

button.addEventListener('click', e=>{
  let newColour = `#${[0,1,2].map(randomHex).join``}`
  colour.innerText = newColour
  colour.style.backgroundColor = newColour
})