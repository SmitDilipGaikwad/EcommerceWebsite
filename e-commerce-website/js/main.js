document.addEventListener("DOMContentLoaded", function () {
  fetch("js/products.json")
    .then(response => response.json())
    .then(data => {
      const productsSection = document.querySelector(".products");

      data.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const productImg = document.createElement("img");
        productImg.src = product.image;
        productImg.alt = product.name;

        const productName = document.createElement("h3");
        productName.textContent = product.name;

        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;

        const productPrice = document.createElement("span");
        productPrice.innerHTML = "&#8377;" + product.price; // Use HTML entity

        const addToCartBtn = document.createElement("button");
        addToCartBtn.textContent = "Add to Cart";
        addToCartBtn.addEventListener("click", () => {
          // Add to cart functionality here
        });

        productDiv.appendChild(productImg);
        productDiv.appendChild(productName);
        productDiv.appendChild(productDescription);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(addToCartBtn);

        productsSection.appendChild(productDiv);
      });
    })
    .catch(error => console.error("Error fetching products:", error));
});
  