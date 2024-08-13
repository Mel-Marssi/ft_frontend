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
      history.pushState( "LoginPage" , null, "LoginPage");
      document.querySelector(".sign_form").hidden = true;
      signInForm.classList.remove("section_reverse");
    }, 700);
  });
}
export function Load_LoginPage() {
  document.body.innerHTML = `
	    <section class="my-container" >
      <img
      class="my-character"
      src="./imageLandscape/character.png"
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
      <!-- <div class="close_range1"></div>
      <div class="close_range2"></div>
      <div class="close_range3"></div> -->
      <div>
        <img class="exit" src="./imageLandscape/exit.png" alt="exit button" />
      </div>
      <div class="section">
        <div class="container">
          <div class="row full-height justify-content-center">
            <div class="col-12 text-center align-self-center py-5">
              <div class="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 class="mb-0 pb-3">
                  <span>Log In </span><span>Sign Up</span>
                </h6>
                <input
                class="checkbox"
                type="checkbox"
                id="reg-log"
                name="reg-log"
                />
                <label for="reg-log"></label>
                <div class="card-3d-wrap mx-auto">
                  <div class="card-3d-wrapper">
                    <div class="card-front">
                      <div class="center-wrap">
                        <div class="section text-center">
                          <div class="otherWay">
                            <h3 class="mb-2 pb-3 loginHeader">Log In With:</h3>
                            <div class="button">
                              <img
                                src="imageLandscape/google.png"
                                alt="google"
                                class="LogoGoogle"
                                />
                                <img
                                src="imageLandscape/42.png"
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
                            <a href="/forget-password/" class="link">Forgot your password?</a>
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
  // Router.go("/Load_LoginPage/", true);
  document.querySelector("button").addEventListener("click", (event) => {
    event.preventDefault();
    Router.navigateTo("/sign-in", true);
  });
  close_button();
  
}


export function Load_SignForm() {
  let blurEffect = document.querySelector(".my-container");
  blurEffect.style.animation = "blurEffect 1s 1";
  blurEffect.style.filter = "blur(10px)";
  let signInForm = document.querySelector(".sign_form");
  signInForm.hidden = false;
}

export function Load_ForgetPassword() {
document.body.innerHTML = `
   <section class="forget_password" >
      <!-- Password Reset 1 - Bootstrap Brain Component -->
      <div class="bg-light py-3 py-md-5">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
              <div class="bg-white p-4 p-md-5 rounded shadow-sm">
                <div class="row gy-3 mb-5">
                  <div class="col-12">
                    <div class="text-center">
                      <a href="#!">
                        <img
                          src="./assets/img/bsb-logo.svg"
                          alt="BootstrapBrain Logo"
                          width="175"
                          height="57"
                        />
                      </a>
                    </div>
                  </div>
                  <div class="col-12">
                    <h2
                      class="fs-6 fw-normal text-center text-secondary m-0 px-md-5"
                    >
                      Provide the email address associated with your account to
                      recover your password.
                    </h2>
                  </div>
                </div>
                <form action="#!">
                  <div class="row gy-3 gy-md-4 overflow-hidden">
                    <div class="col-12">
                      <label for="email" class="form-label"
                        >Email <span class="text-danger">*</span></label
                      >
                      <div class="input-group">
                        <span class="input-group-text">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-envelope"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
                            />
                          </svg>
                        </span>
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          id="email"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="d-grid">
                        <button class="btn btn-primary btn-lg" type="submit">
                          Reset Password
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div class="row">
                  <div class="col-12">
                    <hr class="mt-5 mb-4 border-secondary-subtle" />
                    <div class="d-flex gap-4 justify-content-center">
                      <a href="#!" class="link-secondary text-decoration-none"
                        >Log In</a
                      >
                      <a href="#!" class="link-secondary text-decoration-none"
                        >Register</a
                      >
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
  Router.go("/Load_ForgetPassword/", true);
}
