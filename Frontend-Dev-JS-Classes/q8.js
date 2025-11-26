const user={name:'John',email:'john@mail.com',age:21}
function updateUser(updates){
  Object.assign(user,updates)
  console.log(user)
}

if(typeof module!=='undefined')module.exports={user,updateUser}
