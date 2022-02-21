import "toastr/build/toastr.min.css";
import toastr from "toastr";
import swal from 'sweetalert';

let cart = [];
if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'))
};

export const addTocart = (newProduct, next) => {
    const existProduct = cart.find(item => item.id === newProduct.id);

    if (!existProduct) {
        cart.push(newProduct)
    } else {
        existProduct.quantity += newProduct.quantity
    }

    localStorage.setItem('cart', JSON.stringify(cart))
    next();
}
export const increaseQuantity = (id, next) => {
    cart.find(item => item.id === +id).quantity++
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
}
export const decreaseQuantity = (id, next) => {
    const currentProduct = cart.find(item => item.id === +id);
    currentProduct.quantity--;
    if (currentProduct.quantity < 1) {
        const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
        if (confirm) {
            cart = cart.filter(item => item.id !== id);
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
}
export const removeItemInCart = (id, next) => {
    swal({
        title: "Are you sure?",
        text: "Bạn có chắc muốn đặt hàng không!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((isset) => {
        if (isset) {
            cart = cart.filter(item => item.id !== +id);
            toastr.success("Xóa sản phẩm thành công");
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        next();
    });


}
export const getTotalPrice = () => {
    const dtCart = JSON.parse(localStorage.getItem('cart'));
    let sum = 0;
    let total = 0;
    dtCart.forEach((element) => {
        total = element.quantity * element.price;
        sum += total;
    });
    return sum;
}
export const getTotalList = () => {
    const dtCart = JSON.parse(localStorage.getItem('cart'));
    let list = 0;
    let total = 0;
    dtCart.forEach((element) => {
        total = element.quantity;
        list += total;
    });
    return list;
}