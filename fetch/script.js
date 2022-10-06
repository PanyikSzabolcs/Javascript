/*
    Login url: https://reqres.in/api/login
    Body:
    {
      email: "eve.holt@reqres.in",
      password: "ok"
    }

    Users url: https://reqres.in/api/users
*/

var state = [];

document.getElementById("login").onsubmit = function (event) {
    event.preventDefault();
    var email = event.target.elements.email.value;
    var password = event.target.elements.password.value;
    var body = JSON.stringify({
        email: email,
        password: password
    });

    fetch("https://reqres.in/api/login",{
        method: "POST",
        body: body,
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(function(response){
        if (!response.ok) {
            return Promise.reject('login error')
        }
        return response.json();
    })
    .then(function(response){
        return fetch('https://reqres.in/api/users')
    })
    .then(function(response) {
        if (!response.ok) {
            return Promise.reject('users error')
        }
        return response.json()
    })
    .then(function(userPage) {
        console.log(userPage);
        state = userPage.state;
        renderUsers();
    })
    .catch(function(error) {
        console.log(error);
    });
};

function renderUsers(){

}