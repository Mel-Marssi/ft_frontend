import * as Render from "./LoadingPages.js";
const Router = {
  init: () => {
    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", (event) => {
        let route = link.getAttribute("href");
        event.preventDefault();
        Router.navigateTo(route, true);
      });
    });
	// window.addEventListener("popstate", event => {
	//   Router.navigateTo("/LoginPage/", false);
	//   // console.log(event.state.route);
	// });
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
        Render.Load_SignForm();
        break;
    case "/forget-password/":
      Render.Load_ForgetPassword();
      break;
	default:
		console.log("Route not found");
        break;
    }
  },
};

export default Router;
