document.addEventListener("DOMContentLoaded", function () {
  const productsSection = document.querySelector(".products");

  fetch("js/products.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name;
        productCard.appendChild(productImage);

        const productName = document.createElement("h2");
        productName.textContent = product.name;
        productCard.appendChild(productName);

        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;
        productCard.appendChild(productDescription);

        const productPrice = document.createElement("p");
        productPrice.textContent = "$" + product.price;
        productCard.appendChild(productPrice);

        productsSection.appendChild(productCard);
      });
    })
    .catch((error) => console.error("Error fetching products:", error));
});
