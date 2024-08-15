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
    window.addEventListener("popstate", (event) => {
      Router.navigateTo(event.state.route, false);
      console.log(event.state.route);
    });
  },
  navigateTo: (route, addHistory = true) => {
    if (addHistory) {
      history.pushState({ route }, null, route);
      window.addEventListener("popstate", (event) => {
        Router.navigateTo(event.state.route, false);
        console.log(event.state.route);
      });
    }
    console.log(route);
    switch (route) {
      case "/LoginPage":
        Render.Load_LoginPage();
        break;
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
