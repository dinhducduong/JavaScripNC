const Header = {
  render() {
    return /*html*/ `
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
              <a href="/"><img src="https://res.cloudinary.com/duongquanhoa/image/upload/v1644940490/lg_yebjpa.jpg"></a>
            </div>
            <div id="userlogin" class=" auth p-3 text-2xl justify-self-end text-zinc-900">
              <a href="/signin" class="hover:text-red-400"><i class="far fa-user-circle "></i></a>
              <a href="/cart" class="hover:text-red-400"><i class="fas fa-cart-plus "></i></a>
            </div>
          </div>
          <hr>
          <div class="header-buttom">
            <ul class="justify-center flex text-gray-700">
              <li class="px-10 py-6 rounded-2xl hover:text-black"><a href="/introduce">GIỚI THIỆU</a></li>
              <li class="px-10 py-6 rounded-2xl hover:text-black"><a href="/product">SẢN PHẨM</a></li>
              <li class="px-10 py-6 rounded-2xl hover:text-black"><a href="">CỘNG TÁC VIÊN</a></li>
              <li class="px-10 py-6 rounded-2xl hover:text-black"><a href="/news">TIN TỨC</a></li>
              <li class="px-10 py-6 rounded-2xl hover:text-black"><a href="">LIÊN HỆ</a></li>
            </ul>
          </div>
        `
  },
  afterRender() {
    ;
    const { user } = JSON.parse(localStorage.getItem("user"));
    const userlogin = document.querySelector("#userlogin");
    if (user) {
      if (user.role === 1) {
        userlogin.innerHTML = `
            <a href="/admin/dashboard" class="hover:text-red-400"><i class="fa-solid fa-gauge"></i></a>
            <a href="/cart" class="hover:text-red-400"><i class="fas fa-cart-plus "></i></a>
            <a href="/profile" class="hover:text-red-400">${user.username}</a>
            <button id="logout" class="text-black text-base font-medium p-2">Đăng Xuất</button>   
            `;
      } else {
        userlogin.innerHTML = `
        <a href="/cart" class="hover:text-red-400"><i class="fas fa-cart-plus "></i></a>
            <a href="/profile" class="hover:text-red-400">${user.username}</a>
            <button id="logout" class="text-black text-base font-medium p-2">Đăng Xuất</button>   
            `;
      }

    }
    const logout = document.querySelector("#logout");
    if (logout) {
      logout.addEventListener("click", () => {
        window.localStorage.removeItem("user");
        document.location.href = "/"
      });
    }
  },
}

export default Header;