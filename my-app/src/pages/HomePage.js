import data from "../data";
const Home = {
    render() {
        
        return /*html*/`<section class="title">
        <div class="font-bold py-3">
          <h3 class="text-2xl text-blue-900">TIN TỨC HỌC TẬP</h3>
        </div>
      </section>
      <section class="content">
        <div class="item-content grid grid-cols-3 gap-10">
        ${data.map((post) => `
          <article class="item border text-center">
          <img src="${post.img}" class="px-12 py-4"> 
          <div class="text-left px-12">
            <a class="font-bold hover:text-rose-700" href="/detail/${post.id}">${post.title}</a>
          <p>${post.desc}</p>
          </div>
        </article>
          `).join("")}
          
        </div>
  
      </section>
      <section class="title">
        <div class="font-bold py-3">
          <h3 class="text-2xl text-blue-900">HOẠT ĐỘNG CỦA SINH VIÊN</h3>
        </div>
      </section>
      <section class="content">
        <div class="item-content grid grid-cols-3 gap-10">
        ${data.map((post) => `
        <article class="item border text-center">
          <img src="${post.img}" class="px-12 py-4"> 
          <div class="text-left px-12">
            <a class="font-bold hover:text-rose-700" href="/detail/${post.id}">${post.title}</a>
          <p>${post.desc}</p>
          </div>
        </article>
        `).join("")}
        </div>
  
      </section><br>`;
    },
};
export default Home;