let loadData = function(name, lnam, emai, addr, city, stat, zip){
    setValue('name', name);
    setValue('lname', lnam);
    setValue('email', emai);
    setValue('address', addr);
    setValue('city', city);
    setValue('state', stat);
    setValue('zip', zip);
}

let setValue = function(id, value){
    document.getElementById(id).innerText = value;
}

window.onload = function () {
    let url = window.location.href;
    console.log(url);
    let urlObj = new URL(url);
    var name = urlObj.searchParams.get("n");
    var lnam = urlObj.searchParams.get("l");
    var emai = urlObj.searchParams.get("e");
    var addr = urlObj.searchParams.get("a");
    var city = urlObj.searchParams.get("c");
    var stat = urlObj.searchParams.get("s");
    var zip = urlObj.searchParams.get("z");

    loadData(name, lnam, emai, addr, city, stat, zip);
}