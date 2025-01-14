import Footer from "../components/footer";
import Header from "../components/header";
import { signin } from "../api/user";
import $ from 'jquery';
import validate from 'jquery-validation';
const Login = {
  render() {
    return /*html*/`
    <header class="">
        ${Header.render()}
      </header>
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
          <div>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
              Or
              <a href="/signup" class="font-medium  text-red-300">
              Register an account 
              </a>
            </p>
          </div>
          <form class="mt-8 space-y-6" id="formSignin">
            <input type="hidden" name="remember" value="true">
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input name="email" id="email" type="email" autocomplete="email" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
              </div>
              <div>
                <label for="password" class="sr-only">Password</label>
                <input id="password" type="password" autocomplete="current-password" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
              </div>
            </div>
      
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input id="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
      
              <div class="text-sm">
                <a href="#" class="font-medium text-red-4000 hover:text-red-400">
                  Forgot your password?
                </a>
              </div>
            </div>
      
            <div>
            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  bg-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  
                <svg class="h-5 w-5  text-red-300 group-hover:text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
                </span>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
      <footer class="footer bg-black text-white px-28">
        ${Footer.render()}
      </footer>
      `;
  },
  afterRender() {

    $("#formSignin").validate({
      rules: {
        "email": {
          required: true,
        }

      },
      messages: {

        "email": {
          required: "Không được để trống trường này!",
        }
      },
      submitHandler: function () {
        async function signins() {
          const response = await signin({
            email: document.querySelector('#email').value,
            password: document.querySelector('#password').value
          })
          // lưu thông tin user vào localStorage
          localStorage.setItem("user", JSON.stringify(response.data))
          if (response.data.user) {
            // nếu là admin thì chuyển trang
            document.location.href = "/"
          }

        }
        signins();
      }
    });

  }
};
export default Login;
