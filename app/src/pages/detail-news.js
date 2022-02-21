import { get } from "../api/news";

import Footer from "../components/footer";
import Header from "../components/header";
const Detail_news = {

    async render(id) {
        const { data } = await get(id);
        return /*html*/`
        <header class="">
        ${Header.render()}
        </header>
        <main class="bg-red-200" id="main">
        <div class="px-28">
            <div class="title pt-10 text-right">
                <a href="/news">Quay lại</a>
                <hr class="">
            </div>

            <div class="content-title">
                <h2 class="font-bold text-3xl pt-10">${data.title}</h2>
                <p class="py-10">${data.desc}</p>
            </div>
        </div>
        <main>
        <footer class="footer bg-black text-white px-28">
        ${Footer.render()}
      </footer>
      `;
    }, afterRender() {
        Header.afterRender();
    }
};
export default Detail_news;
