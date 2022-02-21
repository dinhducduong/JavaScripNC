import { signup } from "../api/user";
import Footer from "../components/footer";
import Header from "../components/header";


const Register = {
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
            <a href="/signin" class="font-medium text-red-300 ">
            Sign up an account 
            </a>
          </p>
        </div>
        <form class="mt-8 space-y-6" id="formSignup">
          <input type="hidden" value="true">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">User name</label>
              <input required id="username" type="text" autocomplete="user" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="User name">
            </div>
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input required id="email" type="text" autocomplete="email" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input required id="password" type="password" autocomplete="current-password" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
            </div>
            <div>
              <label for="confrim-password" class="sr-only">confrim-password</label>
            </div>
          </div>
    
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
    
          </div>
    
          <div>
            <button class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  bg-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                
                <svg class="h-5 w-5  text-red-300 group-hover:text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
              </span>
              Sign in
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
    const formSignup = document.querySelector('#formSignup');
    formSignup.addEventListener('submit', function (e) {
      e.preventDefault();
      signup({
        username: document.querySelector('#username').value,
        email: document.querySelector('#email').value,
        password: document.querySelector('#password').value,
        role: 0,
      }).then(() => {
        document.location.href = "signin"

      });
    });
  }
};
export default Register;
