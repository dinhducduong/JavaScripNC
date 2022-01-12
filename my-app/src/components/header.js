const Header = {
    render() {
        return /*html*/ `<div class="bg-blue-900 ">
        <a><img class="mx-auto p-3 text-1xl" src="./images/251893472_1248945045517590_3422982056399023452_n.png"
            alt="200" width="200"></a>
      </div>
      <div class="menu flex flex-wrap items-center bg-orange-400 p-3">
        <nav class="">
          <ul class="flex flex-wrap text-white">
            <li class="px-6 hover:text-gray-600"><a href="/">Trang chủ</a></li>
            <li class="px-6 hover:text-gray-600"><a href="/tuyensinh">Tuyển sinh</a></li>
            <li class="px-6 hover:text-gray-600"><a href="/daotao">Chương trình đào tạo</a></li>
            <li class="px-6 hover:text-gray-600"><a href="/gocsinhvien">Góc sinh viên</a></li>
            <li class="px-6 hover:text-gray-600"><a href="/tuyendung">Tuyển dụng</a></li>
          </ul>
        </nav>
        <div class="search ml-80">
          <input class="border" type="text" placeholder="">
          <button class="border bg-blue-900 text-white" type="submit">Tìm kiếm</button>
        </div>
      </div>`;
    },
};
export default Header;