const HomePage = {
    render() {
        return /*html*/`<header class="">
        <div class="header-top bg-black h-20 px-28">
          <div class="mx-auto justify-center text-center py-8">
            <span class="text-white">THƯƠNG HIỆU MỸ PHẨM TRANG ĐIỂM CHUYÊN NGHIỆP ĐẦU TIÊN TẠI VIỆT NAM</span>
          </div>
        </div>
        <div class="header grid grid-cols-3 items-center px-28">
          <div class="flex items-center border rounded-full bg-black h-16 w-52">
            <div class="px-2">
              <i class="fas fa-phone text-4xl px-2 text-red-400"></i>
            </div>
            <div class="text-white">
              <span>tel:0986.989.626</span><br>
              <span>Hotline 24/7</span>
            </div>
          </div>
          <div class="items-center mx-auto">
            <a href=""><img src="./images/lg.jpg"></a>
          </div>
          <div class="auth p-3 text-2xl justify-self-end text-zinc-900">
            <a href="/admin/dashboard">Dashboard</a>
            <a href="/sign-up" class="hover:text-red-400"><i class="far fa-user-circle "></i></a>
            <a href="" class="hover:text-red-400"><i class="fas fa-cart-plus "></i></a>
          </div>
        </div>
        <hr>
        <div class="header-buttom">
          <ul class="justify-center flex text-gray-700">
            <li class="px-10 py-6 rounded-2xl hover:text-black"><a href="">GIỚI THIỆU</a></li>
            <li class="px-10 py-6 rounded-2xl hover:text-black"><a href="">SẢN PHẨM</a></li>
            <li class="px-10 py-6 rounded-2xl hover:text-black"><a href="">CỘNG TÁC VIÊN</a></li>
            <li class="px-10 py-6 rounded-2xl hover:text-black"><a href="">BLOG</a></li>
            <li class="px-10 py-6 rounded-2xl hover:text-black"><a href="">LIÊN HỆ</a></li>
          </ul>
        </div>
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
        <div class="text-center p-5">
          <h2 class="font-bold text-2xl">YÊU THÍCH M.O.I
            ĐĂNG KÝ NGAY!</h2>
          <span>Hãy là người đầu tiên nhận được những cập nhật mới nhất về sản phẩm cũng như những bí quyết làm đẹp của
            M.O.I!</span>
        </div>
        <div class="sub text-center">
          <input class="h-10 w-60 text-black bg-white border-white" type="text" placeholder="Nhập email">
          <button type="submit" class="border-white bg-white text-black w-24 h-10 hover:text-rose-300">JOIN</button>
        </div>
        <div class="grid grid-cols-3 py-5">
          <div class="">
            <h1>M.O.I</h1>
            <span>Địa chỉ: Quảng Ninh</span>
          </div>
          <div class="flex items-center mx-auto">
            <div class="grid grid-rows-2 px-2 py-1">
              <i class="fas fa-envelope-square"></i>
              <i class="fas fa-phone"></i>
            </div>
            <div class="grid grid-rows-2">
              <span>duong@gmail.com</span>
              <span>0123456</span>
            </div>
          </div>
          <div class="justify-self-end">
            <div class="">
              <span>FOLLOW US
              </span>
            </div>
            <div class="">
              <a href=""><i class="fab fa-facebook"></i></a>
              <a href=""><i class="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
        <hr>
        <div class="text-center p-5">
          <p>Copyright 2022 © Thiết kế website bởi Dương quần hoa</p>
        </div>
      </footer>`;
    },
};
export default HomePage;