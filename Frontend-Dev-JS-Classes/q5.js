function validName(n){return /^[A-Za-z ]+$/.test(n)}
function validEmail(e){return /^\S+@\S+\.\S+$/.test(e)}
function bookTicket(name,email,seats){
  if(!validName(name))return console.log('Invalid name')
  if(!validEmail(email))return console.log('Invalid email')
  if(!(Number.isInteger(seats) && seats>=1 && seats<=10))return console.log('Invalid seats')
  const booking={name,email,seats}
  console.log('Ticket:',booking)
  return booking
}

if(typeof module!=='undefined')module.exports={bookTicket}
