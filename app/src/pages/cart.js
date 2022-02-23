import Header from "../components/header";
import Footer from "../components/footer";
import { add } from "../api/order";
import { getAll } from "../api/order";
import { reRender } from "../../utils";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import swal from 'sweetalert';

import { decreaseQuantity, increaseQuantity, removeItemInCart, getTotalPrice, getTotalList } from "../../utils/cart";

const Cart = {
  async render() {

    let cart = [];
    const numberFormat = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
    const { user } = JSON.parse(localStorage.getItem("user"));
    const { data } = await getAll();
    const dd = data.filter((orders) => orders.email === user.email);
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    }
    return /*html*/`
        <header class="">
        ${Header.render()}
      </header>
      <main class="bg-red-200 px-20" id="main">
        
        <div class="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
          <div class="flex justify-start item-start space-y-2 flex-col">
          </div>
          <div class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
            <div class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            <div class="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                <p class="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">Giỏ hàng</p>
                ${cart.map((item) => `
                <div class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                  <div class="pb-4 md:pb-8 w-full md:w-40">
                    <img class="w-full hidden md:block" src="${item.img}" alt="dress">
                  </div>
                  <div class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                    <div class="w-full flex flex-col justify-start items-start space-y-8">
                      <h3 class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">${item.title}</h3>
                      
                    </div>
                    <div class="flex justify-between space-x-8 items-start w-full">
                      <p class="text-base dark:text-white xl:text-lg leading-6">${numberFormat.format(item.price)}</p>
                     <button data-id="${item.id}" class="btn btn-increase"><i class="fa-solid fa-plus"></i></button>
                     <p class="text-base dark:text-white xl:text-lg leading-6 text-gray-800">${item.quantity}</p>
                     <button data-id="${item.id}" class="btn btn-decrease"><i class="fa-solid fa-minus"></i></button>
                      <p class="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">${numberFormat.format(item.quantity * item.price)}</p>
                      <button data-id="${item.id}" class="btn btn-remove">Xóa</button>
                    </div>
                  </div>
                </div>
                `).join("")}
              </div>
              <div class="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                  <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">TỔNG TIỀN</h3>
                  ${cart.map((item) => `  
                  
                      <div class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                        <div class="flex justify-between w-full">
                          <p class="text-base dark:text-white leading-4 text-gray-800">${item.title}</p>
                          <p class="text-base dark:text-white leading-4 text-gray-800">${item.quantity}</p>
                          <p class="text-base dark:text-gray-300 leading-4 text-gray-600">${numberFormat.format(item.quantity * item.price)}</p>
                        </div>
                      </div>
                  
                  `).join("")}
                  
                  <div class="flex justify-between items-center w-full">
                    <p class="text-base dark:text-white font-semibold leading-4 text-gray-800">Tổng:</p>
                    <p class="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">${numberFormat.format(getTotalPrice())}</p>
                  </div >
                </div >
                
              </div >
            </div >
  <div class="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
    <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Thông tin nhận hàng</h3>
    <div class="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
      <div class="flex flex-col justify-start items-start flex-shrink-0">
        <div class="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
          <div class="flex justify-start items-start flex-col space-y-2">
            <p class="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">Họ và Tên: ${user.username}</p>
          </div>
        </div>

        <div class="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M3 7L12 13L21 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <p class="cursor-pointer text-sm leading-5 ">Email: ${user.email}</p>
        </div>
      </div>
      <form id="form-add-post">

        <div class="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
          <div class="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
            <div class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
              <p class="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Địa Chỉ</p>
              <p class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600"><input id="address" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required=""></p>
              <p class="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Số điện thoại</p>
              <p class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600"><input id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required=""></p>
            </div>
            <div class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
              <p class="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Mô tả</p>
              <p class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600"><textarea id="desc" rows="6" placeholder="Your Message" class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "></textarea></p>
            </div>
          </div>
          <div class="flex w-full justify-center items-center md:justify-start md:items-start">
            <button class="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">ĐẶT HÀNG</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  
</div >
</div >
<div class="container">
	<h1 class="mb-8">
    Lịch sử đặt hàng
  </h1>

	<table class="text-left w-full">
		<thead class="bg-black flex text-white w-full">
			<tr class="flex w-full mb-4">
				<th class="p-4 w-1/4">Mã đơn hàng</th>
				<th class="p-4 w-1/4">Số lượng</th>
				<th class="p-4 w-1/4">Trạng thái</th>
				<th class="p-4 w-1/4">Tổng tiền</th>
				<th class="p-4 w-1/4">Thời gian</th>
			</tr>
		</thead>
    <!-- Remove the nasty inline CSS fixed height on production and replace it with a CSS class — this is just for demonstration purposes! -->
		<tbody class="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full bg-white">
			${dd.map((item) => `
      <tr class="flex w-full mb-4">
				<td class="p-4 w-1/4">#${item.id}</td>
				<td class="p-4 w-1/4">${item.sumSoluong}</td>
				<td class="p-4 w-1/4">${item.status == 1 ? "Đang giao hàng" : item.status == 2 ? "Đang vận chuyển" : item.status == 3 ? "Đang giao" : "Thành công"}</td>
				<td class="p-4 w-1/4">${numberFormat.format(item.sumToTal)}</td>
				<td class="p-4 w-1/4">${item.createdAt}</td>
			</tr>
      
      `)}
		</tbody>
	</table>
  <br>
</div>
</main >

  <footer class="footer bg-black text-white px-28">
    ${Footer.render()}
  </footer>
`;
  },
  afterRender() {
    var today = new Date();
    const { user } = JSON.parse(localStorage.getItem("user"));
    const cart = JSON.parse(localStorage.getItem('cart'));
    const formAdd = document.querySelector("#form-add-post");
    const btns = document.querySelectorAll('.btn');

    formAdd.addEventListener("submit", async function (e) {
      e.preventDefault();

      // call api thêm bài viết
      swal({
        title: "Are you sure?",
        text: "Bạn có chắc muốn đặt hàng không!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((isset) => {
        if (isset) {
          add({
            email: user.email,
            name: user.username,
            address: document.querySelector("#address").value,
            phone: document.querySelector("#phone").value,
            sumToTal: getTotalPrice(),
            sumSoluong: getTotalList(),
            status: 'Chưa thanh toán',
            createdAt: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + '-' + today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear(),

          }).then(() => {
            swal("Thông báo!", "Đặt hàng thành công!", "success");
            document.location.href = "http://localhost:3000/cart"
          });
        }
      });



    });
    btns.forEach(btn => {
      const id = btn.dataset.id;
      btn.addEventListener('click', () => {
        if (btn.classList.contains('btn-increase')) {
          increaseQuantity(id, () => {
            reRender(Cart, "#app");
            toastr.success("Tăng số lượng thành công");
          })
        } else if (btn.classList.contains('btn-decrease')) {
          decreaseQuantity(id, () => {
            reRender(Cart, "#app");
            toastr.success("Giảm số lượng thành công");
          })
        } else {
          removeItemInCart(id, () => {
            reRender(Cart, "#app");
          })
        }
      })
    })
    Header.afterRender();
  }
};
export default Cart;
