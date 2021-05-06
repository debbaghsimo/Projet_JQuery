const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("btn");
btn.addEventListener("click",(event)=>{
    event.preventDefault();
    let id;
    console.log(1);
    if(userInput(email.value,password.value)){
       if(localStorage.getItem("user")===null){
           alert("user is not in storage")
       }else{
           const users = JSON.parse(localStorage.getItem("user"));
           let isUserValid =false;
           for(let i=0;i<users.length;i++){
               console.log(users[i]);
               if(users[i].email === email.value){
                   if(users[i].password === password.value){
                     isUserValid = true;
                     id =i;
                     break;
                   }
               }
           }
           if(isUserValid){
               localStorage.setItem("islogin",JSON.stringify({islogin:true,id}));
               window.location.href = "Site.html";
           }else{
               alert("password or email incorrect ");
           }
       }
    }
    

});

function userInput(name,email,password){
    return true
}