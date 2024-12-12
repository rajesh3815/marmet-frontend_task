let data;
const item_name = document.querySelector(".item-name");
const item_image = document.querySelector(".item-image");
const item_price = document.querySelector(".item-price");
const item_quantity = document.querySelector(".item-count");
const item_subtotal = document.querySelector(".item-subtotal");
const sub_total_price = document.querySelector(".sub_total_price");
const total_price = document.querySelector(".total_price");

//fetching the details
const fetchProductDetails = async () => {
  try {
    const response = await fetch(
      "https://cdn.shopify.com/s/files/1/0883/2188/4479/files/apiCartData.json?v=1728384889"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    data = await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

(async () => {
  await fetchProductDetails();
  let image = document.createElement("img");
  image.src = data.items[0].featured_image.url;
  item_image.appendChild(image);
  item_name.textContent = data.items[0].product_title;
  item_price.textContent =
    "Rs." + data.items[0].presentment_price.toLocaleString("en-US");
  item_quantity.textContent = data.items[0].quantity;
  item_subtotal.textContent =
    "Rs." +
    (data.items[0].quantity *
      data.items[0].presentment_price).toLocaleString("en-US");
  sub_total_price.textContent =
    "Rs." + data.original_total_price.toLocaleString("en-US") + ".00";
  total_price.textContent =
    "Rs." + data.original_total_price.toLocaleString("en-US") + ".00";
})();
