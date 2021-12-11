let loadData = function(name, amou, desc){
    setValue('name', name);
    setValue('amount', amou);
    setValue('description', desc);
}

let setValue = function(id, value){
    document.getElementById(id).innerText = value;
}

window.onload = function () {
    let url = window.location.href;
    console.log(url);
    let urlObj = new URL(url);
    var name = urlObj.searchParams.get("n");
    var amou = urlObj.searchParams.get("a");
    var desc = urlObj.searchParams.get("d");

    loadData(name, amou, desc);
}