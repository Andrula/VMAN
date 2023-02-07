function myAlert(){
    alert('You have activated dark mode for virtual manager!');
    var head = document.getElementsByTagName('HEAD')[0];
    var link = document.createElement('link');
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "/css/light-mode.css";
    head.appendChild(link);
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('darkMode').addEventListener('click', myAlert);
});

