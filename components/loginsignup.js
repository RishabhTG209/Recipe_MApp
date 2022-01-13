let loginsignup=document.querySelector("#dayrecipe");
loginsignup.addEventListener("click",function(){
    window.location.href="loginsignup.html"
})

let home=document.querySelector("#random");
home.addEventListener("click",function(){
    window.location.href="index.html"
})


const  loginBtn = document.querySelectorAll(".login-btn"),
         registerBtn = document.querySelectorAll(".register-btn"),
         lostPassBtn = document.querySelectorAll(".lost-pass-btn"),
         box = document.querySelector(".box"),
         loginForm = document.querySelector(".login-form"),
         registerForm = document.querySelector(".register-form"),
         lostPasswordForm = document.querySelector(".lost-password-form");
 
  registerBtn.forEach((btn) =>{
  	btn.addEventListener("click",() =>{
      box.classList.add("slide-active");
      registerForm.classList.remove("form-hidden");
      loginForm.classList.add("form-hidden");
      lostPasswordForm.classList.add("form-hidden");
  	});
  });

  loginBtn.forEach((btn) =>{
  	btn.addEventListener("click",() =>{
      box.classList.remove("slide-active");
      registerForm.classList.add("form-hidden");
      loginForm.classList.remove("form-hidden");
      lostPasswordForm.classList.add("form-hidden");
  	});
  });

lostPassBtn.forEach((btn) =>{
  	btn.addEventListener("click",() =>{
      registerForm.classList.add("form-hidden");
      loginForm.classList.add("form-hidden");
      lostPasswordForm.classList.remove("form-hidden");
  	});
  });

//API link = https://masai-api-mocker.herokuapp.com/
    //register URL = https://masai-api-mocker.herokuapp.com/auth/register
    // login url = https://masai-api-mocker.herokuapp.com/auth/login


async function Register(e){
    try{
        e.preventDefault();
        var register_detail={
            name:document.querySelector("#name").value,
            email:document.querySelector("#email").value,
            username:document.querySelector("#user").value,
            password:document.querySelector("#password").value,
            mobile:document.querySelector("#mobile").value,
            description: "hello RTG",
        };

        register_detail=JSON.stringify(register_detail);
        console.log("Register detail:",register_detail)
    }
    catch(error){
        console.log("Error:",error);
    }
    let reg_api=`https://masai-api-mocker.herokuapp.com/auth/register`
    let response=await fetch(reg_api,{
        method:'POST',
        body: register_detail,
        headers:{
            "Content-Type": "application/json",
        },
    });
    let data=await response.json();
    console.log("register Data :",data);
}

async function Login(e){
    try{
        e.preventDefault();
        var login_detail={
            username: document.querySelector("#login-email").value,
            password: document.querySelector("#login-password").value,
        };
        login_detail=JSON.stringify(login_detail);
        console.log("Login Detail:",login_detail);

        let login_api='https://masai-api-mocker.herokuapp.com/auth/login'
        let response1=await fetch(login_api,{
            method:'POST',
            body: login_detail,
            headers:{
                "Content-Type" : "application/json",
            },
        });
        let data1=await response1.json();
        console.log("Data1 : ",data1);
    }
    catch(error){
        console.log("Error Login:",error);
    }
}