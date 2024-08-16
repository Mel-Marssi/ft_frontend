import * as Render from "./LoadingPages.js";
const Router = {
  init: () => {
    Router.attachLinkListeners();
    window.addEventListener("popstate", (event) => {
      Router.navigateTo(event.state.route, false);
      console.log(event.state.route);
    });
  },
  navigateTo: (route, addHistory = true) => {
    if (addHistory) {
      console.log(route);
      history.pushState({ route }, null, route);
      // window.addEventListener("popstate", (event) => {
      //   Router.navigateTo(event.state.route, false);
      //   console.log(event.state.route);
      // });
    }
    console.log(route);
    switch (route) {
      case "/LoginPage":
        Render.Load_LoginPage();
        break;
      case "/sign-in":
        Render.Load_SignForm();
        break;
      case "/forget-password":
        Render.Load_ForgetPassword();
        break;
      default:
        console.log("Route not found");
        break;
    }
    Router.attachLinkListeners();
  },
  attachLinkListeners: () => {
    document.querySelectorAll("a").forEach((link) => {
      link.removeEventListener("click", Router.handleLinkClick); // Remove existing listener
      link.addEventListener("click", Router.handleLinkClick); // Attach new listener
    });
  },
  handleLinkClick: (event) => {
    console.log("click");
    event.preventDefault();
    let route = event.currentTarget.getAttribute("href");
    Router.navigateTo(route, true);
  }
};

export default Router;
