// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {

     // Get all product cards
  const products = document.querySelectorAll(".card");

   // Loop through each product card
  products.forEach(card => {
    const plusBtn = card.querySelector(".fa-plus-circle");
    const minusBtn = card.querySelector(".fa-minus-circle");
    const quantitySpan = card.querySelector(".quantity");
    const priceTag = card.querySelector(".unit-price");
    const deleteBtn = card.querySelector(".fa-trash-alt");
    const likeBtn = card.querySelector(".fa-heart");

     // Clean price value: e.g., "100 $" → 100
    const unitPrice = parseFloat(priceTag.textContent.replace("$", "").trim());

    // Add Event: Increase quantity
    plusBtn.addEventListener("click", () => {
      quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
      updateTotal();
    });

     // Add Event: Decrease quantity
    minusBtn.addEventListener("click", () => {
      if (parseInt(quantitySpan.textContent) > 0) {
        quantitySpan.textContent = parseInt(quantitySpan.textContent) - 1;
        updateTotal();
      }
    });

    // Add Event: Delete product
    deleteBtn.addEventListener("click", () => {
      card.closest(".card-body").remove();
      updateTotal();
    });

    // Add Event: Like/unlike item
    likeBtn.addEventListener("click", () => {
      likeBtn.classList.toggle("liked"); // style this class in CSS
    });
  });

   // Update total price function
  function updateTotal() {
    let total = 0;

    document.querySelectorAll(".card").forEach(card => {
      const quantity = parseInt(card.querySelector(".quantity").textContent);
      const unitPrice = parseFloat(
        card.querySelector(".unit-price").textContent.replace("$", "").trim()
      );
      total += quantity * unitPrice;
    });

    document.querySelector(".total").textContent = `${total.toFixed(2)} $`;
  }
});