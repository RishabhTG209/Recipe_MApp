fetchinbuilt();
let container=document.querySelector("#container");
async function fetchinbuilt(){
    // container.innerHTML="";
    try{
        for(var i=0;i<20;i++){
            let response=await fetch(
                `https://www.themealdb.com/api/json/v1/1/random.php`
            );
            let data=await response.json();
            let meal=data.meals;
            showMenu(meal);
            console.log("Data : ",data);
        }
    }
    catch(error){
        console.log("Error:",error);
    }
}

const showMenu=(meal)=>{
    meal.forEach((elem) => {
        let name=document.createElement("p");
        name.textContent=elem.strMeal;
        name.setAttribute("class","name");

        let image=document.createElement("img");
        image.src=elem.strMealThumb;
        image.setAttribute("class","dishphoto");
        let clickview=document.createElement("p");
        clickview.textContent="View Recipe..."
        clickview.setAttribute("class","clickview")
        let divphoto=document.createElement("div");
        divphoto.setAttribute("class","divphoto");
        divphoto.append(image,clickview)

        divphoto.addEventListener("click",function(){
            sendRecipe(elem);
        })
        name.addEventListener("click",function(){
            sendRecipe(elem);
        })

        let divbox=document.createElement("div");
        divbox.setAttribute("class","divbox");
        divbox.append(divphoto,name);
        container.append(divbox);

    });
}

function sendRecipe(data){
    localStorage.setItem("clickedrecipe",JSON.stringify(data));
    window.location.href="search.html";
}