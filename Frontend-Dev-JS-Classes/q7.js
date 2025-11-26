function validateLogin(username,password){
  const errors=[]
  if(!(username && username.length>=5))errors.push('username must be at least 5 chars')
  if(!(password && password.length>=8))errors.push('password must be at least 8 chars')
  if(!/[A-Z]/.test(password))errors.push('need uppercase')
  if(!/[a-z]/.test(password))errors.push('need lowercase')
  if(!/\d/.test(password))errors.push('need number')
  if(!/[^A-Za-z0-9]/.test(password))errors.push('need special char')
  if(errors.length)console.log('Errors:',errors)
  else console.log('Login OK')
  return errors.length===0
}

if(typeof module!=='undefined')module.exports=validateLogin
