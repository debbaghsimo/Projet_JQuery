const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("btn");

btn.addEventListener("click",(event)=>{
    event.preventDefault();
    console.log(1);
    if(userInput(userName.value,email.value,password.value)){
        const user = {
        name:userName.value,
        email:email.value,
        password:password.value,
       };
       if(localStorage.getItem("user")===null){
           localStorage.setItem("user",JSON.stringify([user]));
           window.location.href = "singin.html";
       }else{
           const users = JSON.parse(localStorage.getItem("user"));
           let isEmailInLoc =false;
           users.forEach((ele)=>{
               if(user.email === ele.email){
                   isEmailInLoc =true;
               }
           });
           if(isEmailInLoc){
            alert("user alredy in storage");
           }else{
            users.push(user);
            localStorage.setItem("user",JSON.stringify(users));
            alert("user added");
            window.location.href = "singin.html";
               
           }
       }
    }
    

});

function userInput(name,email,password){
    return true
}

