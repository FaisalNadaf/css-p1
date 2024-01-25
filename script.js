
var users = [];

function addUser() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email && password) {
    if (!userExists(email)) {
      users.push({ email, password });
      alert("User registered successfully!");
     
    } else {
      alert("email already registered. Please use a different email.");
    }
  } else {
    alert("Both email and password are required.");
  }
}

function userExists(email) {
  return users.some(user => user.email === email);
}

function loginUser() {
  var email = document.getElementById("loginemail").value;
  var password = document.getElementById("loginpassword").value;

  var user = users.find(user => user.email === email && user.password === password);

  if (user) {
    alert("Login successful!");
  } else {
    alert("Invalid email or password. Please try again.");
  }
}
