import Navigo from "navigo";
import HomePage from "./pages/homePage";
import Login from "./pages/signin";
import Register from "./pages/signup";
import Dashboard from "./pages/admin/dashboard";
import News from "./pages/admin/manager-news/news";
import ProductList from "./pages/admin/manager-product/product";
import Add_product from "./pages/admin/manager-product/add-product";
import Edit_product from "./pages/admin/manager-product/edit-product";
import Add_category from "./pages/admin/manager-cate/add-category";
import Edit_category from "./pages/admin/manager-cate/edit-category";
import CategoryList from "./pages/admin/manager-cate/category";
import Add_news from "./pages/admin/manager-news/add-news";
import Edit_news from "./pages/admin/manager-news/edit-news";
import newsList from "./pages/news";
import Detail_news from "./pages/detail-news";
import Introduce from "./pages/introduce";
import Product from "./pages/product";
import Detail_product from "./pages/detail-product";
import Cart from "./pages/cart";
import User from "./pages/admin/manager-user/user";


const router = new Navigo("/", { linksSelector: "a", hash: true });


const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) await content.afterRender(id);
}
router.on('/admin/*/', () => { }, {
    before(done, match) {
        const userId = JSON.parse(localStorage.getItem('user')).user.role;

        if (localStorage.getItem('user')) {
            if (userId === 1) {
                // render dựa trên router
                done();
            } else {
                document.location.href = "/"
            }
        } else {
            document.location.href = "/"
        }

    }
});

router.on({
    "/": () => {
        print(HomePage);
    },
    "/signin": () => {
        print(Login);
    },
    "/signup": () => {
        print(Register);
    },
    "/introduce": () => {
        print(Introduce);
    },
    "/product": () => {
        print(Product);
    },
    "/product/detail-product/:id": ({ data }) => {
        print(Detail_product, data.id);
    },
    "/cart": () => {
        print(Cart);
    },
    "/news": () => {
        print(newsList);
    },
    "/news/detail-news/:id": ({ data }) => {
        print(Detail_news, data.id);
    },
    "/admin/dashboard": () => {
        print(Dashboard);
    },
    "/admin/dashboard/news": () => {
        print(News);
    },
    "/admin/dashboard/news/add": () => {
        print(Add_news);
    },
    "/admin/dashboard/news/edit/:id": ({ data }) => {
        print(Edit_news, data.id);
    },
    "/admin/dashboard/product": () => {
        print(ProductList);
    },
    "/admin/dashboard/product/add": () => {
        print(Add_product);
    },
    "/admin/dashboard/product/edit/:id": ({ data }) => {
        print(Edit_product, data.id);
    },
    "/admin/dashboard/category": () => {
        print(CategoryList);
    },
    "/admin/dashboard/category/add": () => {
        print(Add_category);
    },
    "/admin/dashboard/category/edit/:id": ({ data }) => {
        print(Edit_category, data.id);
    },
    "/admin/dashboard/user": () => {
        print(User);
    },
    "/admin/dashboard/user/edit/:id": ({ data }) => {
        print(Edit_category, data.id);
    },

});
router.resolve();