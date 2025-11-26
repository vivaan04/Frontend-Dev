function validateName(name){return /^[A-Za-z ]+$/.test(name)}
function validateEmail(email){return /^\S+@\S+\.\S+$/.test(email)}
function validatePhone(phone){return /^\d{10}$/.test(phone)}
function validatePassword(pw){return /(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{1,}/.test(pw)}

function validateStudent(data){
  return {
    name:validateName(data.name),
    email:validateEmail(data.email),
    phone:validatePhone(data.phone),
    password:validatePassword(data.password)
  }
}

if(typeof module!=='undefined')module.exports={validateStudent}
