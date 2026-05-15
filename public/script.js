// Load foods
fetch("http://localhost:3000/foods")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("food-list");

    data.forEach(food => {
      const div = document.createElement("div");
      div.className = "food";

      div.innerHTML = `
        <h3>${food.name}</h3>
        <p>Price: ₹${food.price}</p>
        <input type="number" id="qty-${food.name}" value="1" min="1">
        <button onclick="orderFood('${food.name}')">Order</button>
      `;

      container.appendChild(div);
    });
  });


// Order function
function orderFood(id) {
  const qty = document.getElementById(`qty-${id}`).value;

  fetch("http://localhost:3000/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      food_id: name,
      quantity: qty
    })
  })
  .then(res => res.text())
  .then(msg => alert(msg));
}