const username = document.querySelector('#user-name');
const userEmail = document.querySelector('#user-email');
const userBio = document.querySelector('#user-bio');

let setupUI = (user)=>{
       db.collection('username').doc(user.uid).get().then(res =>{
           username.innerHTML = res.data().Username;
           userEmail.innerHTML =  user.email;
           userBio.innerHTML =  res.data().Bio;
       })
}