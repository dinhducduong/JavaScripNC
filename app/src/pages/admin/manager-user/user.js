import Header from "../components/header"
import { getAll } from "../../../api/user";
import { get } from "../../../api/user";
import { put } from "../../../api/user";

const User = {
    async render() {
        const { data } = await getAll();
        console.log(data)
        return /*html*/ `
        ${Header.render()}
        <div class="flex flex-col" >
        <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
            <main id="app_admin">
       
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
                                        Username
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Email
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Loại tài khoản
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
                                    <div class="text-sm text-gray-900">${post.username}</div>
                                </td>
                                
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">${post.email}</div>
                                </td>
                                
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">
                                    
                                    ${post.role == 1 ? "Thành viên" : "Admin"}
                                    <button class="btnAdmin border bg-cyan-700 rounded text-white h-10 w-30 hover:bg-red-300" data-id="${post.id}">Tài khoản admin </button>
                                    <button class="btnTv border bg-cyan-700 rounded text-white h-10 w-30 hover:bg-red-300" data-id="${post.id}">Tài khoản thành viên </button>
                                    
                                    </div>
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
        const buttonsA = document.querySelectorAll('.btnAdmin');
        const buttonsT = document.querySelectorAll('.btnTv');
        // tạo vòng lặp cho nodelist button
        buttonsA.forEach(btnAdmin => {
            // lấy ID từ thuộc tính data-id của button
            const id = btnAdmin.dataset.id;
            btnAdmin.addEventListener('click', async () => {

                const { data } = await get(id);
                console.log(id);
                put(id, {
                    email: data.email,
                    password: data.password,
                    username: data.username,
                    role: 0,

                }).then(() => {
                    document.location.href = "http://localhost:3000/admin/dashboard/user"

                });
            })
        });
        buttonsT.forEach(buttonsT => {
            // lấy ID từ thuộc tính data-id của button
            const id = buttonsT.dataset.id;
            buttonsT.addEventListener('click', async () => {

                const { data } = await get(id);
                console.log(data);
                put(id, {
                    email: data.email,
                    password: data.password,
                    username: data.username,
                    role: 1,

                }).then(() => {
                    document.location.href = "http://localhost:3000/admin/dashboard/user"

                });
            })
        });
    }
}
export default User

