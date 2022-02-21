import Header from "../components/header"
import { getAll } from "../../../api/products";
import { remove } from "../../../api/products";

const ProductList = {
    async render() {
        const { data } = await getAll();
        return /*html*/ `
        ${Header.render()}
        <div class="flex flex-col" >
        <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
            <main id="app_admin">
        <a href="/admin/dashboard/product/add" class="w-20 hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3">
            
            Add
        </a>
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        id
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Title
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Price
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Desc
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Role
                                    </th>
                                    <th scope="col" class="relative px-6 py-3">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                           
                            ${data
                .map(
                    (post) => /*html*/ ` 
                        
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                        
                                        <div class="ml-4">
                                            <div class="text-sm font-medium text-gray-900">
                                                ${post.id}
                                            </div>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">${post.title}</div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">${post.price}</div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ">
                                        ${post.desc}
                                    </span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <img src="${post.img}" width="50">
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <a href="/admin/dashboard/product/edit/${post.id}" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                                    <button data-id="${post.id}" class="text-indigo-600 hover:text-indigo-900 btn">Xóa</button>
                                </td>
                               
                            </tr>

                            <!-- More people... -->
                        </tbody>
                        
                    `)
                .join("")}
        
                        </table >
                    </div >
                </div >
            </div >
        </div >
            </main >
            <footer class="bg-white md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4">
                <ul class="flex items-center flex-wrap mb-6 md:mb-0">
                    <li><a href="#" class="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Terms and conditions</a></li>
                    <li><a href="#" class="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Privacy Policy</a></li>
                    <li><a href="#" class="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Licensing</a></li>
                    <li><a href="#" class="text-sm font-normal text-gray-500 hover:underline">Contact</a></li>
                </ul>
                
            </footer>
            <p class="text-center text-sm text-gray-500 my-10">
                &copy; 2019-2021 <a href="" class="hover:underline" target="_blank">Themesberg</a>. All rights reserved.
            </p>
        </div >

    `
    },
    afterRender() {
        // lấy danh sách button sau khi render
        const buttons = document.querySelectorAll('.btn');
        // tạo vòng lặp cho nodelist button
        buttons.forEach(btn => {
            // lấy ID từ thuộc tính data-id của button
            const id = btn.dataset.id;
            btn.addEventListener('click', () => {
                const confirm = window.confirm("Ban co muon xoa bai viet nay khong?");
                if (confirm) {
                    // gọi hàm delete trong folder API và bắn id vào hàm
                    remove(id).then(() => {
                        document.location.href = "http://localhost:3000/admin/dashboard/product"
                    })
                }
            })
        });
    }
}
export default ProductList

