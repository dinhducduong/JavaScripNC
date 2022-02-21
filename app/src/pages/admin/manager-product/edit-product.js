import Header from "../components/header"
import { get } from "../../../api/products";
import { put } from "../../../api/products";
import { getAll } from "../../../api/category";
import axios from "axios";
const Edit_product = {
  async render(id) {

    const { data } = await get(id);
    const d = await getAll();
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
                        
                        <input value="${data.title}" type="text" id="title" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="">
                      </div>
                    </div>
                  </div>
                  <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-3 sm:col-span-2">
                      <label for="company-website" class="block text-sm font-medium text-gray-700">
                        Giá
                      </label>
                      <div class="mt-1 flex rounded-md shadow-sm">
                        <input value="${data.price}" type="text" id="price" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="">
                      </div>
                    </div>
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                  <label for="country" class="block text-sm font-medium text-gray-700">Danh mục</label>
                  <select id="category" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  ${d.data.map((itemCate) =>/* html */ `
                  <option value="${itemCate.id}" ${itemCate.id === +data.category ? "selected" : ""}>${itemCate.title}</option>
                `).join("")}
                  </select>
                </div>
                </div>
                  <div>
                    <label for="about" class="block text-sm font-medium text-gray-700">
                      Mô tả
                    </label>
                    <div class="mt-1">
                      <textarea id="desc"rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="">${data.desc}</textarea>
                    </div>
                    
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700">
                    Ảnh
                    </label>
                    <div class="mt-1 flex items-center">
                      <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                        <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                      <button type="button" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Change
                      </button>
                    </div>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700">
                      Chọn ảnh
                    </label>
                    
                    <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div class="space-y-1 text-center">
                      <img src="${data.img}" id="img-preview" width="100">
                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div class="flex text-sm text-gray-600">
                          <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            <span>Upload a file</span>
                            <input id="img-post" type="file" class="">
                          </label>
                          <p class="pl-1">or drag and drop</p>
                        </div>
                        <p class="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button data-id="${data.id}" class="btn inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
    const imgPreview = document.querySelector("#img-preview");
    const imgPost = document.querySelector("#img-post");
    let imgLink = "";

    imgPost.addEventListener('change', function (e) {
      imgPreview.src = URL.createObjectURL(e.target.files[0]);
    });
    const btn = document.querySelector(".btn");
    const { id } = btn.dataset;
    const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/duongquanhoa/upload";
    const CLOUDINARY_PRESET = "qdqbxnnx";

    formAdd.addEventListener("submit", async function (e) {
      e.preventDefault();
      const file = imgPost.files[0];
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", CLOUDINARY_PRESET);

        // call api cloudinary
        const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
          headers: {
            "Content-Type": "application/form-data"
          }
        })
        imgLink = data.url
      }
      // call api thêm bài viết
      put(id, {
        title: document.querySelector("#title").value,
        img: imgLink ? imgLink : imgPreview.src,
        desc: document.querySelector("#desc").value,
        price: document.querySelector("#price").value,
        category: document.querySelector("#category").value,

      }).then(() => {
        document.location.href = "http://localhost:3000/admin/dashboard/product"

      });

    });
  },
}

export default Edit_product;