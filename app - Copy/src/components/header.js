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
        `
    }
}

export default Header;