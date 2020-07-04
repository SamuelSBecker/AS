var text = document.getElementById('Home').textContent;
document.getElementById('view').innerHTML = text;
var view = document.getElementById('view');
function onClick(template){
    var text = document.getElementById(template).textContent;
    view.innerHTML = text;
}
function Leitura(template){
    var text = document.getElementById(template).textContent;
    view.innerHTML = text;
}
function News(template){
    var text = document.getElementById(template).textContent;
    view.innerHTML = text;
}