import Router from "./Router.js";

function close_button() {
  let exit_button = document.querySelector(".exit");
  exit_button.addEventListener("click", function () {
    let signInForm = document.querySelector(".section");
    signInForm.classList.add("section_reverse");
    let blurEffect = document.querySelector(".my-container");
    blurEffect.style.animation = "RemoveBlurEffect 1s 1";
    blurEffect.style.filter = "blur(0px)";
    setTimeout(function () {
      Router.navigateTo("/LoginPage", true);
      signInForm.classList.remove("section_reverse");
    }, 700);
  });
}
export function Load_LoginPage() {
  document.body.innerHTML = `
	    <section class="my-container" >
      <img
      class="my-character"
      src="../imageLandscape/character2.png"
      alt="Let's play"
      />
      <div class="green-box"></div>
      <div class="green-box2"></div>
      <div class="white-bar"></div>
      <div class="white-bar2"></div>
      <div class="texte-game">
        <span>Get Ready</span>
        <span>To Play</span>
        <span>and chat with your friends</span>
        <div>
          <button type="button" id="sign-in" class="button-box">Sign in</button>
        </div>
      </div>
      <div class="decoration1"></div>
      <div class="decoration3"></div>
    </section>
    // Loading the sign-in page
        <section class="sign_form" hidden>

      <div>
        <img class="exit" src="../imageLandscape/exit.png" alt="exit button" />
      </div>
      <div class="section">
        <div class="container">
          <div class="row full-height justify-content-center">
            <div class="col-12 text-center align-self-center py-5">
              <div class="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 class="mb-0 pb-3">
                  <span>Log In </span><span>Sign Up</span>
                </h6>
                <input class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label for="reg-log">a</label>
                <div class="card-3d-wrap mx-auto">
                  <div class="card-3d-wrapper">
                    <div class="card-front">
                      <div class="center-wrap">
                        <div class="section text-center">
                          <div class="otherWay">
                            <h3 class="mb-2 pb-3 loginHeader">Log In With:</h3>
                            <div class="button">
                              <img
                                src="../imageLandscape/google.png"
                                alt="google"
                                class="LogoGoogle"
                                />
                                <img
                                src="../imageLandscape/42.png"
                                alt="42"
                                class="Logo42"
                                />
                              </div>
                            </div>
                            
                            <h4 class="mb-2 pb-3 OrHeader">OR</h4>
                            
                            <div class="form-group">
                              <input
                              type="email"
                              name="logemail"
                              class="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              autocomplete="off"
                            />
                            <i class="input-icon uil uil-at"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input
                            type="password"
                            name="logpass"
                            class="form-style"
                            placeholder="Your Password"
                            id="logpass"
                            autocomplete="off"
                            />
                            <i class="input-icon uil uil-lock-alt"></i>
                          </div>
                          <a href="/profil/" class="btn mt-4">submit</a>
                          <p class="mb-0 mt-4 text-center">
                            <a href="/forget-password" class="link">Forgot your password?</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="card-back">
                      <div class="center-wrap">
                        <div class="section text-center">
                          <h4 class="mb-4 pb-3">Sign Up</h4>
                          <div class="form-group">
                            <input
                              type="text"
                              name="logname"
                              class="form-style"
                              placeholder="Your Full Name"
                              id="logname"
                              autocomplete="off"
                              />
                              <i class="input-icon uil uil-user"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input
                            type="text"
                            name="logname"
                              class="form-style"
                              placeholder="Your Username"
                              id="logname"
                              autocomplete="off"
                            />
                            <i class="input-icon uil uil-user"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input
                            type="email"
                            name="logemail"
                              class="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              autocomplete="off"
                              />
                              <i class="input-icon uil uil-at"></i>
                            </div>
                            <div class="form-group mt-2">
                              <input
                              type="password"
                              name="logpass"
                              class="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autocomplete="off"
                              />
                              <i class="input-icon uil uil-lock-alt"></i>
                            </div>
                            <a href="/profil/" class="btn mt-4">submit</a>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
	`;
  // Router.go("/LoginPage/", true);
  document.querySelector("button").addEventListener("click", (event) => {
    event.preventDefault();
    Router.navigateTo("/sign-in", true);
  });
  close_button();
}

export function Load_SignForm() {
  if (
    document.querySelector(".my-container") == null ||
    document.querySelector(".forget_password") != null
  ) {
    Load_LoginPage();
  }
  let blurEffect = document.querySelector(".my-container");
  blurEffect.style.animation = "blurEffect 1s 1";
  blurEffect.style.filter = "blur(10px)";
  let signInForm = document.querySelector(".sign_form");
  signInForm.hidden = false;
}

export function Load_ForgetPassword() {
  document.querySelector(".section").innerHTML = `
            <section class="forget_password">
          <div class="container">
            <div class="row">
                <div class="row">
                    <div class="col-md-4 col-md-offset-4">
                        <div class="panel panel-default">
                            <div class="panel-body">
                                <div class="text-center">
                                  <h3><i class="fa fa-lock fa-4x"></i></h3>
                                  <h2 class="text-center">Forgot Password?</h2>
                                  <p>You can reset your password here.</p>
                                    <div class="panel-body">
                                      
                                      <form class="form">
                                        <fieldset>
                                          <div class="form-group">
                                            <div class="input-group">
                                              <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                                              
                                              <input id="emailInput" placeholder="email address" class="form-control" type="email" oninvalid="setCustomValidity('Please enter a valid email address!')" onchange="try{setCustomValidity('')}catch(e){}" required="">
                                            </div>
                                          </div>
                                          <div class="form-group">
                                            <input class="btn btn-lg btn-primary btn-block subButton" value="Send My Password" type="submit">
                                          </div>
                                        </fieldset>
                                      </form>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

  // Router.go("/Load_ForgetPassword", true);
}
