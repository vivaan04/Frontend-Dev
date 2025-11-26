// Q1: greetUser with callback
function showEndMessage(){
  console.log('Welcome to the course!')
}

function greetUser(name, callback){
  console.log(`Hello ${name}`)
  if(typeof callback==='function') callback()
}

greetUser('Faizan', showEndMessage)

module.exports={greetUser,showEndMessage}
