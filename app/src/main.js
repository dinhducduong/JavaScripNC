import Navigo from "navigo";
import HomePage from "./pages/homePage";
import Login from "./pages/sign-up";
import Register from "./pages/sign-in";
import Dashboard from "./pages/admin/dashboard";
import News from "./pages/admin/manager-news/news";
import Add_news from "./pages/admin/manager-news/add-news";
import Edit_news from "./pages/admin/manager-news/edit-news";
const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    
    document.querySelector("#app").innerHTML = content;
}
const printf = (content_admin) =>{
    document.querySelector("#app_admin").innerHTML = content_admin;

}
router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/sign-up": () => {
        print(Login.render());
    },
    "/sign-in": () => {
        print(Register.render());
    },
    "/admin/dashboard": () => {
        print(Dashboard.render());
    },
    "/admin/dashboard/news": () => {
        printf(News.render());
    },
    "/admin/dashboard/add": () => {
        printf(Add_news.render());
    },
    "/admin/dashboard/edit": () => {
        printf(Edit_news.render());
    },
   
});
router.resolve();