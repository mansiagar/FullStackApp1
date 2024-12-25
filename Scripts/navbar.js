const navbar = () => {
  let card = `<div id = "nav-container">
          <a href="logo">My Personal App</a>
          <div id= "nav-links">
              <a href="Signup.html">SignUp</a>
              <a href="Login.html">Login</a>
              <a href="Todos.html">Todos</a>
              <a href="Expences.html">Expences</a>

          </div>
      </div>`;

  document.getElementById("nav").innerHTML = card;
};
navbar();
