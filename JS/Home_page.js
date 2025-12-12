let header = document.getElementById('header-js');
let div = document.createElement('div');
let logoutButton = document.createElement('button');
div.id = "dropDown";
logoutButton.id = "logout_button";
logoutButton.innerHTML = "Logout";
header.appendChild(div);
div.appendChild(logoutButton);


logoutButton.addEventListener('click', function() {
    window.location.href = "login.html";
});