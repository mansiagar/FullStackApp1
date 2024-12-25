import { baseUrl } from "./baseUrl";

let form = document.getElementById("Signupform");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let username = form.Username.value;
  let email = form.email.value;
  let password = form.password.value;
  let number = form.number.value;
  let userObj = { username, email, password, number };
  console.log(userObj);

  fetch(`${baseUrl}/user`)
    .then((res) => res.json())
    .then((data) => {
      let user = data.filter((el, i) => el.email == email);
      if (user.length != 0) {
        alert("already regitered");
        window.location.href = "/Login.html";
      } else {
        fetch(`${baseUrl}/user`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userObj),
        }).then(() => {
          alert("Signup successfull");
          window.location.href = "/Login.html";
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
