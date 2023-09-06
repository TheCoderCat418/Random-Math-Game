let url = new URL(window.location.href);
let param = url.searchParams;
document.getElementById("equation-types").innerHTML = param.get("equations");
