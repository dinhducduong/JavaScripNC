import Footer from "../components/footer";
import Header from "../components/header";
import { getAll } from "../api/products";

const Product = {
  async render() {
    const { data } = await getAll();
    const numberFormat = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
    return /*html*/ `
        <header class="">
        ${Header.render()}
      </header>
      
    <main class="bg-red-200" id="main">
    <div class="product-cate md:flex-wrap ml:inline-flex px-28">
            <div class="title py-14">
              <h1 class="text-3xl font-bold pb-3 text-white">SẢN PHẨM</h1>
            </div>
            <div class="flex flex-wrap">
            ${data.map((item) => `
                <a href="/product/detail-product/${item.id}" class="">
                      <div class="pr-8">
                        <div class="">
                          <img src="${item.img}" width="280" >
                        </div>
                        <div class="title text-center py-3 text-xl">
                          <h1 class="font-medium">${item.title}</h1>
                          <span class="">${numberFormat.format(item.price)}</span>
                        </div>
                        <div class="add-cart pb-11 text-center">
                          <button class="border bg-black text-white h-10 w-52 hover:bg-red-300 border-black" type="submit">XEM CHI TIẾT</button>
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

        
        
        `
  },
  afterRender() {
    Header.afterRender();
  }
}
export default Product;