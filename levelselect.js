function colorDarken(levelColor, id){
    document.getElementById(id).style.backgroundColor = levelColor;
}
function goToLevel(levelName){
    let url = new URL("game.html", window.location.href);
    url.searchParams.set("diff", levelName)
    window.location.href = url.href;
}