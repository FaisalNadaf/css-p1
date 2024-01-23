let email;
let password;

function registerUser() {
     email = document.getElementById('email').value;
     password = document.getElementById('password').value;

    var user = {
        email: email,
        password: password,
    };

    console.log(user);
}
