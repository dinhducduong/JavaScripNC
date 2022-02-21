import Footer from "../components/footer";
import Header from "../components/header";


const Introduce = {
    render() {
        return /*html*/`
        <header class="">
        ${Header.render()}
        </header>
        <main class="bg-red-200" id="main">
        <div class="px-28">
            <div class="title">
                    <h1 class="text-right font-bold text-3xl py-12">GIỚI THIỆU</h1>
            </div>
            <div class="lg:grid grid-cols-2 py-10">
                <div class="">
                    <h2 class="text-4xl font-bold pb-10">GIỚI THIỆU CHUNG
                        VỀ M.O.I</h2>
                    <p>M.O.I là thương hiệu mỹ phẩm trang điểm chuyên nghiệp đầu tiên tại Việt Nam với tiêu chuẩn
                        chất lượng quốc tế và giá hợp lý dành cho phụ nữ Việt.
                        M.O.I luôn đồng hành cùng các chuyên gia hàng đầu trong nghành mỹ phẩm thế giới & những biểu
                        tượng sắc đẹp tại Việt Nam để tạo ra những dòng sản phẩm chất lượng, phù hợp với phong cách,
                        khí hậu và thu nhập của người Việt.</p>
                </div>
                <div class="justify-self-end">
                    <img src="./images/5.png">
                </div>
            </div>
        </div>
        <main>
        <footer class="footer bg-black text-white px-28">
        ${Footer.render()}
      </footer>
      `;
    }, afterRender() {
        Header.afterRender();
    }
};
export default Introduce;
