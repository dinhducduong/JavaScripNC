import Footer from "../components/footer";
import Header from "../components/header";
import { getAll } from "../api/products";
import { data } from "autoprefixer";
const HomePage = {
  async render() {
    const { data } = await getAll();
    const numberFormat = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
    return /*html*/`
        <header class="">
        ${Header.render()}
      </header>

    <main class="bg-red-200" id="main">
    <section class="banner lg:w-auto">
      <img src="./images/Banner_1-1.jpg">
    </section>
      <div class="grid grid-cols-2 pt-24 pb-10 px-28">
        <div class="read-more justify-items-center mx-auto leading-9">
          <h3 class="text-5xl text-white font-bold">SON MÔI</h3>
          <p class="text-2xl text-white font-light">Đẹp mà không sâu sắc thì vô nghĩa
            Môi mà không màu sắc thì vô hồn</p>
          <div class="py-6">
            <a class="border p-2 text-xl text-white font-light hover:bg-black" href="">TÌM HIỂU THÊM</a>
          </div>
        </div>
        <div class="grid grid-cols-2 justify-self-end gap-10">
           ${data.slice(0, 2).map((item) => `
           <div class="item">
            <a href=""><img src="${item.img}"></a>
            <a href="/product/detail-product/${item.id}">
              <div class="item-content text-white text-2xl items-center">
                <h1 class="text-3xl py-28">${item.title}</h1>
                <span>${numberFormat.format(item.price)}</span>
              </div>
            </a>
          </div>
           `).join("")}
          
        </div >
      </div >

  <div class="px-28 pb-20">
    <div class="grid grid-cols-4 justify-self-end gap-10">
      ${data.map((item) => `
           <div class="item">
            <a href=""><img src="${item.img}"></a>
            <a href="/product/detail-product/${item.id}">
              <div class="item-content text-white text-2xl items-center">
                <h1 class="text-3xl py-28">${item.title}</h1>
                <span>${item.price}</span>
              </div>
            </a>
          </div>
           `).join("")}
    </div>
  </div>
        </main >
  <footer class="footer bg-black text-white px-28">
    ${Footer.render()}
  </footer>`;
  },
  afterRender() {
    Header.afterRender();
  }
};
export default HomePage;
