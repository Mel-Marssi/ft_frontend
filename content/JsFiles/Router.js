const Router = {
  init: () => {
    document.querySelector("button").addEventListener("click", (event) => {
      let route = "/sign-in";
      event.preventDefault();
	    Router.navigateTo(route, true);
    });
	window.addEventListener("popstate", event => {
	  Router.navigateTo("/content/", false);
	  // console.log(event.state.route);
	});
  // window.addEventListener("beforeunload", (event) => {
  //   event.preventDefault();
  //   Router.navigateTo(window.location.pathname, true);
  //   console.log(window.location.pathname);
  // });
  },
  navigateTo: (route, addHistory = true) => {
    if (addHistory) {
      history.pushState({ route }, null, route);
    }
    else {
      history.replaceState({ route }, null, route );
    }
    switch (route) {
      case "/sign-in":
        let blurEffect = document.querySelector(".my-container");
        blurEffect.style.filter = "blur(10px)";
        let signInForm = document.querySelector(".sign_form");
        signInForm.hidden = false;
        break;
	  case "/content/":
      let blurEffect0 = document.querySelector(".my-container");
      blurEffect0.style.filter = "blur(0px)";
      let signInForm0 = document.querySelector(".sign_form");
      signInForm0.hidden = true;
      break;
	default:
		console.log("Route not found");
        break;
    }
  },
};

export default Router;
