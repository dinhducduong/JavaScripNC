import Footer from "../components/footer";
import Header from "../components/header";

const HomePage = {
  render() {
    return /*html*/`
        <header class="">
        ${Header.render()}
      </header>
      <section class="banner lg:w-auto">
        <img src="./images/Banner_1-1.jpg">
      </section>
      <main class="bg-rose-300">
        <div class="grid grid-cols-2 px-28 pt-24 pb-10">
          <div class="read-more justify-items-center mx-auto leading-9">
            <h3 class="text-5xl text-white font-bold">SON MÔI</h3>
            <p class="text-2xl text-white font-light">Đẹp mà không sâu sắc thì vô nghĩa
              Môi mà không màu sắc thì vô hồn</p>
            <div class="py-6">
              <a class="border p-2 text-xl text-white font-light hover:bg-black" href="">TÌM HIỂU THÊM</a>
            </div>
          </div>
          <div class="grid grid-cols-2 justify-self-end gap-10">
            <div class="item">
              <a href=""><img src="./images/keepmeinlove_bottle.jpg" width="280"></a>
              <a href="">
                <div class="item-content text-white text-2xl items-center">
                  <h1 class="text-3xl py-28">ầdasdas</h1>
                  <span>2435$</span>
                </div>
              </a>
            </div>
            <div class="item">
              <a href=""><img src="./images/keepmeinlove_bottle.jpg" width="280"></a>
              <a href="">
                <div class="item-content text-white text-2xl items-center">
                  <h1 class="text-3xl py-28">ầdasdas</h1>
                  <span>2435$</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="px-28 pb-20">
          <div class="grid grid-cols-4 justify-self-end gap-10">
            <div class="item">
              <a href=""><img src="./images/keepmeinlove_bottle.jpg" width="280"></a>
              <a href="">
                <div class="item-content text-white text-2xl items-center">
                  <h1 class="text-3xl py-28">ầdasdas</h1>
                  <span>2435$</span>
                </div>
              </a>
            </div>
            <div class="item">
              <a href=""><img src="./images/keepmeinlove_bottle.jpg" width="280"></a>
              <a href="">
                <div class="item-content text-white text-2xl items-center">
                  <h1 class="text-3xl py-28">ầdasdas</h1>
                  <span>2435$</span>
                </div>
              </a>
            </div>
            <div class="item">
              <a href=""><img src="./images/keepmeinlove_bottle.jpg" width="280"></a>
              <a href="">
                <div class="item-content text-white text-2xl items-center">
                  <h1 class="text-3xl py-28">ầdasdas</h1>
                  <span>2435$</span>
                </div>
              </a>
            </div>
            <div class="item">
              <a href=""><img src="./images/keepmeinlove_bottle.jpg" width="280"></a>
              <a href="">
                <div class="item-content text-white text-2xl items-center">
                  <h1 class="text-3xl py-28">ầdasdas</h1>
                  <span>2435$</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer class="footer bg-black text-white px-28">
        ${Footer.render()}
      </footer>`;
  },
};
export default HomePage;
