
const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existing = document.getElementById("existing");

// Check for saved credentials
const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

if (savedUsername && savedPassword) {
  existing.style.display = "block";
}

// Submit form
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const user = username.value;
  const pass = password.value;

  alert(`Logged in as ${user}`);

  if (checkbox.checked) {
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    existing.style.display = "block";
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");

    existing.style.display = "none";
  }
});

// Login as existing user
existing.addEventListener("click", function() {
  const savedUser = localStorage.getItem("username");

  if (savedUser) {
    alert(`Logged in as ${savedUser}`);
  }
});
