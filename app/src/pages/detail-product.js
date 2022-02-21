import Footer from "../components/footer";
import Header from "../components/header";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { get } from "../api/products";
import { getAll } from "../api/products";
import { gets } from "../api/category";
import { addTocart } from "../../utils/cart";
const Detail_product = {
  async render(id) {
    const { data } = await get(id);
    const d = await getAll();
    const numberFormat = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });

    return /*html*/`
    <header class="">
        ${Header.render()}
      </header>
      <main class="bg-red-200" id="main">
        <div class="detail lg:grid lg:grid-cols-2 px-28 py-11">

        <div class="">
          <img src="${data.img}" width="80%">
        </div>
        <div class="">
          <div class="title">
            <h1 class="text-4xl font-bold pb-3">${data.title}</h1>
          </div>
          <div class="price">
            <h5 class="text-2xl pb-10">${numberFormat.format(data.price)}</h5>
          </div>
          <div class="add-cart">
            <input id="inputValue" class="w-14 h-10 border-black text-center" type="number" value="1" min="1">
            <button id="btnAddToCart" class="border bg-black text-white h-10 w-40 hover:bg-red-400" type="submit">THÊM VÀO GIỎ</button>
          </div>
          <div class="cate py-8">
            <span class="">Danh mục: ${name}</span>
          </div>
          <div class="desc">
            <h2 class="text-bold text-3xl">Mô tả</h2>
            <p class="py-3">${data.desc}</p>
            
          </div>
        </div>
      </div>
      <div class="product-cate bg-red-200">
        <div class="title py-14">
          <h1 class="text-4xl font-bold pb-3 text-white text-center">CÁC SẢN PHẨM KHÁC</h1>
        </div>
        <div class="px-28 flex flex-wrap">
          ${d.data.map((item) => `
           <a href="/product/detail-product/${item.id}" class="">
            <div class="pr-8">
              <div class="">
                <img src="${item.img}" width="280">
              </div>
              <div class="title text-center py-3 text-xl">
                <h1 class="font-medium">${item.title}</h1>
                <span class="">${item.price} ₫</span>
              </div>
              <div class="add-cart pb-11 text-center">
                <button id="btnAddToCart" class="border bg-black text-white h-10 w-52 hover:bg-red-300 border-black">XEM CHI TIẾT</button>
              </div>
            </div>
          </a>
           `).join("")}
          
          
        </div>
      </div>
      </main>
      <footer class="footer bg-black text-white px-28">
        ${Footer.render()}
      </footer>
      `;
  },
  afterRender(id) {
    const btnAddToCart = document.querySelector('#btnAddToCart');
    const inputValue = document.querySelector('#inputValue');
    btnAddToCart.addEventListener('click', async () => {
      const { data } = await get(id);
      addTocart({ ...data, quantity: inputValue.value ? +inputValue.value : 1 }, () => {
        toastr.success("Đã thêm");
      })
    })
    Header.afterRender();
  }

};
export default Detail_product;
