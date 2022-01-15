const Banner = {
    render() {
        return /*html*/`<div class="text-center p-5">
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
      </div>`;
    },
};
export default Banner;