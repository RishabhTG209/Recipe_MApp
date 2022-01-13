let recipewaiting;
let check=document.querySelector("#check");

function debounce(func,delay){
    if(recipewaiting){
        clearTimeout(recipewaiting);
    }
    recipewaiting=setTimeout(function(){
        func();
    },delay);
}

async function searchrecipe(){
    check.innerHTML="";
    let searched=document.querySelector("#searchinput").value;
    try{
        let lresponse=await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${searched}`
        )
        let ldata=await lresponse.json();
        let meallist=ldata.meals;
        appendSearched(meallist)
        // console.log("LDATA:",ldata);
    }
    catch(error){
        console.log("Error:",error);
    }
}

const appendSearched=(meal)=>{
    console.log("hey baby:",meal);

    meal.forEach(function(elem){
        let divlist=document.createElement("div");
        divlist.setAttribute("class","divlist")
        let dishlistname=document.createElement("p");
        dishlistname.textContent=elem.strMeal;
        dishlistname.setAttribute("class","dishlistname");

        divlist.addEventListener("click", function () {
            console.log("hey3: ",elem);
            showData(elem);
        });
        document.querySelector("#searchinput").addEventListener("keypress",function(){
            if(event.key=='Enter'){
                    showData(elem);
                }
        });
        let listimage=document.createElement("img");
        listimage.src=elem.strMealThumb;
        listimage.setAttribute("class","dishlistphoto");
        divlist.append(listimage,dishlistname);
        check.append(divlist);
    });
};

function showData(data){
    localStorage.setItem("clickedrecipe",JSON.stringify(data));
    window.location.href="search.html";
}