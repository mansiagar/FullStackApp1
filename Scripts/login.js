let form = document.getElementById("Loginform");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let email = form.email.value;
  let password = form.password.value;
  let userObj = { email, password };
  console.log(userObj);

  fetch("http://localhost:3000/user")
    .then((res) => res.json())
    .then((data) => {
      let user = data.filter((el, i) => el.email == email);

      if (user.length != 0) {
        // check password

        if (user[0].password === password) {
          alert("login successful");
          window.location.href = "/Todos.html";
        } else {
          alert("wrong password");
        }
      } else {
        //user not present
        alert("user not present ");
        window.location.href = "/Signup.html";
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
