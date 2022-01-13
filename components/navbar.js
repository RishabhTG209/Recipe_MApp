function navbar(){
    return `<div id="rightmenu">
                <div id="username"></div>
                <div id="dropdown"><a href="loginsignup.html">LOGOUT</a></div>
            </div>
    <div id="navbar">
    <div id="logo">
        <a href="clonewelcome.html"><img class="mel" src="https://p.kindpng.com/picc/s/36-361987_mels-cooking-logo-woman-cooking-png-transparent-png.png" alt=""></a>
    </div>
    <div id="searchbar">
        <input id="searchinput" type="text" placeholder="Search">
        <p><i class="fas fa-search"></i></p>
    </div>
    <div id="links">
        <p id="landing">Recipe's
        <p id="random">Random Recipe</p>
        <p id="dayrecipe">Recipe of the day</p>
    </div>
</div>`

}

export default navbar


