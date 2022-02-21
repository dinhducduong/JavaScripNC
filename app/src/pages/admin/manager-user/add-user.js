import Header from "../components/header"
import { add } from "../../../api/category";
import axios from "axios";
const Add_category = {
    render() {
        return /*html*/`
${Header.render()}
    <div class="flex flex-col" >
        <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
            <main id="app_admin">
        <div>
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form id="form-add-post">
              <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-3 sm:col-span-2">
                      <label for="company-website" class="block text-sm font-medium text-gray-700">
                        Tiêu đề
                      </label>
                      <div class="mt-1 flex rounded-md shadow-sm">
                        <input type="text" id="title" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </main>
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
        </div>

        `
    },
    afterRender() {
        const formAdd = document.querySelector("#form-add-post");

        formAdd.addEventListener("submit", async function (e) {
            e.preventDefault();

            // call api thêm bài viết
            add({
                title: document.querySelector("#title").value,

            }).then(() => {
                document.location.href = "http://localhost:3000/admin/dashboard/category"

            });

        });
    },
}

export default Add_category;