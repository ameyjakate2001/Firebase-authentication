//On Depend Upon User sign in or sign out it changes the UI for the user
auth.onAuthStateChanged((user)=>{
   if(user){
       console.log('he hi');
       setupUI(user);
   }
   else{
       console.log('he bye');
   }
});







//Signup User with Email and Password
const signupForm = document.querySelector('#signup-form');
if(signupForm){
    signupForm.addEventListener('submit',(e)=>{
        e.preventDefault();
           const email = signupForm['signup-email'].value;
           const password = signupForm['signup-password'].value;
           auth.createUserWithEmailAndPassword(email, password).then((cred)=>{
               return db.collection('username').doc(cred.user.uid).set({
                    Bio:signupForm['user-bio'].value,
                    Username:signupForm['user-username'].value
                })
            }).then(()=>{
                    alert('User Created Successfully');
                    window.location = '../HTML/login1.html';
                }).catch((error)=>{
               alert('some error Happened');
           })
    })
}




// Login a user with Email and Password
const loginForm = document.querySelector('#login-form');
if(loginForm){
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // get user info
        const email = loginForm['login-email'].value;
        const password = loginForm['login-password'].value;
      
        // log the user in
        auth.signInWithEmailAndPassword(email, password).then((cred) => {
            var user = auth.currentUser;
            if(user){
                alert('logged in successfully as:- '+email);
                window.location.replace("../HTML/Beautique Gallery.html");
            }
            else{
                setupUI();
            }
    }).catch((error)=>{
        var errorCode = error.code;
        var errorMessage = error.message;
        alert('some happened'+err);
    })
});
}


//Logout a user from the account
    const signout = document.querySelector('#logout-button');
    if(signout){
        signout.addEventListener('click',(e)=>{
            const user = auth.currentUser;
            if(user){
                console.log('user signed in');
                auth.signOut().then(()=>{
                    db.collection('username').doc(user.uid).get().then(res=>{
                       alert('signout successfully as:- '+res.data().Username)
                        window.location.replace("index.html")
                    })
                }) .catch((error)=>{
                    alert('something happpended '+error);
                })
            }
            else{
                console.log('no user');
            }
        })
    }
