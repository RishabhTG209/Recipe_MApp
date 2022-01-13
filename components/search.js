let arr=JSON.parse(localStorage.getItem("clickedrecipe"))||[];
console.log("hey hey hey: ",arr);
let resultdiv=document.querySelector("#result");

recipe(arr);
function recipe(elem){

            let divbox=document.createElement("div");
            let divname=document.createElement("div");
            let dish=document.createElement("p");
            dish.textContent="Dish Name : ";
            dish.setAttribute("class","dish")
            let name=document.createElement("p");
            name.textContent=elem.strMeal;
            name.setAttribute("class","name");
            divname.append(dish,name);
    
            let instruction=document.createElement("p");
            instruction.textContent=elem.strInstructions;
            instruction.setAttribute("class","instruction");
            
      
            let image=document.createElement("img");
            image.src=elem.strMealThumb;
            image.setAttribute("class","dishphoto");
      
            let divcat=document.createElement("div");
            let cat=document.createElement("p");
            cat.textContent=elem.strCategory
            cat.setAttribute("class","cat");
            let category=document.createElement("p")
            category.textContent="Category : ";
            category.setAttribute("class","category")
            divcat.append(category,cat);
            
            let divnative=document.createElement("div");
            let nativeplace=document.createElement("p")
            nativeplace.textContent="Native Country : "
            nativeplace.setAttribute("class","nativeplace")
            let native=document.createElement("p");
            native.textContent=elem.strArea;
            native.setAttribute("class","native");
            divnative.append(nativeplace,native);
    
            let divphotoname=document.createElement("div");
            divphotoname.append(divbox,image);
            divphotoname.setAttribute("class","divphotoname");
    
            divbox.append(divname,divnative,divcat);
            divbox.setAttribute("class","divbox");
            divname.setAttribute("class","divname");
            divnative.setAttribute("class","divnative");
            divcat.setAttribute("class","divcat");
    
            let video=document.createElement("iframe");
            video.src=elem.strYoutube;
            video.setAttribute('allowfullscreen',"true");
            video.setAttribute("class","ytvideo");
            
            let divsource=document.createElement("div")
            let source=document.createElement("p");
            source.textContent=elem.strSource;
            source.setAttribute("class","sourcelink");
            source.addEventListener("click",function(){
                window.location.href=elem.strSource;
            })
            if(source=="" || source==null){
                resultdiv.append(divphotoname,instruction,video);
            }
            else{
                let formore=document.createElement("p")
                formore.textContent="For More Information you can visit this link : "
                divsource.append(formore,source);
                divsource.setAttribute("class","divsource");
                resultdiv.append(divphotoname,instruction,video,divsource);
            }
}