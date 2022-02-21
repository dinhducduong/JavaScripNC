import { getAll } from "../api/news";
import Footer from "../components/footer";
import Header from "../components/header";
const newsList = {
    async render() {
        const { data } = await getAll();
        return /*html*/`
        <header class="">
        ${Header.render()}
        </header>
        <main class="bg-red-200" id="main">
            <div class="px-28">
                <div class="title py-14">
                    <h1 class="font-bold text-4xl text-right">TIN TỨC</h1>
                </div>
                <div class="lg:flex xl:flex md:inline-flex sm:inline-flex">
                    ${data
                .map(
                    (post) => ` 
                        
                        <div class="px-5">
                            <img src="${post.img}" width="310">
                            <div class="px-4 py-10">
                                <h3 class="font-bold text-black text-2xl py-5">${post.title}</h3>
                                <p>${post.desc}</p>
                                <div class="py-3">
                                    <a href="news/detail-news/${post.id}"
                                        class="text-right hover:text-blue-600 border border-black bg-black text-white p-1">Xem
                                        thêm</a>
                                </div>
                            </div>
                        </div>
                        
                    `)
                .join("")}
                </div>
            </div>
        </main>
            
        <footer class="footer bg-black text-white px-28">
        ${Footer.render()}
      </footer>
      `;
    }, afterRender() {
        Header.afterRender();
    }
};
export default newsList;
