import Navigo from "navigo";
import Header from "./src/components/header";
import Footer from "./src/components/footer";


const router = new Navigo("/", {linksSelector: "a"});

const print = (content) => {
  document.querySelector("#header").innerHTML = Header.render();
  document.querySelector("#app").innerHTML = content;
  document.querySelector("#footer").innerHTML = Footer.render();
}
router.on({
  "/": () => {
    print("Home Page");
  },
  "/about": () => {
    print("about");
  },
});
router.resolve();