function solve() {
  let products = [];
  let totalPrice = 0;
  let shoppingCart = document.getElementsByClassName("shopping-cart")[0];
  let textArea = document.getElementsByTagName("textarea")[0];

  let checkoutDone = false;

  shoppingCart.addEventListener("click", function (e) {
    let btn = e.target;
    if (btn.nodeName !== "BUTTON") {
      return;
    }

    if (checkoutDone) {
      return;
    }

    if (Array.from(btn.classList).indexOf("add-product") >= 0) {
      let productElement = btn.parentElement.parentElement;

      let name =
        productElement.querySelectorAll(".product-title")[0].textContent;
      let money = productElement.querySelectorAll(".product-line-price")[0]
        .textContent;

      totalPrice += Number(money);
      textArea.textContent += `Added ${name} for ${money} to the cart.\n`;

      if (products.indexOf(name) < 0) {
        products.push(name);
      }
    } else if (Array.from(btn.classList).indexOf("checkout") >= 0) {
      checkoutDone = true;
      textArea.textContent += `You bought ${products.join(
        ", "
      )} for ${totalPrice.toFixed(2)}.`;
    }
  });
}
