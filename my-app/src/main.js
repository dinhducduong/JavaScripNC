import Navigo from "navigo";
import Ban from "./components/banner";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";


const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#header").innerHTML = Header.render();
    
    document.querySelector("#main").innerHTML = content;

    document.querySelector("#footer").innerHTML = Footer.render();
    document.querySelector("#ban").innerHTML = Ban.render();
    
}
router.on({
    "/": () => {
        print(Home.render());
    },
    "/tuyensinh": () => {
        print("Trang tuyển sinh");
    },
    "/daotao": () => {
        print("Trang chương trình đào tạo");
    },
    "/gocsinhvien": () => {
        print("Trang sinh viên");
    },
    "/tuyendung": () => {
        print("Tuyển dụng");
    },
    "/detail/:id": ({ data }) => {
        const { id } = data;
        print(DetailPage.render(id));
    },
   
});
router.resolve();