let loginsignup=document.querySelector("#dayrecipe");
loginsignup.addEventListener("click",function(){
    window.location.href="loginsignup.html"
})

let home=document.querySelector("#random");
home.addEventListener("click",function(){
    window.location.href="welcomepage.html"
})

let recipelist=document.querySelector(".recipelist");
recipelist.addEventListener("click",function(){
    alert("Login is Required.");
    window.location.href="loginsignup.html";
})